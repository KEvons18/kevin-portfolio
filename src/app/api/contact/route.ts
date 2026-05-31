import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function validateBody(body: unknown): { name: string; email: string; message: string } | string {
  if (!body || typeof body !== "object") {
    return "Invalid request body";
  }
  const data = body as Record<string, unknown>;
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!data.email || typeof data.email !== "string" || !data.email.includes("@")) {
    return "Valid email is required";
  }
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    message: data.message.trim(),
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = validateBody(body);

    if (typeof validated === "string") {
      return NextResponse.json({ error: validated }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const transporter = createTransporter();
    const recipient = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: validated.email,
      subject: `Portfolio Contact from ${validated.name}`,
      text: `Name: ${validated.name}\nEmail: ${validated.email}\n\nMessage:\n${validated.message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6D071A;">New Portfolio Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; width: 80px;">Name</td>
              <td style="padding: 8px 12px;">${validated.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${validated.email}">${validated.email}</a></td>
            </tr>
          </table>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${validated.message}</div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #666; font-size: 12px;">Sent from kevin-portfolio.vercel.app</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

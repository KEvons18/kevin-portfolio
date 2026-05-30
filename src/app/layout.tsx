import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Remon George | Data Analyst & Computer Science & AI Student",
  description:
    "Portfolio of Kevin Remon George — Computer Science and AI student at Cairo University, Certified Microsoft Power BI Specialist. Specializing in data analytics, business intelligence, and full-stack development.",
  keywords: [
    "Kevin Remon George",
    "Data Analyst",
    "Power BI",
    "Cairo University",
    "Computer Science",
    "AI",
    "Portfolio",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Kevin Remon George" }],
  openGraph: {
    title: "Kevin Remon George | Data Analyst & CS/AI Student",
    description:
      "Computer Science and AI student at Cairo University. Certified Microsoft Power BI Specialist.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}

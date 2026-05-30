# Kevin Remon George — Portfolio

A premium personal portfolio website built with Next.js, React, TypeScript, TailwindCSS, and Framer Motion.

## Tech Stack

- **Next.js** (App Router) — React framework with static generation
- **TypeScript** — Type safety
- **TailwindCSS** — Utility-first styling
- **Framer Motion** — Animations and transitions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles + Tailwind theme
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Home page (assembles all sections)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Achievements, Contact
│   └── ui/               # Button, Badge, Card, SectionTitle, AnimatedCounter, etc.
├── config/
│   └── social.ts         # All site data (projects, skills, experience, social links)
├── hooks/
│   ├── useTypewriter.ts  # Typing animation hook
│   └── useScrollProgress.ts
└── lib/
    └── utils.ts          # Utility functions
```

## Customization

### 1. Social Links & Personal Info
Edit `src/config/social.ts` to update:
- LinkedIn and GitHub URLs
- Email address
- Name and title
- Projects, skills, experience data

### 2. Resume Download
Place your PDF resume in the `public/` folder as `resume.pdf`.

### 3. Colors
Edit the `@theme inline` block in `src/app/globals.css` to customize the color palette.

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Static Export
```bash
next build
# Output in ./out — deploy to any static host
```

## SEO

- Meta tags configured in `layout.tsx`
- Open Graph tags for social sharing
- Semantic HTML structure
- Responsive and mobile-first

# AGENTS.md — Permanent Project Guide

## Project Purpose

Personal portfolio website for **Kevin Remon George** — a Data Analyst and Computer Science & AI student at Cairo University. The site showcases his skills, projects, professional experience, certifications, and provides a contact mechanism for potential employers and collaborators.

Live at: [kevin-portfolio.vercel.app](https://kevin-portfolio.vercel.app)

---

## Technology Stack

| Layer | Technology | Version/Config |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Language | TypeScript | ^5 (strict mode) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) | ^4 |
| Animation | Framer Motion | ^12.40.0 |
| Font | Inter (Google Fonts via `next/font/google`) | — |
| Build | Webpack (forced via `--webpack`) | — |
| Package Manager | npm | — |
| Linting | ESLint with `eslint-config-next` | ^9 |
| Deployment | Vercel (auto-deploy from GitHub) | — |

---

## Folder Structure

```
portfolio/
├── public/                    # Static assets (served at /)
│   ├── resume.pdf             # Downloadable resume
│   ├── file.svg, globe.svg, next.svg, vercel.svg, window.svg
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind theme + custom utilities
│   │   ├── layout.tsx         # Root layout, SEO metadata
│   │   └── page.tsx           # Single-page composition
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Fixed nav with scroll progress, active section indicator, mobile menu
│   │   │   └── Footer.tsx     # Social links + copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Full-viewport hero with particles, typewriter, CTAs
│   │   │   ├── About.tsx      # Bio + education + strength cards
│   │   │   ├── Skills.tsx     # Tabbed skill categories with progress bars
│   │   │   ├── Projects.tsx   # Project cards with 3D tilt + tech badges
│   │   │   ├── Experience.tsx # Dark-themed timeline (education + work)
│   │   │   ├── Achievements.tsx # Stats counters + certification cards + languages
│   │   │   └── Contact.tsx    # Contact form (mailto:) + download resume
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx  # Spring-animated number counter
│   │       ├── Badge.tsx           # Tech/label badges (default, outline, gold)
│   │       ├── Button.tsx          # Polymorphic button (a/button) with download support
│   │       ├── Card.tsx            # Container with hover-lift effect
│   │       ├── FloatingParticles.tsx # Canvas particle system for hero
│   │       ├── ScrollToTop.tsx     # Fixed bottom-right scroll-to-top button
│   │       └── SectionTitle.tsx    # Animated section header (label + title + subtitle)
│   ├── config/
│   │   └── social.ts          # ALL site data (site info, projects, skills, experience, etc.)
│   ├── hooks/
│   │   ├── useActiveSection.ts     # IntersectionObserver-based section tracking
│   │   ├── useScrollProgress.ts    # Scroll percentage + threshold detection
│   │   └── useTypewriter.ts       # Character-by-character typing loop
│   └── lib/
│       └── utils.ts           # cn() classname merger
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts             # Security headers configuration
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## Architecture Overview

### Page Structure (Single Page Application)

The site is a single Next.js page (`src/app/page.tsx`) that composes all sections:

```
Navbar (fixed)
├── Hero (full-viewport, gradient bg, particles)
├── About (bio + education + strength cards)
├── Skills (tabbed categories)
├── Projects (project cards with 3D tilt)
├── Experience (timeline)
├── Achievements (counters + certifications + languages)
├── Contact (form + resume download + social links)
Footer
ScrollToTop (fixed button)
```

### Data Flow

- **All content data** lives in `src/config/social.ts` (single source of truth)
- Components import from `social.ts` via `siteConfig`, `projectsData`, `skillsData`, etc.
- **No backend**, no API routes, no database
- Contact form uses `mailto:` protocol (opens default email client)
- Resume download is a static file in `public/` served at `/resume.pdf`
- No state management library needed (only React `useState` for form state)

### Routing

- Single page with hash-based section navigation (`#hero`, `#about`, `#skills`, `#projects`, `#experience`, `#achievements`, `#contact`)
- Navbar uses `scrollIntoView({ behavior: "smooth" })`

### Rendering

- All section/layout components are `"use client"` (client-side) due to Framer Motion and scroll interactions
- `Badge.tsx` and `layout.tsx` are server components
- `page.tsx` is a server component composing client children

---

## Coding Standards

### TypeScript
- **Strict mode** enabled in `tsconfig.json`
- Explicit interfaces for component props (e.g., `interface ButtonProps`)
- No `any` types — use `unknown` with type guards when needed
- Use `@/` path alias for `src/` imports

### Component Patterns
- Prefer named exports for pages, default exports for components
- Client components marked with `"use client"` directive at top
- One component per file
- Props destructured at the function signature

### Styling
- Tailwind utility classes exclusively (no CSS modules, no styled-components)
- Use `cn()` utility for conditional class merging
- Consistent spacing: `section-padding` for section vertical padding, `max-w-content` for containers
- Custom colors referenced as `bg-burgundy`, `text-gold`, etc.

### File Naming
- PascalCase for component files: `Button.tsx`, `Navbar.tsx`
- camelCase for hooks and utilities: `useTypewriter.ts`, `utils.ts`
- kebab-case for config files: `postcss.config.mjs`

---

## Design System

### Color Palette

| Token | HEX | Usage |
|---|---|---|
| `burgundy` | `#6D071A` | Primary brand, buttons, links, active indicators |
| `burgundy-light` | `#8B0A24` | Button hover state |
| `burgundy-dark` | `#4D0512` | Dark variants |
| `gold` | `#C9A84C` | Accent, special highlights, gradient text |
| `gold-light` | `#E0C56A` | Gold hover |
| `fog` | `#D9D9D9` | Borders, dividers |
| `fog-light` | `#F0F0F0` | Subtle backgrounds |
| `fog-dark` | `#B0B0B0` | Muted borders |
| `surface` | `#F5F5F5` | Section backgrounds |
| `dark` | `#111111` | Primary text |
| `dark-secondary` | `#1A1A1A` | Dark section backgrounds |
| `muted` | `#666666` | Secondary text |
| `white` | `#FFFFFF` | Card backgrounds, nav background |

### Typography
- Font: Inter (variable) via next/font/google
- CSS variable: `--font-inter`
- Fallback: `system-ui, sans-serif`
- Selection: `bg-burgundy/20` with `text-burgundy`

### Custom Utility Classes
- `.glass` — white frosted glass (`bg-white/70 backdrop-blur-xl`)
- `.glass-dark` — dark frosted glass (`bg-dark/80 backdrop-blur-xl`)
- `.text-gradient` — burgundy-to-gold gradient text
- `.section-padding` — `px-6 sm:px-12 lg:px-24 py-24 sm:py-32`
- `.max-w-content` — `max-w-7xl mx-auto`

### UI/UX Guidelines
- **Animations:** Staggered child entrance via Framer Motion `containerVariants`/`itemVariants`
- **Scroll-triggered:** Sections use `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- **Hover effects:** Scale transforms (`scale: 1.02`), color transitions, shadow elevation
- **Navigation:** Smooth-scroll behavior on `html` element
- **Active section:** Animated underline in Navbar tracks scroll position
- **Mobile:** Hamburger menu with staggered slide-in animation, responsive padding breakpoints

---

## Security Requirements

- CSP header enforced (see `next.config.ts`)
- Permissions-Policy restricts camera, microphone, geolocation
- X-Frame-Options: DENY prevents clickjacking
- X-Content-Type-Options: nosniff prevents MIME sniffing
- No environment secrets in source code
- `.env*` files gitignored (except `.env.example`)
- Form submission uses `mailto:` — no backend data collection
- All external links use `target="_blank"` with `rel="noopener noreferrer"`

---

## Performance Requirements

- Static assets in `public/` served directly by CDN (Vercel)
- Framer Motion animations are GPU-accelerated (transform/opacity only)
- Inter font loaded with `display: "swap"` to prevent layout shift
- Responsive images and layouts via Tailwind breakpoints
- No heavy dependencies — minimal bundle size
- Canvas particle system clears animation frame on unmount

---

## Rules for Future AI Agents

1. **Read AGENTS.md first** — This file is your primary context. Always start here before making changes.
2. **Update PROJECT_CONTEXT.md** after completing any major feature, fix, or refactor.
3. **Update TODO.md** when adding or completing tasks — keep it current.
4. **Single source of truth for data** is `src/config/social.ts`. Never duplicate data elsewhere.
5. **Use the `cn()` utility** for conditional Tailwind classes — never write raw ternary class strings.
6. **All new components** should follow existing patterns: Tailwind for styling, Framer Motion for animations, TypeScript interfaces for props.
7. **Client components** (`"use client"`) are the norm — only use server components for static, non-interactive content.
8. **Don't add backend or databases** — the site is intentionally static. Keep it that way.
9. **Don't add external UI libraries** — all components are hand-built to match the design system.
10. **Color palette** is defined in `globals.css` via `@theme inline`. Use Tailwind token names, not raw hex values.
11. **Mobile-first responsive design** — test at all breakpoints before committing changes.
12. **Download attributes** on `motion.a` need programmatic handling (see `Button.tsx` handleClick) — Framer Motion doesn't reliably forward `download` to the DOM.
13. **Security headers** are in `next.config.ts` — don't modify without updating `SECURITY_AUDIT.md`.

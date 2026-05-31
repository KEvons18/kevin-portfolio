# PROJECT_CONTEXT.md — Current State Snapshot

**Last updated:** 2026-05-31

---

## Existing Pages

| Page | Route | Description |
|---|---|---|
| Home (single page) | `/` | All sections composed on one scrollable page |

No other pages exist. The site is intentionally a single-page application.

---

## Existing Components

### Layout Components
| Component | File | Features |
|---|---|---|
| Navbar | `src/components/layout/Navbar.tsx` | Fixed position, scroll-aware background, progress bar, active section indicator with animated underline, mobile hamburger menu with staggered animation |
| Footer | `src/components/layout/Footer.tsx` | Dark background, logo, social links (LinkedIn/GitHub) with hover animations, dynamic copyright year |

### Section Components
| Component | File | Features |
|---|---|---|
| Hero | `src/components/sections/Hero.tsx` | Full-viewport, gradient bg, floating particles canvas, typewriter effect (Data Analyst / BI Specialist / Python Developer / AI Enthusiast), 2 CTA buttons, social icons, bounce-scroll chevron |
| About | `src/components/sections/About.tsx` | Two-column: intro paragraph + education card (degree, institution, period, coursework tags), strength cards (2x2 grid) |
| Skills | `src/components/sections/Skills.tsx` | Tabbed category selector, skill cards with animated progress bars (varied widths based on skill name length), hover effects |
| Projects | `src/components/sections/Projects.tsx` | 3D tilt on mouse move, project cards with icon/year/description/tech badges/GitHub link, "Template" badge for placeholder projects |
| Experience | `src/components/sections/Experience.tsx` | Dark-themed timeline, combines education + work, animated dot markers (gold for education, burgundy for work), staggered bullet-point entrance |
| Achievements | `src/components/sections/Achievements.tsx` | 3 animated stat counters (certifications, projects, languages), certification cards, languages grid |
| Contact | `src/components/sections/Contact.tsx` | Two-column: contact info + email + social + resume download, contact form with Name/Email/Message fields, submits via fetch to API route |

### API Routes
| Route | File | Method | Description |
|---|---|---|---|
| `/api/contact` | `src/app/api/contact/route.ts` | POST | Accepts name/email/message, validates input, sends email via nodemailer + Gmail SMTP |

### UI Components
| Component | File | Features |
|---|---|---|
| AnimatedCounter | `src/components/ui/AnimatedCounter.tsx` | Spring-animated number with suffix, triggered on viewport entry |
| Badge | `src/components/ui/Badge.tsx` | Three variants (default/outline/gold), used for tech tags |
| Button | `src/components/ui/Button.tsx` | Polymorphic (motion.a / motion.button), 3 variants (primary/outline/ghost), 3 sizes, programmatic download handler |
| Card | `src/components/ui/Card.tsx` | Container with hover-lift animation (y: -4) |
| FloatingParticles | `src/components/ui/FloatingParticles.tsx` | Canvas-based, 40 burgundy dots drifting slowly, handles resize |
| ScrollToTop | `src/components/ui/ScrollToTop.tsx` | Fixed bottom-right, appears after 400px scroll, smooth scroll to top |
| SectionTitle | `src/components/ui/SectionTitle.tsx` | Animated section header with underline bar that grows from width 0 to 60 |

### Custom Hooks
| Hook | File | Purpose |
|---|---|---|
| useActiveSection | `src/hooks/useActiveSection.ts` | IntersectionObserver tracking, rootMargin -45%, detects which section is in the middle 10% of viewport |
| useScrollProgress | `src/hooks/useScrollProgress.ts` | Returns scroll progress (0-1) and scrolled boolean (threshold > 50px) |
| useTypewriter | `src/hooks/useTypewriter.ts` | Infinite type/delete loop with configurable speed, uses refs to avoid stale closures |

---

## Existing Features

- **Smooth-scroll navigation** with active section tracking
- **Responsive design** with mobile hamburger menu
- **Typewriter effect** cycling through role titles in Hero
- **Canvas particle system** in Hero background
- **Tabbed skill categories** with animated progress bars
- **3D tilt effect** on project cards (mouse-driven perspective transform)
- **Animated stat counters** using spring physics
- **Scroll progress bar** in Navbar
- **Dark/light themed sections** (Experience uses dark theme)
- **Contact form** via API route (nodemailer + Gmail SMTP)
- **Resume download** with programmatic download handler
- **Scroll-to-top button**
- **SEO metadata** with Open Graph tags
- **Security headers** (CSP, Permissions-Policy, X-Frame-Options, X-Content-Type-Options)
- **Selection styling** (burgundy theme)

---

## Data Content

All data in `src/config/social.ts`:

| Data | Count | Details |
|---|---|---|
| Projects | 4 | 3 functional GitHub repos, 1 placeholder (Music Player) |
| Skills | 4 categories | Data & BI Tools (7), Programming Languages (5), Frameworks & Libraries (3), Core Competencies (8) |
| Experience | 1 entry | Freelance Data Analyst, Jan 2025 - Present |
| Achievements | 2 | Microsoft Power BI Specialist (DEPI), General Level Certificate (DECI) |
| Education | 1 | B.Sc. CS & AI, Cairo University (2024-2028) |
| Languages | 2 | Arabic (Native), English (Professional) |

---

## Current Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^12.40.0",
    "next": "16.2.6",
    "nodemailer": "^6.x",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

---

## Known Bugs

1. **Resume download with Framer Motion** — Fixed by implementing programmatic download handler in `Button.tsx`. The `motion.a` component from Framer Motion does not reliably forward the `download` attribute to the DOM. The fix creates a temporary `<a>` element on click.

---

## Technical Debt

| Item | Severity | Details |
|---|---|---|
| Hardcoded phone number | Medium | Phone `(+20) 1224431131` is exposed in source as PII; acceptable for portfolio purposes but flagged |
| PostCSS vulnerability | Low | Moderate XSS in transitive PostCSS dependency (GHSA-qx2v-qp2m-jg93); can't fix without breaking Next.js |
| SMTP credentials in env vars | Low | Requires Gmail App Password; user must configure env vars on Vercel |
| Static data in config | Low | All content hardcoded in `social.ts`; no CMS or admin panel |
| No unit tests | Medium | No test framework configured |
| Duplicate `.vercel` entry in `.gitignore` | Low | Line 37 and line 53 both have `.vercel` |

---

## Areas Currently Under Development

- None. The site is feature-complete for its initial launch.
- Future improvements tracked in `TODO.md`.

---

## Deployment

- **Platform:** Vercel
- **Auto-deploy:** From GitHub `master` branch
- **Project ID:** `prj_H0vxVyZ8QbiRjPfHq62GcmT5fpCN`
- **Build command:** `next build --webpack`
- **Environment variables required:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

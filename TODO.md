# TODO.md — Prioritized Task List

**Last updated:** 2026-05-31

---

## High Priority

### Missing Features
- [ ] **Image assets needed** — Hero section and project cards lack personal photos, project screenshots, or visual branding (currently only SVG icons from Next.js default template exist in `public/`)
- [ ] **Project links validation** — 3 of 4 project GitHub URLs need verification that repos are public and accessible
- [ ] **Actual resume content** — `public/resume.pdf` was copied from `Resume_final.pdf`; verify it's the intended final version

### UI Improvements
- [ ] **Loading state** — No loading skeleton or spinner during initial page load (especially for font and Framer Motion bundle)
- [ ] **Image optimization** — No images are currently used; if added, ensure they use Next.js `<Image>` component with proper sizing
- [ ] **Focus visible indicators** — Some interactive elements may lack visible focus rings for keyboard navigation

### Accessibility Improvements
- [ ] **Keyboard navigation audit** — Verify all interactive elements are reachable and operable via keyboard (Tab, Enter, Escape)
- [ ] **Skip-to-content link** — Add a skip navigation link as the first focusable element
- [ ] **ARIA labels audit** — Section `<section>` elements should have `aria-labelledby` referencing their headings; verify screen reader announcements
- [ ] **Color contrast check** — Some text combinations (muted on surface, gold on white) may not meet WCAG AA standards
- [ ] **Mobile menu accessibility** — Hamburger button needs `aria-expanded` dynamic attribute; menu items should trap focus when open

### Performance Optimizations
- [ ] **Bundle analysis** — Run `next build` with bundle analyzer to identify large dependencies; Framer Motion is the heaviest dependency
- [ ] **Image optimization** — If images are added, use Next.js Image component with WebP/AVIF and lazy loading
- [ ] **Preload critical assets** — Consider preloading the Inter font and hero-above-fold content

---

## Medium Priority

### Missing Features
- [ ] **Analytics** — No visitor tracking (Google Analytics, Plausible, or similar); consider adding privacy-focused analytics
- [ ] **Blog/Articles section** — No blog capability; could add a simple markdown-based blog for data analysis articles
- [ ] **Testimonials section** — No client or colleague testimonials; would enhance credibility
- [ ] **Dark mode toggle** — Site uses a predominantly light theme with one dark section; dark mode support would improve UX

### UI Improvements
- [ ] **Smooth section transitions** — Sections currently snap into view on scroll; consider adding parallax or reveal animations between sections
- [ ] **Better mobile skill tabs** — Skill category tabs are horizontally scrollable on mobile but have no visual scroll hint (fading edge or arrow indicator)
- [x] **Contact form feedback** — Replaced `mailto:` with nodemailer API route; form now sends email via Gmail SMTP and shows success/error states
- [ ] **Active nav indicator for hero** — The Navbar's active section indicator doesn't have a section for "hero"; it defaults before any section is scrolled into view but has no visual indicator

### Code Quality Improvements
- [ ] **Extract magic numbers** — Several inline numeric values (e.g., scroll threshold `400` in ScrollToTop, `50` in useScrollProgress, `-45%` rootMargin in useActiveSection) should be named constants
- [ ] **Add PropTypes documentation** — Component props lack JSDoc comments; would improve IDE intellisense
- [ ] **Standardize animation variants** — Many sections define their own `containerVariants`/`itemVariants`; extract to a shared animation config
- [ ] **Remove duplicate `.gitignore` entry** — Line 53 has an extra `.vercel` entry that duplicates line 37
- [ ] **No test suite** — Consider adding Vitest + React Testing Library for component tests

### Mobile Responsiveness Improvements
- [ ] **Hero particle performance** — Canvas particle system may lag on low-end mobile devices; reduce particle count or disable on mobile
- [ ] **Timeline card sizing** — Experience timeline cards may be too narrow on small screens; verify responsive breakpoints
- [ ] **Skill progress bar widths** — Progress bar widths are calculated from `skill.name.length` which is arbitrary; should either be meaningful data or removed

### Security Improvements
- [ ] **Phone number obfuscation** — Hardcoded phone number `(+20) 1224431131` in `social.ts:6` is publicly exposed; consider removing or using a contact-form-only approach
- [ ] **Email obfuscation** — Email `Kevinrgeorge2006@gmail.com` is in plaintext; could use JavaScript encoding or a contact-form backend to reduce scraping

---

## Low Priority

### Missing Features
- [ ] **Print-friendly resume page** — A dedicated `/resume` page with print stylesheets for better formatting than direct PDF download
- [ ] **Custom 404 page** — Currently uses Next.js default 404; add a branded 404 page
- [ ] **RSS feed** — If blog is added, include an RSS/Atom feed
- [ ] **Service worker** — Offline support via service worker for basic page caching

### UI Improvements
- [ ] **Favicon** — Currently using Next.js default favicon; replace with a branded favicon
- [ ] **Better placeholder handling** — Music Player project is marked as "placeholder" but the GitHub link still navigates; should show "Coming Soon" state
- [ ] **Scrollbar styling** — Custom scrollbar styling could match the burgundy theme
- [ ] **Animated section dividers** — Sections could have subtle divider graphics between them (wave, slant, or gradient transitions)

### Performance Optimizations
- [ ] **Font subsetting** — Inter font is loaded with full latin subset; consider `subsets: ["latin"]` with preloading
- [ ] **CSS purge optimization** — Tailwind v4 should handle this, but verify unused utility classes aren't in the bundle
- [ ] **Reduce Framer Motion bundle** — Consider dynamic import for heavy animation components only used below the fold

### Code Quality Improvements
- [ ] **Type more strictly** — Some props use `Record<string, unknown>` in Button.tsx; could be improved with proper prop typing
- [ ] **Environment variables** — `.env.example` exists but no components actually use `process.env` values; consider migrating config values to env vars for deploy-time configuration
- [ ] **Add CHANGELOG.md** — Track notable changes per version
- [ ] **README improvements** — Add screenshots, demo GIF, or live demo badge

---

## Completed Items

- [x] **Resume download fix** — Framer Motion `motion.a` doesn't forward `download` attribute; implemented programmatic download handler in `Button.tsx`
- [x] **Resume PDF placement** — Copied `Resume_final.pdf` to `public/resume.pdf`
- [x] **Security headers** — Added CSP, Permissions-Policy, X-Frame-Options, X-Content-Type-Options in `next.config.ts`
- [x] **Security audit** — Created `SECURITY_AUDIT.md` with findings and fixes
- [x] **Environment template** — Created `.env.example` with documented variables
- [x] **Gitignore cleanup** — Added IDE, OS, and swap file entries; excluded `.env.example` from ignore
- [x] **Contact form email sending** — Replaced broken `mailto:` with nodemailer API route using Gmail SMTP; server-side validation, HTML email template, loading/error/success states

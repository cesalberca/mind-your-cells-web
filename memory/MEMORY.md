# Mind Your Cells — Project Memory

## Project Overview
- Landing page for Adriana Blanco Durán's wellness coaching brand "Mind Your Cells"
- Next.js 16.1.6, App Router, Turbopack, next-intl v4, Tailwind CSS v4
- Public (no password), indexable, `/chat` → Google Calendar redirect, sitemap at `/sitemap.xml`
- Booking URL: `https://calendar.app.google/yytTRx1Xr5C17CtY8`

## Tech Stack
- **Middleware**: `proxy.ts` (not middleware.ts) — exports `default function proxy`
- **Fonts**: `next/font/local` — Mellow (display/titles), Satoshi (body/sans), Playfair (italics only)
- **Font CSS variables** (set on `<body>` via Next.js localFont):
  - `--font-mellow` → Mellow font (variable name in layout: `variable: '--font-mellow'`)
  - `--font-satoshi` → Satoshi font (variable: `'--font-satoshi'`)
  - `--font-playfair` → Playfair Display (variable: `'--font-playfair'`)
- **Tailwind font utilities** (mapped in `globals.css @theme`):
  - `font-display` → `var(--font-mellow)` — used for big titles/display text
  - `font-sans` → `var(--font-satoshi)` — used for body/UI text
  - `font-serif` → `var(--font-playfair)` — used only for italics
- **Base CSS rules**: h1–h6 → `var(--font-display)` (Mellow), em/i → `var(--font-serif)` (Playfair)
- **Italics rule**: ONLY for single emphasis words via `<em>` or `<i>`, never full sentences or titles
- **Analytics**: Fathom `trackGoal()` on all CTAs — goals in `lib/fathom-goals.ts`
- **Email**: Resend (`resend` npm package) — double opt-in with JWT confirmation
- **Env vars**: `RESEND_API_KEY`, `RESEND_SEGMENT_ID`, `JWT_SECRET`, `RESEND_EMAIL_FROM`, `NEXT_PUBLIC_URL`

## Brand Colors (Tailwind v4)
- `stone` #333233, `stone-light` #3d3b3c
- `terracotta` #682e2c, `terracotta-light` #7a3836, `soft-terracotta` #a67d7b
- `ceramic` #dedbd5, `crude-ceramic` #b1aa9f, `cream` #f5f0eb

## i18n Routing
- **Default locale**: `en` (no URL prefix) — `localePrefix: 'as-needed'`
- **Spanish locale**: `/es/` prefix
- URLs:
  - EN: `/`, `/about-us`, `/plans`, `/privacy-policy`, `/legal-notice`
  - ES: `/es`, `/es/nosotros`, `/es/planes`, `/es/privacidad`, `/es/aviso-legal`
- **Home href helper**: `locale === 'es' ? '/es' : '/'`
- **About href helper**: `locale === 'es' ? '/es/nosotros' : '/about-us'`
- **Plans href helper**: `locale === 'es' ? '/es/planes' : '/plans'`
- **Language switcher**: EN→ES: `/es`, ES→EN: `/`
- Config: `i18n/routing.ts` — imports `Locale` enum and `locales` from `core/i18n/`

## App Directory Structure
- `app/[locale]/page.tsx` → imports `HomePage` from `features/home/delivery/home.page`
- `app/[locale]/about-us/page.tsx` → imports `AboutPage` from `features/about/delivery/about.page`
- `app/[locale]/plans/page.tsx` → imports `PlansPage` from `features/plans/delivery/plans.page`
- `app/[locale]/privacy-policy/page.tsx` → imports `PrivacyPage` from `features/privacy/delivery/privacy.page`
- `app/[locale]/legal-notice/page.tsx` → imports `LegalPage` from `features/legal/delivery/legal.page`
- `app/[locale]/newsletter/confirm/page.tsx` → imports `NewsletterConfirmPage`
- `app/api/newsletter/route.ts` — sends JWT confirmation email (double opt-in)
- `app/api/newsletter/confirm/route.ts` — verifies JWT, adds to Resend audience

## Feature Directory Structure
- `features/home/delivery/home.page.tsx`
- `features/about/delivery/about.page.tsx` (component: `AboutPage`)
- `features/plans/delivery/plans.page.tsx` (component: `PlansPage`)
- `features/privacy/delivery/privacy.page.tsx` (component: `PrivacyPage`)
- `features/legal/delivery/legal.page.tsx` (component: `LegalPage`)
- `features/newsletter/delivery/newsletter-form.tsx` (imported by footer)
- `features/newsletter/delivery/newsletter-confirm.page.tsx`
- `features/newsletter/confirm/post-confirm-tasks.ts` — sends welcome email after confirm
- `features/email/delivery/templates/email-template.tsx`
- `features/email/delivery/components/button/email-button.tsx`
- `features/email/delivery/components/link/email-link.tsx`
- `emails/transactional/newsletter-confirmation-email.tsx`
- `emails/transactional/newsletter-welcome-email.tsx`

## Core Utilities
- `core/i18n/locale.ts` — `Locale` enum: `EN = 'en'`, `ES = 'es'`
- `core/i18n/locales.ts` — `locales` array and `Locales` type
- `core/utils/base-url.ts` — `process.env.NEXT_PUBLIC_URL ?? 'https://www.mindyourcells.com'`
- `core/jsonld/sanitize-json-ld.ts` — XSS-safe JSON stringify
- `core/jsonld/json-ld.ts` — typed wrapper calling sanitize
- `core/metadata/generate-page-metadata.ts` — `generatePageMetadata({ title, description, path, locale, image, type })`

## Message Key Conventions (always English)
- Namespaces: `header`, `hero`, `banner`, `problem`, `about`, `packages`, `individualConsultation`,
  `guarantees`, `testimonials`, `faq`, `bookCall`, `footer`, `benefits`, `brandManifesto`, `team`,
  `whoIsItFor`, `plans`, `privacy`, `legal`
- `header.nav.about` (not nosotros), `header.nav.programs`
- `footer.nav.home`, `footer.nav.about`, `footer.nav.contact`, `footer.nav.plans`
- `footer.legal.notice`, `footer.legal.privacy`, `footer.legal.accessibility`, `footer.legal.cookies`
- Page namespace: `plans` (not planes), `privacy` (not privacidad), `legal` (not avisoLegal)

## File Naming Conventions
- All component files: **kebab-case** (e.g. `book-call-link.tsx`, `hero.tsx`)
- App router entry files: `page.tsx` (thin — just awaits params, renders page component)
- Page logic files: `[name].page.tsx` in `features/[feature]/delivery/`
- Page components receive `locale: string` as prop

## Page Section Order (home)
1. Header (light — dark text on cream bg, logo.svg) — nav: About Us + Plans
2. Hero (cream bg, 2-column: text left + hero-scutoid.png right)
3. Benefits (ceramic bg, 3-column: CLARIDAD / ENERGÍA / REGULACIÓN)
4. BrandManifesto (stone bg, logo.svg + pill.svg decoration)
5. WhoIsItFor (cream bg) — id="programas"
6. Testimonials (cream bg, 3-col)
7. BookCallSection (parallax home-3.png)
8. Footer (stone bg, 3-col: brand/nav/newsletter/contact)

## Key Assets
- `public/logo.svg` — 273×23 MIND YOUR CELLS wordmark (dark stone #343234)
- `public/images/hero-scutoid.png` — 970×662 white 3D scutoid
- `public/images/home-1.png` — masked by cutout-1 (454×800)
- `public/images/home-2.png` — masked by cutout-2 (575×671)
- `public/images/home-3.png` — 1840×1016 parallax bg for BookCallSection
- `public/images/wellness-landscape.jpg` — Ian Keefe nature photo, used in plans CTA

## Key Components
- `components/book-call-link.tsx` — variants: `dark`, `light`, `solid`, `text`
- `components/breadcrumb.tsx` — accepts `items: { label, href? }[]`, uses `link.tsx`
- `components/link.tsx` — Next.js link with underline animation, type: `default|navigation|invisible`
- `components/scutoid-mask.tsx` — SVG clip-path masking, props: `src`, `alt`, `variant: 1|2`

## Newsletter (Double Opt-in)
1. User submits email → `POST /api/newsletter` → sends JWT confirmation email via Resend
2. User clicks confirmation link → `/newsletter/confirm?token=...&email=...`
3. Page POSTs to `POST /api/newsletter/confirm` → verifies JWT, adds to audience, sends welcome email
- JWT expires in 24h; secret: `JWT_SECRET` env var
- From address: `RESEND_EMAIL_FROM` env var
- Resend instantiated inside handlers (NOT at module level) to avoid build-time errors

## User Preferences
- No emojis
- No auto-commits
- Concise, minimal responses
- Keep sections simple — no over-engineering
- Use npm (not bun) for package installation
- `reference` folder excluded from tsconfig

# currentDate
Today's date is 2026-03-08.

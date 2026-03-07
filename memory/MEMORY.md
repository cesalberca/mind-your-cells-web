# Mind Your Cells Web — Project Memory

## Project Overview
Landing page for **Mind Your Cells**, a cellular optimization practice by **Adriana Blanco Durán** (fisioterapeuta colegiada nº 9307). The CTA is to book a call (URL still a placeholder `#book-call` in `components/BookCallLink.tsx`).

## Tech Stack
- **Next.js 16.1.6** (App Router, Turbopack)
- **next-intl v4** for i18n (ES + EN)
- **Tailwind CSS v4** with navy/gold color scheme
- **shadcn** components (accordion, card, badge, etc.)
- **Biome** for linting/formatting (not ESLint)
- **Fathom Analytics** (`HGXWTIRF` site ID in `components/Fathom.tsx`)
- **Playfair Display** (headings) + **Satoshi** (body) — see Style section

## Key Architecture Decisions
- App Router with `[locale]` routing: `/es` and `/en`
- `proxy.ts` (NOT `middleware.ts` — renamed for Next.js 16 convention)
- All translations in `messages/es.json` and `messages/en.json`
- Server components use `useTranslations()` from 'next-intl' directly
- Client components (`'use client'`) also use `useTranslations()` via `NextIntlClientProvider` in locale layout
- `i18n/routing.ts` + `i18n/request.ts` configure next-intl

## Page Sections (in order)
1. Header — nav + book call CTA
2. Hero — headline, credentials, CTA
3. Banner — scrolling wellness keywords
4. TheProblem — 4 pain point cards
5. AboutAdriana — bio + credentials + method
6. Packages — 3 programs (Implementación €690, Personalizado €2.400, Integral €6.500)
7. Guarantees — what she does / doesn't do
8. Testimonials — placeholder section
9. FAQ — accordion
10. BookCallSection — final CTA
11. Footer

## Important Files
- `components/BookCallLink.tsx` — CTA link, URL is `#book-call` (TODO: replace)
- `components/SocialLinks.tsx` — Instagram @mindyourcells, @ablancoduran, LinkedIn
- `messages/es.json` + `messages/en.json` — all copy/translations
- `app/[locale]/layout.tsx` — metadata, JSON-LD, NextIntlClientProvider
- `proxy.ts` — next-intl middleware (renamed from middleware.ts)

## Adriana's Social Links
- Instagram (brand): https://www.instagram.com/mindyourcells
- Instagram (personal): https://www.instagram.com/ablancoduran
- LinkedIn: https://www.linkedin.com/in/adriana-blanco-duran/

## Brand Voice (from Brand Guidelines)
- Tagline: **"Finessing your Cellular Health"** (used in header, footer, hero badge)
- Manifesto: "Mind Your Cells es sostén, conocimiento y criterio. Hablar de salud desde la célula es hablar de eficiencia, responsabilidad y respeto por el cuerpo."
- Core statement: "Cuando te entiendes, todo encaja." (used as hero headline)
- "Salud es lo que el cuerpo te devuelve cuando le das lo que verdaderamente necesita."
- "Conectamos los puntos que otros miran por separado. De lo pequeño a lo grande."
- Principles: (1) La salud es una — un todo global, (2) Todo encaja cuando tienes la información adecuada, (3) La célula como unidad de salud
- Creative concept: **Escutoide** (geometric shape cells adopt to fit in 3D curved tissues)

## Pricing & Payment Terms
- **Programa de Implementación Celular** (4w): €690 — pago único (no installments)
- **Acompañamiento Celular Personalizado** (8w): €2.400 — disponible en 3 plazos
- **Seguimiento Integral Celular** (12w): €6.500 pago único (ahorra €500) OR €7.000 en 3 plazos

## Pending / TODO
- Replace `#book-call` in `BookCallLink.tsx` with actual Calendly/Cal.com URL
- Add Adriana's actual photo to `public/` and update `AboutAdriana.tsx`
- Update Fathom site ID in `Fathom.tsx` if different from Software Cafrers
- Update `metadataBase` URL in layout when domain is confirmed
- Style/branding pass (colors, fonts, etc. — deferred per user request)
- Add real testimonials when available

## Style (keep until told otherwise)
- **Palette**: Stone #333233 (dark), Terracotta #682e2c, Soft Terracotta #a67d7b, Ceramic #dedbd5, Crude Ceramic #b1aa9f, Cream #f5f0eb
- **Fonts** (all `next/font/local` from `app/fonts/`):
  - **MADE Mellow** OTF → `--font-mellow` → `--font-heading` → all h1–h6 globally + `font-display` class
  - **Satoshi** Variable woff2 → `--font-satoshi` → `--font-body` → body default
  - **Playfair Display** Italic Variable TTF → `--font-playfair` → `--font-display` → ALL italics (class: `font-serif italic`); also applied globally to `em`, `i`, `.italic` via `@layer base`
  - No external font CDN (Fontshare link removed)
- **Section pattern**: Hero=bg-stone, Banner=bg-soft-terracotta, TheProblem=bg-cream, AboutAdriana=bg-stone, Packages=bg-cream, Guarantees=bg-ceramic, Testimonials=bg-cream, FAQ=bg-ceramic, BookCallSection=bg-stone, Footer=bg-stone
- **BookCallLink variants**: `variant="dark"` (outlined ceramic, default), `variant="light"` (outlined stone), `variant="solid"` (filled terracotta)
- **SocialLinks variant**: `variant="dark"` | `"light"`
- Do NOT change look/feel until explicitly requested

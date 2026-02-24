# Mind Your Cells — Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-2-60A5FA?style=flat-square&logo=biome)](https://biomejs.dev/)

Landing page for **Mind Your Cells**, a cellular optimization practice by Adriana Blanco Durán (licensed physiotherapist no. 9307).

---

## Requirements

- **Node.js** 22+
- **npm**

## Setup

```bash
git clone https://github.com/cesalberca/mind-your-cells-web
cd mind-your-cells-web
npm install
```

## Scripts

| Command            | Description                              |
|--------------------|------------------------------------------|
| `npm run dev`      | Start dev server at `localhost:3000`     |
| `npm run build`    | Production build                         |
| `npm start`        | Start production server (requires build) |
| `npm run lint`     | Lint with Biome                          |
| `npm run lint:fix` | Auto-fix lint errors                     |
| `npm run format`   | Format with Biome                        |

## Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, Turbopack, static generation
- **[next-intl v4](https://next-intl.dev/)** — i18n with ES/EN locale routing (`/es`, `/en`)
- **[React 19](https://react.dev/)**
- **[TypeScript 5](https://www.typescriptlang.org/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Custom color palette (stone, terracotta, ceramic, cream)
- **[shadcn/ui](https://ui.shadcn.com/)** — Accordion and other components
- **[Biome](https://biomejs.dev/)** — Linter and formatter
- **[Fathom Analytics](https://usefathom.com/)** — Privacy-friendly analytics
- **Playfair Display** — Display/heading font (Google Fonts)
- **Satoshi** — Body font (Fontshare)

## Project structure

```
app/
├── [locale]/
│   ├── layout.tsx    # Locale layout: fonts, metadata, JSON-LD, NextIntlClientProvider
│   └── page.tsx      # Page: assembles all sections
├── layout.tsx        # Root layout
├── globals.css       # Global styles and Tailwind theme tokens
└── icon.png

components/
├── sections/
│   ├── Header.tsx        # Fixed nav with language selector (ES/EN)
│   ├── Hero.tsx          # Full-screen hero, dark background
│   ├── TheProblem.tsx    # 4 pain point cards
│   ├── AboutAdriana.tsx  # Bio, credentials, method pillars
│   ├── Packages.tsx      # 3 programs with pricing
│   ├── Guarantees.tsx    # Professional scope (what she does/doesn't do)
│   ├── Testimonials.tsx  # Testimonial placeholders
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── BookCallSection.tsx  # Final CTA
│   └── Footer.tsx
├── BookCallLink.tsx  # CTA link component (variants: dark, light, solid)
├── SocialLinks.tsx   # Instagram + LinkedIn links
└── Fathom.tsx        # Analytics

i18n/
├── routing.ts        # next-intl routing config
└── request.ts        # next-intl server config

messages/
├── es.json           # Spanish translations
└── en.json           # English translations

proxy.ts              # next-intl middleware (renamed from middleware.ts for Next.js 16)
```

## i18n

The site supports Spanish (`/es`, default) and English (`/en`). All copy lives in `messages/es.json` and `messages/en.json`. The language selector in the header switches between locales.

## Deployment

Deploys to **Vercel**. Each push to `main` triggers an automatic deployment.

---

<div align="center">

[mindyourcells.es](https://www.mindyourcells.es) — Adriana Blanco Durán

</div>

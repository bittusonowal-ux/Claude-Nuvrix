# Nuvrix — Website

Production-ready Next.js 15 website for Nuvrix, built per the approved
design blueprint (dark UI, glassmorphism, aurora gradients, AI-first
positioning for coaches, consultants, SMEs, startup founders, and local
businesses).

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The build fetches Geist and Inter fonts from Google Fonts on
> first run (via `next/font/google`) — a normal internet connection is
> all that's needed. If you're behind a restrictive corporate firewall
> or VPN that blocks `fonts.googleapis.com`, the build will fail with a
> font-fetch error; switch networks or temporarily disable the VPN.

### 3. Build for production

```bash
npm run build
npm run start
```

### 4. Lint

```bash
npm run lint
```

---

## ⚠️ Before Going Live — Required Changes

These are placeholders that **must** be replaced before launch. All of
them live in typed files under `content/` or `lib/`, so each is a
small, isolated edit — no need to touch component code.

| # | What | Where | File |
|---|------|-------|------|
| 1 | Calendly URL | `content/navigation.ts` | `CALENDLY_URL` |
| 2 | WhatsApp Business number | `content/navigation.ts` | `WHATSAPP_URL` |
| 3 | Contact email | `content/navigation.ts` | `footerLinks.contact.email` |
| 4 | Real domain | `lib/site-config.ts` | `siteConfig.url` |
| 5 | Contact form delivery | `app/api/contact/route.ts` | Currently only `console.log`s submissions — wire to an email service (e.g. Resend, SendGrid) or a CRM webhook before launch, or you will lose every form submission |
| 6 | Hero headline copy | `content/hero.ts` | `headlineLine1` / `headlineLine2` |
| 7 | Pricing numbers | `content/pricing.ts` | Genuine placeholders — real business decision, not just copy |
| 8 | Testimonials | `content/testimonials.ts` | Currently generic placeholder quotes |
| 9 | Case studies | `content/case-studies.ts` | Currently illustrative examples, clearly labeled as such on the site |
| 10 | Twitter handle / social links | `lib/site-config.ts` | `twitterHandle`, and `sameAs` in `lib/json-ld.ts` |

## Content Structure

All copy lives in `content/*.ts` as typed objects — edit these files
directly rather than searching through component JSX:

```
content/
├── navigation.ts       # Nav links, CTA URLs, footer links
├── hero.ts              # Hero headline, subhead, flow diagram labels
├── trust-bar.ts         # Capability metrics strip
├── problem.ts            # Pain-point cards
├── services.ts           # Service cards (primary + supporting)
├── how-it-works.ts       # 4-step process
├── workflow-showcase.ts  # AI automation diagram + persona use-cases
├── case-studies.ts       # Work/portfolio placeholder cards
├── who-we-serve.ts       # 5 audience persona tabs
├── why-nuvrix.ts         # Bento grid differentiators
├── testimonials.ts       # Client quotes
├── pricing.ts            # Pricing tiers
├── faq.ts                # FAQ accordion (also feeds JSON-LD schema)
├── contact.ts            # Contact page copy
├── about.ts              # About page copy
├── service-ai-automation.ts       # /services/ai-automation page content
├── service-website-development.ts # /services/website-development page content
└── service-seo.ts                 # /services/seo page content
```

## Design Tokens

All colors, spacing, typography, shadows, and animation timing live in
two places, kept in sync:

- `tailwind.config.ts` — used by Tailwind utility classes
- `app/globals.css` (`:root`) — CSS custom properties, used by
  JS-driven animation (GSAP, Framer Motion) that needs the same values

## Deploying to Vercel

This project is Vercel-ready out of the box:

1. Push this repo to GitHub/GitLab/Bitbucket
2. Import the repo in Vercel
3. No environment variables are required for the current feature set —
   if you wire up an email service for the contact form (see item #5
   above), add its API key as a Vercel environment variable at that
   point
4. Deploy

Once deployed, update `siteConfig.url` in `lib/site-config.ts` to your
real domain and redeploy — this single value drives canonical URLs,
the sitemap, Open Graph tags, and JSON-LD schema across the whole site.

## Pages Built

| Route | Status |
|---|---|
| `/` | Complete — 13 sections |
| `/services/ai-automation` | Complete |
| `/services/website-development` | Complete |
| `/services/seo` | Complete |
| `/work` | Complete (placeholder case studies) |
| `/about` | Complete |
| `/pricing` | Complete |
| `/contact` | Complete |
| `/blog` | Not built — intentionally deferred, per blueprint "future-ready, optional at launch" |

## Tech Stack

- Next.js 15 (App Router) + TypeScript (strict mode)
- Tailwind CSS
- Framer Motion (via `LazyMotion` + `domMax` for bundle size)
- GSAP (`ScrollTrigger`, scoped to the How It Works section only)
- No Three.js — hero aurora background is pure CSS, per the approved
  performance strategy

## Known Notes

- One moderate npm audit finding (PostCSS) is nested inside Next.js's
  own internal build tooling, not shippable app code — documented,
  not a real vulnerability in this project's dependency tree.
- Image assets (`favicon.ico`, `apple-touch-icon.png`,
  `images/og-default.png`, `images/logo.png`) are functional
  placeholders matching the brand's color tokens — replace with a
  final designed logo mark if/when one exists.

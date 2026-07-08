# UGrowth — Agency Website

A premium, black-first marketing site for **UGrowth — Media & Marketing**.
Built with Next.js (App Router), Tailwind CSS v4, and Motion (Framer Motion) +
GSAP for a cinematic, award-agency-grade interaction layer. Editorial luxury
design: ink canvas, forest-green atmosphere, soft-gold accent.

## Project structure

```
ugrowth-website/
├── app/
│   ├── layout.tsx        # Fonts, metadata, persistent chrome, MotionConfig
│   ├── page.tsx           # Composes all section components
│   └── globals.css        # Tailwind + design tokens + shared keyframes
├── components/
│   ├── layout/             # Header (nav + mobile menu), Footer, StickyCta,
│   │                        # CustomCursor, Loader, SmoothScrollProvider
│   ├── sections/            # Hero, Manifesto, Work, Services, Difference,
│   │                        # Process, Impact, Testimonials, Industries,
│   │                        # Studio, Faq, Cta
│   └── ui/                  # Reveal, Button, Counter, AccordionItem,
│                            # WorkTilePlaceholder
├── lib/motion.ts           # Shared easing + variants
├── assets/work/            # Case-study source imagery (not yet wired in)
├── public/                 # favicon, robots.txt
└── README.md
```

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
# open http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Deploy — GitHub + Vercel

The repo is already pushed to `github.com/nethanelfleming-design/ugrowth-website`
and connected to a Vercel project. Every push to `main` auto-deploys.

If the Vercel project's **Framework Preset** is still set to "Other" from the
original static-site setup, switch it to **Next.js** once in
Project Settings → General for builds to run correctly.

## Notes
- Fonts (Fraunces + Inter) are self-hosted via `next/font/google`.
- The four work tiles are intentionally empty placeholders (no stock/AI
  imagery) until real case-study assets are supplied.
- Testimonials and metrics use honest placeholders — swap in real
  quotes/numbers when ready.
- Design tokens (palette, fluid type scale, easing) live in
  `app/globals.css`'s `:root` and `@theme` blocks.

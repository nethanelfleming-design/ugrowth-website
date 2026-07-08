# CLAUDE.md — UGrowth Website

Context and build brief for the **UGrowth — Media & Marketing** website.
This file is the single source of truth: hand it to any developer or AI agent and
they can recreate, extend, or reskin the site without further context.

---

## 1. Project overview

- **What it is:** a premium, black-first marketing website for UGrowth, a creative
  growth agency based in Colombo, Sri Lanka, with international ambitions (esp. the US).
- **The one job of the site:** turn a stranger's first 3 seconds into the thought
  *"these people operate on another level"* — and convert that into an enquiry.
- **Not a brochure — a piece of evidence.** The site must *feel* more expensive and
  considered than the brands the visitor already admires.
- **Status:** built as a Next.js single-page site with a full Motion/GSAP
  interaction layer (see §9–10). Deployed on Vercel. Repo has clean commit
  history.

---

## 2. Positioning & voice

- **Positioning statement:** *UGrowth is a creative growth partner for brands that
  refuse to be ignored. We combine strategy, branding, and cinematic production to
  turn attention into measurable business growth — for a select group of ambitious
  brands, from Colombo to the world.*
- **Tagline:** **Impossible to ignore.**
- **Manifesto:** *Most agencies make content. We build brands. Every frame we shoot,
  every campaign we run, every detail we place answers to one question: does it grow
  the business? From Colombo, for the world.*
- **Voice:** confident, editorial, sparse, premium. Short declarative sentences.
  Outcomes over deliverables. Never "we can do X, Y, Z" laundry lists.
- **Feeling target (3 words):** Cinematic · Exclusive · Inevitable.

**Avoid at all costs:** looking like a cheap freelancer or generic social-media
agency; templated/Canva aesthetics; Poppins/Montserrat as the primary voice; lorem
ipsum; blurry imagery; fabricated statistics; over-formatting.

---

## 3. Creative direction (chosen)

**Luxury Minimal base + cinematic hero/work + bold case studies.**
- Concept 1 "Luxury Minimal / The Editorial" is the foundation (restraint, space,
  one exceptional serif, timelessness).
- Borrow Concept 3's cinematic, scroll-driven treatment for the **hero** and the
  **interactive work** grid (the two moments that must produce the gasp).
- Let Concept 2's bolder energy live inside **nightlife/event case studies**.
- **Black-first, brand-owned:** near-black ink canvas (drama) + forest green
  (atmosphere/ownership) + soft gold (one precious accent). Not pure #000.

Reskin toward Concept 2 (Bold) or Concept 3 (Cinematic) by adjusting the tokens at
the top of `styles.css` and the hero treatment — the structure stays the same.

---

## 4. Design system (tokens)

Defined in `:root` in `styles.css`.

**Palette**
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0e0f0e` | primary canvas (near-black) |
| `--ink-2` | `#141614` | cards, footer surface |
| `--green` / `--green-deep` | `#1b3b2f` / `#10241c` | atmosphere; full "The Difference" section |
| `--off` | `#f5f2ea` | primary text / space |
| `--off-dim` | `#cfd4cd` | secondary text |
| `--gold` / `--gold-soft` | `#c6a961` / `#d8c088` | THE accent — key words, active states, the one CTA button (keep < 5% of any view) |

**Ratio:** ~70% ink, ~20% green, ~10% off-white + gold combined.

**Typography**
- Display/headlines: **Fraunces** (high-contrast editorial serif; the site signature). Weights 400/600, italic used for accents. Loaded via Google Fonts.
- Body/UI: **Inter** (neutral grotesque). Weights 400/500/600.
- One serif, one sans — never a third. Letter-spaced small-caps for eyebrows/labels.
- Fluid scale via `clamp()`: `--step--1` … `--step-4` (`--step-4` ≈ 3.4–8.4rem for hero).

**Layout & motion**
- 12-col grid, `--maxw: 1440px`, generous fluid padding (`--pad`), big vertical rhythm (`--gap`).
- Asymmetry over symmetry; one idea per screen; sharp corners.
- Motion: slow, deliberate, ease-out `cubic-bezier(0.22,1,0.36,1)`, 400–1000ms. Nothing bounces. `prefers-reduced-motion` fully respected.
- Buttons: mostly quiet (text + arrow, underline-on-hover); exactly ONE loud gold button = primary CTA; magnetic on desktop.
- Imagery: cinematic, warm, slightly lifted blacks; one consistent grade so all four clients feel like one studio. Label any AI/concept imagery as "concept".

---

## 5. Sitemap & navigation

**Primary nav (minimal, fixed, shrinks on scroll):** Logo · Work · Services · Studio · [Let's talk]. No "Home" link (logo does it), no dropdowns.

```
HOME (single-page narrative scroll)
WORK (index) → case studies: Industri · The Nets · Yevan David · Crumbs & Doilies
SERVICES: Strategy & Positioning · Brand & Identity · Creative Production ·
          Social & Community · Digital & Web · Event & Hospitality Marketing
STUDIO (about): Philosophy · Process · Founder note · Industries
CONTACT (the invitation)
Utility: 404 · Privacy · (optional Journal, later)
```

Current build = the HOME single-page scroll + mega-footer. Case-study detail pages
and dedicated Services/Studio pages are the next build phase.

---

## 6. Homepage — section by section (order = the argument)

1. **Loader** — 1.2–1.8s branded reveal (wordmark draws on, gold bar fills, % counter). Sets tempo/tier.
2. **Nav** — fixed; condenses to blurred ink on scroll.
3. **Hero** — full viewport, ink + atmospheric green wash + faint grain. H1 "Impossible to ignore." rises line-by-line. Sub: *"A creative growth partner for brands that refuse to blend in."* Ghost CTA "See the work" + scroll cue. (Swap the atmospheric bg for a silent showreel when footage exists.)
4. **Manifesto** — *"Most agencies make content. We build brands."* + supporting line + "From Colombo, for the world."
5. **Selected work** — asymmetric interactive grid (tiles: Industri lg, Yevan sm, The Nets md, C&D md). Hover: image scale + reveal, cursor "View case". Tiles → case studies (currently anchor to contact).
6. **Services / What we do** — 6 outcome-led rows (see §2 voice). Hover expands.
7. **The Difference** — full forest-green section. *"Most brands don't have a content problem. They have an attention problem."*
8. **Process** — 7 steps: Research · Strategy · Mood Boarding · Creation · Editing · Publishing · Growth.
9. **Impact** — count-up stats. Currently illustrative (10K+ community, 4 brands, 100% bespoke) with an honest note; replace with verified metrics as they arrive.
10. **Industries** — hospitality/nightlife lead, broader sectors follow.
11. **Studio + founder** — "Small by design." + founder note (see §7).
12. **FAQ** — accordions: outside hospitality? · pricing (bespoke, no fixed packages) · remote/international? · what a project looks like.
13. **CTA / The invitation** — *"Let's build something impossible to ignore."* + "We take on a limited number of brands each quarter." + one gold button.
14. **Footer** — giant "Let's talk." + Contact info (phone, email, location) + "Impossible to ignore." Simplified per direct instruction — the Navigate and Follow (social links) columns were removed; contact is the only column now.

Testimonials section was removed from the homepage per direct instruction
(`components/sections/Testimonials.tsx` deleted, no longer composed in
`app/page.tsx`). If real testimonials arrive later and the section should
return, re-add it between Impact and Industries.

---

## 7. Case-study content (NO fabricated stats)

Structure each as **Challenge → Approach → Craft → Outcome**. Metrics reserved until real.

- **Industri** (flagship, nightlife) — Challenge: scale a nightlife brand and make it a premium destination. Approach: seasonal campaign world "After Hours — Summer '26", cinematic. Craft: moodboards, motion storyboards, gold-on-black flyer suite, social mgmt, event promotion. Outcome: cohesive ownable identity + repeatable campaign engine. [reserve: attendance/growth]
- **The Nets** (sports bar & restaurant) — Challenge: become THE destination for live sport/events. Approach: event-led calendar (British GP, football, grand opening). Craft: premium flyer suite, match promos, launch creative. Outcome: consistent high-energy presence. [reserve: turnout] · NOTE: replace any low-res source stills with hi-res.
- **Yevan David** (athlete/personal brand) — Challenge: build a Sri Lankan racing driver's international brand. Approach: athlete storytelling + race-week hype. Craft: race-week graphics, milestone content, motorsport-games coverage, BTS video. Outcome: cohesive athlete brand; 10,000-follower milestone. [reserve: reach/engagement]
- **Crumbs & Doilies** (bakery/lifestyle) — Challenge: keep a loved bakery's content fresh and conversion-driving. Approach: craving-first social tied to seasonal drops + ordering deadlines. Craft: product photo/video, seasonal graphics, "order by" urgency creative. Outcome: appetite-led content with seasonal rhythm. [reserve: orders] · NOTE: shares a name with a known UK brand — confirm you can reference the engagement + get permission before publishing.

---

## 8. Founder & contact

- **Founder:** Fleming Nethanel Gurusinghe — **Founder & CEO**.
- **Founder note (verbatim, use on Studio section/page):**
  *"I started UGrowth because too many businesses treat marketing as posting content
  instead of building a brand with purpose. We combine strategy, creativity, and
  execution to make brands memorable, trusted, and impossible to ignore — as a
  long-term growth partner, not a vendor."*
- **Phone:** +94 (77) 143 9128 · **Handle:** @ugrowth_ · **Base:** Colombo, worldwide.
- **Email:** the footer (`Footer.tsx`) now uses the real address
  `ugrowthmarketing@gmail.com`. The CTA section's mail link (`Cta.tsx`) still
  points to the old placeholder `hello@ugrowth.agency` — wasn't in scope of
  the footer-simplification request, but worth updating to match when
  touched next.

---

## 9. Tech, file structure & how to run

**Stack:** Next.js (App Router) + TypeScript, Tailwind CSS v4, Motion (Framer
Motion) for entrance/hover/menu/accordion choreography, GSAP + ScrollTrigger
for scroll-scrubbed parallax, Lenis for inertial smooth scroll, lucide-react
for functional icons. Fonts (Fraunces + Inter) self-hosted via `next/font/google`.

```
ugrowth-website/
├── app/
│   ├── layout.tsx        # fonts, metadata, MotionConfig, persistent chrome
│   ├── page.tsx           # composes all section components
│   └── globals.css        # design tokens (@theme) + shared keyframes
├── components/
│   ├── layout/             # Header (nav + mobile menu), Footer, StickyCta,
│   │                        # CustomCursor, Loader, SmoothScrollProvider
│   ├── sections/            # one component per homepage section (see §6)
│   └── ui/                  # Reveal, Button, Counter, AccordionItem,
│                            # WorkTilePlaceholder
├── lib/motion.ts           # shared easing curve + entrance variants
├── assets/work/            # case-study source imagery (not yet wired in)
├── public/                 # favicon, robots.txt
├── README.md
└── CLAUDE.md         # this file
```

**Run locally:**
```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
```

---

## 10. Interactions

Branded loader (`Loader.tsx`, animated wordmark + gold bar + % counter) ·
scroll reveals (`Reveal`/`RevealGroup` — Motion's `whileInView`) · nav shrink
on scroll + glass blur (`Header.tsx`) · inertia custom cursor (desktop,
morphs to a label over `[data-cursor]` targets) · magnetic buttons
(`Button.tsx`, spring-based pointer tracking) · mobile menu overlay
(`AnimatePresence` slide) · FAQ accordion (`AccordionItem.tsx`, single-open,
animated height) · count-up stats (`Counter.tsx`) · sticky mobile CTA bar ·
hero atmosphere parallax (GSAP ScrollTrigger) · Lenis smooth scroll · 3D
tilt-on-hover work tiles (`TiltCard.tsx`) · animated gold progress rail
scrubbed through the Process steps · generative visual system (`Aurora.tsx`,
`GlowOrb.tsx`, `GrainOverlay.tsx`) layering gradient-mesh atmosphere, floating
glow orbs, and a fixed film-grain texture across the hero, difference, CTA,
impact, and industries sections. All motion respects `prefers-reduced-motion`
via `MotionConfig reducedMotion="user"` plus a global CSS fallback, and the
custom cursor/magnetic/tilt effects are gated on `(hover: hover) and (pointer: fine)`.

Future enhancements: real showreel video in hero, WebGL touches, page
transitions for multi-page case studies.

---

## 11. Assets

In `assets/work/` (high-res, cropped/graded from the source portfolio):
`industri_flyer.png`, `industri_moodboard.png`, `nets_logo.png`, `nets_1/2/3.png`,
`yevan_portrait.png`, `yevan_1/2/3/4.png`, `cd_1.png`, `cd_2.png`, `cd_visual.png`.

All four work tiles now use real supplied images (`public/assets/work/
industri.jpg`, `yevan.jpg`, `crumbs.jpg`, `nets.jpg` — see `Work.tsx`'s
`PROJECTS[].image`), shown via `object-cover`; `WorkTileArt` (the generative
typographic/gradient placeholder) is no longer rendered by default but stays
in the codebase in case a future case study needs it before real assets
arrive. Industri and Yevan David's source aspect ratios closely match their
tiles so they render essentially uncropped. Crumbs & Doilies and The Nets
have wider sources than their 16:12 tile, so each was pre-cropped in Sharp
(not relying on CSS `object-position`) to fit exactly: Crumbs & Doilies got
a modest symmetric center-crop (~5.6% off each side, verified both photos +
BEFORE/AFTER labels + logo stay visible); The Nets' crop is asymmetric
(125px off the left, ~46px off the right of the 1536px source) because its
"THE NETS" and "UGrowth" logos aren't centered in the source graphic —
symmetric cropping would've clipped the right-hand "MEDIA AND MARKETING"
text, so the crop window was shifted right until both logos cleared with
margin. No stock photography is used anywhere; decorative visuals elsewhere
(Aurora, GlowOrb, grain) are abstract/generative, not photographic, so
nothing purports to be real client photography before it's supplied.

The real UGrowth logo is wired into the nav, footer, favicon
(`app/icon.png`/`app/apple-icon.png`), and the loading screen, replacing the
earlier text wordmark and generic icons. Source of truth:
`public/assets/brand/ugrowth-logo.png` — the exact client-supplied file
(2000×2000, white wordmark on transparent background), untouched. For inline
placements (nav/footer/loader) a second file, `logo-wordmark.png`, is used —
it's the same artwork with its transparent margins trimmed (bounding-box crop
only, no recolor/redesign) so the mark reads clearly at small sizes; the
favicon/app-icon variants are resized from the untrimmed square original.

Missing / to supply: real showreel + client video, real testimonials,
verified metrics. (Contact email: footer uses the real address; `Cta.tsx`'s
mail link still has the old placeholder — see §8 note above.)

---

## 12. Deploy (GitHub + Vercel)

Already live: pushed to `github.com/nethanelfleming-design/ugrowth-website`,
deployed on Vercel with the Git integration auto-deploying every push to `main`.

Note: the Vercel project's Framework Preset was originally set to "Other"
during the static-site phase. After the Next.js migration it needs to be
**Next.js** in Project Settings → General for `next build` to run correctly
(Vercel does not always re-detect the framework on an existing project
automatically).

---

## 13. Roadmap / next

- [ ] Individual case-study pages (Challenge→Approach→Craft→Outcome, per §7)
- [ ] Dedicated Services & Studio pages
- [x] Wire real case-study images into all four work tiles (Industri, Yevan David, Crumbs & Doilies, The Nets)
- [ ] Collect + insert real testimonials (get sign-off) and verified metrics
- [ ] Replace hero atmosphere with a graded showreel
- [ ] Finalise real contact email + social links
- [ ] Optional: reskin toward Concept 2 (Bold) or Concept 3 (Cinematic)

## 14. Guardrails
Never fabricate metrics or testimonials. Label AI/concept imagery honestly. Secure
client permission before featuring names/logos. Keep gold rare. One serif, one sans.
Restraint = luxury.

# UGrowth — Agency Website

A premium, black-first marketing site for **UGrowth — Media & Marketing**.
Static, dependency-free, and zero-config on Vercel. Editorial luxury design:
ink canvas, forest-green atmosphere, soft-gold accent, cinematic interactions.

## Project structure

```
ugrowth-website/
├── index.html        # Full single-page site (all sections)
├── styles.css        # Design system + layout + responsive + motion
├── main.js           # Interactions: loader, reveals, cursor, menu, FAQ, count-up
├── assets/
│   └── work/         # Case-study imagery (Industri, The Nets, Yevan David, C&D)
├── vercel.json       # Static hosting config (clean URLs, asset caching)
├── robots.txt
└── README.md
```

## Run locally

No build step. Either open `index.html` directly, or serve it:

```bash
# Python (built in on most machines)
python3 -m http.server 3000
# then open http://localhost:3000
```

## Deploy — GitHub + Vercel (≈2 minutes)

The repo is already initialised with clean commit history. To go live:

**1. Create the GitHub repo and push**
```bash
# from inside ugrowth-website/
# option A — GitHub CLI
gh repo create ugrowth-website --public --source=. --push

# option B — manual: create an empty repo on github.com, then
git remote add origin https://github.com/<you>/ugrowth-website.git
git push -u origin main
```

**2. Deploy on Vercel**
- Go to vercel.com → **Add New… → Project** → **Import** your GitHub repo.
- Framework preset: **Other** (it's static). Root: `./`. No build command needed.
- Click **Deploy**. Every future `git push` auto-deploys.

That's it — Vercel gives you a live `*.vercel.app` URL and continuous deploys.

## Notes
- Fonts (Fraunces + Inter) load from Google Fonts at runtime.
- Testimonials and metrics use honest placeholders — swap in real quotes/numbers when ready.
- To reskin toward "Bold Creative Studio" or "Cinematic Interactive", adjust the
  tokens at the top of `styles.css` and the hero treatment.

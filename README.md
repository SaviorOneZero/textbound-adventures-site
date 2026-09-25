# Textbound Adventures website

The public Textbound Adventures website is deliberately small: static HTML, one CSS file, and a few optimized image assets. It has no framework, package dependencies, build step, analytics, cookies, or client-side JavaScript.

## Structure

```text
dist/
  index.html          Homepage
  styles.css          Shared site styles
  support/index.html  Stable support URL
  privacy/index.html  Privacy notice
  assets/             Brand mark, hero, and social image
```

All public files live in `dist/`. GitHub Pages and the retained Sites preview both publish that directory directly.

## Preview locally

From the repository root:

```bash
python3 -m http.server 8000 --directory dist
```

Then open <http://localhost:8000>.

## Make an update

- Edit page copy directly in the relevant HTML file.
- Keep shared visual changes in `dist/styles.css`.
- Put optimized site images in `dist/assets/` and include useful alternative text when an image carries meaning.
- Do not add trackers, third-party scripts, a framework, or a build system without a specific product requirement.
- Run `node --test tests/static-site.test.mjs` before committing.

The site uses the Textbound Adventures Brand Pack v1 palette and visual direction. Textbound Adventures is the customer-facing product brand. Current publisher and copyright references follow the repository’s Sync 33 Laboratories guidance.

Brand assets are intentionally limited:

- `brand-mark.svg` is the production web compass/path mark and favicon.
- `hero-landscape.jpg` is an optimized, text-free treatment derived from the approved hero direction so all page copy remains accessible HTML.
- `og.jpg` is an optimized copy of the existing social-sharing artwork, preserved until a separately approved replacement is produced.

## Product relationship

This repository contains the marketing website only. Product claims should remain aligned with the separate `SaviorOneZero/wayfinder-ios` app repository and the current open branding/legal guidance.

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml`, validates the static site, and publishes `dist/` to GitHub Pages.

Public routes:

- `/textbound-adventures-site/`
- `/textbound-adventures-site/support/`
- `/textbound-adventures-site/privacy/`

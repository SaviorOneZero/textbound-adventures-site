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

All public files live in `dist/`. Vercel publishes that directory at the canonical product domain. GitHub Pages continues to publish it as a compatible legacy entry point.

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

The site uses the approved Textbound Adventures Brand Pack v1 palette and visual direction. Textbound Adventures™ is the customer-facing product brand, and Sync 33 Laboratories is its publisher, studio identity, and current copyright holder. Website references use the canonical Sync 33 Laboratories spelling without renaming compatibility-sensitive app identifiers.

Canonical scalable brand assets live in `dist/assets/`:

- `brand-mark.svg` is the production web compass/path mark and favicon.
- `textbound-logo-horizontal-light.svg` and `textbound-logo-horizontal-dark.svg` are the wide logo treatments for dark and light grounds.
- `textbound-logo-stacked-light.svg` and `textbound-logo-stacked-dark.svg` are the compact logo treatments for dark and light grounds.

Generated raster derivatives are also kept in `dist/assets/`:

- `hero-landscape.jpg` is the optimized, text-free hero treatment so all important copy remains accessible HTML.
- `og.jpg` is the current Open Graph image referenced by page metadata.
- `textbound-social-profile-1024.png` is the 1024×1024 social/profile artwork.

Do not edit raster derivatives as the source of truth when a vector master is available. Keep the winding path intact whenever the compass mark is reproduced; it is the distinguishing Textbound element.
## Product relationship

This repository contains the marketing website only. Product claims should remain aligned with the separate `SaviorOneZero/wayfinder-ios` app repository and the current open branding/legal guidance.

## Deployment

The canonical deployment is <https://textbound-adventures.sync33.com/> on Vercel. Pushing to `main` also runs `.github/workflows/pages.yml`, validates the static site, and publishes `dist/` to GitHub Pages so existing URLs remain available.

Public routes:

- `https://textbound-adventures.sync33.com/`
- `https://textbound-adventures.sync33.com/support/`
- `https://textbound-adventures.sync33.com/privacy/`

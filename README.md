# Textbound Adventures Website

Marketing site for **Text Adventures™**, an offline-first interactive fiction platform and a **Somewhere Next Studios™** product.

The site introduces the product, featured adventures, platform experience, and studio. It is deployed as a static site through GitHub Pages.

## Brand and ownership

**Text Adventures™** is the primary customer-facing product brand. **Somewhere Next Studios™** is the studio/creator brand for Text Adventures and Not There Yet.

Somewhere Next Studios must not be represented as a legal entity or current copyright owner unless the underlying legal structure and any required IP assignment actually support that statement. Where copyright ownership is stated, use the factually current legal owner rather than substituting Somewhere Next Studios.

Do not use `®` for Text Adventures or Somewhere Next Studios unless registration actually supports it. Third-party and historically sourced material, including Eamon content, must retain accurate rights and attribution and must not be presented as studio-owned merely because it appears within the product.

Public presentation should remain product-first. Somewhere Next Studios attribution should be restrained and secondary to Text Adventures.

## Live site

GitHub Pages deployment:

`https://savioronezero.github.io/textbound-adventures-site/`

The site metadata also references `https://textboundadventures.com`; custom-domain availability should be verified before treating that URL as authoritative.

## Current site content

The homepage currently presents:

- Text Adventures product positioning
- Featured adventure cards for Flight 217, Murder on the Orient Express, The Forgotten Crypt, and Eamon Classics
- Parser and touch-first gameplay messaging
- iPhone, iPad, and Mac platform presentation
- Studio information and contact treatment that still requires a later public-surface branding pass

The product itself has evolved beyond some of the current marketing copy, so website content should be kept synchronized with the app repository rather than treated as the source of truth for adventure availability or platform status.

## Technology

The current repository originated from a vinext full-stack starter and uses:

- React
- TypeScript
- vinext / Vite
- GitHub Actions
- GitHub Pages static deployment

The production marketing surface is primarily implemented in:

- `app/page.tsx` . homepage content and structure
- `app/globals.css` . visual design and responsive behavior
- `app/layout.tsx` . metadata, social sharing, and document shell
- `public/` . static assets
- `.github/workflows/pages.yml` . GitHub Pages deployment

The repository still contains optional starter infrastructure for authentication, databases, Drizzle, and other full-stack capabilities that the public marketing site does not currently require.

## Development

Node.js `>=22.13.0` is required.

```sh
npm install
npm run dev
npm run lint
npm test
npm run build:pages
```

The GitHub Pages workflow builds the static site and deploys changes from the repository.

## Product relationship

This repository contains the marketing website only. The Text Adventures application, runtime, adventure content, tests, and Apple platform targets live in the separate `SaviorOneZero/wayfinder-ios` repository.

Website claims about supported devices, adventure availability, release status, branding, and product capabilities should remain aligned with that application repository and the brand standard above.

## Product principles reflected by the site

1. Interactive fiction should feel approachable without losing parser freedom.
2. The experience is designed for Apple devices and mobile-first play.
3. Adventures should be presented as stories and worlds, not as technical demonstrations.
4. Somewhere Next Studios branding should remain understated and product-focused.
5. The website should stay lightweight, accessible, and easy to maintain.

# Textbound Adventures Website

Marketing site for **Textbound Adventures**, an offline-first interactive fiction platform from **Quest Platforms**.

The site introduces the product, featured adventures, platform experience, and studio. It is deployed as a static site through GitHub Pages.

## Live site

GitHub Pages deployment:

`https://savioronezero.github.io/textbound-adventures-site/`

The site metadata also references `https://textboundadventures.com`; custom-domain availability should be verified before treating that URL as authoritative.

## Current site content

The homepage currently presents:

- Textbound Adventures product positioning
- Featured adventure cards for Flight 217, Murder on the Orient Express, The Forgotten Crypt, and Eamon Classics
- Parser and touch-first gameplay messaging
- iPhone, iPad, and Mac platform presentation
- Quest Platforms studio information and contact link

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

This repository contains the marketing website only. The Textbound Adventures application, runtime, adventure content, tests, and Apple platform targets live in the separate `SaviorOneZero/wayfinder-ios` repository.

Website claims about supported devices, adventure availability, release status, and product capabilities should remain aligned with that application repository.

## Product principles reflected by the site

1. Interactive fiction should feel approachable without losing parser freedom.
2. The experience is designed for Apple devices and mobile-first play.
3. Adventures should be presented as stories and worlds, not as technical demonstrations.
4. Quest Platforms branding should remain understated and product-focused.
5. The website should stay lightweight, accessible, and easy to maintain.

import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const site = join(root, "dist");
const pages = ["index.html", "support/index.html", "privacy/index.html", "404.html"];

async function read(relativePath) {
  return readFile(join(site, relativePath), "utf8");
}

test("all public pages have basic semantic and metadata essentials", async () => {
  for (const page of pages.slice(0, 3)) {
    const html = await read(page);
    assert.match(html, /<html lang="en">/);
    assert.match(html, /<meta name="viewport"/);
    assert.match(html, /<meta name="description"/);
    assert.match(html, /<link rel="canonical"/);
    assert.match(html, /<main[^>]*id="main"/);
    assert.match(html, /<h1[\s>]/);
    assert.match(html, /<a class="skip-link" href="#main">/);
  }
});

test("local links and referenced assets resolve", async () => {
  for (const page of pages) {
    const html = await read(page);
    const attributes = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
    for (const value of attributes) {
      if (/^(?:https?:|mailto:|#)/.test(value)) continue;
      const pathOnly = value.split("#")[0].split("?")[0];
      if (!pathOnly) continue;
      const absolute = value.startsWith("/") ? join(site, pathOnly) : resolve(site, dirname(page), pathOnly);
      const info = await stat(absolute);
      if (info.isDirectory()) await stat(join(absolute, "index.html"));
    }
  }
});

test("404 page is accessible and points back to maintained routes", async () => {
  const html = await read("404.html");
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<meta name="viewport"/);
  assert.match(html, /<main[^>]*id="main"/);
  assert.match(html, /href="\/support\/"/);
  assert.match(html, /href="\/privacy\/"/);
});

test("support and privacy destinations remain stable", async () => {
  await stat(join(site, "support/index.html"));
  await stat(join(site, "privacy/index.html"));
  const home = await read("index.html");
  assert.match(home, /href="support\/"/);
  assert.match(home, /href="privacy\/"/);
});

test("site has no scripts or stale brand identities", async () => {
  const maintained = await Promise.all([...pages, "styles.css", "robots.txt", "sitemap.xml"].map(read));
  const combined = maintained.join("\n");
  assert.doesNotMatch(combined, /<script\b/i);
  assert.doesNotMatch(combined, /Quest Platforms?|PromiseArc|Text Adventures/i);
  assert.match(combined, /Somewhere Next Studios™ creation/);
  assert.match(combined, /A Sync33 Laboratories product/);
  assert.match(combined, /© 2026 Sync33 Laboratories/);
});

test("canonical identity and production adventure claims stay accurate", async () => {
  const maintained = await Promise.all(pages.slice(0, 3).map(read));
  const combined = maintained.join("\n");
  assert.match(combined, /https:\/\/textbound-adventures\.sync33\.com\//);
  assert.match(combined, /A Sync33 Laboratories product/);
  assert.doesNotMatch(combined, /Sync 33|Text Adventures|Murder on the Orient Express|In development|In progress|Planned/);

  const home = maintained[0];
  for (const adventure of ["Flight 217", "The Forgotten Crypt", "The Zyphur Riverventure", "The Death Star", "Nuclear Nightmare", "The Shopping Mall", "Monty Python and the Holy Grail"]) {
    assert.ok(home.includes(adventure), `missing production adventure: ${adventure}`);
  }
});

test("brand assets stay within a lightweight delivery budget", async () => {
  const hero = await stat(join(site, "assets/hero-landscape.jpg"));
  const mark = await stat(join(site, "assets/brand-mark.svg"));
  const profile = await stat(join(site, "assets/textbound-social-profile-1024.png"));
  assert.ok(hero.size < 500_000, `hero image is ${hero.size} bytes`);
  assert.ok(mark.size < 10_000, `brand mark is ${mark.size} bytes`);
  assert.ok(profile.size < 1_000_000, `profile image is ${profile.size} bytes`);

  for (const logo of [
    "textbound-logo-horizontal-light.svg",
    "textbound-logo-horizontal-dark.svg",
    "textbound-logo-stacked-light.svg",
    "textbound-logo-stacked-dark.svg",
  ]) {
    const info = await stat(join(site, "assets", logo));
    assert.ok(info.size < 20_000, `${logo} is ${info.size} bytes`);
  }
});

import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const site = join(root, "dist");
const pages = ["index.html", "support/index.html", "privacy/index.html"];

async function read(relativePath) {
  return readFile(join(site, relativePath), "utf8");
}

test("all public pages have basic semantic and metadata essentials", async () => {
  for (const page of pages) {
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
      const absolute = resolve(site, dirname(page), pathOnly);
      const info = await stat(absolute);
      if (info.isDirectory()) await stat(join(absolute, "index.html"));
    }
  }
});

test("support and privacy destinations remain stable", async () => {
  await stat(join(site, "support/index.html"));
  await stat(join(site, "privacy/index.html"));
  const home = await read("index.html");
  assert.match(home, /href="support\/"/);
  assert.match(home, /href="privacy\/"/);
});

test("site has no scripts or legacy studio identities", async () => {
  const maintained = await Promise.all([...pages, "styles.css", "robots.txt", "sitemap.xml"].map(read));
  const combined = maintained.join("\n");
  assert.doesNotMatch(combined, /<script\b/i);
  assert.doesNotMatch(combined, /Quest Platforms?|Somewhere Next Studios|PromiseArc/i);
});

test("brand assets stay within a lightweight delivery budget", async () => {
  const hero = await stat(join(site, "assets/hero-landscape.jpg"));
  const mark = await stat(join(site, "assets/brand-mark.svg"));
  assert.ok(hero.size < 500_000, `hero image is ${hero.size} bytes`);
  assert.ok(mark.size < 10_000, `brand mark is ${mark.size} bytes`);
});

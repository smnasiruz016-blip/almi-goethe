// Single source of truth for every indexable /goethe SEO URL. Shared by the
// chunked sitemap and the /sitemap-index.xml route so the chunk count never drifts.
// Order is stable (statics → hubs → matrices) so a URL keeps its chunk as the set
// grows. Wave 1 (real-data, no licence): levels, occupations, and German unis
// (Wikidata CC0) × 193 origins.

import type { MetadataRoute } from "next";
import { COUNTRIES } from "./countries";
import { GERMAN_UNIS } from "./universities";
import { OCCUPATIONS } from "./occupations";
import { LEVELS, PURPOSES } from "./levels";
import {
  GOETHE_INDEX,
  levelHubUrl,
  levelOriginUrl,
  levelPurposeOriginUrl,
  occupationHubUrl,
  occupationOriginUrl,
  uniHubUrl,
  uniOriginUrl,
} from "./urls";
import { buildExamSitemapUrls } from "@/lib/exams/seo/sitemap-urls";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://almigoethe.almiworld.com";

export const SITEMAP_CHUNK = 10000;

// Constant data-snapshot date. Emitting `new Date()` told crawlers every URL
// "just changed" on every fetch, inviting needless re-crawls that turn into ISR
// first-writes (the almistudy Ph1b cost fix). Bump only when the dataset changes.
const LASTMOD = new Date("2026-07-13");

type Entry = MetadataRoute.Sitemap[number];

export function buildGoetheSitemapUrls(): MetadataRoute.Sitemap {
  const now = LASTMOD;
  const urls: MetadataRoute.Sitemap = [];
  const push = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly") =>
    urls.push({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  // Statics + SEO index.
  push("", 1, "weekly");
  push(GOETHE_INDEX, 0.9, "weekly");
  push("/pricing", 0.7, "weekly");
  push("/signup", 0.6, "weekly");
  push("/login", 0.5, "weekly");

  // Hubs.
  for (const l of LEVELS) push(levelHubUrl(l), 0.8, "weekly");
  for (const o of OCCUPATIONS) push(occupationHubUrl(o), 0.7, "weekly");
  for (const u of GERMAN_UNIS) push(uniHubUrl(u), 0.7, "weekly");

  // Matrices (the bulk).
  for (const l of LEVELS) for (const c of COUNTRIES) push(levelOriginUrl(l, c), 0.6);
  for (const l of LEVELS) for (const p of PURPOSES) for (const c of COUNTRIES) push(levelPurposeOriginUrl(l, p, c), 0.6);
  for (const o of OCCUPATIONS) for (const c of COUNTRIES) push(occupationOriginUrl(o, c), 0.6);
  for (const u of GERMAN_UNIS) for (const c of COUNTRIES) push(uniOriginUrl(u, c), 0.5);

  return urls;
}

// The full submitted surface = the Goethe Wave-1 URLs followed by the four new
// exam engines. Exam URLs are appended at the TAIL so every existing Goethe URL
// keeps its position (and therefore its chunk) as the set grows — the same
// stable-order guarantee the Goethe builder relies on.
export function buildAllSitemapUrls(): MetadataRoute.Sitemap {
  return [...buildGoetheSitemapUrls(), ...buildExamSitemapUrls()];
}

export function sitemapChunkCount(): number {
  return Math.max(1, Math.ceil(buildAllSitemapUrls().length / SITEMAP_CHUNK));
}

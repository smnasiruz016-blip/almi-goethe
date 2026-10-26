// Single source of truth for every indexable /goethe SEO URL. Shared by the
// chunked sitemap and the /sitemap-index.xml route so the chunk count never drifts.
// Order is stable (statics → hubs → matrices) so a URL keeps its chunk as the set
// grows. Wave 1 (real-data, no licence): levels, occupations, and German unis
// (Wikidata CC0) × 193 origins.

import type { MetadataRoute } from "next";
import { LEVELS } from "./levels";
import { GOETHE_INDEX, levelHubUrl } from "./urls";
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

  // Level hubs. The occupation and university hubs and every origin/purpose
  // matrix were removed (cost fix, 26 Oct 2026): they answer 410 Gone from
  // src/proxy.ts, so they are never listed here.
  for (const l of LEVELS) push(levelHubUrl(l), 0.8, "weekly");

  return urls;
}

// The full submitted surface = the Goethe Wave-1 URLs followed by the four new
// exam engines. Exam URLs are appended at the TAIL so every existing Goethe URL
// keeps its position (and therefore its chunk) as the set grows — the same
// stable-order guarantee the Goethe builder relies on.
// Only URLs whose route still renders may be advertised (everything deeper answers 410 Gone).
// Keep-set shapes: /, ordinary static pages, the /goethe and /pruefung index pages,
// /goethe/<level> and /pruefung/<exam>.
function isHoldingKeepSet(entry: MetadataRoute.Sitemap[number]): boolean {
  const seg = new URL(entry.url).pathname.split("/").filter(Boolean);
  if (seg.length === 0) return true;
  if (seg[0] === "goethe") {
    // /goethe and /goethe/<level> only — /goethe/occupation/* and /goethe/university/* are 410 Gone.
    return seg.length === 1 || (seg.length === 2 && seg[1] !== "occupation" && seg[1] !== "university");
  }
  if (seg[0] === "pruefung") return seg.length <= 2; // /pruefung and /pruefung/<exam>
  return true; // ordinary static marketing pages
}

export function buildAllSitemapUrls(): MetadataRoute.Sitemap {
  return [...buildGoetheSitemapUrls(), ...buildExamSitemapUrls()].filter(isHoldingKeepSet);
}

export function sitemapChunkCount(): number {
  return Math.max(1, Math.ceil(buildAllSitemapUrls().length / SITEMAP_CHUNK));
}

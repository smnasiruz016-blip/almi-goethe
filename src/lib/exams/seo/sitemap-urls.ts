// Every indexable /pruefung SEO URL, in stable order (index → hubs → exam×origin →
// exam×purpose×origin). Only REAL-DATA combinations are emitted: exam×purpose×origin
// appears solely for purposes the exam genuinely certifies (isRealExamPurpose). This
// is the sitemap half of the real-data-or-noindex gate — thin combos are never
// listed here and are marked noindex at the route.

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/goethe/seo/meta";
import { ALL_EXAM_SEO, EXAMS_INDEX } from "./exams-data";
import { examHubUrl } from "./urls";

type Entry = MetadataRoute.Sitemap[number];

// Constant data-snapshot date (see almistudy Ph1b): a wall-clock `new Date()`
// makes every sitemap fetch advertise a fresh lastmod, driving needless re-crawls
// and ISR first-writes. Bump only when the dataset actually changes.
const LASTMOD = new Date("2026-07-13");

export function buildExamSitemapUrls(): MetadataRoute.Sitemap {
  const now = LASTMOD;
  const urls: MetadataRoute.Sitemap = [];
  const push = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly") =>
    urls.push({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  // Index + exam hubs.
  push(EXAMS_INDEX, 0.9, "weekly");
  for (const e of ALL_EXAM_SEO) push(examHubUrl(e.exam), 0.8, "weekly");

  // The exam × origin and exam × purpose × origin pages were removed (cost fix,
  // 26 Oct 2026): /pruefung/<exam>/<seg>[/<origin>] now answers 410 Gone from
  // src/proxy.ts, so they are never listed here.

  return urls;
}

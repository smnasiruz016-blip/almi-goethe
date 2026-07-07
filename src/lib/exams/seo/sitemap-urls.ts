// Every indexable /pruefung SEO URL, in stable order (index → hubs → exam×origin →
// exam×purpose×origin). Only REAL-DATA combinations are emitted: exam×purpose×origin
// appears solely for purposes the exam genuinely certifies (isRealExamPurpose). This
// is the sitemap half of the real-data-or-noindex gate — thin combos are never
// listed here and are marked noindex at the route.

import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/goethe/seo/countries";
import { SITE_URL } from "@/lib/goethe/seo/meta";
import { ALL_EXAM_SEO, EXAMS_INDEX, purposesForExam } from "./exams-data";
import { examHubUrl, examOriginUrl, examPurposeOriginUrl } from "./urls";

type Entry = MetadataRoute.Sitemap[number];

export function buildExamSitemapUrls(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];
  const push = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly") =>
    urls.push({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  // Index + exam hubs.
  push(EXAMS_INDEX, 0.9, "weekly");
  for (const e of ALL_EXAM_SEO) push(examHubUrl(e.exam), 0.8, "weekly");

  // exam × origin (all real — the exam is real, the origin angle is real).
  for (const e of ALL_EXAM_SEO) for (const c of COUNTRIES) push(examOriginUrl(e.exam, c), 0.6);

  // exam × purpose × origin — only where the exam→purpose mapping is real.
  for (const e of ALL_EXAM_SEO)
    for (const p of purposesForExam(e.exam))
      for (const c of COUNTRIES) push(examPurposeOriginUrl(e.exam, p, c), 0.6);

  return urls;
}

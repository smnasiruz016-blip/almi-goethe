// One place that builds every internal SEO URL under /pruefung, so links and the
// sitemap can never drift. Mirrors the /goethe URL grammar: origin segments are
// "from-<country>", purpose segments "for-<purpose>". The exam slug already encodes
// the level (each engine is single-level), so there is no redundant level segment.

import { originParam, type CountryEntry } from "@/lib/goethe/seo/countries";
import type { Purpose } from "@/lib/goethe/seo/levels";
import type { GermanExam } from "@/lib/exams/types";
import { examSlug, EXAMS_INDEX } from "./exams-data";

export { EXAMS_INDEX };

export const examHubUrl = (exam: GermanExam) => `${EXAMS_INDEX}/${examSlug(exam)}`;

export const examOriginUrl = (exam: GermanExam, c: CountryEntry) =>
  `${EXAMS_INDEX}/${examSlug(exam)}/${originParam(c)}`;

export const examPurposeOriginUrl = (exam: GermanExam, p: Purpose, c: CountryEntry) =>
  `${EXAMS_INDEX}/${examSlug(exam)}/for-${p.slug}/${originParam(c)}`;

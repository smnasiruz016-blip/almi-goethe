// One place that builds every internal SEO URL under /pruefung, so links and the
// sitemap can never drift. Only the exam hubs remain: the exam x origin and
// exam x purpose x origin URLs were removed (cost fix, Oct 2026) and answer 410 Gone.

import type { GermanExam } from "@/lib/exams/types";
import { examSlug, EXAMS_INDEX } from "./exams-data";

export { EXAMS_INDEX };

export const examHubUrl = (exam: GermanExam) => `${EXAMS_INDEX}/${examSlug(exam)}`;

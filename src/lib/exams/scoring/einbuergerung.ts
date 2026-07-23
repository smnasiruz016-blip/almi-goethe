// Einbürgerungstest scoring — the engines' FOURTH philosophy, and the first CIVIC
// one. Not language: 33 four-option MCQs about Germany, COUNT-BASED pass/fail.
//
// VERIFIED (official Einbürgerungstest / BAMF):
//   • 33 questions (30 general + 3 Bundesland-specific), 60 minutes.
//   • PASS = 17 or more correct. Below 17 is "nicht bestanden".
//   • NO CEFR level, NO percentage band, NO per-domain minimum — the verdict is a
//     plain threshold on the count of correct answers.
//
// Distinct from TestDaF (per-section TDN), telc (%-per-part 60% gate) and DTZ
// (fixed-total /100 banded A2/B1). Here the only number that matters is: how many
// of 33 did you get right, and is that at least 17.

import type {
  EinbVerdict,
  EinbSectionResult,
  EinbExamResult,
  GermanExam,
} from "@/lib/exams/types";
import { EINB_QUESTION_COUNT, EINB_PASS_MARK } from "@/lib/exams/types";

const DOMAIN_LABEL: Record<string, string> = {
  GRUNDGESETZ: "Grundgesetz und Grundrechte",
  GESCHICHTE: "Geschichte und Verantwortung",
  INSTITUTIONEN: "Staat und Institutionen",
  GESELLSCHAFT: "Gesellschaft und Zusammenleben",
};

/** The pass/fail verdict for a count of correct answers out of 33. */
export function countToEinbVerdict(correct: number): EinbVerdict {
  return correct >= EINB_PASS_MARK ? "bestanden" : "nicht-bestanden";
}

export const EINB_VERDICT_LABEL: Record<EinbVerdict, string> = {
  bestanden: "bestanden",
  "nicht-bestanden": "nicht bestanden",
};

/** Score one practised domain from a 0..1 fraction (correct / attempted). Reports
 *  the raw count for that domain — the pass verdict belongs to the full 33-question
 *  mock, never to a single domain (there are no per-domain minimums). */
export function scoreEinbSection(
  section: string,
  fraction: number,
  attempted = 1,
): EinbSectionResult {
  const total = Math.max(1, Math.round(attempted));
  const correct = Math.round(Math.min(1, Math.max(0, fraction)) * total);
  return {
    section,
    label: DOMAIN_LABEL[section] ?? section,
    correct,
    total,
    passMark: EINB_PASS_MARK,
    questionCount: EINB_QUESTION_COUNT,
  };
}

/** Score a full 33-question mock: count correct, then apply the 17/33 threshold.
 *  This is the only function that produces an Einbürgerungstest verdict. */
export function aggregateEinb(
  exam: GermanExam,
  displayName: string,
  correct: number,
): EinbExamResult {
  const c = Math.min(EINB_QUESTION_COUNT, Math.max(0, Math.round(correct)));
  const verdict = countToEinbVerdict(c);
  return {
    exam,
    displayName,
    correct: c,
    questionCount: EINB_QUESTION_COUNT,
    passMark: EINB_PASS_MARK,
    verdict,
    verdictLabel: EINB_VERDICT_LABEL[verdict],
    thresholdVerified: true, // 17/33 is the official pass mark
  };
}

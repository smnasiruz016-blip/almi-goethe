// telc Deutsch B1 (= Zertifikat Deutsch) — original practice items (CEFR B1). The
// citizenship flagship. Everyday themes. Written part 225 / oral 75 / total 300;
// pass = 60% of EACH part independently (135/225 and 45/75); modular.
//
// ORIGINALITY (doctrine #1): every text, gap and task is ORIGINAL to AlmiGoethe —
// never copied or derived from telc materials, Übungstests or the ZD B1 booklet.
//
// Density target: 16 items/section (full build). Filled section-by-section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B1;
const EXAM = "TELC_B1" as const;

export const ITEMS: ExamItemInput[] = [
  // LESEVERSTEHEN lives in ./telc-b1-leseverstehen.ts.
  // Its 16 items here carried ONE invented taskType (TELC_B1_LV_MCQ) with three
  // questions each; the real section has THREE Teile with published counts
  // (5/5/10 = 20). Re-authored, not relabelled.

  // SPRACHBAUSTEINE lives in ./telc-b1-sprachbausteine.ts.
  // Its 16 items here carried ONE invented taskType (TELC_B1_SB_GAP) with three
  // questions each and did not distinguish the two Teile at all; the real section has
  // TWO Teile of 10 gaps (grammar / vocabulary). Re-authored, not relabelled.

  // HOERVERSTEHEN lives in ./telc-b1-hoerverstehen.ts.
  // Its 16 items here carried TWO INVENTED taskTypes (TELC_B1_HV_ANNOUNCE and
  // TELC_B1_HV_DIALOG) with three MC questions each; the real section has THREE
  // Teile with published counts (5/10/5 = 20, Aufgaben 41-60) and is richtig/falsch
  // throughout. Re-authored, not relabelled.

  // SCHRIFTLICHER_AUSDRUCK lives in ./telc-b1-schriftlicher-ausdruck.ts.
  // Its 16 items here carried the invented taskType TELC_B1_SA_LETTER and buried
  // their Leitpunkte in running prose; the real Aufgabe is TELC_B1_SA_BRIEF, ONE
  // letter to a Vorgabe with exactly three Leitpunkte. Re-authored under the same
  // titles, so the sixteen rows update in place rather than churning the bank.

  // SPRECHEN lives in ./telc-b1-sprechen.ts.
  // Teil 3 was the only Sprechen Aufgabe in the bank; Teil 1 (Kontaktaufnahme)
  // and Teil 2 (ueber ein Thema sprechen) were missing entirely. The 16 Teil-3
  // items moved there under the same titles, with their taskType corrected from
  // the non-conformant TELC_B1_SP_PLAN to the real key TELC_B1_SP_PLANEN
  // (in-place update, zero deactivations); Teil 1 and Teil 2 are new builds.

  // ==== all five telc B1 sections now at full 16/section density ====
];

// ÖSD ZDÖ B1 scoring — telc's %-per-part PHILOSOPHY (≈60% pass), wrapped in the one
// thing that is distinct about ÖSD: TWO SEPARATELY-CERTIFIABLE MODULES (Written =
// Lesen + Hören + Schreiben; Oral = Sprechen). This is NOT a sixth philosophy — it
// reuses the percentage-vs-60% verdict and adds a module wrapper.
//
// ⚠️ HONESTY: the ~60% pass and the module split are sourced (osd.at / ÖSD B1
// Modellsatz); the EXACT point scheme is convention (verify against the Modellsatz),
// so every result carries thresholdVerified: false for the points — the percentage
// is an honest practice estimate, not the official ÖSD score.
//
// CORRIDOR: ÖSD ZDÖ B1 = Module 2 of the Austrian Integration Agreement (B1).
// Austrian citizenship is B1 TODAY; a B2 reform is proposed, not enacted.

import type {
  Verdict,
  OesdModule,
  OesdSectionResult,
  OesdExamResult,
  GermanExam,
} from "@/lib/exams/types";
import { OESD_MODULE } from "@/lib/exams/types";

export const OESD_PASS_PERCENT = 60 as const;

const SECTION_LABEL: Record<string, string> = {
  LESEVERSTEHEN: "Lesen",
  HOERVERSTEHEN: "Hören",
  SCHRIFTLICHER_AUSDRUCK: "Schreiben",
  SPRECHEN: "Sprechen",
};

const MODULE_LABEL: Record<OesdModule, string> = {
  written: "Schriftliche Prüfung (Lesen · Hören · Schreiben)",
  oral: "Mündliche Prüfung (Sprechen)",
};

const MODULE_NOTE =
  "ÖSD ZDÖ B1 has two modules that are certified separately: the written module (Lesen, Hören, Schreiben) and the oral module (Sprechen). You can sit each on its own; passing both within a year at the same centre gives the full certificate.";

/** Percentage → verdict against the ~60% mark (same shape as telc). */
export function percentToOesdVerdict(percent: number): Verdict {
  if (percent >= OESD_PASS_PERCENT) return "passed";
  if (percent >= OESD_PASS_PERCENT - 5) return "borderline";
  return "not-yet";
}

/** Score one ÖSD section from a 0..1 fraction → a percent, tagged with its module. */
export function scoreOesdSection(section: string, fraction: number): OesdSectionResult {
  const percent = Math.round(Math.min(1, Math.max(0, fraction)) * 100);
  return {
    section,
    label: SECTION_LABEL[section] ?? section,
    module: OESD_MODULE[section] ?? "written",
    percent,
    passPercent: OESD_PASS_PERCENT,
    verdict: percentToOesdVerdict(percent),
    thresholdVerified: false, // exact point scheme is convention (verify vs Modellsatz)
  };
}

/** Aggregate a full ÖSD run: roll the sections up into the TWO modules, each with
 *  its own percentage and verdict — because the modules are certified separately. */
export function aggregateOesd(
  exam: GermanExam,
  displayName: string,
  sections: OesdSectionResult[],
): OesdExamResult {
  const byModule = (m: OesdModule) => sections.filter((s) => s.module === m);
  const modules = (["written", "oral"] as OesdModule[])
    .map((m) => {
      const secs = byModule(m);
      if (secs.length === 0) return null;
      const percent = Math.round(secs.reduce((sum, s) => sum + s.percent, 0) / secs.length);
      return { module: m, label: MODULE_LABEL[m], percent, verdict: percentToOesdVerdict(percent) };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
  return {
    exam,
    displayName,
    sections,
    modules,
    separatelyCertifiable: true,
    passPercent: OESD_PASS_PERCENT,
    thresholdVerified: false,
    moduleNote: MODULE_NOTE,
  };
}

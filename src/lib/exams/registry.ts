// The data-driven registry for the eight German and Austrian exam engines. One place that
// knows each exam's SECTIONS and how each is scored. Pages, the practice hub, the
// mock plan and the submit route read from here; nothing branches on exam/section
// with a hand-written if-chain.
//
// Scoring philosophy is NEVER blended: TestDaF sections map to an independent TDN
// (no total, no pass/fail); telc sections map to a percentage against the 60% mark.

import type { GermanExam } from "@/lib/exams/types";
import type { TestDafSectionResult, TelcSkillResult, DtzSectionResult, DtzSection, EinbSectionResult, DshSectionResult, OesdSectionResult } from "@/lib/exams/types";
import { fractionToTestDafSection } from "@/lib/exams/scoring/testdaf";
import { getTelcConfig, scoreTelcSection } from "@/lib/exams/scoring/telc";
import { scoreDtzSection } from "@/lib/exams/scoring/dtz";
import { scoreEinbSection } from "@/lib/exams/scoring/einbuergerung";
import { scoreDshSection } from "@/lib/exams/scoring/dsh";
import { scoreOesdSection } from "@/lib/exams/scoring/oesd";
import { isTestDaf, isDtz, isEinb, isDsh, isOesd } from "@/lib/exams/scoring";
import { TESTDAF_SECTIONS, DTZ_SECTIONS } from "@/lib/exams/types";
import {
  objectivePayloadSchema,
  objectiveResponseSchema,
  productivePayloadSchema,
  scoreObjective,
  speakingResponseSchema,
  writingResponseSchema,
} from "@/lib/exams/tasks";
import { evaluateProductive, type ProductiveFeedback } from "@/lib/exams/graders/productive";

export type SectionKind = "objective" | "writing" | "speaking";
export type ScoringMode = "DETERMINISTIC" | "AI";

// Section vocabulary shared across engines → display + kind + URL slug.
const SECTION_META: Record<string, { label: string; kind: SectionKind; slug: string }> = {
  LESEVERSTEHEN: { label: "Leseverstehen (Reading)", kind: "objective", slug: "leseverstehen" },
  HOERVERSTEHEN: { label: "Hörverstehen (Listening)", kind: "objective", slug: "hoerverstehen" },
  SPRACHBAUSTEINE: { label: "Sprachbausteine (Language elements)", kind: "objective", slug: "sprachbausteine" },
  SCHRIFTLICHER_AUSDRUCK: { label: "Schriftlicher Ausdruck (Writing)", kind: "writing", slug: "schriftlicher-ausdruck" },
  MUENDLICHER_AUSDRUCK: { label: "Mündlicher Ausdruck (Speaking)", kind: "speaking", slug: "muendlicher-ausdruck" },
  SPRECHEN: { label: "Sprechen (Speaking)", kind: "speaking", slug: "sprechen" },
  // Einbürgerungstest civic domains — objective 4-option MCQ, one per domain.
  GRUNDGESETZ: { label: "Grundgesetz und Grundrechte", kind: "objective", slug: "grundgesetz" },
  GESCHICHTE: { label: "Geschichte und Verantwortung", kind: "objective", slug: "geschichte" },
  INSTITUTIONEN: { label: "Staat und Institutionen", kind: "objective", slug: "institutionen" },
  GESELLSCHAFT: { label: "Gesellschaft und Zusammenleben", kind: "objective", slug: "gesellschaft" },
  BUNDESLAND: { label: "Bundesland — Hauptstadt und Landesparlament", kind: "objective", slug: "bundesland" },
  // DSH — wissenschaftssprachliche Strukturen (objective) + Textproduktion (writing).
  WISS_STRUKTUREN: { label: "Wissenschaftssprachliche Strukturen", kind: "objective", slug: "wiss-strukturen" },
  TEXTPRODUKTION: { label: "Textproduktion (Writing)", kind: "writing", slug: "textproduktion" },
};

function modeFor(kind: SectionKind): ScoringMode {
  return kind === "objective" ? "DETERMINISTIC" : "AI";
}

export type ExamSectionDef = {
  key: string;
  label: string;
  kind: SectionKind;
  slug: string;
  scoringMode: ScoringMode;
};

export type ExamDef = {
  exam: GermanExam;
  displayName: string;
  levelLabel: string; // grader/UI framing
  isTestDaf: boolean;
  sections: ExamSectionDef[];
};

// TestDaF's four sections in exam order (no Sprachbausteine).
const TESTDAF_SECTION_ORDER: string[] = [...TESTDAF_SECTIONS];

// DTZ's four sections in exam order (no Sprachbausteine — the Prüfungshandbuch
// confirms DTZ A2–B1 has no SB component; grammar is embedded in Lesen).
const DTZ_SECTION_ORDER: string[] = [...DTZ_SECTIONS];

// Einbürgerungstest civic domains in exam order (A → C → B → D as presented).
// BUNDESLAND last: the real test asks the 30 federal questions and then 3 from the
// candidate's own Land, so the served order mirrors the exam.
const EINB_SECTION_ORDER: string[] = ["GRUNDGESETZ", "INSTITUTIONEN", "GESCHICHTE", "GESELLSCHAFT", "BUNDESLAND"];

// DSH: the four WRITTEN sections in weight order, then the separate oral part.
const DSH_SECTION_ORDER: string[] = ["HOERVERSTEHEN", "LESEVERSTEHEN", "WISS_STRUKTUREN", "TEXTPRODUKTION", "SPRECHEN"];

// ÖSD ZDÖ B1: written module (Lesen, Hören, Schreiben) then oral (Sprechen).
const OESD_SECTION_ORDER: string[] = ["LESEVERSTEHEN", "HOERVERSTEHEN", "SCHRIFTLICHER_AUSDRUCK", "SPRECHEN"];

function sectionDef(key: string): ExamSectionDef {
  const meta = SECTION_META[key];
  if (!meta) throw new Error(`No section meta for ${key}`);
  return { key, label: meta.label, kind: meta.kind, slug: meta.slug, scoringMode: modeFor(meta.kind) };
}

const LEVEL_LABEL: Record<GermanExam, string> = {
  TESTDAF: "TestDaF · CEFR B2–C1",
  TELC_B1: "telc Deutsch B1",
  TELC_B2: "telc Deutsch B2",
  TELC_C1_HOCHSCHULE: "telc Deutsch C1 Hochschule",
  DTZ: "Deutsch-Test für Zuwanderer · A2–B1",
  EINBUERGERUNGSTEST: "Einbürgerungstest · Leben in Deutschland",
  DSH: "DSH · Hochschulzugang B2–C2",
  OESD_B1: "ÖSD Zertifikat B1 (Österreich)",
};

const DISPLAY_NAME: Record<GermanExam, string> = {
  TESTDAF: "TestDaF",
  TELC_B1: "telc Deutsch B1 (Zertifikat Deutsch)",
  TELC_B2: "telc Deutsch B2",
  TELC_C1_HOCHSCHULE: "telc Deutsch C1 Hochschule",
  DTZ: "Deutsch-Test für Zuwanderer (DTZ)",
  EINBUERGERUNGSTEST: "Einbürgerungstest",
  DSH: "DSH (Deutsche Sprachprüfung für den Hochschulzugang)",
  OESD_B1: "ÖSD Zertifikat Deutsch Österreich B1 (ZDÖ)",
};

function buildExamDef(exam: GermanExam): ExamDef {
  const keys =
    exam === "TESTDAF"
      ? TESTDAF_SECTION_ORDER
      : isDtz(exam)
        ? DTZ_SECTION_ORDER
        : isEinb(exam)
          ? EINB_SECTION_ORDER
          : isDsh(exam)
            ? DSH_SECTION_ORDER
            : isOesd(exam)
              ? OESD_SECTION_ORDER
              : getTelcConfig(exam).sections.map((s) => s.key);
  return {
    exam,
    displayName: DISPLAY_NAME[exam],
    levelLabel: LEVEL_LABEL[exam],
    isTestDaf: isTestDaf(exam),
    sections: keys.map(sectionDef),
  };
}

export const EXAM_DEFS: Record<GermanExam, ExamDef> = {
  TESTDAF: buildExamDef("TESTDAF"),
  TELC_B1: buildExamDef("TELC_B1"),
  TELC_B2: buildExamDef("TELC_B2"),
  TELC_C1_HOCHSCHULE: buildExamDef("TELC_C1_HOCHSCHULE"),
  DTZ: buildExamDef("DTZ"),
  EINBUERGERUNGSTEST: buildExamDef("EINBUERGERUNGSTEST"),
  DSH: buildExamDef("DSH"),
  OESD_B1: buildExamDef("OESD_B1"),
};

export const ALL_EXAMS: GermanExam[] = ["TESTDAF", "TELC_C1_HOCHSCHULE", "TELC_B1", "TELC_B2", "DTZ", "EINBUERGERUNGSTEST", "DSH", "OESD_B1"];

export function examBySlug(slug: string): ExamDef | undefined {
  return Object.values(EXAM_DEFS).find(
    (e) => e.exam.toLowerCase().replace(/_/g, "-") === slug,
  );
}

export function sectionDefFor(exam: GermanExam, section: string): ExamSectionDef | undefined {
  return EXAM_DEFS[exam].sections.find((s) => s.key === section || s.slug === section);
}

// ---- Server scoring dispatch -----------------------------------------------

export type SectionOutcome = {
  fraction: number;
  pointsEarned?: number;
  pointsMax?: number;
  // Exactly one engine result is set, per the exam's philosophy.
  testDaf?: TestDafSectionResult;
  telc?: TelcSkillResult;
  dtz?: DtzSectionResult;
  einb?: EinbSectionResult;
  dsh?: DshSectionResult;
  oesd?: OesdSectionResult;
  feedback?: ProductiveFeedback;
  telemetry?: { aiModel: string; costCents: number; latencyMs: number };
};

function mapFraction(
  exam: GermanExam,
  section: string,
  fraction: number,
  attempted?: number,
): Pick<SectionOutcome, "testDaf" | "telc" | "dtz" | "einb" | "dsh" | "oesd"> {
  if (isTestDaf(exam)) {
    return { testDaf: fractionToTestDafSection(section as TestDafSectionResult["section"], fraction) };
  }
  if (isDtz(exam)) {
    return { dtz: scoreDtzSection(section as DtzSection, fraction) };
  }
  if (isEinb(exam)) {
    return { einb: scoreEinbSection(section, fraction, attempted) };
  }
  if (isDsh(exam)) {
    return { dsh: scoreDshSection(section, fraction) };
  }
  if (isOesd(exam)) {
    return { oesd: scoreOesdSection(section, fraction) };
  }
  return { telc: scoreTelcSection(exam, section, fraction) };
}

/** Score one section attempt. Objective sections are marked deterministically;
 *  productive sections are graded by AI. Either way the fraction is mapped to the
 *  exam's own engine result — never a blended or fabricated total. */
export async function scoreSection(input: {
  exam: GermanExam;
  section: string;
  payload: unknown;
  response: unknown;
  userId: string;
}): Promise<SectionOutcome> {
  const { exam, section, payload, response, userId } = input;
  const def = sectionDefFor(exam, section);
  if (!def) throw new Error(`Section ${section} not defined for ${exam}`);

  if (def.kind === "objective") {
    const run = scoreObjective(objectivePayloadSchema.parse(payload), objectiveResponseSchema.parse(response));
    return {
      fraction: run.fraction,
      pointsEarned: run.pointsEarned,
      pointsMax: run.pointsMax,
      ...mapFraction(exam, def.key, run.fraction, run.pointsMax),
    };
  }

  const skill = def.kind; // "writing" | "speaking"
  const p = productivePayloadSchema.parse(payload);
  const r = skill === "writing" ? writingResponseSchema.parse(response) : speakingResponseSchema.parse(response);
  const s = await evaluateProductive({
    exam,
    section: def.key,
    skill,
    levelLabel: EXAM_DEFS[exam].levelLabel,
    payload: p,
    response: r,
    userId,
  });
  return {
    fraction: s.fraction,
    ...mapFraction(exam, def.key, s.fraction),
    feedback: s.feedback,
    telemetry: s.telemetry,
  };
}

/** A full mock = every section of the exam in order (the section engine picks an
 *  item per section). TestDaF returns four independent TDNs; telc aggregates parts. */
export function mockSections(exam: GermanExam): ExamSectionDef[] {
  return EXAM_DEFS[exam].sections;
}

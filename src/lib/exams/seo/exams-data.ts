// Real, verified SEO content for the four NEW German-exam engines (TestDaF + telc
// B1 / B2 / C1 Hochschule). This is the "real data" the SEO gate stands on: every
// exam fact here is sourced from docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md
// and the official provider. Where a number is not independently verified, the copy
// says so (telc B2 threshold) — it never implies a threshold it hasn't confirmed.
//
// The exam→purpose map is deliberately conservative: a purpose is listed ONLY where
// that exam is genuinely the standard German proof for it (TestDaF/C1H → university;
// B2 → skilled-work + medical; B1 → citizenship + skilled-work). Unlisted purposes
// are NOT fabricated onto an exam — pages for them fall to the noindex gate.

import type { GermanExam } from "@/lib/exams/types";
import { ALL_EXAMS, EXAM_DEFS } from "@/lib/exams/registry";
import { PURPOSES, findPurposeBySlug, type Purpose } from "@/lib/goethe/seo/levels";

export const EXAMS_INDEX = "/pruefung";

/** URL slug for an exam — identical rule to registry.examBySlug(). */
export function examSlug(exam: GermanExam): string {
  return exam.toLowerCase().replace(/_/g, "-");
}

export type ExamSeo = {
  exam: GermanExam;
  slug: string;
  name: string; // short display name
  fullName: string; // formal name
  provider: string; // who runs the real exam (for the not-affiliated framing)
  cefr: string; // CEFR band it certifies
  eyebrow: string;
  tagline: string; // one honest sentence
  sectionsLine: string; // the real section list
  format: string; // honest format paragraph
  scoring: string; // honest scoring philosophy
  scoringNote?: string; // extra honesty caveat (telc B2 unverified threshold)
  usedFor: string; // what it really opens up
  officialUrl: string;
  officialLabel: string;
  purposeSlugs: string[]; // REAL exam→purpose map (subset of PURPOSES slugs)
};

// Section list rendered from the registry so it can never drift from the engine.
function sectionsLine(exam: GermanExam): string {
  return EXAM_DEFS[exam].sections.map((s) => s.label).join(" · ");
}

const DATA: Record<GermanExam, Omit<ExamSeo, "slug" | "sectionsLine">> = {
  TESTDAF: {
    exam: "TESTDAF",
    name: "TestDaF",
    fullName: "Test Deutsch als Fremdsprache (TestDaF)",
    provider: "the TestDaF-Institut (g.a.s.t.)",
    cefr: "B2–C1",
    eyebrow: "University-admission German",
    tagline:
      "The standardised German test for university admission, reported as a level (TDN) per section — with no overall score and no pass or fail.",
    format:
      "Four sections — Leseverstehen (reading), Hörverstehen (listening), Schriftlicher Ausdruck (writing) and Mündlicher Ausdruck (speaking). It is offered on paper and as TestDaF digital at licensed test centres and online; check the official centre finder for where you can sit it.",
    scoring:
      "Each of the four sections is graded independently and reported as a TestDaF-Niveaustufe (TDN) — TDN 5, TDN 4 or TDN 3 — or as 'unter TDN 3' if below the band. There is no single total and no pass or fail: every section stands on its own. Universities set the TDN they want, commonly TDN 4 in each section.",
    usedFor:
      "TestDaF is one of the recognised proofs of German for admission to German-taught degree programmes, alongside the DSH. The exact TDN a programme needs is set by the university.",
    officialUrl: "https://www.testdaf.de/en/",
    officialLabel: "testdaf.de",
    purposeSlugs: ["university"],
  },
  TELC_C1_HOCHSCHULE: {
    exam: "TELC_C1_HOCHSCHULE",
    name: "telc Deutsch C1 Hochschule",
    fullName: "telc Deutsch C1 Hochschule",
    provider: "telc gGmbH",
    cefr: "C1",
    eyebrow: "University-admission German",
    tagline:
      "A C1 German certificate for university admission, marked as a percentage with a 60% pass mark — taken as separate written and oral parts.",
    format:
      "A written exam (Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher Ausdruck) plus a separate Mündlicher Ausdruck (oral). It is modular: the written and oral parts can be sat and passed separately.",
    scoring:
      "Marked as a percentage. You pass when you reach 60% overall and 60% in each part (written and oral). It certifies C1 and is accepted for admission to German-taught degree programmes.",
    usedFor:
      "telc Deutsch C1 Hochschule is designed specifically for university admission at C1. Confirm your programme accepts it and the exact level it requires.",
    officialUrl: "https://www.telc.net/en/",
    officialLabel: "telc.net",
    purposeSlugs: ["university"],
  },
  TELC_B2: {
    exam: "TELC_B2",
    name: "telc Deutsch B2",
    fullName: "telc Deutsch B2",
    provider: "telc gGmbH",
    cefr: "B2",
    eyebrow: "Skilled-work & health German",
    tagline:
      "An upper-intermediate B2 German certificate, commonly asked for skilled-work and regulated health routes.",
    format:
      "Five parts — Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher Ausdruck and Sprechen — combining a written exam with an oral.",
    scoring:
      "Marked as a percentage, per part. We estimate against a transparent 60% pass line so you can gauge where you stand.",
    scoringNote:
      "We have not independently verified telc's exact official B2 pass thresholds, so our estimate is guidance, not an official telc result — confirm the real pass requirement with telc.",
    usedFor:
      "B2 is frequently required for skilled-worker routes and for the recognition of regulated health professions (for example nursing). The exact level is set by the occupation and the competent authority.",
    officialUrl: "https://www.telc.net/en/",
    officialLabel: "telc.net",
    purposeSlugs: ["skilled-work", "medical-approbation"],
  },
  TELC_B1: {
    exam: "TELC_B1",
    name: "telc Deutsch B1",
    fullName: "telc Deutsch B1 (Zertifikat Deutsch)",
    provider: "telc gGmbH",
    cefr: "B1",
    eyebrow: "Citizenship & skilled-work German",
    tagline:
      "The intermediate B1 German certificate — the usual level for naturalisation and many skilled-work routes.",
    format:
      "Five parts — Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher Ausdruck and Sprechen — combining a written exam with an oral.",
    scoring:
      "Marked as a percentage; you pass the written and the oral part at 60% each. telc Deutsch B1 corresponds to the 'Zertifikat Deutsch' level.",
    usedFor:
      "B1 is the German level generally required for German citizenship (naturalisation) and is common on skilled-work routes. Confirm the current requirement with the relevant authority.",
    officialUrl: "https://www.telc.net/en/",
    officialLabel: "telc.net",
    purposeSlugs: ["citizenship", "skilled-work"],
  },
  DTZ: {
    exam: "DTZ",
    name: "Deutsch-Test für Zuwanderer",
    fullName: "Deutsch-Test für Zuwanderer (DTZ)",
    provider: "the Bundesamt für Migration und Flüchtlinge (BAMF); exam by telc / the Goethe-Institut",
    cefr: "A2–B1",
    eyebrow: "Integration & citizenship German",
    tagline:
      "The integration-course exam that certifies A2 or B1 from a single paper — the German usually required for naturalisation.",
    format:
      "One exam with a written part (Hören, Lesen, Schreiben) and an oral part (Sprechen). There is no separate Sprachbausteine section; grammar is embedded in the reading.",
    scoring:
      "One result out of 100 points, summed across the sections (Hören 25, Lesen 25, Schreiben 20, Sprechen 30) and banded into a level: 60 or more certifies B1, 33–59 certifies A2, and below 33 is not passed. There are no per-section minimums — the level is read from the total.",
    usedFor:
      "The DTZ closes the state integration course and is the German proof commonly accepted for naturalisation (which generally requires B1). Confirm the current requirement with the relevant authority.",
    officialUrl: "https://www.bamf.de/",
    officialLabel: "bamf.de",
    purposeSlugs: ["citizenship"],
  },
  EINBUERGERUNGSTEST: {
    exam: "EINBUERGERUNGSTEST",
    name: "Einbürgerungstest",
    fullName: "Einbürgerungstest (Leben in Deutschland)",
    provider: "the Bundesamt für Migration und Flüchtlinge (BAMF)",
    cefr: "—",
    eyebrow: "Civic naturalisation test",
    tagline:
      "The civic test for German naturalisation — 33 multiple-choice questions about the constitution, history, institutions and society, not a language exam.",
    format:
      "33 four-option multiple-choice questions in 60 minutes: 30 from the general federal catalogue plus 3 about your Bundesland. All questions are about Germany — its Grundgesetz, history, institutions and everyday rights and duties.",
    scoring:
      "You pass with 17 or more correct answers out of 33. There is no level and no grade — it is a straightforward pass or fail on the number correct.",
    usedFor:
      "The Einbürgerungstest is a standard requirement for German naturalisation (usually alongside a B1 language proof such as the DTZ or telc B1). Confirm the current requirement with the relevant authority.",
    officialUrl: "https://www.bamf.de/",
    officialLabel: "bamf.de",
    purposeSlugs: ["citizenship"],
  },
  DSH: {
    exam: "DSH",
    name: "DSH",
    fullName: "Deutsche Sprachprüfung für den Hochschulzugang (DSH)",
    provider: "German universities (framework by the HRK)",
    cefr: "B2–C2",
    eyebrow: "University-admission German",
    tagline:
      "A university-entry German exam set by each university within a national framework, reported as a grade — DSH-1, DSH-2 or DSH-3.",
    format:
      "A written exam with four sections — Hörverstehen, Leseverstehen, wissenschaftssprachliche Strukturen and Textproduktion — plus a separate oral. The framework is set nationally by the HRK, but each university writes its own tasks and sets its own item counts, so formats vary by institution.",
    scoring:
      "The four written sections are weighted 2:2:1:2 into one percentage and graded: 57–66% is DSH-1 (≈B2), 67–81% is DSH-2 (≈C1), 82%+ is DSH-3 (≈C2); below 57% is not passed. Some universities also require a minimum in each part — confirm with your university.",
    scoringNote:
      "DSH is decentralised: task formats and item counts are set by each university within the HRK framework, so this practice reflects the national task-types and weighting, not one university's exact paper.",
    usedFor:
      "The DSH is one of the recognised proofs of German for admission to German-taught degree programmes, alongside TestDaF. The DSH grade a programme needs is set by the university.",
    officialUrl: "https://www.hrk.de/",
    officialLabel: "hrk.de",
    purposeSlugs: ["university"],
  },
  OESD_B1: {
    exam: "OESD_B1",
    name: "ÖSD Zertifikat B1",
    fullName: "ÖSD Zertifikat Deutsch Österreich B1 (ZDÖ B1)",
    provider: "the Österreichisches Sprachdiplom Deutsch (ÖSD)",
    cefr: "B1",
    eyebrow: "Austrian integration & citizenship German",
    tagline:
      "The Austrian B1 German certificate — Module 2 of the Integration Agreement, for residence, integration and citizenship in Austria.",
    format:
      "Two modules that are certified separately: a written module (Lesen, Hören, Schreiben) and an oral module (Sprechen). You can sit each on its own; passing both within a year at the same centre gives the full certificate. Content is Austrian everyday life.",
    scoring:
      "Each module is marked as a percentage and passed at about 60%, independently of the other. This is scored the same way as the telc percentage engines; the exact ÖSD point scheme is set by the exam centre.",
    scoringNote:
      "We estimate against ÖSD's roughly 60% pass line so you can gauge where you stand; the exact official point scheme is set by ÖSD — confirm the real requirement with the exam centre.",
    usedFor:
      "ÖSD ZDÖ B1 is accepted for the Austrian Integration Agreement (Module 2, B1) and is the German level generally required for Austrian citizenship. Austria has proposed raising this to B2, but that is not yet in force — confirm the current requirement with the Austrian authority.",
    officialUrl: "https://www.osd.at/",
    officialLabel: "osd.at",
    purposeSlugs: ["citizenship"],
  },
};

export const EXAMS_SEO: Record<GermanExam, ExamSeo> = Object.fromEntries(
  ALL_EXAMS.map((exam) => [
    exam,
    { ...DATA[exam], slug: examSlug(exam), sectionsLine: sectionsLine(exam) },
  ]),
) as Record<GermanExam, ExamSeo>;

export const ALL_EXAM_SEO: ExamSeo[] = ALL_EXAMS.map((e) => EXAMS_SEO[e]);

export function examSeoBySlug(slug: string): ExamSeo | undefined {
  return ALL_EXAM_SEO.find((e) => e.slug === slug);
}

/** The REAL purposes this exam is a standard proof for (as Purpose objects). */
export function purposesForExam(exam: GermanExam): Purpose[] {
  return EXAMS_SEO[exam].purposeSlugs
    .map((s) => findPurposeBySlug(s))
    .filter((p): p is Purpose => p !== null);
}

/** The real-data gate for exam×purpose×origin: true only where the exam genuinely
 *  certifies for that purpose. Consulted by both the page (robots) and the sitemap. */
export function isRealExamPurpose(exam: GermanExam, purposeSlug: string): boolean {
  return EXAMS_SEO[exam].purposeSlugs.includes(purposeSlug);
}

export { PURPOSES };

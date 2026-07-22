// EXAM STRUCTURE — what each exam this product practises actually asks for.
//
// WHY THIS FILE EXISTS. Until it was written, no exam's TASK structure was recorded
// anywhere. docs/AlmiGoethe_TestDaF_telc_Verified_Scoring_Specs.md records how each
// exam is SCORED — points, weights, thresholds — and that file is law. But nothing
// recorded what an Aufgabe IS: how many Aufgaben a section has, which shapes they
// take, or how many items each carries. Items therefore carried a taskType with
// nothing to check it against.
//
// That is the precondition that produced 121 malformed items in almi-french and an
// entire surface authored as a translation of a different exam in almi-swiss. In
// both cases authors worked from whatever they last saw, and the drift was invisible
// because no file disagreed with them.
//
// ── TWO STRUCTURAL FAMILIES, NOT ONE ────────────────────────────────────────
// TestDaF is SINGLE-FORMAT and score-banded: every candidate sits the same paper and
// the result places them on TDN 3/4/5. Its cells are therefore NOT split by CEFR
// level — the level lives in the score, not in the shape. telc Deutsch is
// LEVEL-SPECIFIC: B1 and B2 are different papers, sat by choice.
//
// Writing a per-level TestDaF structure would imply a difference the exam does not
// have; writing a single telc structure would erase one it does.
//
// ── SOURCING IS RECORDED PER FIGURE, NOT PER FILE ───────────────────────────
// `sourced: true`  — published by the exam authority. HARD-ENFORCED: an item that
//                    does not fit is fixed, and the envelope never bends.
// `sourced: false` — this product's convention, pending confirmation against the
//                    authority's Modellsatz. The STRUCTURE is enforced; the COUNT is
//                    reported but never fails a build. Fabricating a number and then
//                    enforcing it would make the gate ratify our own invention —
//                    which is worse than not checking, because it looks like proof.
//
// SOURCE: founder research 2026-07-22 — TestDaF from the official testdaf.de digital
// Testaufbau; telc Deutsch B1 from telc's published exam structure, and its
// Hörverstehen additionally from the official telc Deutsch B1 Modellprüfung
// (Aufgaben 41–60), which is what let that section's 5/10/5 split move from
// convention to sourced on the same day.

export type Aufgabe = {
  /** Stable key an item declares in its taskType. */
  key: string;
  /** German name of the task as the exam calls it. */
  label: string;
  /** Number of scored items this Aufgabe carries, or null where not applicable. */
  items: number | null;
  /** true = published by the authority; false = our convention pending confirmation. */
  sourced: boolean;
};

export type SectionStructure = {
  section: string;
  /** Total scored items across the section, where published. */
  totalItems: number | null;
  minutes: number | null;
  aufgaben: Aufgabe[];
  sourced: boolean;
};

// ── ① TestDaF ───────────────────────────────────────────────────────────────
// Single format. Four sections, each graded independently 0–20 → TDN. Seven
// Aufgaben in each of the two receptive sections; the item counts below sum to the
// published section totals (34 and 30), which is the arithmetic check that the
// breakdown is complete.
export const TESTDAF_STRUCTURE: Record<string, SectionStructure> = {
  LESEVERSTEHEN: {
    section: "LESEVERSTEHEN",
    totalItems: 34,
    minutes: 55,
    sourced: true,
    aufgaben: [
      { key: "TESTDAF_LV_LUECKENTEXT", label: "Lückentext", items: 5, sourced: true },
      { key: "TESTDAF_LV_ABSCHNITTE_ORDNEN", label: "Textabschnitte ordnen", items: 4, sourced: true },
      { key: "TESTDAF_LV_MC", label: "Mehrfachauswahl", items: 7, sourced: true },
      { key: "TESTDAF_LV_SPRACHHANDLUNGEN", label: "Sprachhandlungen zuordnen", items: 4, sourced: true },
      { key: "TESTDAF_LV_KATEGORIEN", label: "Aussagen Kategorien zuordnen", items: 7, sourced: true },
      { key: "TESTDAF_LV_BEGRIFFSPAAR", label: "Aussagen einem Begriffspaar zuordnen", items: 4, sourced: true },
      { key: "TESTDAF_LV_FEHLER_ZUSAMMENFASSUNG", label: "Fehler in einer Zusammenfassung finden", items: 3, sourced: true },
    ],
  },
  HOERVERSTEHEN: {
    section: "HOERVERSTEHEN",
    totalItems: 30,
    minutes: 40,
    sourced: true,
    aufgaben: [
      { key: "TESTDAF_HV_UEBERSICHT", label: "Übersicht ergänzen", items: 5, sourced: true },
      { key: "TESTDAF_HV_BEGRIFFSPAAR", label: "Textstellen einem Begriffspaar zuordnen", items: 4, sourced: true },
      { key: "TESTDAF_HV_FEHLER_ZUSAMMENFASSUNG", label: "Fehler in einer Zusammenfassung finden", items: 2, sourced: true },
      { key: "TESTDAF_HV_PERSONEN", label: "Aussagen Personen zuordnen", items: 6, sourced: true },
      { key: "TESTDAF_HV_GLIEDERUNG", label: "Gliederungspunkte zuordnen", items: 4, sourced: true },
      { key: "TESTDAF_HV_MC", label: "Mehrfachauswahl", items: 5, sourced: true },
      { key: "TESTDAF_HV_LAUT_SCHRIFT", label: "Laut- und Schriftbild", items: 4, sourced: true },
    ],
  },
  SCHRIFTLICHER_AUSDRUCK: {
    section: "SCHRIFTLICHER_AUSDRUCK",
    totalItems: null,
    minutes: 60,
    sourced: true,
    aufgaben: [
      { key: "TESTDAF_SA_ARGUMENT", label: "Argumentativer Text", items: null, sourced: true },
      { key: "TESTDAF_SA_ZUSAMMENFASSUNG", label: "Lesetext und Grafik zusammenfassen", items: null, sourced: true },
    ],
  },
  MUENDLICHER_AUSDRUCK: {
    section: "MUENDLICHER_AUSDRUCK",
    totalItems: 7,
    minutes: 35,
    sourced: true,
    aufgaben: [
      // The seven situations are communicative tasks, not seven named shapes: the
      // exam varies the situation, and the item count IS the situation count.
      { key: "TESTDAF_MA_SITUATION", label: "Kommunikative Situation (eine von sieben)", items: null, sourced: true },
    ],
  },
};

/** TestDaF productive bounds, published. Writing task 1 has a floor and no ceiling;
 *  the ceiling below is OUR CONVENTION so the UI can show a target range — a real
 *  exam sets a floor and a time, never a maximum. Task 2 is a genuine range. */
export const TESTDAF_PRODUCTIVE = {
  SCHRIFTLICHER_AUSDRUCK: {
    TESTDAF_SA_ARGUMENT: { wordMin: 200, wordMaxSourced: false, wordMaxConvention: 320 },
    TESTDAF_SA_ZUSAMMENFASSUNG: { wordMin: 100, wordMax: 150, wordMaxSourced: true },
  },
  /** Speaking time per situation runs from 45 seconds to 2:30 depending on the
   *  task. Both ends are published, so the envelope is hard-enforced. */
  MUENDLICHER_AUSDRUCK: { speakSecondsMin: 45, speakSecondsMax: 150, sourced: true },
};

// ── ② telc Deutsch B1 ───────────────────────────────────────────────────────
// Level-specific, everyday register. Written part 225 points, oral 75 (see the
// scoring spec — points are NOT restated here, so the two files cannot disagree).
export const TELC_B1_STRUCTURE: Record<string, SectionStructure> = {
  LESEVERSTEHEN: {
    section: "LESEVERSTEHEN",
    totalItems: 20,
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "TELC_B1_LV_UEBERSCHRIFTEN", label: "Teil 1 — Texte Überschriften zuordnen", items: 5, sourced: true },
      { key: "TELC_B1_LV_MC", label: "Teil 2 — Mehrfachauswahl", items: 5, sourced: true },
      { key: "TELC_B1_LV_ANZEIGEN", label: "Teil 3 — Situationen Anzeigen zuordnen", items: 10, sourced: true },
    ],
  },
  SPRACHBAUSTEINE: {
    section: "SPRACHBAUSTEINE",
    totalItems: 20,
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "TELC_B1_SB_GRAMMATIK", label: "Teil 1 — 10 Lücken, Auswahl aus drei Optionen (Grammatik)", items: 10, sourced: true },
      { key: "TELC_B1_SB_WORTSCHATZ", label: "Teil 2 — 10 Lücken, Auswahl aus 15 Wörtern (Wortschatz)", items: 10, sourced: true },
    ],
  },
  HOERVERSTEHEN: {
    section: "HOERVERSTEHEN",
    totalItems: 20,
    minutes: null,
    // PINNED 2026-07-22 against the official telc Deutsch B1 Modellprüfung, where
    // this section is Aufgaben 41–60 — one continuous twenty-item run. The 5/10/5
    // split is therefore no longer our convention: it is published, and it is
    // HARD-ENFORCED, exactly like Leseverstehen.
    //
    // All twenty items are richtig/falsch. That uniformity is itself the sourced
    // figure — authoring Teil 2 or Teil 3 as three-option Mehrfachauswahl would
    // teach a task this exam does not set. What varies between the Teile is how
    // often the recording is heard and what kind of text it is, NOT the item shape.
    sourced: true,
    aufgaben: [
      { key: "TELC_B1_HV_GLOBAL", label: "Teil 1 — Globalverstehen (einmal gehört)", items: 5, sourced: true },
      { key: "TELC_B1_HV_DETAIL", label: "Teil 2 — Detailverstehen, Interview oder Bericht (zweimal gehört)", items: 10, sourced: true },
      { key: "TELC_B1_HV_SELEKTIV", label: "Teil 3 — Selektives Verstehen, kurze Mitteilungen (zweimal gehört)", items: 5, sourced: true },
    ],
  },
  SCHRIFTLICHER_AUSDRUCK: {
    section: "SCHRIFTLICHER_AUSDRUCK",
    totalItems: 1,
    minutes: null,
    sourced: true,
    aufgaben: [
      // ONE letter or email to a prompt. NOT an essay — an argumentative essay is a
      // B2-and-above task, and authoring one here would be teaching the wrong exam.
      { key: "TELC_B1_SA_BRIEF", label: "Ein Brief / eine E-Mail zu einer Vorgabe", items: 1, sourced: true },
    ],
  },
  SPRECHEN: {
    section: "SPRECHEN",
    totalItems: 3,
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "TELC_B1_SP_KONTAKT", label: "Teil 1 — Kontaktaufnahme", items: 1, sourced: true },
      { key: "TELC_B1_SP_THEMA", label: "Teil 2 — Über ein Thema sprechen", items: 1, sourced: true },
      { key: "TELC_B1_SP_PLANEN", label: "Teil 3 — Gemeinsam etwas planen", items: 1, sourced: true },
    ],
  },
};

/** Exams whose structure is recorded here. An exam absent from this map is NOT
 *  silently skipped by the conformance gate — it is reported, because an
 *  unstructured exam is an unchecked exam. */
export const EXAM_STRUCTURES: Record<string, Record<string, SectionStructure>> = {
  TESTDAF: TESTDAF_STRUCTURE,
  TELC_B1: TELC_B1_STRUCTURE,
};

/** Exams registered in the product but not yet structured. Explicit, so the gap is
 *  visible in code rather than inferred from a missing key. Batches are staged
 *  deliberately: telc B2, telc C1 Hochschule, Goethe-Zertifikat A1–C2, then the new
 *  engines (DSH, DTZ, Einbürgerungstest, ÖSD ZDÖ B1). */
export const UNSTRUCTURED_EXAMS = ["TELC_B2", "TELC_C1_HOCHSCHULE"] as const;

/** Look up the Aufgabe an item's taskType claims to be. */
export function aufgabeFor(exam: string, section: string, taskType: string): Aufgabe | undefined {
  return EXAM_STRUCTURES[exam]?.[section]?.aufgaben.find((a) => a.key === taskType);
}

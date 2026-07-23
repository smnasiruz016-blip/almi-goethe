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

/** telc B1 productive bounds.
 *
 *  ⚠️ NOTHING HERE IS ENFORCED, DELIBERATELY. telc publishes a TARGET ("circa 80
 *  Wörter") and a TIME (30 minutes) for the letter — a target is not a floor and
 *  not a ceiling, and a candidate who writes 70 or 95 words has not broken a
 *  rule. The 60–120 band this product shows in the UI is OUR convention, chosen
 *  so the learner sees a range rather than a single number.
 *
 *  Enforcing that band would be the exact move this file's header forbids: the
 *  gate would ratify our own invention and it would look like proof. So the band
 *  is recorded, flagged as convention, and left unchecked. The TestDaF envelope
 *  above IS enforced because both of its ends are published. */
export const TELC_B1_PRODUCTIVE = {
  SCHRIFTLICHER_AUSDRUCK: {
    TELC_B1_SA_BRIEF: {
      wordTarget: 80,
      wordTargetSourced: true,
      minutes: 30,
      minutesSourced: true,
      // Shown to the learner; not a rule the exam sets.
      bandMinConvention: 60,
      bandMaxConvention: 120,
      bandSourced: false,
    },
  },
} as const;

// ── ③ DTZ — Deutsch-Test für Zuwanderer ─────────────────────────────────────
// A2–B1, everyday/integration register. ONE fixed total /100 (Hören 25 · Lesen 25
// · Schreiben 20 · Sprechen 30), banded A2/B1 — see src/lib/exams/scoring/dtz.ts.
// SOURCE: official DTZ Prüfungshandbuch, goethe.de. NO Sprachbausteine — the
// handbook confirms DTZ has no SB component; grammar is embedded in Lesen, so Lesen
// is its own section and there is deliberately no SB cell.
export const DTZ_STRUCTURE: Record<string, SectionStructure> = {
  HOERVERSTEHEN: {
    section: "HOERVERSTEHEN",
    totalItems: 20, // 4+5+8+3; worth 25 points
    minutes: 25,
    sourced: true,
    aufgaben: [
      { key: "DTZ_HV_TEIL1", label: "Teil 1 — Telefonansagen", items: 4, sourced: true },
      { key: "DTZ_HV_TEIL2", label: "Teil 2 — Radioinformationen", items: 5, sourced: true },
      { key: "DTZ_HV_TEIL3", label: "Teil 3 — Gespräche", items: 8, sourced: true },
      { key: "DTZ_HV_TEIL4", label: "Teil 4 — Meinungsäußerungen im Radio", items: 3, sourced: true },
    ],
  },
  LESEVERSTEHEN: {
    section: "LESEVERSTEHEN",
    totalItems: 25, // 5+5+6+3+6; worth 25 points
    minutes: 45,
    sourced: true,
    aufgaben: [
      { key: "DTZ_LV_TEIL1", label: "Teil 1 — Kataloge / Verzeichnisse", items: 5, sourced: true },
      { key: "DTZ_LV_TEIL2", label: "Teil 2 — Anzeigen", items: 5, sourced: true },
      { key: "DTZ_LV_TEIL3", label: "Teil 3 — Presse / amtliche Mitteilungen", items: 6, sourced: true },
      { key: "DTZ_LV_TEIL4", label: "Teil 4 — Informationsbroschüren", items: 3, sourced: true },
      { key: "DTZ_LV_TEIL5", label: "Teil 5 — formeller Brief", items: 6, sourced: true },
    ],
  },
  SCHRIFTLICHER_AUSDRUCK: {
    section: "SCHRIFTLICHER_AUSDRUCK",
    totalItems: 1, // one letter; worth 20 points
    minutes: 30,
    sourced: true,
    aufgaben: [
      // ONE letter/e-mail, 80–100 words (SOURCED — hard-enforced, see DTZ_PRODUCTIVE),
      // to a recipient + situation with FOUR Leitpunkte.
      { key: "DTZ_SA_BRIEF", label: "Ein Brief / eine E-Mail (80–100 Wörter, 4 Leitpunkte)", items: 1, sourced: true },
    ],
  },
  SPRECHEN: {
    section: "SPRECHEN",
    totalItems: 3,
    minutes: 15,
    sourced: true,
    aufgaben: [
      { key: "DTZ_SP_VORSTELLEN", label: "Teil 1 — Über sich sprechen / sich vorstellen", items: 1, sourced: true },
      { key: "DTZ_SP_THEMA", label: "Teil 2 — Über ein Thema sprechen", items: 1, sourced: true },
      { key: "DTZ_SP_PLANEN", label: "Teil 3 — Gemeinsam etwas planen", items: 1, sourced: true },
    ],
  },
};

/** DTZ productive bounds. Unlike telc's "circa 80", the DTZ Prüfungshandbuch gives
 *  a real 80–100-word ENVELOPE for the letter — both ends published — so it is
 *  HARD-ENFORCED (see the conformance gate's DTZ branch). */
export const DTZ_PRODUCTIVE = {
  SCHRIFTLICHER_AUSDRUCK: {
    DTZ_SA_BRIEF: { wordMin: 80, wordMax: 100, wordMinSourced: true, wordMaxSourced: true, minutes: 30 },
  },
} as const;

// ── ④ Einbürgerungstest — German civic naturalisation test ──────────────────
// The first CIVIC exam: 33 four-option MCQs about Germany, count-based pass (≥17/33)
// — see src/lib/exams/scoring/einbuergerung.ts. SOURCE: official Einbürgerungstest /
// BAMF (33 questions = 30 general + 3 Bundesland-specific, 60 min, pass ≥17).
//
// The 300-question federal catalog is NEVER copied; items are ORIGINAL questions
// mapped to the verified fact-base (src/lib/exams/civic-factbase.ts), enforced by
// the civic-sourcing gate. Practice is organised by the four content DOMAINS; each
// item is a single MCQ, so every Aufgabe carries items: 1 and the domain holds ≥15.
//
// ⚠️ Bundesland-specific documented gap: the real test's 3 state-specific questions
// need per-state facts, which are NOT yet sourced and will NOT be fabricated. This
// bank covers the four GENERAL domains only; a mock draws 30 general questions and
// notes the 3 Bundesland questions as pending. See the founder note in the roadmap.
export const EINBUERGERUNG_STRUCTURE: Record<string, SectionStructure> = {
  GRUNDGESETZ: {
    section: "GRUNDGESETZ",
    totalItems: null,
    minutes: null,
    sourced: true,
    aufgaben: [{ key: "EINB_GRUNDGESETZ", label: "Domäne A — Grundgesetz und Grundrechte", items: 1, sourced: true }],
  },
  INSTITUTIONEN: {
    section: "INSTITUTIONEN",
    totalItems: null,
    minutes: null,
    sourced: true,
    aufgaben: [{ key: "EINB_INSTITUTIONEN", label: "Domäne C — Staat und Institutionen", items: 1, sourced: true }],
  },
  GESCHICHTE: {
    section: "GESCHICHTE",
    totalItems: null,
    minutes: null,
    sourced: true,
    aufgaben: [{ key: "EINB_GESCHICHTE", label: "Domäne B — Geschichte und Verantwortung", items: 1, sourced: true }],
  },
  GESELLSCHAFT: {
    section: "GESELLSCHAFT",
    totalItems: null,
    minutes: null,
    sourced: true,
    aufgaben: [{ key: "EINB_GESELLSCHAFT", label: "Domäne D — Gesellschaft und Zusammenleben", items: 1, sourced: true }],
  },
  // Domäne E — the per-state questions. The real test asks THREE of these (from the
  // candidate's own Land) alongside 30 federal questions; that count IS sourced, so
  // it is recorded here. Our fact-base currently anchors TWO per state, which is a
  // bank shortfall against a sourced envelope, not a reason to soften the envelope
  // — the count never bends to match the bank.
  BUNDESLAND: {
    section: "BUNDESLAND",
    totalItems: 3,
    minutes: null,
    sourced: true,
    aufgaben: [{ key: "EINB_BUNDESLAND", label: "Domäne E — Bundesland (Hauptstadt und Landesparlament)", items: 1, sourced: true }],
  },
};

// ── ⑤ DSH — Deutsche Sprachprüfung für den Hochschulzugang ──────────────────
// ⚠️ A FRAMEWORK, NOT A CATALOG. The HRK Rahmenordnung (RO-DT) fixes the four
// written sections, the weighting 2:2:1:2 and the grade bands — but each university
// designs its own tasks and sets its own COUNTS. So here the TASK-TYPES are sourced
// (membership hard-enforced), and every objective Aufgabe carries `items: null`
// because a fixed per-Teil count is NOT sourced — it is university-variable. The
// ONE sourced count/envelope is Textproduktion's 200–250 words (see DSH_PRODUCTIVE,
// hard-enforced). This is the honest position, exactly like the DALF ceilings.
//
// SOURCE: HRK RO-DT + Musterprüfungsordnung. Objective sections here are practised
// as auto-scored MCQ (the SKILL — Hör-/Leseverstehen, wiss. Strukturen — is what is
// sourced; the response format is a practice adaptation, since DSH itself leaves the
// format to each university). The oral (Mündliche Prüfung) is a separate part and
// does NOT enter the weighted written grade.
export const DSH_STRUCTURE: Record<string, SectionStructure> = {
  HOERVERSTEHEN: {
    section: "HOERVERSTEHEN",
    totalItems: null, // weight 2; count university-variable (convention)
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "DSH_HV_FRAGEN", label: "Hörverstehen — Fragen zum Vortrag", items: null, sourced: true },
      { key: "DSH_HV_HAUPTAUSSAGE", label: "Hörverstehen — Hauptaussagen / Zusammenfassung", items: null, sourced: true },
    ],
  },
  LESEVERSTEHEN: {
    section: "LESEVERSTEHEN",
    totalItems: null, // weight 2; count university-variable
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "DSH_LV_FRAGEN", label: "Leseverstehen — Fragen zum Text", items: null, sourced: true },
      { key: "DSH_LV_WORTERKLAERUNG", label: "Leseverstehen — Worterklärung im Kontext", items: null, sourced: true },
      { key: "DSH_LV_REFORMULIERUNG", label: "Leseverstehen — Umformulieren / Paraphrasieren", items: null, sourced: true },
    ],
  },
  WISS_STRUKTUREN: {
    section: "WISS_STRUKTUREN",
    totalItems: null, // weight 1; count university-variable
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "DSH_WS_NOMINALISIERUNG", label: "Nominalisierung ↔ Verbalisierung", items: null, sourced: true },
      { key: "DSH_WS_PASSIV", label: "Aktiv ↔ Passiv", items: null, sourced: true },
      { key: "DSH_WS_ATTRIBUTE", label: "Partizipial- / erweiterte Attribute", items: null, sourced: true },
      { key: "DSH_WS_KONNEKTOREN", label: "Konnektoren / Umformung von Nebensätzen", items: null, sourced: true },
    ],
  },
  TEXTPRODUKTION: {
    section: "TEXTPRODUKTION",
    totalItems: 1, // weight 2; ONE academic text, 200–250 words (SOURCED — hard-enforced)
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "DSH_TP_TEXT", label: "Textproduktion (200–250 Wörter): Grafik / Erörterung / Argumentation", items: 1, sourced: true },
    ],
  },
  SPRECHEN: {
    section: "SPRECHEN",
    totalItems: null, // the oral part — assessed separately, NOT in the weighted grade
    minutes: null,
    sourced: true,
    aufgaben: [
      { key: "DSH_SP_PRAESENTATION", label: "Mündlich — Text zusammenfassen und Position vertreten", items: null, sourced: true },
      { key: "DSH_SP_DISKUSSION", label: "Mündlich — Diskussion / auf Fragen reagieren", items: null, sourced: true },
    ],
  },
};

/** DSH productive envelope. Only Textproduktion's 200–250-word band is SOURCED (the
 *  RO-DT names it), so it is hard-enforced. Everything else about DSH counts is
 *  convention and lives, un-enforced, in the structure above. */
export const DSH_PRODUCTIVE = {
  TEXTPRODUKTION: {
    DSH_TP_TEXT: { wordMin: 200, wordMax: 250, wordMinSourced: true, wordMaxSourced: true },
  },
} as const;

// ── ⑥ ÖSD ZDÖ B1 — Zertifikat Deutsch Österreich B1 ─────────────────────────
// AUSTRIAN, not German. Two separately-certifiable modules: Written (Lesen · Hören
// · Schreiben) and Oral (Sprechen). SOURCE: osd.at + the ÖSD B1 Modellsatz.
//
// COUNTS DISCIPLINE (between DTZ's fixed catalog and DSH's pure framework): the
// Lesen/Hören section TOTALS (30 each) and the TASK-TYPES are sourced (task-type
// membership hard-enforced); the exact per-Teil item split is CONVENTION — verify
// against the Modellsatz, do NOT hard-fail on it — so every Lesen/Hören Aufgabe
// carries items: null. The Schreiben WORD BANDS (~80 / ~80 / ~40) ARE sourced and
// hard-enforced (see OESD_PRODUCTIVE + the conformance gate's ÖSD branch).
export const OESD_STRUCTURE: Record<string, SectionStructure> = {
  LESEVERSTEHEN: {
    section: "LESEVERSTEHEN",
    totalItems: 30, // sourced total; per-Teil split is convention (items: null)
    minutes: 65,
    sourced: true,
    aufgaben: [
      { key: "OESD_LV_TEIL1", label: "Teil 1 — Richtig/Falsch zu persönlicher Korrespondenz", items: null, sourced: true },
      { key: "OESD_LV_TEIL2", label: "Teil 2 — Mehrfachauswahl zu Pressetexten", items: null, sourced: true },
      { key: "OESD_LV_TEIL3", label: "Teil 3 — Anzeigen Situationen zuordnen", items: null, sourced: true },
      { key: "OESD_LV_TEIL4", label: "Teil 4 — Ja/Nein zu Positionen in Meinungstexten", items: null, sourced: true },
      { key: "OESD_LV_TEIL5", label: "Teil 5 — Mehrfachauswahl (a/b/c) zu Anweisungen", items: null, sourced: true },
    ],
  },
  HOERVERSTEHEN: {
    section: "HOERVERSTEHEN",
    totalItems: 30, // sourced total; per-Teil split convention
    minutes: 40,
    sourced: true,
    aufgaben: [
      { key: "OESD_HV_TEIL1", label: "Teil 1 — Durchsagen / kurze Mitteilungen (zweimal gehört)", items: null, sourced: true },
      { key: "OESD_HV_TEIL2", label: "Teil 2 — Monolog / Führung (einmal gehört)", items: null, sourced: true },
      { key: "OESD_HV_TEIL3", label: "Teil 3 — Gespräch (zwei Personen, einmal gehört)", items: null, sourced: true },
      { key: "OESD_HV_TEIL4", label: "Teil 4 — Radiodiskussion, Aussagen den Sprechenden zuordnen (zweimal gehört)", items: null, sourced: true },
    ],
  },
  SCHRIFTLICHER_AUSDRUCK: {
    section: "SCHRIFTLICHER_AUSDRUCK",
    totalItems: 3,
    minutes: 60,
    sourced: true,
    aufgaben: [
      { key: "OESD_SA_EMAIL", label: "Aufgabe 1 — persönliche E-Mail, informell (~80 Wörter)", items: 1, sourced: true },
      { key: "OESD_SA_FORUM", label: "Aufgabe 2 — Meinung / Forumsbeitrag, neutral (~80 Wörter)", items: 1, sourced: true },
      { key: "OESD_SA_FORMELL", label: "Aufgabe 3 — formelle Mitteilung, Sie-Form (~40 Wörter)", items: 1, sourced: true },
    ],
  },
  SPRECHEN: {
    section: "SPRECHEN",
    totalItems: 3,
    minutes: 15,
    sourced: true,
    aufgaben: [
      { key: "OESD_SP_PLANEN", label: "Aufgabe 1 — gemeinsam etwas planen (4 Leitpunkte)", items: null, sourced: true },
      { key: "OESD_SP_PRAESENTATION", label: "Aufgabe 2 — ein Thema präsentieren (5 Folien)", items: null, sourced: true },
      { key: "OESD_SP_FEEDBACK", label: "Aufgabe 3 — auf die Präsentation reagieren (Feedback + Fragen)", items: null, sourced: true },
    ],
  },
};

/** ÖSD productive word bands. The ~80 / ~80 / ~40-word targets are SOURCED, so they
 *  are hard-enforced within a practice envelope around each target (the CENTRE is
 *  sourced; the ± band is the practice tolerance). */
export const OESD_PRODUCTIVE = {
  SCHRIFTLICHER_AUSDRUCK: {
    OESD_SA_EMAIL: { wordMin: 70, wordMax: 100, target: 80, targetSourced: true },
    OESD_SA_FORUM: { wordMin: 70, wordMax: 100, target: 80, targetSourced: true },
    OESD_SA_FORMELL: { wordMin: 30, wordMax: 55, target: 40, targetSourced: true },
  },
} as const;

/** Exams whose structure is recorded here. An exam absent from this map is NOT
 *  silently skipped by the conformance gate — it is reported, because an
 *  unstructured exam is an unchecked exam. */
export const EXAM_STRUCTURES: Record<string, Record<string, SectionStructure>> = {
  TESTDAF: TESTDAF_STRUCTURE,
  TELC_B1: TELC_B1_STRUCTURE,
  DTZ: DTZ_STRUCTURE,
  EINBUERGERUNGSTEST: EINBUERGERUNG_STRUCTURE,
  DSH: DSH_STRUCTURE,
  OESD_B1: OESD_STRUCTURE,
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

/** The sourced number of items this section asks for, or null where not sourced. */
export function aufgabeCountFor(exam: string, section: string): number | null {
  return EXAM_STRUCTURES[exam]?.[section]?.totalItems ?? null;
}

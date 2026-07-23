// DSH (Deutsche Sprachprüfung für den Hochschulzugang, B2–C2) —
// Wissenschaftssprachliche Strukturen. Original practice items.
//
// ORIGINALITY (doctrine #1): every sentence and transformation below is ORIGINAL
// to AlmiGoethe — never copied or derived from real DSH Modellprüfungen,
// university-specific past papers, or published Übungsmaterial. Same IP rule as
// the rest of the exam engine.
//
// ── SECTION: WISSENSCHAFTSSPRACHLICHE STRUKTUREN (Grammatik), B2–C2 ──────────
// The DSH "Strukturen" (a.k.a. "Wissenschaftssprachliche Strukturen") subtest
// tests controlled academic grammar transformations: turning a clause into a
// nominal phrase and back, active↔passive (incl. modal passive and Zustands-
// passiv), participle/extended attributes ↔ relative clauses, and rephrasing
// subordinate clauses with different connectors. Register is academic throughout.
//
// GRAMMAR IS THE GRADED SKILL. Each item is a single transformation presented as
// a four-option MCQ: exactly ONE option is grammatically correct; the other three
// are plausibly wrong on ONE dimension — wrong case, wrong auxiliary/voice, wrong
// participle form or adjective ending, wrong word order, or a wrong/doubled
// connector. Every option has been checked individually for correctness.
//
// Answer keys are authored naturally and the caller permutes option positions
// deterministically at load time (see ./_permute.ts).

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.DSH;
const base = {
  exam: "DSH" as const,
  level: L,
  section: SECTION.WISS_STRUKTUREN,
  difficulty: "CORE" as const,
};

const RAW_ITEMS: ExamItemInput[] = [
  // ── DSH_WS_NOMINALISIERUNG — Nominalisierung ↔ Verbalisierung (4) ──────────
  {
    ...base,
    taskType: "DSH_WS_NOMINALISIERUNG",
    title: "Anstieg der Temperatur (kausal nominalisieren)",
    prompt: "Formen Sie den kausalen Nebensatz in eine Präpositionalphrase mit „aufgrund“ um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Weil die Temperatur steigt, dehnt sich das Metall aus.“ — Formen Sie den Nebensatz in eine Nominalphrase mit „aufgrund“ um.",
          options: [
            { id: "a", text: "Aufgrund des Anstiegs der Temperatur dehnt sich das Metall aus." },
            { id: "b", text: "Aufgrund dem Anstieg der Temperatur dehnt sich das Metall aus." },
            { id: "c", text: "Aufgrund den Anstieg der Temperatur dehnt sich das Metall aus." },
            { id: "d", text: "Trotz des Anstiegs der Temperatur dehnt sich das Metall aus." },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_NOMINALISIERUNG",
    title: "Auswertung der Daten (temporal verbalisieren)",
    prompt: "Lösen Sie die Nominalphrase in einen temporalen Nebensatz auf.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Nach der Auswertung der Daten veröffentlichte das Team die Ergebnisse.“ — Formen Sie die Nominalphrase in einen Nebensatz mit „nachdem“ um.",
          options: [
            { id: "a", text: "Nachdem die Daten ausgewertet haben, veröffentlichte das Team die Ergebnisse." },
            { id: "b", text: "Nachdem die Daten ausgewertet worden waren, veröffentlichte das Team die Ergebnisse." },
            { id: "c", text: "Weil die Daten ausgewertet worden waren, veröffentlichte das Team die Ergebnisse." },
            { id: "d", text: "Bevor die Daten ausgewertet worden waren, veröffentlichte das Team die Ergebnisse." },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_NOMINALISIERUNG",
    title: "Untersuchung der Proben (Nebensatz nominalisieren)",
    prompt: "Formen Sie den temporalen Nebensatz in eine Präpositionalphrase mit „während“ um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Während die Proben untersucht wurden, trugen die Forschenden Schutzkleidung.“ — Formen Sie den Nebensatz in eine Nominalphrase mit „während“ (+ Genitiv) um.",
          options: [
            { id: "a", text: "Während dem Untersuchen der Proben trugen die Forschenden Schutzkleidung." },
            { id: "b", text: "Während der Untersuchung den Proben trugen die Forschenden Schutzkleidung." },
            { id: "c", text: "Während der Untersuchung der Proben trugen die Forschenden Schutzkleidung." },
            { id: "d", text: "Trotz der Untersuchung der Proben trugen die Forschenden Schutzkleidung." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_NOMINALISIERUNG",
    title: "Verbesserung der Ergebnisse (final verbalisieren)",
    prompt: "Lösen Sie die finale Nominalphrase in einen Infinitivsatz auf.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Zur Verbesserung der Ergebnisse wiederholten die Studierenden das Experiment.“ — Formen Sie die Nominalphrase in einen Nebensatz mit „um … zu“ um.",
          options: [
            { id: "a", text: "Um die Ergebnisse zu verbessern, wiederholten die Studierenden das Experiment." },
            { id: "b", text: "Um die Ergebnisse verbessern zu, wiederholten die Studierenden das Experiment." },
            { id: "c", text: "Damit die Ergebnisse zu verbessern, wiederholten die Studierenden das Experiment." },
            { id: "d", text: "Weil die Ergebnisse zu verbessern, wiederholten die Studierenden das Experiment." },
          ],
          answer: "a",
        },
      ],
    },
  },

  // ── DSH_WS_PASSIV — Aktiv ↔ Passiv (4) ────────────────────────────────────
  {
    ...base,
    taskType: "DSH_WS_PASSIV",
    title: "Prüfung der Anträge (Vorgangspassiv Präsens)",
    prompt: "Formen Sie den Aktivsatz ins Vorgangspassiv (Präsens) um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Die Kommission prüft die Anträge.“ — Formen Sie den Satz ins Passiv (Präsens) um.",
          options: [
            { id: "a", text: "Die Anträge wird von der Kommission geprüft." },
            { id: "b", text: "Die Anträge werden von die Kommission geprüft." },
            { id: "c", text: "Die Anträge werden von der Kommission geprüft." },
            { id: "d", text: "Die Anträge sind von der Kommission geprüft worden." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_PASSIV",
    title: "Überprüfung der Ergebnisse (Passiv mit Modalverb)",
    prompt: "Formen Sie den Satz mit „man“ in ein Passiv mit Modalverb um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Man muss die Ergebnisse überprüfen.“ — Formen Sie den Satz ins Passiv um.",
          options: [
            { id: "a", text: "Die Ergebnisse müssen überprüft werden." },
            { id: "b", text: "Die Ergebnisse müssen überprüft worden." },
            { id: "c", text: "Die Ergebnisse müssen werden überprüft." },
            { id: "d", text: "Die Ergebnisse muss überprüft werden." },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_PASSIV",
    title: "Der Zustand der Tür (Zustandspassiv)",
    prompt: "Formen Sie den Satz in ein Zustandspassiv um, das das Ergebnis beschreibt.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Jemand hat die Tür geschlossen.“ — Formen Sie den Satz in ein Zustandspassiv (den resultierenden Zustand) um.",
          options: [
            { id: "a", text: "Die Tür wird geschlossen." },
            { id: "b", text: "Die Tür ist geschlossen." },
            { id: "c", text: "Die Tür ist geschlossen worden." },
            { id: "d", text: "Die Tür hat geschlossen." },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_PASSIV",
    title: "Zerstörung der Messstation (Passiv mit „durch“)",
    prompt: "Formen Sie den Aktivsatz ins Vorgangspassiv (Präteritum) um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Ein Sturm zerstörte die Messstation.“ — Formen Sie den Satz ins Passiv (Präteritum) um; die auslösende Naturkraft steht mit „durch“.",
          options: [
            { id: "a", text: "Die Messstation wurde durch einem Sturm zerstört." },
            { id: "b", text: "Die Messstation durch einen Sturm wurde zerstört." },
            { id: "c", text: "Die Messstation wurde durch einen Sturm zerstört worden." },
            { id: "d", text: "Die Messstation wurde durch einen Sturm zerstört." },
          ],
          answer: "d",
        },
      ],
    },
  },

  // ── DSH_WS_ATTRIBUTE — Partizipial-/erweitertes Attribut ↔ Relativsatz (4) ─
  {
    ...base,
    taskType: "DSH_WS_ATTRIBUTE",
    title: "Der verfasste Text (Relativsatz → Partizip II)",
    prompt: "Formen Sie den Relativsatz in ein Partizipialattribut um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„der Text, der von Forschenden verfasst wurde“ — Formen Sie den Relativsatz in ein Partizipialattribut um (Nominativ).",
          options: [
            { id: "a", text: "der von Forschenden verfasste Text" },
            { id: "b", text: "der von Forschenden verfassende Text" },
            { id: "c", text: "der von Forschenden verfasst Text" },
            { id: "d", text: "der von Forschenden verfassten Text" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_ATTRIBUTE",
    title: "Die wachsende Bevölkerung (Partizip I → Relativsatz)",
    prompt: "Formen Sie das Partizipialattribut in einen Relativsatz um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„die stetig wachsende Bevölkerung“ — Formen Sie das Attribut in einen Relativsatz um.",
          options: [
            { id: "a", text: "die Bevölkerung, die stetig wachsend" },
            { id: "b", text: "die Bevölkerung, die stetig gewachsen wird" },
            { id: "c", text: "die Bevölkerung, die stetig wächst" },
            { id: "d", text: "die Bevölkerung, die stetig wachsen" },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_ATTRIBUTE",
    title: "Die durchgeführten Versuche (erweitertes Attribut → Relativsatz)",
    prompt: "Formen Sie das erweiterte Partizipialattribut in einen Relativsatz um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„die im Labor durchgeführten Versuche“ — Formen Sie das Attribut in einen Relativsatz um.",
          options: [
            { id: "a", text: "die Versuche, die im Labor durchführten" },
            { id: "b", text: "die Versuche, die im Labor durchgeführt wurden" },
            { id: "c", text: "die Versuche, die im Labor durchgeführt haben" },
            { id: "d", text: "die Versuche, die im Labor durchgeführt worden" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_ATTRIBUTE",
    title: "Das auftretende Problem (Relativsatz → Partizip I)",
    prompt: "Formen Sie den Relativsatz in ein Partizipialattribut um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„ein Problem, das immer wieder auftritt“ — Formen Sie den Relativsatz in ein Partizipialattribut um (Nominativ).",
          options: [
            { id: "a", text: "ein immer wieder auftretende Problem" },
            { id: "b", text: "ein immer wieder auftretend Problem" },
            { id: "c", text: "ein immer wieder aufgetretenes Problem" },
            { id: "d", text: "ein immer wieder auftretendes Problem" },
          ],
          answer: "d",
        },
      ],
    },
  },

  // ── DSH_WS_KONNEKTOREN — Konnektoren / Umformung von Nebensätzen (4) ───────
  {
    ...base,
    taskType: "DSH_WS_KONNEKTOREN",
    title: "Der fehlgeschlagene Versuch (weil → deshalb)",
    prompt: "Formen Sie den kausalen Nebensatz mit dem Verbindungsadverb „deshalb“ um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Weil der Versuch fehlschlug, wurde er wiederholt.“ — Formen Sie den Satz mit „deshalb“ um.",
          options: [
            { id: "a", text: "Der Versuch schlug fehl, deshalb wurde er wiederholt." },
            { id: "b", text: "Der Versuch schlug fehl, deshalb er wurde wiederholt." },
            { id: "c", text: "Der Versuch fehlschlug, deshalb wurde er wiederholt." },
            { id: "d", text: "Weil der Versuch fehlschlug, deshalb wurde er wiederholt." },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_KONNEKTOREN",
    title: "Unvollständige Daten (obwohl → trotzdem)",
    prompt: "Formen Sie den konzessiven Nebensatz mit dem Verbindungsadverb „trotzdem“ um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Obwohl die Daten unvollständig waren, zog man Schlüsse.“ — Formen Sie den Satz mit „trotzdem“ um.",
          options: [
            { id: "a", text: "Die Daten waren unvollständig, trotzdem man zog Schlüsse." },
            { id: "b", text: "Die Daten unvollständig waren, trotzdem zog man Schlüsse." },
            { id: "c", text: "Die Daten waren unvollständig, trotzdem zog man Schlüsse." },
            { id: "d", text: "Obwohl die Daten unvollständig waren, trotzdem zog man Schlüsse." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_KONNEKTOREN",
    title: "Schlechtes Wetter (obwohl → trotz + Genitiv)",
    prompt: "Formen Sie den konzessiven Nebensatz in eine Präpositionalphrase mit „trotz“ um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Obwohl das Wetter schlecht war, fand die Exkursion statt.“ — Formen Sie den Nebensatz mit „trotz“ (+ Genitiv) um.",
          options: [
            { id: "a", text: "Trotz des schlechten Wetters fand die Exkursion statt." },
            { id: "b", text: "Trotz dem schlechten Wetter fand die Exkursion statt." },
            { id: "c", text: "Trotz des schlechten Wetter fand die Exkursion statt." },
            { id: "d", text: "Wegen des schlechten Wetters fand die Exkursion statt." },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DSH_WS_KONNEKTOREN",
    title: "Sorgfältige Notizen (damit → um … zu)",
    prompt: "Formen Sie den finalen Nebensatz bei Subjektgleichheit mit „um … zu“ um.",
    topicTag: "grammatik",
    timeLimitSeconds: 120,
    payload: {
      instructions: "Wählen Sie die grammatisch korrekte Umformung (a, b, c oder d).",
      questions: [
        {
          id: "q1",
          stem: "„Die Studierenden notierten alles, damit sie nichts vergaßen.“ — Formen Sie den Nebensatz mit „um … zu“ um.",
          options: [
            { id: "a", text: "Die Studierenden notierten alles, um nichts vergessen zu." },
            { id: "b", text: "Die Studierenden notierten alles, um nichts zu vergessen." },
            { id: "c", text: "Die Studierenden notierten alles, damit nichts zu vergessen." },
            { id: "d", text: "Die Studierenden notierten alles, um nichts zu vergessen haben." },
          ],
          answer: "b",
        },
      ],
    },
  },
];

// Permute the 4-option MC keys deterministically (see ./_permute.ts and the
// answer-distribution gate). Correctness untouched — only the letter under which
// the correct TEXT sits changes.
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set([
    "DSH_WS_NOMINALISIERUNG",
    "DSH_WS_PASSIV",
    "DSH_WS_ATTRIBUTE",
    "DSH_WS_KONNEKTOREN",
  ]),
});

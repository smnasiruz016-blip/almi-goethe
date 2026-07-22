// TestDaF — Mündlicher Ausdruck. Original practice items (CEFR B2–C1).
//
// ORIGINALITY (doctrine #1): every situation below is ORIGINAL to AlmiGoethe —
// never copied or derived from TestDaF / g.a.s.t. / TestDaF-Institut materials.
//
// ── ONE AUFGABE, SEVEN SITUATIONS ───────────────────────────────────────────
// The section presents seven communicative situations, recorded, with a speaking
// time that runs from 45 seconds to 2:30 depending on the task. They are seven
// TASKS, not seven differently-named shapes — so the structure file declares a
// single Aufgabe (TESTDAF_MA_SITUATION) rather than inventing seven keys the exam
// does not publish. Inventing them would put a false precision into the gate.
//
// What DOES vary, and what these items therefore span, is the communicative
// function and the length. The previous 16 items carried four invented taskTypes
// (_MA_DESCRIBE / _MA_OPINION / _MA_ADVISE / _MA_PLAN) and capped at 90 seconds, so
// the whole upper half of the published envelope had no items at all — a learner
// could not practise a 2:30 turn, which is the hardest thing this section asks for.
//
// Speaking times below run 45 · 60 · 90 · 120 · 150 seconds. The conformance gate
// enforces the 45–150 envelope because both ends are published.
//
// Depth: 21 items in one Aufgabe (>=15 section, >=3 Aufgabe). Above the floor by
// design — the floor is a minimum, not a quota, and seven communicative functions
// need more than three examples between them.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TESTDAF;
const base = {
  exam: "TESTDAF" as const,
  level: L,
  section: SECTION.MUENDLICHER_AUSDRUCK,
  taskType: "TESTDAF_MA_SITUATION",
  difficulty: "CORE" as const,
};

type Spec = {
  title: string;
  topicTag: string;
  situation: string;
  instruction: string;
  prep: number;
  speak: number;
};

const SPECS: Spec[] = [
  // ── Auskunft geben — kurz, 45 s ────────────────────────────────────────────
  {
    title: "Auskunft: Weg zum Prüfungsamt",
    topicTag: "studium",
    situation:
      "Eine Kommilitonin ruft Sie an. Sie sucht das Prüfungsamt, steht aber vor dem falschen Gebäude. Sie kennen den Weg: vom Haupteingang rechts, am Hörsaalzentrum vorbei, dann das flache Gebäude mit der grünen Tür, zweiter Stock.",
    instruction: "Erklären Sie ihr den Weg. Sprechen Sie etwa 45 Sekunden.",
    prep: 20,
    speak: 45,
  },
  {
    title: "Auskunft: Öffnungszeiten der Bibliothek",
    topicTag: "studium",
    situation:
      "Ein neuer Student fragt Sie nach den Öffnungszeiten der Bibliothek. Sie wissen: montags bis freitags von acht bis zweiundzwanzig Uhr, samstags nur bis vierzehn Uhr, sonntags geschlossen. In der vorlesungsfreien Zeit schließt sie täglich um achtzehn Uhr.",
    instruction: "Geben Sie ihm die Auskunft. Sprechen Sie etwa 45 Sekunden.",
    prep: 20,
    speak: 45,
  },
  {
    title: "Auskunft: Anmeldung zum Sprachkurs",
    topicTag: "bildung",
    situation:
      "Eine Bekannte möchte wissen, wie man sich für einen Sprachkurs anmeldet. Sie wissen: zuerst ein Einstufungstest online, danach die Anmeldung im Kursbüro, und die Gebühr wird erst nach der Zusage fällig.",
    instruction: "Erklären Sie ihr das Verfahren. Sprechen Sie etwa 45 Sekunden.",
    prep: 20,
    speak: 45,
  },

  // ── Um etwas bitten / eine Bitte begründen — 60 s ──────────────────────────
  {
    title: "Bitte: Verlängerung einer Abgabefrist",
    topicTag: "studium",
    situation:
      "Sie können eine Hausarbeit nicht rechtzeitig abgeben, weil Sie zwei Wochen krank waren. Sie sprechen mit Ihrem Dozenten und möchten um eine Verlängerung von zehn Tagen bitten.",
    instruction:
      "Tragen Sie Ihre Bitte vor und begründen Sie sie. Sprechen Sie etwa 60 Sekunden.",
    prep: 30,
    speak: 60,
  },
  {
    title: "Bitte: Wechsel der Seminargruppe",
    topicTag: "studium",
    situation:
      "Ihr Seminar überschneidet sich mit einer Pflichtvorlesung. Sie möchten in die Parallelgruppe am Donnerstag wechseln und sprechen mit der Seminarleiterin.",
    instruction:
      "Tragen Sie Ihre Bitte vor und begründen Sie sie. Sprechen Sie etwa 60 Sekunden.",
    prep: 30,
    speak: 60,
  },
  {
    title: "Bitte: Zugang zum Labor außerhalb der Öffnungszeiten",
    topicTag: "forschung",
    situation:
      "Für Ihre Abschlussarbeit müssen Sie eine Messreihe fortsetzen, die abends weiterläuft. Sie bitten die Laborleitung um einen Zugang nach achtzehn Uhr.",
    instruction:
      "Tragen Sie Ihre Bitte vor und begründen Sie sie. Sprechen Sie etwa 60 Sekunden.",
    prep: 30,
    speak: 60,
  },

  // ── Berichten / beschreiben — 90 s ─────────────────────────────────────────
  {
    title: "Bericht: Ein Praktikum beschreiben",
    topicTag: "arbeit",
    situation:
      "In einem Seminar sollen Sie von einem Praktikum berichten: wo Sie waren, welche Aufgaben Sie hatten, was Sie gelernt haben und was schwierig war.",
    instruction: "Berichten Sie zusammenhängend. Sprechen Sie etwa 90 Sekunden.",
    prep: 45,
    speak: 90,
  },
  {
    title: "Bericht: Studium im Heimatland",
    topicTag: "bildung",
    situation:
      "Eine Studiengruppe interessiert sich dafür, wie das Studium in Ihrem Heimatland organisiert ist: Zulassung, Ablauf des Studienjahres, Prüfungen und Kosten.",
    instruction: "Berichten Sie zusammenhängend. Sprechen Sie etwa 90 Sekunden.",
    prep: 45,
    speak: 90,
  },
  {
    title: "Bericht: Ein Umzug in eine andere Stadt",
    topicTag: "alltag",
    situation:
      "Sie sind vor einem halben Jahr in eine andere Stadt gezogen. Eine Freundin überlegt dasselbe und möchte wissen, wie es Ihnen ergangen ist — Wohnungssuche, Behörden, neue Kontakte.",
    instruction: "Berichten Sie zusammenhängend. Sprechen Sie etwa 90 Sekunden.",
    prep: 45,
    speak: 90,
  },

  // ── Ratschlag geben, Alternativen abwägen — 90 s ───────────────────────────
  {
    title: "Rat: Auslandssemester oder Praktikum",
    topicTag: "studium",
    situation:
      "Ein Kommilitone kann entweder ein Auslandssemester machen oder ein bezahltes Praktikum annehmen. Beides zugleich geht nicht. Er bittet Sie um Ihre Einschätzung.",
    instruction:
      "Wägen Sie die beiden Möglichkeiten ab und geben Sie einen begründeten Rat. Sprechen Sie etwa 90 Sekunden.",
    prep: 45,
    speak: 90,
  },
  {
    title: "Rat: Wohnheim oder Wohngemeinschaft",
    topicTag: "wohnen",
    situation:
      "Eine neue Studentin schwankt zwischen einem Zimmer im Wohnheim und einer Wohngemeinschaft in der Innenstadt. Sie fragt Sie nach Vor- und Nachteilen.",
    instruction:
      "Wägen Sie die beiden Möglichkeiten ab und geben Sie einen begründeten Rat. Sprechen Sie etwa 90 Sekunden.",
    prep: 45,
    speak: 90,
  },
  {
    title: "Rat: Nebenjob im Semester",
    topicTag: "arbeit",
    situation:
      "Ein Freund überlegt, im Semester zwanzig Stunden pro Woche zu arbeiten, um sich in den Ferien ganz auf Prüfungen konzentrieren zu können. Er ist unsicher.",
    instruction:
      "Wägen Sie ab und geben Sie einen begründeten Rat. Sprechen Sie etwa 90 Sekunden.",
    prep: 45,
    speak: 90,
  },

  // ── Eine Grafik beschreiben — 120 s ────────────────────────────────────────
  {
    title: "Grafik beschreiben: Verkehrsmittel auf dem Weg zur Hochschule",
    topicTag: "verkehr",
    situation:
      "In einem Seminar wird eine Grafik gezeigt. Die Zahlen sind für die Übung erfunden.\n\nWeg zur Hochschule, Anteile in Prozent:\n  Fahrrad 34 · Bus und Bahn 31 · zu Fuß 18 · Auto 14 · sonstiges 3",
    instruction:
      "Beschreiben Sie die Grafik: die auffälligsten Werte, Vergleiche zwischen den Gruppen, mögliche Gründe. Sprechen Sie etwa 2 Minuten.",
    prep: 60,
    speak: 120,
  },
  {
    title: "Grafik beschreiben: Wo Studierende lernen",
    topicTag: "studium",
    situation:
      "In einem Seminar wird eine Grafik gezeigt. Die Zahlen sind für die Übung erfunden.\n\nBevorzugter Lernort, Anteile in Prozent:\n  zu Hause 46 · Bibliothek 29 · Café 12 · Lernraum der Hochschule 10 · anderswo 3",
    instruction:
      "Beschreiben Sie die Grafik: die auffälligsten Werte, Vergleiche, mögliche Gründe. Sprechen Sie etwa 2 Minuten.",
    prep: 60,
    speak: 120,
  },
  {
    title: "Grafik beschreiben: Mediennutzung nach Altersgruppe",
    topicTag: "gesellschaft",
    situation:
      "In einem Seminar wird eine Grafik gezeigt. Die Zahlen sind für die Übung erfunden.\n\nTägliche Nachrichtenquelle, Anteile in Prozent:\n              18–29 Jahre   über 60 Jahre\n  Internet         71             28\n  Fernsehen        16             49\n  Radio             8             14\n  Zeitung           5              9",
    instruction:
      "Beschreiben und vergleichen Sie die beiden Gruppen. Sprechen Sie etwa 2 Minuten.",
    prep: 60,
    speak: 120,
  },

  // ── Eine Vermutung äußern / eine Entwicklung einschätzen — 120 s ───────────
  {
    title: "Vermutung: Wie sich das Lernen verändern wird",
    topicTag: "bildung",
    situation:
      "In einer Diskussionsrunde wird gefragt, wie das Studieren in zehn Jahren aussehen wird — mehr online, mehr vor Ort, oder eine Mischung.",
    instruction:
      "Äußern Sie eine begründete Vermutung und nennen Sie, was dafür und was dagegen spricht. Sprechen Sie etwa 2 Minuten.",
    prep: 60,
    speak: 120,
  },
  {
    title: "Vermutung: Folgen kürzerer Arbeitszeiten",
    topicTag: "arbeit",
    situation:
      "In einer Diskussionsrunde geht es um die Frage, welche Folgen eine allgemein kürzere Wochenarbeitszeit hätte.",
    instruction:
      "Äußern Sie eine begründete Vermutung und nennen Sie, was dafür und was dagegen spricht. Sprechen Sie etwa 2 Minuten.",
    prep: 60,
    speak: 120,
  },
  {
    title: "Vermutung: Zukunft der Innenstädte",
    topicTag: "stadt",
    situation:
      "In einer Diskussionsrunde wird gefragt, wie sich die Innenstädte entwickeln werden, wenn immer mehr online gekauft wird.",
    instruction:
      "Äußern Sie eine begründete Vermutung und nennen Sie, was dafür und was dagegen spricht. Sprechen Sie etwa 2 Minuten.",
    prep: 60,
    speak: 120,
  },

  // ── Stellung nehmen, ausführlich — 150 s (der längste Redebeitrag) ─────────
  {
    title: "Stellungnahme: Anwesenheitspflicht in Seminaren",
    topicTag: "studium",
    situation:
      "In einem Seminar wird über eine Anwesenheitspflicht diskutiert. Eine Seite hält sie für nötig, damit Diskussionen funktionieren; die andere hält sie für eine Benachteiligung berufstätiger Studierender.",
    instruction:
      "Nehmen Sie ausführlich Stellung: Argumente beider Seiten, Ihre eigene Position, eine Begründung. Sprechen Sie etwa 2 Minuten 30.",
    prep: 60,
    speak: 150,
  },
  {
    title: "Stellungnahme: Kostenloser Nahverkehr für Studierende",
    topicTag: "verkehr",
    situation:
      "Es wird vorgeschlagen, den Nahverkehr für Studierende vollständig kostenlos zu machen und die Kosten über einen höheren Semesterbeitrag für alle zu decken.",
    instruction:
      "Nehmen Sie ausführlich Stellung: Argumente beider Seiten, Ihre eigene Position, eine Begründung. Sprechen Sie etwa 2 Minuten 30.",
    prep: 60,
    speak: 150,
  },
  {
    title: "Stellungnahme: Prüfungen ohne Hilfsmittel",
    topicTag: "bildung",
    situation:
      "An einer Hochschule wird diskutiert, ob schriftliche Prüfungen künftig ganz ohne Hilfsmittel geschrieben werden sollen oder ob alle Hilfsmittel erlaubt sein sollten.",
    instruction:
      "Nehmen Sie ausführlich Stellung: Argumente beider Seiten, Ihre eigene Position, eine Begründung. Sprechen Sie etwa 2 Minuten 30.",
    prep: 60,
    speak: 150,
  },
];

export const ITEMS: ExamItemInput[] = SPECS.map((s) => ({
  ...base,
  title: s.title,
  topicTag: s.topicTag,
  prompt: s.instruction,
  timeLimitSeconds: s.prep + s.speak + 60,
  guidanceNote:
    "Sprechen Sie frei und zusammenhängend. Die Vorbereitungszeit ist kurz — notieren Sie Stichworte, keine ausformulierten Sätze.",
  payload: {
    situation: s.situation,
    instruction: s.instruction,
    prepSeconds: s.prep,
    speakSeconds: s.speak,
  },
}));

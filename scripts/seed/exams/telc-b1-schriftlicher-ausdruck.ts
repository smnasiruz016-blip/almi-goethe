// telc Deutsch B1 — Schriftlicher Ausdruck. Original practice items.
//
// ORIGINALITY (doctrine #1): every situation and prompt below is ORIGINAL to
// AlmiGoethe — never copied or derived from telc materials, Übungstests or
// Modellsätze.
//
// ONE Aufgabe, 30 minutes, circa 80 words:
//   TELC_B1_SA_BRIEF   Ein Brief / eine E-Mail zu einer Vorgabe
//
// ── ONE LETTER. NOT AN ESSAY. ───────────────────────────────────────────────
// This is the single most important fact about this section, and the easiest to
// get wrong, because "Schriftlicher Ausdruck" sounds like it should mean an
// argumentative text. It does not, at B1. An argumentative essay — thesis,
// counter-argument, conclusion — is a B2-and-above task. Authoring one here
// would teach the wrong exam to precisely the learners least able to notice.
//
// A telc B1 candidate is asked to do something ordinary and practical in
// writing: reply to an invitation, apologise, complain about a purchase, ask a
// school three questions. That is what these sixteen items are.
//
// ── WHAT THE GRADER ACTUALLY READS ──────────────────────────────────────────
// The productive grader scores "communication: task fulfilled, required points
// covered, register appropriate to the situation and level". The required points
// therefore have to be IN THE PROMPT TEXT the grader receives — and the payload
// the grader gets is exactly { situation, instruction, wordMin, wordMax }.
//
// ⚠️ A STRUCTURED `leitpunkte` ARRAY WOULD HAVE BEEN SILENTLY DISCARDED.
// productivePayloadSchema.parse() strips unknown keys, and ExamItemRunner renders
// only the fields it declares. A Leitpunkte array would have vanished twice over
// — never shown to the learner, never seen by the grader — while looking correct
// in this file. So the three Leitpunkte are written INTO the instruction prose,
// where both the learner and the grader actually meet them.
//
// Every item below states exactly THREE Leitpunkte and names the register, since
// telc scores Inhalt by whether all points are covered and marks register
// separately. The previous 16 items carried the invented taskType
// TELC_B1_SA_LETTER and buried their points in running prose — one of them ran
// to four points while its own guidanceNote insisted there were three.
//
// ── TITLES ARE DELIBERATELY UNCHANGED ───────────────────────────────────────
// Item identity is (exam, level, section, title), so re-authoring under the same
// titles UPDATES these sixteen rows in place instead of deactivating sixteen and
// inserting sixteen more. That is the seeder's stated design — "a corrected item
// updates in place rather than inserting a duplicate beside the row it was meant
// to replace" — and it keeps the reconcile diff honest and small.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B1;
const base = {
  exam: "TELC_B1" as const,
  level: L,
  section: SECTION.SCHRIFTLICHER_AUSDRUCK,
  difficulty: "CORE" as const,
};

// Shown to the learner as a target range. telc publishes "circa 80 Wörter"; the
// band is this product's convention and is NOT gate-enforced — see
// TELC_B1_PRODUCTIVE in src/lib/exams/exam-structure.ts for why.
const WORD_MIN = 60;
const WORD_MAX = 120;
const MINUTES = 30;

type Brief = {
  title: string;
  topicTag: string;
  /** "du" = private/informal, "Sie" = formal or unknown addressee. Both occur in
   *  the real exam, and choosing the wrong one costs marks under register. */
  register: "du" | "Sie";
  situation: string;
  /** Exactly three. Written into the instruction in order. */
  leitpunkte: [string, string, string];
  guidanceNote: string;
};

const BRIEFE: Brief[] = [
  {
    title: "Eine Einladung beantworten",
    topicTag: "alltag",
    register: "du",
    situation:
      "Ihre Freundin Nadia hat Sie zu ihrer Wohnungseinweihung am Samstag eingeladen. Sie freuen sich und können kommen.",
    leitpunkte: [
      "Bedanken Sie sich für die Einladung und sagen Sie zu.",
      "Fragen Sie, ob Sie etwas mitbringen sollen.",
      "Bitten Sie um eine kurze Wegbeschreibung.",
    ],
    guidanceNote:
      "Nadia ist eine Freundin — schreiben Sie in der du-Form. Alle drei Punkte müssen vorkommen; auf B1 zählt Vollständigkeit besonders.",
  },
  {
    title: "Sich für eine Verspätung entschuldigen",
    topicTag: "arbeit",
    register: "Sie",
    situation:
      "Sie hatten einen Termin bei Ihrer Sprachlehrerin Frau Klein, sind aber nicht erschienen, weil Ihr Bus ausgefallen ist.",
    leitpunkte: [
      "Entschuldigen Sie sich dafür, dass Sie nicht gekommen sind.",
      "Erklären Sie, warum Sie den Termin nicht wahrnehmen konnten.",
      "Schlagen Sie einen neuen Termin vor.",
    ],
    guidanceNote:
      "Frau Klein ist Ihre Lehrerin — Sie-Form und „Sehr geehrte Frau Klein“. Eine Entschuldigung ohne Begründung erfüllt den Punkt nicht.",
  },
  {
    title: "Um Informationen bitten",
    topicTag: "bildung",
    register: "Sie",
    situation:
      "Sie möchten in einer Sprachschule einen Deutschkurs besuchen. Auf der Internetseite fehlen Ihnen einige Angaben.",
    leitpunkte: [
      "Fragen Sie, wann der nächste Kurs beginnt.",
      "Fragen Sie, wie viel der Kurs kostet.",
      "Fragen Sie, ob Sie vorher einen Einstufungstest machen müssen.",
    ],
    guidanceNote:
      "Sie schreiben an eine Einrichtung, die Sie nicht kennen: „Sehr geehrte Damen und Herren“. Höfliche Formen wie „Könnten Sie mir bitte mitteilen …“ passen gut.",
  },
  {
    title: "Eine Ware reklamieren",
    topicTag: "alltag",
    register: "Sie",
    situation:
      "Sie haben im Internet eine Kaffeemaschine bestellt. Das Gerät ist angekommen, schaltet sich aber nach kurzer Zeit von allein aus.",
    leitpunkte: [
      "Beschreiben Sie, was genau nicht funktioniert.",
      "Sagen Sie, was Sie möchten: Umtausch oder Geld zurück.",
      "Fragen Sie, wie Sie das Gerät zurückschicken sollen.",
    ],
    guidanceNote:
      "Beschreiben Sie den Fehler konkret — „geht nicht“ reicht für den ersten Punkt nicht. Nennen Sie Ihre Bestellnummer, wenn Sie eine erfinden möchten.",
  },
  {
    title: "Einem Freund vom Urlaub erzählen",
    topicTag: "freizeit",
    register: "du",
    situation:
      "Sie sind gerade aus dem Urlaub zurückgekommen. Ein guter Freund hat gefragt, wie es war.",
    leitpunkte: [
      "Schreiben Sie, wo Sie waren und wie lange.",
      "Erzählen Sie, was Sie dort gemacht haben.",
      "Schreiben Sie, was Ihnen am besten gefallen hat.",
    ],
    guidanceNote:
      "Für die Vergangenheit brauchen Sie das Perfekt: „Ich bin … gefahren“, „Wir haben … gesehen“. Das ist hier der eigentliche Prüfstein.",
  },
  {
    title: "Um einen Gefallen bitten",
    topicTag: "alltag",
    register: "Sie",
    situation:
      "Sie fahren für eine Woche weg. Ihre Nachbarin, Frau Weiß, hat schon einmal angeboten zu helfen. Ihre Katze soll versorgt werden.",
    leitpunkte: [
      "Bitten Sie Frau Weiß, sich um die Katze zu kümmern.",
      "Erklären Sie genau, was zu tun ist.",
      "Bedanken Sie sich im Voraus und bieten Sie etwas als Gegenleistung an.",
    ],
    guidanceNote:
      "Zur Nachbarin Sie-Form. „Was zu tun ist“ heißt konkret: füttern, Wasser wechseln, Schlüssel abholen — allgemeine Sätze erfüllen den Punkt nicht.",
  },
  {
    title: "Einen Termin verschieben",
    topicTag: "alltag",
    register: "Sie",
    situation:
      "Sie haben am Freitag um 15 Uhr einen Termin beim Friseur, müssen an diesem Tag aber länger arbeiten.",
    leitpunkte: [
      "Sagen Sie den Termin am Freitag ab.",
      "Nennen Sie den Grund.",
      "Bitten Sie um einen neuen Termin und nennen Sie, wann Sie können.",
    ],
    guidanceNote:
      "Beim dritten Punkt reicht „nächste Woche“ nicht ganz — nennen Sie Tage oder Uhrzeiten, an denen es Ihnen passt.",
  },
  {
    title: "Auf eine Anzeige antworten",
    topicTag: "wohnen",
    register: "Sie",
    situation:
      "Sie haben eine Anzeige gelesen: In einer Wohngemeinschaft ist ab nächsten Monat ein Zimmer frei. Sie suchen genau so etwas.",
    leitpunkte: [
      "Stellen Sie sich kurz vor (Alter, Beruf oder Studium).",
      "Schreiben Sie, warum Sie sich für das Zimmer interessieren.",
      "Fragen Sie, wann Sie das Zimmer besichtigen können.",
    ],
    guidanceNote:
      "Die Leute kennen Sie nicht: Sie-Form. Der erste Punkt verlangt echte Angaben zu Ihrer Person, nicht nur „Ich heiße …“.",
  },
  {
    title: "Sich für ein Geschenk bedanken",
    topicTag: "alltag",
    register: "du",
    situation:
      "Ihre Tante hat Ihnen zum Geburtstag ein Buch geschickt. Sie konnte selbst nicht kommen.",
    leitpunkte: [
      "Bedanken Sie sich für das Geschenk und schreiben Sie, wie es Ihnen gefällt.",
      "Erzählen Sie, wie Sie Ihren Geburtstag gefeiert haben.",
      "Laden Sie Ihre Tante zu einem Besuch ein.",
    ],
    guidanceNote:
      "Zur Tante du-Form. Der erste Punkt hat zwei Teile — danken UND sagen, wie es Ihnen gefällt.",
  },
  {
    title: "Eine Verabredung vorschlagen",
    topicTag: "freizeit",
    register: "du",
    situation:
      "Sie möchten am Wochenende etwas mit Ihrer Freundin Elif unternehmen. Sie haben schon eine Idee.",
    leitpunkte: [
      "Schlagen Sie vor, was Sie zusammen machen könnten.",
      "Nennen Sie einen Tag und eine Uhrzeit.",
      "Fragen Sie, ob ihr das passt, und schlagen Sie einen Treffpunkt vor.",
    ],
    guidanceNote:
      "Ein konkreter Vorschlag ist Teil der Aufgabe: „am Samstag um drei“ erfüllt den Punkt, „irgendwann am Wochenende“ nicht.",
  },
  {
    title: "Nachbarn zu einer Feier einladen",
    topicTag: "wohnen",
    register: "Sie",
    situation:
      "Sie sind gerade in eine neue Wohnung gezogen und möchten die Nachbarn im Haus zu einer kleinen Einweihungsfeier einladen.",
    leitpunkte: [
      "Stellen Sie sich vor und nennen Sie den Anlass.",
      "Nennen Sie Tag, Uhrzeit und wo gefeiert wird.",
      "Bitten Sie um eine kurze Rückmeldung, wer kommt.",
    ],
    guidanceNote:
      "Sie kennen die Nachbarn noch nicht: Sie-Form, freundlich. Ein Aushang im Treppenhaus ist auch ein Brief — Anrede und Gruß gehören trotzdem dazu.",
  },
  {
    title: "Um Rat bitten",
    topicTag: "alltag",
    register: "du",
    situation:
      "Sie möchten in Ihrer Freizeit etwas Neues anfangen, wissen aber nicht was. Ein guter Freund kennt sich mit Vereinen und Kursen in der Stadt aus.",
    leitpunkte: [
      "Erklären Sie, warum Sie etwas Neues suchen.",
      "Schreiben Sie, was Ihnen dabei wichtig ist (Zeit, Kosten, allein oder in der Gruppe).",
      "Bitten Sie ihn um einen konkreten Vorschlag.",
    ],
    guidanceNote:
      "Der zweite Punkt ist der, der am häufigsten vergessen wird: Nennen Sie wirklich Ihre Bedingungen, sonst kann niemand raten.",
  },
  {
    title: "Sich krankmelden",
    topicTag: "arbeit",
    register: "Sie",
    situation:
      "Sie sind erkältet und können heute nicht zu Ihrem Deutschkurs kommen. Morgen ist ein Test geplant.",
    leitpunkte: [
      "Melden Sie sich für heute ab und nennen Sie den Grund.",
      "Fragen Sie, was Sie zu Hause bearbeiten sollen.",
      "Fragen Sie, ob Sie den Test später nachschreiben können.",
    ],
    guidanceNote:
      "An die Lehrkraft: Sie-Form. Drei Punkte, drei Sätze reichen — aber alle drei müssen vorkommen.",
  },
  {
    title: "Ein gebrauchtes Möbelstück anbieten",
    topicTag: "alltag",
    register: "du",
    situation:
      "Sie ziehen um und möchten einen Schrank nicht mitnehmen. Eine Bekannte hat gefragt, ob Sie noch Möbel abzugeben haben.",
    leitpunkte: [
      "Beschreiben Sie den Schrank (Größe, Farbe, Zustand).",
      "Nennen Sie Ihren Preis oder sagen Sie, dass Sie ihn verschenken.",
      "Schlagen Sie vor, wann sie ihn ansehen und abholen kann.",
    ],
    guidanceNote:
      "Der erste Punkt verlangt drei Angaben. Adjektive helfen: „ein großer, weißer Schrank, fast neu“.",
  },
  {
    title: "Nach dem Weg und der Anreise fragen",
    topicTag: "alltag",
    register: "du",
    situation:
      "Sie sind zur Hochzeit von Jonas und Marie eingeladen. Die Feier ist in einer anderen Stadt, die Sie nicht kennen.",
    leitpunkte: [
      "Sagen Sie zu und freuen Sie sich über die Einladung.",
      "Fragen Sie, wie Sie am besten dorthin kommen.",
      "Fragen Sie, ob es in der Nähe eine Übernachtungsmöglichkeit gibt.",
    ],
    guidanceNote:
      "Zu Freunden du-Form (hier: „ihr“, weil Sie an beide schreiben). Achten Sie darauf, dass die Anrede zu zwei Personen passt.",
  },
  {
    title: "Auf eine Einladung mit Absage antworten",
    topicTag: "alltag",
    register: "du",
    situation:
      "Ein Freund hat Sie zu seiner Geburtstagsfeier am Samstag eingeladen. Sie müssen an diesem Tag arbeiten und können nicht kommen.",
    leitpunkte: [
      "Bedanken Sie sich für die Einladung.",
      "Sagen Sie ab und nennen Sie den Grund.",
      "Schlagen Sie vor, sich an einem anderen Tag zu treffen.",
    ],
    guidanceNote:
      "Eine Absage ohne Dank und ohne Alternative wirkt unhöflich — beides ist hier Teil der Aufgabe, nicht nur Höflichkeit.",
  },
];

export const ITEMS: ExamItemInput[] = BRIEFE.map((b) => {
  const anrede =
    b.register === "du"
      ? "Schreiben Sie in der du-Form."
      : "Schreiben Sie in der Sie-Form.";
  return {
    ...base,
    taskType: "TELC_B1_SA_BRIEF",
    title: b.title,
    prompt: `Schreiben Sie einen Brief oder eine E-Mail (circa 80 Wörter, ${MINUTES} Minuten).`,
    topicTag: b.topicTag,
    timeLimitSeconds: MINUTES * 60,
    payload: {
      situation: b.situation,
      instruction:
        `Gehen Sie auf alle drei Punkte ein:\n` +
        b.leitpunkte.map((p, i) => `${i + 1}. ${p}`).join("\n") +
        `\n\nDenken Sie an Anrede und Gruß. ${anrede}`,
      wordMin: WORD_MIN,
      wordMax: WORD_MAX,
    },
    guidanceNote: b.guidanceNote,
  };
});

// ── LEITPUNKTE AND REGISTER, AS AUTHORED ────────────────────────────────────
// 16 items · every item exactly 3 Leitpunkte (enforced by the tuple type above,
// which will not compile with two or four).
//
//   register "Sie"  8 items — Sprachschule, Online-Shop, Nachbarin, Friseur,
//                             WG, Nachbarn, Lehrkraft, Sprachlehrerin
//   register "du"   8 items — Freundin, Freund, Tante, Freundin, Freund,
//                             Bekannte, Brautpaar, Freund
//
// The even split is deliberate. Register is scored separately at B1, and a bank
// that is all-informal trains a learner to write "du" to a Behörde — the written
// equivalent of the all-answers-are-"a" defect: fluent, confident, and wrong in
// the one place it costs marks.

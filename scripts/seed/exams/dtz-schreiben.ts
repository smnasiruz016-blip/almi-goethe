// DTZ — Deutsch-Test für Zuwanderer (A2–B1), Schriftlicher Ausdruck.
// Original practice items.
//
// ORIGINALITY (doctrine #1): every situation and prompt below is ORIGINAL to
// AlmiGoethe — never copied or derived from DTZ / telc / g.a.s.t. / BAMF
// materials, Modelltests or Übungssätze.
//
// ── ONE LETTER. NOT AN ESSAY. ───────────────────────────────────────────────
// The DTZ writing task is a single practical letter or e-mail of 80–100 words in
// an everyday / integration register (A2–B1): reply to a landlord, ask an office,
// apologise to a course leader, invite a neighbour. It is NOT an argumentative
// text. Authoring an essay here would teach the wrong exam to precisely the
// learners least able to notice.
//
// ── THE 80–100 WORD ENVELOPE IS SOURCED AND HARD-ENFORCED ───────────────────
// Unlike telc B1 (where the band is a soft product convention), the DTZ letter
// has a sourced, hard-enforced length of 80–100 words. Every payload therefore
// carries wordMin: 80, wordMax: 100 exactly. Do not deviate.
//
// ── FOUR LEITPUNKTE, IN THE INSTRUCTION PROSE ───────────────────────────────
// The DTZ task gives EXACTLY FOUR Leitpunkte (content points). The productive
// grader scores "task fulfilled, all required points covered, register
// appropriate". The payload the grader receives is exactly
// { situation, instruction, wordMin, wordMax } — productivePayloadSchema.parse()
// strips unknown keys. A structured `leitpunkte` array would be discarded twice
// over: never shown to the learner, never seen by the grader, while looking
// correct in this file. So the four Leitpunkte are written INTO the instruction
// prose (numbered 1–4), where both the learner and the grader actually meet them.
//
// ── TITLES ARE ITEM IDENTITY ────────────────────────────────────────────────
// Item identity is (exam, level, section, title). Unique titles keep the
// reconcile diff honest and let a corrected item update in place.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.DTZ;
const base = {
  exam: "DTZ" as const,
  level: L,
  section: SECTION.SCHRIFTLICHER_AUSDRUCK,
  difficulty: "CORE" as const,
};

// Sourced, hard-enforced. Do not change.
const WORD_MIN = 80;
const WORD_MAX = 100;
const MINUTES = 30;

type Brief = {
  title: string;
  topicTag: string;
  /** "du" = private/informal, "Sie" = formal or unknown addressee. Both occur in
   *  the real DTZ, and choosing the wrong one costs marks under register. */
  register: "du" | "Sie";
  situation: string;
  /** Exactly FOUR. Written into the instruction in order. The tuple type will not
   *  compile with three or five. */
  leitpunkte: [string, string, string, string];
  guidanceNote: string;
};

const BRIEFE: Brief[] = [
  {
    title: "Eine Reparatur beim Vermieter melden",
    topicTag: "wohnen",
    register: "Sie",
    situation:
      "In Ihrer Wohnung ist die Heizung seit drei Tagen kalt. Sie schreiben an Ihren Vermieter, Herrn Berger, und bitten um eine schnelle Reparatur.",
    leitpunkte: [
      "Beschreiben Sie, was genau kaputt ist.",
      "Sagen Sie, seit wann das Problem besteht.",
      "Bitten Sie darum, dass jemand die Heizung repariert.",
      "Schlagen Sie vor, wann Sie zu Hause sind.",
    ],
    guidanceNote:
      "An den Vermieter: Sie-Form, „Sehr geehrter Herr Berger“. Der erste Punkt braucht eine konkrete Angabe — „die Heizung wird nicht warm“, nicht nur „etwas ist kaputt“.",
  },
  {
    title: "Einen Termin beim Bürgeramt anfragen",
    topicTag: "amt",
    register: "Sie",
    situation:
      "Sie müssen Ihre Adresse ummelden und brauchen dafür einen Termin beim Bürgeramt. Sie schreiben eine E-Mail an die Behörde.",
    leitpunkte: [
      "Erklären Sie, warum Sie einen Termin brauchen.",
      "Fragen Sie, welche Dokumente Sie mitbringen müssen.",
      "Nennen Sie, an welchen Tagen Sie Zeit haben.",
      "Fragen Sie, wie lange der Termin ungefähr dauert.",
    ],
    guidanceNote:
      "Sie schreiben an eine Behörde, die Sie nicht kennt: „Sehr geehrte Damen und Herren“. Höfliche Formen wie „Könnten Sie mir bitte mitteilen …“ passen gut.",
  },
  {
    title: "Nach einem Deutschkurs fragen",
    topicTag: "bildung",
    register: "Sie",
    situation:
      "Sie möchten in einer Sprachschule einen Deutschkurs auf dem Niveau B1 besuchen. Auf der Internetseite fehlen Ihnen einige Angaben.",
    leitpunkte: [
      "Fragen Sie, wann der nächste B1-Kurs beginnt.",
      "Fragen Sie, wie viel der Kurs kostet.",
      "Fragen Sie, an welchen Tagen und zu welcher Uhrzeit der Kurs ist.",
      "Fragen Sie, ob Sie vorher einen Einstufungstest machen müssen.",
    ],
    guidanceNote:
      "An eine Einrichtung, die Sie nicht kennen: Sie-Form. Vier klare Fragen reichen — aber alle vier müssen vorkommen.",
  },
  {
    title: "Urlaub beim Arbeitgeber beantragen",
    topicTag: "arbeit",
    register: "Sie",
    situation:
      "Sie arbeiten in einem Betrieb und möchten im August für zwei Wochen in Urlaub fahren. Sie schreiben an Ihre Chefin, Frau Sommer.",
    leitpunkte: [
      "Bitten Sie um Urlaub und nennen Sie den genauen Zeitraum.",
      "Erklären Sie kurz, warum Sie gerade dann Urlaub möchten.",
      "Schreiben Sie, wer Ihre Arbeit in dieser Zeit übernehmen kann.",
      "Bitten Sie um eine baldige Antwort.",
    ],
    guidanceNote:
      "Zur Chefin: Sie-Form, „Sehr geehrte Frau Sommer“. Der erste Punkt braucht ein echtes Datum, kein „bald“.",
  },
  {
    title: "Sich beim Nachbarn für Lärm entschuldigen",
    topicTag: "wohnen",
    register: "Sie",
    situation:
      "Sie hatten am Wochenende eine Geburtstagsfeier. Es war spät und laut. Sie schreiben Ihrem Nachbarn, Herrn Klein, einen kurzen Brief.",
    leitpunkte: [
      "Entschuldigen Sie sich für den Lärm am Wochenende.",
      "Erklären Sie, warum es so laut war.",
      "Versprechen Sie, dass Sie in Zukunft aufpassen.",
      "Laden Sie den Nachbarn zu einem Kaffee ein.",
    ],
    guidanceNote:
      "Sie kennen den Nachbarn nur wenig: Sie-Form, freundlich. Eine Entschuldigung ohne Begründung erfüllt den zweiten Punkt nicht.",
  },
  {
    title: "Einen Termin beim Arzt absagen",
    topicTag: "gesundheit",
    register: "Sie",
    situation:
      "Sie haben am Donnerstag einen Termin in einer Arztpraxis, können aber nicht kommen, weil Sie arbeiten müssen. Sie schreiben an die Praxis.",
    leitpunkte: [
      "Sagen Sie Ihren Termin am Donnerstag ab.",
      "Nennen Sie den Grund für die Absage.",
      "Bitten Sie um einen neuen Termin.",
      "Schreiben Sie, an welchen Tagen und zu welcher Zeit Sie können.",
    ],
    guidanceNote:
      "An die Praxis: Sie-Form. Beim vierten Punkt reicht „nächste Woche“ nicht — nennen Sie Tage oder Uhrzeiten.",
  },
  {
    title: "Sich beim Kursleiter krankmelden",
    topicTag: "bildung",
    register: "Sie",
    situation:
      "Sie sind krank und können diese Woche nicht zu Ihrem Integrationskurs kommen. Sie schreiben eine E-Mail an Ihren Kursleiter, Herrn Yilmaz.",
    leitpunkte: [
      "Melden Sie sich für diese Woche ab und nennen Sie den Grund.",
      "Schreiben Sie, wie lange Sie voraussichtlich fehlen.",
      "Fragen Sie, was Sie zu Hause bearbeiten sollen.",
      "Fragen Sie, ob Sie einen verpassten Test nachschreiben können.",
    ],
    guidanceNote:
      "An die Kursleitung: Sie-Form. Alle vier Punkte müssen vorkommen; auf dem DTZ zählt Vollständigkeit besonders.",
  },
  {
    title: "Einen Kollegen um Vertretung bitten",
    topicTag: "arbeit",
    register: "du",
    situation:
      "Sie können morgen wegen eines wichtigen Termins nicht zur Arbeit kommen. Sie schreiben Ihrem Kollegen Tom, mit dem Sie sich duzen, eine Nachricht.",
    leitpunkte: [
      "Bitten Sie Tom, morgen Ihre Schicht zu übernehmen.",
      "Erklären Sie, warum Sie nicht kommen können.",
      "Sagen Sie, was in der Schicht besonders wichtig ist.",
      "Bieten Sie an, ein anderes Mal für ihn einzuspringen.",
    ],
    guidanceNote:
      "Zum Kollegen du-Form. Der dritte Punkt braucht eine konkrete Angabe zur Arbeit, kein allgemeines „mach alles wie immer“.",
  },
  {
    title: "Einen Freund um Hilfe beim Umzug bitten",
    topicTag: "alltag",
    register: "du",
    situation:
      "Sie ziehen bald in eine neue Wohnung um und brauchen Hilfe. Sie schreiben Ihrem Freund Ahmad eine E-Mail.",
    leitpunkte: [
      "Erzählen Sie, dass Sie umziehen, und wohin.",
      "Bitten Sie Ahmad, Ihnen beim Umzug zu helfen.",
      "Nennen Sie den Tag und die Uhrzeit.",
      "Fragen Sie, ob er ein Auto organisieren kann.",
    ],
    guidanceNote:
      "Zum Freund du-Form. Der dritte Punkt verlangt ein konkretes Datum und eine Uhrzeit, nicht nur „am Wochenende“.",
  },
  {
    title: "Eine Freundin ins Kino einladen",
    topicTag: "freizeit",
    register: "du",
    situation:
      "Am Freitagabend läuft ein neuer Film im Kino. Sie möchten Ihre Freundin Lena einladen und schreiben ihr eine Nachricht.",
    leitpunkte: [
      "Laden Sie Lena ins Kino ein und schreiben Sie, welcher Film läuft.",
      "Nennen Sie Tag, Uhrzeit und wo Sie sich treffen.",
      "Schlagen Sie vor, vorher zusammen etwas zu essen.",
      "Bitten Sie um eine kurze Antwort, ob sie mitkommt.",
    ],
    guidanceNote:
      "Zur Freundin du-Form. Ein konkreter Vorschlag ist Teil der Aufgabe: „am Freitag um acht vor dem Kino“ erfüllt den Punkt, „irgendwann“ nicht.",
  },
  {
    title: "Einen Wasserschaden bei der Hausverwaltung melden",
    topicTag: "wohnen",
    register: "Sie",
    situation:
      "In Ihrem Badezimmer läuft Wasser aus einem Rohr und der Boden ist nass. Sie schreiben eine E-Mail an die Hausverwaltung.",
    leitpunkte: [
      "Beschreiben Sie das Problem im Badezimmer.",
      "Sagen Sie, seit wann das Wasser ausläuft.",
      "Bitten Sie darum, dass schnell ein Handwerker kommt.",
      "Fragen Sie, was Sie bis dahin selbst tun sollen.",
    ],
    guidanceNote:
      "An die Hausverwaltung: Sie-Form, „Sehr geehrte Damen und Herren“. Beschreiben Sie den Schaden konkret — ein nasser Boden ist etwas anderes als ein tropfender Hahn.",
  },
  {
    title: "Eine Bescheinigung beim Amt anfordern",
    topicTag: "amt",
    register: "Sie",
    situation:
      "Sie brauchen für Ihren neuen Arbeitgeber eine Meldebescheinigung. Sie schreiben eine E-Mail an das zuständige Amt.",
    leitpunkte: [
      "Erklären Sie, welche Bescheinigung Sie brauchen und wofür.",
      "Fragen Sie, wie Sie die Bescheinigung bekommen können.",
      "Fragen Sie, ob und wie viel das kostet.",
      "Bitten Sie darum, die Bescheinigung an Ihre Adresse zu schicken.",
    ],
    guidanceNote:
      "An eine Behörde: Sie-Form. Der erste Punkt hat zwei Teile — welche Bescheinigung UND wofür.",
  },
  {
    title: "Eine Nachbarin bitten, ein Paket anzunehmen",
    topicTag: "alltag",
    register: "Sie",
    situation:
      "Sie erwarten morgen ein wichtiges Paket, sind aber den ganzen Tag nicht zu Hause. Sie schreiben Ihrer Nachbarin, Frau Novak, einen kurzen Brief.",
    leitpunkte: [
      "Bitten Sie Frau Novak, das Paket für Sie anzunehmen.",
      "Sagen Sie, wann das Paket ungefähr kommt.",
      "Schreiben Sie, wann Sie es wieder abholen.",
      "Bedanken Sie sich im Voraus für die Hilfe.",
    ],
    guidanceNote:
      "Zur Nachbarin, die Sie kaum kennen: Sie-Form, freundlich. Alle vier Punkte gehören in den kurzen Brief.",
  },
  {
    title: "Sich in einem Sportverein anmelden",
    topicTag: "freizeit",
    register: "Sie",
    situation:
      "Sie möchten in Ihrer Freizeit Sport machen und interessieren sich für einen Sportverein in Ihrer Stadt. Sie schreiben eine E-Mail an den Verein.",
    leitpunkte: [
      "Stellen Sie sich kurz vor und sagen Sie, für welchen Sport Sie sich interessieren.",
      "Fragen Sie, wann und wo das Training stattfindet.",
      "Fragen Sie, wie viel der Beitrag im Monat kostet.",
      "Fragen Sie, ob Sie zuerst zu einem Probetraining kommen können.",
    ],
    guidanceNote:
      "An den Verein: Sie-Form. Der erste Punkt verlangt echte Angaben zu Ihrer Person, nicht nur „Ich heiße …“.",
  },
  {
    title: "Einem Freund eine Verabredung absagen",
    topicTag: "alltag",
    register: "du",
    situation:
      "Sie sind mit Ihrem Freund Marco am Samstag zum Essen verabredet, können aber nicht kommen, weil Sie arbeiten müssen. Sie schreiben ihm eine Nachricht.",
    leitpunkte: [
      "Sagen Sie die Verabredung am Samstag ab.",
      "Erklären Sie, warum Sie nicht kommen können.",
      "Entschuldigen Sie sich dafür.",
      "Schlagen Sie einen neuen Tag zum Treffen vor.",
    ],
    guidanceNote:
      "Zum Freund du-Form. Eine Absage ohne Entschuldigung und ohne neuen Vorschlag wirkt unhöflich — beides ist hier Teil der Aufgabe.",
  },
];

export const ITEMS: ExamItemInput[] = BRIEFE.map((b) => {
  const anrede =
    b.register === "du"
      ? "Schreiben Sie in der du-Form."
      : "Schreiben Sie in der Sie-Form.";
  return {
    ...base,
    taskType: "DTZ_SA_BRIEF",
    title: b.title,
    prompt: `Schreiben Sie einen Brief oder eine E-Mail (80–100 Wörter, ${MINUTES} Minuten).`,
    topicTag: b.topicTag,
    timeLimitSeconds: MINUTES * 60,
    payload: {
      situation: b.situation,
      instruction:
        `Gehen Sie auf alle vier Punkte ein:\n` +
        b.leitpunkte.map((p, i) => `${i + 1}. ${p}`).join("\n") +
        `\n\nDenken Sie an Anrede und Gruß. ${anrede}`,
      wordMin: WORD_MIN,
      wordMax: WORD_MAX,
    },
    guidanceNote: b.guidanceNote,
  };
});

// ── LEITPUNKTE AND REGISTER, AS AUTHORED ────────────────────────────────────
// 15 items · every item exactly 4 Leitpunkte (enforced by the tuple type above,
// which will not compile with three or five) · every payload wordMin 80 /
// wordMax 100 (the sourced, hard-enforced DTZ envelope).
//
//   register "Sie"  9 items — Vermieter, Bürgeramt, Sprachschule, Arbeitgeber,
//                             Nachbar, Arztpraxis, Kursleiter, Hausverwaltung,
//                             Amt, Nachbarin, Sportverein  (formal/unknown)
//   register "du"   6 items — Kollege, Freund, Freundin, Freund (2), plus the
//                             informal replies
//
// The split is deliberate. Register is scored separately on the DTZ, and a bank
// that is all-informal trains a learner to write "du" to a Behörde — fluent,
// confident, and wrong in the one place it costs marks.

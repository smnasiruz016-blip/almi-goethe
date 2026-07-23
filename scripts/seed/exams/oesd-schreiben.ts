// ÖSD Zertifikat B1 (ZDÖ B1) — Schreiben. Original practice items.
//
// ORIGINALITY (doctrine #1): every situation and prompt below is ORIGINAL to
// AlmiGoethe — never copied or derived from ÖSD / ÖSD-Institut materials,
// Modellsätze or Übungssätze.
//
// ⚠️ AUSTRIAN, NOT GERMAN. This is the Austrian B1 exam. The everyday world in
// these items is Austrian: Euro amounts, Austrian institutions (Gemeindeamt,
// Hausverwaltung in Wien, Volkshochschule, die Bahn, die städtischen
// Verkehrsbetriebe, AK), Austrian
// places (Wien, Graz, Salzburg, Innsbruck, Bregenz) and Austrian usage where it
// is standard and B1-appropriate (Jänner statt Januar, heuer, Semmel, Sackerl,
// Trafik). No German-only markers (kein "Januar", kein "Brötchen").
//
// ── THREE TASK-TYPES (word bands SOURCED and HARD-ENFORCED) ──────────────────
// The ÖSD B1 Schreiben part has three short productive tasks. The word bands
// below are the enforced targets — the conformance gate hard-fails on any drift,
// so every item of a given taskType carries EXACTLY these wordMin/wordMax:
//
//   OESD_SA_EMAIL    personal e-mail, INFORMAL (du-Form)  ~80 W  70–100  20 min
//   OESD_SA_FORUM    opinion / forum post, NEUTRAL        ~80 W  70–100  20 min
//   OESD_SA_FORMELL  formal message, SIE-Form (short)     ~40 W  30–55   15 min
//
// ── WHAT THE GRADER ACTUALLY READS ──────────────────────────────────────────
// The productive grader receives exactly { situation, instruction, wordMin,
// wordMax }; productivePayloadSchema.parse() strips every other key. A structured
// `leitpunkte` array would be silently discarded — never shown, never graded — so
// the Leitpunkte are written INTO the instruction prose, where the learner and the
// grader actually meet them. EMAIL and FORUM carry three Leitpunkte, FORMELL two.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.OESD_B1;
const base = {
  exam: "OESD_B1" as const,
  level: L,
  section: SECTION.SCHRIFTLICHER_AUSDRUCK,
  difficulty: "CORE" as const,
};

export const ITEMS: ExamItemInput[] = [
  // ── OESD_SA_EMAIL — personal e-mail, du-Form, ~80 Wörter (70–100) ──────────
  {
    ...base,
    taskType: "OESD_SA_EMAIL",
    title: "Einer Freundin vom Umzug nach Wien erzählen",
    prompt: "Schreiben Sie eine E-Mail an eine Freundin (circa 80 Wörter, 20 Minuten).",
    topicTag: "wohnen",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Sie sind gerade in eine neue Wohnung in Wien-Ottakring gezogen. Ihre Freundin Selma hat gefragt, wie es Ihnen im neuen Zuhause geht.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Beschreiben Sie Ihre neue Wohnung und die Gegend.\n" +
        "2. Erzählen Sie, was Ihnen gut gefällt und was noch fehlt.\n" +
        "3. Laden Sie Selma ein, Sie bald zu besuchen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der du-Form.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Selma ist eine Freundin — du-Form („Liebe Selma“). Der zweite Punkt hat zwei Teile: was gefällt UND was fehlt.",
  },
  {
    ...base,
    taskType: "OESD_SA_EMAIL",
    title: "Einen Ausflug an den Wörthersee vorschlagen",
    prompt: "Schreiben Sie eine E-Mail an einen Freund (circa 80 Wörter, 20 Minuten).",
    topicTag: "freizeit",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Der Sommer hat begonnen und Sie möchten mit Ihrem Freund Jakob ein Wochenende an den Wörthersee in Kärnten fahren.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Schlagen Sie vor, wann ihr fahren könntet.\n" +
        "2. Erzählen Sie, was ihr dort machen könntet.\n" +
        "3. Fragen Sie, ob Jakob mit dem Auto fährt oder ob ihr die Bahn nehmt.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der du-Form.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Ein konkreter Vorschlag gehört zur Aufgabe: „am Wochenende im Juli“ statt „irgendwann“. Zu Jakob du-Form.",
  },
  {
    ...base,
    taskType: "OESD_SA_EMAIL",
    title: "Sich bei einer Freundin für die Hilfe bedanken",
    prompt: "Schreiben Sie eine E-Mail an eine Freundin (circa 80 Wörter, 20 Minuten).",
    topicTag: "alltag",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Ihre Freundin Aylin hat Ihnen letzte Woche beim Umzug geholfen und sogar ihr Auto zur Verfügung gestellt. Sie möchten sich bedanken.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Bedanken Sie sich herzlich für die Hilfe.\n" +
        "2. Schreiben Sie, wie es jetzt in der neuen Wohnung aussieht.\n" +
        "3. Laden Sie Aylin zum Essen ein und schlagen Sie einen Termin vor.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der du-Form.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Zur Freundin du-Form. Der dritte Punkt verlangt einen konkreten Terminvorschlag, nicht nur „bald“.",
  },
  {
    ...base,
    taskType: "OESD_SA_EMAIL",
    title: "Einem Freund vom neuen Deutschkurs berichten",
    prompt: "Schreiben Sie eine E-Mail an einen Freund (circa 80 Wörter, 20 Minuten).",
    topicTag: "bildung",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Sie besuchen seit dem Frühling einen Deutschkurs an der Volkshochschule in Graz. Ihr Freund Tobias möchte auch einen Kurs machen und fragt, wie es bei Ihnen läuft.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Erzählen Sie, wie der Kurs und die Kursleiterin sind.\n" +
        "2. Schreiben Sie, was Ihnen leicht und was schwer fällt.\n" +
        "3. Empfehlen Sie Tobias, sich anzumelden, und sagen Sie warum.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der du-Form.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Zu Tobias du-Form. Der zweite Punkt hat zwei Teile (leicht UND schwer) — beide müssen vorkommen.",
  },
  {
    ...base,
    taskType: "OESD_SA_EMAIL",
    title: "Eine Geburtstagseinladung absagen",
    prompt: "Schreiben Sie eine E-Mail an eine Freundin (circa 80 Wörter, 20 Minuten).",
    topicTag: "alltag",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Ihre Freundin Nina feiert am Samstag ihren Geburtstag in Salzburg. Sie können aber nicht kommen, weil Sie an diesem Wochenende arbeiten müssen.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Bedanken Sie sich für die Einladung.\n" +
        "2. Sagen Sie ab und erklären Sie den Grund.\n" +
        "3. Schlagen Sie vor, euch bald an einem anderen Tag zu treffen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der du-Form.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Eine Absage ohne Dank und ohne Alternative wirkt unhöflich — beides ist Teil der Aufgabe. Zu Nina du-Form.",
  },

  // ── OESD_SA_FORUM — opinion / forum post, neutral, ~80 Wörter (70–100) ─────
  {
    ...base,
    taskType: "OESD_SA_FORUM",
    title: "Forum: Auto oder öffentliche Verkehrsmittel in der Stadt?",
    prompt: "Schreiben Sie einen Forumsbeitrag (circa 80 Wörter, 20 Minuten).",
    topicTag: "umwelt",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In einem Online-Forum wird diskutiert: „Braucht man in einer Stadt wie Wien noch ein eigenes Auto?“ Sie möchten Ihre Meinung dazu schreiben.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Sagen Sie klar, was Sie davon halten.\n" +
        "2. Nennen Sie zwei Gründe für Ihre Meinung.\n" +
        "3. Berichten Sie kurz von Ihren eigenen Erfahrungen mit den städtischen Verkehrsbetrieben.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie höflich und neutral.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Neutraler Ton, keine du-/Sie-Anrede an eine Einzelperson. Der zweite Punkt verlangt wirklich zwei Gründe.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORUM",
    title: "Forum: Sollte man am Wochenende arbeiten?",
    prompt: "Schreiben Sie einen Forumsbeitrag (circa 80 Wörter, 20 Minuten).",
    topicTag: "arbeit",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In einem Forum zum Thema Arbeit fragt jemand: „Ist es in Ordnung, am Samstag oder Sonntag zu arbeiten, wenn man dafür mehr verdient?“",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Schreiben Sie Ihre Meinung zu dieser Frage.\n" +
        "2. Begründen Sie Ihre Meinung mit zwei Argumenten.\n" +
        "3. Schreiben Sie, wie Sie selbst Ihr Wochenende am liebsten verbringen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie höflich und neutral.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Meinung + zwei Argumente sind der Kern der Aufgabe. Neutraler Ton, kein privater Brief.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORUM",
    title: "Forum: Handys im Unterricht erlauben?",
    prompt: "Schreiben Sie einen Forumsbeitrag (circa 80 Wörter, 20 Minuten).",
    topicTag: "bildung",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Auf der Webseite einer Volkshochschule wird diskutiert: „Sollen Handys im Kurs erlaubt sein oder stören sie beim Lernen?“",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Sagen Sie, ob Sie dafür oder dagegen sind.\n" +
        "2. Nennen Sie Gründe für Ihre Meinung.\n" +
        "3. Machen Sie einen Vorschlag, wie man mit Handys im Kurs umgehen könnte.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie höflich und neutral.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Der dritte Punkt verlangt einen eigenen Vorschlag, nicht nur eine weitere Meinung. Neutraler Ton.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORUM",
    title: "Forum: Müll trennen — bringt das etwas?",
    prompt: "Schreiben Sie einen Forumsbeitrag (circa 80 Wörter, 20 Minuten).",
    topicTag: "umwelt",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In einem Umwelt-Forum schreibt jemand: „Mülltrennung bringt sowieso nichts.“ Sie möchten darauf antworten.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Schreiben Sie, ob Sie dieser Aussage zustimmen oder nicht.\n" +
        "2. Begründen Sie Ihre Meinung mit Beispielen.\n" +
        "3. Erzählen Sie, wie Sie zu Hause mit dem Müll umgehen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie höflich und neutral.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Nehmen Sie klar Stellung zu der zitierten Aussage. Beispiele stützen den zweiten Punkt besser als allgemeine Sätze.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORUM",
    title: "Forum: Online einkaufen oder im Geschäft?",
    prompt: "Schreiben Sie einen Forumsbeitrag (circa 80 Wörter, 20 Minuten).",
    topicTag: "alltag",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In einem Forum wird diskutiert: „Kauft man besser online ein oder in den Geschäften in der Innenstadt?“ Sie möchten Ihre Meinung schreiben.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Sagen Sie, was Sie lieber machen und warum.\n" +
        "2. Nennen Sie einen Vorteil und einen Nachteil des Online-Einkaufs.\n" +
        "3. Schreiben Sie, was das für kleine Geschäfte in Ihrer Stadt bedeutet.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie höflich und neutral.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote:
      "Der zweite Punkt verlangt beides — einen Vorteil UND einen Nachteil. Neutraler, sachlicher Ton.",
  },

  // ── OESD_SA_FORMELL — formal message, Sie-Form, ~40 Wörter (30–55) ─────────
  {
    ...base,
    taskType: "OESD_SA_FORMELL",
    title: "Anfrage an das Gemeindeamt wegen einer Meldebestätigung",
    prompt: "Schreiben Sie eine kurze formelle Nachricht (circa 40 Wörter, 15 Minuten).",
    topicTag: "behoerde",
    timeLimitSeconds: 900,
    payload: {
      situation:
        "Sie brauchen für Ihren neuen Arbeitgeber eine Meldebestätigung und schreiben an das Gemeindeamt Ihrer Wohngemeinde.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Bitten Sie um eine Meldebestätigung und nennen Sie den Grund.\n" +
        "2. Fragen Sie, was das kostet und ob Sie persönlich vorbeikommen müssen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der Sie-Form.",
      wordMin: 30,
      wordMax: 55,
    },
    guidanceNote:
      "An eine Behörde: „Sehr geehrte Damen und Herren“. Kurz und sachlich — zwei Punkte, keine langen Erklärungen.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORMELL",
    title: "Beschwerde bei der Hausverwaltung wegen der Heizung",
    prompt: "Schreiben Sie eine kurze formelle Nachricht (circa 40 Wörter, 15 Minuten).",
    topicTag: "wohnen",
    timeLimitSeconds: 900,
    payload: {
      situation:
        "In Ihrer Wohnung in Wien wird die Heizung seit einer Woche nicht richtig warm. Sie schreiben an die Hausverwaltung.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Beschreiben Sie das Problem mit der Heizung.\n" +
        "2. Bitten Sie darum, dass jemand das Problem bald behebt.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der Sie-Form.",
      wordMin: 30,
      wordMax: 55,
    },
    guidanceNote:
      "Sie-Form, höflich, aber klar. Nennen Sie Ihre Wohnung (Stock oder Türnummer), damit man Sie zuordnen kann.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORMELL",
    title: "Anfrage beim Kundenservice der Bahngesellschaft zu einer Rückerstattung",
    prompt: "Schreiben Sie eine kurze formelle Nachricht (circa 40 Wörter, 15 Minuten).",
    topicTag: "reisen",
    timeLimitSeconds: 900,
    payload: {
      situation:
        "Ihr Zug von Wien nach Innsbruck hatte über eine Stunde Verspätung. Sie schreiben an den Kundenservice der Bahngesellschaft.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Schildern Sie kurz, was passiert ist (Strecke, Datum, Verspätung).\n" +
        "2. Fragen Sie, ob Sie einen Teil des Fahrpreises zurückbekommen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der Sie-Form.",
      wordMin: 30,
      wordMax: 55,
    },
    guidanceNote:
      "Sie-Form, sachlich. Konkrete Angaben (Strecke, Datum) machen den ersten Punkt vollständig.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORMELL",
    title: "Nachricht an die Volkshochschule wegen einer Kursabmeldung",
    prompt: "Schreiben Sie eine kurze formelle Nachricht (circa 40 Wörter, 15 Minuten).",
    topicTag: "bildung",
    timeLimitSeconds: 900,
    payload: {
      situation:
        "Sie haben sich für einen Computerkurs an der Volkshochschule Linz angemeldet, können aber aus beruflichen Gründen nicht teilnehmen. Sie schreiben an das Sekretariat.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Melden Sie sich vom Kurs ab und nennen Sie den Grund.\n" +
        "2. Fragen Sie, ob Sie die bezahlte Kursgebühr zurückbekommen.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der Sie-Form.",
      wordMin: 30,
      wordMax: 55,
    },
    guidanceNote:
      "Sie-Form. Kurz halten — eine Abmeldung braucht keinen langen Text, aber der Grund und die Frage nach der Gebühr müssen beide vorkommen.",
  },
  {
    ...base,
    taskType: "OESD_SA_FORMELL",
    title: "Anfrage an eine Hausverwaltung zu einem freien Parkplatz",
    prompt: "Schreiben Sie eine kurze formelle Nachricht (circa 40 Wörter, 15 Minuten).",
    topicTag: "wohnen",
    timeLimitSeconds: 900,
    payload: {
      situation:
        "In Ihrer Wohnanlage in Graz gibt es Tiefgaragenplätze. Sie möchten wissen, ob ein Platz frei ist, und schreiben an die Hausverwaltung.",
      instruction:
        "Gehen Sie auf die Punkte ein:\n" +
        "1. Fragen Sie, ob gerade ein Garagenplatz frei ist.\n" +
        "2. Fragen Sie, wie viel die Miete pro Monat kostet.\n\n" +
        "Denken Sie an Anrede und Gruß. Schreiben Sie in der Sie-Form.",
      wordMin: 30,
      wordMax: 55,
    },
    guidanceNote:
      "Sie-Form, höflich und knapp. Beide Fragen (frei? Preis in Euro?) gehören in die Nachricht.",
  },
];

// telc Deutsch B1 — Sprechen (mündliche Prüfung). Original practice items.
//
// ORIGINALITY (doctrine #1): every theme, Stichpunkt and prompt below is
// ORIGINAL to AlmiGoethe — never copied or derived from telc materials,
// Übungstests or Modellsätze.
//
// THREE Teile, published:
//   Teil 1  Kontaktaufnahme            — get acquainted around a theme
//   Teil 2  Über ein Thema sprechen    — a short talk, opinion + experience
//   Teil 3  Gemeinsam etwas planen     — agree a plan with a partner
//
// ── WHAT WAS MISSING, AND WHY THIS FILE EXISTS ──────────────────────────────
// The bank had only Teil 3 (TELC_B1_SP_PLAN), sixteen items. Two of the three
// real Aufgaben — Kontaktaufnahme and Über ein Thema sprechen — did not exist at
// all. The conformance gate reported them as uncovered, which is exactly what an
// uncovered-Aufgabe check is for: a section can hold sixteen items and still be
// missing two thirds of the exam.
//
// Teil 1 and Teil 2 here are NEW BUILDS. Teil 3 is MOVED from telc-b1.ts under
// the same sixteen titles, with ONE correction: those items carried the taskType
// TELC_B1_SP_PLAN, but the structure's key for this Aufgabe is TELC_B1_SP_PLANEN.
// They were therefore NON-CONFORMANT all along — the conformance gate rejected
// them by that exact mismatch — and this move fixes them by correcting the key.
//
// taskType is a CONTENT field, not part of identity (exam, level, section,
// title), so under the unchanged titles all sixteen rows UPDATE IN PLACE: the
// key is corrected on the row, and NO row is deactivated. That is the only safe
// way to repair a non-conformant taskType. Retitling or dropping them instead
// would deactivate rows — and because the OLD key is non-conformant,
// predict-deactivations would (correctly) list them; keeping the titles keeps
// the deactivation count at zero for this section.
//
// ── HOW THE PAIR EXAM IS PRACTISED SOLO ─────────────────────────────────────
// telc B1 Sprechen is sat by two candidates. This product practises it solo, so
// each item frames BOTH sides: the learner speaks their own turns AND is told
// what the partner would bring, so they rehearse asking as well as answering.
// The productive grader reads { situation, instruction, prepSeconds, speakSeconds }
// and scores "communication: task fulfilled, required points covered, register
// appropriate" — so, as in Schriftlicher Ausdruck, the points to cover are
// written INTO the instruction prose, never into a structured field the schema
// would silently strip.
//
// ── REGISTER ────────────────────────────────────────────────────────────────
// Teil 1 and Teil 2 use "Sie": the two candidates are strangers meeting in an
// exam, and the everyday situations here (a course, a neighbourhood, a shared
// interest) are ones a B1 learner meets formally. Teil 3's register is whatever
// each moved item already carried.
//
// ── NO ANSWER KEYS HERE ─────────────────────────────────────────────────────
// Speaking items are productive: there is nothing to permute and no answer-key
// distribution to measure. The type-aware distribution gate (to be built after
// batch 1) dispatches on item type and simply does not apply to this section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const EXAM = "TELC_B1" as const;
const L = EXAM_LEVEL.TELC_B1;

// ── Teil 1 — Kontaktaufnahme (8 items, NEW) ─────────────────────────────────
// Two candidates get to know each other around a given everyday theme. Each item
// gives four Stichpunkte to exchange; the learner both asks the partner and
// answers for themselves. Short and largely spontaneous — little preparation.
type Kontakt = {
  title: string;
  topicTag: string;
  theme: string;
  stichpunkte: [string, string, string, string];
  guidanceNote: string;
};

const KONTAKT: Kontakt[] = [
  {
    title: "Kontaktaufnahme: Sprachen lernen",
    topicTag: "bildung",
    theme: "Sprachen lernen",
    stichpunkte: ["Welche Sprachen sprechen Sie?", "Wo und wie haben Sie Deutsch gelernt?", "Warum lernen Sie Deutsch?", "Was fällt Ihnen leicht, was schwer?"],
    guidanceNote:
      "Stellen Sie Ihrem Partner zu jedem Punkt eine Frage und antworten Sie selbst. „Und Sie?“ hält das Gespräch in Gang.",
  },
  {
    title: "Kontaktaufnahme: Wohnen",
    topicTag: "wohnen",
    theme: "Wohnen und Nachbarschaft",
    stichpunkte: ["Wo und wie wohnen Sie?", "Wohnen Sie allein oder mit anderen?", "Was gefällt Ihnen an Ihrer Gegend?", "Was würden Sie gern ändern?"],
    guidanceNote:
      "Wechseln Sie zwischen Fragen und eigenen Antworten. Reagieren Sie auf das, was Ihr Partner sagt: „Ach, interessant, bei mir ist das …“.",
  },
  {
    title: "Kontaktaufnahme: Arbeit und Beruf",
    topicTag: "arbeit",
    theme: "Arbeit und Beruf",
    stichpunkte: ["Was machen Sie beruflich oder was lernen Sie?", "Wie sieht Ihr Arbeitstag aus?", "Was gefällt Ihnen an Ihrer Tätigkeit?", "Was möchten Sie später machen?"],
    guidanceNote:
      "Nennen Sie konkrete Beispiele aus Ihrem Alltag. Fragen Sie zurück, damit ein echtes Gespräch entsteht.",
  },
  {
    title: "Kontaktaufnahme: Freizeit und Hobbys",
    topicTag: "freizeit",
    theme: "Freizeit und Hobbys",
    stichpunkte: ["Was machen Sie in Ihrer Freizeit?", "Seit wann haben Sie dieses Hobby?", "Machen Sie das allein oder mit anderen?", "Was möchten Sie gern einmal ausprobieren?"],
    guidanceNote:
      "„Seit wann“ verlangt eine Zeitangabe: „seit drei Jahren“, „seit ich hier bin“. Fragen Sie Ihren Partner nach seinen Interessen.",
  },
  {
    title: "Kontaktaufnahme: Essen und Kochen",
    topicTag: "alltag",
    theme: "Essen und Kochen",
    stichpunkte: ["Kochen Sie gern? Was?", "Was essen Sie zum Frühstück?", "Gehen Sie oft essen oder kochen Sie zu Hause?", "Gibt es ein Gericht aus Ihrer Heimat, das Sie mögen?"],
    guidanceNote:
      "Ein persönliches Beispiel macht die Antwort lebendig. Fragen Sie nach: „Und was essen Sie gern?“.",
  },
  {
    title: "Kontaktaufnahme: Reisen",
    topicTag: "freizeit",
    theme: "Reisen und Urlaub",
    stichpunkte: ["Reisen Sie gern? Wohin?", "Wie reisen Sie am liebsten — Bahn, Auto, Flugzeug?", "Was war Ihre schönste Reise?", "Wohin möchten Sie noch fahren?"],
    guidanceNote:
      "Für „war“ brauchen Sie die Vergangenheit. Reagieren Sie interessiert: „Da war ich auch schon einmal!“.",
  },
  {
    title: "Kontaktaufnahme: Ein typischer Tag",
    topicTag: "alltag",
    theme: "Der Tagesablauf",
    stichpunkte: ["Wann stehen Sie normalerweise auf?", "Wie kommen Sie zur Arbeit oder zum Kurs?", "Was machen Sie am Abend?", "Wie unterscheidet sich Ihr Wochenende?"],
    guidanceNote:
      "Zeit- und Reihenfolgeangaben helfen: „zuerst“, „danach“, „gegen sieben“. Vergleichen Sie mit Ihrem Partner.",
  },
  {
    title: "Kontaktaufnahme: Feste und Feiern",
    topicTag: "gesellschaft",
    theme: "Feste und Feiern",
    stichpunkte: ["Welches Fest mögen Sie besonders?", "Wie feiern Sie es?", "Mit wem verbringen Sie diese Zeit?", "Gibt es ein Fest aus Ihrer Heimat, das Sie hier vermissen?"],
    guidanceNote:
      "Erzählen Sie von einem konkreten Fest. Der letzte Punkt lädt zum Vergleich ein — fragen Sie auch Ihren Partner danach.",
  },
];

const teil1Items: ExamItemInput[] = KONTAKT.map((k) => ({
  exam: EXAM,
  level: L,
  section: SECTION.SPRECHEN,
  taskType: "TELC_B1_SP_KONTAKT",
  title: k.title,
  prompt: "Lernen Sie Ihren Gesprächspartner kennen. Sprechen Sie über das Thema.",
  difficulty: "CORE" as const,
  topicTag: k.topicTag,
  timeLimitSeconds: 180,
  payload: {
    situation:
      `Sie treffen im Test eine andere Teilnehmerin oder einen anderen Teilnehmer, die oder den Sie nicht kennen. Ihr gemeinsames Thema ist „${k.theme}“.`,
    instruction:
      `Kommen Sie miteinander ins Gespräch. Stellen Sie Fragen und antworten Sie selbst zu diesen Punkten:\n` +
      k.stichpunkte.map((p, i) => `${i + 1}. ${p}`).join("\n") +
      `\n\nSprechen Sie sich mit „Sie“ an. Reagieren Sie auf das, was die andere Person sagt.`,
    prepSeconds: 20,
    speakSeconds: 60,
  },
  guidanceNote: k.guidanceNote,
}));

// ── Teil 2 — Über ein Thema sprechen (8 items, NEW) ─────────────────────────
// A short solo talk on an everyday theme. As in Schriftlicher Ausdruck, exactly
// THREE Leitpunkte, held to three by the tuple type below. The talk asks for the
// candidate's own experience and opinion — not a balanced essay, which would be
// B2 — so the points are personal: how it is for you, an example, what you think.
type Thema = {
  title: string;
  topicTag: string;
  theme: string;
  leitpunkte: [string, string, string];
  guidanceNote: string;
};

const THEMA: Thema[] = [
  {
    title: "Über ein Thema sprechen: Handy im Alltag",
    topicTag: "alltag",
    theme: "das Handy im Alltag",
    leitpunkte: ["Wofür nutzen Sie Ihr Handy im Alltag?", "Erzählen Sie von einer Situation, in der es Ihnen geholfen oder gestört hat.", "Sagen Sie Ihre Meinung: mehr Vorteile oder mehr Nachteile?"],
    guidanceNote:
      "Ein konkretes Beispiel beim zweiten Punkt ist wichtiger als viele allgemeine Sätze. Beim dritten Punkt klar Position beziehen.",
  },
  {
    title: "Über ein Thema sprechen: Fernsehen und Streaming",
    topicTag: "freizeit",
    theme: "Fernsehen und Streaming",
    leitpunkte: ["Wie und wann sehen Sie Filme oder Serien?", "Was schauen Sie am liebsten, und warum?", "Sehen Menschen heute zu viel auf Bildschirme? Ihre Meinung."],
    guidanceNote:
      "Nennen Sie beim zweiten Punkt ein Beispiel. Für die Meinung: „Ich finde …, weil …“.",
  },
  {
    title: "Über ein Thema sprechen: Einkaufen im Internet",
    topicTag: "alltag",
    theme: "Einkaufen im Internet oder im Geschäft",
    leitpunkte: ["Kaufen Sie lieber online oder im Geschäft ein?", "Erzählen Sie von einem guten oder schlechten Einkauf.", "Was raten Sie anderen: worauf sollte man achten?"],
    guidanceNote:
      "Der letzte Punkt verlangt einen Rat, keine allgemeine Aussage: „Man sollte …“, „Ich würde empfehlen …“.",
  },
  {
    title: "Über ein Thema sprechen: Fahrrad oder Auto in der Stadt",
    topicTag: "verkehr",
    theme: "Fahrrad oder Auto in der Stadt",
    leitpunkte: ["Wie sind Sie in der Stadt unterwegs?", "Erzählen Sie von Ihren Erfahrungen damit.", "Was wäre besser für Ihre Stadt? Ihre Meinung."],
    guidanceNote:
      "Bleiben Sie bei Ihrer eigenen Stadt und Ihrem eigenen Alltag. Begründen Sie Ihre Meinung mit einem Grund.",
  },
  {
    title: "Über ein Thema sprechen: Gesunde Ernährung",
    topicTag: "gesundheit",
    theme: "gesunde Ernährung",
    leitpunkte: ["Was bedeutet gesundes Essen für Sie?", "Wie ernähren Sie sich im Alltag — gelingt das immer?", "Ist gesundes Essen eine Frage von Zeit oder von Geld? Ihre Meinung."],
    guidanceNote:
      "Ehrlich sein wirkt authentischer als perfekt: „Ich versuche …, aber …“. Beim dritten Punkt Stellung nehmen.",
  },
  {
    title: "Über ein Thema sprechen: Haustiere",
    topicTag: "alltag",
    theme: "Haustiere",
    leitpunkte: ["Haben Sie ein Haustier oder hätten Sie gern eines?", "Erzählen Sie von einem Tier, das Sie kennen.", "Passt ein Haustier in eine kleine Wohnung? Ihre Meinung."],
    guidanceNote:
      "Auch ohne eigenes Tier können Sie erzählen — von einem Tier bei Freunden oder in der Familie.",
  },
  {
    title: "Über ein Thema sprechen: Urlaub am Meer oder in den Bergen",
    topicTag: "freizeit",
    theme: "Urlaub am Meer oder in den Bergen",
    leitpunkte: ["Wo machen Sie lieber Urlaub — Meer oder Berge?", "Erzählen Sie von einem Urlaub, an den Sie sich gern erinnern.", "Muss Urlaub weit weg sein, um schön zu sein? Ihre Meinung."],
    guidanceNote:
      "Der zweite Punkt braucht die Vergangenheit (Perfekt). Die Meinung am Ende klar formulieren.",
  },
  {
    title: "Über ein Thema sprechen: Sport treiben",
    topicTag: "gesundheit",
    theme: "Sport im Alltag",
    leitpunkte: ["Treiben Sie Sport? Welchen und wie oft?", "Erzählen Sie, wie Sie dazu gekommen sind — oder warum nicht.", "Sollte man Kinder mehr zum Sport bringen? Ihre Meinung."],
    guidanceNote:
      "Auch „Ich treibe wenig Sport, weil …“ ist eine gute Antwort. Wichtig ist, dass Sie alle drei Punkte behandeln.",
  },
];

const teil2Items: ExamItemInput[] = THEMA.map((t) => ({
  exam: EXAM,
  level: L,
  section: SECTION.SPRECHEN,
  taskType: "TELC_B1_SP_THEMA",
  title: t.title,
  prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann über das Thema.",
  difficulty: "CORE" as const,
  topicTag: t.topicTag,
  timeLimitSeconds: 180,
  payload: {
    situation:
      `Sie sollen im Test kurz allein über ein Thema sprechen. Ihr Thema ist „${t.theme}“. Danach reagiert Ihre Partnerin oder Ihr Partner darauf.`,
    instruction:
      `Sprechen Sie zusammenhängend über das Thema und gehen Sie auf alle drei Punkte ein:\n` +
      t.leitpunkte.map((p, i) => `${i + 1}. ${p}`).join("\n") +
      `\n\nSprechen Sie frei. Ein eigenes Beispiel ist besser als viele allgemeine Sätze.`,
    prepSeconds: 60,
    speakSeconds: 90,
  },
  guidanceNote: t.guidanceNote,
}));

// ── Teil 3 — Gemeinsam etwas planen (16 items, MOVED + key corrected) ───────
// These are the sixteen items that lived in telc-b1.ts. Titles and payloads are
// unchanged; the ONLY edit is taskType TELC_B1_SP_PLAN → TELC_B1_SP_PLANEN, the
// key the structure actually declares — the correction that makes them
// conformant. Do not otherwise "tidy" them: any further content change rewrites
// the row on the next deploy and adds noise to a reconcile that must stay small.
const teil3Items: ExamItemInput[] = [
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Gemeinsam etwas planen: ein Geschenk",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Eine gemeinsame Kollegin geht bald in Rente. Sie möchten mit einer anderen Person zusammen ein Abschiedsgeschenk und eine kleine Feier planen.",
      instruction:
        "Machen Sie Vorschläge: Was könnte man schenken? Wann und wo soll die Feier stattfinden? Reagieren Sie auch auf mögliche Vorschläge Ihres Partners und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Redemittel: „Wir könnten …“, „Was hältst du von …?“, „Einverstanden“ / „Vielleicht lieber …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Gemeinsam einen Ausflug planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person am Sonntag einen Ausflug machen. Zu klären sind das Ziel, die Anreise und was Sie mitnehmen.",
      instruction:
        "Machen Sie Vorschläge zum Ziel, zur Anreise und zum Proviant. Reagieren Sie auf die Ideen Ihres Partners und einigen Sie sich am Ende.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Redemittel: „Wollen wir …?“, „Ich schlage vor …“, „Gute Idee“ / „Lieber …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Ein Fest organisieren",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie wollen mit einer anderen Person ein Sommerfest für den Deutschkurs organisieren. Zu klären sind Ort, Essen und Musik.",
      instruction:
        "Machen Sie Vorschläge zu Ort, Essen und Musik. Gehen Sie auf die Vorschläge Ihres Partners ein und treffen Sie gemeinsam Entscheidungen.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Verteilen Sie Aufgaben: „Kümmerst du dich um …? Dann mache ich …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Ein gemeinsames Essen planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person zusammen kochen und Freunde einladen. Zu klären sind das Gericht, der Einkauf und die Uhrzeit.",
      instruction:
        "Machen Sie Vorschläge zum Gericht, zum Einkauf und zur Uhrzeit. Reagieren Sie auf die Ideen Ihres Partners und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Einfache Vorschläge reichen: „Wie wäre es mit …?“, „Kaufst du …, dann bringe ich …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Eine Reise planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person eine Wochenendreise machen. Zu klären sind das Reiseziel, die Unterkunft und das Budget.",
      instruction:
        "Machen Sie Vorschläge zu Ziel, Unterkunft und Budget. Gehen Sie auf die Wünsche Ihres Partners ein und einigen Sie sich auf einen Plan.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Nennen Sie konkrete Beispiele und begründen Sie kurz: „Ich würde gern …, weil …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Beim Umzug helfen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Eine gemeinsame Freundin zieht um. Sie möchten mit einer anderen Person planen, wie Sie ihr helfen können. Zu klären sind der Tag, die Aufgaben und das Transportmittel.",
      instruction:
        "Machen Sie Vorschläge zum Tag, zu den Aufgaben und zum Transport. Reagieren Sie auf Ihren Partner und treffen Sie Entscheidungen.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Klären Sie, wer was übernimmt: „Ich kann ein Auto besorgen“, „Kannst du …?“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Einen Kinoabend planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person ins Kino gehen. Zu klären sind der Film, die Uhrzeit und der Treffpunkt.",
      instruction:
        "Machen Sie Vorschläge zu Film, Uhrzeit und Treffpunkt. Gehen Sie auf die Wünsche Ihres Partners ein und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Worauf hast du Lust?“ und „Treffen wir uns um …?“ helfen bei der Absprache.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Ein Geschenk für einen Kollegen aussuchen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Ein Kollege verlässt die Firma. Sie möchten mit einer anderen Person ein Abschiedsgeschenk aussuchen. Zu klären sind das Geschenk, das Budget und wer es kauft.",
      instruction:
        "Machen Sie Vorschläge zum Geschenk, zum Budget und dazu, wer es besorgt. Reagieren Sie auf Ihren Partner und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Wägen Sie ab: „Das ist vielleicht zu teuer“, „Wie wäre es stattdessen mit …?“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Gemeinsam für die Prüfung lernen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person zusammen für die Deutschprüfung lernen. Zu klären sind der Ort, die Zeiten und wie Sie die Themen aufteilen.",
      instruction:
        "Machen Sie Vorschläge zu Ort, Zeiten und Themenaufteilung. Gehen Sie auf Ihren Partner ein und treffen Sie gemeinsam einen Plan.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Sollen wir uns in der Bibliothek treffen?“, „Ich übe …, du übst …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Einen Spielabend organisieren",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person einen Spielabend mit Freunden organisieren. Zu klären sind der Ort, das Datum und was jeder mitbringt.",
      instruction:
        "Machen Sie Vorschläge zu Ort, Datum und dazu, was jeder mitbringt. Reagieren Sie auf die Ideen Ihres Partners und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Einfache Absprachen: „Bei mir ist Platz“, „Bringst du Getränke mit?“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Einen Garten gemeinsam nutzen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie und eine Nachbarin möchten den gemeinsamen Hof begrünen. Zu klären sind, was gepflanzt wird, wer sich kümmert und wie die Kosten geteilt werden.",
      instruction:
        "Machen Sie Vorschläge dazu, was gepflanzt wird, wer sich kümmert und wie Sie die Kosten teilen. Gehen Sie auf Ihre Partnerin ein und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Wir könnten Blumen pflanzen“, „Ich gieße montags, du …“, „Teilen wir die Kosten?“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Einen Willkommensabend planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "In Ihrem Kurs kommen neue Teilnehmer dazu. Sie möchten mit einer anderen Person einen kleinen Willkommensabend planen. Zu klären sind Ort, Programm und Einladung.",
      instruction:
        "Machen Sie Vorschläge zu Ort, Programm und dazu, wie Sie die neuen Teilnehmer einladen. Reagieren Sie auf Ihren Partner und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Denken Sie an die Gäste: „Damit sich alle kennenlernen, könnten wir …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Zusammen Sport machen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "gesundheit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person regelmäßig Sport machen. Zu klären sind die Sportart, die Tage und der Ort.",
      instruction:
        "Machen Sie Vorschläge zu Sportart, Tagen und Ort. Gehen Sie auf die Wünsche Ihres Partners ein und einigen Sie sich auf einen Plan.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Ich laufe gern“, „Zweimal pro Woche?“, „Treffen wir uns im Park?“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Eine Überraschung planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Eine gemeinsame Freundin hat bald Geburtstag. Sie möchten mit einer anderen Person eine Überraschung planen. Zu klären sind die Idee, der Ort und wer wen einlädt.",
      instruction:
        "Machen Sie Vorschläge zur Überraschung, zum Ort und dazu, wer die Gäste einlädt. Reagieren Sie auf Ihren Partner und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Wie wäre es, wenn wir …?“, „Ich rufe … an, du …“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Das Wohnzimmer gemeinsam einrichten",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie und Ihr Mitbewohner möchten das gemeinsame Wohnzimmer neu einrichten. Zu klären sind die Möbel, die Farben und das Budget.",
      instruction:
        "Machen Sie Vorschläge zu Möbeln, Farben und Budget. Gehen Sie auf die Ideen Ihres Partners ein und treffen Sie gemeinsam Entscheidungen.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Ich fände ein Sofa gut“, „Welche Farbe magst du?“, „Das ist mir zu teuer“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLANEN",
    title: "Einen Tagesausflug mit Kindern planen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "freizeit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie möchten mit einer anderen Person einen Tagesausflug mit mehreren Kindern planen. Zu klären sind das Ziel, das Essen und die Uhrzeiten.",
      instruction:
        "Machen Sie Vorschläge zu Ziel, Essen und Uhrzeiten. Denken Sie an die Kinder, reagieren Sie auf Ihren Partner und einigen Sie sich.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Berücksichtigen Sie die Kinder: „Ein Spielplatz wäre gut“, „Nicht zu spät zurück“.",
  },
];

export const ITEMS: ExamItemInput[] = [...teil1Items, ...teil2Items, ...teil3Items];

// ── SECTION SHAPE, AS AUTHORED ──────────────────────────────────────────────
// 32 items · Teil 1 Kontaktaufnahme 8 · Teil 2 Über ein Thema 8 · Teil 3 Planen 16.
// Every Teil is at or above the ≥3/Aufgabe floor and the section clears ≥15.
// Teil 3 is heavier only because those sixteen items already existed and are
// conformant; trimming them to "balance" the section would deactivate conformant
// rows, which is the INVESTIGATE hard stop, not a tidy-up.

// telc Deutsch B1 (= Zertifikat Deutsch) — original practice items (CEFR B1). The
// citizenship flagship. Everyday themes. Written part 225 / oral 75 / total 300;
// pass = 60% of EACH part independently (135/225 and 45/75); modular.
//
// ORIGINALITY (doctrine #1): every text, gap and task is ORIGINAL to AlmiGoethe —
// never copied or derived from telc materials, Übungstests or the ZD B1 booklet.
//
// Density target: 16 items/section (full build). Filled section-by-section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B1;
const EXAM = "TELC_B1" as const;

export const ITEMS: ExamItemInput[] = [
  // LESEVERSTEHEN lives in ./telc-b1-leseverstehen.ts.
  // Its 16 items here carried ONE invented taskType (TELC_B1_LV_MCQ) with three
  // questions each; the real section has THREE Teile with published counts
  // (5/5/10 = 20). Re-authored, not relabelled.

  // SPRACHBAUSTEINE lives in ./telc-b1-sprachbausteine.ts.
  // Its 16 items here carried ONE invented taskType (TELC_B1_SB_GAP) with three
  // questions each and did not distinguish the two Teile at all; the real section has
  // TWO Teile of 10 gaps (grammar / vocabulary). Re-authored, not relabelled.

  // HOERVERSTEHEN lives in ./telc-b1-hoerverstehen.ts.
  // Its 16 items here carried TWO INVENTED taskTypes (TELC_B1_HV_ANNOUNCE and
  // TELC_B1_HV_DIALOG) with three MC questions each; the real section has THREE
  // Teile with published counts (5/10/5 = 20, Aufgaben 41-60) and is richtig/falsch
  // throughout. Re-authored, not relabelled.

  // SCHRIFTLICHER_AUSDRUCK lives in ./telc-b1-schriftlicher-ausdruck.ts.
  // Its 16 items here carried the invented taskType TELC_B1_SA_LETTER and buried
  // their Leitpunkte in running prose; the real Aufgabe is TELC_B1_SA_BRIEF, ONE
  // letter to a Vorgabe with exactly three Leitpunkte. Re-authored under the same
  // titles, so the sixteen rows update in place rather than churning the bank.

  // ---------------------------------------------------------------------- SPRECHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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
    taskType: "TELC_B1_SP_PLAN",
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

  // ==== all five telc B1 sections now at full 16/section density ====
];

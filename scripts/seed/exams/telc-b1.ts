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
  // ---------------------------------------------------------------- LESEVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Aushang im Hausflur: Mülltrennung",
    prompt: "Lesen Sie den Aushang und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Liebe Hausbewohnerinnen und Hausbewohner, in letzter Zeit wurde der Müll häufig falsch getrennt. Bitte werfen Sie Verpackungen aus Plastik in die gelbe Tonne und Papier in die blaue. Glas gehört nicht in den Hausmüll, sondern in die Container an der Ecke. Die Biotonne wird jeden Montag geleert. Bitte stellen Sie keine Möbel oder Elektrogeräte in den Hof — dafür gibt es den Sperrmüll, den Sie kostenlos anmelden können. Vielen Dank für Ihre Mithilfe. Die Hausverwaltung",
      questions: [
        {
          id: "q1",
          stem: "Wohin gehören Verpackungen aus Plastik?",
          options: [
            { id: "a", text: "in die blaue Tonne" },
            { id: "b", text: "in die gelbe Tonne" },
            { id: "c", text: "in den Container an der Ecke" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was soll man mit Glas tun?",
          options: [
            { id: "a", text: "in den Hausmüll werfen" },
            { id: "b", text: "in die Biotonne werfen" },
            { id: "c", text: "zu den Containern an der Ecke bringen" },
          ],
          answer: "c",
        },
        {
          id: "q3",
          stem: "Was gilt für alte Möbel?",
          options: [
            { id: "a", text: "Man kann kostenlos Sperrmüll anmelden." },
            { id: "b", text: "Man stellt sie in den Hof." },
            { id: "c", text: "Man wirft sie in die blaue Tonne." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Aushänge sind praktisch: Achten Sie auf Farben, Wochentage und klare Anweisungen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Zeitungsnotiz: Neues Stadtteilfest",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Am kommenden Wochenende findet zum ersten Mal das Fest „Unser Viertel“ statt. Von Samstag bis Sonntag gibt es auf dem Marktplatz Musik, Essen aus vielen Ländern und ein Programm für Kinder. Die Organisatoren möchten damit die Nachbarschaft zusammenbringen. Wer selbst etwas anbieten möchte, zum Beispiel einen Stand mit selbst gemachtem Kuchen, kann sich noch bis Freitag im Stadtteilbüro melden. Der Eintritt ist frei. Bei starkem Regen wird das Fest in die benachbarte Turnhalle verlegt.",
      questions: [
        {
          id: "q1",
          stem: "Was ist das Ziel der Organisatoren?",
          options: [
            { id: "a", text: "Geld für die Stadt zu sammeln" },
            { id: "b", text: "die Nachbarschaft zusammenzubringen" },
            { id: "c", text: "neue Geschäfte zu eröffnen" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wer einen eigenen Stand möchte, soll …",
          options: [
            { id: "a", text: "sich bis Freitag im Stadtteilbüro melden." },
            { id: "b", text: "am Samstag einfach kommen." },
            { id: "c", text: "eine Gebühr bezahlen." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was passiert bei starkem Regen?",
          options: [
            { id: "a", text: "Das Fest fällt aus." },
            { id: "b", text: "Das Fest wird verschoben." },
            { id: "c", text: "Das Fest findet in der Turnhalle statt." },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "„bis Freitag“, „bei starkem Regen“ — Bedingungen und Fristen sind beliebte Fragen.",
  },

  // ----------------------------------------------------------------- SPRACHBAUSTEINE
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "E-Mail an einen Vermieter",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrter Herr Klein, ich schreibe Ihnen, (1) die Heizung in meiner Wohnung seit drei Tagen nicht funktioniert. Könnten Sie bitte einen Handwerker (2)? Es ist im Moment sehr kalt. Ich (3) mich über eine schnelle Antwort. Mit freundlichen Grüßen, Sara Demir",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "weil" },
            { id: "b", text: "denn" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "schicken" },
            { id: "b", text: "schickt" },
            { id: "c", text: "geschickt" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "freue" },
            { id: "b", text: "freut" },
            { id: "c", text: "gefreut" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„weil“ leitet den Grund ein (Verb ans Ende). „sich freuen über“ + Akkusativ ist fest.",
  },

  // ----------------------------------------------------------------- HOERVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Durchsage am Bahnhof",
    prompt: "Hören Sie die Durchsage und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "verkehr",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören eine Durchsage. Wählen Sie die richtige Antwort.",
      audioScript:
        "Sehr geehrte Fahrgäste, der Regionalzug nach Bremen, planmäßige Abfahrt vierzehn Uhr zwölf, hat heute etwa zwanzig Minuten Verspätung. Grund ist eine technische Störung an einem vorausfahrenden Zug. Der Zug fährt heute ausnahmsweise von Gleis fünf statt von Gleis drei ab. Bitte beachten Sie die geänderte Gleisangabe. Wir bitten um Ihr Verständnis.",
      questions: [
        {
          id: "q1",
          stem: "Wie viel Verspätung hat der Zug?",
          options: [
            { id: "a", text: "etwa zwölf Minuten" },
            { id: "b", text: "etwa zwanzig Minuten" },
            { id: "c", text: "keine Verspätung" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Von welchem Gleis fährt der Zug heute ab?",
          options: [
            { id: "a", text: "von Gleis drei" },
            { id: "b", text: "von Gleis fünf" },
            { id: "c", text: "von Gleis zwölf" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was ist der Grund für die Verspätung?",
          options: [
            { id: "a", text: "eine technische Störung an einem anderen Zug" },
            { id: "b", text: "schlechtes Wetter" },
            { id: "c", text: "zu viele Fahrgäste" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Vorsicht bei Zahlen: „vierzehn Uhr zwölf“ ist die Abfahrt, nicht die Verspätung.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Eine Einladung beantworten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Ihre Freundin Nadia hat Sie zu ihrer Wohnungseinweihung am Samstag eingeladen. Sie können kommen, möchten aber wissen, ob Sie etwas mitbringen sollen, und fragen nach dem Weg.",
      instruction:
        "Schreiben Sie Nadia eine E-Mail. Bedanken Sie sich für die Einladung, sagen Sie zu, fragen Sie, ob Sie etwas mitbringen sollen, und bitten Sie um eine Wegbeschreibung. Denken Sie an Anrede und Gruß.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote:
      "Bearbeiten Sie alle drei Punkte (danken, zusagen/fragen, Weg). Auf B1 zählt Vollständigkeit besonders.",
  },

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
];

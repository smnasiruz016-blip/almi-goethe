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
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Ansage im Supermarkt",
    prompt: "Hören Sie die Ansage und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Ansage. Wählen Sie die richtige Antwort.",
      audioScript:
        "Liebe Kundinnen und Kunden, heute bieten wir Ihnen frische Erdbeeren zum Sonderpreis an, die Schale nur zwei Euro. Sie finden das Angebot am Eingang bei der Obstabteilung. Außerdem möchten wir Sie daran erinnern, dass unser Markt heute wegen einer Inventur bereits um achtzehn Uhr schließt. Wir wünschen Ihnen einen schönen Einkauf.",
      questions: [
        {
          id: "q1",
          stem: "Was ist heute im Angebot?",
          options: [
            { id: "a", text: "Erdbeeren" },
            { id: "b", text: "Äpfel" },
            { id: "c", text: "Kirschen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wo findet man das Angebot?",
          options: [
            { id: "a", text: "am Eingang bei der Obstabteilung" },
            { id: "b", text: "an der Kasse" },
            { id: "c", text: "im Lager" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Warum schließt der Markt früher?",
          options: [
            { id: "a", text: "wegen einer Inventur" },
            { id: "b", text: "wegen eines Feiertags" },
            { id: "c", text: "wegen einer Reparatur" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Preis, Ort und Grund sind bei Supermarkt-Ansagen typische Fragen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Nachricht vom Arzt",
    prompt: "Hören Sie die Nachricht und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Nachricht auf dem Anrufbeantworter. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag, hier ist die Praxis Dr. Hoffmann. Wir rufen an, weil Ihr Termin am Mittwoch leider verschoben werden muss. Der Arzt ist an dem Tag auf einer Fortbildung. Wir könnten Ihnen den Donnerstag zur gleichen Uhrzeit anbieten. Bitte rufen Sie uns zurück und bestätigen Sie den neuen Termin. Sie erreichen uns vormittags bis zwölf Uhr.",
      questions: [
        {
          id: "q1",
          stem: "Warum muss der Termin verschoben werden?",
          options: [
            { id: "a", text: "Der Arzt ist auf einer Fortbildung." },
            { id: "b", text: "Die Praxis ist geschlossen." },
            { id: "c", text: "Der Patient ist krank." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welcher neue Termin wird angeboten?",
          options: [
            { id: "a", text: "Donnerstag zur gleichen Uhrzeit" },
            { id: "b", text: "Freitagnachmittag" },
            { id: "c", text: "Montagmorgen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wann ist die Praxis erreichbar?",
          options: [
            { id: "a", text: "vormittags bis zwölf Uhr" },
            { id: "b", text: "nur am Abend" },
            { id: "c", text: "am Wochenende" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Bei Anrufbeantworter-Nachrichten zählen Grund, neuer Termin und Erreichbarkeit.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_DIALOG",
    title: "Im Restaurant",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören ein Gespräch im Restaurant. Wählen Sie die richtige Antwort.",
      audioScript:
        "KELLNER: Haben Sie schon gewählt? GAST: Ja, ich nehme die Gemüsesuppe und danach den Fisch mit Kartoffeln. KELLNER: Sehr gern. Und zu trinken? GAST: Ein Wasser, bitte. Ach, und ist im Fischgericht Knoblauch? Ich vertrage das nicht so gut. KELLNER: Nein, da ist kein Knoblauch drin, kein Problem. GAST: Prima, dann passt das. KELLNER: Ich bringe Ihnen gleich das Wasser.",
      questions: [
        {
          id: "q1",
          stem: "Was bestellt der Gast als Hauptgericht?",
          options: [
            { id: "a", text: "Fisch mit Kartoffeln" },
            { id: "b", text: "Fleisch mit Reis" },
            { id: "c", text: "einen Salat" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wonach fragt der Gast?",
          options: [
            { id: "a", text: "ob im Gericht Knoblauch ist" },
            { id: "b", text: "ob es einen Nachtisch gibt" },
            { id: "c", text: "wie lange es dauert" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was bringt der Kellner zuerst?",
          options: [
            { id: "a", text: "das Wasser" },
            { id: "b", text: "die Suppe" },
            { id: "c", text: "die Rechnung" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf Bestellung, Rückfrage und Reihenfolge.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Durchsage im Zug",
    prompt: "Hören Sie die Durchsage und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "verkehr",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Durchsage im Zug. Wählen Sie die richtige Antwort.",
      audioScript:
        "Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir den Bahnhof Kassel. Reisende in Richtung Frankfurt steigen bitte hier um; der Anschlusszug fährt von Gleis acht. Bitte beachten Sie, dass der Zug heute geteilt wird: Der vordere Teil fährt weiter nach Hamburg, der hintere Teil nach Hannover. Achten Sie auf die Anzeigen am Bahnsteig.",
      questions: [
        {
          id: "q1",
          stem: "Wo sollen Reisende nach Frankfurt umsteigen?",
          options: [
            { id: "a", text: "in Kassel, von Gleis acht" },
            { id: "b", text: "in Hamburg" },
            { id: "c", text: "in Hannover" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was passiert mit dem Zug?",
          options: [
            { id: "a", text: "Er wird geteilt." },
            { id: "b", text: "Er fällt aus." },
            { id: "c", text: "Er hat Verspätung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wohin fährt der vordere Teil?",
          options: [
            { id: "a", text: "nach Hamburg" },
            { id: "b", text: "nach Hannover" },
            { id: "c", text: "nach Frankfurt" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„vorderer Teil … hinterer Teil“ — merken Sie sich, welcher wohin fährt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Wetterbericht im Radio",
    prompt: "Hören Sie den Wetterbericht und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören einen Wetterbericht. Wählen Sie die richtige Antwort.",
      audioScript:
        "Und nun das Wetter für morgen. Am Vormittag bleibt es zunächst grau und neblig. Am Nachmittag lockert es auf, und die Sonne kommt heraus. Die Temperaturen steigen auf angenehme achtzehn Grad. Gegen Abend kann es im Süden einzelne Schauer geben. Nehmen Sie also sicherheitshalber einen Regenschirm mit, wenn Sie später unterwegs sind.",
      questions: [
        {
          id: "q1",
          stem: "Wie ist das Wetter am Vormittag?",
          options: [
            { id: "a", text: "grau und neblig" },
            { id: "b", text: "sonnig und warm" },
            { id: "c", text: "stürmisch" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie warm wird es?",
          options: [
            { id: "a", text: "achtzehn Grad" },
            { id: "b", text: "acht Grad" },
            { id: "c", text: "achtundzwanzig Grad" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was kann es am Abend im Süden geben?",
          options: [
            { id: "a", text: "einzelne Schauer" },
            { id: "b", text: "Schnee" },
            { id: "c", text: "Sturm" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf Tageszeiten und Temperaturen — „achtzehn“ nicht mit „acht“ verwechseln.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Nachricht vom Handwerker",
    prompt: "Hören Sie die Nachricht und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Nachricht auf dem Anrufbeantworter. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag, hier ist die Firma Elektro Vogel. Wegen der Reparatur Ihrer Heizung wollten wir morgen früh vorbeikommen. Leider ist unser Kollege krank geworden, deshalb schaffen wir es erst am Freitag. Wir kämen dann zwischen acht und zehn Uhr. Bitte sagen Sie uns kurz, ob das für Sie passt. Vielen Dank und auf Wiederhören.",
      questions: [
        {
          id: "q1",
          stem: "Warum kann die Firma nicht morgen kommen?",
          options: [
            { id: "a", text: "Ein Kollege ist krank geworden." },
            { id: "b", text: "Das Ersatzteil fehlt." },
            { id: "c", text: "Die Adresse ist falsch." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann kommt die Firma stattdessen?",
          options: [
            { id: "a", text: "am Freitag zwischen acht und zehn Uhr" },
            { id: "b", text: "am Samstag am Nachmittag" },
            { id: "c", text: "erst nächste Woche" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Worum bittet die Firma?",
          options: [
            { id: "a", text: "um eine kurze Rückmeldung, ob der Termin passt" },
            { id: "b", text: "um eine Vorauszahlung" },
            { id: "c", text: "um ein neues Angebot" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Grund, neuer Termin und die Bitte um Rückmeldung sind hier die drei Kernpunkte.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_DIALOG",
    title: "Nach dem Weg fragen",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören ein Gespräch auf der Straße. Wählen Sie die richtige Antwort.",
      audioScript:
        "TOURISTIN: Entschuldigung, wie komme ich zum Museum? PASSANT: Gehen Sie hier geradeaus bis zur Ampel, dann rechts. Das Museum ist nach etwa fünf Minuten auf der linken Seite. TOURISTIN: Und kann man dort auch parken? PASSANT: Direkt am Museum nicht, aber hinter der Kirche gibt es einen Parkplatz. TOURISTIN: Vielen Dank! PASSANT: Gern, viel Spaß im Museum.",
      questions: [
        {
          id: "q1",
          stem: "Wohin möchte die Touristin?",
          options: [
            { id: "a", text: "zum Museum" },
            { id: "b", text: "zur Kirche" },
            { id: "c", text: "zum Bahnhof" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll sie an der Ampel tun?",
          options: [
            { id: "a", text: "rechts abbiegen" },
            { id: "b", text: "links abbiegen" },
            { id: "c", text: "umkehren" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wo kann man parken?",
          options: [
            { id: "a", text: "hinter der Kirche" },
            { id: "b", text: "direkt am Museum" },
            { id: "c", text: "am Bahnhof" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Richtungen (geradeaus, rechts, links) und Ortsangaben genau verfolgen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Ansage im Kino",
    prompt: "Hören Sie die Ansage und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Ansage im Kino. Wählen Sie die richtige Antwort.",
      audioScript:
        "Liebe Gäste, der Film im Saal zwei beginnt in zehn Minuten. Bitte nehmen Sie langsam Ihre Plätze ein. Wir weisen Sie darauf hin, dass während der Vorstellung das Fotografieren nicht erlaubt ist. Getränke und Popcorn erhalten Sie noch bis zum Beginn an der Theke im Foyer. Wir wünschen Ihnen gute Unterhaltung.",
      questions: [
        {
          id: "q1",
          stem: "Wann beginnt der Film?",
          options: [
            { id: "a", text: "in zehn Minuten" },
            { id: "b", text: "sofort" },
            { id: "c", text: "in einer Stunde" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist während der Vorstellung nicht erlaubt?",
          options: [
            { id: "a", text: "das Fotografieren" },
            { id: "b", text: "das Essen" },
            { id: "c", text: "das Sitzen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wo bekommt man Getränke?",
          options: [
            { id: "a", text: "an der Theke im Foyer" },
            { id: "b", text: "im Saal" },
            { id: "c", text: "am Ausgang" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Zeit, Verbot und Ort sind die drei Informationen der Ansage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_DIALOG",
    title: "Beim Bäcker",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören ein Gespräch beim Bäcker. Wählen Sie die richtige Antwort.",
      audioScript:
        "VERKÄUFERIN: Guten Morgen, was darf es sein? KUNDE: Guten Morgen, ich hätte gern vier Brötchen und ein Vollkornbrot. VERKÄUFERIN: Gern. Möchten Sie das Brot geschnitten? KUNDE: Ja, bitte. Und haben Sie noch Käsekuchen? VERKÄUFERIN: Tut mir leid, der ist heute schon ausverkauft. Aber wir haben frischen Apfelkuchen. KUNDE: Dann nehme ich ein Stück Apfelkuchen. VERKÄUFERIN: Kommt sofort.",
      questions: [
        {
          id: "q1",
          stem: "Was möchte der Kunde zuerst kaufen?",
          options: [
            { id: "a", text: "Brötchen und ein Vollkornbrot" },
            { id: "b", text: "nur Kuchen" },
            { id: "c", text: "ein Baguette" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welcher Kuchen ist ausverkauft?",
          options: [
            { id: "a", text: "der Käsekuchen" },
            { id: "b", text: "der Apfelkuchen" },
            { id: "c", text: "der Schokokuchen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was nimmt der Kunde stattdessen?",
          options: [
            { id: "a", text: "ein Stück Apfelkuchen" },
            { id: "b", text: "ein Brötchen mehr" },
            { id: "c", text: "nichts" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„ausverkauft … aber wir haben …“ — merken Sie sich die Alternative.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Hinweis im Museum",
    prompt: "Hören Sie die Ansage und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "kultur",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Ansage im Museum. Wählen Sie die richtige Antwort.",
      audioScript:
        "Sehr geehrte Besucher, wir möchten Sie darauf hinweisen, dass das Museum in dreißig Minuten schließt. Bitte beenden Sie Ihren Rundgang rechtzeitig. Der Museumsshop im Erdgeschoss bleibt noch bis zur Schließung geöffnet. Die Sonderausstellung im ersten Stock ist heute leider bereits geschlossen. Wir danken Ihnen für Ihren Besuch und freuen uns, Sie bald wiederzusehen.",
      questions: [
        {
          id: "q1",
          stem: "Wann schließt das Museum?",
          options: [
            { id: "a", text: "in dreißig Minuten" },
            { id: "b", text: "in einer Stunde" },
            { id: "c", text: "sofort" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was bleibt bis zur Schließung geöffnet?",
          options: [
            { id: "a", text: "der Museumsshop" },
            { id: "b", text: "die Sonderausstellung" },
            { id: "c", text: "das Café" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist heute schon geschlossen?",
          options: [
            { id: "a", text: "die Sonderausstellung im ersten Stock" },
            { id: "b", text: "der Museumsshop" },
            { id: "c", text: "der Eingang" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Was noch offen ist und was schon zu ist — dieser Gegensatz wird geprüft.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Verkehrsmeldung im Radio",
    prompt: "Hören Sie die Verkehrsmeldung und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "verkehr",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Verkehrsmeldung. Wählen Sie die richtige Antwort.",
      audioScript:
        "Und nun die Verkehrslage. Auf der Autobahn A3 zwischen Würzburg und Nürnberg gibt es nach einem Unfall etwa fünf Kilometer Stau. Bitte rechnen Sie mit einer Verzögerung von rund zwanzig Minuten. Wenn möglich, umfahren Sie den Bereich über die Landstraße. In der Innenstadt von Nürnberg ist außerdem die Hauptstraße wegen eines Marktes gesperrt.",
      questions: [
        {
          id: "q1",
          stem: "Warum gibt es Stau auf der A3?",
          options: [
            { id: "a", text: "wegen eines Unfalls" },
            { id: "b", text: "wegen einer Baustelle" },
            { id: "c", text: "wegen Schnee" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie lange dauert die Verzögerung etwa?",
          options: [
            { id: "a", text: "rund zwanzig Minuten" },
            { id: "b", text: "rund zwei Stunden" },
            { id: "c", text: "nur fünf Minuten" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Warum ist die Hauptstraße in Nürnberg gesperrt?",
          options: [
            { id: "a", text: "wegen eines Marktes" },
            { id: "b", text: "wegen eines Unfalls" },
            { id: "c", text: "wegen Bauarbeiten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Zwei Orte, zwei Gründe — ordnen Sie sie beim Hören einander zu.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Nachricht von einer Freundin",
    prompt: "Hören Sie die Nachricht und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Nachricht auf dem Anrufbeantworter. Wählen Sie die richtige Antwort.",
      audioScript:
        "Hallo Nina, ich bin's, Clara. Du, wegen morgen: Ich muss leider etwas früher los, deshalb schaffe ich es nicht um drei. Können wir uns schon um zwei treffen? Wir wollten ja zusammen den Kuchen für Papas Geburtstag backen. Bring bitte die Backform mit, meine ist kaputt. Ruf mich zurück, wenn zwei Uhr passt. Tschüss!",
      questions: [
        {
          id: "q1",
          stem: "Warum ruft Clara an?",
          options: [
            { id: "a", text: "Sie möchte den Treffpunkt eine Stunde vorziehen." },
            { id: "b", text: "Sie muss das Treffen absagen." },
            { id: "c", text: "Sie will den Ort ändern." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was wollen die beiden zusammen machen?",
          options: [
            { id: "a", text: "einen Kuchen backen" },
            { id: "b", text: "einkaufen gehen" },
            { id: "c", text: "ins Kino gehen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was soll Nina mitbringen?",
          options: [
            { id: "a", text: "die Backform" },
            { id: "b", text: "die Geschenke" },
            { id: "c", text: "die Getränke" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„schon um zwei statt um drei“ — die Zeitänderung ist der Kern der Nachricht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_DIALOG",
    title: "An der Hotelrezeption",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören ein Gespräch an der Rezeption. Wählen Sie die richtige Antwort.",
      audioScript:
        "GAST: Guten Abend, ich habe ein Zimmer auf den Namen Schneider reserviert. REZEPTION: Guten Abend, Herr Schneider. Ja, ein Einzelzimmer für zwei Nächte, stimmt das? GAST: Genau. Ist das Frühstück inbegriffen? REZEPTION: Ja, das Frühstück gibt es von sieben bis zehn Uhr im Erdgeschoss. GAST: Sehr gut. Und gibt es WLAN im Zimmer? REZEPTION: Ja, kostenlos. Das Passwort steht auf der Karte, die ich Ihnen mit dem Schlüssel gebe.",
      questions: [
        {
          id: "q1",
          stem: "Was für ein Zimmer hat der Gast reserviert?",
          options: [
            { id: "a", text: "ein Einzelzimmer für zwei Nächte" },
            { id: "b", text: "ein Doppelzimmer für eine Nacht" },
            { id: "c", text: "eine Suite für eine Woche" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann gibt es Frühstück?",
          options: [
            { id: "a", text: "von sieben bis zehn Uhr" },
            { id: "b", text: "von acht bis neun Uhr" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was sagt die Rezeption über das WLAN?",
          options: [
            { id: "a", text: "Es ist kostenlos, das Passwort steht auf der Karte." },
            { id: "b", text: "Es kostet extra." },
            { id: "c", text: "Es gibt kein WLAN." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Zimmerart, Frühstückszeit und WLAN sind die drei abgefragten Details.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_ANNOUNCE",
    title: "Ansage beim Stadtfest",
    prompt: "Hören Sie die Ansage und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "freizeit",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Sie hören eine Ansage bei einer Veranstaltung. Wählen Sie die richtige Antwort.",
      audioScript:
        "Liebe Besucherinnen und Besucher des Stadtfestes, wir freuen uns, Ihnen mitzuteilen, dass das Konzert auf der Hauptbühne um acht Uhr beginnt. Bis dahin können Sie an den vielen Ständen essen und trinken. Wir bitten die Eltern, ihre Kinder im Blick zu behalten. Sollten Sie ein Kind vermissen, wenden Sie sich bitte an den Informationsstand neben dem Rathaus.",
      questions: [
        {
          id: "q1",
          stem: "Wann beginnt das Konzert?",
          options: [
            { id: "a", text: "um acht Uhr" },
            { id: "b", text: "um sechs Uhr" },
            { id: "c", text: "um zehn Uhr" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worum werden die Eltern gebeten?",
          options: [
            { id: "a", text: "ihre Kinder im Blick zu behalten" },
            { id: "b", text: "früher zu gehen" },
            { id: "c", text: "Eintritt zu zahlen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wohin soll man sich bei einem vermissten Kind wenden?",
          options: [
            { id: "a", text: "an den Informationsstand neben dem Rathaus" },
            { id: "b", text: "an die Hauptbühne" },
            { id: "c", text: "an den Ausgang" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Beginn, Bitte und Anlaufstelle sind die drei Punkte der Ansage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B1_HV_DIALOG",
    title: "Ein Geschenk aussuchen",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören ein Gespräch zwischen zwei Freunden. Wählen Sie die richtige Antwort.",
      audioScript:
        "LEA: Was schenken wir Opa zum Geburtstag? TIM: Vielleicht ein Buch? Er liest doch so gern. LEA: Gute Idee, aber er hat schon so viele. Wie wäre es mit Karten für ein Konzert? TIM: Konzerte sind ihm meistens zu laut. Aber er wollte doch schon lange mal ins Theater. LEA: Stimmt! Dann schenken wir ihm Theaterkarten. TIM: Super, das machen wir. Ich kümmere mich morgen um die Karten.",
      questions: [
        {
          id: "q1",
          stem: "Warum ist ein Buch keine gute Idee?",
          options: [
            { id: "a", text: "Opa hat schon sehr viele Bücher." },
            { id: "b", text: "Opa liest nicht gern." },
            { id: "c", text: "Bücher sind zu teuer." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was schenken sie Opa schließlich?",
          options: [
            { id: "a", text: "Theaterkarten" },
            { id: "b", text: "Konzertkarten" },
            { id: "c", text: "ein Buch" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wer kümmert sich um die Karten?",
          options: [
            { id: "a", text: "Tim" },
            { id: "b", text: "Lea" },
            { id: "c", text: "Opa" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Vorschlag ändert sich mehrmals — nur die letzte Entscheidung zählt.",
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
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Sich für eine Verspätung entschuldigen",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie hatten einen Termin bei Ihrer Sprachlehrerin Frau Klein, sind aber nicht erschienen, weil Ihr Bus ausgefallen ist.",
      instruction:
        "Schreiben Sie Frau Klein eine E-Mail. Entschuldigen Sie sich, erklären Sie den Grund und schlagen Sie einen neuen Termin vor. Denken Sie an Anrede und Gruß.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Bearbeiten Sie alle drei Punkte: entschuldigen, begründen, neuen Termin vorschlagen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Um Informationen bitten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie möchten in einer Sprachschule einen Deutschkurs machen und brauchen noch Informationen.",
      instruction:
        "Schreiben Sie eine E-Mail an die Sprachschule. Fragen Sie, wann der Kurs beginnt, wie viel er kostet und ob es einen Test gibt. Denken Sie an Anrede und Gruß.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Stellen Sie klar drei Fragen. Höfliche Formen wie „Könnten Sie mir sagen …“ passen gut.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Eine Ware reklamieren",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie haben im Internet eine Kaffeemaschine bestellt. Das Gerät funktioniert nicht richtig.",
      instruction:
        "Schreiben Sie eine E-Mail an den Online-Shop. Beschreiben Sie das Problem, sagen Sie, was Sie sich wünschen (Umtausch oder Geld zurück), und fragen Sie nach dem weiteren Vorgehen.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Nennen Sie das Problem konkret und formulieren Sie einen klaren Wunsch.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Einem Freund vom Urlaub erzählen",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie sind gerade aus dem Urlaub zurückgekommen und möchten einem Freund davon erzählen.",
      instruction:
        "Schreiben Sie Ihrem Freund eine E-Mail. Erzählen Sie, wo Sie waren, was Sie gemacht haben und was Ihnen am besten gefallen hat. Denken Sie an Anrede und Gruß.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Nutzen Sie das Perfekt für die Vergangenheit: „Ich bin … gefahren“, „Wir haben … gesehen“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Um einen Gefallen bitten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie fahren für eine Woche weg und möchten eine Nachbarin bitten, sich um Ihre Katze zu kümmern.",
      instruction:
        "Schreiben Sie der Nachbarin eine E-Mail. Bitten Sie um ihre Hilfe, erklären Sie, was zu tun ist, und bedanken Sie sich im Voraus. Denken Sie an Anrede und Gruß.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Erklären Sie konkret, was zu tun ist (füttern, Wasser geben) — das gehört zum Inhalt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Einen Termin verschieben",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie haben am Freitag einen Termin beim Friseur, können aber an diesem Tag nicht kommen.",
      instruction:
        "Schreiben Sie dem Friseursalon eine E-Mail. Sagen Sie den Termin ab, nennen Sie einen Grund und bitten Sie um einen neuen Termin nächste Woche.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Absagen, begründen, neuen Termin erbitten — drei Punkte, alle bearbeiten.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Auf eine Anzeige antworten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie haben eine Anzeige gelesen: Ein Zimmer in einer WG ist frei. Sie interessieren sich dafür.",
      instruction:
        "Schreiben Sie eine E-Mail an die WG. Stellen Sie sich kurz vor, sagen Sie, warum Sie sich interessieren, und fragen Sie, wann Sie das Zimmer ansehen können.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Vorstellen, Interesse begründen, nach einem Termin fragen — alle drei Punkte behandeln.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Sich für ein Geschenk bedanken",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Ihre Tante hat Ihnen zum Geburtstag ein Buch geschickt. Sie möchten sich bedanken.",
      instruction:
        "Schreiben Sie Ihrer Tante eine E-Mail. Bedanken Sie sich für das Geschenk, sagen Sie, wie Sie Ihren Geburtstag gefeiert haben, und laden Sie sie zu einem Besuch ein.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Danken, vom Geburtstag erzählen, einladen — drei Inhaltspunkte.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Eine Verabredung vorschlagen",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie möchten mit einer Freundin am Wochenende etwas unternehmen.",
      instruction:
        "Schreiben Sie Ihrer Freundin eine E-Mail. Schlagen Sie eine Aktivität vor, nennen Sie einen Tag und eine Uhrzeit und fragen Sie, ob ihr das passt.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Machen Sie einen konkreten Vorschlag mit Tag und Uhrzeit.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Nachbarn zu einer Feier einladen",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie sind gerade in eine neue Wohnung gezogen und möchten die Nachbarn zu einer kleinen Einweihungsfeier einladen.",
      instruction:
        "Schreiben Sie den Nachbarn eine kurze Einladung. Nennen Sie den Anlass, Tag und Uhrzeit und schreiben Sie, dass Sie sich über ihr Kommen freuen.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Anlass, Zeit und eine freundliche Einladung gehören hinein.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Um Rat bitten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie möchten ein neues Hobby beginnen, wissen aber nicht, was zu Ihnen passt. Ein guter Freund kennt viele Möglichkeiten.",
      instruction:
        "Schreiben Sie Ihrem Freund eine E-Mail. Erklären Sie Ihre Situation, sagen Sie, was Ihnen wichtig ist, und bitten Sie ihn um einen Rat.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Situation schildern, Wünsche nennen, klar um Rat bitten.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Sich krankmelden",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie sind krank und können heute nicht zu Ihrem Deutschkurs kommen.",
      instruction:
        "Schreiben Sie Ihrer Lehrerin eine E-Mail. Melden Sie sich ab, nennen Sie den Grund und fragen Sie, welche Aufgaben Sie zu Hause machen sollen.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Abmelden, begründen, nach Aufgaben fragen — drei Punkte.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Ein gebrauchtes Möbelstück anbieten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie möchten einen Schrank verkaufen. Eine Bekannte hat gefragt, ob Sie noch Möbel abzugeben haben.",
      instruction:
        "Schreiben Sie der Bekannten eine E-Mail. Beschreiben Sie den Schrank (Größe, Zustand), nennen Sie einen Preis und schreiben Sie, wann sie ihn ansehen kann.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Beschreiben, Preis nennen, Termin anbieten — alle drei Punkte behandeln.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Nach dem Weg und der Anreise fragen",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Sie sind zu einer Hochzeit eingeladen, die in einer anderen Stadt stattfindet. Sie kennen den Weg nicht.",
      instruction:
        "Schreiben Sie dem Brautpaar eine E-Mail. Sagen Sie zu, fragen Sie nach dem besten Weg dorthin und ob es in der Nähe ein Hotel gibt.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Zusagen, nach dem Weg fragen, nach einer Übernachtung fragen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B1_SA_LETTER",
    title: "Auf eine Einladung mit Absage antworten",
    prompt: "Schreiben Sie eine E-Mail (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 1800,
    payload: {
      situation:
        "Ein Freund hat Sie zu seiner Geburtstagsfeier eingeladen. Leider können Sie nicht kommen, weil Sie an dem Tag arbeiten müssen.",
      instruction:
        "Schreiben Sie Ihrem Freund eine E-Mail. Bedanken Sie sich für die Einladung, sagen Sie ab und nennen Sie den Grund. Schlagen Sie vor, sich an einem anderen Tag zu treffen.",
      wordMin: 60,
      wordMax: 120,
    },
    guidanceNote: "Danken, höflich absagen, begründen und ein anderes Treffen vorschlagen.",
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

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
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Anzeige: Fahrrad zu verkaufen",
    prompt: "Lesen Sie die Anzeige und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Verkaufe mein gut erhaltenes Damenrad, drei Jahre alt. Es hat sieben Gänge und ist erst kürzlich in der Werkstatt geprüft worden. Neue Reifen sind bereits montiert. Preis: 120 Euro. Ein Fahrradkorb und ein Schloss gehören dazu. Abzuholen am Wochenende in der Gartenstraße. Bei Interesse bitte abends anrufen.",
      questions: [
        {
          id: "q1",
          stem: "Was wurde am Fahrrad kürzlich gemacht?",
          options: [
            { id: "a", text: "Es wurde in der Werkstatt geprüft." },
            { id: "b", text: "Es wurde neu lackiert." },
            { id: "c", text: "Es wurde umgebaut." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was gehört zum Preis dazu?",
          options: [
            { id: "a", text: "ein Korb und ein Schloss" },
            { id: "b", text: "ein Helm" },
            { id: "c", text: "eine Luftpumpe" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wann kann man das Rad abholen?",
          options: [
            { id: "a", text: "am Wochenende" },
            { id: "b", text: "nur montags" },
            { id: "c", text: "jederzeit" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In Anzeigen sind Preis, Zubehör und Abholung typische Fragen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "E-Mail: Einladung zum Grillfest",
    prompt: "Lesen Sie die E-Mail und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Hallo zusammen, am Samstag mache ich ein kleines Grillfest in meinem Garten. Es geht um sechs Uhr abends los. Für Fleisch und Salate sorge ich, bringt aber bitte selbst etwas zu trinken mit. Falls es regnet, feiern wir einfach in der Wohnung. Sagt mir bis Donnerstag Bescheid, ob ihr kommt, damit ich genug einkaufen kann. Liebe Grüße, Timo",
      questions: [
        {
          id: "q1",
          stem: "Worum sollen die Gäste sich selbst kümmern?",
          options: [
            { id: "a", text: "um Getränke" },
            { id: "b", text: "um das Fleisch" },
            { id: "c", text: "um die Salate" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was passiert bei Regen?",
          options: [
            { id: "a", text: "Man feiert in der Wohnung." },
            { id: "b", text: "Das Fest fällt aus." },
            { id: "c", text: "Das Fest wird verschoben." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Bis wann soll man Bescheid sagen?",
          options: [
            { id: "a", text: "bis Donnerstag" },
            { id: "b", text: "bis Samstag" },
            { id: "c", text: "bis Freitag" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Merken Sie sich, wer was mitbringt und welche Fristen genannt werden.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Aushang: Regeln für die Waschküche",
    prompt: "Lesen Sie den Aushang und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Liebe Mieterinnen und Mieter, bitte tragen Sie Ihre Waschzeiten in den Plan an der Tür ein. Jede Wohnung darf die Maschine höchstens zweimal pro Woche nutzen. Nach dem Waschen reinigen Sie bitte das Flusensieb und wischen die Maschine kurz aus. Nach 22 Uhr soll aus Rücksicht auf die Nachbarn nicht mehr gewaschen werden. Vielen Dank. Die Hausverwaltung",
      questions: [
        {
          id: "q1",
          stem: "Wie oft darf jede Wohnung die Maschine pro Woche nutzen?",
          options: [
            { id: "a", text: "höchstens zweimal" },
            { id: "b", text: "beliebig oft" },
            { id: "c", text: "nur einmal" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll man nach dem Waschen tun?",
          options: [
            { id: "a", text: "das Flusensieb reinigen und die Maschine auswischen" },
            { id: "b", text: "die Maschine abschließen" },
            { id: "c", text: "nichts weiter" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was gilt nach 22 Uhr?",
          options: [
            { id: "a", text: "Man soll nicht mehr waschen." },
            { id: "b", text: "Man darf doppelt so lange waschen." },
            { id: "c", text: "Man muss den Plan neu schreiben." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Hausordnungen enthalten oft Zeiten und Pflichten — genau darauf zielen die Fragen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Anzeige: Nachhilfe gesucht",
    prompt: "Lesen Sie die Anzeige und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Wir suchen für unseren Sohn (10. Klasse) Nachhilfe in Mathematik. Der Unterricht soll einmal pro Woche bei uns zu Hause stattfinden, am besten am Nachmittag. Erfahrung mit Schülern ist erwünscht, ein Studium ist nicht nötig. Bezahlung nach Absprache. Bei Interesse schreiben Sie bitte eine kurze Nachricht mit ein paar Angaben zu sich.",
      questions: [
        {
          id: "q1",
          stem: "In welchem Fach wird Nachhilfe gesucht?",
          options: [
            { id: "a", text: "Mathematik" },
            { id: "b", text: "Deutsch" },
            { id: "c", text: "Englisch" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wo soll der Unterricht stattfinden?",
          options: [
            { id: "a", text: "bei der Familie zu Hause" },
            { id: "b", text: "in der Schule" },
            { id: "c", text: "in einer Bibliothek" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was wird über ein Studium gesagt?",
          options: [
            { id: "a", text: "Es ist nicht nötig." },
            { id: "b", text: "Es ist Voraussetzung." },
            { id: "c", text: "Es muss abgeschlossen sein." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf „nicht nötig“ — solche Verneinungen werden gern abgefragt.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Information: Kurs an der Volkshochschule",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Der Kochkurs „Einfach vegetarisch“ beginnt am 5. Oktober und findet an sechs Abenden jeweils dienstags statt. Die Zutaten sind im Preis enthalten; bitte bringen Sie nur eine Schürze mit. Der Kurs ist für Anfänger geeignet, Vorkenntnisse sind nicht erforderlich. Eine Anmeldung ist bis eine Woche vor Beginn möglich. Die Teilnehmerzahl ist begrenzt.",
      questions: [
        {
          id: "q1",
          stem: "An welchem Wochentag findet der Kurs statt?",
          options: [
            { id: "a", text: "dienstags" },
            { id: "b", text: "donnerstags" },
            { id: "c", text: "montags" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was müssen die Teilnehmer selbst mitbringen?",
          options: [
            { id: "a", text: "eine Schürze" },
            { id: "b", text: "die Zutaten" },
            { id: "c", text: "Töpfe" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Für wen ist der Kurs geeignet?",
          options: [
            { id: "a", text: "für Anfänger" },
            { id: "b", text: "nur für Profis" },
            { id: "c", text: "nur für Kinder" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„im Preis enthalten“ und „nur … mitbringen“ trennen, was gestellt wird und was nicht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Aushang: Aufzug außer Betrieb",
    prompt: "Lesen Sie den Aushang und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Sehr geehrte Bewohner, wegen einer Reparatur ist der Aufzug von Montag bis Mittwoch außer Betrieb. Bitte benutzen Sie in dieser Zeit die Treppe. Wer Hilfe beim Tragen benötigt, kann sich beim Hausmeister melden. Ab Donnerstag steht der Aufzug wieder zur Verfügung. Wir bitten um Ihr Verständnis.",
      questions: [
        {
          id: "q1",
          stem: "Warum ist der Aufzug außer Betrieb?",
          options: [
            { id: "a", text: "wegen einer Reparatur" },
            { id: "b", text: "wegen eines Stromausfalls" },
            { id: "c", text: "wegen einer Feier" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "An wen kann man sich bei Bedarf wenden?",
          options: [
            { id: "a", text: "an den Hausmeister" },
            { id: "b", text: "an die Feuerwehr" },
            { id: "c", text: "an die Nachbarn" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Ab wann funktioniert der Aufzug wieder?",
          options: [
            { id: "a", text: "ab Donnerstag" },
            { id: "b", text: "ab Mittwoch" },
            { id: "c", text: "ab Montag" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Zeiträume („von Montag bis Mittwoch“, „ab Donnerstag“) sind hier entscheidend.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Notiz: Ein Paket beim Nachbarn",
    prompt: "Lesen Sie die Notiz und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Liebe Frau Yilmaz, ein Paket für Sie ist heute gekommen, aber Sie waren nicht zu Hause. Ich habe es angenommen und bei mir abgestellt. Sie können es jederzeit abholen, ich bin heute Abend und das ganze Wochenende da. Klingeln Sie einfach. Viele Grüße, Ihr Nachbar aus Wohnung 4.",
      questions: [
        {
          id: "q1",
          stem: "Was hat der Nachbar gemacht?",
          options: [
            { id: "a", text: "Er hat das Paket angenommen." },
            { id: "b", text: "Er hat das Paket zurückgeschickt." },
            { id: "c", text: "Er hat das Paket geöffnet." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann kann Frau Yilmaz das Paket abholen?",
          options: [
            { id: "a", text: "heute Abend und am Wochenende" },
            { id: "b", text: "nur morgen früh" },
            { id: "c", text: "erst nächste Woche" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was soll sie tun, um es abzuholen?",
          options: [
            { id: "a", text: "einfach klingeln" },
            { id: "b", text: "vorher anrufen" },
            { id: "c", text: "eine E-Mail schreiben" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Kurze Notizen fragen nach Wer, Wann und Wie — lesen Sie diese Angaben genau.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Anzeige: Zimmer in einer WG frei",
    prompt: "Lesen Sie die Anzeige und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "In unserer Dreier-WG wird ab dem 1. November ein Zimmer frei. Das Zimmer ist 16 Quadratmeter groß und möbliert. Die Miete beträgt 350 Euro warm. Wir sind zwei Studentinnen und suchen jemanden, der ordentlich ist und gern gemeinsam kocht. Haustiere sind leider nicht möglich. Wer Interesse hat, kann sich gern zu einem Kennenlernen melden.",
      questions: [
        {
          id: "q1",
          stem: "Ab wann ist das Zimmer frei?",
          options: [
            { id: "a", text: "ab dem 1. November" },
            { id: "b", text: "ab sofort" },
            { id: "c", text: "ab dem 1. Oktober" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist in der WG nicht möglich?",
          options: [
            { id: "a", text: "Haustiere" },
            { id: "b", text: "gemeinsames Kochen" },
            { id: "c", text: "ein möbliertes Zimmer" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wen suchen die Bewohnerinnen?",
          options: [
            { id: "a", text: "jemanden, der ordentlich ist und gern kocht" },
            { id: "b", text: "jemanden mit Auto" },
            { id: "c", text: "jemanden, der nie zu Hause ist" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf „nicht möglich“ und die genannten Wünsche der Mitbewohnerinnen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Information: Schwimmkurs für Kinder",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "freizeit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Das Hallenbad bietet in den Ferien einen Schwimmkurs für Kinder von sechs bis zehn Jahren an. Der Kurs dauert zwei Wochen und findet jeden Vormittag von zehn bis elf Uhr statt. Die Kinder sollten noch nicht schwimmen können; genau das lernen sie hier. Bitte bringen Sie Badesachen und ein Handtuch mit. Die Anmeldung erfolgt an der Kasse des Hallenbads.",
      questions: [
        {
          id: "q1",
          stem: "Für welche Kinder ist der Kurs?",
          options: [
            { id: "a", text: "für Kinder von sechs bis zehn Jahren" },
            { id: "b", text: "für alle Altersgruppen" },
            { id: "c", text: "nur für Jugendliche" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sollen die Kinder im Kurs lernen?",
          options: [
            { id: "a", text: "schwimmen" },
            { id: "b", text: "tauchen für Fortgeschrittene" },
            { id: "c", text: "Wasserball" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wo meldet man sich an?",
          options: [
            { id: "a", text: "an der Kasse des Hallenbads" },
            { id: "b", text: "im Internet" },
            { id: "c", text: "beim Trainer zu Hause" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Alter, Zeiten und Anmeldung sind bei Kursinfos die häufigsten Fragen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Aushang: Flohmarkt im Hof",
    prompt: "Lesen Sie den Aushang und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Am nächsten Sonntag findet in unserem Innenhof ein Flohmarkt statt. Wer einen Stand aufbauen möchte, meldet sich bitte bis Freitag bei Familie Braun in Wohnung 2. Ein Stand kostet nichts, aber jeder räumt seinen Platz danach selbst auf. Beginn ist um zehn Uhr. Für Kaffee und Kuchen ist gesorgt. Wir freuen uns auf einen schönen Tag.",
      questions: [
        {
          id: "q1",
          stem: "Was kostet ein Stand?",
          options: [
            { id: "a", text: "nichts" },
            { id: "b", text: "zehn Euro" },
            { id: "c", text: "fünf Euro" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was muss jeder selbst tun?",
          options: [
            { id: "a", text: "seinen Platz danach aufräumen" },
            { id: "b", text: "Kaffee mitbringen" },
            { id: "c", text: "Tische stellen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Bis wann meldet man einen Stand an?",
          options: [
            { id: "a", text: "bis Freitag" },
            { id: "b", text: "bis Sonntag" },
            { id: "c", text: "bis Samstag" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„kostet nichts, aber …“ verbindet einen Vorteil mit einer Pflicht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Zeitungsnotiz: Ein neuer Radweg",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "verkehr",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Zwischen dem Stadtzentrum und dem neuen Wohngebiet ist ein durchgehender Radweg fertiggestellt worden. Damit können Radfahrer die Strecke nun sicher zurücklegen, ohne die stark befahrene Hauptstraße zu nutzen. Die Stadt hofft, dass mehr Menschen aufs Rad umsteigen. In einem nächsten Schritt sollen entlang des Weges auch Abstellplätze und Beleuchtung folgen.",
      questions: [
        {
          id: "q1",
          stem: "Was ist neu fertiggestellt worden?",
          options: [
            { id: "a", text: "ein durchgehender Radweg" },
            { id: "b", text: "eine neue Hauptstraße" },
            { id: "c", text: "ein Parkhaus" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was hofft die Stadt?",
          options: [
            { id: "a", text: "dass mehr Menschen Rad fahren" },
            { id: "b", text: "dass mehr Autos fahren" },
            { id: "c", text: "dass weniger Menschen umziehen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was soll als Nächstes folgen?",
          options: [
            { id: "a", text: "Abstellplätze und Beleuchtung" },
            { id: "b", text: "eine neue Buslinie" },
            { id: "c", text: "ein Schwimmbad" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„In einem nächsten Schritt …“ kündigt zukünftige Pläne an — oft die letzte Frage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "E-Mail: Eine Ware zurückgeben",
    prompt: "Lesen Sie die E-Mail und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Sehr geehrte Damen und Herren, letzte Woche habe ich bei Ihnen eine Jacke bestellt. Leider ist sie zu klein, deshalb möchte ich sie zurückschicken. Könnten Sie mir bitte mitteilen, wie ich dabei vorgehen soll und ob das Rückporto von Ihnen übernommen wird? Über eine baldige Antwort würde ich mich freuen. Mit freundlichen Grüßen, Petra Lang",
      questions: [
        {
          id: "q1",
          stem: "Warum möchte Frau Lang die Jacke zurückschicken?",
          options: [
            { id: "a", text: "Sie ist zu klein." },
            { id: "b", text: "Sie hat die falsche Farbe." },
            { id: "c", text: "Sie ist beschädigt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wonach fragt sie unter anderem?",
          options: [
            { id: "a", text: "ob das Rückporto übernommen wird" },
            { id: "b", text: "ob es die Jacke in Rot gibt" },
            { id: "c", text: "wann der Laden öffnet" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was wünscht sich Frau Lang?",
          options: [
            { id: "a", text: "eine baldige Antwort" },
            { id: "b", text: "einen Gutschein" },
            { id: "c", text: "einen Termin im Geschäft" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In Beschwerde- und Anfrage-Mails zählt, was genau gewünscht oder gefragt wird.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "Information: Bücherei mit neuen Zeiten",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Ab dem nächsten Monat ändert unsere Stadtbücherei ihre Öffnungszeiten. Sie hat dann auch samstags von zehn bis vierzehn Uhr geöffnet. Dafür bleibt sie montags geschlossen. Die Ausleihe von Büchern ist weiterhin kostenlos; für Filme wird eine kleine Gebühr erhoben. Wer seinen Ausweis verloren hat, kann an der Theke einen neuen beantragen.",
      questions: [
        {
          id: "q1",
          stem: "Was ändert sich bei den Öffnungszeiten?",
          options: [
            { id: "a", text: "Die Bücherei hat jetzt auch samstags offen." },
            { id: "b", text: "Sie schließt früher am Abend." },
            { id: "c", text: "Sie öffnet sonntags." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "An welchem Tag bleibt die Bücherei geschlossen?",
          options: [
            { id: "a", text: "montags" },
            { id: "b", text: "samstags" },
            { id: "c", text: "mittwochs" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wofür wird eine Gebühr erhoben?",
          options: [
            { id: "a", text: "für die Ausleihe von Filmen" },
            { id: "b", text: "für die Ausleihe von Büchern" },
            { id: "c", text: "für den Eintritt" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Dafür bleibt sie montags geschlossen“ nennt die Kehrseite der neuen Zeiten.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B1_LV_MCQ",
    title: "E-Mail: Ein Termin beim Amt",
    prompt: "Lesen Sie die E-Mail und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Sehr geehrte Frau Koch, Ihren Termin zur Anmeldung haben wir für Dienstag, den 12. März, um neun Uhr eingetragen. Bitte bringen Sie Ihren Ausweis und den ausgefüllten Antrag mit. Sollten Sie den Termin nicht wahrnehmen können, sagen Sie ihn bitte mindestens einen Tag vorher ab. Der Eingang befindet sich auf der Rückseite des Gebäudes. Mit freundlichen Grüßen, Ihr Bürgeramt",
      questions: [
        {
          id: "q1",
          stem: "Was soll Frau Koch mitbringen?",
          options: [
            { id: "a", text: "ihren Ausweis und den ausgefüllten Antrag" },
            { id: "b", text: "nur Bargeld" },
            { id: "c", text: "ein Foto" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll sie tun, wenn sie nicht kommen kann?",
          options: [
            { id: "a", text: "den Termin mindestens einen Tag vorher absagen" },
            { id: "b", text: "einfach nicht erscheinen" },
            { id: "c", text: "am selben Tag anrufen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wo ist der Eingang?",
          options: [
            { id: "a", text: "auf der Rückseite des Gebäudes" },
            { id: "b", text: "im ersten Stock" },
            { id: "c", text: "neben dem Parkplatz" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Amtliche E-Mails nennen Termin, mitzubringende Unterlagen und Regeln zur Absage.",
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
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Nachricht an eine Freundin",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Hallo Mia, hast du am Samstag Zeit? Ich möchte gern (1) dir ins Kino gehen. Der neue Film soll sehr gut sein. (2) es dir passt, treffen wir uns um sieben vor dem Kino. Sag mir bitte Bescheid, (3) ich die Karten reservieren kann.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "mit" },
            { id: "b", text: "für" },
            { id: "c", text: "zu" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Wenn" },
            { id: "b", text: "Als" },
            { id: "c", text: "Ob" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "weil" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„mit dir“ (Dativ) ist fest; „wenn“ nennt eine Bedingung; „damit“ eine Absicht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "E-Mail an den Kursleiter",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrter Herr Weber, leider kann ich (1) Montag nicht zum Kurs kommen, (2) ich krank bin. Könnten Sie mir bitte sagen, was wir in der Stunde machen? Ich möchte den Stoff zu Hause nachholen, (3) ich nichts verpasse. Vielen Dank und viele Grüße, Ana",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "am" },
            { id: "b", text: "im" },
            { id: "c", text: "um" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "weil" },
            { id: "b", text: "denn" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "weil" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„am Montag“ ist fest; „weil“ stellt das Verb ans Satzende; „damit“ nennt die Absicht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Bitte an den Nachbarn",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Lieber Herr Sahin, ich fahre nächste Woche (1) den Urlaub. Könnten Sie bitte (2) meine Blumen gießen? Der Schlüssel ist wie immer bei Ihnen. Ich bringe Ihnen (3) eine Kleinigkeit mit. Vielen Dank im Voraus!",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "in" },
            { id: "b", text: "an" },
            { id: "c", text: "auf" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "kurz" },
            { id: "b", text: "kurze" },
            { id: "c", text: "kurzen" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "bestimmt" },
            { id: "b", text: "trotzdem" },
            { id: "c", text: "deshalb" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„in den Urlaub fahren“ ist fest; „kurz gießen“ (Adverb, ohne Endung).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Antwort auf eine Einladung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Sofia, vielen Dank (1) die Einladung zu deiner Feier. Ich komme sehr gern. Soll ich (2) mitbringen, zum Beispiel einen Salat? Ich freue mich schon (3) den Abend. Bis Samstag! Deine Lena",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "für" },
            { id: "b", text: "über" },
            { id: "c", text: "auf" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "etwas" },
            { id: "b", text: "nichts" },
            { id: "c", text: "alles" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "auf" },
            { id: "b", text: "über" },
            { id: "c", text: "für" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„danke für“ und „sich freuen auf“ (Zukunft) sind feste Verbindungen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Notiz für die Familie",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Ich bin schnell einkaufen gegangen und (1) gleich wieder da. Das Essen steht (2) Kühlschrank. Bitte deckt schon den Tisch, (3) wir gleich essen können. Bis gleich!",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "bin" },
            { id: "b", text: "habe" },
            { id: "c", text: "werde" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "im" },
            { id: "b", text: "auf dem" },
            { id: "c", text: "am" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "weil" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„bin … da“ (sein); „im Kühlschrank“ (Dativ, wo?); „damit“ nennt die Absicht.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Anfrage im Fitnessstudio",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Guten Tag, ich interessiere mich (1) eine Mitgliedschaft in Ihrem Studio. Können Sie mir sagen, (2) der Monat kostet? Außerdem würde ich gern wissen, (3) man auch am Wochenende trainieren kann. Vielen Dank für Ihre Auskunft.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "für" },
            { id: "b", text: "an" },
            { id: "c", text: "über" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "was" },
            { id: "b", text: "wie" },
            { id: "c", text: "wenn" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "ob" },
            { id: "b", text: "dass" },
            { id: "c", text: "wenn" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sich interessieren für“ ist fest; indirekte Ja/Nein-Frage → „ob“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Kurze Beschwerde",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Damen und Herren, gestern habe ich bei Ihnen eine Lampe gekauft, (1) leider nicht funktioniert. Ich (2) sie gern umtauschen. Könnten Sie mir sagen, ob ich den Kassenbon (3) muss? Vielen Dank.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "die" },
            { id: "b", text: "der" },
            { id: "c", text: "das" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "möchte" },
            { id: "b", text: "muss" },
            { id: "c", text: "darf" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "mitbringen" },
            { id: "b", text: "mitbringe" },
            { id: "c", text: "mitgebracht" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Relativpronomen für „Lampe“ (fem.) = „die“; nach Modalverb steht der Infinitiv „mitbringen“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Verabredung verschieben",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Hallo Ben, es tut mir leid, aber ich muss unser Treffen (1) verschieben. Mein Chef hat mich gefragt, (2) ich heute länger arbeiten kann. Passt es dir (3) morgen um die gleiche Zeit? Melde dich kurz. Gruß, Jonas",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "leider" },
            { id: "b", text: "gern" },
            { id: "c", text: "bald" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "ob" },
            { id: "b", text: "dass" },
            { id: "c", text: "wenn" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "auch" },
            { id: "b", text: "noch" },
            { id: "c", text: "schon" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„gefragt, ob …“ leitet eine indirekte Ja/Nein-Frage ein.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Nachricht an die Vermieterin",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Frau Roth, in der Küche tropft seit einigen Tagen der Wasserhahn. Ich habe schon versucht, ihn (1) reparieren, aber es hat nicht geklappt. Könnten Sie bitte einen Handwerker schicken? Am besten erreichen Sie mich (2) Telefon nach 17 Uhr. (3) Ihre Hilfe bedanke ich mich im Voraus.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "zu" },
            { id: "b", text: "für" },
            { id: "c", text: "um" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "per" },
            { id: "b", text: "mit" },
            { id: "c", text: "bei" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "Für" },
            { id: "b", text: "Über" },
            { id: "c", text: "Auf" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„versuchen zu + Infinitiv“; „per Telefon“ ist fest; „sich bedanken für“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Kurzer Dank",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Frau Nowak, vielen Dank, dass Sie (1) mich auf das Kind aufgepasst haben. Ohne Sie (2) ich den Termin nicht geschafft. Als kleines Dankeschön habe ich Ihnen einen Kuchen gebacken. Ich hoffe, er (3) Ihnen. Herzliche Grüße",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "für" },
            { id: "b", text: "auf" },
            { id: "c", text: "an" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "hätte" },
            { id: "b", text: "habe" },
            { id: "c", text: "hatte" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "schmeckt" },
            { id: "b", text: "schmeckte" },
            { id: "c", text: "geschmeckt" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„für mich aufpassen“; „hätte … geschafft“ = irreale Vergangenheit (Konjunktiv II).",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Frage an das Sekretariat",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Guten Tag, ich möchte mich (1) den Deutschkurs anmelden, der im September beginnt. Muss ich vorher einen Test machen, (2) man mein Niveau kennt? Und (3) bezahle ich die Gebühr, bar oder per Überweisung? Vielen Dank.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "für" },
            { id: "b", text: "an" },
            { id: "c", text: "auf" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "weil" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "wie" },
            { id: "b", text: "was" },
            { id: "c", text: "wann" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sich anmelden für“; „damit man … kennt“ nennt die Absicht; „wie bezahle ich“ = Art und Weise.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Krankmeldung bei der Arbeit",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Frau Berg, leider bin ich krank und kann heute nicht (1) Arbeit kommen. Ich war beim Arzt, (2) mich für drei Tage krankgeschrieben hat. Die Bescheinigung schicke ich Ihnen (3) Post. Mit freundlichen Grüßen, Herr Ott",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "zur" },
            { id: "b", text: "in die" },
            { id: "c", text: "auf die" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "der" },
            { id: "b", text: "die" },
            { id: "c", text: "den" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "per" },
            { id: "b", text: "mit" },
            { id: "c", text: "bei" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„zur Arbeit kommen“ ist fest; Relativpronomen für „Arzt“ (mask., Nom.) = „der“; „per Post“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Einladung zum Ausflug",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Hallo zusammen, am Sonntag machen wir einen Ausflug (1) den See. Wir wollen wandern und (2) grillen. Jeder bringt bitte etwas zu essen mit. (3) es regnet, verschieben wir den Ausflug auf nächste Woche. Kommt ihr mit?",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "an" },
            { id: "b", text: "auf" },
            { id: "c", text: "in" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "danach" },
            { id: "b", text: "vorher" },
            { id: "c", text: "deshalb" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "Falls" },
            { id: "b", text: "Obwohl" },
            { id: "c", text: "Damit" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„an den See“ (Bewegung, wohin?); „falls“ = „wenn“ und nennt die Bedingung.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Antwort auf eine Stellenanzeige",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Sehr geehrte Damen und Herren, mit großem Interesse habe ich Ihre Anzeige gelesen. Ich (1) mich um die Stelle als Verkäuferin. Ich habe schon drei Jahre (2) einem Geschäft gearbeitet und arbeite gern (3) Menschen. Über eine Einladung zu einem Gespräch würde ich mich sehr freuen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "bewerbe" },
            { id: "b", text: "melde" },
            { id: "c", text: "kümmere" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "in" },
            { id: "b", text: "an" },
            { id: "c", text: "auf" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "mit" },
            { id: "b", text: "für" },
            { id: "c", text: "bei" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sich bewerben um“; „in einem Geschäft arbeiten“ (Dativ, wo?); „mit Menschen arbeiten“.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B1_SB_GAP",
    title: "Nachricht vom Elternabend",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Eltern, am nächsten Donnerstag findet ein Elternabend statt, (1) wir über die Klassenfahrt sprechen möchten. Bitte kommen Sie pünktlich um 18 Uhr. (2) Sie nicht teilnehmen können, geben Sie Ihrem Kind bitte eine kurze Notiz mit. Wir freuen uns (3) Ihr Kommen.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "an dem" },
            { id: "b", text: "in dem" },
            { id: "c", text: "auf dem" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Falls" },
            { id: "b", text: "Damit" },
            { id: "c", text: "Obwohl" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "auf" },
            { id: "b", text: "über" },
            { id: "c", text: "für" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„an dem … Abend“ (Zeit); „falls“ = Bedingung; „sich freuen auf“ (Zukunft).",
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

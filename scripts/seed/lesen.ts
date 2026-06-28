// Seeds original LESEN (Reading) items — A1 starter set. German texts (short
// notices, messages, opening hours) + multiple-choice or richtig/falsch questions.
// All content is original to AlmiGoethe, never copied from the Goethe-Institut.
// Phase 0 ships an A1 starter; later content grows each level.
//
// Run: npm run seed:lesen  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.GoetheItemCreateManyInput[] = [
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine kurze Nachricht von Markus",
    prompt: "Lies die Nachricht und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Nachricht",
          body:
            "Hallo Anna,\n\nich gehe heute um 18 Uhr einkaufen. Kommst du mit? Danach können wir einen Kaffee trinken. Schreib mir bitte zurück.\n\nLiebe Grüße\nMarkus",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wann geht Markus einkaufen?",
          options: [
            { id: "a", text: "um 16 Uhr" },
            { id: "b", text: "um 18 Uhr" },
            { id: "c", text: "um 20 Uhr" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was möchte Markus nach dem Einkaufen machen?",
          options: [
            { id: "a", text: "einen Kaffee trinken" },
            { id: "b", text: "ins Kino gehen" },
            { id: "c", text: "schwimmen gehen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Lies zuerst die Fragen, dann suche die Antworten im Text.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Öffnungszeiten der Bäckerei",
    prompt: "Lies die Anzeige. Sind die Sätze richtig oder falsch?",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Bäckerei Sonne",
          body:
            "Öffnungszeiten:\nMontag bis Freitag: 7–18 Uhr\nSamstag: 7–13 Uhr\nSonntag: geschlossen",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Die Bäckerei ist am Sonntag offen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Am Samstag schließt die Bäckerei um 13 Uhr.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Bei richtig/falsch genügt oft ein einziges Detail im Text.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Postkarte aus dem Urlaub",
    prompt: "Lies die Postkarte und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Postkarte",
          body:
            "Liebe Oma,\n\nviele Grüße aus Italien! Das Wetter ist super, jeden Tag Sonne. Wir schwimmen viel im Meer und essen jeden Abend Pizza. Am Freitag fahren wir wieder nach Hause.\n\nBis bald!\nTom und Lisa",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wo sind Tom und Lisa?",
          options: [
            { id: "a", text: "in Spanien" },
            { id: "b", text: "in Italien" },
            { id: "c", text: "in Österreich" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wann fahren sie nach Hause?",
          options: [
            { id: "a", text: "am Freitag" },
            { id: "b", text: "am Sonntag" },
            { id: "c", text: "am Montag" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Ortsnamen und Wochentage.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Einladung zum Essen",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail",
          body:
            "Hallo Sara,\n\nam Sonntag koche ich für Freunde. Möchtest du auch kommen? Wir essen um 13 Uhr. Bring bitte einen Salat mit. Meine Adresse ist Gartenstraße 12.\n\nLiebe Grüße\nNina",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was soll Sara mitbringen?",
          options: [
            { id: "a", text: "einen Kuchen" },
            { id: "b", text: "einen Salat" },
            { id: "c", text: "Getränke" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Um wie viel Uhr essen sie?",
          options: [
            { id: "a", text: "um 12 Uhr" },
            { id: "b", text: "um 13 Uhr" },
            { id: "c", text: "um 14 Uhr" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "In Einladungen stehen oft Zeit, Ort und eine Bitte.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Anzeige: Wohnung zu vermieten",
    prompt: "Lies die Anzeige. Sind die Sätze richtig oder falsch?",
    difficulty: "STRETCH",
    topicTag: "wohnen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Wohnung zu vermieten",
          body:
            "Schöne 2-Zimmer-Wohnung in der Stadtmitte. 60 Quadratmeter, Küche und Bad neu. Die Miete ist 700 Euro pro Monat. Ein Balkon ist auch da. Tiere sind leider nicht erlaubt. Kontakt: Frau Berger, Telefon 0176 / 22 33 44.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Die Wohnung hat einen Balkon.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Man darf in der Wohnung ein Tier haben.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Wörter wie „nicht“ oder „leider“ verändern die Bedeutung.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Im Café — die Speisekarte",
    prompt: "Lies die Karte und wähle für jede Frage die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "essen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Café Mozart — Getränke",
          body:
            "Kaffee … 2,50 Euro\nTee … 2,00 Euro\nHeiße Schokolade … 3,00 Euro\nApfelsaft … 2,80 Euro\nWasser … 1,50 Euro",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was kostet am meisten?",
          options: [
            { id: "a", text: "Kaffee" },
            { id: "b", text: "Heiße Schokolade" },
            { id: "c", text: "Wasser" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie viel kostet der Apfelsaft?",
          options: [
            { id: "a", text: "2,00 Euro" },
            { id: "b", text: "2,80 Euro" },
            { id: "c", text: "3,00 Euro" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Vergleiche die Preise genau.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Welcher Kurs passt?",
    prompt: "Lies das Programm und ordne jeder Person den passenden Kurs zu.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Volkshochschule — Abendkurse",
          body:
            "Montag 18 Uhr: Yoga\nDienstag 19 Uhr: Spanisch für Anfänger\nMittwoch 18 Uhr: Kochen — Italienische Küche\nDonnerstag 19 Uhr: Computer für Senioren",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Herr Klein möchte eine neue Sprache lernen. Welcher Kurs passt?",
          options: [
            { id: "a", text: "Spanisch für Anfänger (Dienstag)" },
            { id: "b", text: "Yoga (Montag)" },
            { id: "c", text: "Kochen (Mittwoch)" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Frau Wolf möchte gern Pizza und Pasta machen lernen. Welcher Kurs passt?",
          options: [
            { id: "a", text: "Computer für Senioren (Donnerstag)" },
            { id: "b", text: "Kochen — Italienische Küche (Mittwoch)" },
            { id: "c", text: "Yoga (Montag)" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Suche zu jedem Wunsch das passende Detail im Programm.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine SMS: Treffen verschieben",
    prompt: "Lies die SMS und wähle die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "SMS",
          body:
            "Hi Paul, ich kann heute leider nicht um 17 Uhr. Können wir uns um 19 Uhr treffen? Gleicher Ort, vor dem Kino. LG Mia",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wann möchte Mia sich jetzt treffen?",
          options: [
            { id: "a", text: "um 17 Uhr" },
            { id: "b", text: "um 18 Uhr" },
            { id: "c", text: "um 19 Uhr" },
          ],
          answer: "c",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wo treffen sie sich?",
          options: [
            { id: "a", text: "vor dem Kino" },
            { id: "b", text: "im Café" },
            { id: "c", text: "am Bahnhof" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die neue Zeit steht in der Frage „Können wir …?“.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Der Wetterbericht",
    prompt: "Lies den kurzen Wetterbericht und wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "wetter",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Wetter heute",
          body:
            "Heute Morgen ist es kalt, nur 5 Grad. Am Nachmittag scheint die Sonne und es wird wärmer, etwa 14 Grad. Am Abend regnet es. Nimm einen Regenschirm mit!",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie ist das Wetter am Nachmittag?",
          options: [
            { id: "a", text: "Es regnet." },
            { id: "b", text: "Die Sonne scheint." },
            { id: "c", text: "Es schneit." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was soll man mitnehmen?",
          options: [
            { id: "a", text: "einen Regenschirm" },
            { id: "b", text: "eine Sonnenbrille" },
            { id: "c", text: "Handschuhe" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Das Wetter ändert sich im Text von Morgen bis Abend.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Schild im Park",
    prompt: "Lies das Schild. Sind die Sätze richtig oder falsch?",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Stadtpark — Regeln",
          body:
            "Willkommen im Stadtpark!\nHunde bitte an der Leine führen.\nFahrräder sind nicht erlaubt.\nDer Park ist von 6 bis 22 Uhr geöffnet.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Man darf im Park Fahrrad fahren.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Der Park ist um 21 Uhr offen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "„nicht erlaubt“ heißt: man darf es nicht.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Worum geht es? Eine kurze Nachricht",
    prompt: "Lies die Nachricht. Wähle, worum es geht.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Nachricht von der Nachbarin",
          body:
            "Hallo, ich bin nächste Woche im Urlaub. Können Sie bitte meine Blumen gießen und die Post aus dem Briefkasten nehmen? Den Schlüssel gebe ich Ihnen morgen. Vielen Dank! Frau Schmidt",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was möchte Frau Schmidt?",
          options: [
            { id: "a", text: "Sie sucht eine neue Wohnung." },
            { id: "b", text: "Sie bittet um Hilfe während des Urlaubs." },
            { id: "c", text: "Sie lädt zu einer Party ein." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Bei „Worum geht es?“ ist die Hauptidee wichtig, nicht jedes Detail.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "E-Mail vom Vermieter",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "wohnen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail",
          body:
            "Sehr geehrter Herr Ali,\n\nam Donnerstag kommt ein Techniker und repariert die Heizung. Er kommt zwischen 9 und 12 Uhr. Bitte sind Sie zu Hause oder geben Sie den Schlüssel beim Nachbarn ab.\n\nMit freundlichen Grüßen\nIhr Vermieter, Herr Lange",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum kommt der Techniker?",
          options: [
            { id: "a", text: "Er bringt neue Möbel." },
            { id: "b", text: "Er repariert die Heizung." },
            { id: "c", text: "Er putzt die Fenster." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was soll Herr Ali tun, wenn er nicht zu Hause ist?",
          options: [
            { id: "a", text: "den Schlüssel beim Nachbarn abgeben" },
            { id: "b", text: "einen neuen Termin machen" },
            { id: "c", text: "den Vermieter anrufen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Lies bis zum Ende — die Bitte steht oft im letzten Satz.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Das Kinoprogramm",
    prompt: "Lies das Programm und ordne jeder Person den passenden Film zu.",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Kino Stern — heute",
          body:
            "15 Uhr: Kinderfilm „Der kleine Bär“\n18 Uhr: Komödie „Lachen am Montag“\n20 Uhr: Krimi „Die dunkle Nacht“\n22 Uhr: Liebesfilm „Zwei Herzen“",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Familie Yilmaz geht am Nachmittag mit ihrem Kind ins Kino. Welcher Film passt?",
          options: [
            { id: "a", text: "„Der kleine Bär“ (15 Uhr)" },
            { id: "b", text: "„Die dunkle Nacht“ (20 Uhr)" },
            { id: "c", text: "„Zwei Herzen“ (22 Uhr)" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Jan mag spannende Filme und hat erst um 20 Uhr Zeit. Welcher Film passt?",
          options: [
            { id: "a", text: "„Lachen am Montag“ (18 Uhr)" },
            { id: "b", text: "„Die dunkle Nacht“ (20 Uhr)" },
            { id: "c", text: "„Der kleine Bär“ (15 Uhr)" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Beachte zwei Dinge: was die Person mag und wann sie Zeit hat.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Notiz auf dem Tisch",
    prompt: "Lies die Notiz und wähle die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Notiz",
          body:
            "Lieber Ben,\n\nich bin beim Sport. Im Kühlschrank ist Suppe für dich. Bitte ruf Mama an, sie hat angerufen. Ich bin um 19 Uhr zurück.\n\nPapa",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was soll Ben machen?",
          options: [
            { id: "a", text: "Mama anrufen" },
            { id: "b", text: "einkaufen gehen" },
            { id: "c", text: "die Wohnung putzen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wo ist Papa?",
          options: [
            { id: "a", text: "beim Sport" },
            { id: "b", text: "im Büro" },
            { id: "c", text: "beim Arzt" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Kurze Notizen haben oft eine Bitte und eine Information.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Anzeige: Flohmarkt",
    prompt: "Lies die Anzeige. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Großer Flohmarkt",
          body:
            "Am Samstag, 10. Mai, von 8 bis 14 Uhr auf dem Marktplatz. Kleidung, Bücher, Spielzeug und mehr. Der Eintritt ist frei. Bei Regen findet der Flohmarkt nicht statt.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Der Eintritt kostet Geld.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Bei Regen gibt es keinen Flohmarkt.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "„Eintritt frei“ bedeutet: man bezahlt nichts.",
  },
  {
    level: "A1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Bestätigung: Arzttermin",
    prompt: "Lies die Nachricht und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Praxis Dr. Weber",
          body:
            "Guten Tag Frau Costa,\n\nwir bestätigen Ihren Termin am Mittwoch um 10:30 Uhr. Bitte bringen Sie Ihre Versichertenkarte mit. Wenn Sie nicht kommen können, sagen Sie bitte einen Tag vorher ab.\n\nIhre Praxis Dr. Weber",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was soll Frau Costa mitbringen?",
          options: [
            { id: "a", text: "ihre Versichertenkarte" },
            { id: "b", text: "ein Rezept" },
            { id: "c", text: "Geld" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wann ist der Termin?",
          options: [
            { id: "a", text: "am Montag um 10:30 Uhr" },
            { id: "b", text: "am Mittwoch um 10:30 Uhr" },
            { id: "c", text: "am Mittwoch um 13:30 Uhr" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Termin-Texte nennen Tag, Uhrzeit und was man mitbringen soll.",
  },

  // ===================== A2 =====================
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine E-Mail über das Wochenende",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail",
          body:
            "Hallo Tobias,\n\nletztes Wochenende war ich mit Freunden in den Bergen. Wir sind am Samstag früh losgefahren und haben eine lange Wanderung gemacht. Am Anfang hat es geregnet, aber am Nachmittag wurde das Wetter besser. Abends haben wir zusammen gekocht. Es war ein schöner Tag, nur meine Füße haben am Ende wehgetan.\n\nWas hast du am Wochenende gemacht? Schreib mir bald!\n\nViele Grüße\nLaura",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was hat Laura am Wochenende gemacht?",
          options: [
            { id: "a", text: "Sie war in den Bergen wandern." },
            { id: "b", text: "Sie ist zu Hause geblieben." },
            { id: "c", text: "Sie war im Schwimmbad." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie war das Wetter am Nachmittag?",
          options: [
            { id: "a", text: "Es hat den ganzen Tag geregnet." },
            { id: "b", text: "Es wurde besser." },
            { id: "c", text: "Es hat geschneit." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Im Perfekt (hat gemacht, ist gefahren) wird über die Vergangenheit berichtet.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Forumsbeitrag: Fahrrad oder Auto?",
    prompt: "Lies den Beitrag und wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "umwelt",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Forum: Mobilität in der Stadt",
          body:
            "Ich wohne seit zwei Jahren ohne Auto. Früher bin ich jeden Tag mit dem Auto zur Arbeit gefahren, aber das war teuer und im Stau habe ich viel Zeit verloren. Heute fahre ich mit dem Fahrrad. Es ist gesünder, billiger und oft sogar schneller. Nur bei starkem Regen nehme ich den Bus. Ich kann es jedem empfehlen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was möchte die Person mit dem Text sagen?",
          options: [
            { id: "a", text: "Das Auto ist die beste Lösung für die Stadt." },
            { id: "b", text: "Ohne Auto zu leben hat viele Vorteile." },
            { id: "c", text: "Der Bus ist immer am schnellsten." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Bei der Hauptaussage zählt die Meinung der Person, nicht jedes Detail.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Information: Anmeldung in der Bibliothek",
    prompt: "Lies den Text. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Stadtbibliothek — Anmeldung",
          body:
            "Wenn Sie Bücher ausleihen möchten, brauchen Sie einen Ausweis. Für die Anmeldung bringen Sie bitte Ihren Personalausweis und eine Adresse mit. Der Bibliotheksausweis ist für Erwachsene kostenlos. Sie können bis zu zehn Bücher für vier Wochen ausleihen. Wenn Sie ein Buch länger brauchen, können Sie es online verlängern.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Der Bibliotheksausweis kostet für Erwachsene Geld.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Man kann Bücher online verlängern.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Achte auf „kostenlos“ und auf Bedingungen mit „wenn“.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Beschwerde-E-Mail",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "einkaufen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail an den Online-Shop",
          body:
            "Sehr geehrte Damen und Herren,\n\nvor zwei Wochen habe ich bei Ihnen eine Jacke bestellt. Leider ist die Jacke zu klein und außerdem hat sie einen Fleck. Ich möchte die Jacke gern zurückschicken und mein Geld zurückbekommen. Bitte schicken Sie mir einen Rücksendeschein. Über eine schnelle Antwort würde ich mich freuen.\n\nMit freundlichen Grüßen\nMehmet Yıldız",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist das Problem mit der Jacke?",
          options: [
            { id: "a", text: "Sie ist zu klein und hat einen Fleck." },
            { id: "b", text: "Sie ist zu teuer." },
            { id: "c", text: "Sie hat die falsche Farbe." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was möchte Herr Yıldız?",
          options: [
            { id: "a", text: "eine andere Jacke" },
            { id: "b", text: "sein Geld zurück" },
            { id: "c", text: "einen Gutschein" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "In einer Beschwerde stehen das Problem und der Wunsch der Person.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Welche Anzeige passt?",
    prompt: "Lies die Anzeigen und ordne jeder Person die passende Anzeige zu.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Kleinanzeigen",
          body:
            "A: Suche Mitbewohner für 3-Zimmer-Wohnung, Zimmer frei ab Juni, 350 Euro.\nB: Verkaufe Fahrrad, fast neu, nur 80 Euro.\nC: Biete Nachhilfe in Mathe für Schüler, 15 Euro pro Stunde.\nD: Suche Babysitter für zwei Abende pro Woche.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Sandra studiert und sucht ein günstiges Zimmer. Welche Anzeige passt?",
          options: [
            { id: "a", text: "Anzeige A" },
            { id: "b", text: "Anzeige B" },
            { id: "c", text: "Anzeige C" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Herr Becker braucht Hilfe für seinen Sohn, der Probleme in Mathe hat. Welche Anzeige passt?",
          options: [
            { id: "a", text: "Anzeige B" },
            { id: "b", text: "Anzeige C" },
            { id: "c", text: "Anzeige D" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Lies zuerst, was die Person braucht, dann suche die passende Anzeige.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Pause am Arbeitsplatz",
    prompt: "Lies den Text und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Tipps für den Arbeitstag",
          body:
            "Viele Menschen arbeiten den ganzen Tag am Computer. Experten sagen: Kleine Pausen sind wichtig. Wer jede Stunde kurz aufsteht und sich bewegt, kann sich danach besser konzentrieren. Auch ein kurzer Spaziergang in der Mittagspause hilft. Wichtig ist außerdem, genug Wasser zu trinken. So bleibt man gesund und müde wird man weniger schnell.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was empfehlen die Experten?",
          options: [
            { id: "a", text: "ohne Pause zu arbeiten" },
            { id: "b", text: "jede Stunde eine kleine Pause zu machen" },
            { id: "c", text: "weniger Wasser zu trinken" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was hilft laut Text in der Mittagspause?",
          options: [
            { id: "a", text: "ein kurzer Spaziergang" },
            { id: "b", text: "mehr Kaffee" },
            { id: "c", text: "ein langes Mittagessen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Ratgeber-Texte geben Tipps mit „wichtig ist …“ oder „hilft“.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Hausordnung",
    prompt: "Lies die Hausordnung. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Hausordnung",
          body:
            "Liebe Mieterinnen und Mieter,\nbitte beachten Sie: Von 22 bis 7 Uhr soll es ruhig sein. Müll bringen Sie bitte in die richtigen Tonnen im Hof. Das Treppenhaus muss frei bleiben — stellen Sie dort keine Fahrräder ab. Waschen in der Waschküche ist von 8 bis 20 Uhr möglich, auch am Wochenende.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Man darf Fahrräder im Treppenhaus abstellen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Am Wochenende kann man auch waschen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Regeln nennen oft, was man darf und was nicht.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Nachricht über einen Umzug",
    prompt: "Lies die Nachricht und wähle für jede Frage die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Nachricht",
          body:
            "Hallo Dani,\n\nam nächsten Samstag ziehe ich um. Meine neue Wohnung ist größer und hat einen Garten. Ich brauche aber noch Hilfe beim Tragen. Hast du Zeit? Wir fangen um neun Uhr an. Als Dank koche ich danach für alle. Sag mir bitte bis Donnerstag Bescheid.\n\nDanke und liebe Grüße\nKarim",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Worum bittet Karim?",
          options: [
            { id: "a", text: "um Hilfe beim Umzug" },
            { id: "b", text: "um Geld" },
            { id: "c", text: "um ein Auto" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Bis wann soll Dani antworten?",
          options: [
            { id: "a", text: "bis Donnerstag" },
            { id: "b", text: "bis Samstag" },
            { id: "c", text: "bis Montag" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf die Bitte und auf die Frist („bis …“).",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein kurzer Bericht: Mein erster Tag",
    prompt: "Lies den Text und wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Mein erster Arbeitstag",
          body:
            "Gestern hatte ich meinen ersten Tag in der neuen Firma. Am Morgen war ich sehr nervös. Aber meine Kollegen waren freundlich und haben mir alles gezeigt. Mittags haben wir zusammen in der Kantine gegessen. Am Ende des Tages war ich müde, aber glücklich. Ich glaube, der neue Job gefällt mir.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie fühlt sich die Person am Ende des Tages?",
          options: [
            { id: "a", text: "müde, aber glücklich" },
            { id: "b", text: "traurig und allein" },
            { id: "c", text: "immer noch sehr nervös" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Gefühle ändern sich im Text — wichtig ist das Gefühl am Ende.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Einladung zur Hochzeit",
    prompt: "Lies die Einladung und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Einladung",
          body:
            "Liebe Freunde,\n\nwir heiraten! Am Samstag, dem 14. September, feiern wir um 15 Uhr im Gasthaus „Zur Linde“. Nach der Feier gibt es Abendessen und Musik. Bitte sagt uns bis Ende August, ob ihr kommt. Wir freuen uns sehr auf euch.\n\nAnna und David",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wo findet die Feier statt?",
          options: [
            { id: "a", text: "im Gasthaus „Zur Linde“" },
            { id: "b", text: "im Park" },
            { id: "c", text: "bei Anna zu Hause" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Bis wann sollen die Gäste antworten?",
          options: [
            { id: "a", text: "bis Ende August" },
            { id: "b", text: "bis 14. September" },
            { id: "c", text: "bis Ende September" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Einladungen nennen Datum, Uhrzeit, Ort und eine Frist zum Antworten.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Gebrauchsanweisung: Kaffeemaschine",
    prompt: "Lies die Anleitung und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "So benutzen Sie die Kaffeemaschine",
          body:
            "1. Füllen Sie Wasser in den Tank.\n2. Geben Sie Kaffeepulver in den Filter.\n3. Stellen Sie eine Tasse unter die Maschine.\n4. Drücken Sie den grünen Knopf.\nNach drei Minuten ist der Kaffee fertig. Reinigen Sie die Maschine einmal pro Woche mit Wasser und Essig.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was macht man zuerst?",
          options: [
            { id: "a", text: "Wasser in den Tank füllen" },
            { id: "b", text: "den grünen Knopf drücken" },
            { id: "c", text: "die Maschine reinigen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie oft soll man die Maschine reinigen?",
          options: [
            { id: "a", text: "jeden Tag" },
            { id: "b", text: "einmal pro Woche" },
            { id: "c", text: "einmal pro Monat" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Anleitungen sind Schritt für Schritt — achte auf die Reihenfolge.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Programm: Tag der offenen Tür",
    prompt: "Lies das Programm. Sind die Sätze richtig oder falsch?",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Tag der offenen Tür — Sprachschule",
          body:
            "Samstag, 10 bis 16 Uhr.\n10 Uhr: Begrüßung und Information\n11 Uhr: Probestunde Deutsch (kostenlos)\n13 Uhr: Mittagessen im Café\n14 Uhr: Gespräche mit Lehrern\nFür die Probestunde ist keine Anmeldung nötig.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Für die Probestunde muss man sich anmelden.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Um 14 Uhr kann man mit Lehrern sprechen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Programme verbinden Uhrzeiten mit Programmpunkten.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Blog über gesundes Essen",
    prompt: "Lies den Blogtext und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Mein Weg zum Frühstück",
          body:
            "Früher habe ich morgens nichts gegessen, weil ich keine Zeit hatte. Oft war ich dann am Vormittag müde und hungrig. Seit ein paar Monaten frühstücke ich jeden Tag: Brot, Obst und einen Tee. Am Anfang war es schwer, früher aufzustehen, aber jetzt fühle ich mich viel besser und arbeite konzentrierter.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum hat die Person früher nicht gefrühstückt?",
          options: [
            { id: "a", text: "Sie hatte keine Zeit." },
            { id: "b", text: "Sie mochte kein Brot." },
            { id: "c", text: "Sie war nie hungrig." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie fühlt sich die Person jetzt?",
          options: [
            { id: "a", text: "viel besser und konzentrierter" },
            { id: "b", text: "müder als früher" },
            { id: "c", text: "genau wie früher" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„weil“ gibt einen Grund an. Vergleiche früher und jetzt.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Restaurants in der Stadt",
    prompt: "Lies die Texte und ordne jeder Person das passende Restaurant zu.",
    difficulty: "CORE",
    topicTag: "essen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Drei Restaurants",
          body:
            "A: „Bella Italia“ — Pizza und Pasta, auch zum Mitnehmen, sehr günstig.\nB: „Grüne Küche“ — nur vegetarisch und vegan, ruhige Atmosphäre.\nC: „Am Fluss“ — feine Küche, schöner Blick, etwas teurer, nur abends offen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Frau Demir isst kein Fleisch und möchte vegetarisch essen. Welches Restaurant passt?",
          options: [
            { id: "a", text: "„Bella Italia“" },
            { id: "b", text: "„Grüne Küche“" },
            { id: "c", text: "„Am Fluss“" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Tim hat wenig Geld und möchte schnell eine Pizza mitnehmen. Welches Restaurant passt?",
          options: [
            { id: "a", text: "„Bella Italia“" },
            { id: "b", text: "„Grüne Küche“" },
            { id: "c", text: "„Am Fluss“" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Wünsche wie „vegetarisch“, „günstig“ oder „zum Mitnehmen“.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine SMS über einen kaputten Zug",
    prompt: "Lies die Nachricht und wähle für jede Frage die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "reisen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "SMS",
          body:
            "Hallo Schatz, mein Zug fährt nicht weiter, es gibt ein Problem auf der Strecke. Ich muss jetzt einen Bus nehmen und komme später, ungefähr um acht Uhr. Bitte iss schon ohne mich. Ich rufe an, wenn ich am Bahnhof bin. Bis später!",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum kommt die Person später?",
          options: [
            { id: "a", text: "Der Zug fährt nicht weiter." },
            { id: "b", text: "Sie hat verschlafen." },
            { id: "c", text: "Sie muss noch arbeiten." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was soll der andere machen?",
          options: [
            { id: "a", text: "schon ohne sie essen" },
            { id: "b", text: "zum Bahnhof kommen" },
            { id: "c", text: "den Bus nehmen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Suche den Grund und die Bitte in der Nachricht.",
  },
  {
    level: "A2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Information: Schwimmkurs für Kinder",
    prompt: "Lies den Text und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Schwimmkurs im Hallenbad",
          body:
            "Im Hallenbad beginnt im Mai ein neuer Schwimmkurs für Kinder von 5 bis 8 Jahren. Der Kurs ist jeden Dienstag um 16 Uhr und dauert zehn Wochen. Er kostet 60 Euro. Die Kinder lernen in kleinen Gruppen mit erfahrenen Trainern. Bitte melden Sie Ihr Kind bis Ende April an der Kasse an.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Für welche Kinder ist der Kurs?",
          options: [
            { id: "a", text: "für Kinder von 5 bis 8 Jahren" },
            { id: "b", text: "für Babys" },
            { id: "c", text: "für Erwachsene" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie meldet man sich an?",
          options: [
            { id: "a", text: "an der Kasse, bis Ende April" },
            { id: "b", text: "online, jederzeit" },
            { id: "c", text: "am ersten Kurstag" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Kursinfos nennen Alter, Zeit, Preis und Anmeldung.",
  },

  // ===================== B1 =====================
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Kommentar: Homeoffice",
    prompt: "Lies den Kommentar und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Arbeiten von zu Hause",
          body:
            "Seit einigen Jahren arbeiten immer mehr Menschen im Homeoffice. Für viele hat das Vorteile: Sie sparen die Zeit für den Weg zur Arbeit und können flexibler arbeiten. Allerdings gibt es auch Nachteile. Manche Menschen vermissen den Kontakt zu den Kollegen, und zu Hause ist es oft schwer, Arbeit und Privatleben zu trennen. Meiner Meinung nach ist eine Mischung am besten: ein paar Tage im Büro und ein paar Tage zu Hause. So bleibt man in Kontakt, hat aber trotzdem genug Ruhe für konzentrierte Arbeit.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Welchen Nachteil vom Homeoffice nennt der Autor?",
          options: [
            { id: "a", text: "Man verdient weniger Geld." },
            { id: "b", text: "Man vermisst den Kontakt zu den Kollegen." },
            { id: "c", text: "Man muss früher aufstehen." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was hält der Autor für die beste Lösung?",
          options: [
            { id: "a", text: "nur im Büro arbeiten" },
            { id: "b", text: "nur zu Hause arbeiten" },
            { id: "c", text: "eine Mischung aus Büro und Homeoffice" },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "Die Meinung des Autors steht oft nach „meiner Meinung nach“.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Blogbeitrag: Eine Reise nach Hamburg",
    prompt: "Lies den Blogbeitrag und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Mein Wochenende in Hamburg",
          body:
            "Letztes Wochenende war ich zum ersten Mal in Hamburg. Ich bin am Freitagabend mit dem Zug angekommen und habe in einem kleinen Hotel im Zentrum übernachtet. Am Samstag habe ich eine Hafenrundfahrt gemacht — das war das Beste an der ganzen Reise. Danach habe ich auf dem Fischmarkt gegessen. Eigentlich wollte ich auch ins Museum, aber dafür hatte ich keine Zeit mehr. Am Sonntag hat es leider geregnet, deshalb bin ich früher nach Hause gefahren. Trotzdem hat mir die Stadt sehr gut gefallen, und ich möchte bald wiederkommen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was hat der Person am besten gefallen?",
          options: [
            { id: "a", text: "die Hafenrundfahrt" },
            { id: "b", text: "das Museum" },
            { id: "c", text: "das Hotel" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Warum ist die Person am Sonntag früher nach Hause gefahren?",
          options: [
            { id: "a", text: "Sie war krank." },
            { id: "b", text: "Es hat geregnet." },
            { id: "c", text: "Der Zug fuhr früher." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achte auf „das Beste“ und auf Begründungen mit „deshalb“.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Information: Müll richtig trennen",
    prompt: "Lies den Text. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "umwelt",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Mülltrennung leicht gemacht",
          body:
            "In Deutschland trennt man den Müll, damit man möglichst viel wiederverwenden kann. Papier kommt in die blaue Tonne, Verpackungen aus Plastik und Metall in den gelben Sack. Glas bringt man zu den Containern, dabei sollte man nach Farben sortieren. Reste von Essen gehören in die Biotonne. Wichtig ist: Batterien und alte Medikamente dürfen nicht in den normalen Müll, sondern müssen extra entsorgt werden. Wer Müll richtig trennt, hilft der Umwelt und spart wertvolle Rohstoffe.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Altglas soll man nach Farben sortieren.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Alte Batterien darf man in den normalen Müll werfen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Achte auf Ausnahmen mit „nicht … sondern“.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Forumsbeitrag: Handys in der Schule",
    prompt: "Lies den Beitrag und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Forum: Sollen Handys in der Schule verboten sein?",
          body:
            "Ich finde, Handys sollten im Unterricht nicht erlaubt sein. Viele Schüler schauen ständig auf das Display und passen nicht mehr auf. Natürlich kann ein Handy auch nützlich sein, zum Beispiel um schnell etwas nachzuschlagen. Aber das geht nur, wenn der Lehrer es klar regelt. In den Pausen sollten die Schüler ihr Handy ruhig benutzen dürfen. Ein komplettes Verbot finde ich übertrieben — wichtiger ist, dass die Schüler lernen, das Handy sinnvoll zu nutzen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Welche Meinung vertritt der Autor?",
          options: [
            { id: "a", text: "Handys sollten im Unterricht nicht erlaubt, aber in den Pausen okay sein." },
            { id: "b", text: "Handys sollten überall in der Schule verboten sein." },
            { id: "c", text: "Handys sollten immer und überall erlaubt sein." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Bei Meinungstexten: Wäge ab, was der Autor wirklich befürwortet.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Ehrenamt: Welche Tätigkeit passt?",
    prompt: "Lies die Angebote und ordne jeder Person die passende Tätigkeit zu.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Ehrenamtliche Helfer gesucht",
          body:
            "A: Lesepate/Lesepatin — einmal pro Woche Kindern in der Bibliothek vorlesen.\nB: Sprachcafé — Geflüchteten beim Deutschlernen helfen, dienstagsabends.\nC: Tierheim — am Wochenende mit Hunden spazieren gehen.\nD: Seniorentreff — älteren Menschen am Nachmittag Gesellschaft leisten.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Frau Nowak ist Lehrerin und möchte Menschen beim Deutschlernen unterstützen. Welche Tätigkeit passt?",
          options: [
            { id: "a", text: "Sprachcafé (B)" },
            { id: "b", text: "Tierheim (C)" },
            { id: "c", text: "Seniorentreff (D)" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Herr Koch liebt Tiere und hat nur am Wochenende Zeit. Welche Tätigkeit passt?",
          options: [
            { id: "a", text: "Lesepate (A)" },
            { id: "b", text: "Tierheim (C)" },
            { id: "c", text: "Seniorentreff (D)" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Beachte Interesse UND verfügbare Zeit der Person.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Gesunder Schlaf",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Besser schlafen",
          body:
            "Viele Menschen schlafen schlecht und sind tagsüber müde. Experten geben einige einfache Tipps. Erstens sollte man jeden Tag ungefähr zur gleichen Zeit ins Bett gehen. Zweitens ist es besser, vor dem Schlafen nicht mehr auf das Handy oder den Fernseher zu schauen, weil das helle Licht wach macht. Auch Kaffee am Abend stört den Schlaf. Wer abends lieber einen Tee trinkt und das Schlafzimmer dunkel und kühl hält, schläft meistens schneller ein und fühlt sich am Morgen erholter.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum soll man vor dem Schlafen nicht auf das Handy schauen?",
          options: [
            { id: "a", text: "Das helle Licht macht wach." },
            { id: "b", text: "Es kostet zu viel Strom." },
            { id: "c", text: "Man bekommt Hunger." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie sollte das Schlafzimmer sein?",
          options: [
            { id: "a", text: "dunkel und kühl" },
            { id: "b", text: "hell und warm" },
            { id: "c", text: "laut und voll" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Ratgeber nennen Gründe mit „weil“ — verbinde Tipp und Grund.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine E-Mail über ein Missverständnis",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail an eine Kollegin",
          body:
            "Liebe Frau Aydın,\n\nich glaube, es gab ein kleines Missverständnis wegen des Termins am Mittwoch. Sie haben geschrieben, dass das Treffen um 14 Uhr beginnt, aber im Kalender steht 15 Uhr. Könnten Sie mir bitte sagen, welche Zeit richtig ist? Außerdem wäre es gut, wenn wir vorher kurz telefonieren, damit wir alles besprechen können. Ich bin den ganzen Vormittag erreichbar.\n\nVielen Dank im Voraus und viele Grüße\nThomas Berg",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Worum geht es in der E-Mail?",
          options: [
            { id: "a", text: "um eine unklare Uhrzeit für ein Treffen" },
            { id: "b", text: "um einen neuen Arbeitsvertrag" },
            { id: "c", text: "um eine Beschwerde über die Kollegin" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was schlägt Herr Berg vor?",
          options: [
            { id: "a", text: "vorher kurz zu telefonieren" },
            { id: "b", text: "das Treffen abzusagen" },
            { id: "c", text: "einen anderen Tag zu wählen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In Höflichkeitsformen („Könnten Sie …?“) stecken Bitten und Vorschläge.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Leserbrief: Weniger Autos in der Stadt",
    prompt: "Lies den Leserbrief und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Leserbrief",
          body:
            "Ich habe Ihren Artikel über die neue Fußgängerzone gelesen und möchte dazu etwas sagen. Ich finde es richtig, dass in der Innenstadt weniger Autos fahren. Die Luft wird besser und die Straßen werden sicherer für Kinder. Manche Geschäfte haben Angst, dass weniger Kunden kommen. Ich glaube aber, das Gegenteil ist der Fall: Wenn die Stadt schöner und ruhiger wird, bleiben die Leute länger und kaufen mehr ein. Wir sollten der Umwelt und den Menschen mehr Platz geben als den Autos.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist die Hauptaussage des Leserbriefs?",
          options: [
            { id: "a", text: "Weniger Autos in der Innenstadt sind gut für Umwelt und Menschen." },
            { id: "b", text: "Die Geschäfte sollten schließen." },
            { id: "c", text: "Autos sind das beste Verkehrsmittel." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Autor entkräftet ein Gegenargument („Ich glaube aber …“).",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Sprachen lernen als Erwachsener",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Nie zu spät zum Lernen",
          body:
            "Viele Erwachsene denken, dass nur Kinder leicht eine neue Sprache lernen können. Das stimmt aber nicht ganz. Erwachsene lernen anders, aber nicht unbedingt schlechter. Sie können zum Beispiel ihre Erfahrung nutzen und Grammatik schneller verstehen. Wichtig ist vor allem, regelmäßig zu üben — lieber jeden Tag zwanzig Minuten als einmal pro Woche drei Stunden. Außerdem hilft es, die Sprache im Alltag zu benutzen, etwa beim Einkaufen oder mit Nachbarn. Wer keine Angst vor Fehlern hat, macht die schnellsten Fortschritte.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist laut Text beim Sprachenlernen am wichtigsten?",
          options: [
            { id: "a", text: "regelmäßig zu üben" },
            { id: "b", text: "möglichst jung zu sein" },
            { id: "c", text: "nur Grammatik zu lernen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was hilft laut Text zusätzlich?",
          options: [
            { id: "a", text: "die Sprache im Alltag zu benutzen" },
            { id: "b", text: "nie Fehler zu machen" },
            { id: "c", text: "nur am Wochenende zu lernen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„vor allem“ und „außerdem“ markieren wichtige Punkte.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Information: Eine Sprachreise",
    prompt: "Lies den Text. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Sprachreise nach Wien",
          body:
            "Unsere Sprachreise nach Wien dauert zwei Wochen. Am Vormittag besuchen die Teilnehmer einen Deutschkurs, am Nachmittag gibt es ein Freizeitprogramm mit Ausflügen und Stadtführungen. Die Teilnehmer wohnen bei Gastfamilien, so können sie auch außerhalb des Unterrichts Deutsch sprechen. Im Preis sind der Kurs, die Unterkunft und das Frühstück enthalten. Den Flug muss jeder selbst buchen. Anmeldeschluss ist der 15. Mai.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Die Teilnehmer wohnen im Hotel.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Den Flug muss jeder selbst buchen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Achte darauf, was im Preis enthalten ist und was nicht.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Interview: Beruf Krankenpfleger",
    prompt: "Lies das Interview und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "„Ich helfe gern Menschen“",
          body:
            "Wir haben mit Daniel gesprochen, der seit fünf Jahren als Krankenpfleger arbeitet. „Mein Beruf ist anstrengend, das stimmt“, sagt er. „Ich arbeite oft am Wochenende und manchmal nachts. Aber ich mache die Arbeit trotzdem gern, weil ich Menschen helfen kann.“ Besonders schwierig findet er, wenn es einem Patienten sehr schlecht geht. Schön sei dagegen der Moment, wenn jemand gesund nach Hause gehen kann. Jungen Leuten, die den Beruf lernen möchten, rät er: „Man braucht Geduld und ein gutes Herz, aber die Arbeit gibt einem auch viel zurück.“",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum macht Daniel seine Arbeit trotzdem gern?",
          options: [
            { id: "a", text: "weil er Menschen helfen kann" },
            { id: "b", text: "weil er nie am Wochenende arbeitet" },
            { id: "c", text: "weil er sehr viel Geld verdient" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was rät Daniel jungen Leuten?",
          options: [
            { id: "a", text: "Sie brauchen Geduld und ein gutes Herz." },
            { id: "b", text: "Sie sollten den Beruf nicht lernen." },
            { id: "c", text: "Sie sollten nur tagsüber arbeiten." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In Interviews stehen Meinungen oft in den Zitaten.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Veranstaltungen in der Stadt",
    prompt: "Lies die Anzeigen und ordne jeder Person die passende Veranstaltung zu.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Was ist los am Wochenende?",
          body:
            "A: Konzert im Park — klassische Musik, Samstagabend, Eintritt frei.\nB: Flohmarkt am Hafen — Sonntag, 9 bis 15 Uhr, für Schnäppchenjäger.\nC: Kochworkshop — gesund kochen lernen, Samstagnachmittag, Anmeldung nötig.\nD: Familienfest — Spiele und Essen für Kinder, Sonntagnachmittag.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Herr Lang möchte gern alte Sachen günstig kaufen. Welche Veranstaltung passt?",
          options: [
            { id: "a", text: "Konzert im Park (A)" },
            { id: "b", text: "Flohmarkt am Hafen (B)" },
            { id: "c", text: "Kochworkshop (C)" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Familie Schulz sucht etwas mit den Kindern für Sonntagnachmittag. Welche Veranstaltung passt?",
          options: [
            { id: "a", text: "Familienfest (D)" },
            { id: "b", text: "Konzert im Park (A)" },
            { id: "c", text: "Kochworkshop (C)" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Interesse, Tag und Zielgruppe (z. B. Kinder).",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Online einkaufen",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Im Internet oder im Geschäft?",
          body:
            "Immer mehr Menschen kaufen im Internet ein, weil es bequem ist und oft billiger. Man kann zu jeder Zeit bestellen und die Ware kommt nach Hause. Doch das Online-Shopping hat auch Nachteile. Man kann die Produkte vorher nicht anfassen oder anprobieren, und manchmal muss man Sachen wieder zurückschicken. Außerdem leiden die kleinen Geschäfte in den Städten, wenn alle nur noch online bestellen. Viele Menschen machen es deshalb so: Sie informieren sich im Internet, kaufen aber im Laden, um die Geschäfte vor Ort zu unterstützen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Welchen Nachteil vom Online-Shopping nennt der Text?",
          options: [
            { id: "a", text: "Man kann die Produkte vorher nicht anprobieren." },
            { id: "b", text: "Man kann nur nachts bestellen." },
            { id: "c", text: "Die Ware kommt nie an." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was machen viele Menschen laut Text?",
          options: [
            { id: "a", text: "Sie informieren sich online und kaufen im Laden." },
            { id: "b", text: "Sie kaufen nur noch online." },
            { id: "c", text: "Sie kaufen gar nichts mehr." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Vor- und Nachteile stehen oft mit „doch“ oder „außerdem“ nebeneinander.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Nachricht über einen Stromausfall",
    prompt: "Lies die Mitteilung und wähle für jede Frage die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Mitteilung der Hausverwaltung",
          body:
            "Sehr geehrte Mieterinnen und Mieter,\n\nam Donnerstag, dem 12. März, wird zwischen 9 und 13 Uhr der Strom im ganzen Haus abgestellt. Der Grund sind Reparaturarbeiten an der Elektrik. Bitte denken Sie daran: In dieser Zeit funktionieren auch der Aufzug und die Türklingel nicht. Wir bitten Sie um Verständnis und entschuldigen uns für die Unannehmlichkeiten.\n\nIhre Hausverwaltung",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist der Grund für den Stromausfall?",
          options: [
            { id: "a", text: "Reparaturarbeiten an der Elektrik" },
            { id: "b", text: "ein Fest im Haus" },
            { id: "c", text: "ein Sturm" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was funktioniert in dieser Zeit nicht?",
          options: [
            { id: "a", text: "der Aufzug und die Türklingel" },
            { id: "b", text: "das Wasser" },
            { id: "c", text: "die Heizung" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Offizielle Mitteilungen nennen Zeit, Grund und Folgen.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Beitrag: Weniger Fleisch essen",
    prompt: "Lies den Beitrag und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Mein Versuch ohne Fleisch",
          body:
            "Vor einem Jahr habe ich beschlossen, weniger Fleisch zu essen. Am Anfang war ich skeptisch, weil ich dachte, vegetarisches Essen schmeckt langweilig. Aber das Gegenteil ist passiert: Ich habe viele neue Gerichte und Gewürze entdeckt und koche jetzt mit mehr Freude. Ich fühle mich auch leichter und gesünder. Ganz auf Fleisch verzichte ich nicht, aber ich esse es nur noch selten, vielleicht einmal pro Woche. Für mich war das eine gute Entscheidung, und ich kann es jedem empfehlen, es einfach mal auszuprobieren.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie denkt die Person heute über ihre Entscheidung?",
          options: [
            { id: "a", text: "Sie war eine gute Entscheidung." },
            { id: "b", text: "Sie war ein Fehler." },
            { id: "c", text: "Sie hat nichts verändert." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die Bewertung am Ende zeigt, wie die Person heute denkt.",
  },
  {
    level: "B1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine E-Mail: Eine Bitte an den Kurslehrer",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail an den Deutschlehrer",
          body:
            "Sehr geehrter Herr Wagner,\n\nleider konnte ich letzte Woche nicht zum Unterricht kommen, weil ich krank war. Könnten Sie mir bitte sagen, welches Thema Sie behandelt haben und welche Hausaufgaben ich machen soll? Wenn es Materialien gibt, wäre ich froh, wenn Sie mir diese per E-Mail schicken könnten. Außerdem möchte ich fragen, ob ich den verpassten Test nachholen kann.\n\nVielen Dank und freundliche Grüße\nLena Petrova",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum war Lena nicht im Unterricht?",
          options: [
            { id: "a", text: "Sie war krank." },
            { id: "b", text: "Sie war im Urlaub." },
            { id: "c", text: "Sie hatte keine Zeit." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Worum bittet Lena außerdem?",
          options: [
            { id: "a", text: "den Test nachholen zu dürfen" },
            { id: "b", text: "einen anderen Kurs zu bekommen" },
            { id: "c", text: "weniger Hausaufgaben zu machen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höfliche Bitten mit „Könnten Sie …?“ enthalten die Wünsche.",
  },

  // ===================== B2 =====================
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Artikel: Die Digitalisierung der Arbeitswelt",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Wenn Maschinen mitarbeiten",
          body:
            "Die Digitalisierung verändert die Arbeitswelt grundlegend. Während früher die Sorge bestand, dass Maschinen den Menschen vollständig ersetzen, zeichnet sich heute ein differenzierteres Bild ab. Zwar fallen einfache, wiederholbare Tätigkeiten zunehmend weg, doch gleichzeitig entstehen neue Berufe, die es vor wenigen Jahren noch gar nicht gab. Entscheidend ist daher nicht die Frage, ob Arbeit verschwindet, sondern wie sich Beschäftigte auf den Wandel einstellen. Wer bereit ist, sich regelmäßig weiterzubilden, wird von der Entwicklung eher profitieren als unter ihr zu leiden. Die Verantwortung liegt allerdings nicht allein beim Einzelnen: Auch Unternehmen und Politik müssen Weiterbildung ermöglichen und fördern.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Welche Aussage entspricht dem Text?",
          options: [
            { id: "a", text: "Die Digitalisierung vernichtet insgesamt nur Arbeitsplätze." },
            { id: "b", text: "Es entstehen auch neue Berufe; entscheidend ist die Anpassung." },
            { id: "c", text: "Maschinen werden den Menschen vollständig ersetzen." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wer trägt laut Text Verantwortung für die Weiterbildung?",
          options: [
            { id: "a", text: "nur die einzelnen Beschäftigten" },
            { id: "b", text: "ausschließlich die Politik" },
            { id: "c", text: "Beschäftigte, Unternehmen und Politik gemeinsam" },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "Achte auf abwägende Wendungen wie „zwar … doch“ und „nicht … sondern“.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Kolumne: Die Kunst, weniger zu besitzen",
    prompt: "Lies die Kolumne und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Weniger ist mehr",
          body:
            "Seit einigen Jahren versuche ich, bewusster zu konsumieren. Angefangen hat alles mit einem Umzug, bei dem mir klar wurde, wie viele Dinge ich besitze, ohne sie je zu benutzen. Statt immer Neues zu kaufen, frage ich mich heute vor jeder Anschaffung, ob ich den Gegenstand wirklich brauche. Das bedeutet keineswegs Verzicht im negativen Sinne. Im Gegenteil: Ich habe festgestellt, dass weniger Besitz mir mehr Freiheit gibt. Meine Wohnung wirkt aufgeräumter, ich spare Geld, und ich verbringe meine Zeit lieber mit Erlebnissen als mit dem Pflegen von Dingen. Natürlich ist Minimalismus kein Allheilmittel, und jeder muss seinen eigenen Weg finden. Doch die Erfahrung, dass Glück nicht vom Besitz abhängt, möchte ich nicht mehr missen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was war der Auslöser für das Umdenken der Autorin?",
          options: [
            { id: "a", text: "ein Umzug" },
            { id: "b", text: "ein finanzielles Problem" },
            { id: "c", text: "ein Ratschlag einer Freundin" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie bewertet die Autorin Minimalismus?",
          options: [
            { id: "a", text: "als Verzicht, der unglücklich macht" },
            { id: "b", text: "als Gewinn an Freiheit, aber nicht als Allheilmittel" },
            { id: "c", text: "als die einzig richtige Lebensweise für alle" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Bei differenzierten Texten zählt die Abwägung, nicht nur die Hauptaussage.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Studie: Ehrenamtliches Engagement",
    prompt: "Lies den Text. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Wer engagiert sich – und warum?",
          body:
            "Eine aktuelle Studie zeigt, dass sich rund ein Drittel der Bevölkerung ehrenamtlich engagiert. Anders als oft angenommen, sind es nicht vor allem ältere Menschen mit viel Freizeit, sondern Berufstätige zwischen 30 und 50 Jahren bilden die größte Gruppe. Als Hauptmotiv nennen die Befragten nicht etwa das Pflichtgefühl, sondern den Wunsch, etwas Sinnvolles zu tun und mit anderen in Kontakt zu kommen. Allerdings beklagen viele, dass ihnen die Zeit fehlt. Die Studienautoren empfehlen daher den Arbeitgebern, Engagement stärker zu unterstützen, etwa durch flexible Arbeitszeiten.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Laut Studie engagieren sich vor allem ältere Menschen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Viele Engagierte beklagen einen Mangel an Zeit.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "„Anders als oft angenommen“ kündigt eine überraschende Tatsache an.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Kommentar: Tourismus in historischen Städten",
    prompt: "Lies den Kommentar und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Wenn die Schönheit zur Last wird",
          body:
            "Viele historische Städte ziehen jedes Jahr Millionen Besucher an. Was zunächst wie ein Segen klingt, entwickelt sich für die Einheimischen zunehmend zur Belastung. Die Mieten steigen, weil Wohnungen lieber an Touristen vermietet werden, traditionelle Geschäfte weichen Souvenirläden, und die Innenstädte verlieren ihren Charakter. Es wäre jedoch zu einfach, den Tourismus pauschal zu verurteilen, denn er sichert auch zahlreiche Arbeitsplätze. Sinnvoller erscheint ein Mittelweg: Städte könnten die Zahl der Besucher begrenzen, Eintrittsgebühren erheben oder den Tourismus auf weniger bekannte Viertel lenken. Entscheidend ist, dass nicht nur die Wirtschaft, sondern auch die Lebensqualität der Bewohner berücksichtigt wird.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Welche Haltung vertritt der Autor?",
          options: [
            { id: "a", text: "Tourismus sollte komplett verboten werden." },
            { id: "b", text: "Tourismus ist uneingeschränkt positiv." },
            { id: "c", text: "Tourismus braucht Regeln, die auch die Bewohner schützen." },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "Der Autor sucht einen „Mittelweg“ — das ist seine Position.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Vier Meinungen zum Thema Homeoffice",
    prompt: "Lies die Aussagen und ordne jede Person der passenden Position zu.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Leserstimmen: Wie stehen Sie zum Homeoffice?",
          body:
            "Anja: Ich arbeite seit drei Jahren komplett von zu Hause und möchte nie wieder zurück ins Büro.\nBoris: Homeoffice macht mich einsam — mir fehlt der direkte Austausch mit den Kollegen.\nClara: Am besten finde ich eine Mischung: zwei Tage Büro, drei Tage zu Hause.\nDavid: Für mich ist entscheidend, dass der Arbeitgeber die Technik bezahlt, sonst lohnt es sich nicht.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Wer bevorzugt eine Kombination aus Büro und Homeoffice?",
          options: [
            { id: "a", text: "Anja" },
            { id: "b", text: "Clara" },
            { id: "c", text: "Boris" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Wer sieht im Homeoffice vor allem ein soziales Problem?",
          options: [
            { id: "a", text: "Boris" },
            { id: "b", text: "David" },
            { id: "c", text: "Anja" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Ordne jeder Person ihren Kernpunkt zu, nicht einzelne Wörter.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Interview: Wie wir Entscheidungen treffen",
    prompt: "Lies das Interview und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "„Zu viel Auswahl macht unglücklich“",
          body:
            "Die Psychologin Dr. Henkel erforscht, wie Menschen Entscheidungen treffen. „Viele glauben, dass mehr Auswahl automatisch besser ist“, sagt sie. „Tatsächlich ist oft das Gegenteil der Fall. Wer zwischen dreißig Sorten Marmelade wählen muss, ist hinterher unzufriedener als jemand, der nur drei zur Auswahl hatte.“ Der Grund liege darin, dass wir bei großer Auswahl ständig befürchten, die falsche Entscheidung getroffen zu haben. Ihr Rat: „Man sollte sich vorher überlegen, was einem wirklich wichtig ist, und dann nicht mehr alle Alternativen vergleichen. Eine gute Entscheidung muss nicht perfekt sein – sie muss nur gut genug sein.“",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist laut Dr. Henkel ein Problem bei großer Auswahl?",
          options: [
            { id: "a", text: "Man ist hinterher oft unzufriedener." },
            { id: "b", text: "Man spart zu viel Geld." },
            { id: "c", text: "Man entscheidet immer perfekt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was empfiehlt die Psychologin?",
          options: [
            { id: "a", text: "vorher zu klären, was einem wichtig ist" },
            { id: "b", text: "immer alle Alternativen zu vergleichen" },
            { id: "c", text: "nie eine Entscheidung zu treffen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In Zitaten steht die eigentliche Aussage der Expertin.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Lebenslanges Lernen",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Lernen hört nie auf",
          body:
            "In einer Welt, die sich rasch verändert, reicht das einmal Gelernte längst nicht mehr für ein ganzes Berufsleben. Der Begriff „lebenslanges Lernen“ beschreibt die Notwendigkeit, sich immer wieder neues Wissen anzueignen. Das betrifft nicht nur Akademiker, sondern Menschen in nahezu allen Berufen. Erfreulich ist, dass Lernen heute leichter zugänglich ist als je zuvor: Online-Kurse, Lern-Apps und kostenlose Angebote machen es möglich, sich auch neben dem Beruf weiterzubilden. Allerdings setzt das eine gewisse Selbstdisziplin voraus, denn ohne festen Stundenplan fällt es vielen schwer, am Ball zu bleiben. Experten empfehlen, sich kleine, realistische Ziele zu setzen, statt sich zu überfordern.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist heute laut Text einfacher geworden?",
          options: [
            { id: "a", text: "der Zugang zu Lernangeboten" },
            { id: "b", text: "das Bezahlen von Kursen" },
            { id: "c", text: "das Finden eines festen Jobs" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Welche Schwierigkeit nennt der Text?",
          options: [
            { id: "a", text: "Man braucht Selbstdisziplin, um dranzubleiben." },
            { id: "b", text: "Es gibt keine kostenlosen Angebote." },
            { id: "c", text: "Nur Akademiker dürfen lernen." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Allerdings“ leitet oft eine Einschränkung ein.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Bericht: Eine Bürgerinitiative",
    prompt: "Lies den Bericht. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "umwelt",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Bürger kämpfen für mehr Grün",
          body:
            "In einem Stadtviertel hat sich eine Bürgerinitiative gegründet, die sich für mehr Grünflächen einsetzt. Auslöser war der Plan der Stadt, einen kleinen Park in einen Parkplatz umzuwandeln. Innerhalb weniger Wochen sammelte die Initiative über zweitausend Unterschriften. Daraufhin lud die Stadtverwaltung die Bewohner zu einem Gespräch ein. Ein endgültiges Ergebnis steht zwar noch aus, doch die Stadt hat zugesagt, den Plan noch einmal zu überdenken. Die Initiative wertet das bereits als Erfolg und betont, wie wichtig es sei, dass sich Bürger einmischen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Die Stadt wollte den Park in einen Parkplatz umwandeln.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Die Entscheidung der Stadt steht bereits endgültig fest.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "„steht noch aus“ bedeutet: es ist noch nicht entschieden.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine formelle E-Mail: Ein Projektvorschlag",
    prompt: "Lies die E-Mail und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "E-Mail an die Abteilungsleitung",
          body:
            "Sehr geehrte Frau Dr. Sommer,\n\nim Anschluss an unsere letzte Besprechung möchte ich Ihnen einen Vorschlag unterbreiten. Wie Sie wissen, klagen viele Mitarbeitende über die hohe Zahl an Meetings, die wertvolle Arbeitszeit kosten. Ich schlage daher vor, einen festen meetingfreien Tag pro Woche einzuführen, an dem sich alle auf konzentrierte Arbeit fokussieren können. Erste Erfahrungen in anderen Unternehmen zeigen, dass dadurch die Produktivität steigt und die Zufriedenheit zunimmt. Gerne würde ich das Konzept in der nächsten Sitzung ausführlicher vorstellen. Über Ihre Rückmeldung würde ich mich freuen.\n\nMit freundlichen Grüßen\nJonas Weber",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was schlägt Herr Weber vor?",
          options: [
            { id: "a", text: "einen meetingfreien Tag pro Woche" },
            { id: "b", text: "mehr Meetings einzuführen" },
            { id: "c", text: "die Arbeitszeit zu verlängern" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Womit begründet er seinen Vorschlag?",
          options: [
            { id: "a", text: "Erfahrungen anderer Unternehmen zeigen mehr Produktivität." },
            { id: "b", text: "Die Mitarbeitenden wünschen sich mehr Besprechungen." },
            { id: "c", text: "Die Abteilungsleitung hat es angeordnet." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In formellen Vorschlägen folgt auf die Idee meist eine Begründung.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Essay: Der Wert der Langeweile",
    prompt: "Lies den Text und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Warum wir Langeweile brauchen",
          body:
            "Sobald sich auch nur ein Moment der Leere einstellt, greifen die meisten von uns sofort zum Handy. Langeweile gilt als etwas, das man unbedingt vermeiden muss. Dabei zeigen Forschungen, dass gerade diese scheinbar verlorenen Momente wertvoll sein können. Wenn das Gehirn nicht ständig mit neuen Reizen beschäftigt ist, beginnt es zu wandern, Ideen zu verbinden und kreativ zu werden. Viele große Einfälle entstehen nicht am Schreibtisch, sondern beim Spazieren oder Duschen. Wer also nie Langeweile zulässt, beraubt sich womöglich seiner besten Gedanken. Vielleicht sollten wir lernen, die Leere nicht zu fürchten, sondern sie hin und wieder bewusst auszuhalten.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist die zentrale Aussage des Textes?",
          options: [
            { id: "a", text: "Langeweile kann Kreativität fördern und ist deshalb wertvoll." },
            { id: "b", text: "Man sollte Langeweile immer mit dem Handy vermeiden." },
            { id: "c", text: "Kreative Ideen entstehen nur am Schreibtisch." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Essays stellen oft eine verbreitete Meinung infrage („Dabei zeigen …“).",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Stress und Achtsamkeit",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Im Hier und Jetzt",
          body:
            "Der Begriff „Achtsamkeit“ ist in den letzten Jahren beinahe zum Modewort geworden. Gemeint ist die Fähigkeit, den gegenwärtigen Moment bewusst wahrzunehmen, ohne ihn sofort zu bewerten. Studien deuten darauf hin, dass regelmäßige Achtsamkeitsübungen Stress reduzieren und die Konzentration verbessern können. Kritiker geben allerdings zu bedenken, dass Achtsamkeit kein Ersatz für gesellschaftliche Veränderungen sei: Wer unter zu viel Arbeit leidet, dem helfe letztlich nicht Meditation, sondern weniger Arbeit. Beide Sichtweisen schließen sich jedoch nicht aus. Achtsamkeit kann ein nützliches Werkzeug sein, solange man nicht erwartet, dass sie alle Probleme von allein löst.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was bedeutet Achtsamkeit laut Text?",
          options: [
            { id: "a", text: "den Moment bewusst wahrzunehmen, ohne ihn sofort zu bewerten" },
            { id: "b", text: "möglichst viel gleichzeitig zu tun" },
            { id: "c", text: "Probleme zu ignorieren" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was geben die Kritiker zu bedenken?",
          options: [
            { id: "a", text: "Achtsamkeit ersetzt keine gesellschaftlichen Veränderungen." },
            { id: "b", text: "Achtsamkeit löst alle Probleme von allein." },
            { id: "c", text: "Achtsamkeit ist gefährlich." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Text wägt ab: Nutzen und Grenzen stehen nebeneinander.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Weiterbildungsangebote",
    prompt: "Lies die Beschreibungen und ordne jeder Person das passende Angebot zu.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Vier Weiterbildungen im Überblick",
          body:
            "A: „Rhetorik & Präsentation“ — für alle, die sicherer vor Publikum sprechen wollen. Wochenendseminar.\nB: „Buchhaltung für Einsteiger“ — Grundlagen für Selbstständige, online, abends.\nC: „Programmieren lernen“ — Intensivkurs für Quereinsteiger, Vollzeit, vier Wochen.\nD: „Stressmanagement“ — praktische Übungen für mehr Gelassenheit im Beruf, einmal pro Woche.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Frau Voss ist selbstständig und möchte ihre Finanzen selbst verwalten, hat aber nur abends Zeit. Welches Angebot passt?",
          options: [
            { id: "a", text: "Buchhaltung für Einsteiger (B)" },
            { id: "b", text: "Programmieren lernen (C)" },
            { id: "c", text: "Rhetorik & Präsentation (A)" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Herr Adam möchte den Beruf wechseln und sucht einen intensiven Kurs in Vollzeit. Welches Angebot passt?",
          options: [
            { id: "a", text: "Stressmanagement (D)" },
            { id: "b", text: "Programmieren lernen (C)" },
            { id: "c", text: "Buchhaltung für Einsteiger (B)" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achte auf mehrere Kriterien: Inhalt, Zeitform und Verfügbarkeit.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine Reportage: Urban Gardening",
    prompt: "Lies die Reportage und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Gemüse aus der Großstadt",
          body:
            "Mitten in der Stadt, auf einer ehemals ungenutzten Brachfläche, wachsen heute Tomaten, Kräuter und Salat. Möglich gemacht hat das eine Gruppe von Nachbarn, die das Stück Land gemeinsam bewirtschaftet. Was zunächst nur als Hobby gedacht war, hat sich zu einem Treffpunkt für das ganze Viertel entwickelt. Menschen, die sich vorher kaum kannten, arbeiten nun Seite an Seite. „Es geht uns gar nicht in erster Linie um die Ernte“, erklärt eine der Gärtnerinnen. „Viel wichtiger ist, dass wir wieder miteinander ins Gespräch kommen.“ Inzwischen plant die Stadt, weitere solcher Flächen zur Verfügung zu stellen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist laut der Gärtnerin am wichtigsten?",
          options: [
            { id: "a", text: "der Kontakt zwischen den Menschen" },
            { id: "b", text: "eine möglichst große Ernte" },
            { id: "c", text: "Geld zu verdienen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie reagiert die Stadt auf das Projekt?",
          options: [
            { id: "a", text: "Sie plant, weitere Flächen bereitzustellen." },
            { id: "b", text: "Sie will das Projekt verbieten." },
            { id: "c", text: "Sie ignoriert es." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„gar nicht in erster Linie … viel wichtiger“ betont eine Priorität.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Kommentar: Bücher oder E-Books?",
    prompt: "Lies den Kommentar und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Das Buch ist nicht tot",
          body:
            "Als die ersten E-Books auf den Markt kamen, sagten manche das Ende des gedruckten Buches voraus. Heute, viele Jahre später, zeigt sich: Diese Vorhersage war voreilig. Zwar haben E-Books ihren festen Platz gefunden, besonders bei Vielreisenden, die nicht schwer tragen wollen. Doch das gedruckte Buch erfreut sich nach wie vor großer Beliebtheit. Viele Leser schätzen das Gefühl des Papiers, den Geruch und die Möglichkeit, ein schönes Buch ins Regal zu stellen. Offenbar erfüllen beide Formen unterschiedliche Bedürfnisse und müssen sich keineswegs ausschließen. Statt von einem Verdrängungswettbewerb zu sprechen, sollte man sie als Ergänzung betrachten.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie bewertet der Autor die Vorhersage vom „Ende des Buches“?",
          options: [
            { id: "a", text: "Sie war voreilig." },
            { id: "b", text: "Sie ist genau eingetreten." },
            { id: "c", text: "Sie war richtig für Vielreisende." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie sieht der Autor das Verhältnis von Buch und E-Book?",
          options: [
            { id: "a", text: "als Ergänzung, nicht als Konkurrenz" },
            { id: "b", text: "als reinen Verdrängungswettbewerb" },
            { id: "c", text: "E-Books werden Bücher völlig ersetzen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keineswegs ausschließen“ und „Ergänzung“ zeigen die Position des Autors.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Leserbrief: Ehrenamt sollte anerkannt werden",
    prompt: "Lies den Leserbrief und wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Leserbrief",
          body:
            "Mit großem Interesse habe ich Ihren Artikel über das ehrenamtliche Engagement gelesen. Allerdings vermisse ich einen wichtigen Punkt: die mangelnde Anerkennung. Wer sich neben dem Beruf engagiert, investiert wertvolle Zeit, oft ohne jede Gegenleistung. Ich finde, dieses Engagement sollte stärker gewürdigt werden, etwa durch Zeugnisse, die man bei Bewerbungen vorlegen kann, oder durch kleine steuerliche Vorteile. Es geht mir nicht um Bezahlung – das würde dem Gedanken des Ehrenamts widersprechen. Doch ein sichtbares Zeichen der Wertschätzung würde sicher noch mehr Menschen motivieren, sich einzubringen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was fordert der Verfasser des Leserbriefs?",
          options: [
            { id: "a", text: "mehr Anerkennung für ehrenamtliches Engagement, aber keine Bezahlung" },
            { id: "b", text: "eine feste Bezahlung für alle Ehrenamtlichen" },
            { id: "c", text: "ein Verbot von Ehrenämtern" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Verfasser grenzt seine Forderung klar ab: „nicht um Bezahlung“.",
  },
  {
    level: "B2",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Die Vier-Tage-Woche",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Weniger arbeiten, mehr leisten?",
          body:
            "Immer mehr Unternehmen experimentieren mit der Vier-Tage-Woche. Die Idee dahinter: Wer weniger, aber konzentrierter arbeitet, ist nicht unbedingt weniger produktiv. In mehreren Versuchen blieb die Leistung tatsächlich gleich, während die Zufriedenheit der Beschäftigten deutlich stieg. Kritiker wenden jedoch ein, dass sich das Modell nicht auf alle Branchen übertragen lasse. In einem Krankenhaus oder einem Geschäft könne man nicht einfach einen Tag schließen. Befürworter entgegnen, dass es nicht um ein starres Modell gehe, sondern um die grundsätzliche Frage, wie viel Arbeitszeit wirklich nötig ist. Klar ist: Die Diskussion über die Zukunft der Arbeit hat gerade erst begonnen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was zeigten mehrere Versuche mit der Vier-Tage-Woche?",
          options: [
            { id: "a", text: "Die Leistung blieb gleich, die Zufriedenheit stieg." },
            { id: "b", text: "Die Leistung sank stark." },
            { id: "c", text: "Die Beschäftigten waren unzufriedener." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was wenden die Kritiker ein?",
          options: [
            { id: "a", text: "Das Modell passt nicht zu allen Branchen." },
            { id: "b", text: "Vier Tage sind zu viel Arbeit." },
            { id: "c", text: "Die Beschäftigten wollen mehr arbeiten." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Kritiker wenden ein … Befürworter entgegnen“ markiert die zwei Seiten.",
  },

  // ===================== C1 =====================
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Essay: Die Ökonomie der Aufmerksamkeit",
    prompt: "Lies den Essay und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Worauf wir achten",
          body:
            "Lange galt Information als das knappe Gut unserer Zeit. Diese Annahme erweist sich zunehmend als Trugschluss. Information gibt es im Überfluss; knapp geworden ist vielmehr die Aufmerksamkeit, die wir ihr schenken können. Zahlreiche Unternehmen haben daraus ein Geschäftsmodell gemacht, dessen eigentliche Ware nicht das angebotene Produkt ist, sondern unsere Zeit. Je länger ein Mensch auf einen Bildschirm blickt, desto profitabler ist er. Problematisch daran ist weniger die Tatsache, dass wir abgelenkt werden — Ablenkung hat es immer gegeben —, sondern dass diese Ablenkung systematisch und mit erheblichem Aufwand erzeugt wird. Wer sich dem entziehen will, kämpft nicht gegen die eigene Willensschwäche, wie oft behauptet wird, sondern gegen eine ganze Industrie. Vor diesem Hintergrund erscheint die verbreitete Aufforderung, man müsse eben nur disziplinierter sein, beinahe zynisch.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist laut Text das eigentlich knappe Gut?",
          options: [
            { id: "a", text: "die Information selbst" },
            { id: "b", text: "die Aufmerksamkeit der Menschen" },
            { id: "c", text: "die Zahl der Produkte" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Wie bewertet der Autor die Aufforderung, einfach disziplinierter zu sein?",
          options: [
            { id: "a", text: "als angemessen und hilfreich" },
            { id: "b", text: "als beinahe zynisch, weil man gegen eine Industrie kämpft" },
            { id: "c", text: "als wissenschaftlich gut belegt" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achte auf die ironische Distanzierung: „wie oft behauptet wird“, „beinahe zynisch“.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Interview: Über die Vermittlung von Wissenschaft",
    prompt: "Lies das Interview und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "„Fakten allein überzeugen niemanden“",
          body:
            "Die Kommunikationsforscherin Prof. Adler beschäftigt sich damit, warum wissenschaftliche Erkenntnisse oft auf Skepsis stoßen. „Ein verbreiteter Irrtum besteht in der Annahme, man müsse den Menschen nur genügend Fakten liefern, dann änderten sie ihre Meinung“, erklärt sie. „Tatsächlich funktioniert das Gegenteil: Wer sich in seiner Identität bedroht fühlt, hält erst recht an seiner Überzeugung fest.“ Entscheidend sei daher nicht die Menge der Daten, sondern das Vertrauen in die Quelle. „Wissenschaft sollte nicht belehren, sondern erklären — und dabei ehrlich zugeben, was sie noch nicht weiß. Gerade dieses Eingeständnis von Unsicherheit, das viele für eine Schwäche halten, schafft paradoxerweise Glaubwürdigkeit.“",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Welchen Irrtum nennt Prof. Adler?",
          options: [
            { id: "a", text: "dass mehr Fakten automatisch die Meinung ändern" },
            { id: "b", text: "dass Wissenschaft nie irrt" },
            { id: "c", text: "dass Vertrauen unwichtig ist" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was schafft laut Adler paradoxerweise Glaubwürdigkeit?",
          options: [
            { id: "a", text: "das ehrliche Eingeständnis von Unsicherheit" },
            { id: "b", text: "möglichst viele Daten" },
            { id: "c", text: "ein belehrender Ton" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„paradoxerweise“ signalisiert einen überraschenden Zusammenhang.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Studie: Einsamkeit in der vernetzten Welt",
    prompt: "Lies den Text. Sind die Sätze richtig oder falsch?",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Allein unter vielen",
          body:
            "Dass ausgerechnet in einer Zeit ständiger Vernetzung die Einsamkeit zunimmt, mag auf den ersten Blick widersprüchlich erscheinen. Eine aktuelle Untersuchung legt jedoch nahe, dass digitale Kontakte persönliche Begegnungen nicht ersetzen, sondern bestenfalls ergänzen. Wer viele Online-Kontakte pflegt, ist demnach nicht zwangsläufig weniger einsam — entscheidend bleibt die Qualität, nicht die Quantität der Beziehungen. Bemerkenswert ist zudem, dass Einsamkeit längst nicht mehr nur ältere Menschen betrifft. Im Gegenteil: Gerade unter jungen Erwachsenen ist sie auffällig verbreitet. Die Autoren der Studie warnen jedoch davor, voreilig die Technik allein verantwortlich zu machen. Soziale Isolation habe vielfältige Ursachen, von denen die Digitalisierung lediglich eine sei.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Laut Studie betrifft Einsamkeit vor allem ältere Menschen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Die Autoren machen allein die Technik für Einsamkeit verantwortlich.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "„warnen davor, voreilig … verantwortlich zu machen“ — achte auf die Vorsicht der Aussage.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Eine Kolumne: Das Lob der Langsamkeit",
    prompt: "Lies die Kolumne und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Schneller ist nicht immer besser",
          body:
            "Effizienz gilt als unbestrittene Tugend unserer Zeit. Wer langsam ist, gerät schnell unter Rechtfertigungsdruck. Dabei lohnt es sich, diese Selbstverständlichkeit zu hinterfragen. Manche Tätigkeiten gewinnen ihren Wert gerade dadurch, dass sie sich nicht beschleunigen lassen — ein Gespräch unter Freunden, das Lesen eines anspruchsvollen Buches, das Erlernen eines Instruments. Würde man sie optimieren, zerstörte man genau das, was sie ausmacht. Es geht mir nicht darum, Langsamkeit pauschal zu verklären; selbstverständlich ist es sinnvoll, Routineaufgaben effizient zu erledigen. Mein Einwand richtet sich vielmehr gegen die unausgesprochene Annahme, dass Beschleunigung grundsätzlich Fortschritt bedeute. In Wahrheit ist die Fähigkeit, zwischen dem zu Beschleunigenden und dem zu Bewahrenden zu unterscheiden, womöglich die wichtigere Kompetenz.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wogegen richtet sich der Einwand des Autors?",
          options: [
            { id: "a", text: "gegen die Annahme, Beschleunigung sei immer Fortschritt" },
            { id: "b", text: "gegen jede Form von Effizienz" },
            { id: "c", text: "gegen das Lesen von Büchern" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Autor grenzt seine These ab („Es geht mir nicht darum …“) — das schärft seine eigentliche Aussage.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Vier Stimmen zur Zukunft der Arbeit",
    prompt: "Lies die Aussagen und ordne jede Person der passenden Position zu.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Wie arbeiten wir morgen?",
          body:
            "Frau Renner: Die Automatisierung wird viele Berufe verändern, aber nicht das Bedürfnis nach sinnvoller Tätigkeit beseitigen.\nHerr Bach: Entscheidend ist nicht, ob Maschinen Arbeit übernehmen, sondern wie wir den dadurch gewonnenen Wohlstand verteilen.\nFrau Imai: Ich warne vor Technikgläubigkeit — nicht jede Aufgabe lässt sich oder sollte automatisiert werden.\nHerr Olsen: Mich interessiert weniger die Technik als die Frage, ob Arbeit künftig überhaupt noch die Quelle unserer Identität sein muss.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Wer betont die Frage der Verteilung des Wohlstands?",
          options: [
            { id: "a", text: "Herr Bach" },
            { id: "b", text: "Frau Imai" },
            { id: "c", text: "Herr Olsen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Wer stellt infrage, ob Arbeit die Quelle der Identität bleiben muss?",
          options: [
            { id: "a", text: "Frau Renner" },
            { id: "b", text: "Herr Olsen" },
            { id: "c", text: "Herr Bach" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Erfasse den gedanklichen Schwerpunkt jeder Aussage, nicht einzelne Stichwörter.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Essay: Konsum und Identität",
    prompt: "Lies den Essay und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Ich kaufe, also bin ich?",
          body:
            "Dass Menschen über ihren Besitz definiert werden, ist kein neues Phänomen. Neu ist allenfalls die Selbstverständlichkeit, mit der wir unsere Persönlichkeit über Marken und Produkte zum Ausdruck bringen. Der Konsum verspricht uns, jemand Bestimmtes zu sein — nur ein Kauf entfernt von der besseren Version unserer selbst. Dass dieses Versprechen sich nie einlöst, gehört zu seiner Logik: Wäre es je erfüllt, gäbe es keinen Grund mehr, weiter zu konsumieren. Man könnte einwenden, dass auch frühere Generationen ihre Zugehörigkeit über Symbole zeigten. Der Unterschied liegt jedoch in der Geschwindigkeit, mit der heute neue Bedürfnisse erzeugt werden. Wer sich dem entziehen möchte, steht vor einer paradoxen Aufgabe: Selbst der Verzicht ist inzwischen zu einem Lebensstil geworden, den man — natürlich — käuflich erwerben kann.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum löst sich das Versprechen des Konsums laut Text nie ein?",
          options: [
            { id: "a", text: "Sonst gäbe es keinen Grund, weiter zu konsumieren." },
            { id: "b", text: "weil die Produkte zu teuer sind" },
            { id: "c", text: "weil niemand mehr einkauft" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Worin sieht der Autor das Paradox des Verzichts?",
          options: [
            { id: "a", text: "Auch der Verzicht ist zu einem käuflichen Lebensstil geworden." },
            { id: "b", text: "Verzicht ist unmöglich." },
            { id: "c", text: "Verzicht macht reich." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der ironische Einschub „natürlich“ unterstreicht das Paradox.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Sprachwandel als Normalfall",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Verfällt unsere Sprache?",
          body:
            "Kaum eine Klage ist so alt wie die über den angeblichen Verfall der Sprache. Schon vor Jahrhunderten beklagten Gelehrte, die Jugend spreche schlechter als ihre Vorfahren. Aus sprachwissenschaftlicher Sicht beruht diese Sorge auf einem Missverständnis: Sprache ist kein festes Gebäude, das man bewahren müsste, sondern ein lebendiges System, das sich notwendig verändert. Was die einen als Verfall empfinden, ist lediglich Wandel — derselbe Prozess, dem auch die heute als korrekt geltenden Formen ihre Existenz verdanken. Das bedeutet keineswegs, dass alles gleich gut sei oder dass man auf Normen verzichten sollte. Doch wer den Wandel grundsätzlich als Niedergang deutet, verkennt das Wesen der Sprache. Sie war nie statisch und wird es nie sein.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie beurteilt der Autor die Klage über den Sprachverfall?",
          options: [
            { id: "a", text: "Sie beruht auf einem Missverständnis über das Wesen der Sprache." },
            { id: "b", text: "Sie ist vollkommen berechtigt." },
            { id: "c", text: "Sie ist neu und einzigartig." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Was räumt der Autor ein?",
          options: [
            { id: "a", text: "dass man trotzdem nicht auf Normen verzichten sollte" },
            { id: "b", text: "dass jede Sprachform gleich gut ist" },
            { id: "c", text: "dass Sprache niemals korrekt sein kann" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keineswegs, dass …“ grenzt die These gegen ein Missverständnis ab.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Eine Reflexion: Individuum und Gemeinschaft",
    prompt: "Lies den Text und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Der Einzelne und die anderen",
          body:
            "Selten zuvor wurde die Selbstverwirklichung des Einzelnen so hoch geschätzt wie heute. Jeder solle sein eigenes Leben gestalten, frei von den Erwartungen anderer — ein verlockendes Versprechen. Doch dieses Ideal hat eine Kehrseite, die selten benannt wird. Wer ausschließlich sich selbst verpflichtet ist, dem fehlt mitunter jenes Netz aus Bindungen, das in schwierigen Zeiten trägt. Freiheit ohne Zugehörigkeit kann in Einsamkeit umschlagen. Es wäre allerdings ein Fehler, deshalb in die entgegengesetzte Richtung zu streben und das Individuum der Gemeinschaft unterzuordnen. Die Geschichte kennt genug Beispiele, wohin das führt. Die eigentliche Aufgabe besteht darin, beides zu versöhnen: die Freiheit, man selbst zu sein, und die Verantwortung, Teil eines größeren Ganzen zu bleiben.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist die zentrale Aussage des Textes?",
          options: [
            { id: "a", text: "Freiheit und Zugehörigkeit müssen miteinander versöhnt werden." },
            { id: "b", text: "Das Individuum sollte sich der Gemeinschaft unterordnen." },
            { id: "c", text: "Selbstverwirklichung ist immer schlecht." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Autor lehnt beide Extreme ab und sucht eine Synthese.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Kommentar: Künstliche Intelligenz und Kreativität",
    prompt: "Lies den Kommentar und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Kann eine Maschine kreativ sein?",
          body:
            "Seit Programme Bilder malen und Texte verfassen, wird heftig darüber gestritten, ob Maschinen kreativ sein können. Die Frage selbst ist jedoch womöglich falsch gestellt. Sie setzt voraus, dass es eine eindeutige Grenze zwischen echter und nachgeahmter Kreativität gäbe — eine Annahme, die schon beim Menschen schwer zu halten ist. Auch wir kombinieren Bekanntes zu vermeintlich Neuem. Aufschlussreicher als die Frage, ob Maschinen kreativ sind, scheint mir die Frage, was ihre Fähigkeiten über uns selbst verraten. Wenn eine Maschine das nachahmen kann, was wir für zutiefst menschlich hielten, sollten wir vielleicht weniger über die Maschine nachdenken als über unsere eigenen Vorstellungen davon, was uns ausmacht.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum hält der Autor die Ausgangsfrage für problematisch?",
          options: [
            { id: "a", text: "Sie setzt eine klare Grenze voraus, die schon beim Menschen fraglich ist." },
            { id: "b", text: "Maschinen können sicher nicht kreativ sein." },
            { id: "c", text: "Kreativität ist unwichtig." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Welche Frage hält der Autor für aufschlussreicher?",
          options: [
            { id: "a", text: "was die Fähigkeiten der Maschinen über uns selbst verraten" },
            { id: "b", text: "wie teuer die Programme sind" },
            { id: "c", text: "wer die Maschine programmiert hat" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Autor verschiebt die Perspektive von der Maschine auf den Menschen.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_TRUE_FALSE",
    title: "Ein Bericht: Die Debatte um die Bildungsgerechtigkeit",
    prompt: "Lies den Bericht. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Gleiche Chancen für alle?",
          body:
            "Dass Bildung der Schlüssel zum sozialen Aufstieg sei, gilt vielen als ausgemacht. Empirische Befunde zeichnen jedoch ein nüchterneres Bild. Zwar hat sich der Zugang zu höherer Bildung formal geöffnet, doch hängt der Bildungserfolg nach wie vor stark von der Herkunft ab. Kinder aus akademischen Elternhäusern haben deutlich bessere Aussichten, unabhängig von ihrer Begabung. Verantwortlich dafür sind nicht in erster Linie die Schulen selbst, sondern Faktoren, die lange vor der Einschulung wirken: der Wortschatz im Elternhaus, der Zugang zu Büchern, die Selbstverständlichkeit des Lernens. Reformen, die erst in der Schule ansetzen, kommen daher oft zu spät. Die Fachleute sind sich allerdings uneinig, welche Maßnahmen wirklich Abhilfe schaffen.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "truefalse",
          stem: "Laut Text hängt der Bildungserfolg kaum noch von der Herkunft ab.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          kind: "truefalse",
          stem: "Die Fachleute sind sich über die wirksamen Maßnahmen uneinig.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "„gilt vielen als ausgemacht“ kündigt oft an, dass der Text dies relativiert.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Essay: Über das Erinnern",
    prompt: "Lies den Essay und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Was bleibt",
          body:
            "Wir neigen dazu, unser Gedächtnis für eine Art Archiv zu halten, in dem das Erlebte unverändert aufbewahrt wird. Die Forschung zeichnet ein anderes Bild. Erinnern ist kein Abrufen, sondern ein Rekonstruieren: Jedes Mal, wenn wir uns erinnern, verändern wir das Erinnerte ein wenig, passen es an, wer wir heute sind. So gesehen ist Erinnerung weniger ein Blick in die Vergangenheit als ein Spiegel der Gegenwart. Das mag beunruhigend klingen — wenn wir uns nicht auf unsere Erinnerungen verlassen können, worauf dann? Doch es liegt auch ein Trost darin. Gerade weil das Gedächtnis nicht starr ist, können wir mit schmerzhaften Erfahrungen Frieden schließen. Wir sind nicht die Gefangenen unserer Vergangenheit, sondern ihre fortlaufenden Erzähler.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie beschreibt der Text das Erinnern?",
          options: [
            { id: "a", text: "als Rekonstruieren, das die Gegenwart spiegelt" },
            { id: "b", text: "als exaktes Abrufen unveränderter Daten" },
            { id: "c", text: "als völlig unzuverlässig und wertlos" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Worin liegt laut Autor der Trost?",
          options: [
            { id: "a", text: "Wir können mit schmerzhaften Erfahrungen Frieden schließen." },
            { id: "b", text: "Wir vergessen alles Schlechte sofort." },
            { id: "c", text: "Die Vergangenheit ist unveränderlich." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Text wendet eine beunruhigende Einsicht ins Tröstliche.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_MATCHING",
    title: "Buchempfehlungen für unterschiedliche Leser",
    prompt: "Lies die Beschreibungen und ordne jeder Person das passende Buch zu.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Vier Bücher im Überblick",
          body:
            "A: Ein dichtes Sachbuch über die Geschichte des Geldes, anspruchsvoll, aber erhellend.\nB: Ein leiser Roman über das Älterwerden, ohne große Handlung, dafür sprachlich fein.\nC: Ein Sammelband mit kurzen, humorvollen Alltagsbeobachtungen — ideal für zwischendurch.\nD: Ein Reisebericht, der politische Analyse mit persönlichen Begegnungen verbindet.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "match",
          stem: "Frau Cho liest gern Anspruchsvolles und interessiert sich für wirtschaftliche Zusammenhänge. Welches Buch passt?",
          options: [
            { id: "a", text: "Buch A" },
            { id: "b", text: "Buch C" },
            { id: "c", text: "Buch B" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "match",
          stem: "Herr Linde hat wenig Zeit am Stück und mag heitere, kurze Texte. Welches Buch passt?",
          options: [
            { id: "a", text: "Buch B" },
            { id: "b", text: "Buch C" },
            { id: "c", text: "Buch D" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achte auf Stil, Anspruch und Lesesituation der Personen.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Kommentar: Daten als Währung",
    prompt: "Lies den Kommentar und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Der Preis des Kostenlosen",
          body:
            "Dass viele digitale Dienste nichts kosten, hat uns daran gewöhnt, sie für Geschenke zu halten. Tatsächlich bezahlen wir sehr wohl — nur eben mit unseren Daten statt mit Geld. Diese Erkenntnis ist inzwischen Allgemeingut, und doch ändert sie erstaunlich wenig an unserem Verhalten. Das liegt nicht allein an Bequemlichkeit. Der eigentliche Grund ist, dass die Kosten unsichtbar bleiben: Niemand spürt unmittelbar, was es bedeutet, wenn das eigene Verhalten in jeder Einzelheit vermessen wird. Ein Schaden, den man nicht fühlt, motiviert kaum zur Vorsicht. Hier liegt die eigentliche Herausforderung — nicht im Mangel an Information, sondern in der Schwierigkeit, eine abstrakte Gefahr ernst zu nehmen, solange sie folgenlos erscheint.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Warum ändert sich laut Autor das Verhalten kaum, obwohl alle Bescheid wissen?",
          options: [
            { id: "a", text: "weil die Kosten unsichtbar bleiben und sich der Schaden nicht spüren lässt" },
            { id: "b", text: "weil die Dienste zu teuer sind" },
            { id: "c", text: "weil niemand die Dienste nutzt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Worin sieht der Autor die eigentliche Herausforderung?",
          options: [
            { id: "a", text: "eine abstrakte Gefahr ernst zu nehmen, die folgenlos erscheint" },
            { id: "b", text: "mehr Informationen zu verbreiten" },
            { id: "c", text: "die Dienste zu verbieten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht im Mangel an Information, sondern …“ nennt den wahren Kern.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Ein Artikel: Arbeit jenseits des Geldes",
    prompt: "Lies den Artikel und wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Warum wir arbeiten",
          body:
            "Würde man Menschen fragen, warum sie arbeiten, fiele die Antwort oft knapp aus: um Geld zu verdienen. So plausibel das klingt, so unvollständig ist es. Studien zeigen, dass viele Menschen auch dann weiterarbeiten würden, wenn sie finanziell nicht darauf angewiesen wären — wenn auch vielleicht anders. Arbeit stiftet Struktur, vermittelt das Gefühl, gebraucht zu werden, und schafft soziale Zugehörigkeit. Wer den Wert der Arbeit allein in der Bezahlung sieht, übersieht diese Funktionen. Das erklärt auch, warum der Verlust des Arbeitsplatzes für viele weit über die finanzielle Not hinaus belastend ist. Eine Gesellschaft, die über die Zukunft der Arbeit nachdenkt, sollte daher nicht nur fragen, wovon die Menschen leben, sondern auch, wofür.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was übersieht laut Text, wer Arbeit nur über die Bezahlung definiert?",
          options: [
            { id: "a", text: "dass Arbeit Struktur, Anerkennung und Zugehörigkeit stiftet" },
            { id: "b", text: "dass Arbeit immer Spaß macht" },
            { id: "c", text: "dass Geld unwichtig ist" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Welche Frage sollte eine Gesellschaft laut Autor zusätzlich stellen?",
          options: [
            { id: "a", text: "wofür die Menschen arbeiten, nicht nur wovon sie leben" },
            { id: "b", text: "wie man Arbeit ganz abschafft" },
            { id: "c", text: "wie man am meisten Geld verdient" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Das Wortspiel „wovon … wofür“ fasst die These zu.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_GLOBAL",
    title: "Ein Leitartikel: Die Grenzen der Messbarkeit",
    prompt: "Lies den Leitartikel und wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Nicht alles, was zählt, lässt sich zählen",
          body:
            "In immer mehr Bereichen gilt das Messbare als das einzig Maßgebliche. Was sich nicht in Zahlen fassen lässt, gerät leicht in den Verdacht, unwichtig zu sein. Diese Haltung hat unbestreitbare Vorzüge: Sie schafft Vergleichbarkeit und schützt vor reiner Willkür. Doch sie hat auch einen blinden Fleck. Manches, was für ein gelingendes Leben oder eine gute Schule entscheidend ist — Vertrauen, Neugier, Zuwendung —, entzieht sich der Quantifizierung. Wo man es dennoch zu messen versucht, misst man am Ende nur, was sich leicht messen lässt, und hält es fälschlich für das Wesentliche. Es wäre naiv, deshalb auf Messung ganz zu verzichten. Klüger wäre, sich ihrer Grenzen bewusst zu bleiben und das nicht Messbare nicht mit dem Unwichtigen zu verwechseln.",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Was ist die Kernaussage des Leitartikels?",
          options: [
            { id: "a", text: "Messung ist nützlich, aber man darf das nicht Messbare nicht für unwichtig halten." },
            { id: "b", text: "Alles Wichtige lässt sich messen." },
            { id: "c", text: "Man sollte auf jede Messung verzichten." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Autor sucht erneut einen Mittelweg: weder blind messen noch ganz darauf verzichten.",
  },
  {
    level: "C1",
    module: "LESEN",
    taskType: "LESEN_DETAIL",
    title: "Eine formelle Stellungnahme: Kulturförderung",
    prompt: "Lies die Stellungnahme und wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      passages: [
        {
          id: "p1",
          heading: "Offener Brief an den Stadtrat",
          body:
            "Sehr geehrte Damen und Herren,\n\nmit Sorge haben wir vom geplanten Abbau der Mittel für die Stadtbibliothek erfahren. Wir verkennen nicht die angespannte Haushaltslage; Einsparungen sind unter den gegebenen Umständen unvermeidlich. Wir geben jedoch zu bedenken, dass gerade öffentliche Bibliotheken eine Funktion erfüllen, die sich nicht durch private Angebote ersetzen lässt: Sie stehen allen offen, unabhängig vom Einkommen. Wer hier spart, spart an der Teilhabe der Schwächsten. Wir bitten den Stadtrat daher eindringlich, die geplanten Kürzungen zu überdenken und nach Alternativen zu suchen. Gern stehen wir für ein Gespräch zur Verfügung.\n\nMit freundlichen Grüßen\nDer Förderverein der Stadtbibliothek",
        },
      ],
      questions: [
        {
          id: "q1",
          kind: "mcq",
          stem: "Wie positioniert sich der Förderverein zur Haushaltslage?",
          options: [
            { id: "a", text: "Er erkennt sie an, hält die Kürzung bei der Bibliothek aber für falsch." },
            { id: "b", text: "Er bestreitet, dass es Geldprobleme gibt." },
            { id: "c", text: "Er fordert, überall zu sparen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          kind: "mcq",
          stem: "Welches Hauptargument führt der Verein an?",
          options: [
            { id: "a", text: "Bibliotheken sichern die Teilhabe unabhängig vom Einkommen." },
            { id: "b", text: "Bibliotheken sind sehr billig." },
            { id: "c", text: "Bücher sind altmodisch." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Ein geschicktes Argument räumt die Gegenseite ein („Wir verkennen nicht …“), bevor es widerspricht.",
  },
];

async function main() {
  const res = await prisma.goetheItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Lesen item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}

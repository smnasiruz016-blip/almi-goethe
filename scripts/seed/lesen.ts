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

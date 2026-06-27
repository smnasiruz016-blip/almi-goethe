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

// Seeds original HÖREN (Listening) items — A1 starter set. A German audio script
// (rendered to speech by German TTS, server-side) + multiple-choice questions.
// All content is original to AlmiGoethe, never copied from the Goethe-Institut.
//
// Run: npm run seed:hoeren  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.GoetheItemCreateManyInput[] = [
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Durchsage am Bahnhof",
    prompt: "Du hörst eine Durchsage. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Guten Tag, meine Damen und Herren. Der Zug nach München fährt heute um vierzehn Uhr dreißig von Gleis fünf. Bitte beachten Sie: Der Zug hat zehn Minuten Verspätung. Wir wünschen Ihnen eine gute Reise.",
      speakers: [{ role: "Ansage", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Wann fährt der Zug nach München?",
          options: [
            { id: "a", text: "um 14:30 Uhr" },
            { id: "b", text: "um 13:40 Uhr" },
            { id: "c", text: "um 15:00 Uhr" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Von welchem Gleis fährt der Zug?",
          options: [
            { id: "a", text: "von Gleis 3" },
            { id: "b", text: "von Gleis 5" },
            { id: "c", text: "von Gleis 10" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achte auf Zahlen: Uhrzeit und Gleisnummer.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Wo ist die Post?",
    prompt: "Du hörst ein kurzes Gespräch. Wähle die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Frau: Entschuldigung, wo ist die Post? Mann: Die Post ist gleich da drüben, neben dem Supermarkt. Frau: Vielen Dank! Mann: Bitte schön.",
      speakers: [
        { role: "Frau", voice: "nova" },
        { role: "Mann", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wo ist die Post?",
          options: [
            { id: "a", text: "neben dem Supermarkt" },
            { id: "b", text: "neben dem Bahnhof" },
            { id: "c", text: "neben der Schule" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In kurzen Gesprächen kommt die wichtige Information oft in einem Satz.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ansage in der Arztpraxis",
    prompt: "Du hörst eine Telefon-Ansage. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Guten Tag, hier ist die Praxis Dr. Schneider. Wir haben heute leider geschlossen. Unsere Öffnungszeiten sind Montag bis Freitag von acht bis zwölf Uhr. In einem Notfall rufen Sie bitte die Nummer einhundertzwölf an. Vielen Dank.",
      speakers: [{ role: "Ansage", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Wann hat die Praxis offen?",
          options: [
            { id: "a", text: "Montag bis Freitag von 8 bis 12 Uhr" },
            { id: "b", text: "jeden Tag von 8 bis 18 Uhr" },
            { id: "c", text: "nur am Wochenende" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Nummer soll man im Notfall anrufen?",
          options: [
            { id: "a", text: "110" },
            { id: "b", text: "112" },
            { id: "c", text: "116" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achte auf Öffnungszeiten und Telefonnummern.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Der Wetterbericht im Radio",
    prompt: "Du hörst den Wetterbericht. Wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "wetter",
    payload: {
      audioScript:
        "Und nun das Wetter für morgen. Am Vormittag ist es bewölkt und kühl, etwa zehn Grad. Am Nachmittag kommt die Sonne und es wird wärmer. Am Abend kann es regnen. Nehmen Sie also einen Schirm mit.",
      speakers: [{ role: "Sprecher", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Wie ist das Wetter am Nachmittag?",
          options: [
            { id: "a", text: "Es schneit." },
            { id: "b", text: "Die Sonne kommt." },
            { id: "c", text: "Es ist sehr kalt." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was soll man mitnehmen?",
          options: [
            { id: "a", text: "einen Schirm" },
            { id: "b", text: "eine Mütze" },
            { id: "c", text: "eine Sonnenbrille" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Das Wetter ändert sich im Laufe des Tages.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Durchsage im Supermarkt",
    prompt: "Du hörst eine Durchsage im Supermarkt. Wähle die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "einkaufen",
    payload: {
      audioScript:
        "Liebe Kundinnen und Kunden, heute haben wir ein Angebot: Äpfel kosten nur einen Euro pro Kilo. Sie finden die Äpfel gleich am Eingang. Unser Supermarkt schließt heute um zwanzig Uhr. Vielen Dank für Ihren Einkauf.",
      speakers: [{ role: "Durchsage", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Was ist heute im Angebot?",
          options: [
            { id: "a", text: "Äpfel" },
            { id: "b", text: "Bananen" },
            { id: "c", text: "Tomaten" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann schließt der Supermarkt?",
          options: [
            { id: "a", text: "um 18 Uhr" },
            { id: "b", text: "um 20 Uhr" },
            { id: "c", text: "um 22 Uhr" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Angebote nennen oft Produkt, Preis und Ort.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Einen Termin machen",
    prompt: "Du hörst ein Gespräch am Telefon. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Frau: Friseur Schön, guten Tag. Mann: Guten Tag, ich möchte einen Termin. Frau: Gern. Geht es am Dienstag um fünfzehn Uhr? Mann: Dienstag passt leider nicht. Haben Sie auch am Mittwoch etwas frei? Frau: Ja, Mittwoch um sechzehn Uhr. Mann: Perfekt, dann komme ich am Mittwoch.",
      speakers: [
        { role: "Frau", voice: "shimmer" },
        { role: "Mann", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "An welchem Tag kommt der Mann?",
          options: [
            { id: "a", text: "am Dienstag" },
            { id: "b", text: "am Mittwoch" },
            { id: "c", text: "am Donnerstag" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Um wie viel Uhr ist der Termin?",
          options: [
            { id: "a", text: "um 15 Uhr" },
            { id: "b", text: "um 16 Uhr" },
            { id: "c", text: "um 17 Uhr" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Der erste Vorschlag wird oft geändert — höre bis zum Ende.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ansage am Flughafen",
    prompt: "Du hörst eine Durchsage am Flughafen. Wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Letzter Aufruf für den Flug nach Berlin. Die Passagiere werden gebeten, sofort zum Gate B zwölf zu kommen. Der Flug startet in fünfzehn Minuten. Letzter Aufruf für den Flug nach Berlin, Gate B zwölf.",
      speakers: [{ role: "Durchsage", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Wohin geht der Flug?",
          options: [
            { id: "a", text: "nach Berlin" },
            { id: "b", text: "nach Bremen" },
            { id: "c", text: "nach Bonn" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Zu welchem Gate sollen die Passagiere kommen?",
          options: [
            { id: "a", text: "Gate B2" },
            { id: "b", text: "Gate B12" },
            { id: "c", text: "Gate B20" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Höre genau auf Ziel und Gate-Nummer.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Nachricht auf dem Anrufbeantworter",
    prompt: "Du hörst eine Nachricht. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Hallo Eva, hier ist Klaus. Wir machen am Samstag eine kleine Party bei uns zu Hause. Es geht um neunzehn Uhr los. Bring bitte etwas zu trinken mit. Ruf mich an, wenn du kommst. Bis dann, tschüss!",
      speakers: [{ role: "Klaus", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Wann ist die Party?",
          options: [
            { id: "a", text: "am Freitag" },
            { id: "b", text: "am Samstag" },
            { id: "c", text: "am Sonntag" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was soll Eva mitbringen?",
          options: [
            { id: "a", text: "etwas zu trinken" },
            { id: "b", text: "einen Kuchen" },
            { id: "c", text: "Musik" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Notiere, wer anruft, wann etwas ist und welche Bitte kommt.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Im Restaurant bestellen",
    prompt: "Du hörst ein Gespräch im Restaurant. Wähle die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "essen",
    payload: {
      audioScript:
        "Kellner: Guten Abend, was möchten Sie trinken? Gast: Ich nehme ein Wasser, bitte. Kellner: Und zu essen? Gast: Eine Pizza mit Tomaten und Käse. Kellner: Gern. Möchten Sie auch einen Salat? Gast: Nein danke, nur die Pizza.",
      speakers: [
        { role: "Kellner", voice: "onyx" },
        { role: "Gast", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was möchte der Gast trinken?",
          options: [
            { id: "a", text: "Wasser" },
            { id: "b", text: "Cola" },
            { id: "c", text: "Saft" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was isst der Gast?",
          options: [
            { id: "a", text: "einen Salat" },
            { id: "b", text: "eine Pizza" },
            { id: "c", text: "eine Suppe" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Höre auf das, was der Gast wirklich bestellt.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Wegbeschreibung",
    prompt: "Du hörst eine Wegbeschreibung. Wähle die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Frau: Entschuldigung, wie komme ich zum Bahnhof? Mann: Gehen Sie hier geradeaus bis zur Ampel. Dann gehen Sie links. Der Bahnhof ist auf der rechten Seite, neben der Bank. Frau: Also geradeaus, dann links. Vielen Dank!",
      speakers: [
        { role: "Frau", voice: "shimmer" },
        { role: "Mann", voice: "alloy" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wohin möchte die Frau gehen?",
          options: [
            { id: "a", text: "zum Bahnhof" },
            { id: "b", text: "zur Post" },
            { id: "c", text: "zum Markt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wo ist der Bahnhof?",
          options: [
            { id: "a", text: "neben der Bank" },
            { id: "b", text: "neben dem Supermarkt" },
            { id: "c", text: "neben der Schule" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Richtungen: geradeaus, links, rechts.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Durchsage im Kaufhaus",
    prompt: "Du hörst eine Durchsage. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      audioScript:
        "Liebe Kunden, unser Kaufhaus schließt in zehn Minuten. Bitte kommen Sie zur Kasse. Morgen sind wir wieder ab neun Uhr für Sie da. Wir wünschen Ihnen einen schönen Abend.",
      speakers: [{ role: "Durchsage", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Das Kaufhaus schließt bald.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          stem: "Morgen öffnet das Kaufhaus um zehn Uhr.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Vergleiche genau: in der Ansage ist es „ab neun Uhr“.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Beim Einkaufen",
    prompt: "Du hörst ein Gespräch. Wähle die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "einkaufen",
    payload: {
      audioScript:
        "Verkäuferin: Guten Tag, was darf es sein? Kunde: Ich möchte ein Brot und sechs Brötchen, bitte. Verkäuferin: Gern. Sonst noch etwas? Kunde: Ja, ein Stück Kuchen. Was kostet das zusammen? Verkäuferin: Das macht fünf Euro fünfzig.",
      speakers: [
        { role: "Verkäuferin", voice: "nova" },
        { role: "Kunde", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie viele Brötchen kauft der Kunde?",
          options: [
            { id: "a", text: "vier" },
            { id: "b", text: "sechs" },
            { id: "c", text: "acht" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was kostet alles zusammen?",
          options: [
            { id: "a", text: "5,50 Euro" },
            { id: "b", text: "6,50 Euro" },
            { id: "c", text: "5,15 Euro" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre auf Mengen (Zahlen) und den Preis am Ende.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Der Bus hat Verspätung",
    prompt: "Du hörst eine Durchsage an der Bushaltestelle. Wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Achtung, eine Information für die Fahrgäste der Linie sieben. Der Bus nach Stadtmitte hat heute fünf Minuten Verspätung. Er kommt also um vierzehn Uhr fünf. Wir bitten um Ihr Verständnis.",
      speakers: [{ role: "Durchsage", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Welche Buslinie hat Verspätung?",
          options: [
            { id: "a", text: "Linie 7" },
            { id: "b", text: "Linie 5" },
            { id: "c", text: "Linie 14" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann kommt der Bus?",
          options: [
            { id: "a", text: "um 14:05 Uhr" },
            { id: "b", text: "um 14:00 Uhr" },
            { id: "c", text: "um 14:15 Uhr" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Linie und neue Uhrzeit sind die wichtigen Informationen.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über Hobbys",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Anna: Was machst du gern in deiner Freizeit, Tom? Tom: Ich spiele gern Fußball und höre Musik. Und du? Anna: Ich lese gern und gehe schwimmen. Tom: Schwimmen finde ich auch toll. Gehen wir am Samstag zusammen ins Schwimmbad? Anna: Ja, gute Idee!",
      speakers: [
        { role: "Anna", voice: "shimmer" },
        { role: "Tom", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was macht Tom gern?",
          options: [
            { id: "a", text: "Fußball spielen und Musik hören" },
            { id: "b", text: "lesen und kochen" },
            { id: "c", text: "malen und tanzen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was machen Anna und Tom am Samstag zusammen?",
          options: [
            { id: "a", text: "Sie gehen ins Schwimmbad." },
            { id: "b", text: "Sie spielen Fußball." },
            { id: "c", text: "Sie gehen ins Kino." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Wer macht was? Halte die zwei Personen auseinander.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Telefonnachricht: eine Verabredung",
    prompt: "Du hörst eine Nachricht. Wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Hallo Sven, hier ist Lena. Wollen wir morgen zusammen Kaffee trinken? Ich habe um sechzehn Uhr Zeit. Wir können uns im Café am Park treffen. Schreib mir bitte eine Nachricht. Tschüss!",
      speakers: [{ role: "Lena", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Was möchte Lena machen?",
          options: [
            { id: "a", text: "Kaffee trinken" },
            { id: "b", text: "ins Kino gehen" },
            { id: "c", text: "einkaufen gehen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wo möchte sie sich treffen?",
          options: [
            { id: "a", text: "im Café am Park" },
            { id: "b", text: "am Bahnhof" },
            { id: "c", text: "bei Sven zu Hause" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Eine Verabredung hat Aktivität, Zeit und Ort.",
  },
  {
    level: "A1",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Ansage im Schwimmbad",
    prompt: "Du hörst eine Durchsage im Schwimmbad. Sind die Sätze richtig oder falsch?",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Liebe Gäste, das Schwimmbad schließt heute um achtzehn Uhr. Bitte verlassen Sie das Becken um Viertel vor sechs. Am Wochenende sind wir von zehn bis zwanzig Uhr geöffnet. Vielen Dank.",
      speakers: [{ role: "Durchsage", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Das Schwimmbad schließt heute um 18 Uhr.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          stem: "Am Wochenende ist das Schwimmbad nur bis 18 Uhr offen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Achte auf den Unterschied zwischen heute und dem Wochenende.",
  },
];

async function main() {
  const res = await prisma.goetheItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Hören item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}

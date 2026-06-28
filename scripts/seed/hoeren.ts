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

  // ===================== A2 =====================
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Termin beim Zahnarzt",
    prompt: "Du hörst ein Telefongespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Frau: Praxis Dr. Hofmann, guten Tag. Mann: Guten Tag, ich habe seit gestern starke Zahnschmerzen und brauche schnell einen Termin. Frau: Das tut mir leid. Heute ist es schon voll, aber morgen früh um acht Uhr dreißig hätte ich etwas frei. Mann: Acht Uhr dreißig ist gut. Frau: Dann bis morgen. Bringen Sie bitte Ihre Versichertenkarte mit.",
      speakers: [
        { role: "Frau", voice: "nova" },
        { role: "Mann", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum ruft der Mann an?",
          options: [
            { id: "a", text: "Er hat Zahnschmerzen und braucht einen Termin." },
            { id: "b", text: "Er möchte einen Termin absagen." },
            { id: "c", text: "Er sucht eine neue Praxis." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann bekommt er den Termin?",
          options: [
            { id: "a", text: "heute Nachmittag" },
            { id: "b", text: "morgen um 8:30 Uhr" },
            { id: "c", text: "nächste Woche" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Der erste Wunsch (heute) wird oft geändert — höre die Lösung am Ende.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Reise planen",
    prompt: "Du hörst ein Gespräch zwischen zwei Freunden. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Mann: Wollen wir im Sommer zusammen verreisen? Frau: Ja, gern! Ans Meer oder in die Berge? Mann: Ich war letztes Jahr am Meer. Diesmal hätte ich Lust auf die Berge — wandern und die Natur genießen. Frau: Gute Idee. Dann nehmen wir den Zug, das ist günstiger als das Auto. Mann: Einverstanden. Ich suche heute Abend nach Hotels.",
      speakers: [
        { role: "Mann", voice: "echo" },
        { role: "Frau", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wohin möchten die beiden fahren?",
          options: [
            { id: "a", text: "ans Meer" },
            { id: "b", text: "in die Berge" },
            { id: "c", text: "in eine große Stadt" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wie wollen sie reisen?",
          options: [
            { id: "a", text: "mit dem Zug" },
            { id: "b", text: "mit dem Auto" },
            { id: "c", text: "mit dem Flugzeug" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Bei Plänen entscheiden beide gemeinsam — achte auf das Ergebnis.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Werbung im Radio",
    prompt: "Du hörst eine Werbung. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      audioScript:
        "Aufgepasst! Nur an diesem Wochenende: Im Möbelhaus Komfort gibt es alle Sofas zwanzig Prozent günstiger. Außerdem bekommen Sie bei jedem Einkauf über hundert Euro eine kleine Lampe gratis dazu. Das Möbelhaus ist am Samstag und Sonntag von zehn bis achtzehn Uhr geöffnet. Wir freuen uns auf Ihren Besuch!",
      speakers: [{ role: "Werbung", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was ist am Wochenende günstiger?",
          options: [
            { id: "a", text: "alle Sofas" },
            { id: "b", text: "alle Tische" },
            { id: "c", text: "alle Lampen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was bekommt man bei einem Einkauf über 100 Euro?",
          options: [
            { id: "a", text: "eine Lampe gratis" },
            { id: "b", text: "einen Gutschein" },
            { id: "c", text: "ein zweites Sofa" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Werbung nennt Angebot, Bedingung und Öffnungszeiten.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Nachricht: ein verlorener Schlüssel",
    prompt: "Du hörst eine Nachricht auf dem Anrufbeantworter. Wähle die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Hallo Frau Klein, hier ist das Fundbüro der Stadt. Sie haben gestern einen Schlüsselbund verloren. Ein netter Mann hat ihn gefunden und bei uns abgegeben. Sie können den Schlüssel von Montag bis Freitag zwischen neun und sechzehn Uhr abholen. Bringen Sie bitte einen Ausweis mit. Auf Wiederhören.",
      speakers: [{ role: "Fundbüro", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Warum ruft das Fundbüro an?",
          options: [
            { id: "a", text: "Der Schlüssel von Frau Klein wurde gefunden." },
            { id: "b", text: "Frau Klein muss eine Strafe zahlen." },
            { id: "c", text: "Das Fundbüro ist geschlossen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll Frau Klein mitbringen?",
          options: [
            { id: "a", text: "einen Ausweis" },
            { id: "b", text: "Geld" },
            { id: "c", text: "einen zweiten Schlüssel" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre, warum man anruft und was man tun soll.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Im Reisebüro",
    prompt: "Du hörst ein Gespräch im Reisebüro. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Angestellte: Guten Tag, wie kann ich Ihnen helfen? Kunde: Ich suche einen Urlaub für eine Woche, nicht zu teuer. Angestellte: Wie wäre es mit Spanien? Eine Woche im Hotel am Strand kostet vierhundert Euro pro Person. Kunde: Das klingt gut. Ist das Frühstück dabei? Angestellte: Ja, Frühstück ist inklusive. Der Flug kostet extra, etwa hundert Euro. Kunde: Gut, dann buche ich das.",
      speakers: [
        { role: "Angestellte", voice: "shimmer" },
        { role: "Kunde", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was kostet eine Woche im Hotel pro Person?",
          options: [
            { id: "a", text: "400 Euro" },
            { id: "b", text: "100 Euro" },
            { id: "c", text: "500 Euro" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist im Preis inklusive?",
          options: [
            { id: "a", text: "das Frühstück" },
            { id: "b", text: "der Flug" },
            { id: "c", text: "ein Mietauto" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Preise und darauf, was inklusive oder extra ist.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Durchsage im Zug",
    prompt: "Du hörst eine Durchsage im Zug. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Sehr geehrte Fahrgäste, wir erreichen in wenigen Minuten Frankfurt Hauptbahnhof. Fahrgäste nach Köln steigen bitte hier um; der Anschlusszug fährt von Gleis sieben. Der Speisewagen befindet sich in der Mitte des Zuges. Wir wünschen Ihnen eine angenehme Weiterreise.",
      speakers: [{ role: "Durchsage", voice: "onyx" }],
      questions: [
        {
          id: "q1",
          stem: "Was sollen Fahrgäste nach Köln tun?",
          options: [
            { id: "a", text: "in Frankfurt umsteigen" },
            { id: "b", text: "im Zug sitzen bleiben" },
            { id: "c", text: "in den Speisewagen gehen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Von welchem Gleis fährt der Anschlusszug?",
          options: [
            { id: "a", text: "Gleis 7" },
            { id: "b", text: "Gleis 17" },
            { id: "c", text: "Gleis 11" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre auf Anweisungen für Reisende und auf Gleisnummern.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Problem im Hotel",
    prompt: "Du hörst ein Gespräch an der Hotelrezeption. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Gast: Entschuldigung, in meinem Zimmer funktioniert das WLAN nicht. Rezeption: Oh, das tut mir leid. Welche Zimmernummer haben Sie? Gast: Zimmer zweihundertfünf. Rezeption: Ich schicke gleich einen Techniker hoch. In zehn Minuten ist jemand da. Gast: Vielen Dank. Können Sie mir auch das Passwort noch einmal geben? Rezeption: Natürlich, ich schreibe es Ihnen auf.",
      speakers: [
        { role: "Gast", voice: "nova" },
        { role: "Rezeption", voice: "alloy" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was ist das Problem des Gastes?",
          options: [
            { id: "a", text: "Das WLAN funktioniert nicht." },
            { id: "b", text: "Das Zimmer ist zu kalt." },
            { id: "c", text: "Die Dusche ist kaputt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was macht die Rezeption?",
          options: [
            { id: "a", text: "Sie schickt einen Techniker." },
            { id: "b", text: "Sie gibt dem Gast ein neues Zimmer." },
            { id: "c", text: "Sie ruft die Polizei." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Halte Problem und Lösung auseinander.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Wetter und Verkehr im Radio",
    prompt: "Du hörst eine Radiomeldung. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "wetter",
    payload: {
      audioScript:
        "Und jetzt Wetter und Verkehr. Heute bleibt es trocken, am Nachmittag scheint die Sonne. Auf der Autobahn A3 gibt es einen Stau von etwa fünf Kilometern, weil dort gearbeitet wird. Fahren Sie wenn möglich über die Landstraße. Mehr Verkehrsnachrichten gibt es um halb sechs.",
      speakers: [{ role: "Sprecher", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Heute regnet es den ganzen Tag.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          stem: "Auf der A3 gibt es einen Stau.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Trenne die Information zum Wetter von der zum Verkehr.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Anmeldung im Fitnessstudio",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Mann: Guten Tag, ich möchte mich im Fitnessstudio anmelden. Was kostet das? Frau: Der Monat kostet dreißig Euro. Wenn Sie für ein ganzes Jahr buchen, sind es nur fünfundzwanzig Euro pro Monat. Mann: Und kann ich vorher einmal kostenlos trainieren? Frau: Ja, ein Probetraining ist gratis. Kommen Sie einfach mit Sportkleidung vorbei.",
      speakers: [
        { role: "Mann", voice: "echo" },
        { role: "Frau", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie viel kostet ein Monat bei einem Jahresvertrag?",
          options: [
            { id: "a", text: "25 Euro" },
            { id: "b", text: "30 Euro" },
            { id: "c", text: "20 Euro" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist gratis?",
          options: [
            { id: "a", text: "ein Probetraining" },
            { id: "b", text: "die Sportkleidung" },
            { id: "c", text: "der erste Monat" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf verschiedene Preise und auf das, was gratis ist.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Einladung am Telefon",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Frau: Hallo Sofia, hast du am Sonntag Zeit? Wir machen ein Picknick im Park. Sofia: Oh schön! Ja, ich habe Zeit. Was soll ich mitbringen? Frau: Bring einfach etwas zu essen mit, am besten Obst oder Salat. Getränke haben wir genug. Wir treffen uns um zwölf am Eingang. Sofia: Super, bis Sonntag!",
      speakers: [
        { role: "Frau", voice: "nova" },
        { role: "Sofia", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was machen sie am Sonntag?",
          options: [
            { id: "a", text: "ein Picknick im Park" },
            { id: "b", text: "einen Ausflug ans Meer" },
            { id: "c", text: "ein Essen im Restaurant" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll Sofia mitbringen?",
          options: [
            { id: "a", text: "etwas zu essen" },
            { id: "b", text: "Getränke" },
            { id: "c", text: "einen Tisch" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre auf Zeit, Ort und was man mitbringen soll.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Umfrage auf der Straße",
    prompt: "Du hörst ein kurzes Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Reporterin: Entschuldigung, darf ich Sie etwas fragen? Wie kommen Sie zur Arbeit? Frau: Ich fahre meistens mit dem Fahrrad, das ist gesund und schnell. Reporterin: Und bei schlechtem Wetter? Frau: Dann nehme ich die Straßenbahn. Auto fahre ich fast nie, das ist mir in der Stadt zu stressig.",
      speakers: [
        { role: "Reporterin", voice: "shimmer" },
        { role: "Frau", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie kommt die Frau meistens zur Arbeit?",
          options: [
            { id: "a", text: "mit dem Fahrrad" },
            { id: "b", text: "mit dem Auto" },
            { id: "c", text: "zu Fuß" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was macht sie bei schlechtem Wetter?",
          options: [
            { id: "a", text: "Sie nimmt die Straßenbahn." },
            { id: "b", text: "Sie bleibt zu Hause." },
            { id: "c", text: "Sie fährt mit dem Auto." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre, was die Person normalerweise macht und was bei Ausnahmen.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Nachricht von der Schule",
    prompt: "Du hörst eine Nachricht. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Guten Tag, hier ist die Grundschule am Park. Wir möchten Sie informieren: Am Freitag fällt der Unterricht leider aus, weil die Lehrer eine Fortbildung haben. Die Kinder haben also frei. Am Montag beginnt der Unterricht wieder normal um acht Uhr. Bei Fragen rufen Sie uns gern an.",
      speakers: [{ role: "Ansage", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Was passiert am Freitag?",
          options: [
            { id: "a", text: "Der Unterricht fällt aus." },
            { id: "b", text: "Es gibt einen Ausflug." },
            { id: "c", text: "Die Kinder schreiben einen Test." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann beginnt der Unterricht wieder?",
          options: [
            { id: "a", text: "am Montag um 8 Uhr" },
            { id: "b", text: "am Samstag" },
            { id: "c", text: "am Freitag um 10 Uhr" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„fällt aus“ heißt: es findet nicht statt.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Im Elektrogeschäft",
    prompt: "Du hörst ein Gespräch im Geschäft. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      audioScript:
        "Kundin: Guten Tag, ich suche ein Handy, nicht zu teuer. Verkäufer: Dieses Modell hier kostet zweihundert Euro und hat eine gute Kamera. Kundin: Und wie lange hält der Akku? Verkäufer: Ungefähr zwei Tage. Außerdem gibt es zwei Jahre Garantie. Kundin: Das klingt gut, das nehme ich.",
      speakers: [
        { role: "Kundin", voice: "nova" },
        { role: "Verkäufer", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was kostet das Handy?",
          options: [
            { id: "a", text: "200 Euro" },
            { id: "b", text: "100 Euro" },
            { id: "c", text: "300 Euro" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie lange hält der Akku?",
          options: [
            { id: "a", text: "ungefähr zwei Tage" },
            { id: "b", text: "ungefähr eine Woche" },
            { id: "c", text: "nur ein paar Stunden" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Preis, Eigenschaften und Garantie.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über das Wochenende",
    prompt: "Du hörst ein Gespräch zwischen Kollegen. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Mann: Und, was hast du am Wochenende gemacht? Frau: Ich war am Samstag auf einer Hochzeit, das war wirklich schön. Und du? Mann: Ich bin zu Hause geblieben und habe die Wohnung geputzt. Am Sonntag war ich dann mit den Kindern im Zoo. Frau: Oh, der Zoo ist toll. Das Wetter war ja auch gut.",
      speakers: [
        { role: "Mann", voice: "echo" },
        { role: "Frau", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was hat die Frau am Samstag gemacht?",
          options: [
            { id: "a", text: "Sie war auf einer Hochzeit." },
            { id: "b", text: "Sie war im Zoo." },
            { id: "c", text: "Sie hat geputzt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was hat der Mann am Sonntag gemacht?",
          options: [
            { id: "a", text: "Er war mit den Kindern im Zoo." },
            { id: "b", text: "Er war auf einer Hochzeit." },
            { id: "c", text: "Er hat gearbeitet." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Wer hat was und wann gemacht? Halte die zwei Personen auseinander.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Ansage im Museum",
    prompt: "Du hörst eine Durchsage im Museum. Sind die Sätze richtig oder falsch?",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Liebe Besucher, das Museum schließt heute um siebzehn Uhr. Bitte beenden Sie Ihren Rundgang rechtzeitig. Im Erdgeschoss finden Sie ein Café, das noch bis sechzehn Uhr dreißig geöffnet ist. Das Fotografieren ist im ganzen Museum erlaubt, aber bitte ohne Blitz. Vielen Dank.",
      speakers: [{ role: "Durchsage", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Im Museum darf man fotografieren.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          stem: "Das Café ist bis 17 Uhr geöffnet.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Achte auf Erlaubnis (mit/ohne Blitz) und auf genaue Uhrzeiten.",
  },
  {
    level: "A2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Anruf wegen einer Wohnung",
    prompt: "Du hörst ein Telefongespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      audioScript:
        "Mann: Guten Tag, ich rufe wegen der Wohnung in der Zeitung an. Ist sie noch frei? Frau: Ja, sie ist noch frei. Sie hat zwei Zimmer und kostet sechshundert Euro im Monat. Mann: Kann ich sie mir ansehen? Frau: Gern. Passt Ihnen morgen um siebzehn Uhr? Mann: Ja, morgen um fünf passt mir gut. Frau: Dann bis morgen.",
      speakers: [
        { role: "Mann", voice: "echo" },
        { role: "Frau", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie viel kostet die Wohnung im Monat?",
          options: [
            { id: "a", text: "600 Euro" },
            { id: "b", text: "700 Euro" },
            { id: "c", text: "500 Euro" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann sieht sich der Mann die Wohnung an?",
          options: [
            { id: "a", text: "morgen um 17 Uhr" },
            { id: "b", text: "heute Abend" },
            { id: "c", text: "nächste Woche" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Miete und auf den vereinbarten Termin.",
  },

  // ===================== B1 =====================
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über ein Hobby",
    prompt: "Du hörst ein Interview im Radio. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Moderatorin: Heute spreche ich mit Markus, der ein ungewöhnliches Hobby hat. Markus, was machst du in deiner Freizeit? Markus: Ich sammle alte Postkarten. Angefangen habe ich vor zehn Jahren, als ich auf einem Flohmarkt eine schöne Karte von meiner Heimatstadt gefunden habe. Moderatorin: Wie viele hast du heute? Markus: Über zweitausend. Das Schönste daran ist, dass jede Karte eine kleine Geschichte erzählt. Manche sind über hundert Jahre alt. Moderatorin: Und wo findest du die Karten? Markus: Meistens auf Flohmärkten, aber auch im Internet.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Markus", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie hat Markus mit dem Hobby angefangen?",
          options: [
            { id: "a", text: "Er hat auf einem Flohmarkt eine Karte gefunden." },
            { id: "b", text: "Ein Freund hat ihm Karten geschenkt." },
            { id: "c", text: "Er hat es in der Schule gelernt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was findet Markus am Sammeln am schönsten?",
          options: [
            { id: "a", text: "Jede Karte erzählt eine Geschichte." },
            { id: "b", text: "Man kann damit Geld verdienen." },
            { id: "c", text: "Die Karten sind sehr günstig." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "In Interviews stehen die wichtigen Aussagen in den Antworten des Gastes.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Nachricht über eine Terminänderung",
    prompt: "Du hörst eine Nachricht. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Hallo Frau Richter, hier spricht Paul Meyer von der Firma Bauer. Ich rufe an, weil sich unser Termin am Donnerstag leider verschieben muss. Meine Kollegin ist krank geworden, deshalb können wir das Projekt erst am Montag besprechen. Würde Ihnen Montag um zehn Uhr passen? Bitte rufen Sie mich zurück oder schreiben Sie mir eine kurze E-Mail. Meine Nummer haben Sie ja. Vielen Dank und bis bald.",
      speakers: [{ role: "Paul", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Warum muss der Termin verschoben werden?",
          options: [
            { id: "a", text: "Eine Kollegin ist krank geworden." },
            { id: "b", text: "Herr Meyer ist im Urlaub." },
            { id: "c", text: "Das Projekt ist fertig." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll Frau Richter tun?",
          options: [
            { id: "a", text: "zurückrufen oder eine E-Mail schreiben" },
            { id: "b", text: "zum Büro kommen" },
            { id: "c", text: "nichts tun" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Grund der Änderung und auf die gewünschte Reaktion.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Stadtführung",
    prompt: "Du hörst eine Stadtführerin. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Herzlich willkommen zu unserer Stadtführung. Wir stehen hier vor dem Rathaus, das über vierhundert Jahre alt ist. Gleich gehen wir weiter zur alten Kirche und danach zum Markt, wo Sie eine kurze Pause machen können. Dort gibt es viele kleine Cafés. Bitte bleiben Sie zusammen und passen Sie auf Ihre Taschen auf. Die Führung dauert insgesamt etwa neunzig Minuten. Am Ende bekommen Sie einen kleinen Stadtplan als Andenken.",
      speakers: [{ role: "Führerin", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Wo kann man eine Pause machen?",
          options: [
            { id: "a", text: "am Markt" },
            { id: "b", text: "im Rathaus" },
            { id: "c", text: "in der Kirche" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie lange dauert die Führung?",
          options: [
            { id: "a", text: "etwa 90 Minuten" },
            { id: "b", text: "etwa 30 Minuten" },
            { id: "c", text: "etwa drei Stunden" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre auf den Ablauf und auf Zeitangaben.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Zwei Meinungen über das Auto",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      audioScript:
        "Lena: Ich überlege, mein Auto zu verkaufen. In der Stadt brauche ich es kaum noch. Tarek: Wirklich? Ich finde ein Auto sehr praktisch, besonders mit Kindern oder beim Einkaufen. Lena: Das verstehe ich, aber das Auto kostet viel Geld und steht meistens nur herum. Ich fahre lieber mit dem Rad oder nehme den Bus. Tarek: Für die Umwelt ist das natürlich besser. Vielleicht hast du recht — für die Stadt braucht man wirklich nicht unbedingt ein Auto.",
      speakers: [
        { role: "Lena", voice: "shimmer" },
        { role: "Tarek", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum möchte Lena ihr Auto verkaufen?",
          options: [
            { id: "a", text: "Sie braucht es in der Stadt kaum und es kostet viel Geld." },
            { id: "b", text: "Das Auto ist kaputt." },
            { id: "c", text: "Sie zieht aufs Land." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie reagiert Tarek am Ende?",
          options: [
            { id: "a", text: "Er gibt Lena teilweise recht." },
            { id: "b", text: "Er ist völlig dagegen." },
            { id: "c", text: "Er möchte auch sein Auto verkaufen." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Bei zwei Meinungen: Wie verändert sich die Haltung am Ende?",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Bericht über ein Stadtfest",
    prompt: "Du hörst einen Radiobericht. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Am Wochenende findet wieder das große Stadtfest statt. Auf drei Bühnen gibt es Live-Musik, dazu viele Stände mit Essen aus aller Welt. Neu ist in diesem Jahr ein Bereich nur für Kinder, mit Spielen und einem kleinen Karussell. Das Fest beginnt am Samstag um vierzehn Uhr und endet am Sonntagabend. Der Eintritt ist frei. Die Veranstalter bitten die Besucher, mit Bus und Bahn zu kommen, weil es nur wenige Parkplätze gibt.",
      speakers: [{ role: "Reporter", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Was ist dieses Jahr neu?",
          options: [
            { id: "a", text: "ein Bereich für Kinder" },
            { id: "b", text: "der freie Eintritt" },
            { id: "c", text: "die Live-Musik" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worum bitten die Veranstalter?",
          options: [
            { id: "a", text: "mit Bus und Bahn zu kommen" },
            { id: "b", text: "Eintritt zu bezahlen" },
            { id: "c", text: "Essen mitzubringen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf das Wort „neu“ und auf Bitten der Veranstalter.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über einen Umzug ins Ausland",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      audioScript:
        "Maria: Ich habe gehört, du ziehst nach Kanada? Stimmt das? David: Ja, im Herbst. Ich habe dort eine Stelle als Ingenieur bekommen. Maria: Das ist toll! Aber ist das nicht schwer, so weit weg von der Familie? David: Doch, das ist der schwierigste Teil. Meine Eltern sind traurig. Aber wir telefonieren oft, und sie wollen mich nächstes Jahr besuchen. Maria: Und die Sprache? David: Mein Englisch ist ganz gut, aber ich nehme trotzdem noch einen Kurs, um sicherer zu werden.",
      speakers: [
        { role: "Maria", voice: "nova" },
        { role: "David", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum zieht David nach Kanada?",
          options: [
            { id: "a", text: "Er hat dort eine Arbeitsstelle bekommen." },
            { id: "b", text: "Seine Familie wohnt dort." },
            { id: "c", text: "Er möchte dort studieren." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was findet David am schwierigsten?",
          options: [
            { id: "a", text: "weit weg von der Familie zu sein" },
            { id: "b", text: "die neue Arbeit" },
            { id: "c", text: "das Wetter" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„der schwierigste Teil“ zeigt, was die Person besonders belastet.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Tipps von einem Experten",
    prompt: "Du hörst einen kurzen Beitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Viele von uns sitzen den ganzen Tag am Schreibtisch. Der Sportexperte Herr Frank gibt Tipps: „Stehen Sie jede Stunde einmal auf und bewegen Sie sich ein paar Minuten. Trinken Sie genug Wasser und machen Sie in der Mittagspause einen kurzen Spaziergang. Sie müssen kein teures Fitnessstudio besuchen — schon kleine Bewegungen im Alltag helfen viel. Wer das regelmäßig macht, hat weniger Rückenschmerzen und fühlt sich fitter.“",
      speakers: [{ role: "Beitrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was empfiehlt der Experte?",
          options: [
            { id: "a", text: "jede Stunde aufstehen und sich bewegen" },
            { id: "b", text: "ein teures Fitnessstudio besuchen" },
            { id: "c", text: "den ganzen Tag sitzen bleiben" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was bringt regelmäßige Bewegung laut Experte?",
          options: [
            { id: "a", text: "weniger Rückenschmerzen" },
            { id: "b", text: "mehr Geld" },
            { id: "c", text: "besseren Schlaf am Wochenende" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf konkrete Empfehlungen und ihre Wirkung.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Durchsage am Bahnhof: Streik",
    prompt: "Du hörst eine Durchsage. Sind die Sätze richtig oder falsch?",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Sehr geehrte Fahrgäste, wir informieren Sie über den Streik am morgigen Tag. Von vier Uhr morgens bis zehn Uhr fahren keine Regionalzüge. Die Fernzüge sind nicht betroffen und fahren normal. Wir empfehlen Ihnen, Ihre Reise gut zu planen und sich vorher im Internet über Ihre Verbindung zu informieren. Bereits gekaufte Tickets bleiben gültig und können auch an einem anderen Tag benutzt werden.",
      speakers: [{ role: "Durchsage", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Morgen fahren am Vormittag keine Regionalzüge.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          stem: "Bereits gekaufte Tickets verlieren ihre Gültigkeit.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Unterscheide, was betroffen ist (Regionalzüge) und was nicht (Fernzüge).",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch im Möbelhaus",
    prompt: "Du hörst ein Beratungsgespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      audioScript:
        "Verkäufer: Guten Tag, kann ich Ihnen helfen? Kundin: Ja, ich suche einen Schreibtisch für mein Arbeitszimmer, aber er soll nicht zu groß sein. Verkäufer: Dann empfehle ich Ihnen dieses Modell hier. Es ist kompakt und hat trotzdem zwei Schubladen. Kundin: Sehr schön. Und kann man ihn liefern lassen? Verkäufer: Natürlich. Die Lieferung kostet allerdings zwanzig Euro extra. Wenn Sie ihn selbst abholen, sparen Sie das Geld. Kundin: Dann hole ich ihn lieber selbst ab.",
      speakers: [
        { role: "Verkäufer", voice: "onyx" },
        { role: "Kundin", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was sucht die Kundin?",
          options: [
            { id: "a", text: "einen nicht zu großen Schreibtisch" },
            { id: "b", text: "ein großes Sofa" },
            { id: "c", text: "einen Schrank" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum will die Kundin den Tisch selbst abholen?",
          options: [
            { id: "a", text: "um die Liefergebühr zu sparen" },
            { id: "b", text: "weil keine Lieferung möglich ist" },
            { id: "c", text: "weil sie es eilig hat" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Bedingungen wie „wenn Sie … abholen, sparen Sie …“.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Nachricht über einen Kurs",
    prompt: "Du hörst eine Nachricht. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Guten Tag, hier ist die Sprachschule Lingua. Sie haben sich für unseren Abendkurs Spanisch angemeldet. Wir möchten Ihnen mitteilen, dass der Kurs nicht wie geplant am Montag, sondern erst am Mittwoch beginnt, weil sich noch ein paar Teilnehmer angemeldet haben. Die Uhrzeit bleibt gleich, also achtzehn Uhr dreißig. Bitte bringen Sie zum ersten Termin das Kursbuch mit. Bei Fragen erreichen Sie uns vormittags im Büro.",
      speakers: [{ role: "Ansage", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Was hat sich am Kurs geändert?",
          options: [
            { id: "a", text: "Der Kurs beginnt erst am Mittwoch." },
            { id: "b", text: "Die Uhrzeit ist anders." },
            { id: "c", text: "Der Kurs fällt aus." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll man zum ersten Termin mitbringen?",
          options: [
            { id: "a", text: "das Kursbuch" },
            { id: "b", text: "Geld" },
            { id: "c", text: "einen Laptop" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Was ändert sich, was bleibt gleich? Höre genau.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über das Reisen",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Moderator: Frau Berg, Sie reisen sehr viel. Was ist Ihnen beim Reisen am wichtigsten? Frau Berg: Für mich sind nicht die berühmten Sehenswürdigkeiten das Wichtigste, sondern die Menschen. Ich rede gern mit Einheimischen und probiere das lokale Essen. Moderator: Reisen Sie lieber allein oder mit anderen? Frau Berg: Meistens allein. So bin ich flexibler und lerne leichter neue Leute kennen. Moderator: Haben Sie einen Tipp für unsere Hörer? Frau Berg: Ja: Planen Sie nicht jeden Tag durch. Lassen Sie Platz für Überraschungen.",
      speakers: [
        { role: "Moderator", voice: "echo" },
        { role: "Frau Berg", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was ist Frau Berg beim Reisen am wichtigsten?",
          options: [
            { id: "a", text: "die Menschen und das lokale Essen" },
            { id: "b", text: "die berühmten Sehenswürdigkeiten" },
            { id: "c", text: "günstige Hotels" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welchen Tipp gibt sie?",
          options: [
            { id: "a", text: "nicht jeden Tag durchplanen" },
            { id: "b", text: "immer mit einer Gruppe reisen" },
            { id: "c", text: "nur teure Reisen machen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Kontraste: „nicht …, sondern …“.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Beschwerde im Restaurant",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "essen",
    payload: {
      audioScript:
        "Gast: Entschuldigung, ich warte schon fast vierzig Minuten auf mein Essen. Kellner: Das tut mir wirklich leid. Heute ist sehr viel los und die Küche ist langsam. Gast: Ich habe aber gleich einen Termin und kann nicht mehr lange warten. Kellner: Ich verstehe. Ich frage sofort in der Küche nach. Als Entschuldigung lade ich Sie zu einem Getränk ein. Gast: Das ist nett, danke. Aber wenn das Essen in zehn Minuten nicht kommt, muss ich leider gehen.",
      speakers: [
        { role: "Gast", voice: "onyx" },
        { role: "Kellner", voice: "alloy" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum beschwert sich der Gast?",
          options: [
            { id: "a", text: "Er wartet sehr lange auf sein Essen." },
            { id: "b", text: "Das Essen schmeckt nicht." },
            { id: "c", text: "Der Tisch ist schmutzig." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was bietet der Kellner als Entschuldigung an?",
          options: [
            { id: "a", text: "ein Getränk" },
            { id: "b", text: "ein kostenloses Essen" },
            { id: "c", text: "einen Gutschein" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Höre auf das Problem und auf die angebotene Lösung.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über gesunde Ernährung",
    prompt: "Du hörst den Anfang eines Vortrags. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Guten Abend und herzlich willkommen zu meinem Vortrag über gesunde Ernährung. Viele Menschen glauben, gesund essen sei kompliziert und teuer. Das stimmt aber nicht. Wichtig ist vor allem, viel Gemüse und Obst zu essen und wenig Zucker. Man muss nicht auf alles verzichten — auch ein Stück Kuchen am Sonntag ist in Ordnung. Entscheidend ist das Gleichgewicht über die ganze Woche. In den nächsten Minuten zeige ich Ihnen drei einfache Rezepte, die wenig kosten und schnell gehen.",
      speakers: [{ role: "Vortrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was sagt der Redner über gesunde Ernährung?",
          options: [
            { id: "a", text: "Sie ist nicht kompliziert und nicht teuer." },
            { id: "b", text: "Sie ist nur für reiche Menschen." },
            { id: "c", text: "Man muss auf alles verzichten." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was zeigt der Redner als Nächstes?",
          options: [
            { id: "a", text: "drei einfache, günstige Rezepte" },
            { id: "b", text: "ein Video über Sport" },
            { id: "c", text: "eine Liste mit teuren Produkten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Am Anfang eines Vortrags wird oft gesagt, was noch kommt.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über die Wohnungssuche",
    prompt: "Du hörst ein Gespräch zwischen Freunden. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      audioScript:
        "Nina: Und, hast du schon eine neue Wohnung gefunden? Jonas: Noch nicht, es ist wirklich schwierig. Die Wohnungen im Zentrum sind viel zu teuer. Nina: Hast du auch außerhalb der Stadt gesucht? Jonas: Ja, dort sind die Mieten günstiger, aber dann brauche ich länger zur Arbeit. Nina: Vielleicht ist das trotzdem besser. Mit dem Geld, das du sparst, kannst du ein Monatsticket für den Zug kaufen. Jonas: Da hast du recht, das überlege ich mir.",
      speakers: [
        { role: "Nina", voice: "shimmer" },
        { role: "Jonas", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum hat Jonas noch keine Wohnung im Zentrum?",
          options: [
            { id: "a", text: "Die Wohnungen dort sind zu teuer." },
            { id: "b", text: "Es gibt dort keine Wohnungen." },
            { id: "c", text: "Er möchte nicht im Zentrum wohnen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was schlägt Nina vor?",
          options: [
            { id: "a", text: "außerhalb zu wohnen und ein Zugticket zu kaufen" },
            { id: "b", text: "bei den Eltern zu wohnen" },
            { id: "c", text: "die Arbeit zu wechseln" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Vor- und Nachteile werden abgewogen — achte auf den Rat am Ende.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Wettervorhersage für das Wochenende",
    prompt: "Du hörst die Wettervorhersage. Sind die Sätze richtig oder falsch?",
    difficulty: "FOUNDATION",
    topicTag: "wetter",
    payload: {
      audioScript:
        "Und nun das Wetter für das Wochenende. Am Samstag wird es freundlich und warm, mit Temperaturen bis zu fünfundzwanzig Grad — ideal für einen Ausflug. Am Sonntag ändert sich das Wetter: Es wird deutlich kühler und am Nachmittag kommen Wolken und Regen. Nehmen Sie also für Sonntag eine Jacke mit. In der nächsten Woche bleibt es wechselhaft.",
      speakers: [{ role: "Wetter", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Am Samstag wird es warm und freundlich.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          stem: "Am Sonntag bleibt es den ganzen Tag sonnig.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Vergleiche die beiden Tage genau.",
  },
  {
    level: "B1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Mitteilung am Arbeitsplatz",
    prompt: "Du hörst eine Mitteilung. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Liebe Kolleginnen und Kollegen, eine kurze Information: Nächste Woche wird das Computersystem erneuert. Deshalb bleibt das Büro am Freitag geschlossen und wir arbeiten alle im Homeoffice. Bitte nehmen Sie am Donnerstagabend Ihren Laptop mit nach Hause. Am Montag funktioniert dann hoffentlich alles wieder normal. Bei technischen Problemen wenden Sie sich bitte an die IT-Abteilung. Vielen Dank für Ihr Verständnis.",
      speakers: [{ role: "Mitteilung", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Warum bleibt das Büro am Freitag geschlossen?",
          options: [
            { id: "a", text: "Das Computersystem wird erneuert." },
            { id: "b", text: "Es ist ein Feiertag." },
            { id: "c", text: "Es wird renoviert." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was sollen die Mitarbeiter am Donnerstag tun?",
          options: [
            { id: "a", text: "den Laptop mit nach Hause nehmen" },
            { id: "b", text: "früher nach Hause gehen" },
            { id: "c", text: "die IT-Abteilung anrufen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf den Grund und auf die Anweisung an die Mitarbeiter.",
  },

  // ===================== B2 =====================
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Experteninterview über Schlaf",
    prompt: "Du hörst ein Radiointerview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Moderatorin: Herr Dr. Lang, viele Menschen klagen über schlechten Schlaf. Was raten Sie? Dr. Lang: Zunächst sollte man unterscheiden: Gelegentlich schlecht zu schlafen ist völlig normal und kein Grund zur Sorge. Problematisch wird es erst, wenn die Schlafstörungen über Wochen anhalten. Moderatorin: Was sind die häufigsten Ursachen? Dr. Lang: Sehr oft ist es Stress. Aber auch unsere Gewohnheiten spielen eine Rolle — etwa, dass wir abends lange auf Bildschirme schauen. Mein wichtigster Rat ist eigentlich ganz banal: regelmäßige Schlafzeiten. Der Körper liebt Routine. Wer jeden Tag zur gleichen Zeit ins Bett geht, schläft langfristig deutlich besser.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Dr. Lang", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wann sind Schlafprobleme laut Dr. Lang ernst zu nehmen?",
          options: [
            { id: "a", text: "wenn sie über Wochen anhalten" },
            { id: "b", text: "schon nach einer schlechten Nacht" },
            { id: "c", text: "nie, sie sind immer harmlos" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist sein wichtigster Rat?",
          options: [
            { id: "a", text: "regelmäßige Schlafzeiten einzuhalten" },
            { id: "b", text: "Medikamente zu nehmen" },
            { id: "c", text: "tagsüber zu schlafen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf Differenzierungen: „normal“ versus „problematisch“.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über die autofreie Innenstadt",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      audioScript:
        "Frau Berg: Ich bin absolut dafür, die Innenstadt für Autos zu sperren. Die Luft würde besser, und die Stadt wäre lebenswerter. Herr Klein: Im Prinzip verstehe ich das, aber wir dürfen die Geschäfte nicht vergessen. Viele Kunden kommen mit dem Auto. Frau Berg: Das ist ein verbreiteter Irrtum. Studien zeigen, dass Fußgänger und Radfahrer am Ende sogar mehr einkaufen. Herr Klein: Das mag stimmen, trotzdem brauchen wir gute Alternativen — etwa mehr Busse und Parkplätze am Rand. Frau Berg: Da bin ich ganz Ihrer Meinung. Ohne ein gutes Gesamtkonzept funktioniert es nicht.",
      speakers: [
        { role: "Frau Berg", voice: "nova" },
        { role: "Herr Klein", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was ist Herrn Kleins Hauptsorge?",
          options: [
            { id: "a", text: "dass die Geschäfte Kunden verlieren könnten" },
            { id: "b", text: "dass die Luft schlechter wird" },
            { id: "c", text: "dass es zu viele Radfahrer gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worauf einigen sich beide am Ende?",
          options: [
            { id: "a", text: "dass es ein gutes Gesamtkonzept braucht" },
            { id: "b", text: "dass alles so bleiben soll" },
            { id: "c", text: "dass Autos nie verboten werden dürfen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Verfolge, wie sich die Positionen annähern: „Da bin ich ganz Ihrer Meinung.“",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über Konsum",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      audioScript:
        "Meine Damen und Herren, wir kaufen heute mehr als je zuvor — und werfen auch mehr weg. Besonders deutlich zeigt sich das bei Kleidung. Im Durchschnitt trägt man ein Kleidungsstück nur noch wenige Male, bevor es im Müll landet. Das ist nicht nur eine Frage des Geldes, sondern vor allem ein ökologisches Problem, denn die Herstellung verbraucht enorme Mengen an Wasser und Energie. Doch ich möchte heute nicht den moralischen Zeigefinger heben. Stattdessen schlage ich einen einfachen Perspektivwechsel vor: Wer Kleidung als etwas Wertvolles betrachtet, kauft automatisch bewusster — und hat am Ende sogar mehr Freude daran.",
      speakers: [{ role: "Vortrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Welches Problem nennt der Redner vor allem?",
          options: [
            { id: "a", text: "ein ökologisches Problem durch hohen Konsum" },
            { id: "b", text: "dass Kleidung zu teuer ist" },
            { id: "c", text: "dass es zu wenig Geschäfte gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was schlägt der Redner vor?",
          options: [
            { id: "a", text: "Kleidung bewusster als etwas Wertvolles zu sehen" },
            { id: "b", text: "gar keine Kleidung mehr zu kaufen" },
            { id: "c", text: "mehr und billiger einzukaufen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Redner lehnt den „moralischen Zeigefinger“ ab und schlägt etwas anderes vor.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview: Berufswechsel mit 40",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Moderator: Frau Solak, Sie waren fünfzehn Jahre Anwältin und sind jetzt Köchin. Wie kam es dazu? Frau Solak: Ehrlich gesagt war ich in meinem alten Beruf nicht mehr glücklich. Ich habe gut verdient, aber die Arbeit hat mich innerlich leer gelassen. Moderator: War der Wechsel schwierig? Frau Solak: Sehr. Vor allem finanziell musste ich kürzertreten, und viele in meinem Umfeld haben den Schritt nicht verstanden. Aber ich habe es keinen Tag bereut. Moderator: Was würden Sie anderen raten? Frau Solak: Man sollte den Mut zur Veränderung nicht zu lange aufschieben. Es ist nie zu spät, aber es wird auch nicht leichter, je länger man wartet.",
      speakers: [
        { role: "Moderator", voice: "alloy" },
        { role: "Frau Solak", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum hat Frau Solak ihren Beruf gewechselt?",
          options: [
            { id: "a", text: "Sie war im alten Beruf nicht mehr glücklich." },
            { id: "b", text: "Sie hat zu wenig verdient." },
            { id: "c", text: "Sie wurde entlassen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was rät sie anderen?",
          options: [
            { id: "a", text: "den Mut zur Veränderung nicht zu lange aufzuschieben" },
            { id: "b", text: "niemals den Beruf zu wechseln" },
            { id: "c", text: "immer auf das Geld zu achten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf die Begründung des Wechsels und auf den abschließenden Rat.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Radiobeitrag über das Ehrenamt",
    prompt: "Du hörst einen Radiobeitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Ohne ehrenamtliche Helfer würde in unserer Gesellschaft vieles nicht funktionieren — von der Feuerwehr auf dem Land bis zur Hausaufgabenhilfe für Kinder. Interessant ist, dass jüngere Menschen sich heute zwar engagieren, aber anders als früher. Statt sich für viele Jahre fest an einen Verein zu binden, bevorzugen sie kürzere, flexible Projekte. Vereine, die das ignorieren, haben es schwer, Nachwuchs zu finden. Erfolgreich sind dagegen Organisationen, die auch kurzfristige Hilfe ermöglichen. Die Bereitschaft zu helfen ist also keineswegs gesunken — sie hat nur ihre Form verändert.",
      speakers: [{ role: "Beitrag", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Wie engagieren sich jüngere Menschen heute?",
          options: [
            { id: "a", text: "eher in kürzeren, flexiblen Projekten" },
            { id: "b", text: "gar nicht mehr" },
            { id: "c", text: "nur in festen, langjährigen Vereinen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist die Kernaussage des Beitrags?",
          options: [
            { id: "a", text: "Die Hilfsbereitschaft hat sich nicht verringert, sondern verändert." },
            { id: "b", text: "Niemand engagiert sich mehr ehrenamtlich." },
            { id: "c", text: "Nur ältere Menschen helfen noch." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keineswegs gesunken — nur die Form verändert“ ist die Pointe.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über Work-Life-Balance",
    prompt: "Du hörst ein Gespräch zwischen Kollegen. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Tim: Sag mal, wie schaffst du das eigentlich alles — Job, zwei Kinder, und du wirkst trotzdem entspannt? Sara: Das Geheimnis ist, dass ich gelernt habe, auch mal Nein zu sagen. Früher habe ich jede Zusatzaufgabe übernommen und mich völlig überfordert. Tim: Aber ist das nicht riskant, im Job Nein zu sagen? Sara: Im Gegenteil. Wer ständig Ja sagt, liefert am Ende schlechtere Arbeit, weil er zu viel auf einmal macht. Mein Chef schätzt mich heute mehr, weil meine Ergebnisse besser sind. Tim: Das klingt eigentlich logisch. Vielleicht sollte ich das auch mal ausprobieren.",
      speakers: [
        { role: "Tim", voice: "onyx" },
        { role: "Sara", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Sara ihr „Geheimnis“?",
          options: [
            { id: "a", text: "dass sie gelernt hat, auch mal Nein zu sagen" },
            { id: "b", text: "dass sie weniger arbeitet als früher" },
            { id: "c", text: "dass sie keine Kinder mehr betreut" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum schätzt der Chef sie heute mehr?",
          options: [
            { id: "a", text: "weil ihre Ergebnisse besser sind" },
            { id: "b", text: "weil sie jede Aufgabe annimmt" },
            { id: "c", text: "weil sie länger arbeitet" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf den scheinbaren Widerspruch: Nein sagen führt zu besserer Arbeit.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Eine Durchsage zur Renovierung der Bibliothek",
    prompt: "Du hörst eine Durchsage. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Liebe Besucherinnen und Besucher, wir möchten Sie darüber informieren, dass unsere Bibliothek ab nächstem Monat für etwa acht Wochen umgebaut wird. Während dieser Zeit bleibt das Gebäude geschlossen. Bereits ausgeliehene Bücher müssen Sie aber nicht zurückbringen — alle Leihfristen werden automatisch verlängert. Außerdem steht Ihnen während des Umbaus unser digitales Angebot wie gewohnt zur Verfügung. Wir bitten um Ihr Verständnis und freuen uns darauf, Sie in den neuen, moderneren Räumen begrüßen zu dürfen.",
      speakers: [{ role: "Durchsage", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Während des Umbaus muss man ausgeliehene Bücher sofort zurückbringen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          stem: "Das digitale Angebot bleibt während des Umbaus nutzbar.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Achte genau auf Verneinungen: „müssen Sie aber nicht zurückbringen“.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über digitales Lernen",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Moderatorin: Frau Roth, ersetzen Lern-Apps bald den klassischen Unterricht? Frau Roth: Nein, das glaube ich nicht. Apps sind ein hervorragendes Werkzeug, gerade zum Wiederholen von Vokabeln oder Grammatik. Aber sie ersetzen nicht den Menschen. Moderatorin: Warum nicht? Frau Roth: Weil Sprache vor allem Kommunikation ist. Eine App kann mir nicht widersprechen, mich nicht zum Lachen bringen, nicht spüren, wann ich frustriert bin. Das kann nur ein Lehrer oder ein Gesprächspartner. Am wirksamsten ist deshalb eine Kombination: die App für das Üben zu Hause, der Unterricht für das echte Sprechen.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Frau Roth", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was meint Frau Roth zu Lern-Apps?",
          options: [
            { id: "a", text: "Sie sind ein gutes Werkzeug, ersetzen aber den Menschen nicht." },
            { id: "b", text: "Sie werden den Unterricht bald ersetzen." },
            { id: "c", text: "Sie sind völlig nutzlos." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was hält sie für am wirksamsten?",
          options: [
            { id: "a", text: "eine Kombination aus App und Unterricht" },
            { id: "b", text: "nur die App" },
            { id: "c", text: "nur das Auswendiglernen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf die Begründung („weil Sprache Kommunikation ist“).",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über Reisen und Umwelt",
    prompt: "Du hörst einen Radiobeitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Reisen bildet, heißt es — doch es belastet auch die Umwelt, vor allem durch das Fliegen. Muss man deshalb auf Reisen verzichten? Die meisten Experten sagen: nein, aber bewusster reisen. Konkret bedeutet das: seltener, dafür länger an einem Ort bleiben, statt für ein Wochenende um die halbe Welt zu fliegen. Auch die Bahn ist für viele Ziele eine gute Alternative. Wer einmal im Zug durch die Landschaft gefahren ist, weiß, dass auch die Anreise ein Teil der Reise sein kann. Der Trend zum sogenannten ‚langsamen Reisen‘ wächst — nicht aus Verzicht, sondern weil viele dabei sogar mehr erleben.",
      speakers: [{ role: "Beitrag", voice: "echo" }],
      questions: [
        {
          id: "q1",
          stem: "Was empfehlen die Experten?",
          options: [
            { id: "a", text: "bewusster reisen, zum Beispiel seltener und länger" },
            { id: "b", text: "gar nicht mehr zu reisen" },
            { id: "c", text: "möglichst oft kurz wegzufliegen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum wächst der Trend zum „langsamen Reisen“?",
          options: [
            { id: "a", text: "weil viele dabei sogar mehr erleben" },
            { id: "b", text: "weil Fliegen verboten wurde" },
            { id: "c", text: "weil es immer billiger ist" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht aus Verzicht, sondern weil …“ nennt den eigentlichen Grund.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über soziale Medien",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Lena: Ich habe meine Social-Media-Apps vom Handy gelöscht und fühle mich viel besser. Max: Echt? Ich könnte das nicht. Ich brauche das für meine Arbeit und um mit Freunden in Kontakt zu bleiben. Lena: Das verstehe ich. Es geht mir auch nicht darum, alles schlechtzureden. Aber ich habe gemerkt, wie viel Zeit ich sinnlos vertrödelt habe. Max: Da hast du recht. Vielleicht ist nicht die App das Problem, sondern wie man sie benutzt. Lena: Genau. Ich würde sagen: Wer es bewusst einsetzt, profitiert. Wer nur aus Langeweile scrollt, verliert.",
      speakers: [
        { role: "Lena", voice: "nova" },
        { role: "Max", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum nutzt Max soziale Medien weiterhin?",
          options: [
            { id: "a", text: "für seine Arbeit und den Kontakt zu Freunden" },
            { id: "b", text: "nur aus Langeweile" },
            { id: "c", text: "weil Lena es ihm empfohlen hat" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worauf einigen sich beide?",
          options: [
            { id: "a", text: "Es kommt darauf an, wie man die Apps benutzt." },
            { id: "b", text: "Soziale Medien sind immer schlecht." },
            { id: "c", text: "Man sollte alle Apps löschen." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Beide nähern sich an: „Nicht die App, sondern wie man sie benutzt.“",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Vorlesung über Sprachen",
    prompt: "Du hörst den Anfang einer Vorlesung. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Guten Tag. Heute beschäftigen wir uns mit einer erstaunlichen Tatsache: Etwa alle zwei Wochen stirbt irgendwo auf der Welt eine Sprache aus. Mit jeder Sprache geht nicht nur ein Kommunikationsmittel verloren, sondern auch ein einzigartiges Wissen über die Welt. Manche Sprachen kennen zum Beispiel Dutzende Wörter für verschiedene Arten von Schnee oder Wind. Geht die Sprache verloren, verschwindet auch dieses feine Wissen. In dieser Vorlesung werden wir uns ansehen, warum Sprachen aussterben und was man dagegen tun kann. Beginnen wir mit der Frage: Was genau bedeutet es überhaupt, dass eine Sprache lebt?",
      speakers: [{ role: "Dozent", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was geht laut Vortrag mit einer Sprache verloren?",
          options: [
            { id: "a", text: "ein einzigartiges Wissen über die Welt" },
            { id: "b", text: "nur ein paar Wörter" },
            { id: "c", text: "nichts Wichtiges" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Womit beginnt der Dozent als Nächstes?",
          options: [
            { id: "a", text: "mit der Frage, was es bedeutet, dass eine Sprache lebt" },
            { id: "b", text: "mit einer Prüfung" },
            { id: "c", text: "mit einer Pause" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Am Ende kündigt der Dozent an, womit es weitergeht.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beratungsgespräch in der Bank",
    prompt: "Du hörst ein Beratungsgespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Berater: Sie möchten also etwas Geld zur Seite legen. Wie viel Risiko sind Sie bereit einzugehen? Kundin: Ehrlich gesagt möglichst wenig. Ich möchte das Geld in ein paar Jahren für eine Wohnung verwenden. Berater: Dann rate ich Ihnen von riskanten Anlagen ab. Bei einem so kurzen Zeitraum ist Sicherheit wichtiger als eine hohe Rendite. Kundin: Das sehe ich auch so. Gibt es trotzdem eine Möglichkeit, ein bisschen mehr als auf dem normalen Konto zu bekommen? Berater: Ja, ein Festgeldkonto wäre für Sie passend. Es bringt etwas mehr Zinsen, und Ihr Geld bleibt sicher.",
      speakers: [
        { role: "Berater", voice: "echo" },
        { role: "Kundin", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wofür möchte die Kundin das Geld sparen?",
          options: [
            { id: "a", text: "für eine Wohnung" },
            { id: "b", text: "für ein Auto" },
            { id: "c", text: "für eine Reise" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was empfiehlt der Berater?",
          options: [
            { id: "a", text: "ein sicheres Festgeldkonto" },
            { id: "b", text: "eine riskante Anlage mit hoher Rendite" },
            { id: "c", text: "das Geld bar zu Hause zu lassen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf den Zusammenhang: kurzer Zeitraum — Sicherheit wichtiger.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Stadtentwicklung",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      audioScript:
        "Moderator: Frau Architektin, wie sieht die Stadt der Zukunft aus? Frau Vogel: Vor allem grüner und ruhiger. Wir haben jahrzehntelang Städte vor allem für Autos gebaut. Jetzt denken wir um — mehr Platz für Menschen, Bäume und Begegnung. Moderator: Klingt teuer. Frau Vogel: Kurzfristig ja. Aber langfristig sparen Städte sogar Geld, etwa bei den Gesundheitskosten, weil die Menschen sich mehr bewegen und die Luft besser ist. Der größte Widerstand kommt übrigens nicht von den Bürgern, sondern oft aus der Verwaltung — aus Angst vor Veränderung. Dabei wollen die meisten Menschen genau das: eine Stadt zum Leben, nicht nur zum Durchfahren.",
      speakers: [
        { role: "Moderator", voice: "alloy" },
        { role: "Frau Vogel", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie soll die Stadt der Zukunft laut Frau Vogel sein?",
          options: [
            { id: "a", text: "grüner und ruhiger, mehr Platz für Menschen" },
            { id: "b", text: "vor allem für Autos gebaut" },
            { id: "c", text: "größer und lauter" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Von wem kommt laut Frau Vogel der größte Widerstand?",
          options: [
            { id: "a", text: "oft aus der Verwaltung" },
            { id: "b", text: "von den meisten Bürgern" },
            { id: "c", text: "von den Architekten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht von den Bürgern, sondern aus der Verwaltung“ — achte auf den Kontrast.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Eine Mitteilung über ein neues Arbeitszeitmodell",
    prompt: "Du hörst eine Mitteilung. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Liebe Kolleginnen und Kollegen, ab dem nächsten Quartal führen wir ein neues, flexibleres Arbeitszeitmodell ein. Sie können künftig selbst entscheiden, wann Sie mit der Arbeit beginnen, solange Sie zwischen zehn und fünfzehn Uhr erreichbar sind. Die Gesamtzahl der Stunden bleibt dabei unverändert. Wichtig ist: Das neue Modell ist freiwillig. Wer lieber zu festen Zeiten arbeitet, kann das selbstverständlich weiterhin tun. Bei Fragen wenden Sie sich bitte an die Personalabteilung. Wir hoffen, dass dieses Modell vielen von Ihnen mehr Freiheit im Alltag ermöglicht.",
      speakers: [{ role: "Mitteilung", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Die Gesamtzahl der Arbeitsstunden ändert sich durch das neue Modell.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          stem: "Das neue Arbeitszeitmodell ist freiwillig.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Achte darauf, was sich ändert und was gleich bleibt.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Gespräch über ehrenamtliche Arbeit",
    prompt: "Du hörst ein Gespräch. Wähle für jede Frage die richtige Antwort.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Paul: Du arbeitest doch ehrenamtlich bei der Tafel, oder? Lohnt sich das? Nadia: Lohnen ist das falsche Wort, ich verdiene ja nichts. Aber es gibt mir sehr viel zurück. Paul: Inwiefern? Nadia: Ich treffe Menschen, die ich sonst nie kennenlernen würde, und ich habe das Gefühl, wirklich gebraucht zu werden. Das ist im Büroalltag oft anders. Paul: Aber kostet das nicht viel Zeit? Nadia: Doch, ein paar Stunden pro Woche. Aber ich plane es fest ein, wie einen Termin. Sonst würde es im Alltag immer untergehen.",
      speakers: [
        { role: "Paul", voice: "onyx" },
        { role: "Nadia", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was gibt Nadia die ehrenamtliche Arbeit?",
          options: [
            { id: "a", text: "das Gefühl, gebraucht zu werden, und neue Kontakte" },
            { id: "b", text: "vor allem Geld" },
            { id: "c", text: "einen besseren Job im Büro" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie schafft Nadia es, die Zeit dafür zu finden?",
          options: [
            { id: "a", text: "Sie plant es fest ein wie einen Termin." },
            { id: "b", text: "Sie arbeitet dafür weniger im Büro." },
            { id: "c", text: "Sie macht es nur, wenn sie zufällig Zeit hat." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Lohnen ist das falsche Wort“ — höre, was Nadia stattdessen meint.",
  },
  {
    level: "B2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über gesunde Städte",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Eine spannende Frage lautet: Macht die Stadt, in der wir leben, uns gesünder oder kränker? Die Antwort hängt stark davon ab, wie die Stadt gebaut ist. Gibt es Parks, sichere Radwege und kurze Wege zu Geschäften, bewegen sich die Menschen mehr — ganz automatisch, ohne dass sie sich extra anstrengen müssen. In autogerechten Städten dagegen nimmt man für jede Kleinigkeit das Auto. Das Spannende ist also: Gesundheit ist nicht nur eine Frage des persönlichen Willens, sondern auch der Umgebung. Wer eine gesunde Bevölkerung will, muss bei der Stadtplanung anfangen, nicht erst beim einzelnen Menschen.",
      speakers: [{ role: "Vortrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Wovon hängt laut Vortrag die Gesundheit der Stadtbewohner ab?",
          options: [
            { id: "a", text: "davon, wie die Stadt gebaut ist" },
            { id: "b", text: "nur vom Willen des Einzelnen" },
            { id: "c", text: "vom Wetter" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was folgt für den Redner daraus?",
          options: [
            { id: "a", text: "Man muss bei der Stadtplanung anfangen." },
            { id: "b", text: "Jeder ist allein für seine Gesundheit verantwortlich." },
            { id: "c", text: "Städte sind grundsätzlich ungesund." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die Schlussfolgerung steht am Ende: „muss bei der Stadtplanung anfangen“.",
  },

  // ===================== C1 =====================
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über das Gedächtnis",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Wir stellen uns das Gedächtnis gern wie eine Festplatte vor, auf der Erlebnisse unverändert gespeichert werden. Diese Vorstellung ist jedoch grundfalsch. Jede Erinnerung wird beim Abrufen neu zusammengesetzt — und dabei verändert. Das klingt zunächst wie ein Mangel, ist aber in Wahrheit ein Vorteil. Ein starres Gedächtnis könnte sich nicht an neue Situationen anpassen. Interessant wird es, wenn wir bedenken, was das für Augenzeugenberichte bedeutet. Vor Gericht gilt die Aussage eines Zeugen oft als besonders zuverlässig. Die Forschung zeigt jedoch, dass gerade solche Erinnerungen erstaunlich leicht zu beeinflussen sind, etwa durch die Art, wie eine Frage gestellt wird. Das sollte uns nicht misstrauisch gegen jede Erinnerung machen, wohl aber bescheidener im Umgang mit unserer vermeintlichen Gewissheit.",
      speakers: [{ role: "Dozentin", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Warum ist das veränderliche Gedächtnis laut Vortrag ein Vorteil?",
          options: [
            { id: "a", text: "weil ein starres Gedächtnis sich nicht anpassen könnte" },
            { id: "b", text: "weil man dann alles vergisst" },
            { id: "c", text: "weil es mehr speichern kann" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Schlussfolgerung zieht die Dozentin für Augenzeugen?",
          options: [
            { id: "a", text: "Man sollte bescheidener mit der eigenen Gewissheit umgehen." },
            { id: "b", text: "Zeugenaussagen sind immer völlig zuverlässig." },
            { id: "c", text: "Man sollte keiner Erinnerung trauen." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht …, wohl aber …“ formuliert eine differenzierte Schlussfolgerung.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Glücksforschung",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Moderator: Frau Professor, macht Geld glücklich? Prof. Weiss: Eine berühmte Frage. Die Antwort lautet: bis zu einem gewissen Punkt ja. Wer aus echter Not herauskommt, gewinnt deutlich an Lebenszufriedenheit. Doch jenseits eines mittleren Einkommens bringt mehr Geld kaum noch zusätzliches Glück. Moderator: Woran liegt das? Prof. Weiss: Vor allem an der Gewöhnung. Wir passen uns erstaunlich schnell an einen höheren Lebensstandard an und nehmen ihn bald als selbstverständlich wahr. Moderator: Was macht denn dann glücklich? Prof. Weiss: Was sich beständig als wichtig erweist, sind tragfähige Beziehungen und das Gefühl, das eigene Leben selbst gestalten zu können. Das ist keine neue Erkenntnis — aber eine, die wir im Alltag immer wieder vergessen.",
      speakers: [
        { role: "Moderator", voice: "echo" },
        { role: "Prof. Weiss", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was sagt Prof. Weiss über Geld und Glück?",
          options: [
            { id: "a", text: "Geld hilft bis zu einem mittleren Einkommen, danach kaum noch." },
            { id: "b", text: "Mehr Geld macht immer glücklicher." },
            { id: "c", text: "Geld spielt überhaupt keine Rolle." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was macht laut Prof. Weiss beständig glücklich?",
          options: [
            { id: "a", text: "tragfähige Beziehungen und Selbstbestimmung" },
            { id: "b", text: "ein möglichst hoher Lebensstandard" },
            { id: "c", text: "ständig neue Anschaffungen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achte auf die Einschränkung „bis zu einem gewissen Punkt“.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über das Grundeinkommen",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Herr Frei: Ein bedingungsloses Grundeinkommen würde den Menschen die Existenzangst nehmen und echte Freiheit schaffen. Frau Conrad: Das klingt verlockend, aber ich bin skeptisch. Wer finanziert das auf Dauer? Und arbeiten dann überhaupt noch genug Menschen? Herr Frei: Versuche deuten darauf hin, dass die meisten weiterarbeiten — nur vielleicht in Tätigkeiten, die ihnen sinnvoller erscheinen. Frau Conrad: Solche Versuche sind aber klein und kurz. Ob sich das auf eine ganze Volkswirtschaft übertragen lässt, ist offen. Herr Frei: Da gebe ich Ihnen recht. Ich behaupte ja nicht, dass alle Fragen geklärt sind. Aber wir sollten zumindest ernsthaft darüber nachdenken, statt es vorschnell abzutun.",
      speakers: [
        { role: "Herr Frei", voice: "onyx" },
        { role: "Frau Conrad", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was ist Frau Conrads Hauptbedenken?",
          options: [
            { id: "a", text: "die Finanzierung und ob noch genug gearbeitet wird" },
            { id: "b", text: "dass es den Menschen die Freiheit nimmt" },
            { id: "c", text: "dass es zu wenig untersucht wurde, um darüber zu reden" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie endet die Position von Herrn Frei?",
          options: [
            { id: "a", text: "Er räumt offene Fragen ein, will aber ernsthaft darüber nachdenken." },
            { id: "b", text: "Er behauptet, alle Fragen seien geklärt." },
            { id: "c", text: "Er gibt seine Position ganz auf." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Beide nuancieren: „Da gebe ich Ihnen recht … Aber …“.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über die Kunst des Zuhörens",
    prompt: "Du hörst einen Radiobeitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Wir verbringen einen großen Teil unseres Tages mit Kommunikation, doch erstaunlich wenig davon mit echtem Zuhören. Meist warten wir nur darauf, selbst zu Wort zu kommen, und überlegen schon unsere Antwort, während der andere noch spricht. Echtes Zuhören ist anstrengender, als man denkt: Es verlangt, die eigene Meinung für einen Moment zurückzustellen und auch das wahrzunehmen, was nicht ausgesprochen wird. Studien zeigen, dass sich Menschen, denen wirklich zugehört wird, nicht nur verstandener fühlen, sondern ihre eigenen Gedanken auch klarer ordnen können. Zuhören ist also kein passives Schweigen, sondern eine aktive, ja schöpferische Tätigkeit — eine, die in unserer auf Selbstdarstellung ausgerichteten Zeit selten geworden ist.",
      speakers: [{ role: "Beitrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Warum ist echtes Zuhören laut Beitrag anstrengend?",
          options: [
            { id: "a", text: "Man muss die eigene Meinung zurückstellen und auf Ungesagtes achten." },
            { id: "b", text: "Man muss möglichst schnell antworten." },
            { id: "c", text: "Man muss laut sprechen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie beschreibt der Beitrag das Zuhören?",
          options: [
            { id: "a", text: "als aktive, schöpferische Tätigkeit" },
            { id: "b", text: "als passives Schweigen" },
            { id: "c", text: "als überflüssig" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„kein …, sondern …“ stellt eine verbreitete Annahme richtig.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Stadtnatur",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      audioScript:
        "Moderatorin: Herr Dr. Kern, brauchen Städte wirklich mehr Natur, oder ist das nur ein schöner Wunsch? Dr. Kern: Es ist weit mehr als das. Grünflächen kühlen die Stadt im Sommer, binden Schadstoffe und fördern nachweislich die psychische Gesundheit. Moderatorin: Aber Platz in Städten ist teuer. Dr. Kern: Das stimmt, und genau hier liegt der Denkfehler. Wir betrachten Natur oft als Luxus, den man sich erst leisten kann, wenn alles andere erledigt ist. Dabei ist sie eine Investition, die sich rechnet — etwa bei den Gesundheitskosten. Moderatorin: Sie sehen das also nicht als romantische Idee. Dr. Kern: Nein, im Gegenteil. Es ist eine ausgesprochen nüchterne, ökonomische Überlegung.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Dr. Kern", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Worin sieht Dr. Kern den „Denkfehler“?",
          options: [
            { id: "a", text: "Natur als Luxus zu sehen, statt als lohnende Investition" },
            { id: "b", text: "dass Natur die Stadt nicht kühlt" },
            { id: "c", text: "dass Platz in Städten billig ist" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie versteht Dr. Kern sein eigenes Argument?",
          options: [
            { id: "a", text: "als nüchterne ökonomische Überlegung" },
            { id: "b", text: "als rein romantische Idee" },
            { id: "c", text: "als unwichtig" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Dr. Kern wehrt die Einordnung als „romantisch“ ausdrücklich ab.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über Entscheidungen",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      audioScript:
        "Wir glauben gern, dass wir unsere Entscheidungen nach reiflicher Überlegung treffen. Die Forschung legt etwas Unbequemeres nahe: Oft entscheiden wir zuerst aus dem Bauch heraus und liefern die Gründe erst hinterher nach. Das heißt nicht, dass Intuition schlecht ist — bei vertrauten Problemen ist sie oft erstaunlich treffsicher. Riskant wird es jedoch in neuen, komplexen Situationen, in denen unsere Erfahrung in die Irre führt. Die eigentliche Kunst besteht deshalb nicht darin, der Intuition blind zu folgen oder sie pauschal zu misstrauen, sondern zu erkennen, in welcher Art von Situation man sich gerade befindet. Genau diese Unterscheidung aber fällt uns besonders schwer.",
      speakers: [{ role: "Dozent", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was legt die Forschung laut Vortrag nahe?",
          options: [
            { id: "a", text: "Wir entscheiden oft intuitiv und begründen es erst hinterher." },
            { id: "b", text: "Wir entscheiden immer rein rational." },
            { id: "c", text: "Intuition ist grundsätzlich schlecht." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin besteht laut Redner die eigentliche Kunst?",
          options: [
            { id: "a", text: "zu erkennen, in welcher Art Situation man sich befindet" },
            { id: "b", text: "der Intuition immer blind zu folgen" },
            { id: "c", text: "Intuition immer zu misstrauen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„weder … noch …, sondern …“ formuliert die differenzierte These.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Ein Feature über Freiwilligenarbeit",
    prompt: "Du hörst ein Radio-Feature. Sind die Sätze richtig oder falsch?",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Lange galt das Ehrenamt als Domäne der älteren Generation. Dieses Bild ist überholt. Zwar engagieren sich ältere Menschen weiterhin stark, doch die Art des Engagements hat sich generationsübergreifend gewandelt. Statt lebenslanger Mitgliedschaft in einem Verein bevorzugen viele heute projektbezogene, zeitlich begrenzte Einsätze. Organisationen, die das erkannt haben, finden leichter Helfer. Bemerkenswert ist außerdem, dass digitales Engagement zunimmt — etwa Übersetzungen oder Beratung, die man von zu Hause aus leisten kann. Die oft beklagte sinkende Hilfsbereitschaft lässt sich in den Daten übrigens nicht bestätigen. Was sich ändert, ist nicht der Wille zu helfen, sondern die Form, in der man es tut.",
      speakers: [{ role: "Feature", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Laut Feature ist die Hilfsbereitschaft insgesamt gesunken.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          stem: "Digitales, von zu Hause geleistetes Engagement nimmt zu.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "„lässt sich in den Daten nicht bestätigen“ widerlegt eine verbreitete Klage.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über digitale Privatsphäre",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Moderator: Frau Holm, viele sagen: Ich habe nichts zu verbergen, warum sollte mich Datenschutz kümmern? Frau Holm: Dieses Argument höre ich oft, und es greift zu kurz. Privatsphäre schützt nicht nur Menschen, die etwas Verbotenes tun. Sie ist die Voraussetzung dafür, frei zu denken und zu handeln, ohne ständig beobachtet zu werden. Moderator: Können Sie das konkretisieren? Frau Holm: Stellen Sie sich vor, jeder wüsste, welche Bücher Sie lesen oder welche Ärzte Sie aufsuchen. Schon das Wissen, beobachtet zu werden, verändert unser Verhalten — meist, ohne dass es uns bewusst ist. Wir werden vorsichtiger, angepasster. Genau das ist die eigentliche Gefahr, nicht der einzelne Datensatz.",
      speakers: [
        { role: "Moderator", voice: "onyx" },
        { role: "Frau Holm", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Wie bewertet Frau Holm das Argument „Ich habe nichts zu verbergen“?",
          options: [
            { id: "a", text: "Es greift zu kurz." },
            { id: "b", text: "Es ist vollkommen überzeugend." },
            { id: "c", text: "Es betrifft nur Kriminelle." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin sieht Frau Holm die eigentliche Gefahr?",
          options: [
            { id: "a", text: "dass das Wissen, beobachtet zu werden, unser Verhalten verändert" },
            { id: "b", text: "in einem einzelnen Datensatz" },
            { id: "c", text: "darin, dass niemand mehr Bücher liest" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht der einzelne Datensatz, sondern …“ benennt den eigentlichen Punkt.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über die Macht der Sprache",
    prompt: "Du hörst einen Beitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Worte sind nie neutral. Wie wir etwas benennen, prägt, wie wir darüber denken. Ein und derselbe Sachverhalt kann je nach Wortwahl ganz unterschiedlich wirken — man denke an die Begriffe, mit denen über Migration oder Wirtschaft gesprochen wird. Das ist keine bloße Theorie: Experimente zeigen, dass schon der Austausch eines einzigen Wortes die Urteile von Menschen messbar verschiebt. Daraus folgt jedoch nicht, dass Sprache uns vollständig steuert, wie manchmal behauptet wird. Wir sind nicht hilflos. Wer sich der Wirkung von Wörtern bewusst ist, kann ihr ein Stück weit entgegentreten. Sprachsensibilität ist insofern keine Überempfindlichkeit, sondern eine Form von Aufmerksamkeit.",
      speakers: [{ role: "Beitrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was zeigen die erwähnten Experimente?",
          options: [
            { id: "a", text: "Schon ein einziges Wort kann Urteile messbar verschieben." },
            { id: "b", text: "Sprache hat keinerlei Einfluss." },
            { id: "c", text: "Nur lange Texte beeinflussen uns." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie beurteilt der Beitrag Sprachsensibilität?",
          options: [
            { id: "a", text: "als eine Form von Aufmerksamkeit, nicht als Überempfindlichkeit" },
            { id: "b", text: "als reine Überempfindlichkeit" },
            { id: "c", text: "als völlig unnötig" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Beitrag wehrt zwei Übertreibungen ab: totale Steuerung und Bagatellisierung.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über Kulturförderung",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Frau Adam: In Zeiten knapper Kassen frage ich mich, ob wir Theater und Museen wirklich mit so viel Steuergeld stützen müssen. Herr Pek: Ich verstehe die Frage, aber ich halte sie für gefährlich. Kultur ist kein Luxus, der nur in guten Zeiten erlaubt ist. Frau Adam: Aber wäre das Geld nicht in Schulen oder Krankenhäusern besser angelegt? Herr Pek: Das ist ein falscher Gegensatz. Wir stellen Kultur gegen Bildung und Gesundheit, als müsse man sich entscheiden. Tatsächlich macht der Kulturetat nur einen winzigen Bruchteil des Haushalts aus. Frau Adam: Da haben Sie einen Punkt. Vielleicht ist die Summe wirklich kleiner, als ich dachte.",
      speakers: [
        { role: "Frau Adam", voice: "nova" },
        { role: "Herr Pek", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was kritisiert Herr Pek an Frau Adams Argumentation?",
          options: [
            { id: "a", text: "Sie stellt einen falschen Gegensatz zwischen Kultur und Bildung/Gesundheit her." },
            { id: "b", text: "Sie gibt zu viel für Kultur aus." },
            { id: "c", text: "Sie interessiert sich nicht für Schulen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie reagiert Frau Adam am Ende?",
          options: [
            { id: "a", text: "Sie räumt ein, dass die Summe kleiner sein könnte als gedacht." },
            { id: "b", text: "Sie beharrt unverändert auf ihrer Position." },
            { id: "c", text: "Sie bricht das Gespräch ab." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„ein falscher Gegensatz“ ist ein typisches Argumentationsmuster — höre, wie es entkräftet wird.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über Optimismus",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Optimismus hat einen guten Ruf, und das nicht zu Unrecht: Optimistische Menschen sind im Schnitt gesünder und geben bei Rückschlägen seltener auf. Doch ich möchte heute vor einem Missverständnis warnen. Echter Optimismus bedeutet nicht, die Augen vor Problemen zu verschließen und sich einzureden, alles werde schon gut. Das wäre naiv und sogar gefährlich. Der hilfreiche Optimismus ist von anderer Art: Er erkennt die Schwierigkeiten klar an, glaubt aber an die eigene Fähigkeit, mit ihnen umzugehen. Es geht also nicht um die Erwartung, dass nichts schiefgeht, sondern um das Vertrauen, dass man auch das Schwierige bewältigen kann. Dieser Unterschied ist entscheidend.",
      speakers: [{ role: "Redner", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Wovor warnt der Redner?",
          options: [
            { id: "a", text: "vor einem naiven Optimismus, der Probleme verleugnet" },
            { id: "b", text: "vor jedem Optimismus" },
            { id: "c", text: "vor Gesundheit" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist laut Redner der hilfreiche Optimismus?",
          options: [
            { id: "a", text: "das Vertrauen, auch Schwieriges bewältigen zu können" },
            { id: "b", text: "die Erwartung, dass nie etwas schiefgeht" },
            { id: "c", text: "Probleme zu ignorieren" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Redner unterscheidet zwei Arten von Optimismus — achte auf den Kontrast.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Mehrsprachigkeit",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Moderatorin: Frau Dr. Sahin, schadet es Kindern, mit zwei Sprachen aufzuwachsen? Man hört das immer wieder. Dr. Sahin: Diese Sorge ist weit verbreitet, aber sie ist unbegründet. Kinder können problemlos mehrere Sprachen gleichzeitig lernen. Dass sie die Sprachen anfangs manchmal mischen, ist völlig normal und kein Zeichen von Überforderung. Moderatorin: Gibt es sogar Vorteile? Dr. Sahin: Durchaus. Mehrsprachige Kinder sind oft geübter darin, zwischen Aufgaben zu wechseln, und entwickeln früh ein Gespür dafür, dass dieselbe Sache verschieden benannt werden kann. Allerdings — und das betone ich gern — ist Mehrsprachigkeit kein Wundermittel. Sie macht niemanden automatisch klüger. Sie ist einfach eine wertvolle Fähigkeit unter vielen.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Dr. Sahin", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was sagt Dr. Sahin zum anfänglichen Mischen der Sprachen?",
          options: [
            { id: "a", text: "Es ist normal und kein Zeichen von Überforderung." },
            { id: "b", text: "Es ist ein ernstes Problem." },
            { id: "c", text: "Es kommt nie vor." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie schränkt Dr. Sahin die Vorteile ein?",
          options: [
            { id: "a", text: "Mehrsprachigkeit ist kein Wundermittel und macht niemanden automatisch klüger." },
            { id: "b", text: "Mehrsprachigkeit hat gar keine Vorteile." },
            { id: "c", text: "Mehrsprachige Kinder sind immer die Besten." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Allerdings … betone ich gern“ leitet eine wichtige Einschränkung ein.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über Fehlerkultur",
    prompt: "Du hörst einen Beitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "In vielen Unternehmen herrscht eine seltsame Doppelmoral. Offiziell heißt es, man dürfe Fehler machen, denn aus ihnen lerne man. In der Praxis aber wird, wer einen Fehler eingesteht, oft genug benachteiligt. Die Folge ist, dass Probleme verschwiegen werden, bis sie nicht mehr zu übersehen sind — und dann ist der Schaden meist größer. Eine echte Fehlerkultur erkennt man nicht an schönen Worten, sondern daran, wie auf den ersten ehrlich gemeldeten Fehler reagiert wird. Interessanterweise sind gerade die erfolgreichsten Teams nicht jene, die die wenigsten Fehler machen, sondern jene, die am offensten über sie sprechen. Sie machen die Fehler nur einmal.",
      speakers: [{ role: "Beitrag", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Worin besteht laut Beitrag die „Doppelmoral“?",
          options: [
            { id: "a", text: "Offiziell sind Fehler erlaubt, in der Praxis werden sie bestraft." },
            { id: "b", text: "Fehler werden offiziell verboten, aber gelobt." },
            { id: "c", text: "Es gibt gar keine Fehler." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was zeichnet laut Beitrag die erfolgreichsten Teams aus?",
          options: [
            { id: "a", text: "Sie sprechen am offensten über Fehler." },
            { id: "b", text: "Sie machen nie Fehler." },
            { id: "c", text: "Sie verschweigen Probleme am längsten." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die Pointe steht am Ende: „Sie machen die Fehler nur einmal.“",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über Tourismus",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      audioScript:
        "Herr Voss: Diese Städte ersticken im Tourismus. Ich finde, man sollte die Besucherzahlen einfach deckeln. Frau Lind: Verstehe ich, aber so einfach ist es nicht. Vom Tourismus leben ganze Familien. Ein striktes Limit würde viele Existenzen treffen. Herr Voss: Aber wenn die Einheimischen wegen der Mieten wegziehen, gibt es bald keine echte Stadt mehr, nur noch Kulissen für Besucher. Frau Lind: Da ist etwas dran. Vielleicht ist nicht die Zahl der Touristen das Problem, sondern dass der Gewinn bei wenigen landet, während die Lasten alle tragen. Herr Voss: Das wäre in der Tat der klügere Ansatzpunkt — bei der Verteilung, nicht beim bloßen Verbot.",
      speakers: [
        { role: "Herr Voss", voice: "onyx" },
        { role: "Frau Lind", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was wendet Frau Lind gegen ein striktes Besucherlimit ein?",
          options: [
            { id: "a", text: "Es würde viele Existenzen treffen, die vom Tourismus leben." },
            { id: "b", text: "Touristen geben zu wenig Geld aus." },
            { id: "c", text: "Es gibt zu wenige Touristen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worauf einigen sich beide am Ende?",
          options: [
            { id: "a", text: "Das Problem liegt eher in der Verteilung von Gewinn und Lasten." },
            { id: "b", text: "Tourismus sollte ganz verboten werden." },
            { id: "c", text: "Alles soll bleiben, wie es ist." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die Diskussion verschiebt sich vom Verbot zur Frage der Verteilung.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über Gewohnheiten",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Wer eine Gewohnheit ändern will, scheitert selten am Wissen. Fast jeder weiß, was gesund wäre. Das Problem liegt woanders. Gewohnheiten sind tief in unserem Alltag verankert und an bestimmte Auslöser gekoppelt — eine Tageszeit, ein Ort, eine Stimmung. Genau deshalb funktioniert der gute Vorsatz allein so schlecht. Wirksamer ist es, nicht gegen die Auslöser anzukämpfen, sondern die Umgebung zu verändern. Wer gesünder essen will, sollte nicht auf Willenskraft setzen, sondern Süßigkeiten gar nicht erst kaufen. Das klingt banal, ist aber der entscheidende Unterschied: Man verlässt sich nicht auf Disziplin in einem schwachen Moment, sondern gestaltet die Bedingungen so, dass der schwache Moment seltener kommt.",
      speakers: [{ role: "Dozentin", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Woran scheitert laut Vortrag die Änderung von Gewohnheiten meist nicht?",
          options: [
            { id: "a", text: "am Wissen darüber, was gesund wäre" },
            { id: "b", text: "am Geld" },
            { id: "c", text: "an der Zeit" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was empfiehlt die Dozentin?",
          options: [
            { id: "a", text: "die Umgebung zu verändern, statt nur auf Willenskraft zu setzen" },
            { id: "b", text: "sich mehr Vorsätze zu nehmen" },
            { id: "c", text: "mehr über Gesundheit zu lesen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„nicht … sondern …“: Umgebung gestalten statt auf Disziplin hoffen.",
  },
  {
    level: "C1",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über Kreativität und Langeweile",
    prompt: "Du hörst einen Radiobeitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Kaum stellt sich ein Moment der Leere ein, greifen die meisten von uns sofort zum Handy. Langeweile gilt als etwas, das man unbedingt vermeiden müsse. Dabei zeigt die Forschung ein anderes Bild. Wenn das Gehirn nicht ständig mit neuen Reizen versorgt wird, beginnt es, Gedanken zu verknüpfen und Ideen zu entwickeln. Viele kreative Einfälle entstehen gerade dann, wenn wir scheinbar nichts tun — beim Spazieren, beim Duschen, beim Warten. Das bedeutet keineswegs, dass Nichtstun an sich produktiv wäre. Entscheidend ist vielmehr, dem Geist überhaupt Freiräume zu lassen, statt jede Lücke sofort zu füllen. Wer die Langeweile konsequent vertreibt, beraubt sich womöglich seiner besten Gedanken.",
      speakers: [{ role: "Beitrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was passiert laut Beitrag, wenn das Gehirn keine neuen Reize bekommt?",
          options: [
            { id: "a", text: "Es beginnt, Gedanken zu verknüpfen und Ideen zu entwickeln." },
            { id: "b", text: "Es schaltet sich völlig ab." },
            { id: "c", text: "Es wird sofort krank." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worauf kommt es laut Beitrag entscheidend an?",
          options: [
            { id: "a", text: "dem Geist Freiräume zu lassen, statt jede Lücke zu füllen" },
            { id: "b", text: "möglichst viel gleichzeitig zu tun" },
            { id: "c", text: "das Handy immer dabeizuhaben" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„keineswegs, dass …“ grenzt die These gegen ein Missverständnis ab.",
  },

  // ===================== C2 =====================
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über die Freiheit der Wahl",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      audioScript:
        "Wir betrachten die Freiheit, zwischen unzähligen Optionen zu wählen, gemeinhin als reinen Gewinn. Heute möchte ich diese Selbstverständlichkeit hinterfragen. Wo unsere Vorfahren ihren Platz weitgehend vorfanden, müssen wir ihn selbst entwerfen — und haften fortan allein für das Ergebnis. Das Versprechen, alles sei möglich, verwandelt sich unmerklich in die Bürde, alles entscheiden zu müssen. Verstehen Sie mich nicht falsch: Ich verkläre die alten Zwänge keineswegs. Niemand sollte sich die Enge vergangener Ordnungen zurückwünschen. Mein Punkt ist ein anderer. Wir sollten aufhören, die schiere Menge an Optionen mit Freiheit zu verwechseln. Echte Freiheit zeigt sich nicht in der Zahl der Möglichkeiten, sondern in der Fähigkeit, aus ihnen klug zu wählen — und vieles bewusst auszuschlagen.",
      speakers: [{ role: "Dozent", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Wovor warnt der Redner ausdrücklich?",
          options: [
            { id: "a", text: "die Menge an Optionen mit Freiheit zu verwechseln" },
            { id: "b", text: "vor jeder Form von Freiheit" },
            { id: "c", text: "davor, alte Zwänge abzulehnen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin zeigt sich laut Redner echte Freiheit?",
          options: [
            { id: "a", text: "in der Fähigkeit, klug zu wählen und vieles auszuschlagen" },
            { id: "b", text: "in möglichst vielen Optionen" },
            { id: "c", text: "in der Rückkehr zu alten Ordnungen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Verstehen Sie mich nicht falsch“ kündigt eine Abgrenzung der eigenen These an.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über den Sinn der Arbeit",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      audioScript:
        "Moderatorin: Herr Professor, wenn künftig Maschinen vieles übernehmen — verliert die Arbeit dann ihren Sinn? Prof. Reinhardt: Das setzt voraus, dass der Sinn der Arbeit allein im Produzieren läge. Genau das bezweifle ich. Arbeit gibt uns Struktur, das Gefühl, gebraucht zu werden, einen Ort in der Gemeinschaft. Moderatorin: Also bliebe uns auch ohne wirtschaftliche Notwendigkeit ein Bedürfnis nach Tätigkeit? Prof. Reinhardt: Davon bin ich überzeugt. Die spannendere Frage lautet nicht, ob wir noch arbeiten werden, sondern woran wir Würde und Anerkennung knüpfen, wenn die bezahlte Erwerbsarbeit an Bedeutung verliert. Eine Gesellschaft, die darauf keine Antwort findet, wird durch die Befreiung von der Arbeit nicht glücklicher, sondern orientierungsloser.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Prof. Reinhardt", voice: "onyx" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Welche Annahme bezweifelt Prof. Reinhardt?",
          options: [
            { id: "a", text: "dass der Sinn der Arbeit allein im Produzieren liege" },
            { id: "b", text: "dass Maschinen Aufgaben übernehmen können" },
            { id: "c", text: "dass Arbeit Struktur gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Frage hält er für die spannendere?",
          options: [
            { id: "a", text: "woran wir Würde und Anerkennung knüpfen, wenn Erwerbsarbeit an Bedeutung verliert" },
            { id: "b", text: "wie viele Maschinen es geben wird" },
            { id: "c", text: "wann die Arbeit ganz verschwindet" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Professor verschiebt die Frage vom „Ob“ zum „Woran“.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über die Grenzen der Toleranz",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Frau Esch: Eine offene Gesellschaft muss alles aushalten, auch Meinungen, die uns zuwider sind. Herr Tom: Im Grundsatz ja. Aber was, wenn jemand die Toleranz nur nutzt, um sie für alle anderen abzuschaffen? Frau Esch: Dann gerät die Toleranz tatsächlich in einen Widerspruch mit sich selbst. Herr Tom: Eben. Grenzenlose Duldsamkeit liefert sich denen aus, die sie verachten. Frau Esch: Und doch ist die Versuchung groß, die Grenze einfach dort zu ziehen, wo uns etwas ohnehin missfällt. Herr Tom: Da haben Sie recht. Deshalb lässt sich das Paradox nicht durch eine bequeme Regel lösen, sondern nur durch ständiges, ehrliches Abwägen. Frau Esch: Dem stimme ich zu — Toleranz ist eben kein Zustand, sondern eine Daueraufgabe.",
      speakers: [
        { role: "Frau Esch", voice: "nova" },
        { role: "Herr Tom", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Worin besteht der Widerspruch, den beide erörtern?",
          options: [
            { id: "a", text: "Grenzenlose Toleranz liefert sich denen aus, die sie abschaffen wollen." },
            { id: "b", text: "Toleranz ist immer einfach." },
            { id: "c", text: "Toleranz hat keinerlei Wert." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worauf einigen sich beide am Ende?",
          options: [
            { id: "a", text: "Toleranz ist eine Daueraufgabe, kein einmal erreichter Zustand." },
            { id: "b", text: "Man sollte jede Toleranz aufgeben." },
            { id: "c", text: "Es gibt eine einfache Regel für alle Fälle." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Beide kommen zu einer gemeinsamen, differenzierten Schlussfolgerung.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über die Kunst des Weglassens",
    prompt: "Du hörst einen Radiobeitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Wir klagen über zu wenig Zeit und besitzen doch mehr freie Zeit als je eine Generation vor uns. Wie passt das zusammen? Die Antwort liegt nicht in der Menge, sondern in der Dichte der Möglichkeiten. Weil sich uns jede Stunde tausend Arten eröffnen, sie zu verbringen, wird jede Entscheidung zum Verzicht auf alles andere. Nicht der Mangel quält uns, sondern der Überfluss. Wer das durchschaut, dem hilft kein ausgeklügeltes Zeitmanagement weiter, sondern allein die Kunst des Weglassens — der Mut, vieles bewusst nicht zu tun. Es klingt widersinnig, ist aber die Erfahrung vieler: Zeit gewinnt zurück, wer aufhört, sie restlos ausschöpfen zu wollen. Souveränität bedeutet hier nicht, mehr zu schaffen, sondern auswählen zu können.",
      speakers: [{ role: "Beitrag", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Beitrag der eigentliche Grund für das Gefühl der Zeitnot?",
          options: [
            { id: "a", text: "der Überfluss an Möglichkeiten, nicht der Mangel an Zeit" },
            { id: "b", text: "tatsächlich zu wenig freie Zeit" },
            { id: "c", text: "schlechtes Zeitmanagement" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was empfiehlt der Beitrag?",
          options: [
            { id: "a", text: "die Kunst des Weglassens — vieles bewusst nicht zu tun" },
            { id: "b", text: "ein noch besseres Zeitmanagement" },
            { id: "c", text: "jede Möglichkeit auszuschöpfen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Es klingt widersinnig, ist aber …“ leitet die paradoxe Pointe ein.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Kunst und Charakter",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      audioScript:
        "Moderator: Frau Dr. Lemke, kann man ein großes Kunstwerk noch genießen, wenn man weiß, dass sein Schöpfer ein zweifelhafter Mensch war? Dr. Lemke: Das ist eine der hartnäckigsten Fragen der Ästhetik, und ich misstraue beiden einfachen Antworten. Wer sagt, das Leben des Künstlers sei völlig belanglos, tut so, als könnten wir unser Wissen abschalten — das können wir nicht. Moderator: Aber das Werk allein nach der Biografie zu beurteilen? Dr. Lemke: Wäre genauso falsch. Dann bliebe von der Kunstgeschichte erschreckend wenig übrig. Die ehrlichere Haltung besteht meines Erachtens darin, die Spannung auszuhalten, statt sie vorschnell zugunsten einer Seite aufzulösen. Reife zeigt sich hier nicht im klaren Urteil, sondern im Ertragen des Unklaren.",
      speakers: [
        { role: "Moderator", voice: "onyx" },
        { role: "Dr. Lemke", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Welche Haltung vertritt Dr. Lemke?",
          options: [
            { id: "a", text: "Man sollte die Spannung aushalten, statt sich auf eine Seite festzulegen." },
            { id: "b", text: "Das Leben des Künstlers ist völlig belanglos." },
            { id: "c", text: "Man sollte ein Werk nur nach der Biografie beurteilen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin zeigt sich laut Dr. Lemke „Reife“?",
          options: [
            { id: "a", text: "im Ertragen des Unklaren" },
            { id: "b", text: "in einem schnellen, klaren Urteil" },
            { id: "c", text: "im Ignorieren der Kunst" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Sie verwirft „beide einfachen Antworten“ — achte auf die vermittelnde dritte Position.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über das Vergessen",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Jahrhundertelang galt das Vergessen als Defekt, als Versagen eines Gedächtnisses, das doch alles bewahren sollte. Erst die digitale Speicherung, die nichts mehr verblassen lässt, lehrt uns seinen Wert neu zu sehen. Denn ein Leben, in dem jede unbedachte Äußerung für immer abrufbar bleibt, kennt keine Gnade des Neuanfangs. Wer einmal gefehlt hat, bleibt auf ewig damit verbunden. Das Vergessen aber ist kein bloßer Mangel, sondern eine Leistung: Es erlaubt uns, uns zu verändern, ohne an unser früheres Ich gekettet zu bleiben. Eine Gesellschaft, die alles aufzeichnet, verwehrt ihren Mitgliedern womöglich genau jene Wandlung, die sie zugleich von ihnen verlangt. Das sogenannte Recht auf Vergessenwerden ist deshalb kein technisches Detail, sondern die Verteidigung einer zutiefst menschlichen Möglichkeit.",
      speakers: [{ role: "Dozentin", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Wie bewertet die Rednerin das Vergessen?",
          options: [
            { id: "a", text: "als Leistung, die Veränderung ermöglicht — nicht als bloßen Mangel" },
            { id: "b", text: "als reinen Defekt des Gedächtnisses" },
            { id: "c", text: "als völlig bedeutungslos" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie deutet sie das „Recht auf Vergessenwerden“?",
          options: [
            { id: "a", text: "als Verteidigung einer zutiefst menschlichen Möglichkeit" },
            { id: "b", text: "als unwichtiges technisches Detail" },
            { id: "c", text: "als Gefahr für die Gesellschaft" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„kein bloßer Mangel, sondern eine Leistung“ wertet das Vergessen um.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_TRUE_FALSE",
    title: "Ein Feature über das Mitgefühl",
    prompt: "Du hörst ein Feature. Sind die Sätze richtig oder falsch?",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      audioScript:
        "Das Mitgefühl genießt einen tadellosen Ruf, und doch hat es eine unbequeme Eigenschaft: Es ist parteiisch. Ein einzelnes Gesicht rührt uns weit stärker als die Statistik eines tausendfach größeren Leids. Diese Schieflage ist kein moralisches Versagen Einzelner, sondern liegt in unserer Wahrnehmung selbst begründet. Manche schließen daraus, man müsse das Gefühl durch kühle Vernunft ersetzen. Doch das verkennt seinen unersetzlichen Antrieb — ohne Mitgefühl bewegt uns gar nichts. Sinnvoller ist es, beides zu verbinden: das Gefühl, das uns überhaupt erst in Bewegung setzt, und die Vernunft, die korrigiert, wohin uns das Gefühl blind führen würde. Nicht die Abschaffung des Mitgefühls also, sondern seine Schulung ist die Aufgabe.",
      speakers: [{ role: "Feature", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Laut Feature ist die Parteilichkeit des Mitgefühls ein moralisches Versagen Einzelner.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
        {
          id: "q2",
          stem: "Das Feature empfiehlt, Mitgefühl durch reine Vernunft zu ersetzen.",
          options: [
            { id: "r", text: "Richtig" },
            { id: "f", text: "Falsch" },
          ],
          answer: "f",
        },
      ],
    },
    guidanceNote: "Achte genau: Das Feature lehnt die Ersetzung des Gefühls ausdrücklich ab.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Authentizität",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Moderatorin: Überall heißt es, man solle authentisch sein, ganz man selbst. Was halten Sie davon? Herr Dr. Frey: Es klingt befreiend, ist bei näherem Hinsehen aber erstaunlich gebieterisch. Die Forderung setzt voraus, es gäbe ein wahres Selbst, das man nur freilegen müsste. Moderatorin: Und das bezweifeln Sie? Herr Dr. Frey: Durchaus. Wir sind keine fertigen Wesen, die sich bloß ausdrücken, sondern werden zu dem, was wir sind, im Umgang mit anderen. Das angeblich authentische Ich ist selbst ein Produkt — nicht zuletzt der Erwartung, authentisch zu sein. Wer ständig sich selbst sein soll, dem wird gerade verwehrt, ein anderer zu werden. Die größere Freiheit läge womöglich darin, sich selbst entwerfen zu dürfen.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Herr Dr. Frey", voice: "echo" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Welche Voraussetzung der Authentizitätsforderung kritisiert Dr. Frey?",
          options: [
            { id: "a", text: "dass es ein wahres Selbst gäbe, das man nur freilegen müsste" },
            { id: "b", text: "dass man sich verändern kann" },
            { id: "c", text: "dass andere Menschen existieren" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin läge laut Dr. Frey die größere Freiheit?",
          options: [
            { id: "a", text: "sich selbst entwerfen zu dürfen" },
            { id: "b", text: "ständig authentisch zu sein" },
            { id: "c", text: "den wahren Kern freizulegen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Dr. Frey deckt einen Zwang im scheinbaren Befreiungsversprechen auf.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über den Nutzen des Nutzlosen",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "In einer Welt, die alles nach seinem Nutzen bemisst, gerät unter Verdacht, was sich nicht unmittelbar verwerten lässt. Wozu Gedichte, wozu tote Sprachen, wozu Fragen ohne praktische Antwort? Die Frage ist verständlich und doch von einer eigentümlichen Engstirnigkeit. Sie unterstellt, der Wert einer Sache liege in ihrer Verwendbarkeit für etwas anderes. Genau das aber trifft auf das Wertvollste nicht zu. Eine Freundschaft, die man der Vorteile wegen pflegt, ist keine; eine Neugier, die nur fragt, was sich verkaufen lässt, hat aufgehört, Neugier zu sein. Das vermeintlich Nutzlose ist oft das, was dem Leben überhaupt erst Sinn verleiht — nicht als Mittel zu einem Zweck, sondern als Zweck in sich selbst.",
      speakers: [{ role: "Redner", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Welche Annahme kritisiert der Redner?",
          options: [
            { id: "a", text: "dass der Wert einer Sache allein in ihrer Verwendbarkeit liege" },
            { id: "b", text: "dass Gedichte wertvoll seien" },
            { id: "c", text: "dass Effizienz nützlich sei" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie charakterisiert er das vermeintlich Nutzlose?",
          options: [
            { id: "a", text: "als Zweck in sich, der dem Leben Sinn verleiht" },
            { id: "b", text: "als bloßes Mittel zu einem Zweck" },
            { id: "c", text: "als grundsätzlich wertlos" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Redner stellt „Mittel zum Zweck“ und „Zweck in sich“ einander gegenüber.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über Fortschritt",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      audioScript:
        "Herr Wald: Jeder technische Fortschritt verbessert unser Leben, das lässt sich kaum bestreiten. Frau Ott: Verbessern schon — aber zu welchem Preis? Mit jeder neuen Möglichkeit verschwindet eine alte Selbstverständlichkeit. Herr Wald: Sie meinen etwa die ständige Erreichbarkeit, die das Recht zerstört hat, einmal nicht erreichbar zu sein. Frau Ott: Genau. Nur werden solche Verluste nie verbucht, weil sie sich nicht beziffern lassen. Herr Wald: Aber wollen Sie den Fortschritt deshalb aufhalten? Frau Ott: Keineswegs. Ich plädiere nur für einen nüchterneren Blick, der den Gewinn nicht feiert, ohne nach den Kosten zu fragen. Herr Wald: Dem kann ich mich anschließen — gegen einen ehrlichen Kassensturz ist nichts einzuwenden.",
      speakers: [
        { role: "Herr Wald", voice: "onyx" },
        { role: "Frau Ott", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Was kritisiert Frau Ott am üblichen Blick auf den Fortschritt?",
          options: [
            { id: "a", text: "Die stillen Verluste werden nicht verbucht, weil sie sich nicht beziffern lassen." },
            { id: "b", text: "dass der Fortschritt das Leben verbessert" },
            { id: "c", text: "dass es überhaupt Technik gibt" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wofür plädiert Frau Ott?",
          options: [
            { id: "a", text: "für einen nüchternen Blick, der Gewinn und Kosten gemeinsam bedenkt" },
            { id: "b", text: "dafür, den Fortschritt aufzuhalten" },
            { id: "c", text: "dafür, nur die Kosten zu sehen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Frau Ott betont, sie wolle den Fortschritt „keineswegs“ aufhalten.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über Ironie",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Es gilt heute als peinlich, etwas vorbehaltlos ernst zu meinen. Wer sich begeistert, schiebt sicherheitshalber ein ironisches Augenzwinkern hinterher, um bloß nicht naiv zu wirken. Die Ironie, einst eine Waffe der Kritik, ist zur Schutzhaltung verkommen — zur Methode, sich nie festzulegen und damit unangreifbar zu bleiben. Doch dieser Schutz hat seinen Preis. Wer sich nie bloßstellt, wagt auch nichts, und ohne Wagnis bleibt alles unverbindlich. Ich will die Ironie nicht verteufeln; wo sie Heuchelei entlarvt, ist sie unentbehrlich. Aber es täte uns gut, gelegentlich den Mut aufzubringen, etwas zu meinen, wie wir es sagen — auf die Gefahr hin, uns zu irren. Denn nur wer sich angreifbar macht, kann überhaupt etwas gewinnen.",
      speakers: [{ role: "Redner", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Was kritisiert der Redner an der heutigen Ironie?",
          options: [
            { id: "a", text: "Sie ist zur Schutzhaltung geworden, die jede Festlegung vermeidet." },
            { id: "b", text: "Sie wird zu selten benutzt." },
            { id: "c", text: "Sie ist als Mittel der Kritik wertlos." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wozu ermutigt der Redner?",
          options: [
            { id: "a", text: "gelegentlich etwas ernst zu meinen, auch auf die Gefahr zu irren" },
            { id: "b", text: "die Ironie ganz abzuschaffen" },
            { id: "c", text: "nie eine Meinung zu äußern" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Ich will die Ironie nicht verteufeln; aber …“ grenzt die Kritik ein.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Interview über Sprache und Denken",
    prompt: "Du hörst ein Interview. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Moderatorin: Frau Professor, formt unsere Sprache, wie wir die Welt sehen? Prof. Brandt: In ihrer starken Form behauptet diese These, wir könnten nur denken, wofür wir Worte haben. So verlockend das ist — es hält der Prüfung nicht stand. Auch ohne fertiges Wort treffen wir Unterscheidungen, und neue Begriffe entstehen, weil das Bezeichnete schon empfunden wird. Moderatorin: Also hat die Sprache gar keinen Einfluss? Prof. Brandt: Das wäre der entgegengesetzte Irrtum. Es bleibt eine schwächere, ernst zu nehmende Wahrheit: Sprache lenkt unsere Aufmerksamkeit. Sie macht manche Unterscheidungen bequem, andere mühsam. Sie determiniert das Denken nicht, aber sie kanalisiert es. Klug ist, wer die eigene Sprache weder für ein Gefängnis hält noch für ein bloßes Werkzeug.",
      speakers: [
        { role: "Moderatorin", voice: "shimmer" },
        { role: "Prof. Brandt", voice: "nova" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Warum lehnt Prof. Brandt die „starke Form“ der These ab?",
          options: [
            { id: "a", text: "weil man auch ohne fertiges Wort Unterscheidungen treffen kann" },
            { id: "b", text: "weil Sprache überhaupt keinen Einfluss hat" },
            { id: "c", text: "weil niemand neue Begriffe bildet" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie fasst sie das Verhältnis von Sprache und Denken zusammen?",
          options: [
            { id: "a", text: "Sprache determiniert das Denken nicht, kanalisiert es aber." },
            { id: "b", text: "Sprache bestimmt das Denken vollständig." },
            { id: "c", text: "Sprache und Denken sind völlig getrennt." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Prof. Brandt verwirft beide Extreme: totale Determination und völlige Einflusslosigkeit.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über die Illusion der Kontrolle",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Der moderne Mensch ist besessen von Kontrolle. Wir vermessen den Schlaf, optimieren die Ernährung, planen die Tage bis in die Zwischenräume — als ließe sich das Leben restlos beherrschen, wenn man es nur klug genug organisiert. Diese Anstrengung ist nicht grundlos; vieles lässt sich gestalten. Doch sie ruht auf einer Selbsttäuschung. Das Entscheidende entzieht sich der Planung: wen wir lieben, was uns widerfährt, wann uns eine Idee zufällt. Gerade die kostbarsten Erfahrungen verdanken sich nicht der Kontrolle, sondern der Bereitschaft, sich überraschen zu lassen. Wer das Leben zwingt, seinem Plan zu folgen, erntet am Ende oft nur die Erfüllung ohnehin begrenzter Erwartungen. Reife Souveränität liegt deshalb nicht im Mehr an Kontrolle, sondern in der Gelassenheit gegenüber dem Unverfügbaren.",
      speakers: [{ role: "Dozent", voice: "fable" }],
      questions: [
        {
          id: "q1",
          stem: "Worauf beruht laut Vortrag das Streben nach totaler Kontrolle?",
          options: [
            { id: "a", text: "auf einer Selbsttäuschung, da sich das Entscheidende der Planung entzieht" },
            { id: "b", text: "auf gesicherten wissenschaftlichen Tatsachen" },
            { id: "c", text: "auf reiner Bequemlichkeit" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin liegt laut Redner reife Souveränität?",
          options: [
            { id: "a", text: "in der Gelassenheit gegenüber dem Unverfügbaren" },
            { id: "b", text: "in noch mehr Planung und Kontrolle" },
            { id: "c", text: "im Verzicht auf jede Gestaltung" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Die These steht im Schlusssatz: „nicht im Mehr an Kontrolle, sondern …“.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Eine Diskussion über das Messen",
    prompt: "Du hörst eine Diskussion. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      audioScript:
        "Herr Bren: Wenn wir den Erfolg von Schulen verbessern wollen, müssen wir ihn präzise messen. Was man nicht misst, kann man nicht steuern. Frau Kade: Das klingt vernünftig, hat aber einen blinden Fleck. Vieles, was eine gute Schule ausmacht — Vertrauen, Neugier, Zuwendung —, entzieht sich der Messung. Herr Bren: Heißt das, wir sollen gar nicht messen? Frau Kade: Nein, das wäre naiv. Aber wo wir nur messen, was sich leicht messen lässt, halten wir es bald fälschlich für das Wesentliche. Herr Bren: Da ist etwas dran. Vielleicht ist die Kunst, zu messen, ohne dem Messbaren zu verfallen. Frau Kade: Genau — das nicht Messbare nicht mit dem Unwichtigen zu verwechseln.",
      speakers: [
        { role: "Herr Bren", voice: "echo" },
        { role: "Frau Kade", voice: "shimmer" },
      ],
      questions: [
        {
          id: "q1",
          stem: "Welchen „blinden Fleck“ nennt Frau Kade?",
          options: [
            { id: "a", text: "Vieles Wesentliche an einer guten Schule entzieht sich der Messung." },
            { id: "b", text: "Messen ist immer wertlos." },
            { id: "c", text: "Schulen sollten geschlossen werden." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worauf einigen sich beide?",
          options: [
            { id: "a", text: "zu messen, ohne das nicht Messbare für unwichtig zu halten" },
            { id: "b", text: "gar nicht mehr zu messen" },
            { id: "c", text: "nur noch zu messen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Frau Kade lehnt sowohl blindes Messen als auch den völligen Verzicht ab.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Beitrag über Optimismus",
    prompt: "Du hörst einen Beitrag. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      audioScript:
        "Optimismus hat einen guten Ruf, und das nicht zu Unrecht. Doch ich möchte vor einem Missverständnis warnen. Echter Optimismus heißt nicht, die Augen vor Problemen zu verschließen und sich einzureden, alles werde schon gut. Das wäre naiv, ja gefährlich. Der hilfreiche Optimismus ist von anderer Art: Er sieht die Schwierigkeiten klar, vertraut aber auf die eigene Fähigkeit, mit ihnen umzugehen. Es geht also nicht um die Erwartung, dass nichts schiefgeht, sondern um die Zuversicht, auch das Schwierige bewältigen zu können. Wer diesen Unterschied übersieht, verwechselt Zuversicht mit Verleugnung — und gerade Letztere führt früher oder später in die Enttäuschung.",
      speakers: [{ role: "Beitrag", voice: "alloy" }],
      questions: [
        {
          id: "q1",
          stem: "Wovor warnt der Redner?",
          options: [
            { id: "a", text: "vor einem naiven Optimismus, der Probleme verleugnet" },
            { id: "b", text: "vor jeder Zuversicht" },
            { id: "c", text: "davor, Schwierigkeiten zu sehen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was ist laut Beitrag der hilfreiche Optimismus?",
          options: [
            { id: "a", text: "die Zuversicht, auch Schwieriges bewältigen zu können" },
            { id: "b", text: "die Erwartung, dass nie etwas schiefgeht" },
            { id: "c", text: "das Verleugnen von Problemen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Der Redner trennt Zuversicht klar von Verleugnung.",
  },
  {
    level: "C2",
    module: "HOEREN",
    taskType: "HOEREN_DETAIL",
    title: "Ein Vortrag über Individuum und Gemeinschaft",
    prompt: "Du hörst einen Vortragsausschnitt. Wähle für jede Frage die richtige Antwort.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      audioScript:
        "Selten zuvor wurde die Selbstverwirklichung des Einzelnen so hoch geschätzt wie heute. Jeder solle sein eigenes Leben gestalten, frei von den Erwartungen anderer. Ein verlockendes Versprechen — und doch hat es eine Kehrseite, die selten benannt wird. Wer ausschließlich sich selbst verpflichtet ist, dem fehlt mitunter jenes Netz aus Bindungen, das in schwierigen Zeiten trägt. Freiheit ohne Zugehörigkeit kann in Einsamkeit umschlagen. Es wäre allerdings ein Fehler, deshalb das Individuum der Gemeinschaft unterzuordnen; die Geschichte zeigt, wohin das führt. Die eigentliche Aufgabe besteht darin, beides zu versöhnen — die Freiheit, man selbst zu sein, und die Verantwortung, Teil eines größeren Ganzen zu bleiben. Nicht das eine gegen das andere, sondern beides zugleich.",
      speakers: [{ role: "Dozentin", voice: "nova" }],
      questions: [
        {
          id: "q1",
          stem: "Welche Kehrseite der Selbstverwirklichung nennt die Rednerin?",
          options: [
            { id: "a", text: "Freiheit ohne Zugehörigkeit kann in Einsamkeit umschlagen." },
            { id: "b", text: "Selbstverwirklichung macht immer glücklich." },
            { id: "c", text: "Bindungen sind grundsätzlich schädlich." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Worin besteht laut Rednerin die eigentliche Aufgabe?",
          options: [
            { id: "a", text: "Freiheit und Verantwortung für die Gemeinschaft zu versöhnen" },
            { id: "b", text: "das Individuum ganz der Gemeinschaft unterzuordnen" },
            { id: "c", text: "jede Bindung aufzugeben" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Nicht das eine gegen das andere, sondern beides zugleich“ ist die Synthese.",
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

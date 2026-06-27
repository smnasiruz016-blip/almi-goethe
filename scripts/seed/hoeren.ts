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

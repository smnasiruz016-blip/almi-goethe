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

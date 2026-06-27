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

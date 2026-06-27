// Seeds original SPRECHEN (Speaking) items — A1 starter set. Short German speaking
// tasks; the candidate records audio, which is transcribed (Whisper, de) and graded
// by AI against the four Goethe criteria — never accent. All content is original.
//
// Run: npm run seed:sprechen  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.GoetheItemCreateManyInput[] = [
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_INTRODUCE",
    title: "Sich vorstellen",
    prompt: "Stell dich auf Deutsch vor. Sprich etwa eine Minute.",
    difficulty: "CORE",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Stell dich vor. Sag deinen Namen, dein Alter, woher du kommst, wo du wohnst, und was du gern in deiner Freizeit machst.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote:
      "Bei A1 sind einfache, vollständige Sätze wichtig: „Ich heiße …“, „Ich komme aus …“, „Ich wohne in …“.",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Wohnung",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    payload: {
      taskPrompt:
        "Thema: Wohnung. Stell eine einfache Frage zum Thema Wohnung (zum Beispiel zu Zimmer, Miete oder Stadt) und beantworte dann die Frage selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "Eine kurze, klare Frage und eine kurze Antwort reichen auf A1.",
  },
];

async function main() {
  const res = await prisma.goetheItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Sprechen item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}

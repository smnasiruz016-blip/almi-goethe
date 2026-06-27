// Seeds original SCHREIBEN (Writing) items — A1 starter set. Short German writing
// tasks (a message / informal note). Graded by AI against the four Goethe criteria,
// level-aware. All content is original to AlmiGoethe, never copied.
//
// Run: npm run seed:schreiben  (needs DATABASE_URL set)

import { PrismaClient, Prisma } from "@prisma/client";
import { isDirectRun } from "./_entry";

const prisma = new PrismaClient();

export const ITEMS: Prisma.GoetheItemCreateManyInput[] = [
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Nachricht zum Geburtstag",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      situation:
        "Deine Freundin Lena hat am Samstag Geburtstag und macht eine Party. Du kannst aber nicht kommen.",
      instruction:
        "Schreib Lena eine kurze Nachricht. Gratuliere ihr zum Geburtstag, sag, dass du nicht zur Party kommen kannst, und nenne einen Grund.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote:
      "Bei A1 reicht eine einfache, klare Nachricht. Denk an Anrede und Gruß (z. B. „Liebe Lena“ … „Liebe Grüße“).",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Frage zum Deutschkurs",
    prompt: "Schreib eine kurze E-Mail auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "lernen",
    payload: {
      situation:
        "Du möchtest einen Deutschkurs in einer Sprachschule machen. Du brauchst noch Informationen.",
      instruction:
        "Schreib eine kurze E-Mail an die Sprachschule. Frag, wann der Kurs beginnt, an welchen Tagen er ist, und was er kostet.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Stelle deine Fragen klar und einfach. Eine Frage pro Satz ist genug.",
  },
];

async function main() {
  const res = await prisma.goetheItem.createMany({ data: ITEMS });
  console.log(`Seeded ${res.count} Schreiben item(s).`);
}

if (isDirectRun(import.meta.url)) {
  main()
    .catch((e) => {
      console.error(e);
      process.exitCode = 1;
    })
    .finally(() => prisma.$disconnect());
}

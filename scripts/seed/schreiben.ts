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
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Einen Arzttermin absagen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      situation: "Du hast morgen einen Termin beim Arzt, aber du bist krank und kannst nicht kommen.",
      instruction:
        "Schreib eine kurze Nachricht an die Praxis. Sag, dass du den Termin absagen musst, nenne einen Grund, und frag nach einem neuen Termin.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Sei höflich: „Leider …“ und „Können Sie mir bitte …?“",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Freundin zum Essen einladen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation: "Du möchtest am Wochenende für deine Freundin Maria kochen.",
      instruction:
        "Schreib Maria eine Nachricht. Lade sie zum Essen ein, sag wann und wo, und frag, was sie gern isst.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Eine Einladung braucht Zeit, Ort und eine Frage.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Du kommst zu spät",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation: "Du bist mit deinem Freund Jonas verabredet, aber dein Bus hat Verspätung.",
      instruction:
        "Schreib Jonas eine kurze Nachricht. Sag, dass du später kommst, nenne den Grund, und sag, wann du da bist.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Kurz und klar: Entschuldigung, Grund, neue Zeit.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Ein Zimmer im Hotel reservieren",
    prompt: "Schreib eine kurze E-Mail auf Deutsch (circa 30 Wörter).",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      situation: "Du machst im Sommer Urlaub und brauchst ein Hotelzimmer.",
      instruction:
        "Schreib eine kurze E-Mail an das Hotel. Frag nach einem Zimmer für zwei Nächte, frag nach dem Preis, und frag, ob es ein Frühstück gibt.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Beginne mit „Sehr geehrte Damen und Herren“ und stelle klare Fragen.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Danke für ein Geschenk",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation: "Deine Tante hat dir zum Geburtstag ein Buch geschenkt.",
      instruction:
        "Schreib deiner Tante eine kurze Nachricht. Bedank dich für das Geschenk, sag, dass es dir gefällt, und schlag ein Treffen vor.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "„Vielen Dank für …“ ist ein guter Anfang.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Die Nachbarn um Hilfe bitten",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      situation: "Du erwartest morgen ein Paket, aber du bist den ganzen Tag nicht zu Hause.",
      instruction:
        "Schreib deinen Nachbarn eine Nachricht. Bitte sie, das Paket anzunehmen, sag, wann der Bote kommt, und bedank dich.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Eine Bitte ist höflicher mit „Könnten Sie bitte …?“",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Urlaubsgruß an Kollegen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "reisen",
    payload: {
      situation: "Du bist im Urlaub am Meer und möchtest deinen Kollegen schreiben.",
      instruction:
        "Schreib eine kurze Nachricht. Sag, wo du bist, wie das Wetter ist, und was du dort machst.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Einfache Sätze im Präsens reichen: „Ich bin …“, „Das Wetter ist …“.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Krankmeldung",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      situation: "Du bist krank und kannst heute nicht zur Arbeit kommen.",
      instruction:
        "Schreib eine kurze Nachricht an deine Chefin. Sag, dass du krank bist, sag, dass du heute nicht kommst, und sag, wann du wieder da bist.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Im Beruf schreibt man höflich und klar.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Verabredung zum Kino",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      situation: "Im Kino läuft ein neuer Film, den du sehen möchtest.",
      instruction:
        "Schreib deinem Freund eine Nachricht. Frag, ob er mitkommt, sag wann der Film beginnt, und schlag einen Treffpunkt vor.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Frag zuerst, dann gib Zeit und Treffpunkt an.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Die Heizung ist kaputt",
    prompt: "Schreib eine kurze E-Mail auf Deutsch (circa 30 Wörter).",
    difficulty: "STRETCH",
    topicTag: "wohnen",
    payload: {
      situation: "In deiner Wohnung funktioniert die Heizung nicht mehr und es ist kalt.",
      instruction:
        "Schreib eine kurze E-Mail an deinen Vermieter. Beschreib das Problem, sag, seit wann es ist, und bitte um eine schnelle Reparatur.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Nenne das Problem klar und bitte freundlich um Hilfe.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Glückwunsch zur neuen Wohnung",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    payload: {
      situation: "Deine Freundin Lea hat eine neue Wohnung. Du freust dich für sie.",
      instruction:
        "Schreib Lea eine Nachricht. Gratuliere ihr zur neuen Wohnung, frag, wie sie ist, und frag, wann du sie besuchen kannst.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "„Herzlichen Glückwunsch zur …!“ passt gut.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Du hast den Schlüssel vergessen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      situation: "Du hast deinen Schlüssel vergessen und stehst vor der Tür. Deine Mitbewohnerin ist nicht da.",
      instruction:
        "Schreib deiner Mitbewohnerin eine Nachricht. Erkläre das Problem, frag, wann sie nach Hause kommt, und frag, ob sie dir die Tür öffnen kann.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Erkläre kurz die Situation und stelle eine klare Frage.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Anmeldung für einen Sportkurs",
    prompt: "Schreib eine kurze E-Mail auf Deutsch (circa 30 Wörter).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      situation: "Du möchtest einen Schwimmkurs im Sportzentrum machen.",
      instruction:
        "Schreib eine kurze E-Mail an das Sportzentrum. Sag, welchen Kurs du machen möchtest, frag, wann er ist, und frag, was er kostet.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Sag zuerst, was du möchtest, dann stelle deine Fragen.",
  },
  {
    level: "A1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Party absagen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 30 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation: "Dein Freund Ali macht am Samstag eine Party. Du kannst nicht kommen.",
      instruction:
        "Schreib Ali eine Nachricht. Sag, dass du nicht kommen kannst, nenne einen Grund, und wünsch ihm viel Spaß.",
      wordMin: 25,
      wordMax: 50,
    },
    guidanceNote: "Eine Absage ist freundlicher mit einem guten Wunsch am Ende.",
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

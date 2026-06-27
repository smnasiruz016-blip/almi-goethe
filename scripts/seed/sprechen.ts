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
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Familie",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "CORE",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Thema: Familie. Stell eine einfache Frage zum Thema Familie (zum Beispiel zu Geschwistern, Eltern oder Kindern) und beantworte dann die Frage selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "Zum Beispiel: „Hast du Geschwister?“ — „Ja, ich habe einen Bruder.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Essen und Trinken",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "essen",
    payload: {
      taskPrompt:
        "Thema: Essen und Trinken. Stell eine einfache Frage (zum Beispiel zum Lieblingsessen oder zum Frühstück) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Was isst du gern?“ — „Ich esse gern Reis und Gemüse.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Freizeit",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: Freizeit. Stell eine einfache Frage (zum Beispiel zu Hobbys oder zum Wochenende) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Was machst du am Wochenende?“ — „Ich spiele Fußball.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Arbeit und Beruf",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema: Arbeit und Beruf. Stell eine einfache Frage (zum Beispiel zum Beruf oder zu den Arbeitszeiten) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Was bist du von Beruf?“ — „Ich bin Lehrerin.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Einkaufen",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "einkaufen",
    payload: {
      taskPrompt:
        "Thema: Einkaufen. Stell eine einfache Frage (zum Beispiel zum Supermarkt oder zu Preisen) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Wo kaufst du Obst?“ — „Ich kaufe Obst auf dem Markt.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Tagesablauf",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Tagesablauf. Stell eine einfache Frage (zum Beispiel: Wann stehst du auf? Was machst du am Morgen?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "Uhrzeiten helfen: „Ich stehe um sieben Uhr auf.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Reisen und Urlaub",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      taskPrompt:
        "Thema: Reisen und Urlaub. Stell eine einfache Frage (zum Beispiel: Wohin fährst du gern? Wie reist du?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Wohin fährst du im Urlaub?“ — „Ich fahre ans Meer.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Wetter",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "wetter",
    payload: {
      taskPrompt:
        "Thema: Wetter. Stell eine einfache Frage (zum Beispiel: Wie ist das Wetter heute? Welche Jahreszeit magst du?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Wie ist das Wetter heute?“ — „Heute ist es sonnig und warm.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Eine Bitte im Café",
    prompt: "Formuliere eine Bitte und reagiere darauf. Sprich auf Deutsch.",
    difficulty: "CORE",
    topicTag: "essen",
    payload: {
      taskPrompt:
        "Thema: im Café. Du bist im Café. Formuliere höflich eine Bitte (zum Beispiel: etwas bestellen oder nach der Rechnung fragen) und sag, wie der Kellner antworten könnte.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "Höfliche Bitten: „Ich möchte bitte …“ oder „Könnte ich bitte …?“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_INTRODUCE",
    title: "Sich vorstellen — ein bisschen mehr",
    prompt: "Stell dich auf Deutsch vor. Sprich etwa eine Minute.",
    difficulty: "CORE",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Stell dich vor. Sag deinen Namen, woher du kommst, welche Sprachen du sprichst, was du arbeitest oder lernst, und was du am Wochenende gern machst.",
      prepSeconds: 20,
      speakSeconds: 60,
    },
    guidanceNote: "Mehrere kurze Sätze sind besser als ein langer, schwerer Satz.",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Sprachen lernen",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: Sprachen lernen. Stell eine einfache Frage (zum Beispiel: Warum lernst du Deutsch? Wie lange lernst du schon?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Warum lernst du Deutsch?“ — „Ich lerne Deutsch für meine Arbeit.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Sport",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: Sport. Stell eine einfache Frage (zum Beispiel: Machst du Sport? Welchen Sport magst du?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Machst du Sport?“ — „Ja, ich gehe oft schwimmen.“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Wochenende",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: Wochenende. Stell eine einfache Frage (zum Beispiel: Was machst du am Samstag? Triffst du Freunde?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "Sprich im Präsens über deine Pläne: „Am Samstag besuche ich …“",
  },
  {
    level: "A1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Nach dem Weg fragen",
    prompt: "Formuliere eine Bitte und reagiere darauf. Sprich auf Deutsch.",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: in der Stadt. Du suchst den Bahnhof. Frag höflich nach dem Weg und sag, wie eine Person dir antworten könnte.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Entschuldigung, wie komme ich zum Bahnhof?“ — „Gehen Sie geradeaus …“",
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

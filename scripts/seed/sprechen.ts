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

  // ===================== A2 =====================
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Eine Geburtstagsfeier planen",
    prompt: "Plane gemeinsam etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Geburtstagsfeier für einen Freund. Plane die Feier. Sprich über Ort, Datum, Essen und wen ihr einladet. Mach Vorschläge und sag, was du gut findest.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Mach Vorschläge mit „Wir könnten …“ oder „Wie wäre es mit …?“",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Einen Ausflug planen",
    prompt: "Plane gemeinsam etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: ein Ausflug am Wochenende. Plane den Ausflug. Sprich über das Ziel, die Uhrzeit, das Verkehrsmittel und was ihr mitnehmt.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Sag deine Meinung und reagiere auf Vorschläge: „Gute Idee“, „Lieber …“.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Über den letzten Urlaub sprechen",
    prompt: "Erzähle von einer Erfahrung. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      taskPrompt:
        "Thema: dein letzter Urlaub. Erzähle: Wohin bist du gefahren? Mit wem? Was hast du dort gemacht? Wie war es?",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Nutze das Perfekt: „Ich bin … gefahren“, „Wir haben … gemacht“.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Über deine Arbeit oder dein Studium sprechen",
    prompt: "Erzähle von dir. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema: deine Arbeit oder dein Studium. Erzähle, was du machst, wie dein Tag aussieht, und was dir gefällt oder nicht gefällt.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Sag auch deine Meinung: „Mir gefällt …, weil …“.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Ein gemeinsames Abendessen planen",
    prompt: "Plane gemeinsam etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "essen",
    payload: {
      taskPrompt:
        "Thema: ein Abendessen für Freunde. Plane das Essen. Sprich darüber, was ihr kocht, wer was mitbringt, wann es losgeht und wer abwäscht.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Teile die Aufgaben: „Ich kann …“, „Kannst du …?“",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Über deine Heimatstadt sprechen",
    prompt: "Erzähle von einem Ort. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      taskPrompt:
        "Thema: deine Heimatstadt. Erzähle, wo sie liegt, wie groß sie ist, was man dort machen kann und was dir dort gefällt.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Beschreibe mit Adjektiven und gib Beispiele.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Gesundheit",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "gesundheit",
    payload: {
      taskPrompt:
        "Thema: Gesundheit. Stell eine Frage (zum Beispiel: Was machst du für deine Gesundheit? Wie oft gehst du zum Arzt?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Was machst du für deine Gesundheit?“ — „Ich gehe oft spazieren.“",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Einen Kinobesuch planen",
    prompt: "Plane gemeinsam etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: zusammen ins Kino gehen. Plane den Abend. Sprich über den Film, die Uhrzeit, den Treffpunkt und was ihr danach macht.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Schlag etwas vor und frag nach der Meinung des anderen.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Über das Internet und Handy sprechen",
    prompt: "Erzähle von dir. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Internet und Handy. Erzähle, wofür du dein Handy benutzt, wie viel Zeit du im Internet verbringst, und was du daran gut oder schlecht findest.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Sag deine Meinung mit „Ich finde …“ und gib einen Grund.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Wohnen",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    payload: {
      taskPrompt:
        "Thema: Wohnen. Stell eine Frage (zum Beispiel: Wie wohnst du? Wohnung oder Haus? Allein oder mit anderen?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Wie wohnst du?“ — „Ich wohne in einer kleinen Wohnung im Zentrum.“",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Einen Einkauf für eine Party planen",
    prompt: "Plane gemeinsam etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      taskPrompt:
        "Thema: einkaufen für eine Party. Plane den Einkauf. Sprich darüber, was ihr braucht, wer einkaufen geht, wo ihr einkauft und wie viel Geld ihr ausgebt.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Macht eine Liste im Gespräch: „Wir brauchen …“, „Vergiss nicht …“.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Über ein Fest in deinem Land sprechen",
    prompt: "Erzähle von etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Thema: ein Fest in deinem Land. Erzähle, welches Fest du magst, wann es ist, was man da macht und isst, und warum du es magst.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Erkläre einfach und gib Beispiele. Sag am Ende deine Meinung.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Verkehr",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "reisen",
    payload: {
      taskPrompt:
        "Thema: Verkehr und Mobilität. Stell eine Frage (zum Beispiel: Wie kommst du zur Arbeit? Fährst du gern mit dem Bus?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "„Wie kommst du zur Arbeit?“ — „Ich fahre mit der U-Bahn, das geht schnell.“",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Einen Deutschkurs zusammen wählen",
    prompt: "Plane gemeinsam etwas. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: zusammen einen Deutschkurs besuchen. Plant gemeinsam. Sprich über die Tage, die Uhrzeit, den Preis und wie ihr zum Kurs kommt.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Wäge Möglichkeiten ab: „Abends ist besser, weil …“.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Über deine Familie und Feste sprechen",
    prompt: "Erzähle von dir. Sprich auf Deutsch (etwa eine Minute).",
    difficulty: "CORE",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Thema: deine Familie. Erzähle, wer zu deiner Familie gehört, was ihr gern zusammen macht, und wann ihr euch trefft.",
      prepSeconds: 30,
      speakSeconds: 60,
    },
    guidanceNote: "Verbinde Sätze mit „und“, „aber“, „weil“.",
  },
  {
    level: "A2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_ASK_ANSWER",
    title: "Fragen zum Thema Wochenende und Freizeit",
    prompt: "Stell eine Frage und beantworte eine Frage zum Thema. Sprich auf Deutsch.",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: Freizeit. Stell eine Frage (zum Beispiel: Was machst du am liebsten in deiner Freizeit? Triffst du oft Freunde?) und beantworte sie selbst.",
      prepSeconds: 20,
      speakSeconds: 45,
    },
    guidanceNote: "Antworte in zwei bis drei Sätzen und gib ein Beispiel.",
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

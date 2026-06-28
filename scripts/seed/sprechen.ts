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

  // ===================== B1 =====================
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Einkaufen im Internet",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      taskPrompt:
        "Thema: Einkaufen im Internet. Halte eine kurze Präsentation. Beschreibe, wie die Situation in deinem Land ist, erzähle von deinen eigenen Erfahrungen, nenne Vor- und Nachteile, und sag am Ende deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Gliedere deine Präsentation: Situation – Erfahrung – Vor-/Nachteile – Meinung.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Leben in der Stadt oder auf dem Land",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "wohnen",
    payload: {
      taskPrompt:
        "Thema: Stadt oder Land. Halte eine kurze Präsentation. Beschreibe, wo die Menschen in deinem Land lieber wohnen, erzähle, wo du wohnst und warum, nenne Vor- und Nachteile von Stadt und Land, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Vergleiche mit „im Vergleich zu“, „während“, „dagegen“.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Ein Abschiedsfest für eine Kollegin",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Eine Kollegin verlässt die Firma. Plant gemeinsam ein kleines Abschiedsfest. Sprich über Ort, Zeit, Essen und ein Geschenk. Mach Vorschläge, reagiere auf Vorschläge, und kommt am Ende zu einer Entscheidung.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Mach Vorschläge und reagiere: „Das ist eine gute Idee“, „Ich bin nicht sicher, ob …“.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Fremdsprachen lernen",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: Fremdsprachen lernen. Halte eine kurze Präsentation. Beschreibe, welche Sprachen man in deinem Land lernt, erzähle, wie und warum du Deutsch lernst, nenne Vor- und Nachteile verschiedener Lernmethoden, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Beziehe eigene Erfahrungen ein — das macht die Präsentation persönlich.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Ein Ausflug mit dem Deutschkurs",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Euer Deutschkurs möchte einen gemeinsamen Ausflug machen. Plant den Ausflug. Sprich über das Ziel, den Tag, die Anreise und die Kosten. Macht Vorschläge und einigt euch am Ende auf einen Plan.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Bringt das Gespräch zu einem Ergebnis: „Dann machen wir es so.“",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Gesunde Ernährung",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      taskPrompt:
        "Thema: Gesunde Ernährung. Halte eine kurze Präsentation. Beschreibe, wie sich die Menschen in deinem Land ernähren, erzähle, wie du selbst isst, nenne Vor- und Nachteile von gesundem Essen, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Nenne konkrete Beispiele aus dem Alltag.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Besuch aus dem Ausland",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      taskPrompt:
        "Ein Freund aus dem Ausland besucht euch für ein Wochenende. Plant gemeinsam das Programm. Sprich darüber, was ihr ihm zeigt, wo ihr esst und wie ihr euch fortbewegt. Macht Vorschläge und einigt euch.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Begründe deine Vorschläge: „Das sollten wir machen, weil …“.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Soziale Medien",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Soziale Medien. Halte eine kurze Präsentation. Beschreibe, wie wichtig soziale Medien in deinem Land sind, erzähle, wie du sie nutzt, nenne Vor- und Nachteile, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Sag deine Meinung klar: „Insgesamt finde ich, dass …“.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Eine Überraschungsparty",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Ein gemeinsamer Freund hat bald Geburtstag und ihr wollt eine Überraschungsparty machen. Plant die Party. Sprich über Ort, Gäste, Essen und wie ihr die Überraschung geheim haltet. Einigt euch am Ende.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Teilt die Aufgaben auf: „Ich kümmere mich um …“, „Kannst du …?“",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Reisen",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      taskPrompt:
        "Thema: Reisen. Halte eine kurze Präsentation. Beschreibe, wohin die Menschen in deinem Land gern reisen, erzähle von einer eigenen Reise, nenne Vor- und Nachteile des Reisens, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Erzähle eine kleine Geschichte aus deiner eigenen Erfahrung.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Ein gesundes Mittagessen im Büro",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "essen",
    payload: {
      taskPrompt:
        "Ihr wollt im Büro einmal pro Woche zusammen ein gesundes Mittagessen machen. Plant das. Sprich darüber, was ihr kocht, wer einkauft, wo ihr esst und wie ihr die Kosten teilt. Einigt euch am Ende.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Reagiere auf die Vorschläge der anderen und finde einen Kompromiss.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Sport in der Freizeit",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: Sport in der Freizeit. Halte eine kurze Präsentation. Beschreibe, welche Sportarten in deinem Land beliebt sind, erzähle, ob und welchen Sport du machst, nenne Vor- und Nachteile, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Eine klare Struktur hilft den Zuhörern, dir zu folgen.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Ein Geschenk für den Lehrer",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "FOUNDATION",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Euer Deutschkurs ist bald zu Ende und ihr möchtet eurem Lehrer ein Geschenk machen. Plant gemeinsam. Sprich über das Geschenk, das Geld, wer es kauft und wann ihr es übergebt. Einigt euch.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Mach Vorschläge und frag die anderen nach ihrer Meinung.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Handys im Alltag",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Handys im Alltag. Halte eine kurze Präsentation. Beschreibe, wie Menschen in deinem Land ihr Handy nutzen, erzähle, wofür du dein Handy brauchst, nenne Vor- und Nachteile, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Nenne sowohl positive als auch negative Seiten.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Gemeinsam planen: Eine Wohnung gemeinsam renovieren",
    prompt: "Plant gemeinsam etwas. Sprich auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "wohnen",
    payload: {
      taskPrompt:
        "Ihr zieht zusammen in eine Wohnung und wollt sie vorher renovieren. Plant die Arbeit. Sprich über die Aufgaben (streichen, putzen, Möbel kaufen), wer was macht und wann. Einigt euch am Ende auf einen Plan.",
      prepSeconds: 30,
      speakSeconds: 90,
    },
    guidanceNote: "Verteilt die Aufgaben fair und legt einen Zeitplan fest.",
  },
  {
    level: "B1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Präsentation: Umweltschutz im Alltag",
    prompt: "Halte eine kurze Präsentation auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      taskPrompt:
        "Thema: Umweltschutz im Alltag. Halte eine kurze Präsentation. Beschreibe, was die Menschen in deinem Land für die Umwelt tun, erzähle, was du selbst machst, nenne Vor- und Nachteile, und sag deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Gib praktische Beispiele: Müll trennen, weniger Plastik, Rad fahren.",
  },

  // ===================== B2 =====================
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Die Rolle der sozialen Medien in der Gesellschaft",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Welche Rolle spielen soziale Medien in unserer Gesellschaft? Halte einen Vortrag. Führe in das Thema ein, beschreibe die aktuelle Situation, nenne Vor- und Nachteile mit Beispielen, vertritt deine eigene Meinung mit Argumenten, und fasse am Ende zusammen.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Gliedere klar: Einleitung – Hauptteil (Argumente) – Schluss. Nutze Konnektoren.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte der öffentliche Nahverkehr kostenlos sein?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Bus und Bahn sollten für alle kostenlos sein.“ Sag, ob du dafür oder dagegen bist, begründe deine Position mit mindestens zwei Argumenten, reagiere auf ein mögliches Gegenargument, und versuche, dein Gegenüber zu überzeugen.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Vertritt eine klare Position und reagiere auf Gegenargumente: „Man könnte einwenden, dass … Dem halte ich entgegen …“.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Vor- und Nachteile des Stadtlebens",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      taskPrompt:
        "Thema: Leben in der Großstadt — Vor- und Nachteile. Halte einen Vortrag. Führe ein, beschreibe typische Vorteile und Nachteile mit Beispielen, sag, was für dich persönlich überwiegt, und schließe mit einem Fazit.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Belege deine Punkte mit konkreten Beispielen.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollten Hausaufgaben abgeschafft werden?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Hausaufgaben sollten an Schulen abgeschafft werden.“ Beziehe Stellung, nenne Argumente, gehe auf die Gegenseite ein, und begründe, warum deine Position überzeugender ist.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Strukturiere deine Argumente nach Wichtigkeit.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Fremdsprachenkenntnisse im Berufsleben",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema: Wie wichtig sind Fremdsprachen im Beruf? Halte einen Vortrag. Führe ein, beschreibe, in welchen Bereichen Sprachen heute wichtig sind, nenne Vorteile guter Sprachkenntnisse, gib ein Beispiel aus deiner Erfahrung, und ziehe ein Fazit.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Verbinde allgemeine Aussagen mit deiner persönlichen Erfahrung.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Müssen Mitarbeiter ins Büro kommen?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Unternehmen sollten verlangen können, dass alle Mitarbeiter wieder ins Büro kommen.“ Sag, ob du zustimmst oder nicht, begründe es, reagiere auf Gegenargumente, und schlage gegebenenfalls einen Kompromiss vor.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Ein Kompromissvorschlag wirkt am Ende oft überzeugend.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Gesundheit und Bewegung im Alltag",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      taskPrompt:
        "Thema: Wie kann man im Alltag gesund und aktiv bleiben? Halte einen Vortrag. Führe ein, beschreibe das Problem (viele Menschen bewegen sich zu wenig), nenne praktische Möglichkeiten, sag deine Meinung, und fasse zusammen.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Gib konkrete, alltagstaugliche Beispiele.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte Werbung für ungesundes Essen eingeschränkt werden?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Werbung für ungesunde Lebensmittel sollte stärker eingeschränkt werden.“ Beziehe Stellung, nenne Argumente, berücksichtige die Sicht der Wirtschaft und die persönliche Freiheit, und begründe deine Position.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Wäge zwischen Schutz und Freiheit ab.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Online einkaufen oder im Geschäft?",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "CORE",
    topicTag: "einkaufen",
    payload: {
      taskPrompt:
        "Thema: Online-Shopping im Vergleich zum Einkaufen im Geschäft. Halte einen Vortrag. Führe ein, vergleiche beide Möglichkeiten anhand von Beispielen, sag, was du selbst bevorzugst und warum, und schließe mit einem Fazit.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Vergleiche systematisch: Preis, Bequemlichkeit, Erlebnis.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Ist ein soziales Pflichtjahr sinnvoll?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Junge Menschen sollten ein verpflichtendes soziales Jahr leisten.“ Beziehe Stellung, nenne Argumente dafür und dagegen, gehe besonders auf das Thema Freiheit ein, und begründe deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Bei einer Pflicht ist das Freiheitsargument zentral — geh darauf ein.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Umweltschutz — Aufgabe des Einzelnen oder der Politik?",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      taskPrompt:
        "Thema: Wer ist für den Umweltschutz verantwortlich — der einzelne Mensch oder die Politik? Halte einen Vortrag. Führe ein, stelle beide Seiten dar, vertritt deine eigene Meinung mit Argumenten, und fasse zusammen.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Stelle beide Seiten fair dar, bevor du dich positionierst.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte es ein generelles Tempolimit geben?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "reisen",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Auf Autobahnen sollte es ein allgemeines Tempolimit geben.“ Beziehe Stellung, nenne mindestens zwei Argumente, reagiere auf ein typisches Gegenargument, und versuche zu überzeugen.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Untermauere deine Argumente mit Gründen (Sicherheit, Umwelt).",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Die Bedeutung von Ehrenamt",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Welche Bedeutung hat ehrenamtliches Engagement für die Gesellschaft? Halte einen Vortrag. Führe ein, erkläre, warum Ehrenamt wichtig ist, nenne Beispiele und auch Schwierigkeiten, sag deine Meinung, und schließe ab.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Nenne sowohl den Nutzen als auch die Herausforderungen.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Bargeld abschaffen?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Wir sollten das Bargeld abschaffen und nur noch digital bezahlen.“ Beziehe Stellung, nenne Argumente, gehe auf das Thema Datenschutz und auf Menschen ohne Bankkarte ein, und begründe deine Meinung.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Denke an Betroffene, die du nicht vergessen solltest (z. B. ohne Karte).",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Digitale Medien und Kinder",
    prompt: "Halte einen kurzen, strukturierten Vortrag auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: Wie sollten Kinder mit digitalen Medien umgehen? Halte einen Vortrag. Führe ein, beschreibe Chancen und Risiken, nenne, was Eltern und Schule tun können, vertritt deine Meinung, und fasse zusammen.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote: "Strukturiere: Chancen – Risiken – Lösungen – Meinung.",
  },
  {
    level: "B2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Brauchen wir die Vier-Tage-Woche?",
    prompt: "Diskutiere und vertritt deine Position auf Deutsch (etwa anderthalb Minuten).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Die Vier-Tage-Woche sollte überall eingeführt werden.“ Beziehe Stellung, nenne Argumente, gehe darauf ein, dass das Modell nicht zu allen Branchen passt, und begründe deine Position.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote: "Räume Grenzen deines Standpunkts ein — das macht dich glaubwürdiger.",
  },

  // ===================== C1 =====================
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Der Wert des Scheiterns",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Thema: Kann Scheitern wertvoll sein? Halte einen Vortrag. Führe differenziert ein, entwickle eine eigene These, stütze sie mit Argumenten und Beispielen, gehe auf eine Gegenposition ein, und schließe mit einem abgewogenen Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "C1: gegliederter Aufbau, nuancierte These, anspruchsvolle Redemittel. Vermeide einseitige Urteile.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte es ein bedingungsloses Grundeinkommen geben?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Ein bedingungsloses Grundeinkommen sollte eingeführt werden.“ Beziehe begründet Stellung, führe mehrere Argumente an, setze dich ernsthaft mit den stärksten Gegenargumenten auseinander, räume offene Fragen ein, und versuche dennoch zu überzeugen.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Gehe auf das STÄRKSTE Gegenargument ein, nicht auf das schwächste.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Welche Rolle sollte Kunst in der Gesellschaft spielen?",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema: Welche Rolle sollte Kunst in der Gesellschaft spielen? Halte einen Vortrag. Kläre kurz, was du unter dem Thema verstehst, entwickle deine Position, begründe sie mit Beispielen, berücksichtige Einwände (etwa zur staatlichen Förderung), und ziehe ein Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Bei abstrakten Themen hilft es, zu Beginn die zentralen Begriffe zu klären.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte Wahlpflicht eingeführt werden?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Es sollte eine gesetzliche Pflicht zur Teilnahme an Wahlen geben.“ Beziehe Stellung, führe Argumente an, gehe besonders auf das Spannungsverhältnis zwischen Beteiligung und Freiheit ein, und begründe deine Haltung überzeugend.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Das Argument der Freiheit ist hier zentral — entkräfte oder gewichte es bewusst.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Bedeutet Fortschritt immer Wachstum?",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      taskPrompt:
        "Thema: Muss Fortschritt immer mit wirtschaftlichem Wachstum verbunden sein? Halte einen Vortrag. Führe ein, entwickle eine eigene Position, stütze sie mit Argumenten und Beispielen, gehe auf Gegenpositionen ein, und schließe mit einem Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Definiere „Fortschritt“ und „Wachstum“ – sonst redet man aneinander vorbei.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollten soziale Medien stärker reguliert werden?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Soziale Medien sollten vom Staat stärker reguliert werden.“ Beziehe Stellung, wäge zwischen dem Schutz vor Desinformation und der Meinungsfreiheit ab, gehe auf das stärkste Gegenargument ein, und begründe deine Haltung.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Halte die Spannung zwischen Schutz und Freiheit bewusst aus.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Die Ökonomie der Aufmerksamkeit",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Wie verändert der Wettbewerb um unsere Aufmerksamkeit unser Leben? Halte einen Vortrag. Beschreibe das Phänomen, entwickle eine eigene Einschätzung, belege sie mit Beispielen, gehe auf mögliche Gegenargumente ein, und ziehe ein Fazit mit Ausblick.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Verbinde eine gesellschaftliche Beobachtung mit einer persönlichen Bewertung.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte Kultur überwiegend öffentlich finanziert werden?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Theater, Museen und Bibliotheken sollten überwiegend mit öffentlichen Mitteln finanziert werden.“ Beziehe Stellung, führe Argumente an, gehe auf den Einwand knapper Kassen ein, und versuche, deine Position überzeugend zu begründen.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Widerlege den „falschen Gegensatz“ zwischen Kultur und anderen Ausgaben.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Freiheit und Verantwortung des Einzelnen",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Thema: Wie viel Freiheit braucht der Einzelne, und wie viel Verantwortung trägt er für die Gemeinschaft? Halte einen Vortrag. Führe ein, entwickle deine Position, begründe sie, gehe auf das jeweils entgegengesetzte Extrem ein, und schließe mit einem Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Lehne beide Extreme ab und entwickle eine vermittelnde Position.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte Bildung vollständig kostenlos sein?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Bildung – von der Schule bis zur Universität – sollte vollständig kostenlos sein.“ Beziehe Stellung, führe Argumente an, gehe auf die Frage der Finanzierung und der Gerechtigkeit ein, und begründe deine Haltung.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Greife das stärkste Gegenargument (z. B. Finanzierung) ernsthaft auf.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Was bedeutet ein gelingendes Leben?",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      taskPrompt:
        "Thema: Was macht ein gelingendes, zufriedenes Leben aus? Halte einen Vortrag. Kläre, was du darunter verstehst, entwickle deine Sicht, belege sie mit Beispielen oder Erkenntnissen, berücksichtige andere Sichtweisen, und ziehe ein Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Stütze persönliche Ansichten auch mit allgemeineren Beobachtungen.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte es eine Vermögenssteuer geben?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Große Vermögen sollten stärker besteuert werden.“ Beziehe Stellung, führe Argumente an, gehe auf Gegenargumente (etwa zu Leistung und Abwanderung) ein, und begründe deine Haltung sachlich.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Bleib sachlich und gehe auf wirtschaftliche Einwände konkret ein.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Die Grenzen der Messbarkeit",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: „Nicht alles, was zählt, lässt sich zählen.“ Halte einen Vortrag zu der Frage, wo das Messen sinnvoll ist und wo es an Grenzen stößt. Entwickle eine Position, belege sie mit Beispielen, berücksichtige den Nutzen von Messung, und schließe mit einem Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Erkenne den Nutzen des Messens an, bevor du seine Grenzen aufzeigst.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollten Großstädte autofrei werden?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Die Innenstädte großer Städte sollten weitgehend autofrei werden.“ Beziehe Stellung, führe Argumente an, gehe auf die Interessen verschiedener Betroffener ein (Anwohner, Geschäfte, Menschen mit Behinderung), und schlage gegebenenfalls Differenzierungen vor.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Berücksichtige unterschiedliche Betroffene — pauschale Lösungen überzeugen auf C1 selten.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Wie verändert die Digitalisierung unser Denken?",
    prompt: "Halte einen strukturierten Vortrag auf Deutsch (etwa zwei bis drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Verändert die ständige Verfügbarkeit von Informationen die Art, wie wir denken und uns erinnern? Halte einen Vortrag. Entwickle eine Position, belege sie, berücksichtige Chancen und Risiken, gehe auf Einwände ein, und ziehe ein Fazit.",
      prepSeconds: 150,
      speakSeconds: 150,
    },
    guidanceNote: "Stelle Chancen und Risiken gegenüber, statt nur zu warnen oder zu loben.",
  },
  {
    level: "C1",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte ehrenamtliches Engagement gefördert und belohnt werden?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema zur Diskussion: „Der Staat sollte ehrenamtliches Engagement mit Vergünstigungen belohnen.“ Beziehe Stellung, führe Argumente an, gehe auf den Einwand ein, dass Belohnungen die Freiwilligkeit untergraben könnten, und begründe deine Haltung.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Das Spannungsfeld Anreiz vs. Freiwilligkeit sollte deine Argumentation tragen.",
  },

  // ===================== C2 =====================
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Der Wert des Zweifels",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: Ist der Zweifel eine Stärke oder eine Schwäche? Halte einen Vortrag. Kläre den Begriff, entwickle eine nuancierte These, stütze sie mit Argumenten und Beispielen, grenze produktiven Zweifel von lähmendem ab, gehe auf eine Gegenposition ein, und schließe mit einem prägnanten Fazit.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "C2: nuancierte These, gehobene Redemittel, klare Gliederung, Differenzierungen statt Schwarz-Weiß.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Ist grenzenlose Wahlfreiheit eine Last?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Die grenzenlose Freiheit der Wahl macht uns nicht freier, sondern unsicherer.“ Beziehe begründet Stellung, führe tragfähige Argumente an, setze dich mit dem stärksten Gegenargument auseinander, vermeide beide Extreme, und versuche, durch Differenzierung zu überzeugen.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Vermeide eine einseitige Antwort; gerade die Differenzierung überzeugt auf C2.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Authentizität – Befreiung oder Zwang?",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Ist die Forderung, „authentisch“ zu sein, eine Befreiung oder ein neuer Zwang? Halte einen Vortrag. Prüfe die Annahme eines „wahren Selbst“, entwickle eine eigene Position, belege sie, berücksichtige Gegenargumente, und schließe mit einem reflektierten Fazit.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Hinterfrage die Voraussetzung der Forderung, statt sie zu übernehmen.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Lässt sich das Werk vom Künstler trennen?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "freizeit",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Ein Kunstwerk sollte unabhängig vom Charakter seines Schöpfers beurteilt werden.“ Beziehe Stellung, zeige, warum beide Extrempositionen zu kurz greifen, entwickle eine vermittelnde Haltung, und begründe sie überzeugend.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Entwickle eine dritte Position jenseits der beiden Extreme.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Die Grenzen des Mitgefühls",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      taskPrompt:
        "Thema: Kann uns das Mitgefühl in die Irre führen? Halte einen Vortrag. Beschreibe die Parteilichkeit des Mitgefühls, entwickle eine eigene Einschätzung, wende dich gegen die Forderung, das Gefühl durch reine Vernunft zu ersetzen, und schließe mit einer vermittelnden These.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Verbinde Gefühl und Vernunft, statt eines gegen das andere auszuspielen.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Untergräbt sich grenzenlose Toleranz selbst?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Eine Toleranz, die auch das Intolerante duldet, zerstört sich am Ende selbst.“ Beziehe Stellung, erörtere das Paradox, weise auf die Gefahr willkürlicher Grenzziehung hin, und begründe eine differenzierte Haltung, ohne die Spannung vorschnell aufzulösen.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Verweigere die „bequeme Formel“ und halte das Paradox bewusst aus.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Hat jeder Fortschritt seinen Preis?",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      taskPrompt:
        "Thema: Bringt jeder Fortschritt stille Verluste mit sich? Halte einen Vortrag. Entwickle eine Position, illustriere Gewinne und unsichtbare Kosten an Beispielen, wende dich gegen pauschale Fortschrittsfeindschaft, und schließe mit einem Plädoyer für einen abwägenden Blick.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Weder Euphorie noch Kulturpessimismus — strebe einen nüchternen Kassensturz an.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte man alles messen, was sich messen lässt?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Nur was sich messen lässt, lässt sich verbessern.“ Beziehe Stellung, würdige den berechtigten Kern, zeige die Grenzen auf, gehe auf den Einwand der Willkür ohne Messung ein, und entwickle eine vermittelnde Position.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Verwechsle das nicht Messbare nicht mit dem Unwichtigen.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Die Illusion der Kontrolle",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      taskPrompt:
        "Thema: Lässt sich das Leben wirklich planen und kontrollieren? Halte einen Vortrag. Beschreibe den modernen Drang zur Kontrolle, lege seine Selbsttäuschung dar, entwickle eine eigene Position, berücksichtige, was sich sehr wohl gestalten lässt, und schließe mit einer reifen Synthese.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Erkenne an, was gestaltbar ist, bevor du die Grenzen der Kontrolle aufzeigst.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Steht Freiheit im Gegensatz zu Sicherheit?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Mehr Sicherheit lässt sich nur auf Kosten der Freiheit gewinnen.“ Beziehe Stellung, hinterfrage den unterstellten Gegensatz, führe Argumente an, gehe auf das stärkste Gegenargument ein, und begründe eine differenzierte Haltung.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Prüfe zuerst, ob der behauptete Gegensatz überhaupt zutrifft.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Vom Wert des Nutzlosen",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      taskPrompt:
        "Thema: Hat das vermeintlich Nutzlose einen eigenen Wert? Halte einen Vortrag. Lege die Engstirnigkeit der reinen Nutzenfrage dar, entwickle eine Position, illustriere sie an Beispielen wie Freundschaft oder zweckfreier Neugier, gehe auf den Einwand der Effizienz ein, und schließe mit einem Fazit.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Unterscheide „Mittel zum Zweck“ und „Zweck in sich“.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Ist Authentizität eine Illusion?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "person",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Ein wahres, authentisches Selbst, das man nur freilegen müsste, gibt es nicht.“ Beziehe Stellung, prüfe die Annahme kritisch, führe Argumente an, gehe auf Einwände ein, und begründe deine Haltung souverän.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Wäge ab, ob wir uns „ausdrücken“ oder erst im Umgang mit anderen „werden“.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Ironie und der Mut zum Ernst",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "Thema: Hat die allgegenwärtige Ironie unserer Zeit auch Schattenseiten? Halte einen Vortrag. Beschreibe die Ironie als Schutzhaltung, lege ihren Preis dar, würdige zugleich ihren kritischen Wert, und schließe mit einem Plädoyer, das weder die Ironie verdammt noch den naiven Ernst verklärt.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Würdige den Wert der Ironie, bevor du ihren Preis benennst.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Sollte alles dauerhaft speicherbar sein?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "These zur Diskussion: „In einer Welt, die alles dauerhaft speichert, braucht der Mensch ein Recht auf Vergessenwerden.“ Beziehe Stellung, lege den Wert des Vergessens dar, gehe auf Einwände (etwa Transparenz) ein, und begründe eine differenzierte Haltung.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "Das Vergessen als „Leistung“ statt als „Mangel“ kann deine Argumentation tragen.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_PRESENT",
    title: "Vortrag: Was bedeutet Arbeit, wenn Maschinen sie übernehmen?",
    prompt: "Halte einen anspruchsvollen Vortrag auf Deutsch (etwa drei Minuten).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      taskPrompt:
        "Thema: Verliert die Arbeit ihren Sinn, wenn Maschinen immer mehr übernehmen? Halte einen Vortrag. Hinterfrage die Annahme, der Sinn der Arbeit liege allein im Produzieren, entwickle eine Position, gehe auf die Frage von Würde und Anerkennung ein, und schließe mit einem Ausblick.",
      prepSeconds: 180,
      speakSeconds: 180,
    },
    guidanceNote: "Verschiebe die Frage vom „Ob wir arbeiten“ zum „Woran wir Würde knüpfen“.",
  },
  {
    level: "C2",
    module: "SPRECHEN",
    taskType: "SPRECHEN_DISCUSS",
    title: "Diskussion: Freiheit ohne Bindung – Gewinn oder Verlust?",
    prompt: "Diskutiere und vertritt deine Position differenziert auf Deutsch (etwa zwei Minuten).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      taskPrompt:
        "These zur Diskussion: „Wer ausschließlich sich selbst verpflichtet ist, gewinnt Freiheit, riskiert aber Vereinzelung.“ Beziehe Stellung, lehne die jeweiligen Extreme ab, strebe eine Versöhnung von Freiheit und Verantwortung an, und begründe deine Haltung.",
      prepSeconds: 60,
      speakSeconds: 150,
    },
    guidanceNote: "„Nicht das eine gegen das andere, sondern beides zugleich“ als Leitgedanke.",
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

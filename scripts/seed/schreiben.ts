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

  // ===================== A2 =====================
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Vom Wochenende erzählen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      situation: "Eine Freundin hat gefragt, was du am letzten Wochenende gemacht hast.",
      instruction:
        "Schreib ihr eine Nachricht. Erzähle, was du gemacht hast, wie es war, und frag, was sie am Wochenende gemacht hat.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Nutze das Perfekt: „Ich bin … gefahren“, „Ich habe … gemacht“.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Einen Termin schriftlich absagen",
    prompt: "Schreib eine kurze, höfliche E-Mail auf Deutsch (circa 40 Wörter).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      situation: "Du hast nächste Woche einen Termin bei der Bank, aber du musst ihn absagen.",
      instruction:
        "Schreib eine höfliche E-Mail an die Bank. Sag, dass du den Termin nicht wahrnehmen kannst, nenne einen Grund, und bitte um einen neuen Termin.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Formell: „Sehr geehrte Damen und Herren“ … „Mit freundlichen Grüßen“.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Einen Ausflug vorschlagen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      situation: "Du möchtest mit Freunden am Sonntag einen Ausflug machen.",
      instruction:
        "Schreib deinen Freunden eine Nachricht. Mach einen Vorschlag für den Ausflug, sag wann und wo ihr euch trefft, und frag, wer mitkommt.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Mach einen klaren Vorschlag und stelle eine Frage am Ende.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Sich für einen Kurs anmelden",
    prompt: "Schreib eine kurze, höfliche E-Mail auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      situation: "Du hast eine Anzeige für einen Computerkurs an der Volkshochschule gesehen.",
      instruction:
        "Schreib eine höfliche E-Mail an die Volkshochschule. Sag, dass du dich für den Kurs interessierst, frag nach Zeiten und Preis, und frag, ob noch Plätze frei sind.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Sag zuerst, worum es geht, dann stelle deine Fragen.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Bitte an die Nachbarin",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    payload: {
      situation: "Du fährst eine Woche in den Urlaub und brauchst Hilfe von deiner Nachbarin.",
      instruction:
        "Schreib deiner Nachbarin eine Nachricht. Sag, dass du im Urlaub bist, bitte sie, die Blumen zu gießen, und sag, wo der Schlüssel ist.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Erkläre die Situation und sag genau, worum du bittest.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Eine Beschwerde über ein Produkt",
    prompt: "Schreib eine kurze, höfliche E-Mail auf Deutsch (circa 40 Wörter).",
    difficulty: "STRETCH",
    topicTag: "einkaufen",
    payload: {
      situation: "Du hast online Schuhe bestellt, aber sie sind zu groß und ein Schuh ist kaputt.",
      instruction:
        "Schreib eine höfliche E-Mail an den Shop. Beschreib das Problem, sag, was du möchtest (Umtausch oder Geld zurück), und bitte um eine schnelle Antwort.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Nenne das Problem sachlich und sag klar, was du willst.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Einen Freund einladen und um Hilfe bitten",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      situation: "Du ziehst am Samstag in eine neue Wohnung um.",
      instruction:
        "Schreib deinem Freund eine Nachricht. Erzähle vom Umzug, bitte ihn um Hilfe beim Tragen, und sag, dass du danach für alle kochst.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Verbinde deine Sätze mit „und“, „weil“ oder „dann“.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Ein Treffen verschieben",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation: "Du wolltest dich morgen mit einer Freundin treffen, aber du musst arbeiten.",
      instruction:
        "Schreib ihr eine Nachricht. Sag, dass es morgen nicht klappt, erkläre warum, und schlag einen neuen Tag vor.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Entschuldige dich kurz und mach einen neuen Vorschlag.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Ein Hotelzimmer reservieren",
    prompt: "Schreib eine kurze, höfliche E-Mail auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      situation: "Du möchtest im Sommer drei Nächte in einem Hotel in München bleiben.",
      instruction:
        "Schreib eine höfliche E-Mail an das Hotel. Reserviere ein Zimmer für drei Nächte, frag nach dem Preis mit Frühstück, und frag, ob es einen Parkplatz gibt.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Gib genaue Informationen: wie viele Nächte, welche Fragen.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Sich für Hilfe bedanken",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation: "Eine Kollegin hat dir letzte Woche bei einem Problem im Büro geholfen.",
      instruction:
        "Schreib ihr eine Nachricht. Bedank dich für die Hilfe, sag, warum sie wichtig war, und lade sie zum Mittagessen ein.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Sag konkret, wofür du dich bedankst.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Nach einem Praktikum fragen",
    prompt: "Schreib eine kurze, höfliche E-Mail auf Deutsch (circa 40 Wörter).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      situation: "Du suchst für den Sommer ein Praktikum in einem Büro.",
      instruction:
        "Schreib eine höfliche E-Mail an die Firma. Stell dich kurz vor, frag, ob es ein Praktikum gibt, und frag, welche Unterlagen du schicken sollst.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Eine kurze Vorstellung gehört in eine formelle Anfrage.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Über die neue Stadt schreiben",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      situation: "Du bist vor Kurzem in eine neue Stadt gezogen. Ein Freund möchte wissen, wie es dir geht.",
      instruction:
        "Schreib deinem Freund eine Nachricht. Erzähle, wie die neue Stadt ist, was dir gefällt, und lade ihn zu einem Besuch ein.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Beschreibe mit einfachen Adjektiven: schön, groß, ruhig, teuer.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Verabredung zum Sport",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      situation: "Du möchtest mit einem Freund zusammen Sport machen.",
      instruction:
        "Schreib deinem Freund eine Nachricht. Schlag eine Sportart vor, sag wann und wo, und frag, ob er Lust hat.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Vorschlag, Zeit, Ort und eine Frage — kurz und klar.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Eine Rechnung reklamieren",
    prompt: "Schreib eine kurze, höfliche E-Mail auf Deutsch (circa 40 Wörter).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      situation: "Du hast eine Rechnung vom Handyanbieter bekommen, aber der Betrag ist zu hoch.",
      instruction:
        "Schreib eine höfliche E-Mail an den Anbieter. Erkläre das Problem mit der Rechnung, frag nach dem Grund, und bitte um eine Korrektur.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Bleib sachlich und höflich, auch wenn du dich ärgerst.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Gute Besserung wünschen",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "gesundheit",
    payload: {
      situation: "Dein Kollege ist krank und kommt diese Woche nicht zur Arbeit.",
      instruction:
        "Schreib ihm eine Nachricht. Wünsch ihm gute Besserung, frag, wie es ihm geht, und biete deine Hilfe an.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "„Gute Besserung!“ und ein Hilfsangebot wirken freundlich.",
  },
  {
    level: "A2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Pläne für den Urlaub",
    prompt: "Schreib eine kurze Nachricht auf Deutsch (circa 40 Wörter).",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      situation: "Eine Freundin fragt dich nach deinen Plänen für den nächsten Urlaub.",
      instruction:
        "Schreib ihr eine Nachricht. Erzähle, wohin du fahren willst, was du dort machen möchtest, und frag nach ihren Plänen.",
      wordMin: 35,
      wordMax: 60,
    },
    guidanceNote: "Für Pläne kannst du „möchte“, „will“ und das Futur mit „werde“ nutzen.",
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

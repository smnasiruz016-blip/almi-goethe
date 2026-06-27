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

  // ===================== B1 =====================
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Forum: Sind soziale Medien gut oder schlecht?",
    prompt: "Schreib einen Beitrag in einem Online-Forum auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      situation:
        "In einem Online-Forum wird diskutiert: „Soziale Medien — Fluch oder Segen?“ Du möchtest deine Meinung schreiben.",
      instruction:
        "Schreib einen Forumsbeitrag. Sag deine Meinung zu sozialen Medien, nenne einen Vorteil und einen Nachteil, gib ein Beispiel aus deinem Leben, und schreib einen kurzen Schluss.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Strukturiere: Meinung – Vorteil – Nachteil – Beispiel – Schluss. Nutze „einerseits/andererseits“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Einem Freund von einem Problem erzählen",
    prompt: "Schreib eine E-Mail an einen Freund auf Deutsch (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      situation:
        "Du wolltest mit einem Freund in den Urlaub fahren, aber jetzt klappt es bei dir nicht.",
      instruction:
        "Schreib deinem Freund eine E-Mail. Erkläre, warum die Reise für dich nicht klappt, entschuldige dich, schlag eine andere Lösung vor, und frag nach seiner Meinung.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Verbinde deine Gedanken mit „weil“, „deshalb“, „trotzdem“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Beschwerde über einen Kurs",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      situation:
        "Du besuchst einen Sprachkurs, aber du bist nicht zufrieden: Der Raum ist zu klein und der Unterricht beginnt oft zu spät.",
      instruction:
        "Schreib eine höfliche, formelle E-Mail an die Sprachschule. Beschreib die Probleme, erkläre, warum sie dich stören, und mach einen Vorschlag, wie man die Situation verbessern könnte.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Bleib sachlich und höflich. Formell: „Sehr geehrte Damen und Herren“ … „Mit freundlichen Grüßen“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Forum: Auto oder öffentliche Verkehrsmittel?",
    prompt: "Schreib einen Beitrag in einem Online-Forum auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      situation:
        "In einem Forum geht es um die Frage: „Sollte man in der Stadt lieber das Auto oder Bus und Bahn benutzen?“",
      instruction:
        "Schreib einen Forumsbeitrag. Nenne deine Meinung, gib Argumente für die öffentlichen Verkehrsmittel und ein Argument für das Auto, und schreib einen kurzen Schluss mit deiner Empfehlung.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Gegenargumente machen einen Text stärker: „Zwar …, aber …“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Eine Einladung zu einer Feier",
    prompt: "Schreib eine E-Mail an Freunde auf Deutsch (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "freizeit",
    payload: {
      situation: "Du hast eine Prüfung bestanden und möchtest das mit deinen Freunden feiern.",
      instruction:
        "Schreib deinen Freunden eine E-Mail. Erzähle die gute Nachricht, lade sie zu einer Feier ein (Datum, Ort, Zeit), sag, was du planst, und bitte sie, dir bis Freitag zu antworten.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Achte darauf, alle vier Punkte aus der Aufgabe zu behandeln.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Anfrage an ein Hotel",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "reisen",
    payload: {
      situation: "Du planst eine Reise und interessierst dich für ein bestimmtes Hotel.",
      instruction:
        "Schreib eine formelle E-Mail an das Hotel. Frag nach einem Zimmer für eine Woche im August, frag nach dem Preis und ob Frühstück inklusive ist, frag, ob es in der Nähe einen Strand gibt, und bitte um eine Bestätigung.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Ordne deine Fragen klar, eine nach der anderen.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Forum: Sollte man weniger Fleisch essen?",
    prompt: "Schreib einen Beitrag in einem Online-Forum auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "gesundheit",
    payload: {
      situation:
        "In einem Gesundheitsforum wird diskutiert: „Sollten wir weniger Fleisch essen?“",
      instruction:
        "Schreib einen Forumsbeitrag. Sag deine Meinung, nenne mindestens zwei Gründe, gib ein persönliches Beispiel oder eine Erfahrung, und schreib einen kurzen Schluss.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Begründe deine Meinung mit „weil“ und „außerdem“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Einem Freund einen Rat geben",
    prompt: "Schreib eine E-Mail an einen Freund auf Deutsch (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      situation:
        "Dein Freund hat dir geschrieben, dass er nicht weiß, ob er ein Praktikum im Ausland machen soll.",
      instruction:
        "Schreib ihm zurück. Sag deine Meinung dazu, nenne Vorteile eines Praktikums im Ausland, weise auf eine mögliche Schwierigkeit hin, und gib ihm einen Rat.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Ratschläge gibt man mit „Ich würde …“, „Du solltest …“, „An deiner Stelle …“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Reklamation: Ein defektes Gerät",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "einkaufen",
    payload: {
      situation:
        "Du hast vor drei Wochen eine Kaffeemaschine gekauft. Jetzt funktioniert sie nicht mehr.",
      instruction:
        "Schreib eine formelle E-Mail an das Geschäft. Beschreib das Problem, sag, wann du das Gerät gekauft hast, erkläre, was du möchtest (Reparatur, Umtausch oder Geld zurück), und bitte um eine schnelle Antwort.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Nenne wichtige Fakten: Kaufdatum, Problem, gewünschte Lösung.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Forum: Homeoffice — Vorteil oder Nachteil?",
    prompt: "Schreib einen Beitrag in einem Online-Forum auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      situation:
        "In einem Forum geht es um die Frage: „Ist Homeoffice eher ein Vorteil oder ein Nachteil?“",
      instruction:
        "Schreib einen Forumsbeitrag. Nenne deine Meinung, einen Vorteil und einen Nachteil des Homeoffice, gib ein Beispiel, und beende den Text mit deiner persönlichen Empfehlung.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Ein klarer Schluss rundet einen Meinungstext ab.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Sich für eine Hilfe bedanken und berichten",
    prompt: "Schreib eine E-Mail an eine Freundin auf Deutsch (circa 80 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    payload: {
      situation:
        "Eine Freundin hat dir beim Umzug geholfen. Jetzt wohnst du in der neuen Wohnung.",
      instruction:
        "Schreib ihr eine E-Mail. Bedank dich für die Hilfe, erzähle, wie es dir in der neuen Wohnung gefällt, lade sie zum Essen ein, und schlag einen Termin vor.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Verbinde Dank, Bericht und Einladung zu einem flüssigen Text.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Bewerbung um einen Ferienjob",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      situation:
        "Ein Café in deiner Stadt sucht für den Sommer Aushilfen. Du möchtest dort arbeiten.",
      instruction:
        "Schreib eine formelle E-Mail an das Café. Stell dich kurz vor, sag, warum du dich für die Stelle interessierst, nenne, wann du Zeit hast, und frag nach den nächsten Schritten.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Eine Bewerbung ist sachlich: Vorstellung, Motivation, Verfügbarkeit.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Über das Wochenende berichten",
    prompt: "Schreib eine E-Mail an einen Freund auf Deutsch (circa 80 Wörter).",
    difficulty: "FOUNDATION",
    topicTag: "freizeit",
    payload: {
      situation:
        "Du warst am Wochenende auf einem Konzert. Ein Freund möchte wissen, wie es war.",
      instruction:
        "Schreib deinem Freund eine E-Mail. Erzähle, wo du warst und mit wem, beschreibe, wie es war, sag, was dir besonders gefallen hat, und frag, was er am Wochenende gemacht hat.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Erzähle im Perfekt und nutze Adjektive, um es lebendig zu machen.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Forum: Brauchen Kinder ein Smartphone?",
    prompt: "Schreib einen Beitrag in einem Online-Forum auf Deutsch (circa 80 Wörter).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      situation:
        "In einem Elternforum wird diskutiert: „Ab welchem Alter sollten Kinder ein Smartphone haben?“",
      instruction:
        "Schreib einen Forumsbeitrag. Sag deine Meinung, nenne Argumente dafür und dagegen, gib einen Vorschlag für ein passendes Alter, und schreib einen kurzen Schluss.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Wäge ab: „Auf der einen Seite … auf der anderen Seite …“.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Ein gemeinsames Geschenk organisieren",
    prompt: "Schreib eine E-Mail an Kollegen auf Deutsch (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      situation:
        "Eine Kollegin geht bald in Rente. Ihr möchtet ihr zusammen ein Geschenk kaufen.",
      instruction:
        "Schreib eine E-Mail an deine Kollegen. Erkläre die Idee, mach einen Vorschlag für das Geschenk, frag, wer mitmacht und Geld dazugibt, und nenne einen Termin, bis wann sie antworten sollen.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Sei klar und freundlich, damit alle wissen, was zu tun ist.",
  },
  {
    level: "B1",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Eine Bitte an die Hausverwaltung",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 80 Wörter).",
    difficulty: "CORE",
    topicTag: "wohnen",
    payload: {
      situation:
        "In deinem Haus ist das Treppenlicht seit Wochen kaputt und es ist abends sehr dunkel.",
      instruction:
        "Schreib eine formelle E-Mail an die Hausverwaltung. Beschreib das Problem, erkläre, warum es gefährlich ist, bitte um eine baldige Reparatur, und frag, bis wann das erledigt sein kann.",
      wordMin: 70,
      wordMax: 100,
    },
    guidanceNote: "Begründe deine Bitte (Sicherheit) — das macht sie überzeugender.",
  },

  // ===================== B2 =====================
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Sollte Studieren kostenlos sein?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      situation:
        "In einem Online-Forum wird über die Frage diskutiert: „Sollte ein Studium an Universitäten für alle kostenlos sein?“ Du möchtest dich an der Diskussion beteiligen.",
      instruction:
        "Schreib einen Diskussionsbeitrag. Nenne deine Meinung, führe mindestens zwei Argumente an und belege sie mit Beispielen, gehe auf ein Gegenargument ein und entkräfte es, und schließe mit einem klaren Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "B2-Struktur: Einleitung – Argumente mit Beispielen – Gegenargument – Fazit. Nutze Konnektoren (zudem, dennoch, folglich).",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Brauchen wir noch Bargeld?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      situation:
        "In einem Forum wird diskutiert: „Sollten wir Bargeld abschaffen und nur noch digital bezahlen?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Erkläre deine Position, nenne Vorteile und Nachteile des bargeldlosen Bezahlens, gib ein konkretes Beispiel, berücksichtige eine andere Sichtweise, und ziehe ein Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Wäge differenziert ab und vergiss das Fazit nicht.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Formelle Beschwerde über eine verspätete Lieferung",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 120 Wörter).",
    difficulty: "STRETCH",
    topicTag: "einkaufen",
    payload: {
      situation:
        "Du hast vor drei Wochen Möbel bestellt und im Voraus bezahlt. Der vereinbarte Liefertermin ist längst verstrichen, und auf deine Nachfragen reagiert die Firma nicht.",
      instruction:
        "Schreib eine formelle Beschwerde an die Firma. Schildere den Sachverhalt sachlich, erkläre, warum die Verzögerung für dich ein Problem ist, fordere eine konkrete Lösung mit Frist, und kündige an, was du sonst tun wirst.",
      wordMin: 100,
      wordMax: 150,
    },
    guidanceNote: "Bleib sachlich, aber bestimmt. Setze eine klare Frist.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Ist Reisen mit dem Flugzeug noch vertretbar?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      situation:
        "In einem Forum geht es um die Frage: „Sollte man wegen der Umwelt seltener fliegen?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Nenne deine Meinung, führe Argumente für weniger Fliegen an, berücksichtige aber auch, warum Fliegen für manche Menschen wichtig ist, schlage einen vernünftigen Mittelweg vor, und schließe mit einem Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Ein guter B2-Text berücksichtigt mehrere Perspektiven.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Formelle Anfrage zu einer Weiterbildung",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 120 Wörter).",
    difficulty: "CORE",
    topicTag: "arbeit",
    payload: {
      situation:
        "Du interessierst dich für eine berufliche Weiterbildung, die ein Bildungsinstitut anbietet, brauchst aber noch genauere Informationen.",
      instruction:
        "Schreib eine formelle E-Mail an das Institut. Stell dich kurz vor, erkläre dein Interesse, stelle drei konkrete Fragen (z. B. zu Voraussetzungen, Dauer und Kosten), und frag, ob eine Förderung möglich ist.",
      wordMin: 100,
      wordMax: 150,
    },
    guidanceNote: "Strukturiere deine Anfrage übersichtlich, eine Frage nach der anderen.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Smartphones in der Schule",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "lernen",
    payload: {
      situation:
        "In einem Bildungsforum wird diskutiert: „Sollten Smartphones an Schulen komplett verboten werden?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Vertritt eine klare Position, nenne Argumente dafür, gehe auf Gegenargumente ein, gib ein Beispiel aus deiner eigenen Erfahrung, und beende den Text mit einer Empfehlung.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Verbinde deine Absätze logisch: „Einerseits … andererseits … letztlich …“.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Formeller Vorschlag an den Arbeitgeber",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 120 Wörter).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      situation:
        "In deinem Unternehmen gibt es keine Möglichkeit, im Homeoffice zu arbeiten. Du möchtest deiner Vorgesetzten vorschlagen, das zu ändern.",
      instruction:
        "Schreib eine formelle E-Mail an deine Vorgesetzte. Beschreib die aktuelle Situation, mach einen konkreten Vorschlag, begründe ihn mit den Vorteilen für die Firma, gehe kurz auf mögliche Bedenken ein, und bitte um ein Gespräch.",
      wordMin: 100,
      wordMax: 150,
    },
    guidanceNote: "Argumentiere aus Sicht des Unternehmens, nicht nur aus deiner eigenen.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Freiwilliges soziales Jahr für alle?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      situation:
        "In einem Forum wird diskutiert: „Sollte für junge Menschen ein soziales Jahr verpflichtend sein?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Nenne deine Meinung, führe Argumente an, berücksichtige das Argument der persönlichen Freiheit, gib ein Beispiel, und schließe mit einem klaren Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Bei einer Pflicht ist das Argument der Freiheit besonders wichtig.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Gesundes Essen in Kantinen",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "gesundheit",
    payload: {
      situation:
        "In einem Forum geht es um die Frage: „Sollten Kantinen in Firmen und Schulen nur noch gesundes Essen anbieten?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Erkläre deine Position, nenne Vor- und Nachteile, gehe auf das Thema Wahlfreiheit ein, gib ein Beispiel, und ziehe ein Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Wäge zwischen Gesundheit und Wahlfreiheit ab.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Formelle Beschwerde an die Stadtverwaltung",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 120 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      situation:
        "In deiner Straße fehlt es an sicheren Radwegen, und es kommt häufig zu gefährlichen Situationen zwischen Autos und Radfahrern.",
      instruction:
        "Schreib eine formelle E-Mail an die Stadtverwaltung. Beschreib das Problem konkret, erkläre, warum es gefährlich ist, mach einen Verbesserungsvorschlag, und bitte um eine Stellungnahme.",
      wordMin: 100,
      wordMax: 150,
    },
    guidanceNote: "Konkrete Beispiele machen eine Beschwerde überzeugender.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Werbung für Kinder verbieten?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "alltag",
    payload: {
      situation:
        "In einem Forum wird diskutiert: „Sollte Werbung, die sich an Kinder richtet, verboten werden?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Vertritt eine Position, nenne Argumente und Beispiele, berücksichtige die Sicht der Wirtschaft, und schließe mit deiner Empfehlung.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Denke auch an die Gegenseite (z. B. wirtschaftliche Interessen).",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Formelle Bewerbung um eine Stelle",
    prompt: "Schreib eine formelle Bewerbungs-E-Mail auf Deutsch (circa 130 Wörter).",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    payload: {
      situation:
        "Du hast eine Stellenanzeige für eine Teilzeitstelle gefunden, die gut zu dir passt, und möchtest dich bewerben.",
      instruction:
        "Schreib eine formelle Bewerbung. Nenne die Stelle, auf die du dich beziehst, stell dich und deine Erfahrung kurz vor, erkläre, warum du geeignet bist, nenne deinen frühesten Eintrittstermin, und bitte um ein Vorstellungsgespräch.",
      wordMin: 110,
      wordMax: 160,
    },
    guidanceNote: "Eine Bewerbung ist sachlich und betont, was du dem Arbeitgeber bietest.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Müssen wir weniger besitzen?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      situation:
        "In einem Forum geht es um die Frage: „Macht uns weniger Besitz glücklicher?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Nenne deine Meinung, führe Argumente und ein persönliches Beispiel an, gehe auf eine Gegenposition ein, und ziehe ein begründetes Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Persönliche Beispiele machen einen Meinungstext glaubwürdig.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_MESSAGE",
    title: "Einer Freundin eine schwierige Entscheidung mitteilen",
    prompt: "Schreib eine ausführliche E-Mail an eine Freundin auf Deutsch (circa 120 Wörter).",
    difficulty: "CORE",
    topicTag: "alltag",
    payload: {
      situation:
        "Du hast ein Jobangebot im Ausland bekommen und musst dich bald entscheiden. Eine gute Freundin möchte wissen, wie es dir damit geht.",
      instruction:
        "Schreib deiner Freundin eine E-Mail. Erzähle von dem Angebot, beschreibe, was für und was gegen den Schritt spricht, sag, wozu du gerade tendierst, und bitte sie um ihre Meinung.",
      wordMin: 100,
      wordMax: 150,
    },
    guidanceNote: "Drücke Gefühle und Abwägungen aus: „einerseits …, andererseits …“.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_LETTER",
    title: "Formelle Bitte um Verlängerung einer Frist",
    prompt: "Schreib eine formelle E-Mail auf Deutsch (circa 120 Wörter).",
    difficulty: "CORE",
    topicTag: "lernen",
    payload: {
      situation:
        "Du machst einen Online-Kurs und sollst eine Abschlussarbeit abgeben. Aus persönlichen Gründen schaffst du die Frist nicht.",
      instruction:
        "Schreib eine formelle E-Mail an die Kursleitung. Erkläre höflich deine Situation, bitte um eine Verlängerung der Frist, schlage einen konkreten neuen Termin vor, und versichere, dass du die Arbeit sicher abgibst.",
      wordMin: 100,
      wordMax: 150,
    },
    guidanceNote: "Eine gute Begründung und ein konkreter Vorschlag erhöhen die Chancen.",
  },
  {
    level: "B2",
    module: "SCHREIBEN",
    taskType: "SCHREIBEN_ESSAY",
    title: "Diskussionsbeitrag: Sollten Städte autofrei werden?",
    prompt: "Schreib einen Diskussionsbeitrag in einem Online-Forum auf Deutsch (circa 150 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    payload: {
      situation:
        "In einem Forum wird diskutiert: „Sollten Innenstädte komplett autofrei werden?“",
      instruction:
        "Schreib einen Diskussionsbeitrag. Vertritt eine klare Position, nenne Argumente mit Beispielen, gehe auf das Argument der Geschäfte und älterer Menschen ein, schlage gegebenenfalls Kompromisse vor, und schließe mit einem Fazit.",
      wordMin: 130,
      wordMax: 180,
    },
    guidanceNote: "Berücksichtige verschiedene Betroffene (Geschäfte, ältere Menschen).",
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

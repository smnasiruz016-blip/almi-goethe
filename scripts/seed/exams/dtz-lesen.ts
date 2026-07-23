// DTZ (Deutsch-Test für Zuwanderer, A2–B1) — Leseverstehen. Original practice items.
//
// ORIGINALITY (doctrine #1): every text and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from real DTZ / telc / Goethe materials,
// Modelltests or Übungssätze. Same IP rule applied across the exam engine.
//
// ── REGISTER: EVERYDAY / INTEGRATION, A2–B1 ─────────────────────────────────
// The DTZ is an integration exam. Its Leseverstehen texts are the German of
// daily life at a new place of residence: catalogues and directories, small
// ads, press and official notices, information brochures and formal letters —
// never the academic prose of TestDaF. Authoring these in an academic register
// would be teaching the wrong exam.
//
// FIVE Teile, all three-option multiple choice (a / b / c):
//   Teil 1  Kataloge / Verzeichnisse         3 items × 5 questions
//   Teil 2  Anzeigen                          3 items × 5 questions
//   Teil 3  Presse / amtliche Mitteilungen    3 items × 6 questions
//   Teil 4  Informationsbroschüren            3 items × 3 questions
//   Teil 5  formeller Brief                   3 items × 6 questions
//
// Answer keys are authored naturally and vary across a/b/c; the caller permutes
// option positions deterministically at load time.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.DTZ;
const base = {
  exam: "DTZ" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
};

const RAW_ITEMS: ExamItemInput[] = [
  // ── Teil 1 — Kataloge / Verzeichnisse (3 items × 5 Fragen) ────────────────
  {
    ...base,
    taskType: "DTZ_LV_TEIL1",
    title: "Herbstprogramm der Volkshochschule",
    prompt: "Lesen Sie das Kursverzeichnis und beantworten Sie die fünf Fragen.",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Herbstprogramm der Volkshochschule — eine Auswahl\n\n" +
        "Nähen für Anfänger (Kurs 101): montags 18–20 Uhr, 8 Termine, 60 Euro. Nähmaschinen sind vorhanden.\n\n" +
        "Deutsch am Arbeitsplatz (Kurs 214): dienstags und donnerstags 9–11 Uhr, 12 Termine, 40 Euro. Für Menschen mit Grundkenntnissen.\n\n" +
        "Schwimmen für Frauen (Kurs 330): samstags 8–9 Uhr, 10 Termine, 50 Euro. Nur für Anfängerinnen.\n\n" +
        "Computer im Alltag (Kurs 405): mittwochs 17–19 Uhr, 6 Termine, 30 Euro. Ein eigener Laptop ist nicht nötig.\n\n" +
        "Gesund kochen mit kleinem Geld (Kurs 512): freitags 16–18 Uhr, 5 Termine, 45 Euro inklusive Zutaten.",
      questions: [
        {
          id: "q1",
          stem: "An welchem Tag findet der Nähkurs statt?",
          options: [
            { id: "a", text: "montags" },
            { id: "b", text: "mittwochs" },
            { id: "c", text: "freitags" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie viel kostet der Computerkurs?",
          options: [
            { id: "a", text: "45 Euro" },
            { id: "b", text: "30 Euro" },
            { id: "c", text: "60 Euro" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Für wen ist der Schwimmkurs?",
          options: [
            { id: "a", text: "für Kinder" },
            { id: "b", text: "für Männer" },
            { id: "c", text: "für Frauen, die Anfängerinnen sind" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Was ist im Preis des Kochkurses enthalten?",
          options: [
            { id: "a", text: "die Zutaten" },
            { id: "b", text: "ein Kochbuch" },
            { id: "c", text: "eine Schürze" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Wie oft in der Woche findet der Deutschkurs statt?",
          options: [
            { id: "a", text: "einmal" },
            { id: "b", text: "zweimal" },
            { id: "c", text: "dreimal" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL1",
    title: "Aus dem Möbelkatalog",
    prompt: "Lesen Sie den Katalog und beantworten Sie die fünf Fragen.",
    topicTag: "einkaufen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Aus dem Katalog „Wohnen & Sparen“\n\n" +
        "Regal „Berg“: 80 cm breit, weiß, aus Holz. Wird in zwei Teilen geliefert und selbst aufgebaut. 39 Euro.\n\n" +
        "Schreibtisch „Fleiß“: mit drei Schubladen, höhenverstellbar. In Braun oder Grau. 129 Euro.\n\n" +
        "Bürostuhl „Ruhe“: mit Rollen und Armlehnen, für Personen bis 120 kg. 89 Euro.\n\n" +
        "Lampe „Licht“: für den Schreibtisch, mit warmem Licht, Kabel 1,5 m. 19 Euro.\n\n" +
        "Teppich „Weich“: 120 × 80 cm, grau, waschbar bei 30 Grad. 25 Euro.",
      questions: [
        {
          id: "q1",
          stem: "Welches Möbelstück muss man selbst aufbauen?",
          options: [
            { id: "a", text: "den Bürostuhl" },
            { id: "b", text: "das Regal" },
            { id: "c", text: "die Lampe" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "In welchen Farben gibt es den Schreibtisch?",
          options: [
            { id: "a", text: "in Braun oder Grau" },
            { id: "b", text: "nur in Weiß" },
            { id: "c", text: "in Schwarz" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Bis zu welchem Gewicht ist der Bürostuhl geeignet?",
          options: [
            { id: "a", text: "bis 80 kg" },
            { id: "b", text: "bis 120 kg" },
            { id: "c", text: "bis 150 kg" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Was kann man bei 30 Grad waschen?",
          options: [
            { id: "a", text: "den Teppich" },
            { id: "b", text: "den Stuhl" },
            { id: "c", text: "das Regal" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Welches Angebot ist am günstigsten?",
          options: [
            { id: "a", text: "die Lampe" },
            { id: "b", text: "der Teppich" },
            { id: "c", text: "das Regal" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL1",
    title: "Wegweiser im Bürgerzentrum",
    prompt: "Lesen Sie das Verzeichnis und beantworten Sie die fünf Fragen.",
    topicTag: "behoerde",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Wegweiser im Bürgerzentrum\n\n" +
        "Erdgeschoss, Zimmer 5 — Anmeldung: Hier melden Sie Ihren Wohnsitz an oder ab. Bitte ziehen Sie eine Nummer.\n\n" +
        "Erdgeschoss, Zimmer 8 — Kasse: Zahlung von Gebühren, nur mit Karte.\n\n" +
        "1. Stock, Zimmer 14 — Ausländerbehörde: Aufenthaltstitel und Verlängerungen. Nur mit Termin.\n\n" +
        "1. Stock, Zimmer 20 — Standesamt: Anmeldung von Geburten und Eheschließungen.\n\n" +
        "2. Stock, Zimmer 31 — Sozialberatung: kostenlose Beratung, dienstags und donnerstags ohne Termin.",
      questions: [
        {
          id: "q1",
          stem: "Wo melden Sie Ihren Wohnsitz an?",
          options: [
            { id: "a", text: "in Zimmer 5" },
            { id: "b", text: "in Zimmer 14" },
            { id: "c", text: "in Zimmer 31" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie kann man an der Kasse bezahlen?",
          options: [
            { id: "a", text: "bar" },
            { id: "b", text: "mit Karte" },
            { id: "c", text: "mit dem Handy" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was braucht man für die Ausländerbehörde?",
          options: [
            { id: "a", text: "eine Nummer" },
            { id: "b", text: "einen Termin" },
            { id: "c", text: "nichts" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Wo meldet man eine Geburt an?",
          options: [
            { id: "a", text: "im Standesamt" },
            { id: "b", text: "in der Sozialberatung" },
            { id: "c", text: "an der Kasse" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Wann ist die Sozialberatung ohne Termin möglich?",
          options: [
            { id: "a", text: "montags und mittwochs" },
            { id: "b", text: "dienstags und donnerstags" },
            { id: "c", text: "jeden Tag" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ── Teil 2 — Anzeigen (3 items × 5 Fragen) ────────────────────────────────
  {
    ...base,
    taskType: "DTZ_LV_TEIL2",
    title: "Wohnung zu vermieten",
    prompt: "Lesen Sie die Anzeige und beantworten Sie die fünf Fragen.",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "3-Zimmer-Wohnung ab 1. September zu vermieten\n\n" +
        "Helle Wohnung im zweiten Stock, 68 m², mit Balkon nach Süden. Küche und Bad sind neu. Die Wohnung liegt ruhig, aber nur zehn Minuten zu Fuß vom Bahnhof. Miete 720 Euro plus 180 Euro Nebenkosten. Eine Kaution von zwei Monatsmieten ist nötig. Haustiere sind nach Absprache erlaubt. Die Wohnung hat keinen Aufzug. Besichtigung nur samstags. Kontakt bitte über das Formular, nicht telefonisch.",
      questions: [
        {
          id: "q1",
          stem: "Ab wann ist die Wohnung frei?",
          options: [
            { id: "a", text: "ab dem 1. September" },
            { id: "b", text: "sofort" },
            { id: "c", text: "ab dem 1. Oktober" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie kommt man zum Bahnhof?",
          options: [
            { id: "a", text: "mit dem Bus" },
            { id: "b", text: "mit dem Auto" },
            { id: "c", text: "in zehn Minuten zu Fuß" },
          ],
          answer: "c",
        },
        {
          id: "q3",
          stem: "Wie hoch ist die Kaution?",
          options: [
            { id: "a", text: "zwei Monatsmieten" },
            { id: "b", text: "eine Monatsmiete" },
            { id: "c", text: "es gibt keine Kaution" },
          ],
          answer: "a",
        },
        {
          id: "q4",
          stem: "Was gilt für Haustiere?",
          options: [
            { id: "a", text: "Sie sind verboten." },
            { id: "b", text: "Sie sind nach Absprache erlaubt." },
            { id: "c", text: "Sie sind immer erlaubt." },
          ],
          answer: "b",
        },
        {
          id: "q5",
          stem: "Wie soll man Kontakt aufnehmen?",
          options: [
            { id: "a", text: "über das Formular" },
            { id: "b", text: "telefonisch" },
            { id: "c", text: "persönlich" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL2",
    title: "Reinigungskraft gesucht",
    prompt: "Lesen Sie die Anzeige und beantworten Sie die fünf Fragen.",
    topicTag: "arbeit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Reinigungskraft gesucht\n\n" +
        "Ein Bürogebäude in der Stadtmitte sucht ab sofort eine Reinigungskraft. Arbeitszeit: montags bis freitags von 6 bis 9 Uhr, also 15 Stunden pro Woche. Der Lohn liegt bei 14 Euro pro Stunde. Erfahrung ist nicht nötig, wir zeigen Ihnen alles. Deutschkenntnisse sollten für einfache Gespräche reichen. Wichtig ist, dass Sie zuverlässig und pünktlich sind. Bewerbungen bitte per E-Mail. Rufen Sie nicht an, wir melden uns bei Ihnen.",
      questions: [
        {
          id: "q1",
          stem: "Wann soll die Person arbeiten?",
          options: [
            { id: "a", text: "am Wochenende" },
            { id: "b", text: "frühmorgens an Werktagen" },
            { id: "c", text: "am Abend" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wie viele Stunden pro Woche sind es?",
          options: [
            { id: "a", text: "15 Stunden" },
            { id: "b", text: "30 Stunden" },
            { id: "c", text: "9 Stunden" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Braucht man Erfahrung?",
          options: [
            { id: "a", text: "ja, viel Erfahrung" },
            { id: "b", text: "nein" },
            { id: "c", text: "nur ein Zeugnis" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Welche Eigenschaft ist besonders wichtig?",
          options: [
            { id: "a", text: "Zuverlässigkeit" },
            { id: "b", text: "Kreativität" },
            { id: "c", text: "ein Führerschein" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Wie soll man sich bewerben?",
          options: [
            { id: "a", text: "telefonisch" },
            { id: "b", text: "per E-Mail" },
            { id: "c", text: "persönlich" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL2",
    title: "Verkauf wegen Umzug",
    prompt: "Lesen Sie die Anzeige und beantworten Sie die fünf Fragen.",
    topicTag: "einkaufen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Kinderwagen und mehr zu verkaufen\n\n" +
        "Wegen Umzug verkaufe ich mehrere Dinge. Kinderwagen, drei Jahre alt, gut erhalten, 50 Euro. Dazu ein Kindersitz fürs Auto, 20 Euro. Ein Hochstuhl aus Holz, 15 Euro. Alles zusammen für 75 Euro. Die Sachen sind sauber und funktionieren. Abholung bis Ende des Monats in der Gartenstraße. Ich verschicke nichts. Bezahlung bar bei Abholung. Bei Interesse schreiben Sie mir bitte eine Nachricht.",
      questions: [
        {
          id: "q1",
          stem: "Warum verkauft die Person die Sachen?",
          options: [
            { id: "a", text: "wegen eines Umzugs" },
            { id: "b", text: "weil sie kaputt sind" },
            { id: "c", text: "weil sie zu teuer waren" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was kostet alles zusammen?",
          options: [
            { id: "a", text: "85 Euro" },
            { id: "b", text: "75 Euro" },
            { id: "c", text: "50 Euro" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Bis wann kann man die Sachen abholen?",
          options: [
            { id: "a", text: "bis Ende des Monats" },
            { id: "b", text: "bis morgen" },
            { id: "c", text: "jederzeit" },
          ],
          answer: "a",
        },
        {
          id: "q4",
          stem: "Wie wird bezahlt?",
          options: [
            { id: "a", text: "mit Karte" },
            { id: "b", text: "bar bei Abholung" },
            { id: "c", text: "im Voraus" },
          ],
          answer: "b",
        },
        {
          id: "q5",
          stem: "Was macht die Person nicht?",
          options: [
            { id: "a", text: "Sie verschickt die Sachen nicht." },
            { id: "b", text: "Sie gibt keine Auskunft." },
            { id: "c", text: "Sie zeigt die Sachen nicht." },
          ],
          answer: "a",
        },
      ],
    },
  },

  // ── Teil 3 — Presse / amtliche Mitteilungen (3 items × 6 Fragen) ──────────
  {
    ...base,
    taskType: "DTZ_LV_TEIL3",
    title: "Wasser wird abgestellt",
    prompt: "Lesen Sie die Mitteilung und beantworten Sie die sechs Fragen.",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Mitteilung der Stadtwerke an die Bewohner der Lindenstraße\n\n" +
        "Sehr geehrte Bewohnerinnen und Bewohner,\n\n" +
        "am Mittwoch, den 12. Oktober, wird in Ihrer Straße das Wasser abgestellt. Der Grund ist eine notwendige Reparatur an der Hauptleitung. Das Wasser ist von 8 bis voraussichtlich 15 Uhr nicht verfügbar. Wir bitten Sie, sich am Morgen genug Trinkwasser bereitzustellen.\n\n" +
        "Nach der Reparatur kann das Wasser zuerst braun sein. Lassen Sie es einige Minuten laufen, bis es wieder klar ist. Trinken Sie es erst dann. Sollten die Arbeiten länger dauern, informieren wir Sie über einen Aushang. Bei Fragen erreichen Sie uns unter der bekannten Nummer, werktags von 9 bis 16 Uhr. Wir danken für Ihr Verständnis.",
      questions: [
        {
          id: "q1",
          stem: "Was passiert am 12. Oktober?",
          options: [
            { id: "a", text: "Das Wasser wird abgestellt." },
            { id: "b", text: "Der Strom fällt aus." },
            { id: "c", text: "Die Straße wird gesperrt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum wird das Wasser abgestellt?",
          options: [
            { id: "a", text: "wegen einer Reparatur" },
            { id: "b", text: "wegen eines Festes" },
            { id: "c", text: "wegen des Wetters" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lange soll das Wasser weg sein?",
          options: [
            { id: "a", text: "den ganzen Tag" },
            { id: "b", text: "von 8 bis etwa 15 Uhr" },
            { id: "c", text: "nur eine Stunde" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Was sollen die Bewohner am Morgen tun?",
          options: [
            { id: "a", text: "Trinkwasser bereitstellen" },
            { id: "b", text: "das Haus verlassen" },
            { id: "c", text: "die Fenster schließen" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Was soll man tun, wenn das Wasser braun ist?",
          options: [
            { id: "a", text: "es sofort trinken" },
            { id: "b", text: "es einige Minuten laufen lassen" },
            { id: "c", text: "einen Arzt rufen" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Wie werden die Bewohner informiert, wenn es länger dauert?",
          options: [
            { id: "a", text: "per SMS" },
            { id: "b", text: "über einen Aushang" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL3",
    title: "Neue Öffnungszeiten der Bibliothek",
    prompt: "Lesen Sie die Pressemeldung und beantworten Sie die sechs Fragen.",
    topicTag: "stadt",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Die Stadtbibliothek ändert ihre Öffnungszeiten\n\n" +
        "Ab dem 1. November gelten in der Stadtbibliothek neue Öffnungszeiten. Die Bibliothek öffnet dann bereits um 10 Uhr statt wie bisher um 11 Uhr. Dafür schließt sie am Freitag schon um 17 Uhr. An Samstagen bleibt die Bibliothek weiterhin bis 14 Uhr geöffnet.\n\n" +
        "Neu ist, dass Bücher jetzt auch am Automaten im Eingang zurückgegeben werden können, und zwar rund um die Uhr. Wer ein Buch länger behalten möchte, kann die Leihzeit einmal im Internet verlängern. Für Kinder gibt es ab November jeden Mittwoch um 16 Uhr eine Vorlesestunde. Der Eintritt und die Nutzung sind weiterhin kostenlos. Ein neuer Ausweis kostet fünf Euro.",
      questions: [
        {
          id: "q1",
          stem: "Ab wann gelten die neuen Zeiten?",
          options: [
            { id: "a", text: "ab dem 1. November" },
            { id: "b", text: "sofort" },
            { id: "c", text: "ab Januar" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann öffnet die Bibliothek jetzt?",
          options: [
            { id: "a", text: "um 10 Uhr" },
            { id: "b", text: "um 11 Uhr" },
            { id: "c", text: "um 9 Uhr" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist am Automaten möglich?",
          options: [
            { id: "a", text: "Bücher jederzeit zurückgeben" },
            { id: "b", text: "Bücher kaufen" },
            { id: "c", text: "Kaffee holen" },
          ],
          answer: "a",
        },
        {
          id: "q4",
          stem: "Wie oft kann man die Leihzeit verlängern?",
          options: [
            { id: "a", text: "beliebig oft" },
            { id: "b", text: "einmal" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "b",
        },
        {
          id: "q5",
          stem: "Was gibt es mittwochs für Kinder?",
          options: [
            { id: "a", text: "eine Vorlesestunde" },
            { id: "b", text: "einen Malkurs" },
            { id: "c", text: "ein Kino" },
          ],
          answer: "a",
        },
        {
          id: "q6",
          stem: "Was kostet fünf Euro?",
          options: [
            { id: "a", text: "der Eintritt" },
            { id: "b", text: "ein neuer Ausweis" },
            { id: "c", text: "jedes Buch" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL3",
    title: "Änderungen beim Sperrmüll",
    prompt: "Lesen Sie die amtliche Mitteilung und beantworten Sie die sechs Fragen.",
    topicTag: "umwelt",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Information des Abfallamtes\n\n" +
        "Ab Januar ändert sich in unserer Stadt die Abholung des Sperrmülls. Bisher konnten große Möbel einfach an die Straße gestellt werden. In Zukunft muss die Abholung angemeldet werden, entweder telefonisch oder über die Internetseite der Stadt. Nach der Anmeldung bekommen Sie einen Termin, meist innerhalb von zwei Wochen.\n\n" +
        "Stellen Sie den Sperrmüll erst am Abend vor dem Termin heraus, nicht früher. Elektrogeräte gehören nicht zum Sperrmüll; diese geben Sie am Wertstoffhof ab. Auch Farben und Batterien dürfen nicht in den Sperrmüll. Wer sich nicht an die Regeln hält, muss mit einer Gebühr rechnen. Die Anmeldung selbst ist kostenlos.",
      questions: [
        {
          id: "q1",
          stem: "Was ändert sich ab Januar?",
          options: [
            { id: "a", text: "Sperrmüll muss angemeldet werden." },
            { id: "b", text: "Sperrmüll wird teurer." },
            { id: "c", text: "Es gibt keinen Sperrmüll mehr." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie kann man die Abholung anmelden?",
          options: [
            { id: "a", text: "nur persönlich" },
            { id: "b", text: "telefonisch oder im Internet" },
            { id: "c", text: "per Brief" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wann bekommt man meist einen Termin?",
          options: [
            { id: "a", text: "am selben Tag" },
            { id: "b", text: "innerhalb von zwei Wochen" },
            { id: "c", text: "nach zwei Monaten" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Wann soll man den Sperrmüll herausstellen?",
          options: [
            { id: "a", text: "am Abend vor dem Termin" },
            { id: "b", text: "eine Woche vorher" },
            { id: "c", text: "jederzeit" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Wohin gehören Elektrogeräte?",
          options: [
            { id: "a", text: "zum Sperrmüll" },
            { id: "b", text: "zum Wertstoffhof" },
            { id: "c", text: "in den Hausmüll" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Was passiert, wenn man sich nicht an die Regeln hält?",
          options: [
            { id: "a", text: "nichts" },
            { id: "b", text: "man muss eine Gebühr zahlen" },
            { id: "c", text: "man bekommt eine Belohnung" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ── Teil 4 — Informationsbroschüren (3 items × 3 Fragen) ──────────────────
  {
    ...base,
    taskType: "DTZ_LV_TEIL4",
    title: "Mülltrennung leicht gemacht",
    prompt: "Lesen Sie die Informationsbroschüre und beantworten Sie die drei Fragen.",
    topicTag: "umwelt",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "So trennen Sie Ihren Müll richtig\n\n" +
        "In unserer Stadt gibt es vier Tonnen. In die blaue Tonne kommt Papier, zum Beispiel Zeitungen und Kartons. Die gelbe Tonne ist für Verpackungen aus Plastik und Metall. In die braune Tonne gehören Reste aus der Küche und aus dem Garten. Alles andere kommt in die graue Tonne. Glas bringen Sie bitte zu den Containern an der Straße. Trennen Sie es dort nach Farben. Wenn Sie unsicher sind, hilft Ihnen die kostenlose App weiter.",
      questions: [
        {
          id: "q1",
          stem: "Was kommt in die blaue Tonne?",
          options: [
            { id: "a", text: "Papier" },
            { id: "b", text: "Plastik" },
            { id: "c", text: "Essensreste" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wohin bringt man Glas?",
          options: [
            { id: "a", text: "in die graue Tonne" },
            { id: "b", text: "zu den Containern" },
            { id: "c", text: "in die gelbe Tonne" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was hilft bei Unsicherheit?",
          options: [
            { id: "a", text: "eine kostenlose App" },
            { id: "b", text: "ein Buch" },
            { id: "c", text: "das Nachbarschaftsbüro" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL4",
    title: "Neu in der Stadt",
    prompt: "Lesen Sie die Informationsbroschüre und beantworten Sie die drei Fragen.",
    topicTag: "behoerde",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Neu in der Stadt? Das ist jetzt wichtig\n\n" +
        "Wenn Sie umgezogen sind, müssen Sie sich innerhalb von zwei Wochen beim Bürgeramt anmelden. Bringen Sie dazu Ihren Ausweis und den Vertrag Ihrer Wohnung mit. Danach können Sie viele weitere Dinge erledigen. Melden Sie Ihr Kind rechtzeitig in der Schule oder im Kindergarten an, denn die Plätze sind oft knapp. Für Strom und Internet suchen Sie sich selbst einen Anbieter. Ein Konto bei einer Bank hilft Ihnen, Miete und Rechnungen einfach zu bezahlen. Bei Fragen ist die Beratungsstelle im Rathaus für Sie da.",
      questions: [
        {
          id: "q1",
          stem: "Wie schnell muss man sich anmelden?",
          options: [
            { id: "a", text: "innerhalb von zwei Wochen" },
            { id: "b", text: "innerhalb eines Tages" },
            { id: "c", text: "innerhalb eines Jahres" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll man zur Anmeldung mitbringen?",
          options: [
            { id: "a", text: "nur Geld" },
            { id: "b", text: "Ausweis und Mietvertrag" },
            { id: "c", text: "ein Foto" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Warum soll man das Kind rechtzeitig anmelden?",
          options: [
            { id: "a", text: "weil es am ersten Tag Pflicht ist" },
            { id: "b", text: "weil die Plätze oft knapp sind" },
            { id: "c", text: "weil es Geld kostet" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL4",
    title: "Gesund durch den Winter",
    prompt: "Lesen Sie die Informationsbroschüre und beantworten Sie die drei Fragen.",
    topicTag: "gesundheit",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Tipps für die kalte Jahreszeit\n\n" +
        "Im Winter werden viele Menschen krank. Mit ein paar einfachen Regeln bleiben Sie gesünder. Waschen Sie sich oft die Hände, besonders bevor Sie essen. Lüften Sie Ihre Wohnung mehrmals am Tag für einige Minuten, statt das Fenster lange offen zu lassen. Trinken Sie genug, am besten Wasser oder Tee. Auch Bewegung an der frischen Luft ist gut, selbst wenn es kalt ist. Wenn Sie sich krank fühlen, bleiben Sie zu Hause und ruhen Sie sich aus. Eine Grippeimpfung bietet Ihre Ärztin oder Ihr Arzt kostenlos an.",
      questions: [
        {
          id: "q1",
          stem: "Wie soll man im Winter lüften?",
          options: [
            { id: "a", text: "das Fenster lange offen lassen" },
            { id: "b", text: "mehrmals am Tag kurz" },
            { id: "c", text: "gar nicht" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was soll man trinken?",
          options: [
            { id: "a", text: "Wasser oder Tee" },
            { id: "b", text: "nur Kaffee" },
            { id: "c", text: "möglichst wenig" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was macht man, wenn man sich krank fühlt?",
          options: [
            { id: "a", text: "zur Arbeit gehen" },
            { id: "b", text: "zu Hause bleiben und sich ausruhen" },
            { id: "c", text: "Sport machen" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ── Teil 5 — formeller Brief (3 items × 6 Fragen) ─────────────────────────
  {
    ...base,
    taskType: "DTZ_LV_TEIL5",
    title: "Antwort der Hausverwaltung",
    prompt: "Lesen Sie den Brief und beantworten Sie die sechs Fragen.",
    topicTag: "wohnen",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Sehr geehrte Frau Yilmaz,\n\n" +
        "vielen Dank für Ihre Nachricht vom 3. März. Sie haben uns geschrieben, dass die Heizung in Ihrer Wohnung seit einigen Tagen nicht mehr richtig warm wird. Das tut uns leid.\n\n" +
        "Wir haben einen Handwerker beauftragt, der sich das Problem ansehen wird. Er wird sich in den nächsten Tagen bei Ihnen melden, um einen Termin zu vereinbaren. Bitte sorgen Sie dafür, dass jemand zu Hause ist, oder geben Sie uns einen Schlüssel im Büro ab.\n\n" +
        "Die Reparatur ist für Sie kostenlos. Sollte die Heizung bis dahin ganz ausfallen, rufen Sie bitte sofort die Nummer auf dem Aushang im Hausflur an. Diese ist auch am Wochenende erreichbar.\n\n" +
        "Wir bitten Sie um etwas Geduld und melden uns, sobald die Arbeit erledigt ist.\n\n" +
        "Mit freundlichen Grüßen\nDie Hausverwaltung",
      questions: [
        {
          id: "q1",
          stem: "Warum hat Frau Yilmaz geschrieben?",
          options: [
            { id: "a", text: "Die Heizung wird nicht warm." },
            { id: "b", text: "Die Miete ist zu hoch." },
            { id: "c", text: "Der Aufzug ist kaputt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was hat die Hausverwaltung getan?",
          options: [
            { id: "a", text: "einen Handwerker beauftragt" },
            { id: "b", text: "die Miete gesenkt" },
            { id: "c", text: "eine neue Wohnung angeboten" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was soll Frau Yilmaz für den Termin tun?",
          options: [
            { id: "a", text: "die Heizung selbst reparieren" },
            { id: "b", text: "zu Hause sein oder einen Schlüssel abgeben" },
            { id: "c", text: "das Büro besuchen" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Wie viel kostet die Reparatur?",
          options: [
            { id: "a", text: "nichts" },
            { id: "b", text: "50 Euro" },
            { id: "c", text: "eine Monatsmiete" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Was soll sie tun, wenn die Heizung ganz ausfällt?",
          options: [
            { id: "a", text: "einfach warten" },
            { id: "b", text: "die Nummer auf dem Aushang anrufen" },
            { id: "c", text: "eine E-Mail schreiben" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Worum bittet die Hausverwaltung?",
          options: [
            { id: "a", text: "um etwas Geduld" },
            { id: "b", text: "um mehr Geld" },
            { id: "c", text: "um einen neuen Vertrag" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL5",
    title: "Bestätigung Ihrer Kursanmeldung",
    prompt: "Lesen Sie den Brief und beantworten Sie die sechs Fragen.",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Sehr geehrter Herr Molnár,\n\n" +
        "wir freuen uns, dass Sie sich für den Deutschkurs am Abend angemeldet haben. Hiermit bestätigen wir Ihre Anmeldung für den Kurs „Deutsch B1“, der am 6. April beginnt.\n\n" +
        "Der Unterricht findet montags und mittwochs von 18 bis 20.30 Uhr statt. Bitte kommen Sie am ersten Tag zehn Minuten früher, damit wir noch einige Papiere ausfüllen können. Bringen Sie bitte einen Ausweis mit.\n\n" +
        "Die Kursgebühr von 180 Euro überweisen Sie bitte bis zum 30. März auf das unten genannte Konto. Wenn Sie die Gebühr nicht rechtzeitig zahlen, können wir den Platz leider nicht sichern.\n\n" +
        "Sollten Sie doch nicht teilnehmen können, sagen Sie bitte bis eine Woche vor Kursbeginn ab. Danach ist eine Rückzahlung nicht mehr möglich.\n\n" +
        "Mit freundlichen Grüßen\nDie Kursleitung der Volkshochschule",
      questions: [
        {
          id: "q1",
          stem: "Was bestätigt der Brief?",
          options: [
            { id: "a", text: "die Anmeldung zum Deutschkurs" },
            { id: "b", text: "einen Arzttermin" },
            { id: "c", text: "eine Wohnung" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wann beginnt der Kurs?",
          options: [
            { id: "a", text: "im Mai" },
            { id: "b", text: "am 6. April" },
            { id: "c", text: "am 30. März" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "An welchen Tagen ist der Unterricht?",
          options: [
            { id: "a", text: "am Wochenende" },
            { id: "b", text: "dienstags und donnerstags" },
            { id: "c", text: "montags und mittwochs" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Was soll Herr Molnár am ersten Tag mitbringen?",
          options: [
            { id: "a", text: "einen Ausweis" },
            { id: "b", text: "ein Buch" },
            { id: "c", text: "Essen" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Bis wann muss die Gebühr bezahlt werden?",
          options: [
            { id: "a", text: "am ersten Kurstag" },
            { id: "b", text: "bis zum 30. März" },
            { id: "c", text: "nach dem Kurs" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Was passiert, wenn er zu spät absagt?",
          options: [
            { id: "a", text: "Er zahlt doppelt." },
            { id: "b", text: "Es passiert nichts." },
            { id: "c", text: "Er bekommt das Geld nicht zurück." },
          ],
          answer: "c",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "DTZ_LV_TEIL5",
    title: "Termin beim Bürgeramt",
    prompt: "Lesen Sie den Brief und beantworten Sie die sechs Fragen.",
    topicTag: "behoerde",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
      passage:
        "Sehr geehrte Frau Costa,\n\n" +
        "Sie haben bei uns einen Antrag auf Verlängerung Ihres Aufenthaltstitels gestellt. Vielen Dank. Für die Bearbeitung brauchen wir noch weitere Unterlagen von Ihnen.\n\n" +
        "Bitte bringen Sie zu Ihrem Termin am Dienstag, den 18. Mai, um 9.30 Uhr folgende Dinge mit: Ihren Reisepass, ein aktuelles Foto und einen Nachweis über Ihr Einkommen. Ohne diese Unterlagen können wir Ihren Antrag nicht bearbeiten.\n\n" +
        "Der Termin findet in Zimmer 14 im ersten Stock statt. Wenn Sie den Termin nicht wahrnehmen können, sagen Sie bitte mindestens zwei Tage vorher telefonisch ab. Sie erhalten dann einen neuen Termin.\n\n" +
        "Für die Verlängerung fällt eine Gebühr von 100 Euro an, die Sie vor Ort mit Karte bezahlen. Bargeld nehmen wir nicht an.\n\n" +
        "Mit freundlichen Grüßen\nDas Bürgeramt",
      questions: [
        {
          id: "q1",
          stem: "Worum geht es in dem Brief?",
          options: [
            { id: "a", text: "um die Verlängerung des Aufenthaltstitels" },
            { id: "b", text: "um eine Wohnung" },
            { id: "c", text: "um einen Sprachkurs" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was soll Frau Costa zum Termin mitbringen?",
          options: [
            { id: "a", text: "nur den Reisepass" },
            { id: "b", text: "Reisepass, Foto und Einkommensnachweis" },
            { id: "c", text: "nichts" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wann ist der Termin?",
          options: [
            { id: "a", text: "am Wochenende" },
            { id: "b", text: "am 18. März" },
            { id: "c", text: "am 18. Mai um 9.30 Uhr" },
          ],
          answer: "c",
        },
        {
          id: "q4",
          stem: "Wo findet der Termin statt?",
          options: [
            { id: "a", text: "online" },
            { id: "b", text: "in Zimmer 14 im ersten Stock" },
            { id: "c", text: "im Erdgeschoss" },
          ],
          answer: "b",
        },
        {
          id: "q5",
          stem: "Was soll sie tun, wenn sie nicht kommen kann?",
          options: [
            { id: "a", text: "einfach fernbleiben" },
            { id: "b", text: "mindestens zwei Tage vorher telefonisch absagen" },
            { id: "c", text: "eine E-Mail schreiben" },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Wie bezahlt man die Gebühr?",
          options: [
            { id: "a", text: "bar" },
            { id: "b", text: "per Überweisung" },
            { id: "c", text: "mit Karte vor Ort" },
          ],
          answer: "c",
        },
      ],
    },
  },
];

// Distribute the 3-option MC keys deterministically (see ./_permute.ts and the
// answer-distribution gate — DTZ is a structured, enforced exam). No option dead
// or clustered, no within-item uniform run; correctness untouched.
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["DTZ_LV_TEIL1", "DTZ_LV_TEIL2", "DTZ_LV_TEIL3", "DTZ_LV_TEIL4", "DTZ_LV_TEIL5"]),
});

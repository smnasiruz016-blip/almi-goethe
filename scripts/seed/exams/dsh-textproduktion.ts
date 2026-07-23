// DSH — Deutsche Sprachprüfung für den Hochschulzugang (B2–C2), Textproduktion.
// Original practice items.
//
// ORIGINALITY (doctrine #1): every situation and instruction below is ORIGINAL to
// AlmiGoethe — never copied or derived from DSH / g.a.s.t. / university Musterprüfungen,
// Modelltests or Übungssätze. Same IP rule as DET vs. Duolingo.
//
// ── ONE ACADEMIC TEXT. NOT A LETTER. ────────────────────────────────────────
// The DSH writing task ("Vorgabengeleitete Textproduktion") is a single
// wissenschaftssprachlicher Text of 200–250 words in an academic C1 register. It
// is NOT a practical letter (that is the DTZ) and NOT an argumentative Forumsbeitrag
// (telc B2). Three prompt sub-types recur, and this bank mixes all three:
//   • Grafikbeschreibung   — describe data / a trend in words and interpret it
//   • Erörterung           — weigh a controversial question, pro and contra
//   • argumentativer Text  — take and defend one position
//
// ── THE 200–250 WORD ENVELOPE IS SOURCED AND HARD-ENFORCED ──────────────────
// The DSH text has a sourced, hard-enforced length of 200–250 words. Every payload
// therefore carries wordMin: 200, wordMax: 250 exactly. Do not deviate.
//
// ── THERE IS NO IMAGE. THE DATA LIVES IN THE PROSE. ─────────────────────────
// The engine renders `situation` + `instruction` as text; it shows no chart. So for
// every Grafikbeschreibung the numbers are written IN WORDS into the situation
// ("2010 lag der Anteil bei 34 %, 2020 bereits bei 61 %"), which is exactly what a
// candidate must verbalise. A structured data array would be discarded by
// productivePayloadSchema.parse() (it keeps only { situation, instruction, wordMin,
// wordMax }) — described, never seen. So the figures live in the prose the learner
// and grader actually meet.
//
// ── LEITPUNKTE IN THE INSTRUCTION PROSE ─────────────────────────────────────
// The productive payload is { situation, instruction, wordMin, wordMax }; unknown
// keys are stripped. The 2–3 Leitpunkte are therefore written INTO the instruction
// prose, where both the learner and the grader actually meet them.
//
// ── TITLES ARE ITEM IDENTITY ────────────────────────────────────────────────
// Item identity is (exam, level, section, title). Unique titles keep the reconcile
// diff honest and let a corrected item update in place.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.DSH;
const base = {
  exam: "DSH" as const,
  level: L,
  section: SECTION.TEXTPRODUKTION,
  difficulty: "CORE" as const,
};

// Sourced, hard-enforced. Do not change.
const WORD_MIN = 200;
const WORD_MAX = 250;
const SECONDS = 3600;

type Aufgabe = {
  title: string;
  topicTag: string;
  /** Which of the three DSH sub-types this prompt trains. */
  kind: "Grafikbeschreibung" | "Erörterung" | "argumentativer Text";
  situation: string;
  instruction: string;
};

const AUFGABEN: Aufgabe[] = [
  // ── ~5 GRAFIKBESCHREIBUNG ──────────────────────────────────────────────────
  {
    title: "Entwicklung der Studienanfängerzahlen",
    topicTag: "studium",
    kind: "Grafikbeschreibung",
    situation:
      "Eine statistische Übersicht bildet den Anteil eines Altersjahrgangs ab, der in Deutschland ein Hochschulstudium aufnimmt. Die Grafik zeigt: Im Jahr 2000 begannen rund 33 % eines Jahrgangs ein Studium, 2010 waren es bereits 46 % und 2020 etwa 55 %. Zugleich stieg der Anteil der Studienanfängerinnen von 48 % im Jahr 2000 auf 52 % im Jahr 2020, während er bei den Männern entsprechend zurückging.",
    instruction:
      "Verfassen Sie einen zusammenhängenden wissenschaftssprachlichen Text. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Beschreiben Sie die Entwicklung der Studienanfängerquote sachlich und nennen Sie die auffälligsten Veränderungen.\n2. Gehen Sie gesondert auf die Verschiebung im Geschlechterverhältnis ein.\n3. Nennen Sie mögliche Gründe für die dargestellte Entwicklung.",
  },
  {
    title: "Anteil erneuerbarer Energien am Strommix",
    topicTag: "umwelt",
    kind: "Grafikbeschreibung",
    situation:
      "Eine Grafik stellt den Anteil erneuerbarer Energien an der Stromerzeugung eines Landes über zwei Jahrzehnte dar. Die Grafik zeigt: 2005 stammten lediglich 10 % des Stroms aus erneuerbaren Quellen, 2015 waren es 30 % und 2023 rund 52 %. Der Anteil der Kohle fiel im selben Zeitraum von 48 % auf 22 %, während der Anteil der Kernenergie von 26 % auf nahezu 0 % zurückging.",
    instruction:
      "Verfassen Sie einen zusammenhängenden wissenschaftssprachlichen Text. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Beschreiben Sie die Entwicklung des Anteils erneuerbarer Energien präzise.\n2. Stellen Sie den gegenläufigen Rückgang von Kohle und Kernenergie dar.\n3. Erläutern Sie, welche Herausforderungen mit einem so raschen Umbau des Strommixes verbunden sein könnten.",
  },
  {
    title: "Mediennutzung nach Altersgruppen",
    topicTag: "medien",
    kind: "Grafikbeschreibung",
    situation:
      "Eine Erhebung vergleicht die tägliche Nutzung von Fernsehen und Online-Videoplattformen in zwei Altersgruppen. Die Grafik zeigt: Bei den 14- bis 29-Jährigen sank die tägliche Fernsehnutzung von 120 Minuten (2013) auf 45 Minuten (2023), während die Nutzung von Online-Videos von 40 auf 190 Minuten stieg. Bei den über 60-Jährigen blieb die Fernsehnutzung mit rund 240 Minuten nahezu konstant, die Online-Nutzung stieg nur leicht von 10 auf 35 Minuten.",
    instruction:
      "Verfassen Sie einen zusammenhängenden wissenschaftssprachlichen Text. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Beschreiben Sie die gegenläufigen Entwicklungen bei den jüngeren Nutzern.\n2. Stellen Sie den Kontrast zur älteren Altersgruppe heraus.\n3. Interpretieren Sie, was diese Zahlen über einen möglichen Medienwandel aussagen.",
  },
  {
    title: "Bevölkerungsentwicklung in Stadt und Land",
    topicTag: "urbanisierung",
    kind: "Grafikbeschreibung",
    situation:
      "Eine Grafik vergleicht die Bevölkerungsentwicklung in Großstädten und in ländlichen Regionen. Die Grafik zeigt: Zwischen 2000 und 2022 wuchs die Bevölkerung der zehn größten Städte um insgesamt 14 %, während sie in dünn besiedelten ländlichen Kreisen um 9 % zurückging. Zugleich stieg das Durchschnittsalter in den ländlichen Regionen von 42 auf 49 Jahre, in den Städten dagegen nur von 40 auf 42 Jahre.",
    instruction:
      "Verfassen Sie einen zusammenhängenden wissenschaftssprachlichen Text. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Beschreiben Sie die unterschiedliche Bevölkerungsentwicklung in Stadt und Land.\n2. Gehen Sie auf die Entwicklung des Durchschnittsalters ein.\n3. Erläutern Sie mögliche Folgen dieser Entwicklung für ländliche Regionen.",
  },
  {
    title: "Ausgaben für Forschung und Entwicklung",
    topicTag: "wissenschaft",
    kind: "Grafikbeschreibung",
    situation:
      "Eine Übersicht zeigt, welchen Anteil ihres Bruttoinlandsprodukts drei Länder in Forschung und Entwicklung investieren. Die Grafik zeigt: Land A steigerte seine Ausgaben von 2,4 % (2010) auf 3,1 % (2022), Land B von 1,8 % auf 2,2 %, während Land C konstant bei 1,3 % verharrte. Zugleich wuchs die Zahl der angemeldeten Patente in Land A um 60 %, in Land C hingegen nur um 8 %.",
    instruction:
      "Verfassen Sie einen zusammenhängenden wissenschaftssprachlichen Text. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Beschreiben Sie die unterschiedliche Entwicklung der Forschungsausgaben in den drei Ländern.\n2. Stellen Sie den Zusammenhang zur Zahl der Patentanmeldungen dar.\n3. Erläutern Sie, welche Bedeutung Investitionen in Forschung für die wirtschaftliche Entwicklung eines Landes haben können.",
  },

  // ── ~5 ERÖRTERUNG ──────────────────────────────────────────────────────────
  {
    title: "Studiengebühren an öffentlichen Hochschulen",
    topicTag: "studium",
    kind: "Erörterung",
    situation:
      "In der bildungspolitischen Debatte wird immer wieder gefordert, an öffentlichen Hochschulen allgemeine Studiengebühren einzuführen. Befürworter versprechen sich zusätzliche Mittel für Lehre und Ausstattung, Gegner warnen vor einer sozialen Auslese beim Hochschulzugang.",
    instruction:
      "Erörtern Sie die Frage, ob an öffentlichen Hochschulen Studiengebühren erhoben werden sollten. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Nennen und erläutern Sie Argumente, die für Studiengebühren sprechen.\n2. Nennen und erläutern Sie Argumente, die dagegen sprechen.\n3. Kommen Sie zu einer begründeten eigenen Position.",
  },
  {
    title: "Sollten Kurzstreckenflüge eingeschränkt werden",
    topicTag: "umwelt",
    kind: "Erörterung",
    situation:
      "Um Treibhausgase zu senken, wird vorgeschlagen, innerdeutsche Kurzstreckenflüge zu verteuern oder ganz zu verbieten, sofern eine Bahnverbindung von unter vier Stunden besteht. Die Diskussion berührt Klimaschutz, Mobilität und wirtschaftliche Interessen.",
    instruction:
      "Erörtern Sie die Frage, ob Kurzstreckenflüge zugunsten der Bahn eingeschränkt werden sollten. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Stellen Sie die Argumente für eine solche Einschränkung dar.\n2. Stellen Sie die Gegenargumente dar.\n3. Formulieren Sie ein abwägendes eigenes Urteil.",
  },
  {
    title: "Digitalisierung des Schulunterrichts",
    topicTag: "digitalisierung",
    kind: "Erörterung",
    situation:
      "Viele Schulen ersetzen zunehmend gedruckte Lehrbücher durch Tablets und digitale Lernplattformen. Während die einen darin eine notwendige Modernisierung sehen, befürchten andere Nachteile für Konzentration, Datenschutz und soziale Chancengleichheit.",
    instruction:
      "Erörtern Sie die Frage, ob der Schulunterricht weitgehend digitalisiert werden sollte. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Erläutern Sie die Chancen einer Digitalisierung des Unterrichts.\n2. Erläutern Sie die möglichen Risiken.\n3. Ziehen Sie ein begründetes eigenes Fazit.",
  },
  {
    title: "Ehrenamtliches Engagement als Pflicht",
    topicTag: "gesellschaft",
    kind: "Erörterung",
    situation:
      "In der öffentlichen Debatte wird gelegentlich gefordert, ein verpflichtendes soziales Jahr für junge Erwachsene einzuführen. Ziel wäre es, den gesellschaftlichen Zusammenhalt zu stärken; kritisiert wird ein Eingriff in die persönliche Freiheit.",
    instruction:
      "Erörtern Sie die Frage, ob ein verpflichtendes soziales Jahr für junge Erwachsene eingeführt werden sollte. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Stellen Sie die Argumente dar, die für eine solche Pflicht sprechen.\n2. Stellen Sie die Gegenargumente dar.\n3. Entwickeln Sie eine eigene, begründete Position.",
  },
  {
    title: "Zuwanderung von Fachkräften",
    topicTag: "migration",
    kind: "Erörterung",
    situation:
      "Angesichts des Fachkräftemangels wird diskutiert, ob die Zuwanderung qualifizierter Arbeitskräfte aus dem Ausland stärker gefördert werden sollte. Die Debatte berührt Fragen des Arbeitsmarktes, der Integration und der Herkunftsländer.",
    instruction:
      "Erörtern Sie die Frage, ob die Zuwanderung von Fachkräften erleichtert werden sollte. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Nennen Sie Argumente, die für eine erleichterte Fachkräftezuwanderung sprechen.\n2. Nennen Sie mögliche Bedenken und Gegenargumente.\n3. Formulieren Sie eine abgewogene eigene Einschätzung.",
  },

  // ── ~5 ARGUMENTATIVER TEXT ─────────────────────────────────────────────────
  {
    title: "Für ein autofreies Stadtzentrum",
    topicTag: "urbanisierung",
    kind: "argumentativer Text",
    situation:
      "Eine Stadt erwägt, ihr historisches Zentrum vollständig für den privaten Autoverkehr zu sperren und stattdessen Fußgängerzonen, Radwege und öffentlichen Nahverkehr auszubauen. Sie sollen sich in einem argumentativen Text klar für dieses Vorhaben positionieren.",
    instruction:
      "Verfassen Sie einen argumentativen Text, in dem Sie sich für ein autofreies Stadtzentrum aussprechen. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Legen Sie Ihre These klar dar.\n2. Stützen Sie Ihre Position mit mindestens zwei nachvollziehbaren Argumenten.\n3. Entkräften Sie einen möglichen Einwand.",
  },
  {
    title: "Gegen ein generelles Verbot künstlicher Intelligenz im Studium",
    topicTag: "digitalisierung",
    kind: "argumentativer Text",
    situation:
      "Einige Hochschulen erwägen, den Einsatz von KI-Schreibwerkzeugen in Studienarbeiten vollständig zu untersagen. Sie sollen in einem argumentativen Text begründet gegen ein solches pauschales Verbot Stellung nehmen.",
    instruction:
      "Verfassen Sie einen argumentativen Text, in dem Sie sich gegen ein generelles Verbot von KI-Schreibwerkzeugen im Studium aussprechen. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Formulieren Sie Ihre Position eindeutig.\n2. Begründen Sie sie mit mindestens zwei stichhaltigen Argumenten.\n3. Gehen Sie auf einen berechtigten Gegeneinwand ein und ordnen Sie ihn ein.",
  },
  {
    title: "Für eine stärkere Grundlagenforschung",
    topicTag: "wissenschaft",
    kind: "argumentativer Text",
    situation:
      "In Zeiten knapper öffentlicher Mittel wird gefordert, Forschungsgelder vor allem in unmittelbar anwendbare Projekte zu lenken. Sie sollen in einem argumentativen Text begründen, warum auch die zweckfreie Grundlagenforschung angemessen gefördert werden sollte.",
    instruction:
      "Verfassen Sie einen argumentativen Text zugunsten einer starken Grundlagenforschung. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Stellen Sie Ihre These klar heraus.\n2. Untermauern Sie sie mit mindestens zwei Argumenten.\n3. Widerlegen Sie den Einwand, Grundlagenforschung sei zu wenig nützlich.",
  },
  {
    title: "Gegen die Abschaffung gedruckter Bücher an Universitäten",
    topicTag: "medien",
    kind: "argumentativer Text",
    situation:
      "Manche Universitätsbibliotheken planen, ihre Bestände fast vollständig zu digitalisieren und gedruckte Bücher weitgehend abzuschaffen. Sie sollen in einem argumentativen Text gegen eine vollständige Abschaffung des gedruckten Buches Stellung beziehen.",
    instruction:
      "Verfassen Sie einen argumentativen Text gegen die vollständige Abschaffung gedruckter Bücher an Universitäten. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Legen Sie Ihre These dar.\n2. Führen Sie mindestens zwei tragfähige Argumente an.\n3. Räumen Sie einen möglichen Vorteil der Digitalisierung ein und gewichten Sie ihn.",
  },
  {
    title: "Für einen verbindlichen Umweltunterricht",
    topicTag: "umwelt",
    kind: "argumentativer Text",
    situation:
      "Es wird vorgeschlagen, Umwelt- und Nachhaltigkeitsbildung als eigenes Pflichtfach in allen Schulen zu verankern. Sie sollen sich in einem argumentativen Text begründet für die Einführung eines solchen Fachs aussprechen.",
    instruction:
      "Verfassen Sie einen argumentativen Text für die Einführung eines verbindlichen Umweltunterrichts. Gehen Sie dabei auf folgende Leitpunkte ein:\n1. Formulieren Sie Ihre These deutlich.\n2. Begründen Sie sie mit mindestens zwei überzeugenden Argumenten.\n3. Entkräften Sie den Einwand, der Lehrplan sei bereits überfüllt.",
  },
];

export const ITEMS: ExamItemInput[] = AUFGABEN.map((a) => ({
  ...base,
  taskType: "DSH_TP_TEXT",
  title: a.title,
  prompt: "Schreiben Sie einen wissenschaftssprachlichen Text (200–250 Wörter).",
  topicTag: a.topicTag,
  timeLimitSeconds: SECONDS,
  payload: {
    situation: a.situation,
    instruction: a.instruction,
    wordMin: WORD_MIN,
    wordMax: WORD_MAX,
  },
}));

// ── SUB-TYPE DISTRIBUTION, AS AUTHORED ──────────────────────────────────────
// 15 items · all taskType DSH_TP_TEXT · every payload wordMin 200 / wordMax 250
// (the sourced, hard-enforced DSH envelope) · unique titles.
//
//   Grafikbeschreibung   5 — Studienanfänger, erneuerbare Energien, Mediennutzung,
//                            Stadt/Land, Forschungsausgaben (data written IN WORDS)
//   Erörterung           5 — Studiengebühren, Kurzstreckenflüge, Schul-Digitali-
//                            sierung, soziales Pflichtjahr, Fachkräftezuwanderung
//   argumentativer Text  5 — autofreies Zentrum, KI im Studium, Grundlagenforschung,
//                            gedruckte Bücher, Umweltunterricht
//
// Topics span the academic/societal range: studying, environment, digitalisation,
// migration, science funding, urbanisation and media. No real company or organisation
// is named anywhere in the bank.

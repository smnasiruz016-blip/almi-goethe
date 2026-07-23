// ÖSD Zertifikat Deutsch Österreich B1 (ZDÖ B1) — Hörverstehen. Original practice items.
//
// ORIGINALITY (doctrine #1): every audioScript, statement and question below is
// ORIGINAL to AlmiGoethe — never copied or derived from real ÖSD materials,
// Modellsätze, Übungssätze or past papers. The STRUCTURE is sourced from the ÖSD
// ZDÖ B1 Hörverstehen; the CONTENT is ours. Same IP rule as DET vs. Duolingo.
//
// ── AUSTRIAN CONTENT, NOT GERMAN ────────────────────────────────────────────
// This is the ÖSD, the Austrian exam. The recordings are set in Austria and use
// Austrian standard German and Austrian daily life: Euro; places such as Wien,
// Graz, Salzburg, Innsbruck, Linz, Melk and die Wachau; institutions such as die
// Bahn, die städtischen Verkehrsbetriebe, das AMS (Arbeitsmarktservice), das
// Gemeindeamt and die Ordination (not "Arztpraxis"); everyday Austrian words such
// as e-card, Meldezettel, Trafik, Sackerl and Jause. Authoring
// these with German institutions (Bürgeramt, Krankenkasse-Karte, Deutsche Bahn)
// would teach the wrong country. Public institutions such as the railway appear only
// as CONTEXT — nothing here is a document signed in a real body's name.
//
// ── REGISTER: EVERYDAY B1 ───────────────────────────────────────────────────
// ZDÖ B1 is an everyday-language exam. These recordings are station and service
// announcements, answerphone messages, guided tours, and conversations about
// travel, work, housing and daily life — not the lecture German of TestDaF.
//
// FOUR Teile, 4 items each — 16 items total:
//   Teil 1  Durchsagen / kurze Mitteilungen (2×)   4 items × 3 richtig/falsch
//   Teil 2  Monolog / Führung / Vortrag (1×)       4 items × 4 MC (a/b/c)
//   Teil 3  Gespräch, zwei Personen (1×)           4 items × 4 MC (a/b/c)
//   Teil 4  Radiodiskussion, drei Sprecher (1×)    4 items × 5 Zuordnung (A/B/C)
//
// ── ANSWER DISTRIBUTION ─────────────────────────────────────────────────────
// Teil 1 is richtig/falsch: the two option ids are BOUND TO THEIR MEANING and
// cannot be shuffled, so the distribution is controlled by authoring. Across the
// twelve Teil-1 statements the split is richtig 6 / falsch 6; no item is uniformly
// richtig or falsch, and none runs a strict r-f-r-f alternation.
// Teil 2–4 (MC / matching) are authored correct and left for the caller to permute.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.OESD_B1;
const base = {
  exam: "OESD_B1" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
};

// ── Teil 1 — Durchsagen / kurze Mitteilungen (richtig/falsch, heard TWICE) ───
// One short announcement per item (Bahnhofsdurchsage, Anrufbeantworter,
// Radiohinweis, Verkehrsansage) with three statements about it.
const RF = [
  { id: "r", text: "Richtig" },
  { id: "f", text: "Falsch" },
];
type RF = "r" | "f";

type T1 = {
  title: string;
  topicTag: string;
  audioScript: string;
  statements: { text: string; answer: RF }[];
};

const TEIL1: T1[] = [
  {
    title: "Durchsage am Wiener Hauptbahnhof",
    topicTag: "verkehr",
    audioScript:
      "Sehr geehrte Fahrgäste, wir informieren Sie über eine Änderung. Der Fernzug nach Salzburg über Linz mit planmäßiger Abfahrt um vierzehn Uhr zwölf fährt heute wegen Bauarbeiten nicht wie üblich von Bahnsteig drei, sondern von Bahnsteig sieben ab. Bitte beachten Sie außerdem, dass der Zug voraussichtlich zehn Minuten später abfährt. Reisende nach Innsbruck steigen bitte in Salzburg um. Wir danken für Ihr Verständnis und wünschen eine gute Reise.",
    statements: [
      { text: "Der Zug nach Salzburg fährt heute von einem anderen Bahnsteig ab.", answer: "r" },
      { text: "Der Fernzug hat heute Verspätung.", answer: "r" },
      { text: "Reisende nach Innsbruck müssen nicht umsteigen.", answer: "f" },
    ],
  },
  {
    title: "Nachricht auf dem Anrufbeantworter der Ordination",
    topicTag: "gesundheit",
    audioScript:
      "Grüß Gott, Sie haben die Ordination Dr. Wimmer in Graz erreicht. Unsere Ordinationszeiten sind von Montag bis Freitag jeweils von acht bis zwölf Uhr. Am Donnerstag haben wir zusätzlich am Nachmittag von fünfzehn bis achtzehn Uhr geöffnet. Am Wochenende ist die Ordination geschlossen. Bitte denken Sie daran, zu jedem Termin Ihre e-card mitzubringen. In dringenden Fällen wählen Sie bitte den Ärztenotdienst unter der Nummer eins-vier-eins.",
    statements: [
      { text: "Die Ordination hat am Samstag geöffnet.", answer: "f" },
      { text: "Am Donnerstag gibt es auch am Nachmittag Termine.", answer: "r" },
      { text: "Man soll zu jedem Termin die e-card mitbringen.", answer: "r" },
    ],
  },
  {
    title: "Verkehrshinweis im Radio",
    topicTag: "verkehr",
    audioScript:
      "Und nun der Verkehr für die Steiermark. Auf der Südautobahn A2 Richtung Graz hat sich zwischen Gleisdorf und Graz-Ost nach einem Unfall ein Stau von etwa fünf Kilometern gebildet. Bitte rechnen Sie mit rund einer halben Stunde mehr Fahrzeit oder weichen Sie auf die Landstraße aus. In der Grazer Innenstadt ist die Herrengasse wegen eines Straßenfestes noch bis Sonntagabend gesperrt. Fahren Sie dort bitte über den Kai.",
    statements: [
      { text: "Auf der A2 Richtung Graz gibt es einen Stau.", answer: "r" },
      { text: "Der Stau ist wegen Bauarbeiten entstanden.", answer: "f" },
      { text: "Die Herrengasse ist heute frei befahrbar.", answer: "f" },
    ],
  },
  {
    title: "Information der städtischen Verkehrsbetriebe",
    topicTag: "verkehr",
    audioScript:
      "Achtung, eine wichtige Information der städtischen Verkehrsbetriebe. Die U-Bahn-Linie U4 fährt heute wegen Wartungsarbeiten zwischen den Stationen Schwedenplatz und Heiligenstadt nicht. Zwischen diesen beiden Stationen haben wir für Sie einen Ersatzverkehr mit Bussen eingerichtet. Bitte planen Sie mehr Zeit für Ihre Fahrt ein. Alle anderen U-Bahn-Linien sind von der Störung nicht betroffen und fahren nach dem gewohnten Fahrplan.",
    statements: [
      { text: "Die U4 fährt heute auf der ganzen Strecke.", answer: "f" },
      { text: "Auch die anderen U-Bahn-Linien sind unterbrochen.", answer: "f" },
      { text: "Zwischen Schwedenplatz und Heiligenstadt fahren Ersatzbusse.", answer: "r" },
    ],
  },
];

const teil1Items: ExamItemInput[] = TEIL1.map((t) => ({
  ...base,
  taskType: "OESD_HV_TEIL1",
  title: t.title,
  prompt: "Sie hören eine kurze Durchsage oder Mitteilung. Sie hören den Text zweimal.",
  topicTag: t.topicTag,
  timeLimitSeconds: 240,
  payload: {
    instructions:
      "Sie hören eine kurze Durchsage. Dazu gibt es drei Aussagen. Entscheiden Sie, ob jede Aussage richtig oder falsch ist. Sie hören den Text ZWEIMAL.",
    audioScript: t.audioScript,
    questions: t.statements.map((s, i) => ({
      id: `t${i + 1}`,
      stem: `${i + 1}. ${s.text}`,
      options: RF,
      answer: s.answer,
    })),
  },
  guidanceNote:
    "Lesen Sie die Aussagen vor dem Hören. Achten Sie besonders auf Bedingungen und Ausnahmen („nur am Donnerstag“, „außer die anderen Linien“) — dort steht die Durchsage oft etwas anderes, als die Aussage behauptet.",
}));

// ── Teil 2 — Monolog / Führung / Vortrag (MC a/b/c, heard ONCE) ─────────────
// One longer monologue per item (Stadtführung, Museumsführung, Vortrag,
// Betriebsführung) with four comprehension questions.
type Opt3 = [string, string, string];
type Q = { stem: string; opts: Opt3; answer: "a" | "b" | "c" };
type McItem = { title: string; topicTag: string; audioScript: string; qs: Q[] };

const mkQuestions = (qs: Q[]) =>
  qs.map((q, i) => ({
    id: `q${i + 1}`,
    stem: q.stem,
    options: [
      { id: "a", text: q.opts[0] },
      { id: "b", text: q.opts[1] },
      { id: "c", text: q.opts[2] },
    ],
    answer: q.answer,
  }));

const TEIL2: McItem[] = [
  {
    title: "Stadtführung durch die Wiener Innenstadt",
    topicTag: "freizeit",
    audioScript:
      "Herzlich willkommen zu unserer Stadtführung durch die Wiener Innenstadt. Mein Name ist Markus, und ich begleite Sie in den nächsten neunzig Minuten. Wir beginnen hier am Stephansplatz beim Stephansdom, dem Wahrzeichen der Stadt; der Dom ist über siebenhundert Jahre alt. Anschließend gehen wir durch die Kärntner Straße zur Staatsoper. Bitte bleiben Sie zusammen, die Gassen sind heute sehr voll. Fotografieren dürfen Sie überall, nur im Inneren des Doms bitte nicht während der Messe. Gegen halb fünf beenden wir die Führung beim Naschmarkt, wo Sie noch etwas essen können. Die Führung selbst ist kostenlos, über ein kleines Trinkgeld freue ich mich aber sehr.",
    qs: [
      { stem: "Wie lange dauert die Führung?", opts: ["sechzig Minuten", "neunzig Minuten", "zwei Stunden"], answer: "b" },
      { stem: "Wo beginnt die Führung?", opts: ["am Stephansplatz", "bei der Staatsoper", "am Naschmarkt"], answer: "a" },
      { stem: "Wann darf man im Dom nicht fotografieren?", opts: ["gar nicht", "während der Messe", "nur am Nachmittag"], answer: "b" },
      { stem: "Was sagt der Führer über die Kosten?", opts: ["Die Führung kostet zehn Euro.", "Man zahlt erst am Ende.", "Die Führung ist kostenlos, Trinkgeld ist aber willkommen."], answer: "c" },
    ],
  },
  {
    title: "Führung durch ein Salzburger Museum",
    topicTag: "kultur",
    audioScript:
      "Schön, dass Sie zur Führung durch unser Museum hier in Salzburg gekommen sind. Bevor wir beginnen, ein paar Hinweise: Bitte geben Sie große Taschen und Rucksäcke an der Garderobe ab, das ist im Eintrittspreis inbegriffen und kostet nichts extra. Im ersten Stock sehen wir Gemälde aus dem neunzehnten Jahrhundert. Im zweiten Stock zeigen wir eine Sonderausstellung über das Leben in Salzburg vor hundert Jahren; diese Ausstellung läuft leider nur noch bis Ende des Monats. Bitte berühren Sie keine Objekte. Am Ende kommen wir zum Museumsshop mit Postkarten und Büchern. Die Toiletten finden Sie im Erdgeschoss.",
    qs: [
      { stem: "Wo soll man große Taschen abgeben?", opts: ["an der Garderobe", "im Auto", "im Museumsshop"], answer: "a" },
      { stem: "Was kostet die Garderobe?", opts: ["zwei Euro", "nichts extra, sie ist im Eintritt inbegriffen", "fünf Euro"], answer: "b" },
      { stem: "Was ist im zweiten Stock zu sehen?", opts: ["Gemälde aus dem neunzehnten Jahrhundert", "eine Sonderausstellung", "der Museumsshop"], answer: "b" },
      { stem: "Wie lange läuft die Sonderausstellung noch?", opts: ["nur noch bis Ende des Monats", "noch ein ganzes Jahr", "nur noch heute"], answer: "a" },
    ],
  },
  {
    title: "Vortrag über Mülltrennung",
    topicTag: "umwelt",
    audioScript:
      "Guten Abend und danke, dass Sie zu meinem Vortrag über Mülltrennung gekommen sind. Viele Menschen glauben, Mülltrennung sei kompliziert, aber eigentlich ist sie einfach. In Österreich trennen wir Papier, Glas, Metall, Plastik und Biomüll. Glas geben Sie bitte in die Glascontainer, die in fast jeder Straße stehen — dabei kommen Weißglas und Buntglas getrennt in verschiedene Behälter. Für den Biomüll gibt es die braune Tonne; dort hinein kommen Essensreste und Gartenabfälle, aber auf keinen Fall Plastiksackerl. Ein häufiger Fehler ist, dass Menschen fettige Pizzakartons ins Altpapier werfen. Ein fettiger Karton gehört aber in den Restmüll. Am Ende bekommen Sie eine Broschüre der Gemeinde mit.",
    qs: [
      { stem: "Wie findet der Redner die Mülltrennung?", opts: ["sehr kompliziert", "eigentlich einfach", "völlig unnötig"], answer: "b" },
      { stem: "Wie soll man Glas entsorgen?", opts: ["alles zusammen in einen Behälter", "Weißglas und Buntglas getrennt", "im Restmüll"], answer: "b" },
      { stem: "Was gehört NICHT in die braune Tonne?", opts: ["Essensreste", "Gartenabfälle", "Plastiksackerl"], answer: "c" },
      { stem: "Wohin gehört ein fettiger Pizzakarton?", opts: ["ins Altpapier", "in den Restmüll", "in den Biomüll"], answer: "b" },
    ],
  },
  {
    title: "Führung durch ein Weingut in der Wachau",
    topicTag: "freizeit",
    audioScript:
      "Willkommen auf unserem Weingut hier in der Wachau. Ich zeige Ihnen heute, wie bei uns Wein gemacht wird. Wir sind ein Familienbetrieb in der dritten Generation. Zuerst gehen wir in den Weingarten, danach in den Keller, wo der Wein in großen Holzfässern lagert. Bitte ziehen Sie im Keller eine Jacke an, denn dort ist es auch im Sommer nur zwölf Grad kalt. Am Ende der Führung gibt es eine Verkostung, bei der Sie vier verschiedene Weine probieren. Wer mit dem Auto gekommen ist, bekommt natürlich stattdessen Traubensaft. Die Führung mit Verkostung kostet fünfzehn Euro pro Person, Kinder sind frei.",
    qs: [
      { stem: "In welcher Generation ist der Betrieb?", opts: ["in der ersten", "in der dritten", "in der fünften"], answer: "b" },
      { stem: "Warum soll man im Keller eine Jacke anziehen?", opts: ["weil es dort kalt ist", "weil es dort schmutzig ist", "weil es dort dunkel ist"], answer: "a" },
      { stem: "Was bekommen Autofahrer bei der Verkostung?", opts: ["gar nichts", "Traubensaft", "Bier"], answer: "b" },
      { stem: "Was kostet die Führung mit Verkostung?", opts: ["fünf Euro", "zehn Euro", "fünfzehn Euro"], answer: "c" },
    ],
  },
];

// ── Teil 3 — Gespräch, zwei Personen (MC a/b/c, heard ONCE) ─────────────────
// One everyday two-speaker dialogue per item with four questions.
const TEIL3: McItem[] = [
  {
    title: "Am Fahrkartenschalter der Bahn",
    topicTag: "verkehr",
    audioScript:
      "KUNDE: Grüß Gott, ich möchte eine Fahrkarte nach Innsbruck, bitte.\n" +
      "BEAMTIN: Gern. Einfach oder hin und zurück?\n" +
      "KUNDE: Hin und zurück. Ich fahre heute und komme am Sonntag zurück.\n" +
      "BEAMTIN: Möchten Sie den Fernzug? Der ist am schnellsten, von Wien etwa viereinhalb Stunden.\n" +
      "KUNDE: Ja, gern. Was kostet das?\n" +
      "BEAMTIN: Hin und zurück in der zweiten Klasse achtundsiebzig Euro. Mit einer Ermäßigungskarte wären es nur neununddreißig.\n" +
      "KUNDE: Eine Ermäßigungskarte habe ich leider nicht.\n" +
      "BEAMTIN: Dann kann ich Ihnen ein Sonderangebot anbieten. Das kostet nur neunundvierzig Euro, ist aber an einen bestimmten Zug gebunden.\n" +
      "KUNDE: Das nehme ich. Von welchem Bahnsteig fährt der Zug?\n" +
      "BEAMTIN: Von Bahnsteig fünf, in zwanzig Minuten. Sie sollten sich also beeilen.",
    qs: [
      { stem: "Wohin möchte der Kunde fahren?", opts: ["nach Innsbruck", "nach Wien", "nach Salzburg"], answer: "a" },
      { stem: "Was kostet die normale Fahrkarte hin und zurück?", opts: ["neununddreißig Euro", "neunundvierzig Euro", "achtundsiebzig Euro"], answer: "c" },
      { stem: "Warum bekommt der Kunde nicht den günstigen ermäßigten Preis?", opts: ["Er hat keine Ermäßigungskarte.", "Der Zug ist ausverkauft.", "Er fährt erster Klasse."], answer: "a" },
      { stem: "Was muss man beim Sonderangebot beachten?", opts: ["Es gilt nur am Wochenende.", "Es gilt nur für einen bestimmten Zug.", "Es gilt nur für die erste Klasse."], answer: "b" },
    ],
  },
  {
    title: "Beratungsgespräch beim AMS",
    topicTag: "arbeit",
    audioScript:
      "BERATER: Guten Tag, Frau Novak, setzen Sie sich. Sie suchen eine neue Stelle, richtig?\n" +
      "NOVAK: Ja, ich war bisher als Köchin in einem Restaurant, aber das hat zugesperrt.\n" +
      "BERATER: Das tut mir leid. Haben Sie eine abgeschlossene Ausbildung?\n" +
      "NOVAK: Ja, ich habe hier in Wien die Lehre als Köchin gemacht.\n" +
      "BERATER: Sehr gut, Köchinnen werden gesucht. Möchten Sie wieder in der Gastronomie arbeiten?\n" +
      "NOVAK: Eigentlich schon, aber ich habe zwei kleine Kinder und kann abends nicht arbeiten.\n" +
      "BERATER: Verstehe. Dann suchen wir etwas mit Tagdienst, zum Beispiel in einer Kantine oder in einem Kindergarten. Dort wird auch gekocht, und die Arbeitszeiten sind besser.\n" +
      "NOVAK: Das klingt gut. Muss ich dafür einen Kurs machen?\n" +
      "BERATER: Nicht unbedingt. Aber es gibt einen Deutschkurs für den Beruf, der Ihnen helfen könnte. Den zahlt das AMS.\n" +
      "NOVAK: Ja, den würde ich gern machen.\n" +
      "BERATER: Gut, ich melde Sie an. Kommen Sie nächste Woche wieder, dann habe ich erste Stellenangebote für Sie.",
    qs: [
      { stem: "Warum sucht Frau Novak eine neue Stelle?", opts: ["Sie möchte mehr Geld verdienen.", "Ihr Restaurant hat zugesperrt.", "Sie zieht in eine andere Stadt."], answer: "b" },
      { stem: "Warum kann Frau Novak nicht abends arbeiten?", opts: ["Sie hat zwei kleine Kinder.", "Sie besucht abends einen Kurs.", "Sie hat einen zweiten Job."], answer: "a" },
      { stem: "Was schlägt der Berater vor?", opts: ["eine Arbeit in einer Kantine oder einem Kindergarten", "eine Arbeit als Kellnerin", "eine Arbeit im Büro"], answer: "a" },
      { stem: "Wer zahlt den Deutschkurs für den Beruf?", opts: ["Frau Novak selbst", "das frühere Restaurant", "das AMS"], answer: "c" },
    ],
  },
  {
    title: "Anmeldung am Gemeindeamt in Melk",
    topicTag: "behoerde",
    audioScript:
      "BEAMTER: Grüß Gott, was kann ich für Sie tun?\n" +
      "HERR OKONKWO: Grüß Gott, ich bin letzte Woche nach Melk gezogen und möchte mich anmelden.\n" +
      "BEAMTER: Sehr gern. Dafür brauche ich Ihren Reisepass und den Meldezettel, der vom Unterkunftgeber unterschrieben sein muss.\n" +
      "HERR OKONKWO: Den Reisepass habe ich dabei. Der Meldezettel ist auch unterschrieben, hier bitte.\n" +
      "BEAMTER: Wunderbar, das passt alles. In Österreich müssen Sie sich übrigens innerhalb von drei Tagen nach dem Umzug anmelden.\n" +
      "HERR OKONKWO: Oje, ich bin schon fünf Tage hier. Ist das ein Problem?\n" +
      "BEAMTER: Diesmal drücke ich ein Auge zu, eine Strafe gibt es heute nicht. Aber denken Sie das nächste Mal daran.\n" +
      "HERR OKONKWO: Vielen Dank. Kostet die Anmeldung etwas?\n" +
      "BEAMTER: Nein, die Anmeldung ist kostenlos. Sie bekommen gleich eine Meldebestätigung; die brauchen Sie oft, zum Beispiel bei der Bank.\n" +
      "HERR OKONKWO: Sehr gut, die nehme ich gleich mit.",
    qs: [
      { stem: "Was möchte Herr Okonkwo machen?", opts: ["sich anmelden", "einen Reisepass beantragen", "eine Wohnung suchen"], answer: "a" },
      { stem: "Welches Dokument muss unterschrieben sein?", opts: ["der Reisepass", "der Meldezettel", "die Bankkarte"], answer: "b" },
      { stem: "Innerhalb welcher Frist muss man sich in Österreich anmelden?", opts: ["innerhalb von drei Tagen", "innerhalb von zwei Wochen", "innerhalb von einem Monat"], answer: "a" },
      { stem: "Was kostet die Anmeldung?", opts: ["fünf Euro", "nichts", "zehn Euro"], answer: "b" },
    ],
  },
  {
    title: "Ein Ausflug auf den Schneeberg",
    topicTag: "freizeit",
    audioScript:
      "LEA: Du, Tobias, hast du am Wochenende schon etwas vor?\n" +
      "TOBIAS: Noch nicht. Warum fragst du?\n" +
      "LEA: Ich würde gern wandern gehen, vielleicht am Schneeberg. Kommst du mit?\n" +
      "TOBIAS: Gute Idee! Wie kommen wir hin, mit dem Auto?\n" +
      "LEA: Ich dachte an den Zug. Vom Wiener Hauptbahnhof fährt einer bis Puchberg, und von dort geht die Zahnradbahn hinauf.\n" +
      "TOBIAS: Die Zahnradbahn ist aber teuer, oder?\n" +
      "LEA: Hin und zurück etwa vierzig Euro. Wir können auch zu Fuß hinaufgehen und das Geld sparen, aber das dauert gut drei Stunden.\n" +
      "TOBIAS: Bei dem schönen Wetter gehe ich lieber zu Fuß. Es soll ja sonnig werden.\n" +
      "LEA: Perfekt. Dann treffen wir uns um sieben am Bahnhof. Vergiss die Wanderschuhe und genug Wasser nicht!\n" +
      "TOBIAS: Mach ich. Sollen wir eine Jause mitnehmen?\n" +
      "LEA: Ja, ich bringe Brot und Käse mit, bring du bitte etwas Obst.",
    qs: [
      { stem: "Was möchte Lea am Wochenende machen?", opts: ["wandern gehen", "ins Kino gehen", "einkaufen gehen"], answer: "a" },
      { stem: "Wie wollen die beiden zum Schneeberg fahren?", opts: ["mit dem Auto", "mit dem Zug", "mit dem Fahrrad"], answer: "b" },
      { stem: "Warum gehen sie zu Fuß hinauf statt mit der Zahnradbahn?", opts: ["Die Bahn fährt heute nicht.", "Um Geld zu sparen.", "Die Bahn ist völlig überfüllt."], answer: "b" },
      { stem: "Was soll Tobias zur Jause mitbringen?", opts: ["Brot", "Käse", "Obst"], answer: "c" },
    ],
  },
];

// ── Teil 4 — Radiodiskussion, drei Sprecher (Zuordnung, heard ONCE) ─────────
// Three people discuss a topic; the learner attributes five statements to the
// person who made them. The options are fixed Person A / Person B / Person C.
const PERSON3 = [
  { id: "a", text: "Person A" },
  { id: "b", text: "Person B" },
  { id: "c", text: "Person C" },
];
type Attr = "a" | "b" | "c";
type T4 = {
  title: string;
  topicTag: string;
  audioScript: string;
  statements: { text: string; answer: Attr }[];
};

const TEIL4: T4[] = [
  {
    title: "Diskussion: Sollen Geschäfte am Sonntag offen haben?",
    topicTag: "gesellschaft",
    audioScript:
      "MODERATORIN: Heute diskutieren wir die Frage: Sollen Geschäfte in Österreich auch am Sonntag geöffnet haben? Ich habe drei Gäste bei mir.\n\n" +
      "PERSON A (Herr Gruber): Ich bin klar dagegen. Der Sonntag ist ein Familientag. Wenn die Geschäfte offen haben, müssen die Angestellten arbeiten und haben nichts von ihrem Wochenende. Das war in Österreich immer so, und das soll auch so bleiben.\n\n" +
      "PERSON B (Frau Aigner): Ich sehe das ganz anders. Ich arbeite unter der Woche den ganzen Tag und komme nie zum Einkaufen. Am Sonntag hätte ich endlich Zeit dafür. In anderen Ländern haben die Geschäfte doch auch am Sonntag offen.\n\n" +
      "PERSON C (Herr Berger): Für mich kommt es darauf an. Kleine Geschäfte am Bahnhof oder in Tourismusorten sollten öffnen dürfen, aber nicht die großen Einkaufszentren. Sonst haben am Ende die kleinen Läden das Nachsehen.",
    statements: [
      { text: "Am Sonntag hätte ich endlich Zeit zum Einkaufen.", answer: "b" },
      { text: "Der Sonntag ist vor allem ein Familientag.", answer: "a" },
      { text: "Kleine Geschäfte am Bahnhof sollten öffnen dürfen.", answer: "c" },
      { text: "Die Angestellten hätten dann nichts von ihrem Wochenende.", answer: "a" },
      { text: "In anderen Ländern haben die Geschäfte auch am Sonntag offen.", answer: "b" },
    ],
  },
  {
    title: "Diskussion: Lebt man besser in der Stadt oder auf dem Land?",
    topicTag: "gesellschaft",
    audioScript:
      "MODERATOR: Unsere Frage heute lautet: Lebt man besser in der Stadt oder auf dem Land? Drei Meinungen dazu.\n\n" +
      "PERSON A (Frau Steiner): Ich wohne in Wien und möchte nie wegziehen. Alles ist in der Nähe: Ärzte, Geschäfte, die U-Bahn. Ich brauche kein Auto und bin in zehn Minuten überall.\n\n" +
      "PERSON B (Herr Wallner): Ich bin in einem kleinen Dorf in der Steiermark aufgewachsen, und für mich gibt es nichts Schöneres. Die frische Luft, die Ruhe, und die Nachbarn kennen einander. In der Stadt fühle ich mich verloren.\n\n" +
      "PERSON C (Frau Huber): Ich sehe bei beidem Vor- und Nachteile. Am Land ist es günstiger und schöner, aber ohne Auto geht dort gar nichts. Für junge Leute, die ausgehen wollen, ist die Stadt sicher besser.",
    statements: [
      { text: "In der Stadt ist einfach alles in der Nähe.", answer: "a" },
      { text: "Auf dem Land kennen die Nachbarn einander.", answer: "b" },
      { text: "Ohne Auto geht auf dem Land gar nichts.", answer: "c" },
      { text: "Ich brauche in der Stadt kein Auto.", answer: "a" },
      { text: "In der Stadt fühle ich mich verloren.", answer: "b" },
    ],
  },
  {
    title: "Diskussion: Ehrenamtliche Arbeit",
    topicTag: "gesellschaft",
    audioScript:
      "MODERATORIN: Heute sprechen wir über ehrenamtliche Arbeit. Engagieren Sie sich freiwillig für andere? Drei Gäste erzählen.\n\n" +
      "PERSON A (Herr Moser): Ja, ich bin seit zwanzig Jahren bei der Freiwilligen Feuerwehr. Bei uns am Land ist das selbstverständlich. Wenn es brennt oder das Hochwasser kommt, sind wir zur Stelle. Ich bin stolz darauf.\n\n" +
      "PERSON B (Frau Leitner): Ich habe leider keine Zeit dafür. Ich arbeite Vollzeit und habe drei Kinder. Ich bewundere Menschen, die sich engagieren, aber bei mir geht es sich einfach nicht aus.\n\n" +
      "PERSON C (Herr Fischer): Ich helfe einmal in der Woche bei der Ausgabe von Lebensmitteln an bedürftige Menschen. Man muss gar nicht viel Zeit haben. Schon zwei Stunden in der Woche sind eine große Hilfe.",
    statements: [
      { text: "Ich bin seit zwanzig Jahren bei der Feuerwehr.", answer: "a" },
      { text: "Ich habe leider keine Zeit für ein Ehrenamt.", answer: "b" },
      { text: "Schon zwei Stunden in der Woche helfen viel.", answer: "c" },
      { text: "Bei uns am Land ist ein solches Engagement selbstverständlich.", answer: "a" },
      { text: "Ich bewundere Menschen, die sich engagieren.", answer: "b" },
    ],
  },
  {
    title: "Diskussion: Wie macht man am liebsten Urlaub?",
    topicTag: "freizeit",
    audioScript:
      "MODERATOR: Unsere heutige Frage: Wie machen Sie am liebsten Urlaub? Ich habe drei Gäste eingeladen.\n\n" +
      "PERSON A (Frau Wagner): Ich fahre jedes Jahr ans Meer, meistens nach Italien oder Kroatien. Ich brauche Sonne und Strand, um mich richtig zu erholen. Zu Hause bleiben könnte ich nie, dann arbeite ich ja doch nur.\n\n" +
      "PERSON B (Herr Pichler): Ich mache am liebsten Urlaub in den österreichischen Bergen. Wandern in Tirol, das ist für mich die beste Erholung. Fliegen möchte ich nicht, das ist schlecht für die Umwelt, und schön ist es bei uns ja auch.\n\n" +
      "PERSON C (Frau Ebner): Ich bleibe am liebsten zu Hause. Ich lese, schlafe lange und treffe Freunde. So spare ich Geld und habe trotzdem das Gefühl, richtig ausgespannt zu haben. Reisen ist mir einfach zu stressig.",
    statements: [
      { text: "Ich brauche Sonne und Strand, um mich zu erholen.", answer: "a" },
      { text: "Fliegen ist schlecht für die Umwelt.", answer: "b" },
      { text: "Im Urlaub bleibe ich am liebsten zu Hause.", answer: "c" },
      { text: "Zu Hause würde ich im Urlaub doch nur arbeiten.", answer: "a" },
      { text: "In Österreich ist es im Urlaub auch schön.", answer: "b" },
    ],
  },
];

const teil2Items: ExamItemInput[] = TEIL2.map((t) => ({
  ...base,
  taskType: "OESD_HV_TEIL2",
  title: t.title,
  prompt: "Sie hören einen längeren Text (eine Führung oder einen Vortrag). Sie hören ihn nur einmal.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions: "Sie hören einen längeren Text nur EINMAL. Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
  guidanceNote:
    "Lesen Sie die Fragen vor dem Hören. Sie hören den Text nur einmal — achten Sie beim Zuhören gezielt auf die vier Punkte, nach denen gefragt wird.",
}));

const teil3Items: ExamItemInput[] = TEIL3.map((t) => ({
  ...base,
  taskType: "OESD_HV_TEIL3",
  title: t.title,
  prompt: "Sie hören ein Gespräch zwischen zwei Personen. Sie hören es nur einmal.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions: "Sie hören ein Gespräch nur EINMAL. Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

const teil4Items: ExamItemInput[] = TEIL4.map((t) => ({
  ...base,
  taskType: "OESD_HV_TEIL4",
  title: t.title,
  prompt: "Sie hören im Radio drei Personen zu einem Thema. Ordnen Sie jede Aussage der richtigen Person zu.",
  topicTag: t.topicTag,
  timeLimitSeconds: 300,
  payload: {
    instructions:
      "Sie hören eine Diskussion mit drei Personen nur EINMAL. Wer hat das gesagt? Ordnen Sie jede Aussage Person A, Person B oder Person C zu.",
    audioScript: t.audioScript,
    questions: t.statements.map((s, i) => ({
      id: `z${i + 1}`,
      stem: `${i + 1}. ${s.text}`,
      options: PERSON3,
      answer: s.answer,
    })),
  },
  guidanceNote:
    "Notieren Sie beim Hören zu jeder Person ein Stichwort. Häufig sprechen zwei Personen über dasselbe Thema, aber mit gegensätzlicher Meinung — die Zuordnung hängt am Detail, nicht am Thema.",
}));

const RAW_ITEMS: ExamItemInput[] = [
  ...teil1Items,
  ...teil2Items,
  ...teil3Items,
  ...teil4Items,
];

// ── MEASURED richtig/falsch DISTRIBUTION (Teil 1, twelve statements) ────────
//   Item 1  r r f      Item 2  f r r
//   Item 3  r f f      Item 4  f f r
//   ────────────────────────────────
//   richtig 6 / falsch 6. No item is uniform, none runs a strict r-f alternation.

// Permute only the true-MC Teile (options are answer choices). Teil 1 is binary
// richtig/falsch (hand-balanced, not permuted) and Teil 4 attributes statements to
// Person A/B/C — fixed labels, kept consistent — so neither is passed to deGame.
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["OESD_HV_TEIL2", "OESD_HV_TEIL3"]),
});

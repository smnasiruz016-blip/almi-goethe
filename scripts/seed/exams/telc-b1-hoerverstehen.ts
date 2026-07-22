// telc Deutsch B1 — Hörverstehen. Original practice items.
//
// ORIGINALITY (doctrine #1): every recording script and every statement below is
// ORIGINAL to AlmiGoethe — never copied or derived from telc materials,
// Übungstests or Modellsätze. The STRUCTURE is sourced from telc; the CONTENT is
// ours, and no text, name or situation is taken from a real paper.
//
// THREE Teile with published item counts, 5 + 10 + 5 = 20 (Aufgaben 41–60):
//   Teil 1  Globalverstehen                    5 items,  heard ONCE
//   Teil 2  Detailverstehen (Interview/Bericht) 10 items, heard TWICE
//   Teil 3  Selektives Verstehen (Mitteilungen)  5 items, heard TWICE
//
// ── ALL TWENTY ITEMS ARE RICHTIG/FALSCH ─────────────────────────────────────
// This is the fact most easily got wrong, and getting it wrong is expensive.
// Aufgaben 41–60 are one continuous true/false run: what changes between the
// Teile is HOW OFTEN the recording is heard and WHAT KIND of text it is — never
// the item shape. Authoring Teil 2 or Teil 3 as three-option Mehrfachauswahl
// would have produced items that look professional and teach a task this exam
// does not set, which is exactly the failure almi-swiss shipped.
//
// The 16 items this file replaces carried TWO INVENTED taskTypes
// (TELC_B1_HV_ANNOUNCE, TELC_B1_HV_DIALOG) with three MC questions each. None of
// the three real Teile existed in the bank. Re-authored, not relabelled.
//
// ── REGISTER: THIS IS NOT TESTDAF ───────────────────────────────────────────
// telc Deutsch B1 is an EVERYDAY-LANGUAGE exam. These recordings are station and
// shop announcements, answerphone messages, workplace notices and interviews
// about work, housing and health — not the lecture and seminar German of
// TestDaF. A B1 candidate is being asked whether they can run their daily life
// in German, not whether they can follow a university.
//
// ── ANSWER DISTRIBUTION ─────────────────────────────────────────────────────
// The sibling Sprachbausteine file fixes a real defect: items authored
// correct-choice-first shipped with every Teil 1 answer as "a", so a learner
// picking the first option scored 100% knowing no German. That file repairs it
// with a deterministic title+index permutation of the options.
//
// ⚠️ THAT REPAIR CANNOT BE REUSED HERE, AND IT MUST NOT BE FAKED. A
// richtig/falsch item has exactly two options whose ids are BOUND TO THEIR
// MEANING — "richtig" cannot be shuffled into the second slot without changing
// what the learner is answering. Permuting them would move the letters around
// while leaving the true/false split untouched: the appearance of the fix
// without the fix.
//
// So the distribution here is controlled the only way it can be — BY AUTHORING,
// and then measured. Per Teil, and per individual item, both answers occur; no
// item is uniformly richtig or uniformly falsch, and no item alternates. The
// measured split is recorded at the foot of this file and is what the standing
// answer-key-distribution gate must reproduce when it lands.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B1;
const base = {
  exam: "TELC_B1" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
};

/** The two options every item in this section carries. Ids are semantic, not
 *  positional — see the distribution note above. */
const RF = [
  { id: "r", text: "Richtig" },
  { id: "f", text: "Falsch" },
];

type RF = "r" | "f";

// ── Teil 1 — Globalverstehen (5 items, heard ONCE) ──────────────────────────
// Five short, unrelated everyday texts per item; one statement about each. The
// learner hears each text a single time, so the statements ask for the GIST —
// what the announcement is for — rather than a number that has to be held in
// memory. Detail-hunting on a single hearing tests recall, not comprehension.
type T1 = {
  title: string;
  topicTag: string;
  texts: string[];
  statements: { text: string; answer: RF }[];
};

const TEIL1: T1[] = [
  {
    title: "Durchsagen im Kaufhaus",
    topicTag: "alltag",
    texts: [
      "Liebe Kundinnen und Kunden, unsere Kinderabteilung im zweiten Stock wird zurzeit umgebaut. Kinderkleidung finden Sie in dieser Zeit im Erdgeschoss neben den Schuhen.",
      "Ein kleiner Junge im blauen Pullover wartet an der Information auf seine Eltern. Wir bitten die Eltern, zur Information im ersten Stock zu kommen.",
      "Unsere Umkleidekabinen schließen zehn Minuten vor Ladenschluss. Wer noch etwas anprobieren möchte, geht bitte rechtzeitig hin.",
      "Ab nächster Woche haben wir samstags eine Stunde länger geöffnet, bis zwanzig Uhr. An den anderen Tagen bleibt alles wie bisher.",
      "Wer heute für mehr als fünfzig Euro einkauft, bekommt an der Kasse einen Gutschein für unser Café im vierten Stock.",
    ],
    statements: [
      { text: "Kinderkleidung gibt es zurzeit im Erdgeschoss.", answer: "r" },
      { text: "Die Eltern sollen ihren Sohn am Ausgang abholen.", answer: "f" },
      { text: "Man kann bis zum Ladenschluss Kleidung anprobieren.", answer: "f" },
      { text: "Samstags wird das Kaufhaus künftig später schließen.", answer: "r" },
      { text: "Den Gutschein bekommt jeder Kunde ohne Bedingung.", answer: "f" },
    ],
  },
  {
    title: "Ansagen im Radio",
    topicTag: "alltag",
    texts: [
      "Und nun zum Verkehr: Die Umleitung in der Bahnhofstraße ist seit heute Morgen aufgehoben. Sie können wieder normal durchfahren.",
      "Das für Sonntag geplante Open-Air-Konzert im Stadtpark findet statt — allerdings nicht draußen, sondern in der Stadthalle, weil Regen erwartet wird.",
      "Die Stadtbibliothek sucht Menschen, die einmal pro Woche mit Kindern lesen. Vorkenntnisse sind nicht nötig, Freude am Vorlesen reicht.",
      "Wegen einer Reparatur an der Wasserleitung bleibt das Hallenbad bis Freitag geschlossen. Das Freibad ist normal geöffnet.",
      "Am Wochenende steigen die Temperaturen auf über fünfundzwanzig Grad. Denken Sie an Sonnenschutz, besonders am Nachmittag.",
    ],
    statements: [
      { text: "Die Bahnhofstraße kann wieder befahren werden.", answer: "r" },
      { text: "Das Konzert am Sonntag wurde abgesagt.", answer: "f" },
      { text: "Für die Aufgabe in der Bibliothek braucht man eine Ausbildung.", answer: "f" },
      { text: "Das Freibad ist ebenfalls geschlossen.", answer: "f" },
      { text: "Am Wochenende wird es warm.", answer: "r" },
    ],
  },
  {
    title: "Hinweise am Arbeitsplatz",
    topicTag: "arbeit",
    texts: [
      "Bitte denken Sie daran, dass am Freitag die Sicherheitsunterweisung stattfindet. Die Teilnahme ist für alle Mitarbeitenden Pflicht.",
      "Der Kopierer im dritten Stock ist defekt. Bitte benutzen Sie bis zur Reparatur das Gerät im Erdgeschoss.",
      "Wer im Sommer Urlaub nehmen möchte, gibt seine Wünsche bitte bis Ende März ab. Später eingehende Anträge können wir nicht mehr berücksichtigen.",
      "Ab dem Ersten des Monats gibt es in der Kantine jeden Tag ein vegetarisches Gericht. Der Preis bleibt gleich.",
      "Die Personalabteilung ist diese Woche nur vormittags erreichbar, weil zwei Kolleginnen auf einer Schulung sind.",
    ],
    statements: [
      { text: "Am Freitag müssen alle Mitarbeitenden teilnehmen.", answer: "r" },
      { text: "Vorübergehend soll der Kopierer im Erdgeschoss benutzt werden.", answer: "r" },
      { text: "Urlaubsanträge für den Sommer sind auch im Mai noch möglich.", answer: "f" },
      { text: "Das vegetarische Essen wird teurer.", answer: "f" },
      { text: "Die Personalabteilung ist diese Woche eingeschränkt erreichbar.", answer: "r" },
    ],
  },
  {
    title: "Hinweise in Praxis und Apotheke",
    topicTag: "gesundheit",
    texts: [
      "Guten Tag, Sie hören die Ansage der Praxis Dr. Bergmann. Unsere Sprechzeiten sind montags bis donnerstags von acht bis zwölf Uhr und dienstags zusätzlich von fünfzehn bis achtzehn Uhr.",
      "Liebe Patientinnen und Patienten, für die Grippeimpfung brauchen Sie keinen Termin. Kommen Sie einfach dienstags oder donnerstags zwischen neun und elf Uhr vorbei.",
      "Diese Apotheke hat heute Notdienst. Klingeln Sie bitte an der Seitentür; der Schalter am Haupteingang ist nachts geschlossen.",
      "Bitte bringen Sie zur Untersuchung am Montag nichts zu essen mit — Sie müssen nüchtern sein. Trinken Sie aber ruhig Wasser.",
      "Wir bitten Sie, im Wartebereich einen Platz frei zu lassen, wenn er mit einem Schild markiert ist. Diese Plätze sind für Menschen reserviert, die schlecht stehen können.",
    ],
    statements: [
      { text: "Am Dienstagnachmittag ist die Praxis geöffnet.", answer: "r" },
      { text: "Für die Grippeimpfung muss man vorher anrufen.", answer: "f" },
      { text: "Nachts benutzt man die Seitentür der Apotheke.", answer: "r" },
      { text: "Vor der Untersuchung darf man Wasser trinken.", answer: "r" },
      { text: "Die markierten Plätze darf jeder benutzen.", answer: "f" },
    ],
  },
  {
    title: "Durchsagen im Wohnviertel",
    topicTag: "wohnen",
    texts: [
      "Sehr geehrte Mieterinnen und Mieter, am Dienstag wird zwischen neun und dreizehn Uhr das Wasser abgestellt. Bitte stellen Sie sich darauf ein.",
      "Die neuen Mülltonnen stehen ab Montag im Hof. Papier kommt in die blaue Tonne, Glas bringen Sie wie bisher zum Container an der Ecke.",
      "Am Samstag räumen wir gemeinsam den Innenhof auf. Wer mitmacht, bringt bitte Handschuhe mit; Werkzeug ist vorhanden.",
      "Der Aufzug im Haus B wird am Mittwoch gewartet und steht an diesem Tag nicht zur Verfügung. Haus A ist nicht betroffen.",
      "Wir weisen darauf hin, dass Fahrräder nicht im Treppenhaus abgestellt werden dürfen. Im hinteren Teil des Hofes gibt es dafür einen überdachten Platz.",
    ],
    statements: [
      { text: "Am Dienstagvormittag gibt es kein Wasser.", answer: "r" },
      { text: "Glas kommt künftig in eine Tonne im Hof.", answer: "f" },
      { text: "Werkzeug muss jeder selbst mitbringen.", answer: "f" },
      { text: "Im Haus A funktioniert der Aufzug am Mittwoch.", answer: "r" },
      { text: "Für Fahrräder gibt es einen überdachten Platz im Hof.", answer: "r" },
    ],
  },
];

const teil1Items: ExamItemInput[] = TEIL1.map((t) => ({
  ...base,
  taskType: "TELC_B1_HV_GLOBAL",
  title: t.title,
  prompt: "Sie hören fünf kurze Texte. Sie hören jeden Text nur einmal.",
  topicTag: t.topicTag,
  timeLimitSeconds: 480,
  payload: {
    instructions:
      "Sie hören fünf kurze Texte. Zu jedem Text gibt es eine Aussage. Entscheiden Sie, ob die Aussage richtig oder falsch ist. Sie hören die Texte nur EINMAL.",
    audioScript: t.texts.map((x, i) => `Text ${i + 1}\n${x}`).join("\n\n"),
    questions: t.statements.map((s, i) => ({
      id: `t${i + 1}`,
      stem: `${i + 1}. ${s.text}`,
      options: RF,
      answer: s.answer,
    })),
  },
  guidanceNote:
    "Sie hören diese Texte nur einmal. Achten Sie auf den Kern der Durchsage — worum geht es? — und lassen Sie sich von Einzelheiten nicht aufhalten.",
}));

// ── Teil 2 — Detailverstehen (5 items, heard TWICE) ─────────────────────────
// ONE interview or report per item, ten statements. Because the recording is
// heard twice, these statements may turn on a detail: a number, a reason, a
// change of mind. Several are false because the recording says something
// SIMILAR but not the same — that is the skill being tested, and a false
// statement that contradicts the text outright is free marks.
type T2 = {
  title: string;
  topicTag: string;
  script: string;
  statements: { text: string; answer: RF }[];
};

const TEIL2: T2[] = [
  {
    title: "Interview: Eine Busfahrerin erzählt",
    topicTag: "arbeit",
    script:
      "MODERATOR: Frau Özdemir, Sie fahren seit elf Jahren Bus in dieser Stadt. Wie sind Sie dazu gekommen?\n" +
      "ÖZDEMIR: Eigentlich durch Zufall. Ich habe vorher in einem Büro gearbeitet und wollte nicht mehr den ganzen Tag sitzen. Eine Freundin hat mir von der Ausbildung erzählt.\n" +
      "MODERATOR: Wie lange hat die Ausbildung gedauert?\n" +
      "ÖZDEMIR: Der Führerschein hat etwa drei Monate gebraucht. Das Schwierigste war aber nicht das Fahren, sondern die Technik — man muss ja auch wissen, was man bei einer Panne macht.\n" +
      "MODERATOR: Wann beginnt Ihr Arbeitstag?\n" +
      "ÖZDEMIR: Das wechselt. In der Frühschicht stehe ich um halb vier auf, in der Spätschicht komme ich erst nach Mitternacht nach Hause. An das frühe Aufstehen habe ich mich gewöhnt, an die Spätschicht nie richtig.\n" +
      "MODERATOR: Was gefällt Ihnen am meisten?\n" +
      "ÖZDEMIR: Die Menschen. Ich kenne inzwischen viele Fahrgäste. Es gibt einen älteren Herrn, der jeden Donnerstag zum Markt fährt und mir immer erzählt, was er eingekauft hat.\n" +
      "MODERATOR: Und was ist schwierig?\n" +
      "ÖZDEMIR: Der Verkehr. Wenn ich Verspätung habe, werden manche Fahrgäste ungeduldig, obwohl ich nichts dafür kann. Am Anfang habe ich mir das sehr zu Herzen genommen, heute nicht mehr.\n" +
      "MODERATOR: Würden Sie den Beruf jungen Leuten empfehlen?\n" +
      "ÖZDEMIR: Ja, aber nur, wenn man gern mit Menschen zu tun hat. Wer Ruhe sucht, ist hier falsch. Und man sollte wissen, dass die Wochenenden oft nicht frei sind.",
    statements: [
      { text: "Frau Özdemir hat vor dieser Arbeit in einem Büro gearbeitet.", answer: "r" },
      { text: "Ihre Eltern haben ihr den Beruf vorgeschlagen.", answer: "f" },
      { text: "Der Busführerschein hat etwa drei Monate gedauert.", answer: "r" },
      { text: "Am schwierigsten fand sie das Fahren selbst.", answer: "f" },
      { text: "In der Frühschicht steht sie um halb vier auf.", answer: "r" },
      { text: "An die Spätschicht hat sie sich gut gewöhnt.", answer: "f" },
      { text: "Sie kennt inzwischen viele Fahrgäste.", answer: "r" },
      { text: "Ein älterer Fahrgast fährt jeden Donnerstag zum Markt.", answer: "r" },
      { text: "Verspätungen belasten sie heute genauso stark wie früher.", answer: "f" },
      { text: "Sie sagt, dass man an den Wochenenden meistens frei hat.", answer: "f" },
    ],
  },
  {
    title: "Bericht: Ein Garten für den ganzen Stadtteil",
    topicTag: "gesellschaft",
    script:
      "Auf einer Fläche, auf der zwanzig Jahre lang nichts stand außer einer alten Halle, wächst heute Gemüse. Den Stadtteilgarten in der Lindenstraße gibt es seit vier Jahren. Angefangen haben sieben Nachbarinnen und Nachbarn, die die Stadt um Erlaubnis gebeten haben; heute sind es über neunzig Menschen aus achtzehn Ländern.\n\n" +
      "Jeder, der mitmacht, zahlt zwölf Euro im Jahr. Dafür bekommt man allerdings kein eigenes Beet — das ist der wichtigste Unterschied zu einem Schrebergarten, denn geerntet wird gemeinsam. Wer zwei Stunden im Monat mitarbeitet, darf mitnehmen, was er braucht. Diese Regel hat am Anfang für Streit gesorgt, weil einige lieber ein eigenes Stück Land gehabt hätten. Inzwischen sagen fast alle, dass gerade das Gemeinsame den Garten ausmacht.\n\n" +
      "Am meisten wachsen Bohnen, Tomaten und Kräuter. Obstbäume gibt es nur zwei, weil sie viel Platz brauchen. Im Sommer trifft sich die Gruppe jeden Mittwochabend; im Winter ruht die Arbeit fast vollständig.\n\n" +
      "Die Stadt stellt das Grundstück kostenlos zur Verfügung, allerdings befristet bis 2031. Was danach passiert, weiß niemand. Die Gruppe versucht deshalb, einen längeren Vertrag zu bekommen. Ihre Leiterin sagt, das Wichtigste sei ohnehin nicht das Gemüse: Viele Menschen im Viertel hätten sich vorher nie gegrüßt und würden heute zusammen kochen.",
    statements: [
      { text: "Den Stadtteilgarten gibt es seit vier Jahren.", answer: "r" },
      { text: "Schon zu Beginn waren über neunzig Menschen beteiligt.", answer: "f" },
      { text: "Die Mitglieder kommen aus achtzehn Ländern.", answer: "r" },
      { text: "Wer mitmacht, bekommt ein eigenes Beet.", answer: "f" },
      { text: "Der Beitrag beträgt zwölf Euro im Jahr.", answer: "r" },
      { text: "Die gemeinsame Ernte war von Anfang an unumstritten.", answer: "f" },
      { text: "Im Garten stehen mehr Obstbäume als Gemüsebeete.", answer: "f" },
      { text: "Im Sommer trifft sich die Gruppe einmal pro Woche.", answer: "r" },
      { text: "Die Stadt verlangt für das Grundstück keine Miete.", answer: "r" },
      { text: "Der Vertrag mit der Stadt gilt unbefristet.", answer: "f" },
    ],
  },
  {
    title: "Interview: Ein Krankenpfleger über seine Arbeit",
    topicTag: "gesundheit",
    script:
      "MODERATORIN: Herr Lindner, Sie arbeiten seit sechs Jahren auf einer chirurgischen Station. Wie sieht Ihr Tag überhaupt aus?\n" +
      "LINDNER: Die Frühschicht beginnt um sechs. Wir übernehmen von der Nachtschicht und gehen zuerst gemeinsam durch, was in der Nacht passiert ist. Danach wird gewaschen, Medikamente werden verteilt, Verbände gewechselt.\n" +
      "MODERATORIN: Wie viele Patientinnen und Patienten betreuen Sie?\n" +
      "LINDNER: In der Frühschicht sind es meistens zehn bis zwölf. Nachts kann eine Pflegekraft für dreißig zuständig sein, und das ist ehrlich gesagt zu viel.\n" +
      "MODERATORIN: Sie haben zunächst etwas ganz anderes gelernt.\n" +
      "LINDNER: Ja, ich bin gelernter Koch. Ich habe fünf Jahre in einem Restaurant gearbeitet und dann umgeschult. Meine Familie fand das zuerst merkwürdig.\n" +
      "MODERATORIN: Warum der Wechsel?\n" +
      "LINDNER: Mein Vater war lange krank, und ich habe im Krankenhaus gesehen, wie viel eine gute Pflegekraft ausmacht. Das hat mich nicht mehr losgelassen.\n" +
      "MODERATORIN: Was ist das Schwierigste?\n" +
      "LINDNER: Nicht die Arbeit am Bett, sondern der Papierkram. Fast ein Viertel meiner Zeit geht dafür drauf. Und natürlich: Man kann nicht allen helfen.\n" +
      "MODERATORIN: Was würde Ihnen wirklich helfen?\n" +
      "LINDNER: Mehr Kolleginnen und Kollegen. Über das Gehalt wird viel geredet, aber ehrlich gesagt wäre mehr Personal wichtiger.",
    statements: [
      { text: "Herr Lindner arbeitet seit sechs Jahren auf einer chirurgischen Station.", answer: "r" },
      { text: "Die Frühschicht beginnt um sieben Uhr.", answer: "f" },
      { text: "Zu Beginn der Schicht gibt es eine Übergabe von der Nachtschicht.", answer: "r" },
      { text: "In der Frühschicht betreut er etwa dreißig Patienten.", answer: "f" },
      { text: "Er hält die Personalsituation in der Nacht für zu knapp.", answer: "r" },
      { text: "Herr Lindner hat ursprünglich Koch gelernt.", answer: "r" },
      { text: "Seine Familie war von der Umschulung sofort begeistert.", answer: "f" },
      { text: "Anlass für den Wechsel war die Krankheit seines Vaters.", answer: "r" },
      { text: "Am schwierigsten findet er die Arbeit direkt am Krankenbett.", answer: "f" },
      { text: "Er hält mehr Personal für wichtiger als ein höheres Gehalt.", answer: "r" },
    ],
  },
  {
    title: "Bericht: Ein Haus für mehrere Generationen",
    topicTag: "wohnen",
    script:
      "In der Rosenstraße steht ein Haus, in dem vierundzwanzig Menschen zwischen zwei und einundachtzig Jahren wohnen. Es ist weder ein Altenheim noch eine Wohngemeinschaft im üblichen Sinn: Jede Partei hat eine eigene Wohnung mit eigener Küche. Gemeinsam genutzt werden nur ein großer Raum im Erdgeschoss, die Waschküche und der Garten.\n\n" +
      "Die Idee kam von einer Gruppe, die sich vor neun Jahren in einem Café kennengelernt hat. Bis das Haus stand, vergingen sechs Jahre — vor allem, weil die Finanzierung schwierig war. Zwei Familien sind in dieser Zeit wieder ausgestiegen.\n\n" +
      "Heute funktioniert vieles ohne große Absprache: Ältere Bewohnerinnen holen Kinder vom Kindergarten ab, jüngere übernehmen Einkäufe und Behördengänge. Einmal im Monat gibt es ein Treffen, bei dem Entscheidungen fallen. Abgestimmt wird dabei nicht — man diskutiert so lange, bis niemand mehr widerspricht. Das dauert manchmal Stunden.\n\n" +
      "Nicht alles ist leicht. Über Lärm wurde schon oft gestritten, besonders am Wochenende. Und wer ausziehen will, kann seine Wohnung nicht einfach verkaufen; die Gruppe entscheidet mit, wer nachrückt.\n\n" +
      "Eine Bewohnerin, achtundsiebzig Jahre alt, sagt, sie habe hier zum ersten Mal seit dem Tod ihres Mannes wieder das Gefühl, gebraucht zu werden.",
    statements: [
      { text: "In dem Haus wohnen Menschen sehr unterschiedlichen Alters.", answer: "r" },
      { text: "Alle Bewohner teilen sich eine gemeinsame Küche.", answer: "f" },
      { text: "Von der ersten Idee bis zum fertigen Haus vergingen sechs Jahre.", answer: "r" },
      { text: "Die Finanzierung war von Anfang an gesichert.", answer: "f" },
      { text: "Zwei Familien haben das Projekt vorzeitig verlassen.", answer: "r" },
      { text: "Entscheidungen werden durch Abstimmung getroffen.", answer: "f" },
      { text: "Die Bewohner treffen sich einmal im Monat.", answer: "r" },
      { text: "Über Lärm hat es bereits Streit gegeben.", answer: "r" },
      { text: "Wer auszieht, darf seine Wohnung frei verkaufen.", answer: "f" },
      { text: "Eine ältere Bewohnerin fühlt sich dort gebraucht.", answer: "r" },
    ],
  },
  {
    title: "Interview: Deutsch lernen mit fünfzig",
    topicTag: "bildung",
    script:
      "MODERATOR: Frau Haddad, Sie sind vor sieben Jahren nach Deutschland gekommen und haben mit über fünfzig angefangen, Deutsch zu lernen. Wie war der Anfang?\n" +
      "HADDAD: Sehr hart. In meiner Heimat war ich Lehrerin, ich habe selbst unterrichtet — und plötzlich konnte ich nicht einmal beim Arzt sagen, was mir fehlt. Das war das Schlimmste, nicht die Grammatik.\n" +
      "MODERATOR: Wie haben Sie gelernt?\n" +
      "HADDAD: Zuerst im Integrationskurs, sechs Monate lang jeden Vormittag. Richtig geholfen hat mir aber etwas anderes: Ich bin jeden Nachmittag in ein Café gegangen und habe einfach zugehört.\n" +
      "MODERATOR: Hat Ihnen jemand geholfen?\n" +
      "HADDAD: Eine Nachbarin, Frau Peters. Wir haben uns jede Woche getroffen und nur geredet. Sie hat mich nie korrigiert, wenn ich etwas falsch gesagt habe — das fand ich am Anfang seltsam, aber es hat mir die Angst genommen.\n" +
      "MODERATOR: Was war die größte Schwierigkeit?\n" +
      "HADDAD: Die Artikel. Der, die, das — ich mache heute noch Fehler. Aber ich habe gelernt, dass die Leute mich trotzdem verstehen.\n" +
      "MODERATOR: Sie arbeiten jetzt wieder?\n" +
      "HADDAD: Ja, aber nicht als Lehrerin; mein Abschluss wurde nicht vollständig anerkannt. Ich arbeite an einer Grundschule und helfe Kindern, die neu sind. Ich hätte gern wieder unterrichtet, aber diese Arbeit macht mir viel Freude.\n" +
      "MODERATOR: Ihr Rat an andere?\n" +
      "HADDAD: Sprechen, auch mit Fehlern. Wer wartet, bis er es perfekt kann, wartet ewig.",
    statements: [
      { text: "Frau Haddad hat mit über fünfzig Jahren begonnen, Deutsch zu lernen.", answer: "r" },
      { text: "In ihrer Heimat hat sie als Lehrerin gearbeitet.", answer: "r" },
      { text: "Am schwersten fiel ihr am Anfang die Grammatik.", answer: "f" },
      { text: "Der Integrationskurs dauerte sechs Monate.", answer: "r" },
      { text: "Sie sagt, der Kurs allein habe ihr am meisten geholfen.", answer: "f" },
      { text: "Frau Peters hat sie jedes Mal verbessert, wenn sie einen Fehler machte.", answer: "f" },
      { text: "Die Artikel bereiten ihr bis heute Schwierigkeiten.", answer: "r" },
      { text: "Ihr Abschluss aus der Heimat wurde vollständig anerkannt.", answer: "f" },
      { text: "Sie arbeitet heute an einer Grundschule.", answer: "r" },
      { text: "Sie rät anderen, erst zu sprechen, wenn sie sicher sind.", answer: "f" },
    ],
  },
];

const teil2Items: ExamItemInput[] = TEIL2.map((t) => ({
  ...base,
  taskType: "TELC_B1_HV_DETAIL",
  title: t.title,
  prompt: "Sie hören ein Interview oder einen Bericht. Sie hören den Text zweimal.",
  topicTag: t.topicTag,
  timeLimitSeconds: 900,
  payload: {
    instructions:
      "Sie hören einen längeren Text. Dazu gibt es zehn Aussagen. Entscheiden Sie, ob jede Aussage richtig oder falsch ist. Sie hören den Text ZWEIMAL.",
    audioScript: t.script,
    questions: t.statements.map((s, i) => ({
      id: `d${i + 1}`,
      stem: `${i + 1}. ${s.text}`,
      options: RF,
      answer: s.answer,
    })),
  },
  guidanceNote:
    "Lesen Sie die Aussagen vor dem ersten Hören. Achten Sie beim zweiten Hören besonders auf die Aussagen, bei denen Sie unsicher waren — oft steht im Text etwas Ähnliches, aber nicht dasselbe.",
}));

// ── Teil 3 — Selektives Verstehen (5 items, heard TWICE) ────────────────────
// Five short, practical messages per item — answerphone messages, notices,
// service calls. The learner is listening FOR something: does this concern me,
// and what do I now have to do? Statements therefore turn on the consequence of
// the message, not on decorative detail.
type T3 = {
  title: string;
  topicTag: string;
  messages: string[];
  statements: { text: string; answer: RF }[];
};

const TEIL3: T3[] = [
  {
    title: "Nachrichten auf dem Anrufbeantworter",
    topicTag: "alltag",
    messages: [
      "Hallo, hier ist Yusuf. Wir hatten gesagt, wir treffen uns um sieben vor dem Kino. Ich schaffe es aber erst um halb acht — der Film fängt ja sowieso erst um acht an. Bis später!",
      "Guten Tag, Praxis Dr. Ammann. Ihr Rezept liegt bei uns zur Abholung bereit. Sie können es bis Freitag abholen; erst danach schicken wir es Ihnen per Post zu.",
      "Hier ist die Autowerkstatt Krämer. Ihr Wagen ist fertig, aber die Reparatur war teurer als geschätzt — statt dreihundert sind es jetzt dreihundertachtzig Euro. Bitte rufen Sie kurz zurück.",
      "Hallo Frau Berger, hier der Sportverein Grün-Weiß. Das Training am Donnerstag fällt aus, weil die Halle belegt ist. Am Dienstag findet es wie immer statt.",
      "Guten Abend, hier ist Ihre Nachbarin Frau Ilić. Ein Paket für Sie ist bei mir abgegeben worden. Sie können es jederzeit abholen, ich bin den ganzen Abend zu Hause.",
    ],
    statements: [
      { text: "Yusuf kommt später als verabredet.", answer: "r" },
      { text: "Das Rezept wird auf jeden Fall zugeschickt.", answer: "f" },
      { text: "Die Reparatur kostet mehr als zunächst gedacht.", answer: "r" },
      { text: "Auch das Training am Dienstag fällt aus.", answer: "f" },
      { text: "Das Paket muss noch heute Abend abgeholt werden.", answer: "f" },
    ],
  },
  {
    title: "Kurze Mitteilungen am Arbeitsplatz",
    topicTag: "arbeit",
    messages: [
      "Hallo Team, die Besprechung am Montag verschiebe ich von zehn auf vierzehn Uhr. Der Raum bleibt derselbe.",
      "Kurze Info: Der neue Kollege, Herr Vogt, fängt schon nächste Woche an, nicht erst im Mai. Wer Zeit hat, zeigt ihm bitte das Haus.",
      "Bitte beachten: Ab sofort werden Krankmeldungen nicht mehr per E-Mail, sondern nur noch telefonisch entgegengenommen.",
      "Für die Weihnachtsfeier brauchen wir bis Ende der Woche eine Rückmeldung, wer kommt. Ohne Rückmeldung können wir nicht reservieren.",
      "Die Firma übernimmt ab Januar die Hälfte der Kosten für das Monatsticket. Die Anträge finden Sie im Intranet.",
    ],
    statements: [
      { text: "Die Besprechung am Montag beginnt später als geplant.", answer: "r" },
      { text: "Herr Vogt beginnt früher als ursprünglich geplant.", answer: "r" },
      { text: "Krankmeldungen per E-Mail sind weiterhin möglich.", answer: "f" },
      { text: "Man soll bis Ende der Woche Bescheid geben.", answer: "r" },
      { text: "Die Firma zahlt das Monatsticket vollständig.", answer: "f" },
    ],
  },
  {
    title: "Mitteilungen rund um die Wohnung",
    topicTag: "wohnen",
    messages: [
      "Guten Tag, hier die Hausverwaltung Sommer. Der Schornsteinfeger kommt am Mittwoch zwischen acht und zehn Uhr. Bitte sorgen Sie dafür, dass jemand in der Wohnung ist.",
      "Hallo, hier ist Marek von nebenan. Wir feiern am Samstag Geburtstag und es wird wahrscheinlich etwas lauter. Ab Mitternacht machen wir die Musik aus.",
      "Guten Tag, Möbelhaus Winkler. Ihr Sofa kann am Donnerstag geliefert werden. Wenn Ihnen der Termin nicht passt, melden Sie sich bitte bis morgen.",
      "Hier ist das Umzugsunternehmen Falk. Leider können wir am Samstag nicht kommen, unser Wagen ist defekt. Wir schlagen Ihnen stattdessen den Sonntag vor.",
      "Liebe Mieterinnen und Mieter, die Heizung wird morgen zwischen zehn und fünfzehn Uhr abgestellt. Warmes Wasser steht Ihnen weiterhin zur Verfügung.",
    ],
    statements: [
      { text: "Am Mittwochvormittag muss jemand zu Hause sein.", answer: "r" },
      { text: "Die Musik läuft am Samstag die ganze Nacht.", answer: "f" },
      { text: "Das Sofa wird auf jeden Fall am Donnerstag geliefert.", answer: "f" },
      { text: "Der Umzug muss verschoben werden.", answer: "r" },
      { text: "Warmes Wasser gibt es morgen trotzdem.", answer: "r" },
    ],
  },
  {
    title: "Mitteilungen zu Kursen und Terminen",
    topicTag: "bildung",
    messages: [
      "Guten Tag, hier die Volkshochschule. Der Computerkurs am Dienstag fällt leider aus, weil sich zu wenige angemeldet haben. Ihr Geld bekommen Sie selbstverständlich zurück.",
      "Hallo, hier ist die Fahrschule Weber. Ihre theoretische Prüfung ist bestätigt: Montag, neun Uhr. Bringen Sie bitte Ihren Ausweis mit.",
      "Guten Tag, Stadtbibliothek. Das Buch, das Sie vorbestellt haben, ist eingetroffen. Wir legen es sieben Tage für Sie zurück.",
      "Hallo, hier ist Frau Roth von der Sprachschule. Ihr Einstufungstest hat ergeben, dass Sie in den B1-Kurs passen, nicht in A2. Der beginnt im Oktober.",
      "Hier ist die Musikschule. Der Unterricht Ihrer Tochter findet in den Ferien nicht statt. Nach den Ferien geht es zur gewohnten Zeit weiter.",
    ],
    statements: [
      { text: "Der Computerkurs findet nicht statt.", answer: "r" },
      { text: "Zur theoretischen Prüfung muss man einen Ausweis mitbringen.", answer: "r" },
      { text: "Das Buch wird vier Wochen zurückgelegt.", answer: "f" },
      { text: "Der Test hat ein niedrigeres Niveau ergeben als erwartet.", answer: "f" },
      { text: "Nach den Ferien ändert sich die Unterrichtszeit.", answer: "f" },
    ],
  },
  {
    title: "Mitteilungen unterwegs",
    topicTag: "verkehr",
    messages: [
      "Sehr geehrte Fahrgäste, dieser Zug endet heute in Fulda. Reisende nach Frankfurt nehmen bitte den bereitstehenden Ersatzbus vor dem Bahnhof.",
      "Hallo, hier ist Sabine. Ich stehe im Stau und komme etwa eine halbe Stunde später. Fangt bitte ohne mich an zu essen.",
      "Information für unsere Fluggäste: Der Flug nach Wien startet planmäßig, allerdings von einem anderen Gate — nicht B12, sondern B24.",
      "Guten Tag, hier ist das Taxiunternehmen Nord. Ihr Wagen für morgen früh um fünf Uhr ist bestätigt. Der Fahrer wartet vor dem Haus.",
      "Achtung: Die Fähre fährt heute wegen des starken Windes nur bis vierzehn Uhr. Die letzte Rückfahrt ist um dreizehn Uhr dreißig.",
    ],
    statements: [
      { text: "Der Zug fährt heute nicht bis Frankfurt.", answer: "r" },
      { text: "Sabine möchte, dass die anderen mit dem Essen auf sie warten.", answer: "f" },
      { text: "Der Flug nach Wien hat Verspätung.", answer: "f" },
      { text: "Das Taxi ist für den frühen Morgen bestellt.", answer: "r" },
      { text: "Die Fähre fährt heute den ganzen Tag.", answer: "f" },
    ],
  },
];

const teil3Items: ExamItemInput[] = TEIL3.map((t) => ({
  ...base,
  taskType: "TELC_B1_HV_SELEKTIV",
  title: t.title,
  prompt: "Sie hören fünf kurze Mitteilungen. Sie hören die Mitteilungen zweimal.",
  topicTag: t.topicTag,
  timeLimitSeconds: 600,
  payload: {
    instructions:
      "Sie hören fünf kurze Mitteilungen. Zu jeder Mitteilung gibt es eine Aussage. Entscheiden Sie, ob die Aussage richtig oder falsch ist. Sie hören die Mitteilungen ZWEIMAL.",
    audioScript: t.messages.map((x, i) => `Mitteilung ${i + 1}\n${x}`).join("\n\n"),
    questions: t.statements.map((s, i) => ({
      id: `m${i + 1}`,
      stem: `${i + 1}. ${s.text}`,
      options: RF,
      answer: s.answer,
    })),
  },
  guidanceNote:
    "Fragen Sie sich bei jeder Mitteilung: Was muss ich jetzt tun? Häufig ist die Aussage falsch, weil die Mitteilung eine Bedingung oder eine Ausnahme nennt („bis Freitag“, „nur der Donnerstag“).",
}));

export const ITEMS: ExamItemInput[] = [...teil1Items, ...teil2Items, ...teil3Items];

// ── MEASURED ANSWER DISTRIBUTION (see the note at the head of this file) ────
// Counted over all 100 statements at the time of authoring:
//
//   Teil 1 (Globalverstehen)   25 statements — richtig 13 / falsch 12
//   Teil 2 (Detailverstehen)   50 statements — richtig 27 / falsch 23
//   Teil 3 (Selektives V.)     25 statements — richtig 12 / falsch 13
//   ──────────────────────────────────────────────────────────────────
//   TOTAL                     100 statements — richtig 52 / falsch 48
//
// No individual item is uniformly richtig or uniformly falsch, and none
// alternates r/f down the list — a learner who answers everything "richtig"
// scores 52%, and one who spots a rhythm scores nothing extra.
//
// ⚠️ HOW THESE FIGURES WERE ESTABLISHED, AND WHAT STILL GUARDS THEM: NOTHING.
// They were MEASURED off the built ITEMS array, not counted by hand. That
// distinction earned its keep immediately — the hand-count claimed no item
// alternated, and the measurement found three Teil 3 items running r-f-r-f-r
// straight down. Those were re-authored (the statements, not just the keys, so
// the German still matches its recording); the totals above are the re-measured
// figures.
//
// But a number in a comment is not a gate. Until the standing
// answer-key-distribution gate lands after batch 1, NOTHING re-checks this file:
// the next author to add an item here can reintroduce the defect and every gate
// in the repo will still go green. That gate is what makes this durable, and
// this note is the reason it is owed.

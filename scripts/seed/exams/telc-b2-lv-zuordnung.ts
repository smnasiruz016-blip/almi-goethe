// telc Deutsch B2 — Leseverstehen, Teil 1 (Überschriften zuordnen) and Teil 3
// (Anzeigen selektiv zuordnen). Both are ZUORDNUNG: one shared option bank per
// item, each question an assignment into it.
//
// OFFICIAL CELLS
//   Teil 1 — 5 Texte, Bank a–j (10 Überschriften; 5 bleiben übrig)
//   Teil 3 — 10 Situationen, Bank a–l plus x (12 Anzeigen + "keine passt")
// Five instances each (rule7 floor ≥15 across LV's three Teile; a floor, not a quota).
//
// ── WHY A SHARED BANK AND NOT PER-QUESTION OPTIONS ─────────────────────────
// A Zuordnung's whole difficulty is that ten headlines compete for five texts. Split
// into per-question option arrays it becomes five easy 3-choice questions and the
// distribution gate's assignment-spread axis has nothing to read. The bank is the
// task, so it is modelled as one.
//
// ── THE INVARIANT THAT MATTERS: ASSIGNMENT UNIQUENESS ──────────────────────
// Exactly one bank entry may fit each question. The failure mode here is the
// Zuordnung version of a double answer: two headlines that both describe the text,
// or two Anzeigen that both satisfy the situation. It cannot be caught by counting —
// only by writing the distractors to be about a DIFFERENT thing, not a vaguer
// version of the same thing. Distractors here are therefore plausible standalone
// texts about neighbouring topics, never near-paraphrases of a correct option.
//
// Teil 3 additionally carries `x` ("keine der Anzeigen passt"). At least one
// situation per instance keys to x — otherwise x is a dead option and the item
// teaches that there is always a match, which the real exam does not.
//
// Build-time assertions below enforce: bank size, every key inside the bank, no bank
// entry used twice, x actually used, and keys spread across the bank rather than
// clustered in the first few letters.
//
// ORIGINALITY (doctrine #1): all texts, headlines and Anzeigen original to
// AlmiGoethe. No real company, publication, authority or person is named; prices,
// phone numbers and addresses are deliberately absent rather than invented.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B2;
const LETTERS = "abcdefghijkl".split("");

const base = {
  exam: "TELC_B2" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
  topicTag: "leseverstehen",
};

type Assign = { text: string; key: string };

function assertBank(title: string, bankIds: string[], keys: string[], wantSize: number, requireX: boolean) {
  if (bankIds.length !== wantSize) throw new Error(`${title}: bank has ${bankIds.length}, expected ${wantSize}`);
  if (new Set(bankIds).size !== bankIds.length) throw new Error(`${title}: duplicate bank ids`);
  for (const k of keys) if (!bankIds.includes(k)) throw new Error(`${title}: key "${k}" is not in the bank`);
  const reused = keys.filter((k, i) => k !== "x" && keys.indexOf(k) !== i);
  if (reused.length) throw new Error(`${title}: bank entr(y/ies) assigned twice — ${[...new Set(reused)].join(", ")}`);
  if (requireX && !keys.includes("x")) throw new Error(`${title}: no situation keys to x — "keine passt" would be a dead option`);
  // Spread: keys must not all sit in the first half of the bank.
  const half = bankIds.slice(0, Math.ceil(wantSize / 2));
  if (keys.every((k) => half.includes(k))) throw new Error(`${title}: every key sits in the first half of the bank`);
}

// ── TEIL 1 — Überschriften zuordnen ─────────────────────────────────────────
function t1(title: string, headlines: string[], texts: Assign[]): ExamItemInput {
  if (headlines.length !== 10) throw new Error(`${title}: Teil 1 bank is 10 headlines, got ${headlines.length}`);
  if (texts.length !== 5) throw new Error(`${title}: Teil 1 has 5 texts, got ${texts.length}`);
  const bank = headlines.map((text, i) => ({ id: LETTERS[i], text }));
  assertBank(title, bank.map((b) => b.id), texts.map((t) => t.key), 10, false);
  return {
    ...base,
    taskType: "TELC_B2_LV_T1_UEBERSCHRIFTEN",
    title,
    prompt: "Lesen Sie die fünf kurzen Texte und ordnen Sie jedem Text die passende Überschrift zu.",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Ordnen Sie jedem Text (1–5) eine Überschrift (a–j) zu. Nicht alle Überschriften passen; jede Überschrift kann höchstens einmal verwendet werden.",
      bank,
      segments: texts.map((t, i) => ({ id: `t${i + 1}`, label: `Text ${i + 1}`, script: t.text })),
      questions: texts.map((t, i) => ({ id: `q${i + 1}`, stem: `Text ${i + 1}`, answer: t.key })),
    },
  };
}

// ── TEIL 3 — Anzeigen selektiv zuordnen ─────────────────────────────────────
function t3(title: string, anzeigen: string[], situations: Assign[]): ExamItemInput {
  if (anzeigen.length !== 12) throw new Error(`${title}: Teil 3 bank is 12 Anzeigen, got ${anzeigen.length}`);
  if (situations.length !== 10) throw new Error(`${title}: Teil 3 has 10 situations, got ${situations.length}`);
  const bank = [
    ...anzeigen.map((text, i) => ({ id: LETTERS[i], text })),
    { id: "x", text: "Keine der Anzeigen passt." },
  ];
  assertBank(title, bank.map((b) => b.id), situations.map((s) => s.key), 13, true);
  return {
    ...base,
    taskType: "TELC_B2_LV_T3_ANZEIGEN",
    title,
    prompt: "Lesen Sie die zehn Situationen und die zwölf Anzeigen. Ordnen Sie jeder Situation die passende Anzeige zu.",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Ordnen Sie jeder Situation (1–10) eine Anzeige (a–l) zu. Jede Anzeige kann höchstens einmal verwendet werden. Passt keine Anzeige, wählen Sie x.",
      bank,
      questions: situations.map((s, i) => ({ id: `q${i + 1}`, stem: `${i + 1}. ${s.text}`, answer: s.key })),
    },
  };
}

const T1_ITEMS: ExamItemInput[] = [
  t1("Kurznachrichten aus der Stadt",
    [
      /* a */ "Länger lesen im Winter",
      /* b */ "Neue Preise im Parkhaus",
      /* c */ "Vorfahrt für das Rad",
      /* d */ "Ein Konzert unter freiem Himmel",
      /* e */ "Das Bad wird erneuert",
      /* f */ "Eine Buslinie verschwindet",
      /* g */ "Beschäftigung für die Ferien",
      /* h */ "Mehr Personal in den Kitas",
      /* i */ "Der Markt wechselt den Platz",
      /* j */ "Das Museum bleibt zu",
    ],
    [
      { key: "a", text: "Ab November öffnet die Stadtbibliothek an vier Abenden bis zwanzig Uhr. Die Leitung reagiert damit auf Wünsche von Berufstätigen, die tagsüber selten kommen können. An Samstagen bleibt es bei den bisherigen Zeiten." },
      { key: "c", text: "Die Querstraße zwischen Bahnhof und Park wird zur Fahrradstraße. Autos dürfen weiterhin fahren, müssen sich aber unterordnen und dürfen nicht überholen. Die Umgestaltung soll im Frühjahr abgeschlossen sein." },
      { key: "e", text: "Das Hallenbad schließt für sieben Monate. Becken, Umkleiden und Technik stammen aus den siebziger Jahren und entsprechen nicht mehr den Anforderungen. Wer schwimmen möchte, kann in dieser Zeit das Bad im Nachbarort nutzen." },
      { key: "g", text: "Für die Sommerferien bietet die Stadt wieder ein Programm für Kinder zwischen sechs und zwölf Jahren an. Geplant sind Ausflüge, Werkstätten und Sport. Die Anmeldung läuft ab Mai über die Schulen." },
      { key: "i", text: "Wegen der Bauarbeiten am Rathausplatz findet der Wochenmarkt ab Juni auf dem Gelände hinter der Turnhalle statt. Die Händler bleiben dieselben, die Zeiten ändern sich nicht." },
    ]),

  t1("Aus dem Vereinsleben",
    [
      /* a */ "Ein Platz für die Jüngsten",
      /* b */ "Der Chor sucht Stimmen",
      /* c */ "Neue Trikots gesucht",
      /* d */ "Das Vereinsheim wird verkauft",
      /* e */ "Ein Turnier für alle Altersgruppen",
      /* f */ "Die Wanderung fällt aus",
      /* g */ "Ein Ehrenamt mit festen Zeiten",
      /* h */ "Der Beitrag steigt",
      /* i */ "Ein Jubiläum ohne Feier",
      /* j */ "Neue Zeiten in der Halle",
    ],
    [
      { key: "b", text: "Der gemischte Chor probt weiterhin dienstags, sucht aber dringend Männerstimmen. Notenkenntnisse sind nicht nötig; wer regelmäßig kommt, lernt die Stücke im Lauf der Proben. Interessierte können jederzeit hospitieren." },
      { key: "e", text: "Am zweiten Septemberwochenende richtet der Verein ein Turnier aus, bei dem in vier Altersklassen gespielt wird. Angemeldet werden können auch Mannschaften ohne Vereinszugehörigkeit. Für Verpflegung ist gesorgt." },
      { key: "g", text: "Für die Betreuung der Jugendmannschaft wird eine Person gesucht, die zweimal wöchentlich Zeit hat. Eine Trainerlizenz ist nicht Voraussetzung, die Ausbildung wird vom Verein bezahlt. Der Zeitaufwand ist verbindlich festgelegt." },
      { key: "h", text: "Ab Januar werden die Mitgliedsbeiträge angehoben. Grund sind die gestiegenen Kosten für Energie und Hallenmiete. Für Familien und Auszubildende bleibt der ermäßigte Satz bestehen." },
      { key: "j", text: "Weil die Schule die Halle nachmittags länger nutzt, verschieben sich die Trainingszeiten aller Gruppen um eine Stunde nach hinten. Der neue Plan hängt ab sofort am Eingang aus." },
    ]),

  t1("Meldungen aus dem Betrieb",
    [
      /* a */ "Ein neuer Aufenthaltsraum",
      /* b */ "Die Kantine bleibt geschlossen",
      /* c */ "Weiterbildung während der Arbeitszeit",
      /* d */ "Zuschuss für den Weg zur Arbeit",
      /* e */ "Ein Wettbewerb für Ideen",
      /* f */ "Neue Software für alle",
      /* g */ "Die Belegschaft wächst",
      /* h */ "Der Standort wird verlegt",
      /* i */ "Ein Gesundheitstag im Haus",
      /* j */ "Weniger Papier im Büro",
    ],
    [
      { key: "c", text: "Beschäftigte können ab April an Kursen zu Präsentation und Gesprächsführung teilnehmen. Die Kurse finden vormittags statt und gelten als Arbeitszeit. Die Plätze werden nach Anmeldung vergeben." },
      { key: "d", text: "Wer mit Bus oder Bahn zur Arbeit kommt, erhält künftig einen monatlichen Zuschuss zum Ticket. Auch wer mit dem Rad fährt, kann eine Pauschale beantragen. Die Regelung gilt für alle Standorte." },
      { key: "e", text: "Mit einem internen Wettbewerb sucht die Geschäftsführung Vorschläge, wie Abläufe einfacher werden können. Eingereicht werden kann bis Ende Mai; die drei besten Vorschläge werden prämiert." },
      { key: "i", text: "An einem Donnerstag im Juni kommen Fachleute ins Haus und bieten kurze Untersuchungen, Beratung zu Rückenproblemen und eine Sprechstunde zu Ernährung an. Die Teilnahme ist freiwillig und kostenlos." },
      { key: "j", text: "Rechnungen und Urlaubsanträge werden ab Herbst nur noch digital bearbeitet. Ausdrucke sind dann die Ausnahme. Wer Unterstützung braucht, kann an einer kurzen Einführung teilnehmen." },
    ]),

  t1("Rund ums Wohnen",
    [
      /* a */ "Die Miete wird angepasst",
      /* b */ "Ein Garten für alle",
      /* c */ "Neue Fenster im ganzen Haus",
      /* d */ "Der Keller wird geräumt",
      /* e */ "Ein Stellplatz wird frei",
      /* f */ "Ruhe nach zweiundzwanzig Uhr",
      /* g */ "Die Waschküche bekommt neue Regeln",
      /* h */ "Ein neuer Hausmeister",
      /* i */ "Das Dach wird gedämmt",
      /* j */ "Der Aufzug fällt länger aus",
    ],
    [
      { key: "b", text: "Auf der Fläche hinter dem Haus entstehen im Frühjahr zwölf kleine Beete, die von den Mietparteien gemeinsam genutzt werden können. Wer mitmachen möchte, trägt sich in eine Liste ein. Werkzeug wird gestellt." },
      { key: "d", text: "Gegenstände, die seit Jahren in den Gängen des Kellers stehen, müssen bis Ende des Monats entfernt werden. Danach wird alles entsorgt, was dort noch liegt. Die Feuerwehr hat auf die Vorschriften hingewiesen." },
      { key: "g", text: "Um Streit zu vermeiden, gilt ab sofort ein Plan mit festen Zeiten für jede Wohnung. Wer eine Zeit nicht nutzt, kann sie im Aushang freigeben. Die Maschinen dürfen sonntags nicht laufen." },
      { key: "i", text: "Im August beginnen die Arbeiten am obersten Geschoss. Ziel ist es, die Heizkosten dauerhaft zu senken. Für die Dauer der Arbeiten steht ein Gerüst an der Straßenseite." },
      { key: "j", text: "Der Aufzug bleibt länger außer Betrieb als angekündigt, weil ein Ersatzteil erst in mehreren Wochen geliefert wird. Wer auf ihn angewiesen ist, kann sich bei der Verwaltung melden." },
    ]),

  t1("Kurz notiert: Freizeit und Kultur",
    [
      /* a */ "Ein Kurs für Anfänger",
      /* b */ "Das Kino zeigt alte Filme",
      /* c */ "Eine Ausstellung zum Mitmachen",
      /* d */ "Der Eintritt wird teurer",
      /* e */ "Ein Fest ohne Musik",
      /* f */ "Lesen im Freien",
      /* g */ "Das Theater sucht Statisten",
      /* h */ "Ein Flohmarkt für Kinder",
      /* i */ "Die Führung ist ausgebucht",
      /* j */ "Eine Bühne zieht um",
    ],
    [
      { key: "c", text: "In der neuen Ausstellung darf fast alles angefasst werden. Besucherinnen und Besucher können Werkzeuge ausprobieren, Materialien vergleichen und an mehreren Stationen selbst etwas herstellen. Kinder ab acht Jahren sind ausdrücklich willkommen." },
      { key: "f", text: "Im Juli und August stellt die Bibliothek an drei Nachmittagen pro Woche Liegestühle und eine Auswahl an Büchern und Zeitschriften in den Innenhof. Ein Ausweis ist dafür nicht erforderlich." },
      { key: "g", text: "Für die Inszenierung im Herbst werden Menschen gesucht, die in mehreren Szenen ohne Text auftreten. Schauspielerfahrung ist nicht nötig, wohl aber Zeit für sechs Abendproben." },
      { key: "h", text: "Am ersten Samstag im Mai können Kinder auf dem Schulhof Spielzeug, Bücher und Kleidung verkaufen, die sie nicht mehr brauchen. Ein Stand kostet nichts, angemeldet wird über die Klassenleitung." },
      { key: "j", text: "Die Kleinkunstbühne verlässt den Saal im Hinterhaus und spielt ab September in den Räumen der ehemaligen Post. Das Programm bleibt unverändert, es gibt jedoch mehr Plätze." },
    ]),
];

const T3_ITEMS: ExamItemInput[] = [
  t3("Anzeigen: Kurse und Freizeit",
    [
      /* a */ "Gitarrenunterricht für Erwachsene, auch ohne Vorkenntnisse. Einzelstunden am Abend, Instrument kann geliehen werden.",
      /* b */ "Schwimmkurs für Kinder ab fünf Jahren, samstags vormittags. Kleine Gruppen, erfahrene Kursleitung.",
      /* c */ "Nähwerkstatt: Reparieren statt wegwerfen. Bringen Sie Ihr Kleidungsstück mit, Maschinen stehen bereit.",
      /* d */ "Wanderungen für Ältere, jeden Mittwoch, Strecken bis acht Kilometer, gemütliches Tempo, Einkehr unterwegs.",
      /* e */ "Malkurs am Wochenende, für Fortgeschrittene mit eigener Bildidee. Material ist mitzubringen.",
      /* f */ "Kochabende zu wechselnden Ländern, einmal im Monat, für alle offen. Zutaten werden gestellt.",
      /* g */ "Yoga in der Mittagspause, dreißig Minuten, direkt im Bürogebäude, ohne Anmeldung.",
      /* h */ "Fahrsicherheitstraining für Motorräder, ganztägig, eigenes Fahrzeug erforderlich.",
      /* i */ "Vorlesestunde für Kinder von drei bis sechs Jahren, jeden Freitagnachmittag in der Bibliothek.",
      /* j */ "Computerkurs für Seniorinnen und Senioren: E-Mail, Fotos, Termine. Zwei Vormittage pro Woche.",
      /* k */ "Laufgruppe für Anfänger, Treffpunkt am Park, zweimal wöchentlich, Ziel sind fünf Kilometer am Stück.",
      /* l */ "Tanzkurs für Paare, Grundschritte in acht Abenden, Anmeldung nur gemeinsam möglich.",
    ],
    [
      { key: "j", text: "Ihre Mutter ist siebzig und möchte endlich lernen, Fotos zu verschicken und Termine im Kalender einzutragen.", },
      { key: "b", text: "Ihre Tochter ist sechs und soll schwimmen lernen; unter der Woche haben Sie keine Zeit.", },
      { key: "c", text: "An Ihrer Jacke ist der Reißverschluss kaputt. Sie möchten sie nicht wegwerfen, haben aber selbst keine Nähmaschine.", },
      { key: "g", text: "Sie arbeiten ganztags im Büro und möchten sich mittags kurz bewegen, ohne vorher etwas buchen zu müssen.", },
      { key: "a", text: "Sie sind vierzig, haben noch nie ein Instrument gespielt und möchten abends Gitarre lernen. Ein eigenes Instrument haben Sie nicht.", },
      { key: "k", text: "Sie haben lange keinen Sport gemacht und möchten in einer Gruppe mit dem Laufen anfangen.", },
      { key: "x", text: "Sie suchen einen Schachkurs für Jugendliche am Wochenende.", },
      { key: "d", text: "Ihr Vater ist Ende sechzig, gut zu Fuß und möchte unter der Woche in einer Gruppe wandern.", },
      { key: "f", text: "Sie möchten neue Gerichte aus verschiedenen Ländern kochen lernen und dabei Leute kennenlernen.", },
      { key: "i", text: "Ihr Sohn ist vier. Sie suchen ein regelmäßiges Angebot am Nachmittag, bei dem ihm vorgelesen wird.", },
    ]),

  t3("Anzeigen: Wohnen, Haushalt und Umzug",
    [
      /* a */ "Zwei-Zimmer-Wohnung im Erdgeschoss, kleiner Garten, ab sofort frei, Haustiere nach Absprache.",
      /* b */ "Möbliertes Zimmer in Wohngemeinschaft, nur für Studierende, mindestens ein Semester.",
      /* c */ "Umzugshilfe: zwei Personen mit Transporter, auch am Wochenende, Möbelaufbau möglich.",
      /* d */ "Haushaltsauflösung, vollständige Räumung inklusive Entsorgung, Termin nach Vereinbarung.",
      /* e */ "Garage zu vermieten, trocken, mit Strom, nur für ein Fahrzeug, keine Werkstattnutzung.",
      /* f */ "Reinigungskraft für ein Treppenhaus gesucht, einmal wöchentlich, feste Zeiten.",
      /* g */ "Vier-Zimmer-Wohnung mit Balkon, dritter Stock ohne Aufzug, ab dem Frühjahr frei.",
      /* h */ "Einlagerung von Möbeln, beheizter Raum, Mindestdauer ein Monat, Zugang nach Anmeldung.",
      /* i */ "Handwerker übernimmt kleine Reparaturen in Wohnung und Haus, keine Elektroarbeiten.",
      /* j */ "Zimmer an Berufstätige, ruhige Lage, Küche und Bad werden geteilt, Nichtraucherhaushalt.",
      /* k */ "Kleiderschrank und Regal abzugeben, guter Zustand, Abholung erforderlich.",
      /* l */ "Ferienwohnung für zwei Personen, wochenweise, Bettwäsche und Endreinigung inklusive.",
    ],
    [
      { key: "c", text: "Sie ziehen am Samstag um und brauchen Leute, die beim Tragen helfen und ein Fahrzeug mitbringen.", },
      { key: "e", text: "Sie haben ein Auto und suchen einen trockenen Abstellplatz, in dem Sie auch eine Lampe anschließen können.", },
      { key: "b", text: "Sie beginnen im Oktober ein Studium und suchen für zwei Semester ein eingerichtetes Zimmer.", },
      { key: "h", text: "Ihre Möbel müssen drei Monate lang irgendwo stehen, bis Ihre neue Wohnung frei wird.", },
      { key: "i", text: "In Ihrer Wohnung klemmt eine Tür und ein Regal muss befestigt werden. Sie suchen jemanden für solche kleinen Arbeiten.", },
      { key: "a", text: "Sie suchen eine kleine Wohnung ohne Treppen und möchten Ihre Katze mitnehmen.", },
      { key: "x", text: "Sie suchen ein Büro mit zwei Arbeitsplätzen zur Untermiete.", },
      { key: "f", text: "Ihre Hausgemeinschaft sucht jemanden, der wöchentlich das Treppenhaus putzt.", },
      { key: "k", text: "Sie richten ein Zimmer ein und suchen günstige gebrauchte Möbel zum Abholen.", },
      { key: "l", text: "Sie möchten mit Ihrem Partner eine Woche wegfahren und suchen eine Unterkunft, in der Sie selbst kochen können.", },
    ]),

  t3("Anzeigen: Arbeit und Ausbildung",
    [
      /* a */ "Aushilfe für den Verkauf gesucht, samstags, keine Vorkenntnisse nötig, Einarbeitung erfolgt.",
      /* b */ "Ausbildungsplatz im Handwerk ab September, Führerschein von Vorteil, Bewerbung schriftlich.",
      /* c */ "Bürokraft in Teilzeit, vormittags, Erfahrung mit Tabellen erwünscht, unbefristet.",
      /* d */ "Nachhilfe in Mathematik für die Mittelstufe, einzeln oder zu zweit, auch online.",
      /* e */ "Fahrer für Auslieferungen, Führerschein Klasse B, feste Touren am Vormittag.",
      /* f */ "Praktikum im Labor, mindestens acht Wochen, für Studierende naturwissenschaftlicher Fächer.",
      /* g */ "Bewerbungstraining: Unterlagen prüfen, Gespräche üben, Einzeltermine nach Vereinbarung.",
      /* h */ "Pflegehilfskraft gesucht, Schichtdienst, Berufserfahrung nicht erforderlich, Einarbeitung im Team.",
      /* i */ "Ferienjob in der Produktion, ab achtzehn Jahren, mindestens vier Wochen am Stück.",
      /* j */ "Sprachkurs Deutsch für den Beruf, abends, kleine Gruppen, Abschluss mit Zertifikat.",
      /* k */ "Küchenhilfe für die Mittagszeit, montags bis freitags, ohne Wochenenddienst.",
      /* l */ "Werkstatt sucht Aushilfe für Reifenwechsel in der Saison, körperliche Arbeit.",
    ],
    [
      { key: "d", text: "Ihre Tochter ist in der achten Klasse und kommt in Mathematik nicht mehr mit.", },
      { key: "i", text: "Sie sind neunzehn und möchten in den Semesterferien einen Monat am Stück arbeiten.", },
      { key: "g", text: "Sie bewerben sich seit Monaten ohne Erfolg und hätten gern, dass jemand Ihre Unterlagen durchsieht und das Gespräch mit Ihnen übt.", },
      { key: "c", text: "Sie suchen eine dauerhafte Stelle für den Vormittag im Büro und arbeiten gern mit Tabellen.", },
      { key: "k", text: "Sie können nur mittags arbeiten und möchten die Wochenenden frei haben.", },
      { key: "x", text: "Sie suchen eine Stelle als Lehrerin an einer Grundschule.", },
      { key: "f", text: "Sie studieren Chemie und brauchen für Ihr Studium ein längeres Praktikum.", },
      { key: "j", text: "Sie arbeiten bereits, möchten aber Ihr Deutsch für den Beruf verbessern und am Ende ein Zertifikat haben.", },
      { key: "b", text: "Sie haben gerade die Schule beendet und möchten im Herbst eine Ausbildung in einem handwerklichen Beruf beginnen.", },
      { key: "h", text: "Sie möchten in die Pflege einsteigen, haben aber keine Erfahrung und können in Schichten arbeiten.", },
    ]),

  t3("Anzeigen: Reise und Verkehr",
    [
      /* a */ "Mitfahrgelegenheit nach Norden, freitags nachmittags, zwei Plätze, Gepäck begrenzt.",
      /* b */ "Fahrradwerkstatt: Reparaturen ohne Termin, Wartezeit möglich, Ersatzteile vorrätig.",
      /* c */ "Busreise zu einer Gartenausstellung, Tagesfahrt, Abfahrt früh am Morgen.",
      /* d */ "Wohnmobil zu vermieten, vier Schlafplätze, Mindestmietdauer eine Woche.",
      /* e */ "Fahrschule: Intensivkurs in den Ferien, Theorie und Praxis in vier Wochen.",
      /* f */ "Gebrauchtes Fahrrad abzugeben, verkehrssicher, mit Licht und Schloss.",
      /* g */ "Taxi für Krankenfahrten, auch mit Rollstuhl, Voranmeldung erforderlich.",
      /* h */ "Sprachreise für Jugendliche, zwei Wochen, Unterricht am Vormittag, Programm am Nachmittag.",
      /* i */ "Autoreparatur und Inspektion, freie Werkstatt, Ersatzwagen auf Wunsch.",
      /* j */ "Wanderreise mit Gepäcktransport, sieben Tage, mittlere Anforderungen.",
      /* k */ "Roller zu verkaufen, wenig gefahren, technisch geprüft, Helm wird dazugegeben.",
      /* l */ "Stadtführung zu Fuß, zwei Stunden, kleine Gruppen, auch bei Regen.",
    ],
    [
      { key: "e", text: "Ihr Sohn möchte den Führerschein in den Sommerferien machen und dafür Theorie und Praxis in kurzer Zeit erledigen.", },
      { key: "g", text: "Ihre Mutter sitzt im Rollstuhl und muss regelmäßig zu Untersuchungen gefahren werden.", },
      { key: "b", text: "An Ihrem Rad ist die Bremse defekt und Sie möchten ohne Termin vorbeikommen.", },
      { key: "j", text: "Sie möchten eine Woche wandern, ohne Ihr Gepäck von Ort zu Ort tragen zu müssen.", },
      { key: "d", text: "Sie planen einen zweiwöchigen Urlaub zu viert und möchten unterwegs schlafen können.", },
      { key: "x", text: "Sie suchen einen Flug nach Nordamerika im September.", },
      { key: "a", text: "Sie möchten am Freitag in den Norden fahren, haben kein Auto und nur eine kleine Tasche.", },
      { key: "h", text: "Ihre Tochter ist fünfzehn und soll in den Ferien Englisch lernen und dabei etwas erleben.", },
      { key: "l", text: "Sie haben zwei Stunden Zeit und möchten die Altstadt zu Fuß mit einer Führung erkunden.", },
      { key: "i", text: "Ihr Auto muss zur Inspektion, und Sie brauchen für den Tag ein Ersatzfahrzeug.", },
    ]),

  t3("Anzeigen: Dienstleistungen im Alltag",
    [
      /* a */ "Schneiderei: Hosen kürzen, Reißverschlüsse tauschen, Änderungen innerhalb weniger Tage.",
      /* b */ "Tierbetreuung im Urlaub, Katzen und Kleintiere, Betreuung in Ihrer Wohnung.",
      /* c */ "Gartenpflege: Rasen mähen, Hecken schneiden, regelmäßig oder einmalig.",
      /* d */ "Fotostudio: Bewerbungsfotos, Termine auch am Abend, Bilder digital und gedruckt.",
      /* e */ "Steuererklärung für Angestellte, persönliche Beratung, Termine nach Vereinbarung.",
      /* f */ "Reparatur von Haushaltsgeräten, Abholung möglich, Kostenvoranschlag vorab.",
      /* g */ "Fußpflege, Hausbesuche für Menschen mit eingeschränkter Beweglichkeit.",
      /* h */ "Schlüsseldienst, rund um die Uhr erreichbar, Türöffnung ohne Beschädigung.",
      /* i */ "Übersetzungen Deutsch und Englisch, auch beglaubigt, Bearbeitung nach Absprache.",
      /* j */ "Kinderbetreuung stundenweise am Nachmittag, erfahrene Betreuerin, feste Tage.",
      /* k */ "Fahrradkurier für Dokumente innerhalb der Stadt, Zustellung am selben Tag.",
      /* l */ "Umzugskartons zu verleihen, stabil, Lieferung und Abholung möglich.",
    ],
    [
      { key: "b", text: "Sie fahren zwei Wochen weg und Ihre Katze soll zu Hause bleiben und dort versorgt werden.", },
      { key: "d", text: "Sie brauchen kurzfristig Bewerbungsfotos und können erst nach der Arbeit kommen.", },
      { key: "h", text: "Sie haben sich abends ausgesperrt und brauchen sofort Hilfe, ohne dass die Tür beschädigt wird.", },
      { key: "a", text: "Sie haben eine Hose gekauft, die zu lang ist, und brauchen sie in dieser Woche.", },
      { key: "i", text: "Für eine Behörde brauchen Sie eine beglaubigte Übersetzung Ihres englischen Zeugnisses.", },
      { key: "x", text: "Sie suchen jemanden, der Ihnen beim Ausfüllen eines Visumantrags hilft.", },
      { key: "f", text: "Ihre Waschmaschine läuft nicht mehr ab. Sie möchten vorher wissen, was die Reparatur kostet.", },
      { key: "g", text: "Ihre Nachbarin kann kaum noch aus dem Haus und braucht regelmäßig Fußpflege.", },
      { key: "c", text: "Ihre Hecke ist zu hoch geworden und Sie schaffen das nicht mehr selbst.", },
      { key: "l", text: "Sie ziehen bald um und brauchen für zwei Wochen stabile Kartons, die geliefert werden.", },
    ]),
];

export const ITEMS: ExamItemInput[] = [...T1_ITEMS, ...T3_ITEMS];

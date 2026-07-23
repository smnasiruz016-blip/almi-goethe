// telc Deutsch B1 — Leseverstehen. Original practice items.
//
// ORIGINALITY (doctrine #1): every text and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from telc materials, Übungstests or
// Modellsätze.
//
// THREE Teile with published item counts, 5 + 5 + 10 = 20:
//   Teil 1  Texte Überschriften zuordnen        5 items
//   Teil 2  Mehrfachauswahl                     5 items
//   Teil 3  Situationen Anzeigen zuordnen      10 items
//
// The previous 16 items carried ONE invented taskType (TELC_B1_LV_MCQ) with three
// questions each. Two of the three real Teile did not exist in the bank.
//
// ── REGISTER: THIS IS NOT TESTDAF ───────────────────────────────────────────
// telc Deutsch B1 is an EVERYDAY-LANGUAGE exam. Its texts are notices, short
// articles, letters and small ads about work, housing, health and free time — not
// the academic prose of TestDaF. Authoring B1 items in an academic register would
// be teaching the wrong exam, which is precisely the failure almi-swiss shipped
// when an entire surface was written as a translation of a different exam.
//
// Teil 3 is the shape most often got wrong: the learner matches ten SITUATIONS to
// small ads, and the ad list is deliberately LONGER than the situation list, so
// some ads fit nothing. An exercise where every option is used is a different,
// easier task than the one the exam sets.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B1;
const base = {
  exam: "TELC_B1" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
};

// ── Teil 1 — Texte Überschriften zuordnen (5 items) ─────────────────────────
type T1 = { title: string; topicTag: string; texts: string[]; headings: string[]; answers: string[] };

const TEIL1: T1[] = [
  {
    title: "Aushänge im Nachbarschaftshaus",
    topicTag: "alltag",
    texts: [
      "Ab Montag ist der Aufzug wieder in Betrieb. Wir danken allen für die Geduld während der drei Wochen Reparatur.",
      "Wer Lust hat, mittwochs von 18 bis 20 Uhr gemeinsam zu kochen, meldet sich bitte im Büro. Zutaten werden geteilt.",
      "Im Keller stehen seit Wochen zwei Fahrräder ohne Schloss. Wenn sich bis zum 30. niemand meldet, geben wir sie weiter.",
      "Für den Garten suchen wir zwei Personen, die im Sommer einmal pro Woche gießen. Eine Stunde reicht.",
      "Bitte stellen Sie keine Möbel neben die Container. Die Abholung von Sperrmüll muss angemeldet werden.",
    ],
    headings: [
      "a) Reparatur beendet",
      "b) Gemeinsam kochen",
      "c) Herrenlose Fahrräder",
      "d) Hilfe im Garten gesucht",
      "e) Sperrmüll richtig entsorgen",
      "f) Neue Öffnungszeiten",
      "g) Parkplätze werden knapp",
      "h) Kurs für Anfänger",
    ],
    answers: ["a", "b", "c", "d", "e"],
  },
  {
    title: "Kurzmeldungen aus dem Stadtteilblatt",
    topicTag: "stadt",
    texts: [
      "Die Buslinie 12 fährt von Juni bis August eine andere Strecke. Grund sind Bauarbeiten in der Ringstraße.",
      "Das Freibad öffnet in diesem Jahr zwei Wochen früher. Wer vor 9 Uhr kommt, zahlt die Hälfte.",
      "Im Herbst beginnt ein Kurs für alle, die ihre Deutschkenntnisse im Beruf verbessern möchten. Vier Plätze sind noch frei.",
      "Am Samstag können alte Elektrogeräte kostenlos abgegeben werden, allerdings nur zwischen 9 und 13 Uhr.",
      "Die Sprechstunde der Stadtteilberatung fällt in der ersten Ferienwoche aus. Termine sind ab dem 20. wieder möglich.",
    ],
    headings: [
      "a) Bus fährt anders",
      "b) Früher schwimmen, weniger zahlen",
      "c) Deutsch für den Beruf",
      "d) Elektrogeräte abgeben",
      "e) Beratung fällt aus",
      "f) Neues Café eröffnet",
      "g) Führung durch die Altstadt",
      "h) Anmeldung nur online",
    ],
    answers: ["a", "b", "c", "d", "e"],
  },
  {
    title: "Informationen für neue Mitarbeitende",
    topicTag: "arbeit",
    texts: [
      "Ihre Zugangskarte erhalten Sie am ersten Tag im Empfang. Ohne sie kommen Sie nicht in das Gebäude.",
      "Mittags gibt es warmes Essen in der Kantine im Erdgeschoss. Wer etwas mitbringt, kann die Küche im dritten Stock nutzen.",
      "Urlaub beantragen Sie spätestens vier Wochen vorher über das Portal. Ihre Vorgesetzte bestätigt den Antrag.",
      "Wenn Sie krank sind, rufen Sie bitte vor 9 Uhr an. Ab dem dritten Tag brauchen wir eine Bescheinigung.",
      "Für Fahrten mit dem Zug gibt es eine Ermäßigung. Die Anträge liegen in der Personalabteilung aus.",
    ],
    headings: [
      "a) Zugang zum Gebäude",
      "b) Essen und Pausen",
      "c) Urlaub beantragen",
      "d) Was tun bei Krankheit",
      "e) Ermäßigung für Bahnfahrten",
      "f) Parken auf dem Gelände",
      "g) Kleidung am Arbeitsplatz",
      "h) Fortbildung im Ausland",
    ],
    answers: ["a", "b", "c", "d", "e"],
  },
  {
    title: "Hinweise in einer Arztpraxis",
    topicTag: "gesundheit",
    texts: [
      "Bringen Sie zu jedem Termin Ihre Versichertenkarte mit. Ohne Karte können wir Sie leider nicht behandeln.",
      "Wenn Sie einen Termin nicht wahrnehmen können, sagen Sie bitte mindestens 24 Stunden vorher ab.",
      "Rezepte für Medikamente, die Sie regelmäßig nehmen, können Sie telefonisch bestellen und am nächsten Tag abholen.",
      "Im Wartezimmer bitten wir Sie, leise zu sprechen und nicht zu telefonieren. Andere Patienten fühlen sich sonst gestört.",
      "In den Sommerferien ist die Praxis vom 5. bis 19. August geschlossen. Die Vertretung finden Sie an der Tür.",
    ],
    headings: [
      "a) Karte nicht vergessen",
      "b) Termine rechtzeitig absagen",
      "c) Rezepte telefonisch bestellen",
      "d) Rücksicht im Wartezimmer",
      "e) Praxis im August geschlossen",
      "f) Neue Ärztin stellt sich vor",
      "g) Impfungen für Kinder",
      "h) Kosten für Zusatzleistungen",
    ],
    answers: ["a", "b", "c", "d", "e"],
  },
  {
    title: "Regeln im Wohnheim",
    topicTag: "wohnen",
    texts: [
      "Zwischen 22 und 7 Uhr sowie sonntags gilt Ruhezeit. Musik und laute Gespräche bitte in dieser Zeit vermeiden.",
      "Die Waschmaschinen im Untergeschoss werden über die Karte bezahlt. Aufladen können Sie an dem Automaten daneben.",
      "Besuch darf höchstens drei Nächte hintereinander bleiben. Längere Aufenthalte melden Sie bitte der Verwaltung.",
      "Jedes Zimmer wird beim Auszug geprüft. Löcher in der Wand müssen vorher geschlossen werden.",
      "Fahrräder gehören in den Fahrradkeller. Im Treppenhaus dürfen sie aus Sicherheitsgründen nicht stehen.",
    ],
    headings: [
      "a) Ruhezeiten einhalten",
      "b) Waschen und bezahlen",
      "c) Regeln für Besuch",
      "d) Zustand beim Auszug",
      "e) Wohin mit dem Fahrrad",
      "f) Internet einrichten",
      "g) Müll richtig trennen",
      "h) Küche gemeinsam nutzen",
    ],
    answers: ["a", "b", "c", "d", "e"],
  },
];

const teil1Items: ExamItemInput[] = TEIL1.map((t) => ({
  ...base,
  taskType: "TELC_B1_LV_UEBERSCHRIFTEN",
  title: t.title,
  prompt: "Lesen Sie die fünf Texte und ordnen Sie jedem Text die passende Überschrift zu.",
  topicTag: t.topicTag,
  timeLimitSeconds: 480,
  payload: {
    instructions:
      "Zu jedem Text passt genau eine Überschrift. Es gibt mehr Überschriften als Texte — drei bleiben übrig.",
    passage: t.texts.map((x, i) => `Text ${i + 1}\n${x}`).join("\n\n") + "\n\nÜberschriften:\n" + t.headings.join("\n"),
    questions: t.texts.map((_, i) => ({
      id: `t${i + 1}`,
      stem: `Text ${i + 1}`,
      options: t.headings.map((h) => ({ id: h.slice(0, 1), text: h.slice(3) })),
      answer: t.answers[i],
    })),
  },
}));

// ── Teil 2 — Mehrfachauswahl (5 items) ──────────────────────────────────────
type T2 = { title: string; topicTag: string; passage: string; qs: { stem: string; opts: string[]; answer: string }[] };

const TEIL2: T2[] = [
  {
    title: "Ein Nebenjob im Supermarkt",
    topicTag: "arbeit",
    passage:
      "Seit einem halben Jahr arbeitet Kerim samstags in einem Supermarkt. Er räumt Regale ein und hilft an der Kasse, wenn viel los ist. Angefangen hat er, weil er sich ein gebrauchtes Auto kaufen wollte. Inzwischen sagt er, das Geld sei nicht mehr der wichtigste Grund: Er habe gelernt, mit unfreundlichen Kunden ruhig zu bleiben, und das helfe ihm auch sonst. Anstrengend findet er vor allem, dass er samstags früh aufstehen muss, während seine Freunde ausschlafen. Trotzdem will er weitermachen, mindestens bis zum Sommer. Seine Chefin hat ihm angeboten, ihn nach der Schule fest anzustellen. Kerim hat noch nicht zugesagt, weil er lieber eine Ausbildung machen möchte.",
    qs: [
      {
        stem: "Warum hat Kerim mit dem Job angefangen?",
        opts: ["Er wollte ein Auto kaufen.", "Seine Eltern haben es verlangt.", "Er hatte samstags Langeweile."],
        answer: "a",
      },
      {
        stem: "Was ist für ihn heute der wichtigste Gewinn?",
        opts: ["das Geld", "was er über den Umgang mit Menschen gelernt hat", "die freien Sonntage"],
        answer: "b",
      },
      {
        stem: "Was findet Kerim besonders anstrengend?",
        opts: ["die Arbeit an der Kasse", "das frühe Aufstehen am Samstag", "das Einräumen der Regale"],
        answer: "b",
      },
      {
        stem: "Was hat seine Chefin ihm angeboten?",
        opts: ["eine feste Stelle nach der Schule", "mehr Stunden pro Woche", "eine Ausbildung im Supermarkt"],
        answer: "a",
      },
      {
        stem: "Warum hat Kerim noch nicht zugesagt?",
        opts: ["Er möchte lieber eine Ausbildung machen.", "Der Lohn ist ihm zu niedrig.", "Er zieht bald um."],
        answer: "a",
      },
    ],
  },
  {
    title: "Umzug aufs Land",
    topicTag: "wohnen",
    passage:
      "Familie Novak hat die Stadt vor zwei Jahren verlassen und wohnt jetzt in einem Dorf, dreißig Kilometer entfernt. Der Grund war die Miete: Für dasselbe Geld haben sie nun doppelt so viel Platz und einen kleinen Garten. Herr Novak fährt weiterhin in die Stadt zur Arbeit, allerdings nicht mehr mit dem Auto, sondern mit dem Zug, der stündlich fährt. Frau Novak arbeitet seit dem Umzug drei Tage pro Woche von zu Hause. Am Anfang haben die Kinder ihre Freunde vermisst, inzwischen haben sie im Sportverein neue gefunden. Was der Familie fehlt, ist das Kino; das nächste ist zwanzig Minuten mit dem Auto entfernt. Zurückziehen möchte trotzdem niemand.",
    qs: [
      {
        stem: "Warum ist die Familie umgezogen?",
        opts: ["wegen der Arbeit", "wegen der Miete", "wegen der Schule"],
        answer: "b",
      },
      {
        stem: "Wie kommt Herr Novak zur Arbeit?",
        opts: ["mit dem Auto", "mit dem Zug", "mit dem Fahrrad"],
        answer: "b",
      },
      {
        stem: "Was hat sich für Frau Novak geändert?",
        opts: ["Sie arbeitet teilweise zu Hause.", "Sie hat die Stelle gewechselt.", "Sie arbeitet nicht mehr."],
        answer: "a",
      },
      {
        stem: "Wie ging es den Kindern nach dem Umzug?",
        opts: [
          "Sie hatten sofort neue Freunde.",
          "Sie haben ihre Freunde zuerst vermisst.",
          "Sie wollten nicht in den Sportverein.",
        ],
        answer: "b",
      },
      {
        stem: "Was vermisst die Familie?",
        opts: ["ein Kino in der Nähe", "einen größeren Garten", "eine Busverbindung"],
        answer: "a",
      },
    ],
  },
  {
    title: "Ein Kurs für pflegende Angehörige",
    topicTag: "gesundheit",
    passage:
      "Viele Menschen pflegen einen Angehörigen zu Hause, ohne dafür ausgebildet zu sein. Ein Kurs an der Volkshochschule richtet sich genau an diese Gruppe. An sechs Abenden geht es darum, wie man jemanden richtig hebt, ohne den eigenen Rücken zu belasten, welche Hilfsmittel es gibt und wo man finanzielle Unterstützung beantragen kann. Die Leiterin ist Krankenschwester und betont, dass der wichtigste Teil das Gespräch untereinander sei: Viele Teilnehmende merkten erst dort, dass sie mit ihren Schwierigkeiten nicht allein sind. Der Kurs ist kostenlos, die Zahl der Plätze aber begrenzt. Wer teilnehmen möchte, meldet sich telefonisch an; eine Anmeldung im Internet ist nicht möglich.",
    qs: [
      {
        stem: "An wen richtet sich der Kurs?",
        opts: [
          "an ausgebildete Pflegekräfte",
          "an Menschen, die Angehörige zu Hause pflegen",
          "an Ärztinnen und Ärzte",
        ],
        answer: "b",
      },
      {
        stem: "Wie lange dauert der Kurs?",
        opts: ["sechs Abende", "sechs Wochenenden", "sechs Monate"],
        answer: "a",
      },
      {
        stem: "Was hält die Leiterin für den wichtigsten Teil?",
        opts: ["die praktischen Übungen", "das Gespräch der Teilnehmenden untereinander", "die Informationen über Geld"],
        answer: "b",
      },
      {
        stem: "Was kostet die Teilnahme?",
        opts: ["nichts", "einen kleinen Beitrag", "das hängt vom Einkommen ab"],
        answer: "a",
      },
      {
        stem: "Wie meldet man sich an?",
        opts: ["im Internet", "telefonisch", "persönlich vor Ort"],
        answer: "b",
      },
    ],
  },
  {
    title: "Das Repariercafé im Stadtteil",
    topicTag: "gesellschaft",
    passage:
      "Einmal im Monat treffen sich in einem Stadtteilzentrum Menschen, die defekte Geräte mitbringen, und andere, die beim Reparieren helfen. Toaster, Lampen und Fahrräder sind am häufigsten. Repariert wird nicht für die Leute, sondern mit ihnen — wer kommt, soll zusehen und mitmachen, damit er es beim nächsten Mal selbst kann. Etwa zwei von drei Geräten werden wieder funktionsfähig. Bezahlt wird nichts; wer möchte, gibt etwas in eine Kasse, aus der Werkzeug gekauft wird. Die Organisatorin sagt, das eigentliche Ziel sei nicht das Sparen: Es gehe darum, dass Dinge nicht selbstverständlich weggeworfen werden. Angemeldet werden muss man nicht, allerdings sollte man Zeit mitbringen, weil es voll wird.",
    qs: [
      {
        stem: "Was passiert bei dem Treffen?",
        opts: [
          "Geräte werden für die Besucher repariert.",
          "Geräte werden gemeinsam mit den Besuchern repariert.",
          "Geräte werden verkauft.",
        ],
        answer: "b",
      },
      {
        stem: "Wie viele Geräte werden ungefähr wieder funktionsfähig?",
        opts: ["etwa jedes dritte", "etwa zwei von drei", "fast alle"],
        answer: "b",
      },
      {
        stem: "Wie wird die Arbeit bezahlt?",
        opts: ["gar nicht, es gibt nur eine freiwillige Kasse", "nach Aufwand", "mit einem festen Betrag pro Gerät"],
        answer: "a",
      },
      {
        stem: "Was ist laut der Organisatorin das eigentliche Ziel?",
        opts: ["Geld zu sparen", "dass Dinge nicht selbstverständlich weggeworfen werden", "neue Leute kennenzulernen"],
        answer: "b",
      },
      {
        stem: "Was sollte man mitbringen?",
        opts: ["eine Anmeldung", "Zeit", "eigenes Werkzeug"],
        answer: "b",
      },
    ],
  },
  {
    title: "Fahrradfahren im Winter",
    topicTag: "verkehr",
    passage:
      "Dass im Winter weniger Menschen Fahrrad fahren, liegt weniger an der Kälte als an der Dunkelheit und am Zustand der Wege. Das zeigt eine Befragung in mehreren Städten. Wer trotzdem fährt, nennt vor allem einen Grund: Es ist die zuverlässigste Art, pünktlich anzukommen. Wichtig sind gute Beleuchtung und Handschuhe; dicke Jacken dagegen werden oft als Fehler bezeichnet, weil man beim Fahren schnell schwitzt. Mehrere Städte räumen inzwischen ausgewählte Radwege vor den Straßen, was die Zahl der Winterfahrten deutlich erhöht hat. Fachleute empfehlen, im Winter mehr Zeit einzuplanen und langsamer zu fahren, besonders auf Wegen, die morgens noch gefroren sind.",
    qs: [
      {
        stem: "Woran liegt es vor allem, dass im Winter weniger Rad gefahren wird?",
        opts: ["an der Kälte", "an der Dunkelheit und dem Zustand der Wege", "an fehlenden Fahrrädern"],
        answer: "b",
      },
      {
        stem: "Welchen Grund nennen Winterfahrer am häufigsten?",
        opts: ["Sie kommen zuverlässig pünktlich an.", "Es ist billiger.", "Es macht mehr Spaß als im Sommer."],
        answer: "a",
      },
      {
        stem: "Warum wird von dicken Jacken abgeraten?",
        opts: ["Sie sind zu teuer.", "Man schwitzt beim Fahren schnell.", "Sie behindern die Sicht."],
        answer: "b",
      },
      {
        stem: "Was haben mehrere Städte verändert?",
        opts: [
          "Sie räumen ausgewählte Radwege vor den Straßen.",
          "Sie haben neue Radwege gebaut.",
          "Sie verleihen Winterreifen.",
        ],
        answer: "a",
      },
      {
        stem: "Was empfehlen Fachleute?",
        opts: ["schneller zu fahren", "mehr Zeit einzuplanen und langsamer zu fahren", "im Winter ganz zu verzichten"],
        answer: "b",
      },
    ],
  },
];

const teil2Items: ExamItemInput[] = TEIL2.map((t) => ({
  ...base,
  taskType: "TELC_B1_LV_MC",
  title: t.title,
  prompt: "Lesen Sie den Text und beantworten Sie die fünf Fragen.",
  topicTag: t.topicTag,
  timeLimitSeconds: 480,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
    passage: t.passage,
    questions: t.qs.map((q, i) => ({
      id: `q${i + 1}`,
      stem: q.stem,
      options: [
        { id: "a", text: q.opts[0] },
        { id: "b", text: q.opts[1] },
        { id: "c", text: q.opts[2] },
      ],
      answer: q.answer,
    })),
  },
}));

// ── Teil 3 — Situationen Anzeigen zuordnen (10 items) ───────────────────────
// Twelve ads for ten situations: two fit nothing. An exercise in which every
// option is used is an easier, different task from the one the exam sets.
type T3 = { title: string; topicTag: string; ads: string[]; situations: string[]; answers: string[] };

const TEIL3: T3[] = [
  {
    title: "Kleinanzeigen: Kurse und Freizeit",
    topicTag: "freizeit",
    ads: [
      "a) Gitarrenunterricht für Anfänger, auch abends, erste Stunde kostenlos.",
      "b) Schwimmkurs für Erwachsene, die noch nie geschwommen sind. Kleine Gruppen.",
      "c) Laufgruppe trifft sich sonntags um 8 Uhr im Park. Alle Tempi willkommen.",
      "d) Nähmaschine gegen Abholung abzugeben, funktioniert einwandfrei.",
      "e) Kochkurs: einfache Gerichte für wenig Geld, mittwochs.",
      "f) Wir suchen Mitspielerinnen für unser Volleyballteam, Training dienstags.",
      "g) Fotokurs am Wochenende, eigene Kamera erforderlich.",
      "h) Hundebetreuung an Werktagen, auch kurzfristig.",
      "i) Deutsch-Konversation im Café, jeden Donnerstag, ohne Anmeldung.",
      "j) Yoga für den Rücken, dienstags und freitags, 18 Uhr.",
      "k) Gebrauchtes Fahrrad, 26 Zoll, mit neuen Reifen.",
      "l) Schachclub sucht neue Mitglieder, Anfänger willkommen.",
    ],
    situations: [
      "Sie möchten ein Instrument lernen und haben nur abends Zeit.",
      "Ihre Nachbarin kann nicht schwimmen und möchte es als Erwachsene lernen.",
      "Sie laufen gern, aber ungern allein, und sind sonntags früh wach.",
      "Sie wollen lernen, günstig zu kochen.",
      "Sie suchen ein Team, um in der Woche Sport zu treiben.",
      "Sie möchten besser fotografieren und besitzen bereits eine Kamera.",
      "Sie fahren eine Woche weg und brauchen jemanden für Ihren Hund.",
      "Sie möchten Ihr Deutsch im Gespräch üben, ohne sich anzumelden.",
      "Sie haben Rückenschmerzen und suchen ein sanftes Training.",
      "Sie spielen gern Schach und suchen Anschluss, sind aber nicht geübt.",
    ],
    answers: ["a", "b", "c", "e", "f", "g", "h", "i", "j", "l"],
  },
  {
    title: "Kleinanzeigen: Wohnen und Haushalt",
    topicTag: "wohnen",
    ads: [
      "a) Zimmer in Wohngemeinschaft frei, ab sofort, Nähe Hauptbahnhof.",
      "b) Umzugshelfer gesucht, Samstagvormittag, Bezahlung nach Stunden.",
      "c) Wir reparieren Waschmaschinen aller Art, auch am Wochenende.",
      "d) Schreibtisch und Stuhl kostenlos abzugeben, nur Selbstabholung.",
      "e) Suche Garage oder Stellplatz zur Miete im Stadtteil Nord.",
      "f) Reinigungskraft für Treppenhaus gesucht, zweimal pro Woche.",
      "g) Kleiner Garten zu verpachten, Wasseranschluss vorhanden.",
      "h) Handwerker montiert Regale und Lampen, kurzfristige Termine.",
      "i) Zwei Katzen suchen ein neues Zuhause, nur zusammen.",
      "j) Möblierte Wohnung für drei Monate zu vermieten, ab Juli.",
      "k) Fahrradanhänger zu verkaufen, wenig benutzt.",
      "l) Nachhilfe in Mathematik für die 8. Klasse.",
    ],
    situations: [
      "Sie ziehen in die Stadt und suchen ein günstiges Zimmer mit anderen zusammen.",
      "Sie brauchen am Samstag Hilfe beim Tragen von Möbeln.",
      "Ihre Waschmaschine ist kaputt und Sie haben nur samstags Zeit.",
      "Sie richten ein Arbeitszimmer ein und haben wenig Geld.",
      "Sie suchen einen Platz für Ihr Auto in Ihrem Viertel.",
      "Sie möchten im Sommer Gemüse anbauen.",
      "Sie können keine Löcher bohren und brauchen jemanden für ein Regal.",
      "Sie kommen für ein Praktikum von Juli bis September in die Stadt.",
      "Ihr Kind hat Schwierigkeiten in Mathematik.",
      "Sie möchten zwei Tiere aufnehmen, die zusammenbleiben sollen.",
    ],
    answers: ["a", "b", "c", "d", "e", "g", "h", "j", "l", "i"],
  },
  {
    title: "Kleinanzeigen: Arbeit und Ausbildung",
    topicTag: "arbeit",
    ads: [
      "a) Café sucht Aushilfe für das Wochenende, Erfahrung nicht nötig.",
      "b) Bewerbungstraining: Wir lesen Ihre Unterlagen und üben das Gespräch.",
      "c) Lieferdienst sucht Fahrerinnen und Fahrer mit eigenem Fahrrad.",
      "d) Ausbildungsplatz als Elektroniker ab September frei.",
      "e) Übersetzungen Deutsch–Türkisch, auch beglaubigt.",
      "f) Büro sucht Unterstützung für zehn Stunden pro Woche, vormittags.",
      "g) Kurs: Grundlagen am Computer für Menschen ohne Vorkenntnisse.",
      "h) Ferienjob in der Gärtnerei, Juli und August.",
      "i) Sprachkurs Deutsch B2, abends, Beginn im Oktober.",
      "j) Wir suchen eine Pflegehilfskraft, Schichtdienst, Führerschein nötig.",
      "k) Verkaufe Werkzeugkoffer, komplett.",
      "l) Nachtschicht im Lager, gute Bezahlung, ab sofort.",
    ],
    situations: [
      "Sie suchen eine Arbeit, die nur samstags und sonntags stattfindet.",
      "Sie möchten Hilfe bei Ihrer Bewerbung und beim Vorstellungsgespräch.",
      "Sie haben ein Fahrrad und wollen damit Geld verdienen.",
      "Sie haben die Schule beendet und suchen eine Ausbildung im technischen Bereich.",
      "Sie brauchen ein amtlich anerkanntes Dokument auf Deutsch.",
      "Sie können nur vormittags arbeiten, wenn Ihr Kind im Kindergarten ist.",
      "Sie haben noch nie mit einem Computer gearbeitet und möchten es lernen.",
      "Sie suchen eine Arbeit nur für die Sommerferien.",
      "Sie möchten Ihr Deutsch auf ein höheres Niveau bringen und sind tagsüber beschäftigt.",
      "Sie arbeiten lieber nachts und brauchen sofort eine Stelle.",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"],
  },
  {
    title: "Kleinanzeigen: Gesundheit und Beratung",
    topicTag: "gesundheit",
    ads: [
      "a) Zahnarztpraxis nimmt neue Patienten auf, auch Termine am Abend.",
      "b) Beratung zu Miete und Nebenkosten, kostenlos, dienstags 14–17 Uhr.",
      "c) Rückenkurs für Menschen, die viel sitzen, zehn Termine.",
      "d) Ernährungsberatung für Familien mit kleinem Budget.",
      "e) Selbsthilfegruppe für Angehörige, monatlich, ohne Anmeldung.",
      "f) Physiotherapie mit Hausbesuch für Menschen, die nicht mobil sind.",
      "g) Erste-Hilfe-Kurs am Samstag, auch für den Führerschein anerkannt.",
      "h) Kinderarztpraxis: Impftermine online buchbar.",
      "i) Schuldnerberatung, Termine nach Vereinbarung.",
      "j) Sehtest kostenlos, ohne Voranmeldung.",
      "k) Verkaufe Rollator, wenig benutzt.",
      "l) Kurs zur Rauchentwöhnung, Beginn im November.",
    ],
    situations: [
      "Sie arbeiten bis 17 Uhr und brauchen einen Zahnarzttermin.",
      "Ihr Vermieter hat die Nebenkosten erhöht und Sie verstehen die Abrechnung nicht.",
      "Sie sitzen den ganzen Tag am Schreibtisch und haben Rückenprobleme.",
      "Sie möchten für Ihre Familie gesünder kochen, haben aber wenig Geld.",
      "Sie pflegen Ihre Mutter und möchten sich mit anderen austauschen.",
      "Ihre Großmutter kann die Wohnung nicht verlassen und braucht Behandlung.",
      "Sie machen den Führerschein und brauchen den vorgeschriebenen Kurs.",
      "Sie haben Geldprobleme und wissen nicht, wie Sie Ihre Rechnungen zahlen sollen.",
      "Sie glauben, schlechter zu sehen als früher, und wollen es prüfen lassen.",
      "Sie möchten mit dem Rauchen aufhören.",
    ],
    answers: ["a", "b", "c", "d", "e", "f", "g", "i", "j", "l"],
  },
  {
    title: "Kleinanzeigen: Unterwegs in der Stadt",
    topicTag: "verkehr",
    ads: [
      "a) Fahrradwerkstatt: Reparatur meist am selben Tag fertig.",
      "b) Mitfahrgelegenheit freitags nach Hamburg, Kosten werden geteilt.",
      "c) Fahrschule: Intensivkurs in den Ferien, Theorie und Praxis.",
      "d) Monatskarte abzugeben, gültig bis Ende des Monats.",
      "e) Stadtführung zu Fuß, jeden ersten Sonntag, Treffpunkt Marktplatz.",
      "f) Autoreparatur, freie Werkstatt, günstige Preise.",
      "g) Kinderfahrrad 20 Zoll zu verkaufen.",
      "h) Taxiunternehmen sucht Fahrerinnen und Fahrer.",
      "i) Fahrradkurs für Erwachsene, die nicht Rad fahren können.",
      "j) Parkplatz im Hof zu vermieten, Nähe Zentrum.",
      "k) Wir bringen Ihre Möbel: Transport mit kleinem LKW.",
      "l) Gepäckaufbewahrung am Bahnhof, täglich geöffnet.",
    ],
    situations: [
      "Ihr Fahrrad hat einen Platten und Sie brauchen es morgen wieder.",
      "Sie wollen am Freitag nach Hamburg und haben kein Auto.",
      "Sie möchten den Führerschein schnell in den Ferien machen.",
      "Sie kennen die Stadt noch nicht und möchten sie zu Fuß kennenlernen.",
      "Ihr Auto macht Geräusche und Sie möchten nicht viel bezahlen.",
      "Sie sind erwachsen und haben nie Rad fahren gelernt.",
      "Sie suchen einen festen Stellplatz für Ihr Auto in der Nähe des Zentrums.",
      "Sie ziehen um und müssen einen Schrank transportieren.",
      "Sie haben vier Stunden Aufenthalt und möchten Ihren Koffer nicht tragen.",
      "Sie fahren diesen Monat nicht mehr und wollen Ihre Karte weitergeben.",
    ],
    answers: ["a", "b", "c", "e", "f", "i", "j", "k", "l", "d"],
  },
];

const teil3Items: ExamItemInput[] = TEIL3.map((t) => ({
  ...base,
  taskType: "TELC_B1_LV_ANZEIGEN",
  title: t.title,
  prompt: "Ordnen Sie jeder Situation die passende Anzeige zu.",
  topicTag: t.topicTag,
  timeLimitSeconds: 600,
  payload: {
    instructions:
      "Zu jeder Situation passt genau eine Anzeige. Es gibt zwölf Anzeigen und zehn Situationen — zwei Anzeigen passen zu keiner Situation.",
    passage: "Anzeigen:\n" + t.ads.join("\n"),
    questions: t.situations.map((s, i) => ({
      id: `s${i + 1}`,
      stem: `${i + 1}. ${s}`,
      options: t.ads.map((a) => ({ id: a.slice(0, 1), text: a.slice(3) })),
      answer: t.answers[i],
    })),
  },
}));

import { deGame } from "./_permute";

// Teil 2 (TELC_B1_LV_MC) was authored with option "c" never correct. Permute its
// options deterministically so all three positions are used. See ./_permute.ts.
export const ITEMS: ExamItemInput[] = deGame(
  [...teil1Items, ...teil2Items, ...teil3Items],
  { permuteMC: new Set(["TELC_B1_LV_MC"]) },
);

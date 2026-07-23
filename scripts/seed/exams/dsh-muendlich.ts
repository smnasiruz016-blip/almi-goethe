// DSH — Deutsche Sprachprüfung für den Hochschulzugang (B2–C2), Mündliche Prüfung.
// Original practice items.
//
// ORIGINALITY (doctrine #1): every text extract, quotation, described graphic,
// thesis and instruction below is ORIGINAL to AlmiGoethe — never copied or derived
// from any DSH Modellprüfung, past paper, university Prüfungsordnung or Übungssatz.
// Same IP rule as the sibling files.
//
// ── THE DSH ORAL, AS PRACTISED HERE ─────────────────────────────────────────
// The DSH mündliche Prüfung gives the candidate ~20 minutes of preparation. They
// then work with a short academic stimulus — a text passage, a quotation, or a
// described graphic — SUMMARISE it, PRESENT their own position, and finally DEFEND
// that position in a discussion with the examiners. Register is ACADEMIC and uses
// the formal "Sie": the candidate addresses a Prüfungskommission, not a peer.
//
// Two task-types (both productive, no answer keys):
//   DSH_SP_PRAESENTATION (8) — a short academic text/quote or a described graphic
//     sits in `situation`; the candidate SUMMARISES it and PRESENTS a position.
//     prepSeconds:1200, speakSeconds:420.
//   DSH_SP_DISKUSSION (7)   — an academic/societal thesis to react to and
//     defend or challenge with arguments; framed so it can be rehearsed solo.
//     prepSeconds:300, speakSeconds:300.
//
// ── HOW THE DISCUSSION IS PRACTISED SOLO ────────────────────────────────────
// In the real exam the discussion is a dialogue with the commission. This product
// practises it solo, so each DISKUSSION item frames BOTH sides: the candidate
// argues their own position AND is told which counter-arguments the commission
// would raise, so they rehearse anticipating and rebutting objections. The
// productive grader reads { situation, instruction, prepSeconds, speakSeconds } and
// scores "task fulfilled, position argued, register academic" — so the points to
// cover live in the instruction prose, never in a structured field the schema
// would silently strip.
//
// ── NO ANSWER KEYS HERE ─────────────────────────────────────────────────────
// Speaking items are productive: there is nothing to permute and no answer-key
// distribution to measure. The type-aware distribution gate does not apply here.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.DSH;
const base = { exam: "DSH" as const, level: L, section: SECTION.SPRECHEN, difficulty: "CORE" as const };

// ── Präsentation (8 items) ──────────────────────────────────────────────────
// Read the stimulus in `situation`, summarise it, then present a reasoned own
// position. 20 min prep, ~7 min speaking.
const praesentationItems: ExamItemInput[] = [
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Digitalisierung der Hochschullehre",
    prompt: "Fassen Sie den Text zusammen und nehmen Sie anschließend Stellung.",
    topicTag: "hochschule",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Lesen Sie den folgenden kurzen Sachtext:\n\n" +
        "„Seit der Pandemie hat sich die Online-Lehre an vielen Universitäten fest etabliert. Befürworter betonen die zeitliche und räumliche Flexibilität: Aufzeichnungen lassen sich beliebig oft ansehen, und auch Berufstätige oder Studierende mit Betreuungspflichten können teilnehmen. Kritiker verweisen dagegen auf sinkende Beteiligung, eine schwächere Bindung an die Hochschule und den Wegfall des informellen Austauschs zwischen Studierenden. Empirische Untersuchungen zeichnen ein gemischtes Bild: Die Prüfungsergebnisse bleiben weitgehend stabil, doch das Zugehörigkeitsgefühl und die Studienzufriedenheit nehmen in rein digitalen Formaten messbar ab.“",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Fassen Sie die zentralen Aussagen des Textes sachlich und in eigenen Worten zusammen.\n" +
        "2. Stellen Sie die genannten Vor- und Nachteile der digitalen Lehre einander gegenüber.\n" +
        "3. Beziehen Sie begründet Stellung: Welche Rolle sollte die Online-Lehre Ihrer Meinung nach künftig an Hochschulen spielen?\n\n" +
        "Sprechen Sie in gehobener, akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission. Strukturieren Sie Ihren Vortrag erkennbar (Einleitung, Hauptteil, Schluss).",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Trennen Sie deutlich zwischen Wiedergabe („Der Text stellt dar, dass …“) und eigener Wertung („Ich halte es für sinnvoll, dass …“). Belegen Sie Ihre Position mit mindestens zwei Argumenten.",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Studieren im Ausland",
    prompt: "Fassen Sie den Text zusammen und nehmen Sie anschließend Stellung.",
    topicTag: "studium",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Lesen Sie den folgenden kurzen Sachtext:\n\n" +
        "„Ein Studienaufenthalt im Ausland gilt vielen als Königsweg zu interkultureller Kompetenz und besseren Berufschancen. Tatsächlich berichten zahlreiche Absolventinnen und Absolventen von gewachsener Selbstständigkeit und einem erweiterten fachlichen Blick. Zugleich ist der Zugang ungleich verteilt: Wer über finanzielle Rücklagen und familiäre Unterstützung verfügt, geht deutlich häufiger ins Ausland als Studierende aus einkommensschwachen Haushalten. Zudem verlängert ein Auslandssemester nicht selten die Studiendauer, wenn erbrachte Leistungen an der Heimathochschule nur teilweise anerkannt werden.“",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Geben Sie die Kernaussagen des Textes sachlich und in eigenen Worten wieder.\n" +
        "2. Erläutern Sie den im Text angedeuteten Widerspruch zwischen dem Nutzen und der ungleichen Zugänglichkeit von Auslandsaufenthalten.\n" +
        "3. Nehmen Sie begründet Stellung: Wie könnten Hochschulen dafür sorgen, dass mehr Studierende von einem Auslandsaufenthalt profitieren?\n\n" +
        "Sprechen Sie in akademischer Sprache und richten Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Nutzen Sie Konnektoren des Gegensatzes und der Einschränkung („zwar … jedoch“, „einerseits … andererseits“, „gleichwohl“). Formulieren Sie beim dritten Punkt konkrete, umsetzbare Vorschläge.",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Grafik zur Entwicklung der Studierendenzahlen",
    prompt: "Beschreiben Sie die Grafik, fassen Sie sie zusammen und nehmen Sie Stellung.",
    topicTag: "hochschule",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Ihnen liegt eine Grafik vor, die wie folgt beschrieben ist:\n\n" +
        "Ein Liniendiagramm zeigt die Zahl der Studienanfängerinnen und Studienanfänger an den Hochschulen eines Landes über zwanzig Jahre hinweg. Zwischen dem ersten und dem zwölften Jahr steigt die Kurve nahezu stetig von rund 300.000 auf etwa 510.000 an. Danach flacht die Entwicklung ab, und in den letzten drei Jahren ist ein leichter Rückgang auf etwa 490.000 zu erkennen. Eine zweite Linie zeigt den Anteil der Studienanfänger in den sogenannten MINT-Fächern; dieser Anteil wächst über den gesamten Zeitraum langsam, aber kontinuierlich von 32 auf 41 Prozent.",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Beschreiben Sie die dargestellte Entwicklung präzise und mit den passenden Zahlenangaben.\n" +
        "2. Fassen Sie die auffälligsten Tendenzen zusammen und benennen Sie mögliche Gründe für den jüngsten Rückgang.\n" +
        "3. Nehmen Sie begründet Stellung: Ist der wachsende Anteil der MINT-Fächer eine wünschenswerte Entwicklung?\n\n" +
        "Verwenden Sie präzise Wendungen der Grafikbeschreibung („die Kurve steigt an“, „der Anteil nimmt kontinuierlich zu“, „im Vergleich dazu“) und sprechen Sie in akademischer Sprache. Wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Beschreiben Sie zuerst neutral, was die Grafik zeigt, und deuten Sie erst danach. Unterscheiden Sie klar zwischen absoluten Zahlen (Studienanfänger) und relativen Angaben (Prozentanteil der MINT-Fächer).",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Wissenschaft und Öffentlichkeit",
    prompt: "Fassen Sie den Text zusammen und nehmen Sie anschließend Stellung.",
    topicTag: "wissenschaft",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Lesen Sie den folgenden kurzen Sachtext:\n\n" +
        "„Die Frage, wie Forschungsergebnisse die Öffentlichkeit erreichen, hat in den letzten Jahren an Bedeutung gewonnen. Wissenschaftskommunikation soll komplexe Erkenntnisse verständlich machen, ohne sie unzulässig zu vereinfachen. Das gelingt nicht immer: Verkürzte Schlagzeilen wecken bisweilen falsche Erwartungen, und vorläufige Befunde werden gelegentlich als gesicherte Wahrheiten dargestellt. Fachleute fordern deshalb, Unsicherheiten offen zu benennen. Kritiker warnen jedoch davor, dass ein zu betontes Eingeständnis von Unsicherheit das Vertrauen in die Wissenschaft schwächen könnte.“",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Fassen Sie die Kernaussagen des Textes sachlich und in eigenen Worten zusammen.\n" +
        "2. Erläutern Sie das Spannungsverhältnis zwischen der Verständlichkeit und der wissenschaftlichen Genauigkeit von Forschungsergebnissen.\n" +
        "3. Nehmen Sie begründet Stellung: Sollten Wissenschaftlerinnen und Wissenschaftler Unsicherheiten in der Öffentlichkeit offen ansprechen?\n\n" +
        "Sprechen Sie in akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Achten Sie auf präzise Verben der Redewiedergabe („der Text betont“, „die Kritiker geben zu bedenken“). Beziehen Sie beim dritten Punkt eine klare Position und entkräften Sie den wichtigsten Gegeneinwand.",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Zitat zum lebenslangen Lernen",
    prompt: "Deuten Sie das Zitat, ordnen Sie es ein und nehmen Sie Stellung.",
    topicTag: "bildung",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Ihnen liegt das folgende Zitat vor, das einer bildungswissenschaftlichen Diskussion entstammt:\n\n" +
        "„Bildung ist nicht mehr ein Abschnitt des Lebens, sondern seine dauerhafte Begleiterin. Wer heute lernt, lernt nicht für eine Prüfung, sondern für einen Wandel, dessen Richtung niemand kennt.“",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Erläutern Sie in eigenen Worten, welche Aussage das Zitat über Bildung trifft.\n" +
        "2. Ordnen Sie den Gedanken in die aktuelle Debatte über lebenslanges Lernen und den raschen beruflichen Wandel ein.\n" +
        "3. Nehmen Sie begründet Stellung: Teilen Sie die Auffassung, dass Lernen heute vor allem der Vorbereitung auf einen ungewissen Wandel dient?\n\n" +
        "Sprechen Sie in akademischer Sprache und richten Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Deuten Sie das Bild von der „Begleiterin“ ausdrücklich, bevor Sie werten. Belegen Sie Ihre Stellungnahme mit einem Beispiel aus Studium oder Berufswelt.",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Nachhaltigkeit auf dem Campus",
    prompt: "Fassen Sie den Text zusammen und nehmen Sie anschließend Stellung.",
    topicTag: "umwelt",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Lesen Sie den folgenden kurzen Sachtext:\n\n" +
        "„Immer mehr Hochschulen verpflichten sich, klimaneutral zu werden. Die Maßnahmen reichen von der energetischen Sanierung der Gebäude über vegetarische Angebote in den Mensen bis zur Förderung von Dienstreisen mit der Bahn statt mit dem Flugzeug. Manche Universitäten verankern Nachhaltigkeit sogar verbindlich in den Studienplänen. Fachleute betonen, dass Hochschulen als Orte des Wissens eine Vorbildfunktion hätten. Andere geben zu bedenken, dass strenge Vorgaben die internationale Zusammenarbeit und die Forschungsfreiheit einschränken könnten.“",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Fassen Sie die im Text genannten Maßnahmen und Standpunkte sachlich zusammen.\n" +
        "2. Wägen Sie die Vorbildfunktion der Hochschulen gegen die genannten Bedenken ab.\n" +
        "3. Nehmen Sie begründet Stellung: Wie weit sollten Hochschulen bei ihren Nachhaltigkeitszielen gehen?\n\n" +
        "Sprechen Sie in akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Gliedern Sie den Hauptteil nach Pro und Kontra, bevor Sie zu Ihrer eigenen Position übergehen. Verwenden Sie Wendungen des Abwägens („dafür spricht …“, „dem ist entgegenzuhalten …“).",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Grafik zum Wohnen von Studierenden",
    prompt: "Beschreiben Sie die Grafik, fassen Sie sie zusammen und nehmen Sie Stellung.",
    topicTag: "stadt",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Ihnen liegt eine Grafik vor, die wie folgt beschrieben ist:\n\n" +
        "Ein Balkendiagramm stellt dar, wie Studierende in einer Großstadt wohnen. Der größte Balken entfällt mit 38 Prozent auf die Wohngemeinschaft, gefolgt von der eigenen Mietwohnung mit 27 Prozent und dem Wohnheim mit 19 Prozent. 11 Prozent wohnen weiterhin bei den Eltern, und 5 Prozent geben eine sonstige Wohnform an. Eine Zusatzangabe unter der Grafik vermerkt, dass die durchschnittliche Miete pro Quadratmeter in dieser Stadt innerhalb von fünf Jahren um 26 Prozent gestiegen ist.",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Beschreiben Sie die Verteilung der Wohnformen präzise und mit den passenden Zahlenangaben.\n" +
        "2. Stellen Sie einen Zusammenhang zwischen der beschriebenen Verteilung und dem starken Anstieg der Mieten her.\n" +
        "3. Nehmen Sie begründet Stellung: Was sollten Städte und Hochschulen tun, um bezahlbaren Wohnraum für Studierende zu sichern?\n\n" +
        "Verwenden Sie präzise Wendungen der Grafikbeschreibung („der größte Anteil entfällt auf …“, „an zweiter Stelle folgt …“) und sprechen Sie in akademischer Sprache. Wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Ordnen Sie die Anteile beim Beschreiben logisch (vom größten zum kleinsten). Trennen Sie die reine Beschreibung von Ihrer Deutung des Mietanstiegs.",
  },
  {
    ...base,
    taskType: "DSH_SP_PRAESENTATION",
    title: "Präsentation: Künstliche Intelligenz im Studium",
    prompt: "Fassen Sie den Text zusammen und nehmen Sie anschließend Stellung.",
    topicTag: "wissenschaft",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "Lesen Sie den folgenden kurzen Sachtext:\n\n" +
        "„Textgenerierende Programme haben den studentischen Alltag in kurzer Zeit verändert. Sie helfen beim Zusammenfassen von Fachliteratur, beim Formulieren und beim Erlernen von Fremdsprachen. Zugleich stellen sie Hochschulen vor die Frage, wie eigenständige Leistung noch verlässlich beurteilt werden kann. Einige Lehrende setzen verstärkt auf mündliche Prüfungen und begleitete Schreibprozesse, andere fordern ein grundsätzliches Verbot solcher Programme in Prüfungssituationen. Unstrittig ist, dass der kompetente Umgang mit diesen Werkzeugen selbst zu einer Schlüsselqualifikation geworden ist.“",
      instruction:
        "Bereiten Sie einen zusammenhängenden mündlichen Beitrag von etwa sieben Minuten vor. Gehen Sie dabei in dieser Reihenfolge vor:\n" +
        "1. Fassen Sie die zentralen Aussagen des Textes sachlich und in eigenen Worten zusammen.\n" +
        "2. Stellen Sie den Nutzen solcher Programme den Problemen für die Leistungsbewertung gegenüber.\n" +
        "3. Nehmen Sie begründet Stellung: Wie sollten Hochschulen mit textgenerierenden Programmen umgehen?\n\n" +
        "Sprechen Sie in akademischer Sprache und richten Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 1200,
      speakSeconds: 420,
    },
    guidanceNote: "Vermeiden Sie ein pauschales Urteil; unterscheiden Sie zwischen Lernphase und Prüfungssituation. Nennen Sie beim dritten Punkt eine konkrete Regelung, die Sie für angemessen halten.",
  },
];

// ── Diskussion (7 items) ────────────────────────────────────────────────────
// React to a thesis and defend or challenge it with arguments. The commission's
// likely counter-arguments are written into the situation so the task can be
// rehearsed solo. Short prep, ~5 min speaking.
const diskussionItems: ExamItemInput[] = [
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Anwesenheitspflicht in Lehrveranstaltungen",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "hochschule",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Eine verpflichtende Anwesenheit in Seminaren und Vorlesungen ist an einer Hochschule nicht mehr zeitgemäß, weil erwachsene Studierende selbst über ihre Lernwege entscheiden sollten.“\n\n" +
        "Rechnen Sie damit, dass die Kommission auf Einwände hin nachfragt, etwa: dass Anwesenheit die Diskussionskultur und das gemeinsame Lernen stärke; dass schwächere Studierende von der festen Struktur profitierten; und dass reine Wahlfreiheit vor allem denjenigen nütze, die ohnehin gut organisiert seien.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Machen Sie zu Beginn Ihre eigene Position klar.\n" +
        "2. Stützen Sie sie mit mindestens zwei nachvollziehbaren Argumenten.\n" +
        "3. Greifen Sie die genannten Gegenargumente auf und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Verwenden Sie Redemittel des Argumentierens und Einräumens („Ich bin der Auffassung, dass …“, „Zwar trifft es zu, dass …, dennoch …“). Eine differenzierte Position wirkt stärker als eine pauschale.",
  },
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Studiengebühren als Beitrag zur Bildung",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "bildung",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Moderate Studiengebühren sind gerecht, weil ein Studium einen persönlichen Vorteil verschafft und die Beiträge die Qualität der Lehre verbessern könnten.“\n\n" +
        "Rechnen Sie damit, dass die Kommission Einwände einbringt: dass Gebühren Studierende aus einkommensschwachen Familien abschreckten; dass Bildung als öffentliches Gut allen offenstehen solle; und dass die Verwaltung der Gebühren selbst Kosten verursache.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Legen Sie zu Beginn Ihre eigene Position dar.\n" +
        "2. Begründen Sie sie mit mindestens zwei tragfähigen Argumenten.\n" +
        "3. Setzen Sie sich mit den genannten Gegenargumenten auseinander und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und richten Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Unterscheiden Sie zwischen dem grundsätzlichen Prinzip und der konkreten Ausgestaltung (Höhe, soziale Staffelung). So können Sie eine abgewogene Haltung überzeugend vertreten.",
  },
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Englisch als Wissenschaftssprache",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "wissenschaft",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Forschung sollte überwiegend auf Englisch veröffentlicht werden, weil nur so ein weltweiter Austausch der Erkenntnisse gelingt.“\n\n" +
        "Rechnen Sie mit Nachfragen: dass die Fachsprachen der Landessprachen verkümmern könnten; dass die Vermittlung von Wissenschaft an die breite Öffentlichkeit erschwert werde; und dass Forschende, deren Muttersprache nicht Englisch ist, benachteiligt sein könnten.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Machen Sie zu Beginn Ihre eigene Position deutlich.\n" +
        "2. Stützen Sie sie mit mindestens zwei nachvollziehbaren Argumenten.\n" +
        "3. Gehen Sie auf die genannten Gegenargumente ein und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Es bietet sich eine differenzierte Lösung an (z. B. Englisch für den Fachaustausch, die Landessprache für die öffentliche Vermittlung). Benennen Sie ausdrücklich, für welchen Bereich Ihre Position gilt.",
  },
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Grundlagenforschung ohne unmittelbaren Nutzen",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "wissenschaft",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Öffentliche Forschungsgelder sollten vorrangig in Projekte mit einem erkennbaren praktischen Nutzen fließen, nicht in Grundlagenforschung ohne absehbare Anwendung.“\n\n" +
        "Rechnen Sie mit Nachfragen: dass viele bedeutende Erfindungen erst aus zunächst zweckfreier Forschung entstanden seien; dass sich der Nutzen von Forschung häufig nicht im Voraus abschätzen lasse; und dass ein zu enger Fokus auf Anwendung die Innovationskraft schwächen könnte.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Legen Sie zu Beginn Ihre eigene Position dar.\n" +
        "2. Begründen Sie sie mit mindestens zwei tragfähigen Argumenten.\n" +
        "3. Setzen Sie sich mit den genannten Gegenargumenten auseinander und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und richten Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Ein historisches Beispiel für unerwarteten Nutzen zweckfreier Forschung stärkt Ihre Argumentation. Achten Sie darauf, den Begriff „Nutzen“ nicht zu eng zu fassen.",
  },
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Autofreie Innenstädte",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "stadt",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Die Innenstädte großer Städte sollten weitgehend autofrei werden, weil dies die Luftqualität verbessert und die Aufenthaltsqualität erhöht.“\n\n" +
        "Rechnen Sie mit Einwänden: dass Menschen mit eingeschränkter Mobilität auf das Auto angewiesen seien; dass der Einzelhandel Umsatzeinbußen befürchte; und dass ein Umstieg nur gelinge, wenn der öffentliche Nahverkehr zuvor deutlich ausgebaut werde.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Machen Sie zu Beginn Ihre eigene Position klar.\n" +
        "2. Stützen Sie sie mit mindestens zwei nachvollziehbaren Argumenten.\n" +
        "3. Greifen Sie die genannten Gegenargumente auf und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Verknüpfen Sie Ihre Position mit einer zeitlichen oder inhaltlichen Bedingung („sofern zugleich der Nahverkehr ausgebaut wird“). Das macht die Argumentation realistischer und überzeugender.",
  },
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Ehrenamtliches Engagement als Studienleistung",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Hochschulen sollten ehrenamtliches Engagement mit Leistungspunkten anerkennen, weil es wichtige soziale Kompetenzen fördert.“\n\n" +
        "Rechnen Sie mit Nachfragen: dass sich freiwilliges Engagement nur schwer objektiv bewerten lasse; dass eine Anrechnung die eigentliche Freiwilligkeit untergrabe; und dass dadurch Studierende benachteiligt würden, die neben dem Studium arbeiten müssen und keine Zeit für ein Ehrenamt haben.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Legen Sie zu Beginn Ihre eigene Position dar.\n" +
        "2. Begründen Sie sie mit mindestens zwei tragfähigen Argumenten.\n" +
        "3. Setzen Sie sich mit den genannten Gegenargumenten auseinander und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und richten Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Der Einwand der Chancengleichheit ist besonders gewichtig; gehen Sie ausdrücklich darauf ein. Ein Kompromissvorschlag (etwa freiwillige statt verpflichtender Anrechnung) kann Ihre Position tragen.",
  },
  {
    ...base,
    taskType: "DSH_SP_DISKUSSION",
    title: "Diskussion: Regelstudienzeit und Studientempo",
    prompt: "Beziehen Sie Stellung zu der These und verteidigen Sie Ihre Position.",
    topicTag: "studium",
    timeLimitSeconds: 1200,
    payload: {
      situation:
        "In der abschließenden Diskussion vertritt die Prüfungskommission die folgende These:\n\n" +
        "„Die Regelstudienzeit setzt Studierende unnötig unter Druck und sollte abgeschafft werden, damit jeder in seinem eigenen Tempo studieren kann.“\n\n" +
        "Rechnen Sie mit Einwänden: dass ein klarer zeitlicher Rahmen bei der Planung und Finanzierung helfe; dass ein ganz offenes Studium die Abbruchquote erhöhen könnte; und dass Hochschulen ihre Lehrangebote schwerer planen könnten, wenn die Studiendauer völlig frei sei.",
      instruction:
        "Beziehen Sie in einem zusammenhängenden Beitrag von etwa fünf Minuten begründet Stellung zu der These. Gehen Sie dabei so vor:\n" +
        "1. Machen Sie zu Beginn Ihre eigene Position deutlich.\n" +
        "2. Stützen Sie sie mit mindestens zwei nachvollziehbaren Argumenten.\n" +
        "3. Gehen Sie auf die genannten Gegenargumente ein und entkräften Sie sie oder räumen Sie sie teilweise ein.\n\n" +
        "Sprechen Sie in akademischer Sprache und wenden Sie sich mit „Sie“ an die Prüfungskommission.",
      prepSeconds: 300,
      speakSeconds: 300,
    },
    guidanceNote: "Unterscheiden Sie zwischen der Regelstudienzeit als bloßer Orientierung und als starrer Vorgabe. Eine Position, die den Rahmen flexibilisiert statt ihn ganz abzuschaffen, lässt sich oft überzeugender begründen.",
  },
];

export const ITEMS: ExamItemInput[] = [...praesentationItems, ...diskussionItems];

// ── SECTION SHAPE, AS AUTHORED ──────────────────────────────────────────────
// 15 items · DSH_SP_PRAESENTATION 8 · DSH_SP_DISKUSSION 7.
// Every Aufgabe clears the ≥3/Aufgabe floor and the section clears the ≥15 floor.

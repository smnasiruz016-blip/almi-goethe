// DSH (Deutsche Sprachprüfung für den Hochschulzugang, B2–C2) — Hörverstehen.
// Original practice items.
//
// ORIGINALITY (doctrine #1): every audio script and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from real DSH materials, past papers,
// Modellprüfungen or Übungstests of any university. Same IP rule as DET vs. Duolingo.
//
// ── REGISTER: ACADEMIC / UNIVERSITY LECTURE ─────────────────────────────────
// The DSH certifies readiness to STUDY at a German university (B2–C2). Its
// listening text is a single, coherent Vortrag / Vorlesung — an academic talk on
// science, society, environment, technology or the history of ideas. The listener
// takes notes and answers comprehension questions afterwards. Authoring these in an
// everyday register (as the DTZ) would teach the wrong exam: the vocabulary,
// syntax and information density here are deliberately those of the seminar room,
// NOT of daily life.
//
// TWO task shapes, and the conformance gate enforces questions.length per taskType:
//   DSH_HV_FRAGEN        detailed comprehension questions   8 items × 4 questions
//   DSH_HV_HAUPTAUSSAGE  main-idea / summary questions       7 items × 3 questions
//
// No real company / organisation / person names — generic inventions only ("eine
// aktuelle Studie", "Forschende einer Universität", "ein Forschungsteam"). Answer
// distribution is left natural here and permuted later by the caller.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.DSH;
const base = {
  exam: "DSH" as const,
  level: L,
  section: SECTION.HOERVERSTEHEN,
  difficulty: "CORE" as const,
};

type Opt3 = [string, string, string];
type Q = { stem: string; opts: Opt3; answer: "a" | "b" | "c" };
type HVItem = { title: string; topicTag: string; audioScript: string; qs: Q[] };

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

// ── DSH_HV_FRAGEN — detailed comprehension (8 items × 4 questions) ───────────
// One academic lecture excerpt; four questions on specific content, figures,
// causal relations and the lecturer's argument.
const FRAGEN: HVItem[] = [
  {
    title: "Die Rolle der Ozeane im Klimasystem",
    topicTag: "umwelt",
    audioScript:
      "Meine Damen und Herren, wenn wir über den Klimawandel sprechen, richtet sich der Blick meist auf die Atmosphäre. Dabei übersehen wir häufig den bedeutendsten Puffer unseres Planeten: die Ozeane. Nach den Daten, die uns heute vorliegen, haben die Meere seit Beginn der Industrialisierung mehr als neunzig Prozent der zusätzlichen Wärmeenergie aufgenommen. Ohne diese Speicherfunktion läge die Lufttemperatur bereits deutlich höher. Diese Leistung hat jedoch ihren Preis. Erstens dehnt sich erwärmtes Wasser aus, was zum Anstieg des Meeresspiegels beiträgt. Zweitens nimmt das Meer einen Teil des Kohlendioxids auf und versauert dadurch, was Organismen mit Kalkschalen bedroht. Entscheidend ist ein Punkt, den ich betonen möchte: Die Ozeane reagieren träge. Selbst wenn wir die Emissionen heute stoppten, würde sich das Meer noch über Jahrhunderte weiter erwärmen. Diese Verzögerung erschwert die politische Steuerung erheblich.",
    qs: [
      {
        stem: "Wie viel der zusätzlichen Wärmeenergie haben die Ozeane laut Vortrag aufgenommen?",
        opts: ["mehr als neunzig Prozent", "etwa die Hälfte", "weniger als ein Drittel"],
        answer: "a",
      },
      {
        stem: "Welche Folge der Erwärmung nennt der Redner zuerst?",
        opts: ["die Versauerung des Wassers", "die Ausdehnung des erwärmten Wassers", "das Absterben von Fischbeständen"],
        answer: "b",
      },
      {
        stem: "Welche Organismen sind durch die Versauerung besonders bedroht?",
        opts: ["Tiefseefische", "Organismen mit Kalkschalen", "Wasserpflanzen"],
        answer: "b",
      },
      {
        stem: "Warum erschwert die Trägheit der Ozeane die politische Steuerung?",
        opts: [
          "Das Meer erwärmt sich auch nach einem Emissionsstopp weiter.",
          "Die Messdaten sind zu ungenau.",
          "Die Ozeane geben die Wärme sofort wieder ab.",
        ],
        answer: "a",
      },
    ],
  },
  {
    title: "Sprache und Denken: die sprachliche Relativität",
    topicTag: "sprachwissenschaft",
    audioScript:
      "In der heutigen Sitzung befassen wir uns mit einer alten, aber immer wieder umstrittenen Frage: Prägt die Sprache, die wir sprechen, unser Denken? Die sogenannte These der sprachlichen Relativität behauptet in ihrer starken Form, dass unsere Muttersprache die Grenzen unseres Denkens festlegt. Diese starke Fassung gilt heute als widerlegt, denn Menschen können Begriffe verstehen, für die ihre Sprache kein einzelnes Wort besitzt. Interessant bleibt jedoch die schwache Fassung. Sie besagt lediglich, dass Sprache das Denken beeinflusst, ohne es zu bestimmen. Ein oft angeführtes Beispiel betrifft die Bezeichnung von Farben. Einige Sprachen unterscheiden mehrere Blautöne mit eigenen Wörtern. Sprecher dieser Sprachen erkennen entsprechende Farbnuancen in Experimenten geringfügig schneller. Der Effekt ist real, aber klein. Wir sollten ihn also weder leugnen noch überschätzen. Sprache ist ein Werkzeug der Wahrnehmung, nicht ihr Gefängnis.",
    qs: [
      {
        stem: "Was behauptet die starke Form der sprachlichen Relativität?",
        opts: [
          "Sprache beeinflusst das Denken nur geringfügig.",
          "Die Muttersprache legt die Grenzen des Denkens fest.",
          "Denken und Sprache sind völlig voneinander unabhängig.",
        ],
        answer: "b",
      },
      {
        stem: "Warum gilt die starke Form heute als widerlegt?",
        opts: [
          "Menschen können Begriffe ohne eigenes Wort verstehen.",
          "Alle Sprachen besitzen dieselben Wörter.",
          "Farben werden überall gleich benannt.",
        ],
        answer: "a",
      },
      {
        stem: "Was besagt die schwache Fassung der These?",
        opts: [
          "Sprache bestimmt das Denken vollständig.",
          "Sprache hat keinen Einfluss auf das Denken.",
          "Sprache beeinflusst das Denken, ohne es festzulegen.",
        ],
        answer: "c",
      },
      {
        stem: "Wie beschreibt der Redner den Effekt beim Farberkennen?",
        opts: ["real, aber klein", "sehr stark ausgeprägt", "in Experimenten nicht nachweisbar"],
        answer: "a",
      },
    ],
  },
  {
    title: "Antibiotikaresistenz als globale Herausforderung",
    topicTag: "medizin",
    audioScript:
      "Ich möchte Ihnen heute erläutern, warum die Antibiotikaresistenz zu den drängendsten medizinischen Problemen unserer Zeit zählt. Antibiotika wirken, indem sie Bakterien abtöten oder an ihrer Vermehrung hindern. Bakterien vermehren sich jedoch außerordentlich schnell, und bei jeder Teilung können zufällige Veränderungen im Erbgut entstehen. Trägt ein Bakterium zufällig eine Veränderung, die es widerstandsfähig macht, so überlebt gerade dieses Exemplar die Behandlung und gibt seine Eigenschaft weiter. Man spricht hier von Selektion. Verstärkt wird das Problem durch einen falschen Umgang mit den Medikamenten. Werden Antibiotika zu häufig oder bei harmlosen Virusinfektionen verschrieben, gegen die sie ohnehin nicht wirken, wächst der Druck auf die Bakterienpopulation. Besonders folgenreich ist der massenhafte Einsatz in der Tierhaltung. Eine aktuelle Schätzung geht davon aus, dass resistente Keime bis zur Mitte des Jahrhunderts jährlich Millionen Todesfälle verursachen könnten, sofern keine neuen Wirkstoffe entwickelt werden.",
    qs: [
      {
        stem: "Wie wirken Antibiotika laut Vortrag?",
        opts: [
          "Sie stärken das Immunsystem des Patienten.",
          "Sie töten Bakterien ab oder hemmen ihre Vermehrung.",
          "Sie wirken vor allem gegen Viren.",
        ],
        answer: "b",
      },
      {
        stem: "Wodurch entstehen widerstandsfähige Bakterien?",
        opts: [
          "durch zufällige Veränderungen im Erbgut und anschließende Selektion",
          "durch eine gezielte Anpassung des einzelnen Bakteriums an das Medikament",
          "ausschließlich durch die Übertragung von Mensch zu Mensch",
        ],
        answer: "a",
      },
      {
        stem: "Warum ist die Verschreibung bei Virusinfektionen problematisch?",
        opts: [
          "Viren werden dadurch gefährlicher.",
          "Antibiotika wirken gegen Viren nicht und erhöhen dennoch den Druck auf Bakterien.",
          "Die Medikamente verlieren dadurch ihren Geschmack.",
        ],
        answer: "b",
      },
      {
        stem: "Was prognostiziert die genannte Schätzung für die Mitte des Jahrhunderts?",
        opts: [
          "die vollständige Ausrottung aller Bakterien",
          "eine deutliche Senkung der Medikamentenpreise",
          "jährlich Millionen Todesfälle ohne neue Wirkstoffe",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Die Entstehung der Universität im Mittelalter",
    topicTag: "geschichte",
    audioScript:
      "Wenn wir nach den Wurzeln der modernen Universität fragen, führt uns der Weg ins hohe Mittelalter. Die ersten Einrichtungen dieser Art entstanden im zwölften und dreizehnten Jahrhundert, zunächst in Oberitalien und wenig später nördlich der Alpen. Bemerkenswert ist, dass das lateinische Wort universitas ursprünglich gar nicht das Gebäude oder den Lehrstoff bezeichnete, sondern die Gemeinschaft der Lehrenden und Lernenden. Es handelte sich also im Kern um eine Körperschaft, vergleichbar einer Zunft der Handwerker. Diese Körperschaften erkämpften sich besondere Rechte: eine eigene Gerichtsbarkeit, Freiheit von bestimmten Steuern und vor allem das Recht, Prüfungen abzunehmen und Titel zu verleihen. Unterrichtet wurde in lateinischer Sprache, was den Studierenden einen Wechsel zwischen den Städten Europas ermöglichte, ohne die Sprache zu wechseln. Dieses gemeinsame Gelehrtenlatein schuf einen europäischen Bildungsraum, dessen Idee bis heute nachwirkt.",
    qs: [
      {
        stem: "Wann entstanden die ersten Universitäten laut Vortrag?",
        opts: [
          "im zwölften und dreizehnten Jahrhundert",
          "in der Antike",
          "erst im achtzehnten Jahrhundert",
        ],
        answer: "a",
      },
      {
        stem: "Was bezeichnete das Wort universitas ursprünglich?",
        opts: [
          "das Universitätsgebäude",
          "die Gemeinschaft der Lehrenden und Lernenden",
          "die Gesamtheit des Wissens",
        ],
        answer: "b",
      },
      {
        stem: "Womit vergleicht der Redner diese frühen Körperschaften?",
        opts: ["mit einem Königshof", "mit einem Kloster", "mit einer Zunft der Handwerker"],
        answer: "c",
      },
      {
        stem: "Welchen Vorteil hatte der Unterricht auf Latein?",
        opts: [
          "Er ermöglichte den Wechsel zwischen europäischen Städten ohne Sprachwechsel.",
          "Er machte Prüfungen überflüssig.",
          "Er senkte die Studiengebühren.",
        ],
        answer: "a",
      },
    ],
  },
  {
    title: "Künstliche Intelligenz und das Problem der Erklärbarkeit",
    topicTag: "technik",
    audioScript:
      "In diesem Vortrag beschäftigt uns eine Eigenschaft moderner lernender Systeme, die man als das Problem der Erklärbarkeit bezeichnet. Viele der heute leistungsfähigsten Verfahren beruhen auf künstlichen neuronalen Netzen mit Millionen von Parametern. Solche Netze lernen, indem sie aus großen Datenmengen statistische Muster ableiten. Das Ergebnis ist oft erstaunlich treffsicher, doch der Weg zur Entscheidung bleibt selbst für die Entwickler weitgehend undurchsichtig. Man spricht deshalb von einer Blackbox. Das ist kein bloß theoretisches Ärgernis. Stellen Sie sich vor, ein System lehnt einen Kreditantrag ab oder schlägt eine medizinische Behandlung vor. In solchen Fällen haben die Betroffenen ein berechtigtes Interesse an einer nachvollziehbaren Begründung. Zudem können sich in den Trainingsdaten verborgene Vorurteile befinden, die das System unbemerkt übernimmt und verstärkt. Ein eigener Forschungszweig widmet sich daher der Aufgabe, die Entscheidungen solcher Systeme im Nachhinein verständlich zu machen. Ein endgültiges Verfahren dafür existiert bislang nicht.",
    qs: [
      {
        stem: "Worauf beruhen die leistungsfähigsten der beschriebenen Systeme?",
        opts: [
          "auf festen, von Hand geschriebenen Regeln",
          "auf neuronalen Netzen mit Millionen von Parametern",
          "auf der Meinung menschlicher Experten",
        ],
        answer: "b",
      },
      {
        stem: "Warum spricht man von einer Blackbox?",
        opts: [
          "Der Weg zur Entscheidung bleibt selbst für die Entwickler undurchsichtig.",
          "Die Systeme funktionieren nur im Dunkeln.",
          "Die Ergebnisse sind grundsätzlich falsch.",
        ],
        answer: "a",
      },
      {
        stem: "Welche zusätzliche Gefahr nennt der Redner im Zusammenhang mit den Trainingsdaten?",
        opts: [
          "Die Daten werden zu schnell veraltet.",
          "Verborgene Vorurteile können unbemerkt übernommen werden.",
          "Die Daten sind für Menschen unlesbar.",
        ],
        answer: "b",
      },
      {
        stem: "Was sagt der Redner über ein Verfahren zur Erklärbarkeit?",
        opts: [
          "Ein endgültiges Verfahren existiert bislang nicht.",
          "Das Problem ist vollständig gelöst.",
          "Erklärbarkeit ist unwichtig.",
        ],
        answer: "a",
      },
    ],
  },
  {
    title: "Der Schlaf und die Verfestigung des Gedächtnisses",
    topicTag: "psychologie",
    audioScript:
      "Lange Zeit galt der Schlaf als ein Zustand bloßer Untätigkeit, gewissermaßen als Abschaltung des Gehirns. Diese Vorstellung hat sich als grundlegend falsch erwiesen. Während wir schlafen, ist das Gehirn hochaktiv und erledigt Aufgaben, die im Wachzustand nicht möglich wären. Eine zentrale Funktion betrifft das Gedächtnis. Nach einer verbreiteten Theorie werden Erfahrungen des Tages zunächst nur vorläufig gespeichert. Erst im Schlaf, besonders in bestimmten Tiefschlafphasen, werden die wichtigen Inhalte gleichsam wiederholt und in dauerhafte Speicher überführt. Man nennt diesen Vorgang Konsolidierung. Ein Forschungsteam konnte in Versuchen zeigen, dass Personen, die nach dem Lernen schliefen, den Stoff später deutlich besser erinnerten als Personen, die wach blieben. Daraus folgt eine praktische Konsequenz für Sie als Studierende: Eine durchwachte Nacht vor der Prüfung schadet der Erinnerung mehr, als das zusätzliche Wiederholen ihr nützt.",
    qs: [
      {
        stem: "Welche alte Vorstellung über den Schlaf wird als falsch bezeichnet?",
        opts: [
          "dass der Schlaf ein Zustand bloßer Untätigkeit sei",
          "dass Schlaf das Gedächtnis verbessere",
          "dass das Gehirn im Schlaf träume",
        ],
        answer: "a",
      },
      {
        stem: "Was geschieht laut Theorie mit den Erfahrungen des Tages im Schlaf?",
        opts: [
          "Sie werden vollständig gelöscht.",
          "Sie werden wiederholt und in dauerhafte Speicher überführt.",
          "Sie werden zufällig verändert.",
        ],
        answer: "b",
      },
      {
        stem: "Wie heißt der beschriebene Vorgang?",
        opts: ["Selektion", "Relativität", "Konsolidierung"],
        answer: "c",
      },
      {
        stem: "Welche praktische Konsequenz zieht der Redner für Studierende?",
        opts: [
          "Eine durchwachte Nacht vor der Prüfung schadet der Erinnerung.",
          "Man sollte vor Prüfungen möglichst wenig schlafen.",
          "Schlaf hat keinen Einfluss auf das Lernen.",
        ],
        answer: "a",
      },
    ],
  },
  {
    title: "Urbanisierung und die Zukunft der Städte",
    topicTag: "gesellschaft",
    audioScript:
      "Wir leben, historisch gesehen, in einem außergewöhnlichen Moment. Zum ersten Mal in der Geschichte der Menschheit wohnt die Mehrheit der Weltbevölkerung in Städten, und dieser Anteil wächst weiter. Diese Entwicklung, die wir Urbanisierung nennen, bringt widersprüchliche Folgen mit sich. Auf der einen Seite sind dicht besiedelte Städte überraschend effizient. Der Weg zur Arbeit ist kürzer, die Versorgung mit Wasser, Wärme und öffentlichem Verkehr lässt sich pro Kopf günstiger bereitstellen als auf dem Land. In dieser Hinsicht ist die kompakte Stadt sogar klimafreundlicher. Auf der anderen Seite entstehen Probleme: hohe Mieten, verschmutzte Luft und soziale Spannungen zwischen unterschiedlichen Gruppen. Eine aktuelle Studie weist zudem darauf hin, dass die Vorteile ungleich verteilt sind. Wer sich die zentralen Lagen leisten kann, profitiert von kurzen Wegen, während ärmere Haushalte an den Rand gedrängt werden und dort wieder auf das Auto angewiesen sind. Gute Stadtplanung muss deshalb Effizienz und Gerechtigkeit zugleich im Blick behalten.",
    qs: [
      {
        stem: "Was ist an der gegenwärtigen Situation historisch außergewöhnlich?",
        opts: [
          "Erstmals wohnt die Mehrheit der Menschheit in Städten.",
          "Erstmals schrumpfen die Städte.",
          "Erstmals gibt es keine Landbevölkerung mehr.",
        ],
        answer: "a",
      },
      {
        stem: "Warum gilt die kompakte Stadt als effizient?",
        opts: [
          "weil dort niemand arbeiten muss",
          "weil Versorgung und Verkehr pro Kopf günstiger sind",
          "weil die Mieten dort besonders niedrig sind",
        ],
        answer: "b",
      },
      {
        stem: "Welches Problem der Städte nennt der Redner?",
        opts: ["zu wenige Einwohner", "hohe Mieten und verschmutzte Luft", "einen Mangel an Gebäuden"],
        answer: "b",
      },
      {
        stem: "Worauf weist die genannte Studie im Hinblick auf die Vorteile hin?",
        opts: [
          "Die Vorteile sind ungleich verteilt.",
          "Alle Bewohner profitieren gleichermaßen.",
          "Die Vorteile verschwinden mit der Zeit.",
        ],
        answer: "a",
      },
    ],
  },
  {
    title: "Vom Wert der Grundlagenforschung",
    topicTag: "wissenschaftstheorie",
    audioScript:
      "Immer wieder wird an die Wissenschaft die Forderung gestellt, ihre Arbeit müsse einen unmittelbaren Nutzen erbringen. Wer forscht, solle bitte erklären, wozu das Ganze gut sei. Diese Erwartung ist verständlich, doch sie verkennt die Natur der sogenannten Grundlagenforschung. Grundlagenforschung fragt nicht zuerst nach der Anwendung, sondern nach dem Verständnis: Wie funktioniert etwas? Warum verhält sich die Natur so und nicht anders? Der praktische Nutzen stellt sich, wenn überhaupt, oft erst Jahrzehnte später ein, und zwar auf Wegen, die niemand vorhersehen konnte. Ein häufig genanntes Beispiel ist die Erforschung der Struktur des Atoms, die zunächst rein theoretisch erschien und später zahllose Anwendungen ermöglichte, von der Energiegewinnung bis zur medizinischen Bildgebung. Der Redner möchte daraus keine Absage an nützliche Forschung ableiten. Sein Punkt ist ein anderer: Eine Gesellschaft, die nur noch das unmittelbar Verwertbare finanziert, sägt langfristig den Ast ab, auf dem ihre späteren Erfindungen sitzen.",
    qs: [
      {
        stem: "Welche Forderung wird laut Vortrag oft an die Wissenschaft gestellt?",
        opts: [
          "dass ihre Arbeit einen unmittelbaren Nutzen erbringen müsse",
          "dass sie schneller arbeiten müsse",
          "dass sie keine Fehler machen dürfe",
        ],
        answer: "a",
      },
      {
        stem: "Wonach fragt die Grundlagenforschung laut Redner zuerst?",
        opts: ["nach der Anwendung", "nach dem Verständnis", "nach den Kosten"],
        answer: "b",
      },
      {
        stem: "Was sagt der Redner über den praktischen Nutzen der Grundlagenforschung?",
        opts: [
          "Er tritt sofort ein.",
          "Er tritt nie ein.",
          "Er stellt sich oft erst Jahrzehnte später auf unvorhersehbaren Wegen ein.",
        ],
        answer: "c",
      },
      {
        stem: "Was ist die zentrale Warnung des Redners?",
        opts: [
          "Wer nur das Verwertbare finanziert, gefährdet spätere Erfindungen.",
          "Nützliche Forschung sollte abgeschafft werden.",
          "Grundlagenforschung ist überflüssig.",
        ],
        answer: "a",
      },
    ],
  },
];

// ── DSH_HV_HAUPTAUSSAGE — main idea / summary (7 items × 3 questions) ────────
// One academic lecture excerpt; three questions probe the central thesis, the
// best summary and the speaker's overall stance rather than isolated details.
const HAUPTAUSSAGE: HVItem[] = [
  {
    title: "Warum Modelle die Wirklichkeit vereinfachen müssen",
    topicTag: "wissenschaftstheorie",
    audioScript:
      "Studierende sind bisweilen enttäuscht, wenn sie feststellen, dass ein wissenschaftliches Modell die Wirklichkeit nicht vollständig abbildet. Ein Klimamodell etwa erfasst nicht jede einzelne Wolke, ein Wirtschaftsmodell nicht jede einzelne Kaufentscheidung. Dieser Einwand beruht jedoch auf einem Missverständnis. Ein Modell, das die Wirklichkeit in allen Einzelheiten nachbildete, wäre so kompliziert wie die Wirklichkeit selbst und damit nutzlos. Der Sinn eines Modells liegt gerade im Weglassen. Es hebt die wesentlichen Zusammenhänge hervor und lässt das Unwesentliche beiseite, damit wir überhaupt etwas verstehen und Vorhersagen treffen können. Ein gutes Modell ist deshalb nicht dasjenige, das am meisten enthält, sondern dasjenige, das mit möglichst wenigen Annahmen möglichst viel erklärt. Die Kunst der Wissenschaft besteht nicht darin, alles einzubeziehen, sondern das Richtige wegzulassen.",
    qs: [
      {
        stem: "Was ist die Hauptaussage des Vortrags?",
        opts: [
          "Der Nutzen eines Modells beruht gerade auf der bewussten Vereinfachung.",
          "Ein gutes Modell muss die Wirklichkeit vollständig abbilden.",
          "Modelle sind grundsätzlich unwissenschaftlich.",
        ],
        answer: "a",
      },
      {
        stem: "Welche Zusammenfassung passt am besten?",
        opts: [
          "Je mehr Details ein Modell enthält, desto besser ist es.",
          "Ein gutes Modell erklärt mit wenigen Annahmen möglichst viel.",
          "Vorhersagen sind mit Modellen unmöglich.",
        ],
        answer: "b",
      },
      {
        stem: "Wie versteht der Redner die 'Kunst der Wissenschaft'?",
        opts: [
          "möglichst alles einzubeziehen",
          "auf jede Vereinfachung zu verzichten",
          "das Richtige wegzulassen",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Biodiversität als Versicherung der Ökosysteme",
    topicTag: "umwelt",
    audioScript:
      "Wenn vom Schutz der Artenvielfalt die Rede ist, denken viele zuerst an einzelne, besonders auffällige Tiere. Dabei geht es um weit mehr. Die biologische Vielfalt eines Ökosystems wirkt wie eine Versicherung gegen Störungen. Erfüllen mehrere Arten eine ähnliche Aufgabe, so kann bei einer Störung, etwa einer Dürre oder einer Krankheit, eine Art den Ausfall einer anderen ausgleichen. Das System bleibt insgesamt funktionsfähig. Nimmt die Vielfalt hingegen ab, verschwindet dieser Puffer. Ein artenarmes System mag bei gutem Wetter ebenso viel leisten wie ein artenreiches, doch es ist weit verletzlicher, sobald sich die Bedingungen ändern. Der eigentliche Wert der Vielfalt zeigt sich also nicht im Normalfall, sondern in der Krise. Wer heute Arten verliert, verliert damit nicht nur einzelne Lebewesen, sondern die Stabilität des Ganzen.",
    qs: [
      {
        stem: "Was ist die zentrale These des Vortrags?",
        opts: [
          "Artenvielfalt betrifft nur einzelne auffällige Tiere.",
          "Biologische Vielfalt macht Ökosysteme widerstandsfähiger gegen Störungen.",
          "Artenarme Systeme sind immer leistungsfähiger.",
        ],
        answer: "b",
      },
      {
        stem: "Wann zeigt sich laut Redner der eigentliche Wert der Vielfalt?",
        opts: ["im Normalfall", "bei gutem Wetter", "in der Krise"],
        answer: "c",
      },
      {
        stem: "Welche Zusammenfassung trifft am besten zu?",
        opts: [
          "Der Verlust von Arten bedroht die Stabilität ganzer Ökosysteme.",
          "Der Verlust einzelner Arten hat keine Folgen.",
          "Vielfalt und Stabilität hängen nicht zusammen.",
        ],
        answer: "a",
      },
    ],
  },
  {
    title: "Die Aufklärung und der Mut zum eigenen Verstand",
    topicTag: "ideengeschichte",
    audioScript:
      "Die Epoche, die wir Aufklärung nennen, lässt sich schwer auf eine einzige Formel bringen. Und doch gibt es einen Grundgedanken, der ihre vielen Strömungen verbindet: die Forderung, den eigenen Verstand ohne fremde Anleitung zu gebrauchen. Zuvor galt vielfach die Berufung auf überlieferte Autoritäten als hinreichende Begründung. Etwas war wahr, weil eine anerkannte Instanz es so lehrte. Die Denker der Aufklärung setzten dem ein neues Prinzip entgegen: Nichts soll geglaubt werden, nur weil es überliefert ist; alles soll der Prüfung durch die Vernunft standhalten. Diese Haltung hatte weitreichende Folgen für Wissenschaft, Recht und Politik. Sie war jedoch, und das wird gern übersehen, kein reiner Bruch mit der Vergangenheit. Vieles, was die Aufklärung an Methoden nutzte, war lange vorbereitet worden. Was sich änderte, war weniger das Wissen selbst als der Anspruch, es selbst zu prüfen.",
    qs: [
      {
        stem: "Welcher Grundgedanke verbindet laut Vortrag die Aufklärung?",
        opts: [
          "die Forderung, den eigenen Verstand ohne fremde Anleitung zu gebrauchen",
          "die Rückkehr zu überlieferten Autoritäten",
          "die Ablehnung jeder Wissenschaft",
        ],
        answer: "a",
      },
      {
        stem: "Was galt vor der Aufklärung vielfach als hinreichende Begründung?",
        opts: [
          "das eigene Experiment",
          "die Berufung auf überlieferte Autoritäten",
          "die Mehrheitsmeinung",
        ],
        answer: "b",
      },
      {
        stem: "Was betont der Redner am Ende über die Aufklärung?",
        opts: [
          "Sie war ein völliger Bruch mit der Vergangenheit.",
          "Sie brachte gänzlich neues Wissen hervor.",
          "Es änderte sich weniger das Wissen als der Anspruch, es selbst zu prüfen.",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Demografischer Wandel und das Rentensystem",
    topicTag: "gesellschaft",
    audioScript:
      "Der demografische Wandel gehört zu jenen Entwicklungen, deren Richtung sich mit großer Sicherheit vorhersagen lässt. Die Menschen leben länger, und zugleich werden weniger Kinder geboren. Die Folge ist eine Alterung der Bevölkerung. Für ein umlagefinanziertes Rentensystem, in dem die arbeitende Generation unmittelbar die Renten der älteren bezahlt, ist das eine ernste Herausforderung. Immer weniger Beitragszahler stehen immer mehr Rentenbeziehern gegenüber. Nun wird in der öffentlichen Debatte oft so getan, als gebe es dafür eine einzige, schmerzlose Lösung. Der Redner widerspricht dem entschieden. Man kann das Renteneintrittsalter anheben, man kann die Beiträge erhöhen, man kann die Renten senken, oder man setzt auf mehr Zuwanderung und höhere Erwerbstätigkeit. Jede dieser Stellschrauben hat ihren Preis. Eine ehrliche Politik, so das Fazit, muss offenlegen, dass es hier keine kostenlose Lösung gibt, sondern nur eine Verteilung der Lasten.",
    qs: [
      {
        stem: "Was ist die Hauptaussage des Vortrags?",
        opts: [
          "Der demografische Wandel stellt das Rentensystem vor Lasten, die verteilt werden müssen.",
          "Das Rentensystem ist vom demografischen Wandel gar nicht betroffen.",
          "Es gibt eine einzige schmerzlose Lösung des Problems.",
        ],
        answer: "a",
      },
      {
        stem: "Wie beschreibt der Redner die vorgeschlagenen Lösungen?",
        opts: [
          "Alle sind kostenlos.",
          "Jede hat ihren Preis.",
          "Keine ist umsetzbar.",
        ],
        answer: "b",
      },
      {
        stem: "Was fordert der Redner von einer ehrlichen Politik?",
        opts: [
          "das Problem zu verschweigen",
          "auf jede Reform zu verzichten",
          "offenzulegen, dass es keine kostenlose Lösung gibt",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Der Placebo-Effekt und die Grenzen der Selbstbeobachtung",
    topicTag: "medizin",
    audioScript:
      "Der Placebo-Effekt ist ein eindrückliches Beispiel dafür, wie sehr Erwartung und Wahrnehmung zusammenhängen. Erhalten Patienten ein Scheinmedikament ohne jeden Wirkstoff, berichten viele dennoch von einer Besserung, allein weil sie an die Behandlung glauben. Man könnte daraus voreilig schließen, dass es auf den Wirkstoff gar nicht ankomme. Dieser Schluss wäre falsch, und aus ihm ergibt sich die eigentliche Lehre dieses Vortrags. Weil unsere subjektive Erfahrung so leicht durch Erwartung getäuscht wird, genügt das persönliche Empfinden nicht als Nachweis einer Wirkung. Genau deshalb vergleicht die medizinische Forschung ein neues Mittel stets mit einem Scheinmittel, und zwar so, dass weder die Patienten noch die behandelnden Personen wissen, wer was erhält. Nur die Differenz zwischen echtem Mittel und Placebo zeigt die tatsächliche Wirkung. Der Placebo-Effekt ist also weniger ein Wundermittel als eine Mahnung: Wir dürfen dem bloßen Eindruck nicht trauen.",
    qs: [
      {
        stem: "Welche zentrale Lehre zieht der Redner aus dem Placebo-Effekt?",
        opts: [
          "Das persönliche Empfinden genügt nicht als Nachweis einer Wirkung.",
          "Auf den Wirkstoff eines Medikaments kommt es nicht an.",
          "Scheinmedikamente sind immer wirksamer als echte.",
        ],
        answer: "a",
      },
      {
        stem: "Warum vergleicht die Forschung ein neues Mittel mit einem Scheinmittel?",
        opts: [
          "um Kosten zu sparen",
          "um die tatsächliche Wirkung von der bloßen Erwartung zu trennen",
          "um die Patienten zu täuschen",
        ],
        answer: "b",
      },
      {
        stem: "Als was versteht der Redner den Placebo-Effekt am Ende?",
        opts: [
          "als Wundermittel",
          "als Beweis für die Nutzlosigkeit der Medizin",
          "als Mahnung, dem bloßen Eindruck nicht zu trauen",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Warum wir schlecht in Wahrscheinlichkeiten denken",
    topicTag: "psychologie",
    audioScript:
      "Der menschliche Verstand ist ein bemerkenswertes Instrument, doch beim Umgang mit Wahrscheinlichkeiten versagt er auf systematische Weise. Wir überschätzen regelmäßig seltene, aber spektakuläre Ereignisse und unterschätzen häufige, aber unauffällige Gefahren. Der Grund liegt in der Art, wie unser Gedächtnis arbeitet: Was leicht abrufbar ist, weil es dramatisch war oder oft in den Nachrichten erschien, erscheint uns auch wahrscheinlicher. Fachleute nennen dies die Verfügbarkeitsheuristik. So fürchten sich viele Menschen mehr vor seltenen Katastrophen als vor den alltäglichen Risiken, die statistisch weit gefährlicher sind. Der Redner betont, dass dies kein persönliches Versagen einzelner ist, sondern eine Eigenschaft unserer gemeinsamen Denkweise. Und gerade weil diese Verzerrungen vorhersehbar sind, lassen sie sich durch Bildung teilweise ausgleichen. Wer die typischen Fallen kennt, urteilt zwar nicht fehlerfrei, aber ein wenig besonnener.",
    qs: [
      {
        stem: "Was ist die Hauptaussage des Vortrags?",
        opts: [
          "Der Mensch schätzt Wahrscheinlichkeiten auf systematische, vorhersehbare Weise falsch ein.",
          "Der Mensch beurteilt Wahrscheinlichkeiten stets korrekt.",
          "Wahrscheinlichkeiten spielen im Alltag keine Rolle.",
        ],
        answer: "a",
      },
      {
        stem: "Wie heißt die beschriebene Verzerrung?",
        opts: ["Konsolidierung", "Verfügbarkeitsheuristik", "sprachliche Relativität"],
        answer: "b",
      },
      {
        stem: "Welche hoffnungsvolle Schlussfolgerung zieht der Redner?",
        opts: [
          "Die Verzerrungen lassen sich nie beeinflussen.",
          "Nur einzelne Menschen sind betroffen.",
          "Wer die typischen Fallen kennt, urteilt besonnener.",
        ],
        answer: "c",
      },
    ],
  },
  {
    title: "Die Stadt als Speicher gesellschaftlichen Gedächtnisses",
    topicTag: "kulturwissenschaft",
    audioScript:
      "Wir betrachten Städte gewöhnlich unter praktischen Gesichtspunkten: als Orte des Wohnens, des Arbeitens, des Verkehrs. In dieser Sitzung möchte ich Ihnen eine andere Perspektive vorschlagen. Eine Stadt ist auch ein Speicher des gesellschaftlichen Gedächtnisses. In ihren Straßenzügen, Plätzen und Gebäuden sind die Entscheidungen und Werte vergangener Generationen eingeschrieben. Ein alter Marktplatz erzählt von einer Zeit, in der der Handel das Zentrum des Lebens bildete; breite Prachtstraßen zeugen vom Machtanspruch einer Epoche. Wer eine Stadt aufmerksam durchquert, liest gleichsam in einem steinernen Archiv. Daraus folgt für den Redner eine wichtige Konsequenz. Wenn wir alte Bauten abreißen und durch beliebige Neubauten ersetzen, verlieren wir nicht nur Mauern, sondern einen Teil unserer gemeinsamen Erinnerung. Denkmalschutz ist deshalb keine bloße Vorliebe für das Alte, sondern die Pflege eines kollektiven Gedächtnisses.",
    qs: [
      {
        stem: "Welche Perspektive auf die Stadt schlägt der Redner vor?",
        opts: [
          "die Stadt als bloßen Ort des Verkehrs",
          "die Stadt als Speicher des gesellschaftlichen Gedächtnisses",
          "die Stadt als reines Wirtschaftsunternehmen",
        ],
        answer: "b",
      },
      {
        stem: "Womit vergleicht der Redner das aufmerksame Durchqueren einer Stadt?",
        opts: [
          "mit dem Lesen in einem steinernen Archiv",
          "mit einer wissenschaftlichen Rechnung",
          "mit einem sportlichen Wettkampf",
        ],
        answer: "a",
      },
      {
        stem: "Wie begründet der Redner den Denkmalschutz?",
        opts: [
          "als bloße Vorliebe für das Alte",
          "als wirtschaftliche Notwendigkeit",
          "als Pflege eines kollektiven Gedächtnisses",
        ],
        answer: "c",
      },
    ],
  },
];

const fragenItems: ExamItemInput[] = FRAGEN.map((t) => ({
  ...base,
  taskType: "DSH_HV_FRAGEN",
  title: t.title,
  prompt:
    "Sie hören einen Vortrag aus dem universitären Bereich. Beantworten Sie danach die vier Fragen zum Inhalt.",
  topicTag: t.topicTag,
  timeLimitSeconds: 600,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

const hauptaussageItems: ExamItemInput[] = HAUPTAUSSAGE.map((t) => ({
  ...base,
  taskType: "DSH_HV_HAUPTAUSSAGE",
  title: t.title,
  prompt:
    "Sie hören einen Vortrag aus dem universitären Bereich. Beantworten Sie danach die drei Fragen zur Hauptaussage.",
  topicTag: t.topicTag,
  timeLimitSeconds: 600,
  payload: {
    instructions: "Wählen Sie für jede Frage die richtige Antwort: a, b oder c.",
    audioScript: t.audioScript,
    questions: mkQuestions(t.qs),
  },
}));

// Distribute the 3-option MC keys deterministically (see ./_permute.ts and the
// answer-distribution gate): no option dead or clustered, no within-item uniform
// run. Correctness is untouched.
export const ITEMS: ExamItemInput[] = deGame(
  [...fragenItems, ...hauptaussageItems],
  { permuteMC: new Set(["DSH_HV_FRAGEN", "DSH_HV_HAUPTAUSSAGE"]) },
);

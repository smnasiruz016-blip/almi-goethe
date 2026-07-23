// TestDaF — Leseverstehen. Original practice items (CEFR B2–C1).
//
// ORIGINALITY (doctrine #1): every text and question below is ORIGINAL to
// AlmiGoethe — never copied or derived from TestDaF / g.a.s.t. / TestDaF-Institut
// materials, past papers or Modelltests. Written fresh in the exam's STYLE only.
//
// ── WHY THIS FILE REPLACES THE LESEVERSTEHEN BLOCK OF testdaf.ts ────────────
// The previous 16 items carried two invented taskTypes (TESTDAF_LV_MCQ,
// TESTDAF_LV_TF) and three questions each, regardless of task. The real section has
// SEVEN Aufgaben with published item counts:
//
//   Lückentext 5 · Textabschnitte ordnen 4 · Mehrfachauswahl 7 ·
//   Sprachhandlungen zuordnen 4 · Aussagen Kategorien zuordnen 7 ·
//   Aussagen einem Begriffspaar zuordnen 4 · Fehler in einer Zusammenfassung 3
//
// (= 34 items, the published section total.) Six of those seven shapes did not
// exist in the bank at all. The prose was fine; the STRUCTURE was a generic
// three-question multiple-choice task wearing seven different names it never had.
//
// Renaming TESTDAF_LV_MCQ to TESTDAF_LV_MC would have turned the gate green while
// changing nothing a learner experiences — the real Mehrfachauswahl carries seven
// items, not three. So these are re-authored, not relabelled.
//
// DEPTH (network policy, Option B): at least 15 items per SECTION and at least 3
// per Aufgabe, so every covered task type is real practice rather than a token.
// Not 15 per Aufgabe — the runner serves at section granularity (route params are
// {exam, section}; no surface can isolate a task type), so the section is the unit
// a learner meets.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.TESTDAF;
const base = {
  exam: "TESTDAF" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
};

const RAW_ITEMS: ExamItemInput[] = [
  // ══════════════════════════════════════════ Aufgabe: Mehrfachauswahl (7 items)
  {
    ...base,
    taskType: "TESTDAF_LV_MC",
    title: "Dachbegrünung in europäischen Städten",
    prompt: "Lesen Sie den Text und beantworten Sie die sieben Fragen.",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "In immer mehr europäischen Städten werden die Dächer von Wohnhäusern und Bürogebäuden begrünt. Was lange als teure Spielerei galt, gewinnt heute an praktischer Bedeutung. Bepflanzte Dächer speichern Regenwasser, das sonst die Kanalisation belastet, und geben es verzögert wieder ab. Zugleich kühlen die Pflanzen an heißen Tagen ihre Umgebung, weil Feuchtigkeit verdunstet.\n\nKritiker weisen allerdings darauf hin, dass Anlage und Pflege solcher Gärten erhebliche Kosten verursachen und dass sich nicht jedes Dach ohne aufwendige Verstärkung eignet. Eine Untersuchung an mehreren Hochschulen kam zu dem Ergebnis, dass die Kühlwirkung stark von der Tiefe der Erdschicht abhängt: Erst ab etwa fünfzehn Zentimetern lässt sie sich zuverlässig nachweisen.\n\nFachleute empfehlen deshalb, die zusätzliche Last schon beim Neubau einzuplanen, statt bestehende Gebäude nachträglich umzurüsten. Einige Kommunen zahlen inzwischen Zuschüsse, knüpfen diese aber an Auflagen zur Pflege. Ob sich der Aufwand rechnet, hängt nach heutigem Kenntnisstand weniger vom Klima der Region ab als von der Bauweise des einzelnen Gebäudes.",
      questions: [
        {
          id: "q1",
          stem: "Als was galt die Begrünung von Dächern früher?",
          options: [
            { id: "a", text: "als gesetzliche Vorschrift" },
            { id: "b", text: "als kostspielige Besonderheit" },
            { id: "c", text: "als verbreitete Gewohnheit" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wie wirken sich begrünte Dächer auf das Regenwasser aus?",
          options: [
            { id: "a", text: "Sie leiten es sofort in die Kanalisation." },
            { id: "b", text: "Sie halten es zurück und geben es später ab." },
            { id: "c", text: "Sie verhindern jeden Abfluss vollständig." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Worauf beruht die kühlende Wirkung der Bepflanzung?",
          options: [
            { id: "a", text: "auf der Verdunstung von Feuchtigkeit" },
            { id: "b", text: "auf der Beschattung durch hohe Bäume" },
            { id: "c", text: "auf der Reflexion des Sonnenlichts" },
          ],
          answer: "a",
        },
        {
          id: "q4",
          stem: "Was ergab die Untersuchung an mehreren Hochschulen?",
          options: [
            { id: "a", text: "Die Kühlwirkung tritt unabhängig von der Erdschicht ein." },
            { id: "b", text: "Die Kühlwirkung ist erst ab einer gewissen Schichttiefe nachweisbar." },
            { id: "c", text: "Die Kühlwirkung wurde bisher nicht untersucht." },
          ],
          answer: "b",
        },
        {
          id: "q5",
          stem: "Was empfehlen Fachleute?",
          options: [
            { id: "a", text: "die zusätzliche Last bereits beim Neubau zu berücksichtigen" },
            { id: "b", text: "vorrangig alte Gebäude nachzurüsten" },
            { id: "c", text: "auf eine Verstärkung der Dächer zu verzichten" },
          ],
          answer: "a",
        },
        {
          id: "q6",
          stem: "Wie gehen einige Kommunen laut Text vor?",
          options: [
            { id: "a", text: "Sie verbieten nachträgliche Begrünungen." },
            { id: "b", text: "Sie zahlen Zuschüsse und stellen zugleich Bedingungen." },
            { id: "c", text: "Sie übernehmen die Pflege der Dächer selbst." },
          ],
          answer: "b",
        },
        {
          id: "q7",
          stem: "Wovon hängt es nach heutigem Kenntnisstand vor allem ab, ob sich der Aufwand lohnt?",
          options: [
            { id: "a", text: "vom Klima der jeweiligen Region" },
            { id: "b", text: "von der Bauweise des einzelnen Gebäudes" },
            { id: "c", text: "von der Größe der Stadt" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_MC",
    title: "Die Rückkehr des Nachtzugs",
    prompt: "Lesen Sie den Text und beantworten Sie die sieben Fragen.",
    topicTag: "verkehr",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Jahrzehntelang galt der Nachtzug als Auslaufmodell. Billigflüge und schnelle Tagesverbindungen entzogen ihm die Fahrgäste, und mehrere Bahnunternehmen stellten den Betrieb ein. Seit einigen Jahren jedoch wächst die Zahl der Verbindungen wieder. Ausschlaggebend war zunächst nicht die Nachfrage der Reisenden, sondern die Entscheidung einzelner Staaten, den Nachtverkehr gezielt zu fördern.\n\nBefürworter verweisen auf die Klimabilanz: Eine Nachtfahrt verursacht je Person deutlich weniger Treibhausgase als ein vergleichbarer Flug. Hinzu kommt ein praktischer Vorteil, den Umfragen regelmäßig bestätigen: Reisende sparen eine Übernachtung und kommen am Morgen im Stadtzentrum an, nicht an einem entfernten Flughafen.\n\nDie wirtschaftlichen Schwierigkeiten sind damit nicht gelöst. Schlafwagen sind teuer in der Anschaffung und stehen tagsüber ungenutzt. Ein Zug, der nur nachts fährt, erwirtschaftet weniger als einer, der rund um die Uhr im Einsatz ist. Fachleute rechnen deshalb damit, dass sich das Angebot auf Strecken zwischen sechshundert und fünfzehnhundert Kilometern konzentrieren wird — kurz genug für eine Nacht, lang genug, um den Flug unattraktiv zu machen.",
      questions: [
        {
          id: "q1",
          stem: "Warum verlor der Nachtzug früher an Bedeutung?",
          options: [
            { id: "a", text: "wegen Billigflügen und schnellen Tagesverbindungen" },
            { id: "b", text: "wegen veralteter Streckennetze" },
            { id: "c", text: "wegen fehlenden Personals" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was gab den Ausschlag für die Rückkehr der Nachtzüge?",
          options: [
            { id: "a", text: "eine plötzlich gestiegene Nachfrage" },
            { id: "b", text: "die Förderentscheidung einzelner Staaten" },
            { id: "c", text: "der Zusammenschluss mehrerer Bahnunternehmen" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Worauf verweisen die Befürworter in erster Linie?",
          options: [
            { id: "a", text: "auf die kürzere Reisezeit" },
            { id: "b", text: "auf die geringeren Treibhausgasemissionen" },
            { id: "c", text: "auf den niedrigeren Fahrpreis" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "Welchen praktischen Vorteil bestätigen Umfragen?",
          options: [
            { id: "a", text: "Reisende sparen eine Übernachtung." },
            { id: "b", text: "Reisende können mehr Gepäck mitnehmen." },
            { id: "c", text: "Reisende erhalten eine Verpflegung an Bord." },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Warum sind Schlafwagen wirtschaftlich problematisch?",
          options: [
            { id: "a", text: "Sie sind teuer und stehen tagsüber ungenutzt." },
            { id: "b", text: "Sie dürfen nur auf wenigen Strecken eingesetzt werden." },
            { id: "c", text: "Sie benötigen besonders viel Energie." },
          ],
          answer: "a",
        },
        {
          id: "q6",
          stem: "Womit rechnen Fachleute für die Zukunft?",
          options: [
            { id: "a", text: "mit einem Angebot auf mittleren Entfernungen" },
            { id: "b", text: "mit einer vollständigen Abschaffung des Nachtverkehrs" },
            { id: "c", text: "mit einem Ausbau auf allen Strecken gleichermaßen" },
          ],
          answer: "a",
        },
        {
          id: "q7",
          stem: "Warum nennt der Text eine untere Grenze von etwa sechshundert Kilometern?",
          options: [
            { id: "a", text: "weil kürzere Strecken für eine ganze Nacht zu kurz sind" },
            { id: "b", text: "weil kürzere Strecken technisch nicht befahrbar sind" },
            { id: "c", text: "weil kürzere Strecken keine Förderung erhalten" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_MC",
    title: "Mehrsprachigkeit im Kindesalter",
    prompt: "Lesen Sie den Text und beantworten Sie die sieben Fragen.",
    topicTag: "bildung",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Lange hielt sich die Annahme, Kinder, die mit zwei Sprachen aufwachsen, lernten beide langsamer als einsprachige Gleichaltrige. Neuere Untersuchungen zeichnen ein anderes Bild. Zwar verfügen mehrsprachige Kinder in einer einzelnen Sprache zeitweise über einen kleineren Wortschatz, doch zählt man die Wörter beider Sprachen zusammen, verschwindet der Unterschied.\n\nDeutlicher fallen die Befunde bei der sogenannten kognitiven Kontrolle aus: Wer ständig zwischen zwei Systemen wechselt, übt das Unterdrücken der jeweils nicht benötigten Sprache. In Aufgaben, die eine schnelle Umstellung verlangen, schneiden mehrsprachige Kinder daher häufig besser ab. Ob dieser Vorteil bis ins Erwachsenenalter fortbesteht, ist umstritten; mehrere Wiederholungsstudien konnten ihn dort nicht bestätigen.\n\nEinig sind sich die Fachleute in einem anderen Punkt: Entscheidend ist weniger die Zahl der Sprachen als die Menge und Qualität des sprachlichen Umgangs. Ein Kind, das in beiden Sprachen regelmäßig vorgelesen bekommt und mit Erwachsenen spricht, entwickelt sich günstiger als eines, das eine Sprache nur passiv hört.",
      questions: [
        {
          id: "q1",
          stem: "Welche Annahme hielt sich lange?",
          options: [
            { id: "a", text: "Mehrsprachige Kinder lernen beide Sprachen langsamer." },
            { id: "b", text: "Mehrsprachige Kinder vergessen eine Sprache wieder." },
            { id: "c", text: "Mehrsprachige Kinder sprechen früher als andere." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Was geschieht, wenn man den Wortschatz beider Sprachen zusammenzählt?",
          options: [
            { id: "a", text: "Der Rückstand vergrößert sich." },
            { id: "b", text: "Der Unterschied verschwindet." },
            { id: "c", text: "Der Wortschatz bleibt unter dem einsprachiger Kinder." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was üben mehrsprachige Kinder nach Ansicht der Forschung besonders?",
          options: [
            { id: "a", text: "das Auswendiglernen langer Texte" },
            { id: "b", text: "das Unterdrücken der nicht benötigten Sprache" },
            { id: "c", text: "das schnellere Sprechen" },
          ],
          answer: "b",
        },
        {
          id: "q4",
          stem: "In welchen Aufgaben schneiden mehrsprachige Kinder häufig besser ab?",
          options: [
            { id: "a", text: "in Aufgaben, die eine schnelle Umstellung verlangen" },
            { id: "b", text: "in Aufgaben zum räumlichen Vorstellungsvermögen" },
            { id: "c", text: "in Aufgaben zur Rechenfertigkeit" },
          ],
          answer: "a",
        },
        {
          id: "q5",
          stem: "Wie beurteilt der Text den Vorteil im Erwachsenenalter?",
          options: [
            { id: "a", text: "Er ist eindeutig belegt." },
            { id: "b", text: "Er ist umstritten." },
            { id: "c", text: "Er ist widerlegt." },
          ],
          answer: "b",
        },
        {
          id: "q6",
          stem: "Worin sind sich die Fachleute einig?",
          options: [
            { id: "a", text: "Die Zahl der Sprachen ist entscheidend." },
            { id: "b", text: "Menge und Qualität des sprachlichen Umgangs sind entscheidend." },
            { id: "c", text: "Das Alter beim Spracherwerb ist entscheidend." },
          ],
          answer: "b",
        },
        {
          id: "q7",
          stem: "Welches Kind entwickelt sich laut Text günstiger?",
          options: [
            { id: "a", text: "eines, das eine Sprache nur passiv hört" },
            { id: "b", text: "eines, dem in beiden Sprachen vorgelesen wird" },
            { id: "c", text: "eines, das beide Sprachen getrennt voneinander lernt" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ══════════════════════════════════════════════ Aufgabe: Lückentext (5 items)
  {
    ...base,
    taskType: "TESTDAF_LV_LUECKENTEXT",
    title: "Wissenschaftliches Schreiben lernen",
    prompt: "Ergänzen Sie die fünf Lücken im Text.",
    topicTag: "studium",
    timeLimitSeconds: 480,
    payload: {
      instructions:
        "Schreiben Sie in jede Lücke EIN passendes Wort. Achten Sie auf die grammatisch richtige Form.",
      passage:
        "Viele Studierende unterschätzen, wie sehr sich wissenschaftliches Schreiben vom Schreiben in der Schule unterscheidet. Es genügt nicht, eine Meinung zu äußern; jede Behauptung muss ___(1)___ werden. Wer eine fremde Formulierung übernimmt, ist verpflichtet, die Quelle ___(2)___. Ebenso wichtig ist der Aufbau: Eine Arbeit, deren Gliederung nicht erkennbar ist, wirkt auch dann unklar, ___(3)___ die einzelnen Abschnitte für sich genommen gelungen sind. Erfahrene Lehrende raten deshalb, mit einer groben Gliederung zu beginnen und diese im Verlauf der Arbeit mehrfach zu ___(4)___. Der erste Entwurf muss nicht gut sein — er muss überhaupt ___(5)___.",
      questions: [
        { id: "g1", stem: "Lücke 1", answer: "belegt", exact: false },
        { id: "g2", stem: "Lücke 2", answer: "anzugeben", exact: false },
        { id: "g3", stem: "Lücke 3", answer: "wenn", exact: false },
        { id: "g4", stem: "Lücke 4", answer: "überarbeiten", exact: false },
        { id: "g5", stem: "Lücke 5", answer: "existieren", exact: false },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_LUECKENTEXT",
    title: "Der Wandel der Universitätsbibliothek",
    prompt: "Ergänzen Sie die fünf Lücken im Text.",
    topicTag: "studium",
    timeLimitSeconds: 480,
    payload: {
      instructions:
        "Schreiben Sie in jede Lücke EIN passendes Wort. Achten Sie auf die grammatisch richtige Form.",
      passage:
        "Die Universitätsbibliothek war lange vor allem ein Ort der Aufbewahrung. Heute ___(1)___ sie sich zunehmend zu einem Arbeitsplatz. Da ein großer Teil der Fachzeitschriften digital vorliegt, werden die Regale kürzer, ___(2)___ die Zahl der Lesetische steigt. Beklagt wird allerdings, dass die Lizenzkosten für elektronische Angebote schneller wachsen als die Etats. Manche Einrichtungen haben deshalb Verträge gekündigt, ___(3)___ sie die Preise für unangemessen hielten. Ob dieser Weg erfolgreich ist, lässt sich noch nicht ___(4)___ beurteilen. Fest steht nur, dass die Bibliothek ihre Rolle neu ___(5)___ muss.",
      questions: [
        { id: "g1", stem: "Lücke 1", answer: "entwickelt", exact: false },
        { id: "g2", stem: "Lücke 2", answer: "während", exact: false },
        { id: "g3", stem: "Lücke 3", answer: "weil", exact: false },
        { id: "g4", stem: "Lücke 4", answer: "abschließend", exact: false },
        { id: "g5", stem: "Lücke 5", answer: "bestimmen", exact: false },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_LUECKENTEXT",
    title: "Feldforschung in der Stadtsoziologie",
    prompt: "Ergänzen Sie die fünf Lücken im Text.",
    topicTag: "forschung",
    timeLimitSeconds: 480,
    payload: {
      instructions:
        "Schreiben Sie in jede Lücke EIN passendes Wort. Achten Sie auf die grammatisch richtige Form.",
      passage:
        "Wer das Leben in einem Stadtviertel untersuchen will, kommt mit Fragebögen allein nicht ___(1)___. Viele Gewohnheiten lassen sich nur beobachten, nicht abfragen. Die Feldforschung verlangt daher, dass die Forschenden über längere Zeit ___(2)___ Ort sind. Das wirft ein methodisches Problem auf: Ihre bloße Anwesenheit kann das Verhalten der Beobachteten ___(3)___. Um diesen Effekt gering zu halten, wird empfohlen, die Erhebung erst zu beginnen, ___(4)___ sich die Beteiligten an die Anwesenheit gewöhnt haben. Vollständig ausschließen lässt sich die Verzerrung ___(5)___ nicht.",
      questions: [
        { id: "g1", stem: "Lücke 1", answer: "aus", exact: false },
        { id: "g2", stem: "Lücke 2", answer: "vor", exact: false },
        { id: "g3", stem: "Lücke 3", answer: "verändern", exact: false },
        { id: "g4", stem: "Lücke 4", answer: "nachdem", exact: false },
        { id: "g5", stem: "Lücke 5", answer: "jedoch", exact: false },
      ],
    },
  },

  // ═══════════════════════════════════ Aufgabe: Textabschnitte ordnen (4 items)
  {
    ...base,
    taskType: "TESTDAF_LV_ABSCHNITTE_ORDNEN",
    title: "Ein Forschungsprojekt zur Bodenqualität",
    prompt: "Bringen Sie die vier Abschnitte in die richtige Reihenfolge.",
    topicTag: "forschung",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Die vier Abschnitte stehen in falscher Reihenfolge. Geben Sie für jeden Abschnitt an, an welche Stelle (1–4) er gehört.",
      passage:
        "[A] Erst danach wurden an dreißig Stellen Proben entnommen und im Labor auf ihren Humusgehalt untersucht.\n\n[B] Ausgangspunkt war die Beobachtung, dass die Erträge auf mehreren benachbarten Feldern seit Jahren auseinanderliefen, obwohl sie ähnlich bewirtschaftet wurden.\n\n[C] Die Auswertung zeigte, dass die Unterschiede fast vollständig auf die Bodenstruktur zurückgingen und kaum auf die Düngung.\n\n[D] Um dieser Beobachtung nachzugehen, wurde zunächst eine Karte der Flächen erstellt, in der Bodenart und Neigung verzeichnet waren.",
      questions: [
        {
          id: "o1",
          stem: "Abschnitt A gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "3",
        },
        {
          id: "o2",
          stem: "Abschnitt B gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "1",
        },
        {
          id: "o3",
          stem: "Abschnitt C gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "4",
        },
        {
          id: "o4",
          stem: "Abschnitt D gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "2",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_ABSCHNITTE_ORDNEN",
    title: "Der Weg einer wissenschaftlichen Veröffentlichung",
    prompt: "Bringen Sie die vier Abschnitte in die richtige Reihenfolge.",
    topicTag: "studium",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Die vier Abschnitte stehen in falscher Reihenfolge. Geben Sie für jeden Abschnitt an, an welche Stelle (1–4) er gehört.",
      passage:
        "[A] Fällt dieses Urteil positiv aus, wird der Text gesetzt und erscheint in einer der nächsten Ausgaben.\n\n[B] Am Anfang steht ein Manuskript, das die Verfasserin bei einer Fachzeitschrift einreicht.\n\n[C] Die Herausgeber prüfen zunächst, ob das Thema überhaupt zum Profil der Zeitschrift passt.\n\n[D] Erst wenn diese Vorprüfung bestanden ist, geht der Text an zwei unabhängige Gutachter.",
      questions: [
        {
          id: "o1",
          stem: "Abschnitt A gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "4",
        },
        {
          id: "o2",
          stem: "Abschnitt B gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "1",
        },
        {
          id: "o3",
          stem: "Abschnitt C gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "2",
        },
        {
          id: "o4",
          stem: "Abschnitt D gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "3",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_ABSCHNITTE_ORDNEN",
    title: "Die Entwicklung des Fernstudiums",
    prompt: "Bringen Sie die vier Abschnitte in die richtige Reihenfolge.",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Die vier Abschnitte stehen in falscher Reihenfolge. Geben Sie für jeden Abschnitt an, an welche Stelle (1–4) er gehört.",
      passage:
        "[A] Mit dem Rundfunk kamen später Vorlesungen hinzu, die zu festen Zeiten gesendet wurden.\n\n[B] Die Anfänge des Fernstudiums liegen im neunzehnten Jahrhundert, als Lehrbriefe mit der Post verschickt wurden.\n\n[C] Heute lässt sich beides verbinden: Aufzeichnungen stehen dauerhaft bereit, Sprechstunden finden zu festen Terminen statt.\n\n[D] Beide Formen hatten denselben Nachteil — wer den Termin verpasste oder eine Frage hatte, musste bis zur nächsten Gelegenheit warten.",
      questions: [
        {
          id: "o1",
          stem: "Abschnitt A gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "2",
        },
        {
          id: "o2",
          stem: "Abschnitt B gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "1",
        },
        {
          id: "o3",
          stem: "Abschnitt C gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "4",
        },
        {
          id: "o4",
          stem: "Abschnitt D gehört an Stelle …",
          options: [
            { id: "1", text: "1" },
            { id: "2", text: "2" },
            { id: "3", text: "3" },
            { id: "4", text: "4" },
          ],
          answer: "3",
        },
      ],
    },
  },

  // ═════════════════════════════ Aufgabe: Sprachhandlungen zuordnen (4 items)
  {
    ...base,
    taskType: "TESTDAF_LV_SPRACHHANDLUNGEN",
    title: "Diskussion über Studiengebühren",
    prompt: "Ordnen Sie jeder Äußerung die passende Sprachhandlung zu.",
    topicTag: "studium",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Was TUT die sprechende Person mit ihrer Äußerung? Wählen Sie für jede Äußerung die passende Sprachhandlung.",
      passage:
        "Aus einer Podiumsdiskussion an einer Hochschule:\n\n(1) „Vermutlich würden die Zahlen der Studienanfänger im ersten Jahr spürbar zurückgehen.“\n\n(2) „Dass die Hochschulen mehr Geld brauchen, will ich gar nicht bestreiten.“\n\n(3) „Nein, so kann man das nicht sagen — die Studie, die Sie zitieren, betrifft ein anderes Land.“\n\n(4) „Es bleibt also festzuhalten: Über die Höhe sind wir uns einig, über den Zeitpunkt nicht.“",
      questions: [
        {
          id: "s1",
          stem: "Äußerung (1)",
          options: [
            { id: "a", text: "eine Vermutung äußern" },
            { id: "b", text: "einräumen" },
            { id: "c", text: "widersprechen" },
            { id: "d", text: "zusammenfassen" },
          ],
          answer: "a",
        },
        {
          id: "s2",
          stem: "Äußerung (2)",
          options: [
            { id: "a", text: "eine Vermutung äußern" },
            { id: "b", text: "einräumen" },
            { id: "c", text: "widersprechen" },
            { id: "d", text: "zusammenfassen" },
          ],
          answer: "b",
        },
        {
          id: "s3",
          stem: "Äußerung (3)",
          options: [
            { id: "a", text: "eine Vermutung äußern" },
            { id: "b", text: "einräumen" },
            { id: "c", text: "widersprechen" },
            { id: "d", text: "zusammenfassen" },
          ],
          answer: "c",
        },
        {
          id: "s4",
          stem: "Äußerung (4)",
          options: [
            { id: "a", text: "eine Vermutung äußern" },
            { id: "b", text: "einräumen" },
            { id: "c", text: "widersprechen" },
            { id: "d", text: "zusammenfassen" },
          ],
          answer: "d",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_SPRACHHANDLUNGEN",
    title: "Podiumsgespräch zur Digitalisierung der Lehre",
    prompt: "Ordnen Sie jeder Äußerung die passende Sprachhandlung zu.",
    topicTag: "bildung",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Was TUT die sprechende Person mit ihrer Äußerung? Wählen Sie für jede Äußerung die passende Sprachhandlung.",
      passage:
        "Aus einem Gespräch über digitale Lehrformate:\n\n(1) „Ich schlage vor, wir erproben das Verfahren zunächst in einem einzigen Studiengang.“\n\n(2) „Man darf dabei allerdings nicht übersehen, dass nicht alle Studierenden über eine stabile Verbindung verfügen.“\n\n(3) „Wenn ich Sie richtig verstehe, halten Sie den Aufwand für vertretbar?“\n\n(4) „Zwischen 2019 und 2023 hat sich die Zahl der Onlinekurse an dieser Hochschule verdreifacht.“",
      questions: [
        {
          id: "s1",
          stem: "Äußerung (1)",
          options: [
            { id: "a", text: "einen Vorschlag machen" },
            { id: "b", text: "einen Einwand vorbringen" },
            { id: "c", text: "nachfragen" },
            { id: "d", text: "eine Tatsache berichten" },
          ],
          answer: "a",
        },
        {
          id: "s2",
          stem: "Äußerung (2)",
          options: [
            { id: "a", text: "einen Vorschlag machen" },
            { id: "b", text: "einen Einwand vorbringen" },
            { id: "c", text: "nachfragen" },
            { id: "d", text: "eine Tatsache berichten" },
          ],
          answer: "b",
        },
        {
          id: "s3",
          stem: "Äußerung (3)",
          options: [
            { id: "a", text: "einen Vorschlag machen" },
            { id: "b", text: "einen Einwand vorbringen" },
            { id: "c", text: "nachfragen" },
            { id: "d", text: "eine Tatsache berichten" },
          ],
          answer: "c",
        },
        {
          id: "s4",
          stem: "Äußerung (4)",
          options: [
            { id: "a", text: "einen Vorschlag machen" },
            { id: "b", text: "einen Einwand vorbringen" },
            { id: "c", text: "nachfragen" },
            { id: "d", text: "eine Tatsache berichten" },
          ],
          answer: "d",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_SPRACHHANDLUNGEN",
    title: "Streitgespräch über Tierversuche",
    prompt: "Ordnen Sie jeder Äußerung die passende Sprachhandlung zu.",
    topicTag: "forschung",
    timeLimitSeconds: 420,
    payload: {
      instructions:
        "Was TUT die sprechende Person mit ihrer Äußerung? Wählen Sie für jede Äußerung die passende Sprachhandlung.",
      passage:
        "Aus einer Diskussion in einem Forschungsinstitut:\n\n(1) „Ich halte es für falsch, den Ersatz von Tierversuchen als bloße Kostenfrage darzustellen.“\n\n(2) „Angenommen, die Zellkulturmodelle wären in fünf Jahren ausgereift — was folgte daraus für die Zulassung?“\n\n(3) „Damit will ich nicht sagen, dass jeder Versuch zu rechtfertigen ist.“\n\n(4) „Bitte lassen Sie mich den Gedanken noch zu Ende führen.“",
      questions: [
        {
          id: "s1",
          stem: "Äußerung (1)",
          options: [
            { id: "a", text: "eine Bewertung abgeben" },
            { id: "b", text: "eine Annahme durchspielen" },
            { id: "c", text: "eine Aussage einschränken" },
            { id: "d", text: "um das Wort bitten" },
          ],
          answer: "a",
        },
        {
          id: "s2",
          stem: "Äußerung (2)",
          options: [
            { id: "a", text: "eine Bewertung abgeben" },
            { id: "b", text: "eine Annahme durchspielen" },
            { id: "c", text: "eine Aussage einschränken" },
            { id: "d", text: "um das Wort bitten" },
          ],
          answer: "b",
        },
        {
          id: "s3",
          stem: "Äußerung (3)",
          options: [
            { id: "a", text: "eine Bewertung abgeben" },
            { id: "b", text: "eine Annahme durchspielen" },
            { id: "c", text: "eine Aussage einschränken" },
            { id: "d", text: "um das Wort bitten" },
          ],
          answer: "c",
        },
        {
          id: "s4",
          stem: "Äußerung (4)",
          options: [
            { id: "a", text: "eine Bewertung abgeben" },
            { id: "b", text: "eine Annahme durchspielen" },
            { id: "c", text: "eine Aussage einschränken" },
            { id: "d", text: "um das Wort bitten" },
          ],
          answer: "d",
        },
      ],
    },
  },

  // ═══════════════════════ Aufgabe: Aussagen Kategorien zuordnen (7 items)
  {
    ...base,
    taskType: "TESTDAF_LV_KATEGORIEN",
    title: "Drei Positionen zur Vier-Tage-Woche",
    prompt: "Ordnen Sie jede Aussage der Person zu, die sie vertritt.",
    topicTag: "arbeit",
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Wer vertritt welche Aussage? Wählen Sie für jede Aussage A, B oder C. Eine Kategorie kann mehrfach vorkommen.",
      passage:
        "A — Wirtschaftswissenschaftlerin: „Die Erfahrungen aus den bisherigen Versuchen sind ermutigend, aber sie stammen fast alle aus Bürotätigkeiten. Ob sich die Ergebnisse auf Pflege oder Fertigung übertragen lassen, wissen wir schlicht nicht. Ich plädiere für weitere Untersuchungen, bevor wir gesetzliche Regelungen treffen.“\n\nB — Arbeitsmediziner: „Was mich überzeugt, ist die Erholung. In den Versuchsbetrieben sanken die Krankheitstage messbar. Für mich wiegt das schwerer als die offene Frage nach der Produktivität, denn Gesundheit ist kein Nebeneffekt, sondern der eigentliche Zweck.“\n\nC — Geschäftsführer eines mittelständischen Betriebs: „Ich habe die verkürzte Woche eingeführt und würde es wieder tun. Entscheidend war jedoch, dass wir gleichzeitig unsere Besprechungen radikal gekürzt haben. Ohne diesen zweiten Schritt hätte die Umstellung nicht funktioniert.“",
      questions: [
        {
          id: "k1",
          stem: "Die bisherige Forschung deckt nicht alle Branchen ab.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "k2",
          stem: "Der Rückgang der Krankheitstage ist das stärkste Argument.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "k3",
          stem: "Die Umstellung gelang nur zusammen mit einer weiteren Veränderung.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "k4",
          stem: "Vor einer gesetzlichen Regelung sollte weiter geforscht werden.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "k5",
          stem: "Gesundheit ist wichtiger als die Frage nach der Produktivität.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "k6",
          stem: "Die Person berichtet aus eigener betrieblicher Erfahrung.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "k7",
          stem: "Die vorliegenden Ergebnisse stammen überwiegend aus Bürotätigkeiten.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_KATEGORIEN",
    title: "Meinungen zum autofreien Stadtzentrum",
    prompt: "Ordnen Sie jede Aussage der Person zu, die sie vertritt.",
    topicTag: "stadt",
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Wer vertritt welche Aussage? Wählen Sie für jede Aussage A, B oder C. Eine Kategorie kann mehrfach vorkommen.",
      passage:
        "A — Verkehrsplanerin: „Ein Fahrverbot allein löst nichts. Wenn der Nahverkehr nicht vorher ausgebaut wird, verlagert sich der Verkehr nur in die angrenzenden Viertel. Die Reihenfolge der Maßnahmen entscheidet über den Erfolg, nicht ihre Strenge.“\n\nB — Einzelhändlerin aus der Innenstadt: „Meine Sorge war anfangs groß, doch die Zahlen haben mich eines Besseren belehrt. Seit die Straße gesperrt ist, bleiben die Leute länger. Was ich weiterhin brauche, ist eine verlässliche Möglichkeit, morgens Ware anzuliefern.“\n\nC — Anwohner: „Mich stört weniger das Auto als der Lärm. Nachts ist es jetzt tatsächlich ruhiger. Dafür ist der Parkdruck in unserer Seitenstraße gestiegen, und darüber redet niemand.“",
      questions: [
        {
          id: "k1",
          stem: "Ohne besseren Nahverkehr verschiebt sich das Problem nur.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "k2",
          stem: "Die eigenen Befürchtungen haben sich nicht bestätigt.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "k3",
          stem: "Eine unerwünschte Folge wird öffentlich kaum thematisiert.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "k4",
          stem: "Die Reihenfolge der Maßnahmen ist wichtiger als ihre Härte.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "k5",
          stem: "Es besteht weiterhin ein ungelöstes Problem mit der Anlieferung.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "k6",
          stem: "Die Belastung durch Geräusche hat abgenommen.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "k7",
          stem: "Die Kundschaft hält sich länger im Viertel auf als früher.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_KATEGORIEN",
    title: "Fachleute über künstliche Intelligenz in der Lehre",
    prompt: "Ordnen Sie jede Aussage der Person zu, die sie vertritt.",
    topicTag: "bildung",
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Wer vertritt welche Aussage? Wählen Sie für jede Aussage A, B oder C. Eine Kategorie kann mehrfach vorkommen.",
      passage:
        "A — Hochschuldidaktikerin: „Das eigentliche Problem sind nicht die Werkzeuge, sondern unsere Prüfungsformen. Wer zu Hause einen Aufsatz schreiben lässt, prüft ohnehin nur das Ergebnis. Wir sollten den Weg dorthin bewerten, dann erledigt sich die Frage weitgehend von selbst.“\n\nB — Informatiker: „Man sollte nüchtern bleiben. Diese Systeme geben Wahrscheinlichkeiten wieder, keine geprüften Tatsachen. Wer sie ohne Fachkenntnis einsetzt, merkt einen Fehler nicht — und genau darin liegt die Gefahr für Studierende im ersten Semester.“\n\nC — Studentin im Masterstudium: „Für mich ist es ein Werkzeug wie ein Wörterbuch. Ich lasse mir Formulierungen vorschlagen und entscheide selbst. Was mich stört, ist, dass an jedem Institut andere Regeln gelten und niemand sie klar aufschreibt.“",
      questions: [
        {
          id: "k1",
          stem: "Die Prüfungsformen sind die eigentliche Ursache der Debatte.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "k2",
          stem: "Ohne Fachwissen lassen sich Fehler der Systeme nicht erkennen.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "k3",
          stem: "Die uneinheitlichen Regelungen werden als störend empfunden.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "k4",
          stem: "Es wäre besser, den Entstehungsprozess einer Arbeit zu bewerten.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "a",
        },
        {
          id: "k5",
          stem: "Die Systeme liefern Wahrscheinliches, nicht Gesichertes.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
        {
          id: "k6",
          stem: "Die Person nutzt das Werkzeug und behält die Entscheidung bei sich.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "c",
        },
        {
          id: "k7",
          stem: "Besonders Studienanfänger sind gefährdet.",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ═════════════════ Aufgabe: Aussagen einem Begriffspaar zuordnen (4 items)
  {
    ...base,
    taskType: "TESTDAF_LV_BEGRIFFSPAAR",
    title: "Grundlagenforschung oder angewandte Forschung?",
    prompt: "Ordnen Sie jede Aussage einem der beiden Begriffe zu.",
    topicTag: "forschung",
    timeLimitSeconds: 360,
    payload: {
      instructions:
        "Bezieht sich die Aussage auf die GRUNDLAGENFORSCHUNG (A) oder auf die ANGEWANDTE FORSCHUNG (B)?",
      passage:
        "Grundlagenforschung fragt danach, wie etwas funktioniert, ohne dass ein Nutzen absehbar sein muss. Sie wird überwiegend öffentlich finanziert, weil sich der Ertrag nicht im Voraus beziffern lässt, und ihre Ergebnisse werden in der Regel veröffentlicht. Angewandte Forschung geht von einem konkreten Problem aus. Sie arbeitet häufig mit Unternehmen zusammen, ist zeitlich enger geplant, und ihre Ergebnisse werden nicht selten zunächst zurückgehalten, um sie schützen zu lassen.",
      questions: [
        {
          id: "b1",
          stem: "Der Ertrag lässt sich vorab nicht beziffern.",
          options: [
            { id: "a", text: "A — Grundlagenforschung" },
            { id: "b", text: "B — angewandte Forschung" },
          ],
          answer: "a",
        },
        {
          id: "b2",
          stem: "Der Ausgangspunkt ist ein konkretes Problem.",
          options: [
            { id: "a", text: "A — Grundlagenforschung" },
            { id: "b", text: "B — angewandte Forschung" },
          ],
          answer: "b",
        },
        {
          id: "b3",
          stem: "Ergebnisse werden zunächst zurückgehalten.",
          options: [
            { id: "a", text: "A — Grundlagenforschung" },
            { id: "b", text: "B — angewandte Forschung" },
          ],
          answer: "b",
        },
        {
          id: "b4",
          stem: "Die Finanzierung erfolgt überwiegend aus öffentlichen Mitteln.",
          options: [
            { id: "a", text: "A — Grundlagenforschung" },
            { id: "b", text: "B — angewandte Forschung" },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_BEGRIFFSPAAR",
    title: "Präsenzlehre und Onlinelehre",
    prompt: "Ordnen Sie jede Aussage einem der beiden Begriffe zu.",
    topicTag: "bildung",
    timeLimitSeconds: 360,
    payload: {
      instructions: "Bezieht sich die Aussage auf die PRÄSENZLEHRE (A) oder auf die ONLINELEHRE (B)?",
      passage:
        "In der Präsenzlehre entsteht der Austausch beiläufig: vor dem Hörsaal, in der Pause, auf dem Weg zur Mensa. Die Teilnahme ist an einen Ort gebunden, was Pendelzeiten verursacht, zugleich aber eine feste Tagesstruktur schafft. Die Onlinelehre hebt die Ortsbindung auf und erreicht dadurch Menschen, die berufstätig sind oder Angehörige pflegen. Sie verlangt jedoch mehr Selbstorganisation, und der beiläufige Kontakt muss ausdrücklich hergestellt werden, weil er sonst ausbleibt.",
      questions: [
        {
          id: "b1",
          stem: "Kontakte entstehen nebenbei, ohne dass man sie plant.",
          options: [
            { id: "a", text: "A — Präsenzlehre" },
            { id: "b", text: "B — Onlinelehre" },
          ],
          answer: "a",
        },
        {
          id: "b2",
          stem: "Berufstätige werden leichter erreicht.",
          options: [
            { id: "a", text: "A — Präsenzlehre" },
            { id: "b", text: "B — Onlinelehre" },
          ],
          answer: "b",
        },
        {
          id: "b3",
          stem: "Es entstehen Wege zwischen Wohnort und Hochschule.",
          options: [
            { id: "a", text: "A — Präsenzlehre" },
            { id: "b", text: "B — Onlinelehre" },
          ],
          answer: "a",
        },
        {
          id: "b4",
          stem: "Die Studierenden müssen ihren Ablauf stärker selbst einteilen.",
          options: [
            { id: "a", text: "A — Präsenzlehre" },
            { id: "b", text: "B — Onlinelehre" },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_BEGRIFFSPAAR",
    title: "Individualverkehr und öffentlicher Nahverkehr",
    prompt: "Ordnen Sie jede Aussage einem der beiden Begriffe zu.",
    topicTag: "verkehr",
    timeLimitSeconds: 360,
    payload: {
      instructions:
        "Bezieht sich die Aussage auf den INDIVIDUALVERKEHR (A) oder auf den ÖFFENTLICHEN NAHVERKEHR (B)?",
      passage:
        "Der Individualverkehr bietet Unabhängigkeit von Fahrplänen und eignet sich besonders dort, wo die Wege verstreut liegen. Seine Kosten fallen jedoch weitgehend unabhängig von der Nutzung an: Anschaffung, Versicherung und Stellplatz bleiben gleich, ob man täglich fährt oder selten. Der öffentliche Nahverkehr verteilt die Kosten auf viele Fahrgäste und benötigt je Person deutlich weniger Fläche. Er lohnt sich allerdings erst ab einer gewissen Dichte — in dünn besiedelten Gegenden bleibt der Takt zwangsläufig grob.",
      questions: [
        {
          id: "b1",
          stem: "Ein großer Teil der Kosten entsteht auch ohne Nutzung.",
          options: [
            { id: "a", text: "A — Individualverkehr" },
            { id: "b", text: "B — öffentlicher Nahverkehr" },
          ],
          answer: "a",
        },
        {
          id: "b2",
          stem: "Der Flächenbedarf je Person ist geringer.",
          options: [
            { id: "a", text: "A — Individualverkehr" },
            { id: "b", text: "B — öffentlicher Nahverkehr" },
          ],
          answer: "b",
        },
        {
          id: "b3",
          stem: "Man ist nicht an feste Abfahrtszeiten gebunden.",
          options: [
            { id: "a", text: "A — Individualverkehr" },
            { id: "b", text: "B — öffentlicher Nahverkehr" },
          ],
          answer: "a",
        },
        {
          id: "b4",
          stem: "Bei geringer Besiedlung bleibt das Angebot notgedrungen dünn.",
          options: [
            { id: "a", text: "A — Individualverkehr" },
            { id: "b", text: "B — öffentlicher Nahverkehr" },
          ],
          answer: "b",
        },
      ],
    },
  },

  // ═══════════ Aufgabe: Fehler in einer Zusammenfassung finden (3 items)
  {
    ...base,
    taskType: "TESTDAF_LV_FEHLER_ZUSAMMENFASSUNG",
    title: "Zusammenfassung: Wasserverbrauch in der Landwirtschaft",
    prompt: "Finden Sie die drei Stellen, an denen die Zusammenfassung dem Text widerspricht.",
    topicTag: "umwelt",
    timeLimitSeconds: 480,
    payload: {
      instructions:
        "Die Zusammenfassung enthält an drei Stellen einen Fehler. Wählen Sie jeweils, was dem Text tatsächlich entspricht.",
      passage:
        "TEXT\nDie Landwirtschaft ist in Mitteleuropa nicht der größte, aber der am stärksten wetterabhängige Wasserverbraucher. In trockenen Sommern steigt der Bedarf für die Bewässerung sprunghaft — und zwar genau dann, wenn die Flüsse wenig Wasser führen. Tröpfchenbewässerung kann den Verbrauch je Fläche erheblich senken, ist in der Anschaffung aber teuer und lohnt sich vor allem bei hochwertigen Kulturen wie Obst und Gemüse. Bei Getreide überwiegen bislang die Kosten. Fachleute halten es deshalb für aussichtsreicher, zunächst die Böden aufnahmefähiger zu machen, statt flächendeckend zu bewässern.\n\nZUSAMMENFASSUNG\nDie Landwirtschaft ist in Mitteleuropa der größte Wasserverbraucher (1). Ihr Bedarf steigt vor allem in trockenen Sommern. Tröpfchenbewässerung senkt den Verbrauch und rechnet sich derzeit besonders im Getreideanbau (2). Fachleute empfehlen daher vorrangig eine flächendeckende Bewässerung (3).",
      questions: [
        {
          id: "f1",
          stem: "Stelle (1): Was sagt der Text?",
          options: [
            { id: "a", text: "Die Landwirtschaft ist der größte Wasserverbraucher." },
            { id: "b", text: "Sie ist nicht der größte, aber der am stärksten wetterabhängige Verbraucher." },
            { id: "c", text: "Sie verbraucht so viel Wasser wie die Industrie." },
          ],
          answer: "b",
        },
        {
          id: "f2",
          stem: "Stelle (2): Was sagt der Text?",
          options: [
            { id: "a", text: "Tröpfchenbewässerung lohnt sich vor allem bei Obst und Gemüse." },
            { id: "b", text: "Tröpfchenbewässerung lohnt sich vor allem bei Getreide." },
            { id: "c", text: "Tröpfchenbewässerung lohnt sich bei keiner Kultur." },
          ],
          answer: "a",
        },
        {
          id: "f3",
          stem: "Stelle (3): Was sagt der Text?",
          options: [
            { id: "a", text: "Fachleute empfehlen eine flächendeckende Bewässerung." },
            { id: "b", text: "Fachleute empfehlen, zuerst die Böden aufnahmefähiger zu machen." },
            { id: "c", text: "Fachleute empfehlen, die Bewässerung ganz einzustellen." },
          ],
          answer: "b",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_FEHLER_ZUSAMMENFASSUNG",
    title: "Zusammenfassung: Das Ehrenamt im Wandel",
    prompt: "Finden Sie die drei Stellen, an denen die Zusammenfassung dem Text widerspricht.",
    topicTag: "gesellschaft",
    timeLimitSeconds: 480,
    payload: {
      instructions:
        "Die Zusammenfassung enthält an drei Stellen einen Fehler. Wählen Sie jeweils, was dem Text tatsächlich entspricht.",
      passage:
        "TEXT\nDie Bereitschaft, sich ehrenamtlich zu engagieren, ist in den vergangenen zwanzig Jahren insgesamt nicht gesunken. Verändert hat sich ihre Form: Statt einer langfristigen Bindung an einen Verein wählen viele Menschen zeitlich begrenzte Projekte. Vereine mit klassischer Mitgliederstruktur haben deshalb Nachwuchsprobleme, während projektförmige Initiativen wachsen. Besonders deutlich ist der Wandel bei den unter Dreißigjährigen. Fachleute raten Vereinen, kurze Mitwirkungsmöglichkeiten anzubieten, statt auf einen Wiederanstieg der langfristigen Mitgliedschaft zu hoffen.\n\nZUSAMMENFASSUNG\nDie Bereitschaft zum Ehrenamt ist in zwanzig Jahren deutlich zurückgegangen (1). Viele Menschen bevorzugen heute befristete Projekte. Am stärksten zeigt sich das bei den über Sechzigjährigen (2). Fachleuten zufolge sollten Vereine auf eine Rückkehr der langfristigen Mitgliedschaft setzen (3).",
      questions: [
        {
          id: "f1",
          stem: "Stelle (1): Was sagt der Text?",
          options: [
            { id: "a", text: "Die Bereitschaft ist deutlich zurückgegangen." },
            { id: "b", text: "Die Bereitschaft ist insgesamt nicht gesunken." },
            { id: "c", text: "Die Bereitschaft hat sich verdoppelt." },
          ],
          answer: "b",
        },
        {
          id: "f2",
          stem: "Stelle (2): Was sagt der Text?",
          options: [
            { id: "a", text: "Der Wandel ist bei den über Sechzigjährigen am deutlichsten." },
            { id: "b", text: "Der Wandel ist bei den unter Dreißigjährigen am deutlichsten." },
            { id: "c", text: "Der Wandel betrifft alle Altersgruppen gleich." },
          ],
          answer: "b",
        },
        {
          id: "f3",
          stem: "Stelle (3): Was sagt der Text?",
          options: [
            { id: "a", text: "Vereine sollten kurze Mitwirkungsmöglichkeiten anbieten." },
            { id: "b", text: "Vereine sollten auf die Rückkehr langfristiger Mitgliedschaft setzen." },
            { id: "c", text: "Vereine sollten ihre Arbeit einstellen." },
          ],
          answer: "a",
        },
      ],
    },
  },
  {
    ...base,
    taskType: "TESTDAF_LV_FEHLER_ZUSAMMENFASSUNG",
    title: "Zusammenfassung: Lärmschutz in Wohngebieten",
    prompt: "Finden Sie die drei Stellen, an denen die Zusammenfassung dem Text widerspricht.",
    topicTag: "stadt",
    timeLimitSeconds: 480,
    payload: {
      instructions:
        "Die Zusammenfassung enthält an drei Stellen einen Fehler. Wählen Sie jeweils, was dem Text tatsächlich entspricht.",
      passage:
        "TEXT\nLärm wird von Betroffenen unterschiedlich empfunden: Nicht die gemessene Lautstärke allein entscheidet, sondern auch, ob der Lärm als beeinflussbar erlebt wird. Deshalb stören gleichmäßige Geräusche in der Regel weniger als unregelmäßige. Schallschutzwände senken den Pegel an der Fassade wirksam, helfen aber den oberen Stockwerken kaum, weil der Schall über die Wand hinweggeht. Flüsterasphalt wirkt in allen Geschossen, muss jedoch häufiger erneuert werden als gewöhnlicher Belag. Kommunen kombinieren daher meist mehrere Maßnahmen.\n\nZUSAMMENFASSUNG\nEntscheidend für die Belästigung ist ausschließlich die gemessene Lautstärke (1). Schallschutzwände helfen vor allem den oberen Stockwerken (2). Flüsterasphalt wirkt in allen Geschossen, hält aber weniger lange als gewöhnlicher Belag. Kommunen beschränken sich in der Regel auf eine einzige Maßnahme (3).",
      questions: [
        {
          id: "f1",
          stem: "Stelle (1): Was sagt der Text?",
          options: [
            { id: "a", text: "Ausschließlich die gemessene Lautstärke entscheidet." },
            { id: "b", text: "Auch die erlebte Beeinflussbarkeit spielt eine Rolle." },
            { id: "c", text: "Die Lautstärke spielt keine Rolle." },
          ],
          answer: "b",
        },
        {
          id: "f2",
          stem: "Stelle (2): Was sagt der Text?",
          options: [
            { id: "a", text: "Schallschutzwände helfen den oberen Stockwerken kaum." },
            { id: "b", text: "Schallschutzwände helfen vor allem den oberen Stockwerken." },
            { id: "c", text: "Schallschutzwände wirken in keinem Stockwerk." },
          ],
          answer: "a",
        },
        {
          id: "f3",
          stem: "Stelle (3): Was sagt der Text?",
          options: [
            { id: "a", text: "Kommunen beschränken sich auf eine einzige Maßnahme." },
            { id: "b", text: "Kommunen kombinieren meist mehrere Maßnahmen." },
            { id: "c", text: "Kommunen ergreifen in der Regel keine Maßnahmen." },
          ],
          answer: "b",
        },
      ],
    },
  },
];

// See ./_permute.ts and the answer-distribution gate. MC options are permuted so no
// option is dead or clustered; BEGRIFFSPAAR statements are reordered off the a-b-a-b
// rhythm. Correctness untouched.
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["TESTDAF_LV_MC", "TESTDAF_LV_FEHLER_ZUSAMMENFASSUNG"]),
  deRhythm: new Set(["TESTDAF_LV_BEGRIFFSPAAR"]),
});

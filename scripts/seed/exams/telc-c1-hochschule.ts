// telc Deutsch C1 Hochschule — original practice items (CEFR C1). Five sections:
// Leseverstehen, Sprachbausteine, Hörverstehen (written part) + Schriftlicher and
// Mündlicher Ausdruck. Pass = 60% overall AND 60% each part; modular. Scored per
// skill (percentage-first) — the engine never depends on a fabricated grand total.
//
// ORIGINALITY (doctrine #1): every text, gap and task is ORIGINAL to AlmiGoethe —
// never copied or derived from telc / g.a.s.t. materials, Handbücher or Übungstests.
//
// Density target: 16 items/section (full build). Filled section-by-section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;
const EXAM = "TELC_C1_HOCHSCHULE" as const;

export const ITEMS: ExamItemInput[] = [
  // ---------------------------------------------------------------- LESEVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Wissenschaftskommunikation im Wandel",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "Lange Zeit beschränkte sich die Kommunikation von Forschungsergebnissen auf Fachzeitschriften, deren Sprache für Laien kaum zugänglich war. Inzwischen jedoch sehen sich Wissenschaftlerinnen und Wissenschaftler zunehmend in der Pflicht, ihre Arbeit auch einer breiten Öffentlichkeit verständlich zu machen. Diese Öffnung ist nicht unumstritten. Befürworter argumentieren, dass eine informierte Gesellschaft rationalere Entscheidungen treffe und dass mit öffentlichen Geldern finanzierte Forschung auch öffentlich erklärt werden müsse. Skeptiker hingegen warnen davor, dass die Vereinfachung komplexer Sachverhalte zu Missverständnissen führe und dass der Zwang zur medialen Aufmerksamkeit seriöse von spektakulärer Forschung nicht mehr unterscheiden lasse. Unstrittig ist allein, dass die Fähigkeit, Erkenntnisse allgemein verständlich zu vermitteln, künftig zum Handwerkszeug jeder Forscherin und jedes Forschers gehören dürfte.",
      questions: [
        {
          id: "q1",
          stem: "Wie hat sich die Wissenschaftskommunikation verändert?",
          options: [
            { id: "a", text: "Sie richtet sich zunehmend an ein breites Publikum." },
            { id: "b", text: "Sie beschränkt sich wieder auf Fachzeitschriften." },
            { id: "c", text: "Sie ist vollständig verschwunden." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welches Argument nennen die Befürworter?",
          options: [
            { id: "a", text: "Öffentlich finanzierte Forschung müsse öffentlich erklärt werden." },
            { id: "b", text: "Vereinfachung führe zwangsläufig zu Fehlern." },
            { id: "c", text: "Mediale Aufmerksamkeit schade der Forschung." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was gilt dem Text zufolge als unbestritten?",
          options: [
            { id: "a", text: "dass Forschung nicht erklärt werden sollte" },
            { id: "b", text: "dass verständliches Vermitteln künftig zum Handwerkszeug gehört" },
            { id: "c", text: "dass Fachzeitschriften überflüssig werden" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„Unstrittig ist allein, dass …“ markiert den Punkt, dem alle zustimmen — oft eine Prüfungsfrage.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_C1H_LV_MCQ",
    title: "Die Ökonomie der Aufmerksamkeit",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "medien",
    timeLimitSeconds: 900,
    payload: {
      instructions: "Wählen Sie für jede Frage die inhaltlich passende Antwort (a, b oder c).",
      passage:
        "In einer Welt, in der Informationen nahezu unbegrenzt verfügbar sind, wird nicht das Wissen selbst zur knappen Ressource, sondern die Aufmerksamkeit, die ihm geschenkt werden kann. Medienunternehmen konkurrieren daher weniger um Inhalte als um die begrenzte Zeit ihres Publikums. Diese Verschiebung hat Folgen: Überschriften werden auf maximale Wirkung getrimmt, und Beiträge, die sofort fesseln, verdrängen solche, die Geduld verlangen. Manche Beobachter fürchten, dass darunter die Bereitschaft leidet, sich mit anspruchsvollen Themen auseinanderzusetzen. Andere halten dagegen, dass sich anspruchsvolle Angebote gerade dadurch abheben und ein treues Publikum finden können.",
      questions: [
        {
          id: "q1",
          stem: "Was ist laut Text die eigentlich knappe Ressource?",
          options: [
            { id: "a", text: "das verfügbare Wissen" },
            { id: "b", text: "die Aufmerksamkeit des Publikums" },
            { id: "c", text: "die Zahl der Medienunternehmen" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Welche Folge wird beschrieben?",
          options: [
            { id: "a", text: "Beiträge, die sofort fesseln, verdrängen anspruchsvollere." },
            { id: "b", text: "Überschriften werden bewusst unauffällig gestaltet." },
            { id: "c", text: "Das Publikum hat plötzlich mehr Zeit." },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie lautet das Gegenargument der „anderen“?",
          options: [
            { id: "a", text: "Anspruchsvolle Angebote gehen zwangsläufig unter." },
            { id: "b", text: "Anspruchsvolle Angebote können sich abheben und treue Leser finden." },
            { id: "c", text: "Aufmerksamkeit sei gar nicht begrenzt." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Achten Sie auf „Manche … Andere halten dagegen …“ — ein klassisches Pro-/Kontra-Signal.",
  },

  // ----------------------------------------------------------------- SPRACHBAUSTEINE
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Bewerbung um ein Stipendium",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions:
        "Lesen Sie den Text. Für jede Lücke gibt es drei Möglichkeiten — wählen Sie die grammatisch und inhaltlich richtige.",
      passage:
        "Sehr geehrte Damen und Herren, hiermit bewerbe ich mich (1) das Deutschlandstipendium. Im Anhang finden Sie meine Unterlagen, (2) denen auch ein Empfehlungsschreiben gehört. Ich bin überzeugt, dass ich die Voraussetzungen (3).",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "um" },
            { id: "b", text: "für" },
            { id: "c", text: "über" },
          ],
          answer: "b",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "zu" },
            { id: "b", text: "bei" },
            { id: "c", text: "mit" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "erfülle" },
            { id: "b", text: "erfüllt" },
            { id: "c", text: "erfüllen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„sich bewerben um“ ist fest; „gehören zu“ verlangt „zu“. Feste Verbindungen lohnt es sich zu lernen.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_C1H_SB_GAP",
    title: "Hinweis zur Anmeldung",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit.",
      passage:
        "Die Anmeldung zur Prüfung ist nur (1) gültig, wenn die Gebühr rechtzeitig überwiesen wurde. (2) einer verspäteten Zahlung kann der Platz nicht garantiert werden. Bitte beachten Sie außerdem, dass eine Abmeldung spätestens eine Woche (3) dem Termin erfolgen muss.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "dann" },
            { id: "b", text: "sofern" },
            { id: "c", text: "trotzdem" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "Im Falle" },
            { id: "b", text: "Im Fall" },
            { id: "c", text: "Anlässlich" },
          ],
          answer: "b",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "vor" },
            { id: "b", text: "bevor" },
            { id: "c", text: "davor" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Präposition + Dativ: „eine Woche vor dem Termin“. „bevor“ leitet einen Nebensatz ein — hier falsch.",
  },

  // ----------------------------------------------------------------- HOERVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_C1H_HV_LECTURE",
    title: "Vortrag: Mehrsprachigkeit als Ressource",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "wissenschaft",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Sie hören einen Ausschnitt aus einem Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Meine Damen und Herren, in der öffentlichen Debatte wird Mehrsprachigkeit gelegentlich als Belastung dargestellt, gerade mit Blick auf Kinder, die mit zwei Sprachen aufwachsen. Die Forschung zeichnet jedoch ein anderes Bild. Zwar mischen mehrsprachige Kinder in frühen Jahren die Sprachen bisweilen, doch dieser Effekt gleicht sich mit der Zeit aus. Langfristig zeigen viele von ihnen sogar Vorteile, etwa eine größere Flexibilität im Denken. Wichtig ist allerdings, dass beide Sprachen im Alltag verlässlich vorkommen; eine Sprache, die nur selten gesprochen wird, entwickelt sich naturgemäß schwächer.",
      questions: [
        {
          id: "q1",
          stem: "Wie wird Mehrsprachigkeit in der öffentlichen Debatte teils dargestellt?",
          options: [
            { id: "a", text: "als eindeutiger Vorteil" },
            { id: "b", text: "als mögliche Belastung" },
            { id: "c", text: "als völlig unbedeutend" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was sagt die Forschung über das Mischen der Sprachen?",
          options: [
            { id: "a", text: "Es bleibt dauerhaft bestehen." },
            { id: "b", text: "Es gleicht sich mit der Zeit aus." },
            { id: "c", text: "Es tritt nie auf." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Welche Bedingung nennt der Vortragende?",
          options: [
            { id: "a", text: "Beide Sprachen müssen im Alltag verlässlich vorkommen." },
            { id: "b", text: "Eine Sprache sollte klar bevorzugt werden." },
            { id: "c", text: "Die Sprachen sollten strikt getrennt bleiben." },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„Zwar … doch …“ und „allerdings“ kündigen Einschränkungen an — dort verstecken sich oft die Antworten.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_C1H_SA_ESSAY",
    title: "Leserbrief: Anwesenheitspflicht an der Universität",
    prompt: "Schreiben Sie einen strukturierten Text (circa 300 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 4200,
    payload: {
      situation:
        "In der Universitätszeitung ist ein Beitrag erschienen, der eine strikte Anwesenheitspflicht in Seminaren fordert. Sie möchten darauf mit einem Leserbrief reagieren.",
      instruction:
        "Verfassen Sie einen Leserbrief. Nehmen Sie Bezug auf die Forderung, führen Sie Argumente für Ihre Sichtweise an, gehen Sie auf mindestens einen Gegeneinwand ein und schließen Sie mit einer klaren Position. Achten Sie auf einen angemessenen, sachlichen Stil.",
      wordMin: 250,
      wordMax: 380,
    },
    guidanceNote:
      "Ein Leserbrief braucht Anrede, Bezug zum Artikel und Gruß. Auf C1-Niveau werden Abwägung und präzise Konnektoren erwartet.",
  },

  // ------------------------------------------------------------- MUENDLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TELC_C1H_MA_PRESENT",
    title: "Kurzvortrag: Vor- und Nachteile von Online-Prüfungen",
    prompt: "Bereiten Sie einen kurzen Vortrag vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 240,
    payload: {
      situation:
        "Im mündlichen Teil sollen Sie ein Thema strukturiert präsentieren. Ihr Thema lautet: Sollten Hochschulen Prüfungen vermehrt online abnehmen?",
      instruction:
        "Halten Sie einen kurzen, gegliederten Vortrag. Führen Sie in das Thema ein, nennen Sie Vor- und Nachteile von Online-Prüfungen und schließen Sie mit einer begründeten Empfehlung.",
      prepSeconds: 120,
      speakSeconds: 120,
    },
    guidanceNote:
      "Gliedern Sie klar: Einleitung – Vorteile – Nachteile – Fazit. Redemittel: „Zunächst …“, „Ein weiterer Aspekt …“, „Abschließend …“.",
  },
];

// TestDaF — original practice items (CEFR B2–C1). Four independent sections; each
// section is scored 0–20 → TDN and NEVER summed. NO total, NO pass/fail anywhere.
//
// ORIGINALITY (doctrine #1): every text, question and task below is ORIGINAL to
// AlmiGoethe — never copied or derived from TestDaF / g.a.s.t. / TestDaF-Institut
// materials, past papers or Modelltests. Written fresh in the exam's STYLE only.
//
// Density target: 16 items/section (full build). This file is filled section-by-
// section; see the count logged by `npm run validate:exam-seed`.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TESTDAF;

export const ITEMS: ExamItemInput[] = [
  // ---------------------------------------------------------------- LESEVERSTEHEN
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TESTDAF_LV_MCQ",
    title: "Urbane Dachgärten",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "In immer mehr europäischen Städten werden Dächer von Wohnhäusern und Bürogebäuden begrünt. Was lange als teure Spielerei galt, gewinnt heute an praktischer Bedeutung. Bepflanzte Dächer speichern Regenwasser, das sonst die Kanalisation belastet, und geben es verzögert wieder ab. Zugleich kühlen die Pflanzen an heißen Tagen ihre Umgebung, weil Feuchtigkeit verdunstet. Kritiker weisen allerdings darauf hin, dass die Anlage und Pflege solcher Gärten erhebliche Kosten verursacht und dass sich nicht jedes Dach ohne aufwendige Verstärkung eignet. Fachleute empfehlen deshalb, schon beim Neubau die zusätzliche Last einzuplanen, statt bestehende Gebäude nachträglich umzurüsten.",
      questions: [
        {
          id: "q1",
          stem: "Was war die Begrünung von Dächern früher vor allem?",
          options: [
            { id: "a", text: "eine gesetzliche Vorschrift" },
            { id: "b", text: "eine kostspielige Besonderheit" },
            { id: "c", text: "eine verbreitete Gewohnheit" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Wie wirken sich begrünte Dächer auf das Regenwasser aus?",
          options: [
            { id: "a", text: "Sie leiten es sofort in die Kanalisation." },
            { id: "b", text: "Sie halten es zurück und geben es später ab." },
            { id: "c", text: "Sie verhindern jeden Wasserabfluss vollständig." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Was empfehlen Fachleute laut Text?",
          options: [
            { id: "a", text: "die zusätzliche Last bereits beim Neubau zu berücksichtigen" },
            { id: "b", text: "alte Gebäude bevorzugt nachzurüsten" },
            { id: "c", text: "auf eine Verstärkung der Dächer zu verzichten" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote:
      "Achten Sie auf Signalwörter wie „allerdings“ und „deshalb“ — sie zeigen Gegensatz und Schlussfolgerung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TESTDAF_LV_MCQ",
    title: "Der Wandel des Ehrenamts",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Das klassische Ehrenamt, bei dem sich Menschen über Jahre einem einzigen Verein verpflichten, verliert an Zuspruch. An seine Stelle tritt zunehmend ein projektbezogenes Engagement: Freiwillige helfen für einige Wochen bei einer konkreten Aufgabe und ziehen sich danach wieder zurück. Soziologen sehen darin keinen Rückgang der Hilfsbereitschaft, sondern eine veränderte Form. Gerade jüngere Menschen möchten flexibel bleiben und den Sinn ihres Einsatzes unmittelbar erkennen. Für die Organisationen bedeutet das jedoch eine Herausforderung, denn kurzfristige Helfer müssen häufiger eingearbeitet werden, und langfristige Verantwortung übernimmt kaum noch jemand.",
      questions: [
        {
          id: "q1",
          stem: "Wie verändert sich das Engagement laut Text?",
          options: [
            { id: "a", text: "Es wird stärker auf einzelne Projekte ausgerichtet." },
            { id: "b", text: "Es verschwindet fast vollständig." },
            { id: "c", text: "Es bindet Menschen länger an einen Verein." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Wie bewerten Soziologen diese Entwicklung?",
          options: [
            { id: "a", text: "als Beweis für sinkende Hilfsbereitschaft" },
            { id: "b", text: "als bloßen Wandel der Form" },
            { id: "c", text: "als vorübergehende Modeerscheinung" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Worin liegt das Problem für die Organisationen?",
          options: [
            { id: "a", text: "Es gibt zu viele langfristige Verantwortliche." },
            { id: "b", text: "Kurzfristige Helfer müssen öfter eingearbeitet werden." },
            { id: "c", text: "Jüngere Menschen wollen sich gar nicht engagieren." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„Sinn unmittelbar erkennen“ heißt: den Nutzen sofort sehen. Formulierungen umschreiben hilft.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TESTDAF_LV_TF",
    title: "Nachtzüge in Europa",
    prompt: "Lesen Sie den Text und entscheiden Sie: richtig oder falsch?",
    difficulty: "STRETCH",
    topicTag: "verkehr",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Entscheiden Sie für jede Aussage: richtig oder falsch.",
      passage:
        "Nach Jahren des Niedergangs erleben Nachtzüge in Europa eine Rückkehr. Mehrere Bahngesellschaften haben neue Verbindungen eingerichtet, weil die Nachfrage nach klimafreundlichem Reisen steigt. Ein Nachtzug spart den Reisenden eine Hotelübernachtung und verbindet weit entfernte Städte ohne Flug. Dennoch bleibt das Angebot begrenzt: Die Waggons sind teuer in der Anschaffung, und der Betrieb rechnet sich nur bei guter Auslastung. Fachleute betonen, dass ohne staatliche Unterstützung viele Strecken nicht wirtschaftlich zu führen wären.",
      questions: [
        {
          id: "q1",
          stem: "Die Zahl der Nachtzugverbindungen ist zuletzt gestiegen.",
          options: [
            { id: "r", text: "richtig" },
            { id: "f", text: "falsch" },
          ],
          answer: "r",
        },
        {
          id: "q2",
          stem: "Nachtzüge sind für die Reisenden immer günstiger als jedes andere Verkehrsmittel.",
          options: [
            { id: "r", text: "richtig" },
            { id: "f", text: "falsch" },
          ],
          answer: "f",
        },
        {
          id: "q3",
          stem: "Laut Fachleuten sind viele Strecken ohne staatliche Hilfe kaum rentabel.",
          options: [
            { id: "r", text: "richtig" },
            { id: "f", text: "falsch" },
          ],
          answer: "r",
        },
      ],
    },
    guidanceNote: "Bei richtig/falsch zählt der genaue Wortlaut — „immer günstiger“ ist absoluter als der Text sagt.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TESTDAF_LV_MCQ",
    title: "Homeoffice und Produktivität",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Ob das Arbeiten von zu Hause die Produktivität steigert, lässt sich nicht pauschal beantworten. Studien kommen zu unterschiedlichen Ergebnissen, die stark von der Art der Tätigkeit abhängen. Wer konzentriert und allein arbeitet, profitiert oft von der ruhigen Umgebung. Aufgaben hingegen, die enge Abstimmung im Team verlangen, leiden mitunter unter den fehlenden spontanen Gesprächen. Viele Unternehmen setzen deshalb auf Mischmodelle, bei denen die Beschäftigten einige Tage im Büro und andere zu Hause verbringen. Entscheidend sei, so Fachleute, nicht der Ort, sondern eine klare Absprache über Erreichbarkeit und Ziele.",
      questions: [
        {
          id: "q1",
          stem: "Was sagt der Text über die Produktivität im Homeoffice?",
          options: [
            { id: "a", text: "Sie steigt in jedem Fall." },
            { id: "b", text: "Sie hängt von der Art der Tätigkeit ab." },
            { id: "c", text: "Sie sinkt grundsätzlich." },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Welche Tätigkeiten leiden eher im Homeoffice?",
          options: [
            { id: "a", text: "solche, die viel Abstimmung im Team brauchen" },
            { id: "b", text: "solche, die konzentriertes Alleinarbeiten verlangen" },
            { id: "c", text: "solche, die keine Kommunikation erfordern" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was ist laut Fachleuten entscheidend?",
          options: [
            { id: "a", text: "der Arbeitsort" },
            { id: "b", text: "klare Absprachen über Erreichbarkeit und Ziele" },
            { id: "c", text: "die Zahl der Bürotage" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„nicht der Ort, sondern …“ betont den eigentlichen Punkt — solche Kontraste sind oft die Lösung.",
  },

  // ----------------------------------------------------------------- HOERVERSTEHEN
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TESTDAF_HV_MCQ",
    title: "Ansage in der Universitätsbibliothek",
    prompt: "Hören Sie die Ansage und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "studium",
    timeLimitSeconds: 480,
    payload: {
      instructions: "Sie hören die Ansage einmal. Wählen Sie die richtige Antwort.",
      audioScript:
        "Liebe Besucherinnen und Besucher, wir möchten Sie darauf hinweisen, dass die Bibliothek in der Prüfungszeit ihre Öffnungszeiten verlängert. Ab kommendem Montag hat der Lesesaal bis Mitternacht geöffnet. Bitte beachten Sie, dass die Ausleihe der Bücher weiterhin nur bis achtzehn Uhr möglich ist. Für die Rückgabe steht Ihnen rund um die Uhr der Automat im Eingangsbereich zur Verfügung. Wir bitten Sie außerdem, im Lesesaal auf Gespräche zu verzichten und Ihre Telefone stummzuschalten.",
      questions: [
        {
          id: "q1",
          stem: "Bis wann ist der Lesesaal ab Montag geöffnet?",
          options: [
            { id: "a", text: "bis 18 Uhr" },
            { id: "b", text: "bis Mitternacht" },
            { id: "c", text: "rund um die Uhr" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was ist nur bis 18 Uhr möglich?",
          options: [
            { id: "a", text: "die Rückgabe der Bücher" },
            { id: "b", text: "der Zutritt zum Lesesaal" },
            { id: "c", text: "die Ausleihe der Bücher" },
          ],
          answer: "c",
        },
        {
          id: "q3",
          stem: "Worum werden die Besucher im Lesesaal gebeten?",
          options: [
            { id: "a", text: "die Telefone stummzuschalten" },
            { id: "b", text: "die Fenster zu schließen" },
            { id: "c", text: "die Bücher selbst einzuordnen" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Zahlen und Uhrzeiten sind typische Stolperstellen — notieren Sie sie beim Hören sofort.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TESTDAF_HV_DIALOG",
    title: "Gespräch über ein Praktikum",
    prompt: "Hören Sie das Gespräch und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Sie hören ein Gespräch zwischen zwei Studierenden. Wählen Sie die richtige Antwort.",
      audioScript:
        "MAREK: Und, hast du schon einen Platz für das Pflichtpraktikum gefunden? JANA: Ja, endlich. Bei einem kleinen Verlag hier in der Stadt. Ich fange im September an. MAREK: Toll. Ist es bezahlt? JANA: Nur eine kleine Aufwandsentschädigung, aber darum geht es mir ehrlich gesagt nicht. Ich möchte vor allem sehen, wie das Lektorat wirklich arbeitet. MAREK: Verstehe. Ich suche noch. Große Firmen wollen meistens drei Monate, und das passt mir zeitlich nicht. JANA: Dann schau dich auch bei kleineren Betrieben um. Die sind oft flexibler, was die Dauer angeht.",
      questions: [
        {
          id: "q1",
          stem: "Warum hat Jana sich für den Verlag entschieden?",
          options: [
            { id: "a", text: "wegen der guten Bezahlung" },
            { id: "b", text: "weil sie die praktische Arbeit kennenlernen möchte" },
            { id: "c", text: "weil das Praktikum nur einen Monat dauert" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was ist für Marek bei großen Firmen ein Problem?",
          options: [
            { id: "a", text: "die verlangte Dauer von drei Monaten" },
            { id: "b", text: "die fehlende Bezahlung" },
            { id: "c", text: "der Arbeitsort außerhalb der Stadt" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Was rät Jana ihrem Kommilitonen?",
          options: [
            { id: "a", text: "sich nur bei großen Firmen zu bewerben" },
            { id: "b", text: "das Praktikum zu verschieben" },
            { id: "c", text: "sich auch bei kleineren Betrieben umzusehen" },
          ],
          answer: "c",
        },
      ],
    },
    guidanceNote: "In Dialogen lohnt es sich, auf Begründungen mit „weil“ und „darum geht es mir“ zu achten.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TESTDAF_HV_LECTURE",
    title: "Kurzvortrag: Schlaf und Lernen",
    prompt: "Hören Sie den Vortragsausschnitt und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 600,
    payload: {
      instructions: "Sie hören einen kurzen Vortrag. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag. In meinem heutigen Beitrag möchte ich auf den Zusammenhang zwischen Schlaf und Gedächtnis eingehen. Zahlreiche Untersuchungen deuten darauf hin, dass das Gehirn im Schlaf das am Tag Gelernte ordnet und festigt. Besonders die Tiefschlafphase in der ersten Nachthälfte scheint dabei eine Rolle zu spielen. Wer nach dem Lernen ausreichend schläft, kann sich am nächsten Tag oft besser erinnern als jemand, der wach bleibt. Daraus folgt allerdings nicht, dass man im Schlaf neue Inhalte aufnehmen könnte — diese verbreitete Vorstellung ist wissenschaftlich nicht haltbar.",
      questions: [
        {
          id: "q1",
          stem: "Was geschieht laut Vortrag im Schlaf mit dem Gelernten?",
          options: [
            { id: "a", text: "Es wird geordnet und gefestigt." },
            { id: "b", text: "Es geht vollständig verloren." },
            { id: "c", text: "Es wird durch neue Inhalte ersetzt." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Phase wird besonders hervorgehoben?",
          options: [
            { id: "a", text: "der Tiefschlaf in der ersten Nachthälfte" },
            { id: "b", text: "der leichte Schlaf am Morgen" },
            { id: "c", text: "die Wachphasen zwischen den Zyklen" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Welche Vorstellung bezeichnet der Vortragende als nicht haltbar?",
          options: [
            { id: "a", text: "dass Schlaf die Erinnerung verbessert" },
            { id: "b", text: "dass man im Schlaf neue Inhalte lernen kann" },
            { id: "c", text: "dass ausreichender Schlaf wichtig ist" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„Daraus folgt allerdings nicht …“ signalisiert eine Einschränkung — häufig die kniffligste Frage.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TESTDAF_HV_MCQ",
    title: "Telefonische Terminabsage",
    prompt: "Hören Sie das Telefonat und beantworten Sie die Fragen.",
    difficulty: "FOUNDATION",
    topicTag: "alltag",
    timeLimitSeconds: 420,
    payload: {
      instructions: "Sie hören eine Sprachnachricht. Wählen Sie die richtige Antwort.",
      audioScript:
        "Guten Tag, hier spricht Frau Below vom Studienbüro. Ich rufe wegen Ihres Beratungstermins am Donnerstag an. Leider muss ich diesen Termin verschieben, da ich an dem Tag kurzfristig an einer Sitzung teilnehmen muss. Ich könnte Ihnen stattdessen den Freitag um zehn Uhr oder den Montag am Nachmittag anbieten. Bitte rufen Sie mich zurück und sagen Sie mir, was Ihnen besser passt. Sie erreichen mich am besten vormittags. Vielen Dank und auf Wiederhören.",
      questions: [
        {
          id: "q1",
          stem: "Warum ruft Frau Below an?",
          options: [
            { id: "a", text: "Sie möchte den Termin verschieben." },
            { id: "b", text: "Sie möchte den Termin bestätigen." },
            { id: "c", text: "Sie möchte den Termin ganz absagen." },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welche Alternativen bietet sie an?",
          options: [
            { id: "a", text: "Freitagvormittag oder Montagnachmittag" },
            { id: "b", text: "nur den Montagvormittag" },
            { id: "c", text: "Donnerstag oder Freitag" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wann ist Frau Below am besten erreichbar?",
          options: [
            { id: "a", text: "am Abend" },
            { id: "b", text: "am Vormittag" },
            { id: "c", text: "am Wochenende" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "Sprachnachrichten enthalten oft zwei Optionen — merken Sie sich beide, bevor Sie antworten.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Studiengebühren – ein strukturierter Text",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "In einer Diskussion über die Finanzierung von Hochschulen wird vorgeschlagen, allgemeine Studiengebühren einzuführen. Eine Grafik zeigt, dass die Zahl der Studierenden in den letzten zehn Jahren deutlich gestiegen ist, während die staatlichen Mittel pro Kopf gesunken sind.",
      instruction:
        "Beschreiben Sie zunächst die in der Situation genannte Entwicklung. Nennen Sie danach Argumente für und gegen Studiengebühren und begründen Sie am Ende Ihre eigene Position. Achten Sie auf einen klaren Aufbau und auf Verbindungswörter.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote:
      "Gliedern Sie in Einleitung, Beschreibung der Daten, Argumente (pro/kontra) und Fazit. Verwenden Sie Konnektoren wie „einerseits/andererseits“, „zwar … aber“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Digitale Geräte im Unterricht",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "An vielen Schulen wird darüber gestritten, ob Tablets den Unterricht verbessern. Eine Übersicht zeigt: Ein Teil der Lehrkräfte berichtet von größerer Motivation der Schüler, ein anderer Teil beklagt häufige Ablenkung.",
      instruction:
        "Fassen Sie die unterschiedlichen Erfahrungen aus der Übersicht zusammen. Erörtern Sie anschließend Vor- und Nachteile digitaler Geräte im Unterricht und formulieren Sie eine eigene, begründete Meinung.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Vermeiden Sie bloße Aufzählungen. Verknüpfen Sie Argumente logisch und wägen Sie ab.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Wohnen in der Stadt oder auf dem Land",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Immer mehr junge Familien überlegen, ob sie in der Stadt bleiben oder aufs Land ziehen sollen. Steigende Mieten in den Städten stehen längeren Arbeitswegen auf dem Land gegenüber.",
      instruction:
        "Stellen Sie die beiden Möglichkeiten gegenüber. Beschreiben Sie die genannten Vor- und Nachteile, ergänzen Sie eigene Überlegungen und begründen Sie, welche Lösung Sie für sinnvoller halten.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Eine klare Gegenüberstellung (Stadt ↔ Land) gibt dem Text Struktur. Schließen Sie mit einem begründeten Fazit.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Ehrenamtliches Engagement fördern",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Eine Kommune möchte mehr Menschen für ehrenamtliche Tätigkeiten gewinnen. Zur Diskussion steht, ob freiwilliges Engagement mit kleinen finanziellen Anreizen belohnt werden soll.",
      instruction:
        "Beschreiben Sie das Anliegen der Kommune. Diskutieren Sie, ob finanzielle Anreize ehrenamtliches Engagement stärken oder eher schwächen, und begründen Sie Ihre eigene Einschätzung.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Denken Sie an mögliche Nebenwirkungen: Wird Ehrenamt durch Geld zur Erwerbsarbeit? Solche Überlegungen zeigen Tiefe.",
  },

  // ------------------------------------------------------------- MUENDLICHER_AUSDRUCK
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_DESCRIBE",
    title: "Eine Grafik beschreiben: Freizeitverhalten",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie nehmen an einem Seminar teil. Eine Kommilitonin bittet Sie, eine Grafik zum Freizeitverhalten junger Menschen zu beschreiben. Die Grafik zeigt, dass digitale Medien den größten Anteil einnehmen, gefolgt von Sport und sozialen Treffen.",
      instruction:
        "Beschreiben Sie den Aufbau der Grafik und die wichtigsten Angaben. Nennen Sie, welcher Bereich am stärksten und welcher am schwächsten vertreten ist.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote:
      "Nützliche Redemittel: „Die Grafik zeigt …“, „Den größten Anteil hat …“, „Am wenigsten verbreitet ist …“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_OPINION",
    title: "Stellung nehmen: kostenloser Nahverkehr",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "verkehr",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "In einem Gespräch mit einem Freund geht es um die Idee, den öffentlichen Nahverkehr kostenlos anzubieten. Ihr Freund findet das übertrieben und zu teuer.",
      instruction:
        "Sagen Sie Ihre Meinung zu kostenlosem Nahverkehr. Nennen Sie mindestens zwei Argumente und gehen Sie auf den Einwand Ihres Freundes ein.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Reagieren Sie auf den Einwand: „Ich verstehe deinen Punkt, aber …“. Das zeigt Interaktionsfähigkeit.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_ADVISE",
    title: "Einen Rat geben: Zimmersuche",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Eine ausländische Studentin sucht ein Zimmer und weiß nicht, ob sie in ein Wohnheim oder in eine Wohngemeinschaft ziehen soll. Sie fragt Sie um Rat.",
      instruction:
        "Geben Sie ihr einen Rat. Vergleichen Sie kurz Wohnheim und WG und begründen Sie, was Sie empfehlen würden.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "Redemittel für Rat: „An deiner Stelle würde ich …“, „Es kommt darauf an, ob …“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_PLAN",
    title: "Etwas gemeinsam planen: Exkursion",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Ihre Lerngruppe möchte eine gemeinsame Exkursion in eine andere Stadt organisieren. Es geht um das Reiseziel, den Termin und die Anreise.",
      instruction:
        "Machen Sie Vorschläge zur Planung der Exkursion. Nennen Sie ein mögliches Ziel, einen passenden Termin und eine Idee zur Anreise und begründen Sie Ihre Vorschläge.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "Strukturieren Sie: erst Ziel, dann Termin, dann Anreise. „Ich schlage vor, dass wir …“ hilft.",
  },
];

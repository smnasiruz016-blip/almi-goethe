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
  // LESEVERSTEHEN lives in ./testdaf-leseverstehen.ts.
  // Its 16 items here carried two invented taskTypes (TESTDAF_LV_MCQ / _LV_TF) with
  // three questions each; the real section has SEVEN Aufgaben with published item
  // counts (5/4/7/4/7/4/3 = 34). They were re-authored, not relabelled, and moved to
  // their own file so this one stays readable as the remaining sections follow.

  // HOERVERSTEHEN lives in ./testdaf-hoerverstehen.ts.
  // Its 16 items here carried four invented taskTypes (_HV_MCQ / _HV_DIALOG /
  // _HV_LECTURE / _HV_ANNOUNCE) with three questions each; the real section has SEVEN
  // Aufgaben with published item counts (5/4/2/6/4/5/4 = 30). Re-authored, not
  // relabelled.

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
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Nachrichten über soziale Medien",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "medien",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Eine Umfrage zeigt, dass immer mehr junge Menschen sich hauptsächlich über soziale Medien informieren statt über Zeitungen oder das Fernsehen. Ältere Befragte nutzen weiterhin überwiegend klassische Medien.",
      instruction:
        "Beschreiben Sie die in der Umfrage genannte Entwicklung. Erörtern Sie Vor- und Nachteile, wenn Nachrichten vor allem über soziale Medien bezogen werden, und begründen Sie am Ende Ihre eigene Position.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Denken Sie an Aktualität und Reichweite auf der einen, Verlässlichkeit und Filterblasen auf der anderen Seite.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Kostenloser Nahverkehr",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "STRETCH",
    topicTag: "verkehr",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "In einer Stadt wird vorgeschlagen, Busse und Bahnen kostenlos anzubieten, um den Autoverkehr zu verringern. Eine Übersicht zeigt: Der Nahverkehr ist stark ausgelastet, gleichzeitig fehlen der Stadt Einnahmen.",
      instruction:
        "Fassen Sie das Vorhaben und die genannten Zahlen zusammen. Diskutieren Sie, ob ein kostenloser Nahverkehr sinnvoll ist, und formulieren Sie eine begründete eigene Meinung.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Wägen Sie Umweltnutzen gegen Finanzierung ab. Ein begründetes Fazit rundet den Text ab.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Tourismus in beliebten Städten",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Manche beliebten Städte verzeichnen so viele Besucher, dass Anwohner sich über volle Straßen und steigende Mieten beklagen. Zugleich hängen viele Arbeitsplätze vom Tourismus ab.",
      instruction:
        "Stellen Sie den Konflikt dar. Erörtern Sie Vor- und Nachteile des starken Tourismus für eine Stadt und begründen Sie, welche Maßnahmen Sie für sinnvoll halten.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Konkrete Maßnahmen (Besucherlenkung, Gebühren) machen den Schluss überzeugender als eine reine Meinung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Pflichtpraktikum im Studium",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "An einer Hochschule wird diskutiert, ob ein mehrmonatiges Pflichtpraktikum in jeden Studiengang aufgenommen werden soll. Befürworter betonen den Praxisbezug, Gegner die zusätzliche Belastung.",
      instruction:
        "Beschreiben Sie den Vorschlag. Erörtern Sie Argumente für und gegen ein verpflichtendes Praktikum und begründen Sie Ihre eigene Sichtweise.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Unterscheiden Sie zwischen fachnahen und fachfernen Studiengängen — das zeigt differenziertes Denken.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Weniger Fleisch essen",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "STRETCH",
    topicTag: "umwelt",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "In einer Diskussion über Ernährung und Umwelt wird gefordert, in Kantinen mehr vegetarische Gerichte anzubieten und den Fleischanteil zu senken. Eine Grafik zeigt, dass die Erzeugung von Fleisch besonders viele Ressourcen verbraucht.",
      instruction:
        "Beschreiben Sie die in der Grafik genannte Entwicklung. Erörtern Sie, ob Kantinen den Fleischanteil senken sollten, und begründen Sie Ihre Position.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Achten Sie auf die Frage der Freiheit: Angebot lenken oder vorschreiben? Solche Abwägungen wirken reif.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Videospiele und Lernen",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Es wird diskutiert, ob Videospiele beim Lernen helfen können. Manche Studien berichten von besseren Reaktionen und mehr Motivation, andere von Ablenkung und zu langer Bildschirmzeit.",
      instruction:
        "Fassen Sie die unterschiedlichen Befunde zusammen. Erörtern Sie Chancen und Risiken von Videospielen für das Lernen und formulieren Sie eine begründete eigene Meinung.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Es kommt auf Art und Maß an — differenzieren Sie zwischen Lernspielen und reiner Unterhaltung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Ein Jahr zwischen Schule und Studium",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Viele junge Menschen überlegen, nach der Schule ein Jahr zu pausieren, um zu reisen, zu arbeiten oder sich freiwillig zu engagieren, bevor sie ein Studium beginnen.",
      instruction:
        "Beschreiben Sie diese Überlegung. Erörtern Sie Vor- und Nachteile eines solchen Zwischenjahres und begründen Sie, was Sie empfehlen würden.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Denken Sie an Reife und Orientierung einerseits, Zeitverlust und Wiedereinstieg andererseits.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Online-Handel und Innenstädte",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Der Online-Handel wächst, während in vielen Innenstädten Geschäfte schließen. Eine Übersicht zeigt sinkende Besucherzahlen in den Fußgängerzonen und steigende Paketmengen.",
      instruction:
        "Beschreiben Sie die genannte Entwicklung. Erörtern Sie ihre Folgen für die Innenstädte und begründen Sie, welche Gegenmaßnahmen Sie für sinnvoll halten.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Verknüpfen Sie Ursache und Folge klar mit „dadurch“, „infolgedessen“, „um … zu“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Ganztagsschule",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Es wird diskutiert, ob mehr Schulen zu Ganztagsschulen werden sollen, in denen die Kinder auch am Nachmittag betreut werden und lernen. Befürworter nennen bessere Förderung, Gegner weniger Freizeit.",
      instruction:
        "Beschreiben Sie den Vorschlag. Erörtern Sie Argumente für und gegen die Ganztagsschule und begründen Sie Ihre eigene Position.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Beziehen Sie verschiedene Betroffene ein: Kinder, Eltern, Lehrkräfte. Das zeigt Perspektivenvielfalt.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Künstliche Intelligenz im Alltag",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "STRETCH",
    topicTag: "wissenschaft",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Programme mit künstlicher Intelligenz helfen zunehmend im Alltag, etwa beim Schreiben von Texten oder beim Übersetzen. Manche sehen darin eine große Erleichterung, andere fürchten, dass wichtige Fähigkeiten verloren gehen.",
      instruction:
        "Beschreiben Sie die Ausgangslage. Erörtern Sie Chancen und Risiken solcher Programme im Alltag und begründen Sie Ihre eigene Einschätzung.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Vermeiden Sie Pauschalurteile. „Werkzeug, nicht Ersatz“ ist eine tragfähige differenzierte Linie.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Hochschulsport für alle",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "gesundheit",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "An einer Universität wird vorgeschlagen, ein verpflichtendes Sportangebot für alle Studierenden einzuführen, um Bewegung und Ausgleich zum Lernen zu fördern.",
      instruction:
        "Beschreiben Sie den Vorschlag. Erörtern Sie Vor- und Nachteile eines verpflichtenden Sportangebots und begründen Sie, ob Sie es befürworten.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Prüfen Sie den Unterschied zwischen „Angebot fördern“ und „Pflicht“ — Zwang wirft eigene Fragen auf.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TESTDAF_SA_ARGUMENT",
    title: "Handynutzung in der Freizeit",
    prompt: "Schreiben Sie einen zusammenhängenden Text (circa 250 Wörter).",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 3600,
    payload: {
      situation:
        "Eine Erhebung zeigt, dass viele Menschen täglich mehrere Stunden mit dem Smartphone verbringen. Manche sehen darin nützliche Vernetzung, andere eine Belastung für Konzentration und Schlaf.",
      instruction:
        "Beschreiben Sie die in der Erhebung genannte Entwicklung. Erörtern Sie Vor- und Nachteile der intensiven Smartphone-Nutzung und begründen Sie Ihre eigene Meinung.",
      wordMin: 200,
      wordMax: 320,
    },
    guidanceNote: "Konkrete Beispiele (Erreichbarkeit, Schlaf, Ablenkung) machen die Erörterung anschaulicher.",
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
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_DESCRIBE",
    title: "Eine Grafik beschreiben: Verkehrsmittel zur Uni",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "In einem Seminar sollen Sie eine Grafik beschreiben, die zeigt, wie Studierende zur Universität kommen. Am häufigsten wird das Fahrrad genutzt, gefolgt von Bus und Bahn; nur wenige kommen mit dem Auto.",
      instruction:
        "Beschreiben Sie den Aufbau der Grafik und die wichtigsten Angaben. Nennen Sie das am häufigsten und das am seltensten genutzte Verkehrsmittel.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Redemittel: „An erster Stelle steht …“, „danach folgt …“, „am seltensten …“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_OPINION",
    title: "Stellung nehmen: Prüfungen oder Hausarbeiten",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "In einem Gespräch schlägt eine Kommilitonin vor, Klausuren durch Hausarbeiten zu ersetzen, weil man dabei mehr lerne. Sie sind nicht sicher, ob das für jedes Fach passt.",
      instruction:
        "Sagen Sie Ihre Meinung dazu. Nennen Sie mindestens zwei Argumente und gehen Sie auf die Ansicht Ihrer Kommilitonin ein.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Differenzieren Sie nach Fach: „In manchen Fächern … in anderen dagegen …“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_ADVISE",
    title: "Einen Rat geben: Auslandssemester",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Ein Freund überlegt, ein Auslandssemester zu machen, hat aber Sorge, dadurch Zeit zu verlieren. Er fragt Sie um Rat.",
      instruction:
        "Geben Sie ihm einen Rat. Nennen Sie Vor- und Nachteile eines Auslandssemesters und begründen Sie, was Sie ihm empfehlen würden.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "„An deiner Stelle würde ich …, weil …“ verbindet Rat und Begründung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_PLAN",
    title: "Etwas gemeinsam planen: Abschiedsfeier",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Ihre Lerngruppe möchte für eine beliebte Dozentin, die die Universität verlässt, eine kleine Abschiedsfeier organisieren. Es geht um Ort, Zeitpunkt und ein passendes Geschenk.",
      instruction:
        "Machen Sie Vorschläge zur Planung. Nennen Sie einen Ort, einen Zeitpunkt und eine Geschenkidee und begründen Sie Ihre Vorschläge.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "Ordnen Sie Ihre Vorschläge: „Zunächst zum Ort … Was den Zeitpunkt angeht … Als Geschenk …“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_DESCRIBE",
    title: "Eine Grafik beschreiben: Nutzung der Bibliothek",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "studium",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie sollen eine Grafik beschreiben, die zeigt, zu welchen Tageszeiten die Universitätsbibliothek besonders voll ist. Am stärksten besucht ist sie am späten Nachmittag, am ruhigsten am frühen Morgen.",
      instruction:
        "Beschreiben Sie, was die Grafik darstellt. Nennen Sie die Zeit mit den meisten und die Zeit mit den wenigsten Besuchern.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Zeitangaben klar benennen: „am frühen Morgen“, „gegen Mittag“, „am späten Nachmittag“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_OPINION",
    title: "Stellung nehmen: Schuluniform",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "gesellschaft",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "In einem Gespräch findet ein Freund, dass Schuluniformen eine gute Idee wären, weil sie Unterschiede verringern. Sie sehen das nicht ganz so.",
      instruction:
        "Sagen Sie Ihre Meinung zu Schuluniformen. Nennen Sie zwei Argumente und reagieren Sie auf die Ansicht Ihres Freundes.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "„Ich sehe das etwas anders, weil …“ leitet höflich eine Gegenposition ein.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_ADVISE",
    title: "Einen Rat geben: Prüfungsangst",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Eine Kommilitonin erzählt Ihnen, dass sie vor Prüfungen so nervös wird, dass sie kaum schlafen kann. Sie bittet Sie um einen Rat.",
      instruction:
        "Geben Sie ihr einen Rat. Machen Sie mindestens zwei Vorschläge, wie sie mit der Nervosität umgehen kann, und begründen Sie diese.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "Konkrete Tipps (Zeitplan, Pausen, Atmung) wirken hilfreicher als allgemeine Beruhigung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_PLAN",
    title: "Etwas gemeinsam planen: Lernwochenende",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Ihre Lerngruppe möchte vor den Prüfungen ein gemeinsames Lernwochenende machen. Zu klären sind Ort, Aufteilung der Themen und Pausen.",
      instruction:
        "Machen Sie Vorschläge zur Organisation. Nennen Sie einen Ort, eine Idee zur Aufteilung der Themen und einen Vorschlag zu den Pausen und begründen Sie sie.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "„Ich schlage vor, dass jeder ein Thema vorbereitet“ zeigt konkrete Planung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_DESCRIBE",
    title: "Eine Grafik beschreiben: Beliebte Studienfächer",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "Sie sollen eine Grafik beschreiben, die zeigt, welche Studienfächer bei Studienanfängern am beliebtesten sind. An der Spitze stehen Wirtschaft und Informatik, weniger häufig gewählt werden geisteswissenschaftliche Fächer.",
      instruction:
        "Beschreiben Sie, was die Grafik zeigt. Nennen Sie die beliebtesten und die selteneren Fächer und beschreiben Sie kurz den Gesamteindruck.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Vergleichen Sie: „deutlich häufiger als …“, „im Vergleich dazu seltener …“.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_OPINION",
    title: "Stellung nehmen: Rauchfreier Campus",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "gesundheit",
    timeLimitSeconds: 180,
    payload: {
      situation:
        "An Ihrer Universität wird überlegt, das gesamte Gelände rauchfrei zu machen. Ein Bekannter findet das übertrieben, weil dann niemand mehr in der Pause rauchen dürfe.",
      instruction:
        "Sagen Sie Ihre Meinung zu einem rauchfreien Campus. Nennen Sie zwei Argumente und gehen Sie auf den Einwand Ihres Bekannten ein.",
      prepSeconds: 60,
      speakSeconds: 90,
    },
    guidanceNote: "Wägen Sie Gesundheitsschutz gegen persönliche Freiheit ab und beziehen Sie klar Position.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_ADVISE",
    title: "Einen Rat geben: allein oder in einer WG wohnen",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "FOUNDATION",
    topicTag: "wohnen",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Ein neuer Student weiß nicht, ob er allein oder in einer Wohngemeinschaft wohnen soll. Er fragt Sie um Ihre Meinung.",
      instruction:
        "Geben Sie ihm einen Rat. Vergleichen Sie kurz beide Möglichkeiten und begründen Sie, was Sie empfehlen würden.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "„Es kommt darauf an, ob du lieber Ruhe oder Gesellschaft hast“ zeigt Abwägung.",
  },
  {
    exam: "TESTDAF",
    level: L,
    section: SECTION.MUENDLICHER_AUSDRUCK,
    taskType: "TESTDAF_MA_PLAN",
    title: "Etwas gemeinsam planen: Willkommensabend",
    prompt: "Bereiten Sie sich kurz vor und sprechen Sie dann.",
    difficulty: "CORE",
    topicTag: "studium",
    timeLimitSeconds: 150,
    payload: {
      situation:
        "Ihre Fachschaft möchte einen Willkommensabend für die neuen Erstsemester organisieren. Zu besprechen sind Programm, Ort und wie man die Neuen erreicht.",
      instruction:
        "Machen Sie Vorschläge zur Planung. Nennen Sie eine Programmidee, einen Ort und einen Weg, die Erstsemester einzuladen, und begründen Sie Ihre Vorschläge.",
      prepSeconds: 45,
      speakSeconds: 75,
    },
    guidanceNote: "Denken Sie an die Zielgruppe: Wie erreicht man neue Studierende am besten?",
  },
];

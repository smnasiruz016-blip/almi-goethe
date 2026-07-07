// telc Deutsch B2 — original practice items (CEFR B2). Section weights are verified
// (LV 25, SB 10, HV 25, SA 15, Sprechen 25). The exact PASS THRESHOLD is not yet
// verbatim-confirmed, so the engine reports B2 with `thresholdVerified: false` and
// the UI states the threshold is pending official confirmation — it never silently
// implies 60%. The practice CONTENT below is unaffected by that flag.
//
// ORIGINALITY (doctrine #1): every text, gap and task is ORIGINAL to AlmiGoethe —
// never copied or derived from telc materials, Handbücher or Übungstests.
//
// Density target: 16 items/section (full build). Filled section-by-section.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_B2;
const EXAM = "TELC_B2" as const;

export const ITEMS: ExamItemInput[] = [
  // ---------------------------------------------------------------- LESEVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Reparieren statt wegwerfen",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "In vielen Städten haben sich sogenannte Reparaturcafés etabliert. Dort helfen ehrenamtliche Fachleute dabei, defekte Geräte wieder instand zu setzen, statt sie zu entsorgen. Die Idee verbindet zwei Anliegen: Sie schont Ressourcen und bringt zugleich Menschen unterschiedlichen Alters ins Gespräch. Wer ein kaputtes Radio oder eine wackelige Lampe mitbringt, lernt oft nebenbei, wie das Gerät funktioniert. Kritiker geben allerdings zu bedenken, dass sich viele moderne Produkte kaum noch reparieren lassen, weil Hersteller sie fest verkleben oder Ersatzteile nicht anbieten. Genau hier setzen Forderungen nach einem „Recht auf Reparatur“ an, das Verbraucher europaweit stärken soll.",
      questions: [
        {
          id: "q1",
          stem: "Welche zwei Anliegen verbindet die Idee der Reparaturcafés?",
          options: [
            { id: "a", text: "Ressourcen schonen und Menschen ins Gespräch bringen" },
            { id: "b", text: "Geld verdienen und Werbung machen" },
            { id: "c", text: "neue Geräte verkaufen und Personal ausbilden" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Welchen Einwand nennen Kritiker?",
          options: [
            { id: "a", text: "Reparaturen seien immer zu teuer." },
            { id: "b", text: "Viele moderne Produkte lassen sich kaum reparieren." },
            { id: "c", text: "Es fehle an ehrenamtlichen Helfern." },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Worauf zielt das „Recht auf Reparatur“?",
          options: [
            { id: "a", text: "die Hersteller von Vorschriften zu befreien" },
            { id: "b", text: "die Verbraucher europaweit zu stärken" },
            { id: "c", text: "Reparaturcafés zu verbieten" },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„Genau hier setzen … an“ verweist auf den zuvor genannten Punkt — lesen Sie den Satz davor mit.",
  },
  {
    exam: EXAM,
    level: L,
    section: SECTION.LESEVERSTEHEN,
    taskType: "TELC_B2_LV_MCQ",
    title: "Die Vier-Tage-Woche auf dem Prüfstand",
    prompt: "Lesen Sie den Text und beantworten Sie die Fragen.",
    difficulty: "STRETCH",
    topicTag: "arbeit",
    timeLimitSeconds: 720,
    payload: {
      instructions: "Wählen Sie für jede Frage die richtige Antwort (a, b oder c).",
      passage:
        "Mehrere Unternehmen haben in Pilotprojekten getestet, ob sich die Arbeitszeit auf vier Tage verkürzen lässt, ohne dass der Lohn sinkt. Die Zwischenbilanz fällt gemischt aus. Viele Beschäftigte berichten von weniger Stress und besserer Erholung, und in einigen Betrieben blieb die Leistung stabil, weil Besprechungen gestrafft und Abläufe verbessert wurden. In anderen Branchen jedoch, in denen die Arbeit unmittelbar an Kundenkontakt oder Schichten gebunden ist, ließ sich das Modell nur schwer umsetzen. Fachleute warnen deshalb davor, aus einzelnen Erfolgen eine allgemeine Regel abzuleiten.",
      questions: [
        {
          id: "q1",
          stem: "Was wurde in den Pilotprojekten getestet?",
          options: [
            { id: "a", text: "eine kürzere Arbeitswoche bei gleichem Lohn" },
            { id: "b", text: "eine längere Arbeitswoche mit mehr Lohn" },
            { id: "c", text: "die Abschaffung von Besprechungen" },
          ],
          answer: "a",
        },
        {
          id: "q2",
          stem: "Warum blieb die Leistung in einigen Betrieben stabil?",
          options: [
            { id: "a", text: "weil mehr Personal eingestellt wurde" },
            { id: "b", text: "weil Abläufe verbessert und Besprechungen gestrafft wurden" },
            { id: "c", text: "weil die Löhne gesenkt wurden" },
          ],
          answer: "b",
        },
        {
          id: "q3",
          stem: "Wovor warnen Fachleute?",
          options: [
            { id: "a", text: "aus einzelnen Erfolgen eine allgemeine Regel abzuleiten" },
            { id: "b", text: "das Modell überhaupt zu testen" },
            { id: "c", text: "Kundenkontakt zu vermeiden" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "Achten Sie auf die Gegenüberstellung „Viele … In anderen Branchen jedoch …“.",
  },

  // ----------------------------------------------------------------- SPRACHBAUSTEINE
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRACHBAUSTEINE,
    taskType: "TELC_B2_SB_GAP",
    title: "Rundmail an das Team",
    prompt: "Wählen Sie für jede Lücke das passende Wort.",
    difficulty: "CORE",
    topicTag: "arbeit",
    timeLimitSeconds: 540,
    payload: {
      instructions: "Wählen Sie für jede Lücke die richtige Möglichkeit (a, b oder c).",
      passage:
        "Liebe Kolleginnen und Kollegen, (1) der anstehenden Umstellung auf das neue System bitte ich Sie, an der Schulung am Freitag teilzunehmen. Wer an dem Termin verhindert ist, (2) sich bitte rechtzeitig bei mir. Die Unterlagen stelle ich Ihnen vorab zur Verfügung, (3) Sie sich vorbereiten können.",
      questions: [
        {
          id: "1",
          stem: "Lücke 1",
          options: [
            { id: "a", text: "Angesichts" },
            { id: "b", text: "Trotz" },
            { id: "c", text: "Statt" },
          ],
          answer: "a",
        },
        {
          id: "2",
          stem: "Lücke 2",
          options: [
            { id: "a", text: "meldet" },
            { id: "b", text: "melde" },
            { id: "c", text: "gemeldet" },
          ],
          answer: "a",
        },
        {
          id: "3",
          stem: "Lücke 3",
          options: [
            { id: "a", text: "damit" },
            { id: "b", text: "sodass" },
            { id: "c", text: "obwohl" },
          ],
          answer: "a",
        },
      ],
    },
    guidanceNote: "„damit“ nennt eine Absicht (Sie können sich vorbereiten). „sodass“ nennt eine Folge — hier passt die Absicht.",
  },

  // ----------------------------------------------------------------- HOERVERSTEHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.HOERVERSTEHEN,
    taskType: "TELC_B2_HV_INTERVIEW",
    title: "Radiointerview: Stadtgärten",
    prompt: "Hören Sie das Interview und beantworten Sie die Fragen.",
    difficulty: "CORE",
    topicTag: "umwelt",
    timeLimitSeconds: 660,
    payload: {
      instructions: "Sie hören ein kurzes Interview. Wählen Sie die richtige Antwort.",
      audioScript:
        "MODERATORIN: Frau Ott, Sie betreuen einen Gemeinschaftsgarten mitten in der Stadt. Was reizt die Menschen daran? FRAU OTT: Viele suchen einen Ausgleich zum Alltag und möchten wieder selbst etwas anbauen. Interessant ist, dass es weniger um den Ertrag geht als um das gemeinsame Tun. MODERATORIN: Gibt es auch Schwierigkeiten? FRAU OTT: Ja, die größte Herausforderung ist tatsächlich die Organisation. Wer gießt in den Ferien? Wer kümmert sich im Winter? Ohne verbindliche Absprachen funktioniert es nicht. MODERATORIN: Und die Stadt unterstützt Sie? FRAU OTT: Sie stellt die Fläche, aber Werkzeug und Pflanzen finanzieren wir selbst.",
      questions: [
        {
          id: "q1",
          stem: "Worum geht es den Menschen laut Frau Ott vor allem?",
          options: [
            { id: "a", text: "um einen möglichst großen Ertrag" },
            { id: "b", text: "um das gemeinsame Tun" },
            { id: "c", text: "um finanziellen Gewinn" },
          ],
          answer: "b",
        },
        {
          id: "q2",
          stem: "Was ist die größte Schwierigkeit?",
          options: [
            { id: "a", text: "die Organisation" },
            { id: "b", text: "das schlechte Wetter" },
            { id: "c", text: "der Mangel an Interesse" },
          ],
          answer: "a",
        },
        {
          id: "q3",
          stem: "Wie unterstützt die Stadt den Garten?",
          options: [
            { id: "a", text: "Sie bezahlt Werkzeug und Pflanzen." },
            { id: "b", text: "Sie stellt die Fläche zur Verfügung." },
            { id: "c", text: "Sie übernimmt die gesamte Pflege." },
          ],
          answer: "b",
        },
      ],
    },
    guidanceNote: "„weniger um … als um …“ verschiebt die Gewichtung — hören Sie genau, was wichtiger ist.",
  },

  // ------------------------------------------------------------ SCHRIFTLICHER_AUSDRUCK
  {
    exam: EXAM,
    level: L,
    section: SECTION.SCHRIFTLICHER_AUSDRUCK,
    taskType: "TELC_B2_SA_OPINION",
    title: "Forumsbeitrag: Handyverbot an Schulen",
    prompt: "Schreiben Sie einen zusammenhängenden Beitrag (circa 150 Wörter).",
    difficulty: "CORE",
    topicTag: "bildung",
    timeLimitSeconds: 2400,
    payload: {
      situation:
        "In einem Online-Forum wird diskutiert, ob Smartphones auf dem Schulgelände generell verboten werden sollten. Sie möchten sich an der Diskussion beteiligen.",
      instruction:
        "Schreiben Sie einen Forumsbeitrag. Nennen Sie Ihre Meinung, führen Sie zwei Argumente an, gehen Sie kurz auf eine Gegenmeinung ein und schließen Sie mit einem Fazit.",
      wordMin: 120,
      wordMax: 200,
    },
    guidanceNote:
      "Auf B2 wird eine klare Position mit Begründung erwartet. Verbinden Sie Ihre Argumente mit „außerdem“, „allerdings“, „daher“.",
  },

  // ---------------------------------------------------------------------- SPRECHEN
  {
    exam: EXAM,
    level: L,
    section: SECTION.SPRECHEN,
    taskType: "TELC_B2_SP_PRESENT",
    title: "Ein Thema präsentieren: Freiwilliges soziales Jahr",
    prompt: "Bereiten Sie eine kurze Präsentation vor und sprechen Sie dann.",
    difficulty: "STRETCH",
    topicTag: "gesellschaft",
    timeLimitSeconds: 210,
    payload: {
      situation:
        "Im Prüfungsteil sollen Sie ein Thema präsentieren. Ihr Thema: Sollten junge Menschen nach der Schule ein freiwilliges soziales Jahr machen?",
      instruction:
        "Präsentieren Sie das Thema strukturiert. Nennen Sie Vor- und Nachteile eines freiwilligen sozialen Jahres, bringen Sie ein Beispiel und beenden Sie mit Ihrer begründeten Meinung.",
      prepSeconds: 90,
      speakSeconds: 120,
    },
    guidanceNote: "Struktur zeigt Niveau: „Ich möchte drei Punkte ansprechen …“, „Zusammenfassend …“.",
  },
];

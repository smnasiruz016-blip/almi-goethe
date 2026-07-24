// telc Deutsch C1 Hochschule — Mündlicher Ausdruck, Teil 1B and Teil 2. Both PRODUCTIVE
// (MUENDLICHER_AUSDRUCK, AI-graded), so no answer key.
//   TELC_C1H_MA_T1B_ZUSAMMENFASSUNG — summarise a given presentation
//   TELC_C1H_MA_T2_DISKUSSION       — take a position and discuss
//
// ── SELF-STUDY FRAMING (documented adaptation, beta-g ruling) ───────────────
// In the real paired oral, Teil 1B is where the PARTNER summarises your presentation,
// and Teil 2 is a discussion BETWEEN two candidates. Neither has a partner in a
// self-study product. The adaptation is stated openly to the learner: 1B PROVIDES a
// presentation to summarise, and 2 PROVIDES a statement plus discussion points to
// respond to. This is a practice framing of the exam task, not a claim that the exam
// is solo — the situation text says so.
//
// MUENDLICHER_AUSDRUCK already holds 16 items (Teil 1A), so rule7 is met; these add the
// two missing Aufgaben to close conformance coverage. Speaking times (prep/speak) are
// this product's convention, not a published figure, and are therefore not enforced.
//
// ORIGINALITY (doctrine #1): all presentations and theses original to AlmiGoethe. No
// real institution, person or company is named.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";

const L = EXAM_LEVEL.TELC_C1_HOCHSCHULE;

const base = {
  exam: "TELC_C1_HOCHSCHULE" as const,
  level: L,
  section: SECTION.MUENDLICHER_AUSDRUCK,
  difficulty: "CORE" as const,
};

function t1b(title: string, topic: string, presentation: string): ExamItemInput {
  return {
    ...base,
    taskType: "TELC_C1H_MA_T1B_ZUSAMMENFASSUNG",
    title,
    prompt: "Fassen Sie die vorgegebene Präsentation mündlich zusammen.",
    difficulty: "STRETCH",
    topicTag: "muendlich",
    timeLimitSeconds: 240,
    payload: {
      situation:
        `In der mündlichen Prüfung fasst normalerweise Ihre Partnerin oder Ihr Partner Ihre Präsentation zusammen. Zum Üben übernehmen Sie diese Rolle selbst: Hier ist eine kurze Präsentation zum Thema „${topic}".\n\n${presentation}`,
      instruction:
        "Fassen Sie die Präsentation mündlich zusammen. Nennen Sie das Thema, geben Sie die wichtigsten Punkte in eigenen Worten wieder und schließen Sie mit dem Fazit der sprechenden Person. Bewerten Sie den Inhalt nicht, sondern geben Sie ihn sachlich wieder.",
      prepSeconds: 60,
      speakSeconds: 120,
    },
    guidanceNote:
      "Eine gute Zusammenfassung ordnet, statt aufzuzählen: Redemittel wie „Zunächst betont die Person …“, „Als Hauptargument nennt sie …“, „Abschließend kommt sie zu dem Schluss, dass …“.",
  };
}

function t2(title: string, these: string, punkte: string[]): ExamItemInput {
  return {
    ...base,
    taskType: "TELC_C1H_MA_T2_DISKUSSION",
    title,
    prompt: "Nehmen Sie Stellung und diskutieren Sie das Thema.",
    difficulty: "STRETCH",
    topicTag: "muendlich",
    timeLimitSeconds: 240,
    payload: {
      situation:
        `Im zweiten Teil diskutieren normalerweise zwei Prüflinge miteinander. Zum Üben erhalten Sie hier eine These und einige Diskussionspunkte, auf die Sie eingehen.\n\nThese: „${these}"\n\nDiskussionspunkte:\n– ${punkte.join("\n– ")}`,
      instruction:
        "Nehmen Sie zu der These begründet Stellung. Gehen Sie auf die genannten Diskussionspunkte ein, bringen Sie eigene Argumente und Beispiele und reagieren Sie auf ein mögliches Gegenargument. Schließen Sie mit einer klaren, abgewogenen Position.",
      prepSeconds: 60,
      speakSeconds: 180,
    },
    guidanceNote:
      "Auf C1-Niveau zählt das Abwägen: ein Gegenargument ernst nehmen und entkräften wiegt mehr als das bloße Aufzählen eigener Punkte. Nutzen Sie Konnektoren wie „einerseits … andererseits …“, „zwar … dennoch …“.",
  };
}

export const ITEMS: ExamItemInput[] = [
  // ── Teil 1B — Zusammenfassung ─────────────────────────────────────────────
  t1b("Zusammenfassung: Online-Prüfungen", "Sollten Prüfungen vermehrt online stattfinden?",
    "Ich möchte über Online-Prüfungen sprechen. Für sie spricht, dass sie Wege sparen und ortsunabhängig sind; gerade für Berufstätige ist das ein großer Vorteil. Dagegen steht die Sorge um Täuschung: Zu Hause lässt sich schwer kontrollieren, wer tatsächlich schreibt. Auch die Technik ist nicht überall verlässlich. Mein Fazit: Für Wissenstests eignen sich Online-Formate, für anspruchsvolle Prüfungen sollte die Präsenz die Regel bleiben."),
  t1b("Zusammenfassung: Anwesenheitspflicht", "Braucht das Studium eine Anwesenheitspflicht?",
    "Mein Thema ist die Anwesenheitspflicht in Seminaren. Befürworter sagen, nur durch regelmäßige Teilnahme entstehe echter Austausch. Kritiker halten dagegen, Anwesenheit sage nichts über das Gelernte aus und benachteilige jene, die nebenbei arbeiten müssen. Ich meine: In Übungen, die vom Mitmachen leben, ist eine Pflicht sinnvoll, in reinen Vorlesungen nicht. Man sollte also nach der Veranstaltungsart unterscheiden."),
  t1b("Zusammenfassung: Englisch in der Wissenschaft", "Sollte mehr auf Englisch publiziert werden?",
    "Es geht um die Frage, ob die Wissenschaft überwiegend auf Englisch veröffentlichen sollte. Der Vorteil liegt in der Reichweite: Englisch erreicht die meisten Lesenden. Der Nachteil ist, dass die deutsche Fachsprache verkümmert und die Öffentlichkeit den Anschluss verliert. Mein Schluss: Englisch als gemeinsame Sprache ja, aber die Hochschulen sollten das Deutsche in der Lehre bewusst weiter pflegen."),
  t1b("Zusammenfassung: Engagement als Studienleistung", "Sollte Ehrenamt angerechnet werden?",
    "Ich spreche darüber, ob gesellschaftliches Engagement als Studienleistung angerechnet werden sollte. Dafür spricht, dass Engagement wichtige Fähigkeiten schult und anerkannt gehört. Dagegen wird eingewandt, eine Anrechnung untergrabe die Freiwilligkeit; wer nur für Punkte hilft, hilft anders. Ich komme zu dem Ergebnis, dass eine Anerkennung sinnvoll ist, solange sie das Engagement nicht in eine Pflicht verwandelt."),
  t1b("Zusammenfassung: Die Vier-Tage-Woche", "Ist eine Vier-Tage-Woche sinnvoll?",
    "Mein Thema ist die Vier-Tage-Woche. Ihre Verfechter versprechen sich mehr Erholung und höhere Zufriedenheit, ohne dass die Leistung sinke. Skeptiker bezweifeln, dass sich die Arbeit einfach verdichten lasse, und verweisen auf Branchen mit festen Öffnungszeiten. Mein Fazit lautet: Ein Versuch lohnt sich dort, wo Aufgaben flexibel planbar sind; ein allgemeines Modell für alle sehe ich noch nicht."),
  t1b("Zusammenfassung: Grundlagenforschung", "Soll der Staat zweckfreie Forschung fördern?",
    "Ich möchte über die Förderung der Grundlagenforschung sprechen. Man kann fragen, warum der Staat Forschung bezahlen soll, deren Nutzen offen ist. Die Antwort: Gerade zweckfreie Neugier hat oft die größten Umwälzungen gebracht, planen lässt sie sich aber nicht. Ich schließe daraus, dass eine kluge Politik beides braucht — angewandte und Grundlagenforschung — und der freien Forschung Freiräume lassen muss."),

  // ── Teil 2 — Diskussion ───────────────────────────────────────────────────
  t2("Diskussion: Studiengebühren", "Studierende sollten für ihr Studium Gebühren zahlen.",
    ["Wer profitiert vom Studium — der Einzelne oder die Gesellschaft?", "Führen Gebühren zu mehr sozialer Ungleichheit?", "Verbessern zahlende Studierende die Qualität der Lehre?"]),
  t2("Diskussion: Soziale Netzwerke regulieren", "Soziale Netzwerke sollten strenger reguliert werden.",
    ["Wo verläuft die Grenze zwischen Schutz und Zensur?", "Wer sollte die Regeln festlegen — Staat oder Unternehmen?", "Lässt sich Desinformation überhaupt wirksam eindämmen?"]),
  t2("Diskussion: Recht auf Homeoffice", "Beschäftigte sollten ein Recht auf Homeoffice haben.",
    ["Welche Tätigkeiten eignen sich, welche nicht?", "Was bedeutet das für den Zusammenhalt im Team?", "Wie verhindert man, dass Arbeit und Freizeit verschwimmen?"]),
  t2("Diskussion: Tempolimit auf Autobahnen", "Auf Autobahnen sollte ein allgemeines Tempolimit gelten.",
    ["Wie stark wirkt ein Limit auf Sicherheit und Umwelt?", "Wiegt der Zeitverlust den Nutzen auf?", "Ist Geschwindigkeit eine Frage der Freiheit oder der Verantwortung?"]),
  t2("Diskussion: Kulturförderung", "Kultur sollte weiterhin mit Steuergeld gefördert werden.",
    ["Ist Kultur eine öffentliche Aufgabe oder Privatsache?", "Wer entscheidet, was gefördert wird?", "Was ginge verloren, wenn nur der Markt entschiede?"]),
  t2("Diskussion: Lebenslanges Lernen", "Weiterbildung im Beruf sollte verpflichtend sein.",
    ["Wer trägt die Kosten und die Zeit — Betrieb oder Beschäftigte?", "Fördert eine Pflicht die Motivation oder erstickt sie sie?", "Braucht es angesichts des schnellen Wandels überhaupt eine Pflicht?"]),
];

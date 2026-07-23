// telc Deutsch B2 — Leseverstehen, Teil 2 (Multiple Choice).
//
// OFFICIAL CELL: 5 questions, MC-3, on one text. Five instances here (the rule7
// floor across LV's three Teile is ≥15 per section, ~5 per Teil — a floor, not a
// quota; we are not padding to fill an envelope).
//
// ── WHY THIS IS THE "RE-TAG" CELL, AND WHY IT IS STILL RE-AUTHORING ─────────
// The old TELC_B2_LV_MCQ items were already the right TASK (a text plus 3-option
// comprehension questions) — that is what made this cell cheap. But the official
// Teil carries FIVE questions per text and ours carried three, so each instance is
// extended 3 → 5. The five passages are the originals, unchanged; the two added
// questions per passage are answerable STRICTLY from the text already there.
// Nothing new is asserted about the world — every added key is a restatement of a
// clause that was already in the passage when beta-g reviewed it.
//
// ORIGINALITY (doctrine #1): passages and questions are original to AlmiGoethe,
// never derived from a telc Übungstest or Modelltest.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";

const L = EXAM_LEVEL.TELC_B2;
const base = {
  exam: "TELC_B2" as const,
  level: L,
  section: SECTION.LESEVERSTEHEN,
  difficulty: "CORE" as const,
  taskType: "TELC_B2_LV_T2_MC",
  prompt: "Lesen Sie den Text und beantworten Sie die Fragen 1–5.",
  topicTag: "leseverstehen",
  timeLimitSeconds: 540,
};

const INSTR = "Wählen Sie für jede Frage die richtige Antwort (a, b oder c). Nur eine Antwort ist richtig.";

type Q = { stem: string; options: [string, string, string]; answer: "a" | "b" | "c" };

function item(title: string, passage: string, qs: Q[]): ExamItemInput {
  if (qs.length !== 5) throw new Error(`LV T2 "${title}": the official Teil has 5 questions, got ${qs.length}`);
  return {
    ...base,
    title,
    payload: {
      instructions: INSTR,
      passage,
      questions: qs.map((q, i) => ({
        id: `q${i + 1}`,
        stem: q.stem,
        options: q.options.map((text, j) => ({ id: "abc"[j], text })),
        answer: q.answer,
      })),
    },
  };
}

const RAW_ITEMS: ExamItemInput[] = [
  item(
    "Reparieren statt wegwerfen",
    "In vielen Städten haben sich sogenannte Reparaturcafés etabliert. Dort helfen ehrenamtliche Fachleute dabei, defekte Geräte wieder instand zu setzen, statt sie zu entsorgen. Die Idee verbindet zwei Anliegen: Sie schont Ressourcen und bringt zugleich Menschen unterschiedlichen Alters ins Gespräch. Wer ein kaputtes Radio oder eine wackelige Lampe mitbringt, lernt oft nebenbei, wie das Gerät funktioniert. Kritiker geben allerdings zu bedenken, dass sich viele moderne Produkte kaum noch reparieren lassen, weil Hersteller sie fest verkleben oder Ersatzteile nicht anbieten. Genau hier setzen Forderungen nach einem „Recht auf Reparatur“ an, das Verbraucher europaweit stärken soll.",
    [
      { stem: "Welche zwei Anliegen verbindet die Idee der Reparaturcafés?", options: ["Ressourcen schonen und Menschen ins Gespräch bringen", "Geld verdienen und Werbung machen", "neue Geräte verkaufen und Personal ausbilden"], answer: "a" },
      { stem: "Welchen Einwand nennen Kritiker?", options: ["Reparaturen seien immer zu teuer.", "Viele moderne Produkte lassen sich kaum reparieren.", "Es fehle an ehrenamtlichen Helfern."], answer: "b" },
      { stem: "Worauf zielt das „Recht auf Reparatur“?", options: ["die Hersteller von Vorschriften zu befreien", "die Verbraucher europaweit zu stärken", "Reparaturcafés zu verbieten"], answer: "b" },
      { stem: "Was lernen Besucherinnen und Besucher laut Text oft nebenbei?", options: ["wie das Gerät funktioniert", "wie man Geräte am besten verkauft", "wie man ein Café führt"], answer: "a" },
      { stem: "Warum lassen sich moderne Produkte häufig kaum reparieren?", options: ["weil die Fachleute dafür fehlen", "weil Reparaturen gesetzlich verboten sind", "weil Hersteller sie fest verkleben oder keine Ersatzteile anbieten"], answer: "c" },
    ],
  ),
  item(
    "Die Vier-Tage-Woche auf dem Prüfstand",
    "Mehrere Unternehmen haben in Pilotprojekten getestet, ob sich die Arbeitszeit auf vier Tage verkürzen lässt, ohne dass der Lohn sinkt. Die Zwischenbilanz fällt gemischt aus. Viele Beschäftigte berichten von weniger Stress und besserer Erholung, und in einigen Betrieben blieb die Leistung stabil, weil Besprechungen gestrafft und Abläufe verbessert wurden. In anderen Branchen jedoch, in denen die Arbeit unmittelbar an Kundenkontakt oder Schichten gebunden ist, ließ sich das Modell nur schwer umsetzen. Fachleute warnen deshalb davor, aus einzelnen Erfolgen eine allgemeine Regel abzuleiten.",
    [
      { stem: "Was wurde in den Pilotprojekten getestet?", options: ["eine kürzere Arbeitswoche bei gleichem Lohn", "eine längere Arbeitswoche mit mehr Lohn", "die Abschaffung von Besprechungen"], answer: "a" },
      { stem: "Warum blieb die Leistung in einigen Betrieben stabil?", options: ["weil mehr Personal eingestellt wurde", "weil Abläufe verbessert und Besprechungen gestrafft wurden", "weil die Löhne gesenkt wurden"], answer: "b" },
      { stem: "Wovor warnen Fachleute?", options: ["aus einzelnen Erfolgen eine allgemeine Regel abzuleiten", "das Modell überhaupt zu testen", "jeden Kundenkontakt zu vermeiden"], answer: "a" },
      { stem: "Wovon berichten viele Beschäftigte?", options: ["von mehr Überstunden am Wochenende", "von weniger Stress und besserer Erholung", "von einem deutlich geringeren Lohn"], answer: "b" },
      { stem: "In welchen Branchen ließ sich das Modell nur schwer umsetzen?", options: ["in der Forschung und Entwicklung", "in reinen Bürobetrieben", "dort, wo die Arbeit an Kundenkontakt oder Schichten gebunden ist"], answer: "c" },
    ],
  ),
  item(
    "Das Comeback des Handwerks",
    "Lange galt ein Handwerksberuf als weniger angesehen als ein Studium. Das ändert sich allmählich. Angesichts voller Hörsäle und unsicherer Berufsaussichten für manche Akademiker entdecken junge Menschen die Vorteile einer Ausbildung neu: früher eigenes Geld, gute Übernahmechancen und die Aussicht, sich später selbstständig zu machen. Hinzu kommt die Befriedigung, am Ende des Tages ein greifbares Ergebnis zu sehen. Dennoch fehlt es weiter an Nachwuchs, was auch daran liegt, dass das Image sich langsamer wandelt als die Wirklichkeit.",
    [
      { stem: "Warum entdecken junge Menschen das Handwerk neu?", options: ["wegen guter Aussichten wie früherem eigenem Geld und Übernahmechancen", "weil ein Studium inzwischen verboten wurde", "weil es kaum noch Universitäten gibt"], answer: "a" },
      { stem: "Welche zusätzliche Befriedigung wird genannt?", options: ["am Ende des Tages ein greifbares Ergebnis zu sehen", "nie wieder arbeiten zu müssen", "ausschließlich im Büro zu sitzen"], answer: "a" },
      { stem: "Woran fehlt es laut Text weiterhin?", options: ["an Aufträgen für die Betriebe", "an Werkzeug und Material", "an Nachwuchs, weil sich das Image langsam wandelt"], answer: "c" },
      { stem: "Wie galt ein Handwerksberuf lange Zeit?", options: ["als weniger angesehen als ein Studium", "als besser bezahlt als jedes Studium", "als besonders leicht zu erlernen"], answer: "a" },
      { stem: "Welche Aussicht wird neben Geld und Übernahmechancen genannt?", options: ["sofort eine Firma zu leiten", "sich später selbstständig zu machen", "im Ausland zu studieren"], answer: "b" },
    ],
  ),
  item(
    "Weniger besitzen, mehr leben?",
    "Der Minimalismus, also der bewusste Verzicht auf überflüssigen Besitz, hat viele Anhänger gefunden. Wer weniger hat, so das Versprechen, gewinnt Zeit, Geld und innere Ruhe. Tatsächlich berichten manche, dass sie sich freier fühlen, seit sie ausgemistet haben. Kritiker merken jedoch an, dass Minimalismus oft ein Lebensstil für jene ist, die es sich leisten können, Dinge wegzugeben und bei Bedarf neu zu kaufen. Für Menschen mit wenig Geld ist Sparsamkeit dagegen keine Wahl, sondern Notwendigkeit.",
    [
      { stem: "Was verspricht der Minimalismus?", options: ["Zeit, Geld und innere Ruhe", "deutlich mehr Besitz", "ein höheres Ansehen im Beruf"], answer: "a" },
      { stem: "Was kritisieren die Gegner?", options: ["Minimalismus sei oft ein Stil für Wohlhabende.", "Minimalismus mache die Menschen arm.", "Minimalismus sei gesetzlich verboten."], answer: "a" },
      { stem: "Was gilt laut Text für Menschen mit wenig Geld?", options: ["Sie leben immer aus Überzeugung minimalistisch.", "Sparsamkeit ist keine Wahl, sondern Notwendigkeit.", "Sie besitzen am meisten."], answer: "b" },
      { stem: "Wie wird Minimalismus im Text erklärt?", options: ["als Kauf besonders teurer Möbel", "als Sammeln von Andenken", "als bewusster Verzicht auf überflüssigen Besitz"], answer: "c" },
      { stem: "Was berichten manche, seit sie ausgemistet haben?", options: ["dass sie sich freier fühlen", "dass sie deutlich mehr besitzen", "dass sie länger arbeiten müssen"], answer: "a" },
    ],
  ),
  item(
    "Achtsamkeit zwischen Nutzen und Mode",
    "Achtsamkeit, also das bewusste Wahrnehmen des Augenblicks, ist zu einem beliebten Thema geworden. Studien deuten darauf hin, dass entsprechende Übungen bei Stress und Schlafproblemen helfen können. Zugleich ist ein ganzer Markt entstanden: Apps, Kurse und Bücher versprechen rasche Entspannung. Genau hier sehen manche eine Gefahr. Wird Achtsamkeit zur schnellen Technik gegen Stress verkauft, gerät leicht aus dem Blick, dass sie eigentlich eine Haltung ist, die Übung und Zeit verlangt. Nicht jedes Angebot hält also, was es verspricht.",
    [
      { stem: "Wobei kann Achtsamkeit laut Studien helfen?", options: ["bei Stress und Schlafproblemen", "bei körperlichen Verletzungen", "beim Erlernen von Sprachen"], answer: "a" },
      { stem: "Worin sehen manche eine Gefahr?", options: ["Achtsamkeit werde als schnelle Technik verkauft.", "Achtsamkeit sei für alle zu teuer.", "Achtsamkeit sei in Kursen verboten."], answer: "a" },
      { stem: "Was ist Achtsamkeit laut Text eigentlich?", options: ["ein einmaliger Trick", "eine Haltung, die Übung und Zeit verlangt", "ein technisches Gerät"], answer: "b" },
      { stem: "Was ist neben den Übungen entstanden?", options: ["ein staatliches Verbot", "ein neuer Schulabschluss", "ein ganzer Markt aus Apps, Kursen und Büchern"], answer: "c" },
      { stem: "Was gilt laut Text für die Angebote auf diesem Markt?", options: ["Nicht jedes hält, was es verspricht.", "Alle sind wissenschaftlich geprüft.", "Sie sind grundsätzlich kostenlos."], answer: "a" },
    ],
  ),
];

// Format is now correct for this cell, so the distribution axis (MC position spread)
// is meaningful — de-gamed here rather than left at the old 94%-"a".
export const ITEMS: ExamItemInput[] = deGame(RAW_ITEMS, {
  permuteMC: new Set(["TELC_B2_LV_T2_MC"]),
});

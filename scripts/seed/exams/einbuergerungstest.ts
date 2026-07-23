// Einbürgerungstest — original civic MCQs mapped to the verified fact-base.
//
// ORIGINALITY (doctrine #1): the official 300-question federal catalog is NEVER
// copied — copyright, and a copied bank teaches recall of a leaked list, not the
// facts. Every question here is ORIGINAL; only the FACTS are anchored, to
// src/lib/exams/civic-factbase.ts.
//
// ── HOW A CIVIC ITEM IS BUILT, AND HOW THE GATE VERIFIES IT ─────────────────
// Each item is a single 4-option MCQ. Its correct option's TEXT is the fact-base
// answer verbatim, and payload.answer carries that same string. The
// civic-sourcing gate then checks THREE things: the factId exists, the fact has a
// citation, and payload.answer matches the fact's answer — key ↔ WORLD, not just
// key ↔ payload. Distractors are unambiguously false (wrong institution, wrong
// date, a real but incorrect option) — never a second defensible answer.
//
// ── DISTRIBUTION ────────────────────────────────────────────────────────────
// Options are authored correct-first for legibility, then run through the
// deterministic deGame(permuteMC) so no position is dead or clustered — the
// answer-distribution gate enforces Einbürgerungstest as a structured exam.
//
// ── SENSITIVE CONTENT ───────────────────────────────────────────────────────
// The Domain-B history items name the Nazi dictatorship and the Holocaust plainly
// and truthfully, as the fact-base does. Distractors here never trivialise or
// relativise — they are simple wrong dates or wrong actors, never a "milder"
// version of the crime.
//
// ⚠️ Bundesland-specific gap: the real test's 3 state questions need per-state
// facts, not yet sourced and not fabricated. This bank is the four GENERAL domains
// (≥15 each); a mock draws 30 general and notes the 3 state questions as pending.

import { EXAM_LEVEL, SECTION, type ExamItemInput } from "./_shared";
import { deGame } from "./_permute";
import { CIVIC_FACTS } from "../../../src/lib/exams/civic-factbase";

const LETTERS = ["a", "b", "c", "d"];
const L = EXAM_LEVEL.EINBUERGERUNGSTEST;

type CivicQ = {
  factId: string;
  title: string;
  stem: string;
  distractors: [string, string, string];
  topicTag: string;
};

function build(section: string, taskType: string, qs: CivicQ[]): ExamItemInput[] {
  return qs.map((q) => {
    const fact = CIVIC_FACTS[q.factId];
    if (!fact) throw new Error(`einbuergerung: unknown factId ${q.factId}`);
    // Correct option first; deGame permutes positions deterministically afterwards.
    const optionTexts = [fact.answer, ...q.distractors];
    return {
      exam: "EINBUERGERUNGSTEST" as const,
      level: L,
      section,
      difficulty: "CORE" as const,
      taskType,
      title: q.title,
      prompt: "Wählen Sie die richtige Antwort. Nur eine Antwort ist richtig.",
      topicTag: q.topicTag,
      timeLimitSeconds: 60,
      payload: {
        // For the civic-sourcing gate (key ↔ world): factId exists + answer matches.
        factId: q.factId,
        answer: fact.answer,
        instructions: "Nur eine Antwort ist richtig.",
        questions: [
          {
            id: "q1",
            stem: q.stem,
            options: optionTexts.map((text, i) => ({ id: LETTERS[i], text })),
            answer: "a", // correct is first here; deGame re-points it after permuting
          },
        ],
      },
      guidanceNote: `Quelle: ${fact.citation}`,
    };
  });
}

// ── Domain A — Grundgesetz und Grundrechte (15) ─────────────────────────────
const A: CivicQ[] = [
  { factId: "A1", title: "Die Verfassung Deutschlands", stem: "Wie heißt die Verfassung der Bundesrepublik Deutschland?", distractors: ["die Weimarer Verfassung", "das Bürgerliche Gesetzbuch", "die Reichsverfassung"], topicTag: "grundgesetz" },
  { factId: "A2", title: "Artikel 1 des Grundgesetzes", stem: "Was schützt Artikel 1 des Grundgesetzes an erster Stelle?", distractors: ["das Eigentum", "die Nationalflagge", "den Staat"], topicTag: "grundrechte" },
  { factId: "A3", title: "Was ist Deutschland?", stem: "Was ist Deutschland laut Artikel 20 des Grundgesetzes?", distractors: ["eine Monarchie", "eine Diktatur", "ein Königreich"], topicTag: "staatsform" },
  { factId: "A4", title: "Woher kommt die Staatsgewalt?", stem: "Von wem geht in Deutschland alle Staatsgewalt aus?", distractors: ["vom Bundespräsidenten", "von der Regierung", "von den großen Parteien"], topicTag: "demokratie" },
  { factId: "A5", title: "Der Rechtsstaat", stem: "Was bedeutet es, dass Deutschland ein Rechtsstaat ist?", distractors: ["der Staat steht über dem Gesetz", "es gibt keine Gerichte", "nur der Kanzler entscheidet"], topicTag: "rechtsstaat" },
  { factId: "A6", title: "Der Sozialstaat", stem: "Was sichert der Sozialstaat den Menschen?", distractors: ["niedrige Steuern für Reiche", "eine Staatsreligion", "eine starke Armee"], topicTag: "sozialstaat" },
  { factId: "A7", title: "Der Bundesstaat", stem: "Aus wie vielen Ländern besteht die Bundesrepublik Deutschland?", distractors: ["10 Bundesländer", "20 Bundesländer", "einem einzigen Land"], topicTag: "foederalismus" },
  { factId: "A8", title: "Das Widerstandsrecht", stem: "Welches Recht gibt Artikel 20 Absatz 4 gegen jeden, der die Verfassung beseitigen will?", distractors: ["das Recht auf Waffen", "das Streikverbot", "das Recht auf ein Auto"], topicTag: "grundrechte" },
  { factId: "A9", title: "Die Ewigkeitsklausel", stem: "Was sagt die Ewigkeitsklausel über die Grundprinzipien der Verfassung?", distractors: ["sie sind jederzeit abschaffbar", "nur der Kanzler darf sie ändern", "sie gelten nur zehn Jahre"], topicTag: "grundgesetz" },
  { factId: "A10", title: "Meinungsfreiheit", stem: "Welches Grundrecht schützt Artikel 5 des Grundgesetzes?", distractors: ["das Recht zu rauchen", "das Recht schnell zu fahren", "das Recht keine Steuern zu zahlen"], topicTag: "grundrechte" },
  { factId: "A11", title: "Gleichheit vor dem Gesetz", stem: "Was sagt Artikel 3 des Grundgesetzes?", distractors: ["Männer haben mehr Rechte als Frauen", "Reiche zahlen keine Steuern", "nur Deutsche sind gleich"], topicTag: "grundrechte" },
  { factId: "A12", title: "Religionsfreiheit im Grundgesetz", stem: "Was garantiert Artikel 4 des Grundgesetzes?", distractors: ["eine verpflichtende Staatskirche", "ein Verbot aller Religionen", "nur eine erlaubte Religion"], topicTag: "grundrechte" },
  { factId: "A1", title: "Die oberste Rechtsgrundlage", stem: "Welches Gesetz steht in Deutschland über allen anderen Gesetzen?", distractors: ["das Strafgesetzbuch", "die Straßenverkehrsordnung", "das Steuergesetz"], topicTag: "grundgesetz" },
  { factId: "A7", title: "Bund und Länder", stem: "Wie viele Länder bilden zusammen den deutschen Bundesstaat?", distractors: ["9 Bundesländer", "12 Bundesländer", "18 Bundesländer"], topicTag: "foederalismus" },
  { factId: "A11", title: "Frauen und Männer im Grundgesetz", stem: "Wie behandelt das Grundgesetz alle Menschen vor dem Gesetz?", distractors: ["Beamte stehen über dem Gesetz", "Ausländer haben keine Rechte", "Kinder haben keine Rechte"], topicTag: "grundrechte" },
];

// ── Domain C — Staat und Institutionen (15) ─────────────────────────────────
const C: CivicQ[] = [
  { factId: "C1", title: "Das Parlament", stem: "Welches Organ ist das gewählte Parlament, das die Gesetze beschließt?", distractors: ["der Bundesrat", "das Bundesverfassungsgericht", "die Bundesregierung allein"], topicTag: "institutionen" },
  { factId: "C2", title: "Die Vertretung der Länder", stem: "Welches Organ vertritt auf Bundesebene die 16 Bundesländer?", distractors: ["der Bundestag", "der Bundespräsident", "das Bundesverfassungsgericht"], topicTag: "institutionen" },
  { factId: "C3", title: "Der Regierungschef", stem: "Wer ist der Chef der Bundesregierung und wird vom Bundestag gewählt?", distractors: ["der Bundespräsident / die Bundespräsidentin", "der Bundesratspräsident", "der oberste Richter"], topicTag: "institutionen" },
  { factId: "C4", title: "Das Staatsoberhaupt", stem: "Wer ist das Staatsoberhaupt, repräsentiert Deutschland und unterzeichnet die Gesetze?", distractors: ["der Bundeskanzler / die Bundeskanzlerin", "der Präsident des Bundestages", "der EU-Kommissar"], topicTag: "institutionen" },
  { factId: "C5", title: "Der Hüter der Verfassung", stem: "Welches Gericht in Karlsruhe schützt das Grundgesetz und kann Gesetze aufheben?", distractors: ["das Amtsgericht", "der Bundesrat", "das Finanzgericht"], topicTag: "institutionen" },
  { factId: "C6", title: "Die Zahl der Länder", stem: "Wie viele Bundesländer mit eigenem Landtag hat Deutschland?", distractors: ["8", "12", "20"], topicTag: "foederalismus" },
  { factId: "C7", title: "Die Gewaltenteilung", stem: "In welche drei Gewalten ist die Staatsgewalt geteilt?", distractors: ["Bund, Länder und Gemeinden", "Regierung, Parteien und Presse", "Polizei, Armee und Gerichte"], topicTag: "institutionen" },
  { factId: "C8", title: "Abwahl des Kanzlers", stem: "Wie kann der Bundeskanzler nur abgewählt werden (konstruktives Misstrauensvotum)?", distractors: ["durch eine Demonstration", "durch den Bundespräsidenten allein", "durch ein Volksfest"], topicTag: "institutionen" },
  { factId: "C9", title: "Wie gewählt wird", stem: "Wie sind die Wahlen in Deutschland nach Artikel 38 unter anderem?", distractors: ["öffentlich und namentlich", "nur für Reiche", "vom Kanzler bestimmt"], topicTag: "wahlen" },
  { factId: "C10", title: "Die Währung", stem: "Welche Währung benutzt Deutschland als Mitglied der Europäischen Union?", distractors: ["die D-Mark", "der Dollar", "der Franken"], topicTag: "europa" },
  { factId: "C1", title: "Wer die Gesetze macht", stem: "Wer beschließt in Deutschland die Bundesgesetze?", distractors: ["der Bundespräsident allein", "die Gerichte", "die Polizei"], topicTag: "institutionen" },
  { factId: "C4", title: "Wer die Gesetze unterschreibt", stem: "Wer unterzeichnet die Gesetze und vertritt Deutschland nach außen?", distractors: ["der Bundeskanzler / die Bundeskanzlerin", "der Bundestagspräsident", "der Chef der größten Partei"], topicTag: "institutionen" },
  { factId: "C5", title: "Verfassungswidrige Gesetze", stem: "Welches Gericht kann ein Gesetz aufheben, das gegen das Grundgesetz verstößt?", distractors: ["der Bundestag", "das Arbeitsgericht", "die Bundesregierung"], topicTag: "institutionen" },
  { factId: "C9", title: "Das Wahlgeheimnis", stem: "Was bedeutet es, dass Wahlen in Deutschland geheim sind (Art. 38)?", distractors: ["nur Männer wählen", "man wählt öffentlich per Handzeichen", "der Staat sieht die Stimme"], topicTag: "wahlen" },
  { factId: "C2", title: "Bundesrat und Länder", stem: "Über welches Organ wirken die Bundesländer an der Gesetzgebung des Bundes mit?", distractors: ["den Bundestag", "das Bundesverfassungsgericht", "die Europäische Kommission"], topicTag: "institutionen" },
];

// ── Domain B — Geschichte und Verantwortung (15) ────────────────────────────
const B: CivicQ[] = [
  { factId: "B1", title: "Die erste Demokratie", stem: "Wie hieß die erste deutsche Demokratie (1919–1933)?", distractors: ["das Deutsche Kaiserreich", "die Bundesrepublik", "die DDR"], topicTag: "geschichte" },
  { factId: "B2", title: "1933", stem: "Was begann, als Hitler am 30. Januar 1933 Reichskanzler wurde?", distractors: ["eine Demokratie", "eine Republik mit freien Wahlen", "eine neue Verfassung mit Grundrechten"], topicTag: "geschichte" },
  { factId: "B3", title: "Nach 1933", stem: "Was galt in Deutschland nach 1933 unter den Nationalsozialisten?", distractors: ["viele Parteien und freie Wahlen", "volle Meinungsfreiheit", "unabhängige Gerichte"], topicTag: "geschichte" },
  { factId: "B4", title: "Die Opfer des Nationalsozialismus", stem: "Welche Gruppe ermordeten die Nationalsozialisten im Holocaust vor allem (etwa sechs Millionen Menschen)?", distractors: ["die Beamten", "die Bauern", "die Soldaten des Auslands"], topicTag: "geschichte" },
  { factId: "B5", title: "9. November 1938", stem: "Was geschah in der Reichspogromnacht am 9. November 1938?", distractors: ["die Mauer wurde gebaut", "der Krieg endete", "die Demokratie begann"], topicTag: "geschichte" },
  { factId: "B6", title: "Kriegsende in Europa", stem: "Wann endete der Zweite Weltkrieg in Europa?", distractors: ["der 1. September 1939", "der 3. Oktober 1990", "der 9. November 1989"], topicTag: "geschichte" },
  { factId: "B7", title: "Deutschland nach 1945", stem: "Was geschah mit Deutschland nach dem Krieg 1945?", distractors: ["es wurde sofort wiedervereinigt", "es wurde eine Monarchie", "es blieb völlig unverändert"], topicTag: "geschichte" },
  { factId: "B8", title: "Zwei deutsche Staaten", stem: "Welche zwei Staaten entstanden 1949 in Deutschland?", distractors: ["Preußen und Bayern", "West-Berlin und Ost-Berlin", "das Kaiserreich und die Weimarer Republik"], topicTag: "geschichte" },
  { factId: "B9", title: "Die Berliner Mauer", stem: "Wer baute 1961 die Berliner Mauer?", distractors: ["die Bundesrepublik, 1949", "die Alliierten, 1945", "die Weimarer Republik, 1919"], topicTag: "geschichte" },
  { factId: "B10", title: "Der Fall der Mauer", stem: "Wann fiel die Berliner Mauer?", distractors: ["der 8. Mai 1945", "der 3. Oktober 1990", "der 23. Mai 1949"], topicTag: "geschichte" },
  { factId: "B11", title: "Die Wiedervereinigung", stem: "Wann wurde Deutschland wiedervereinigt (Tag der Deutschen Einheit)?", distractors: ["der 9. November 1989", "der 8. Mai 1945", "der 1. Januar 2000"], topicTag: "geschichte" },
  { factId: "B12", title: "Die Nationalflagge", stem: "Welche Farben hat die deutsche Nationalflagge?", distractors: ["schwarz-weiß-rot", "blau-weiß", "grün-weiß-rot"], topicTag: "geschichte" },
  { factId: "B6", title: "Der 8. Mai 1945", stem: "Welches Datum steht für das Ende des Zweiten Weltkriegs in Europa?", distractors: ["der 9. November 1938", "der 13. August 1961", "der 3. Oktober 1990"], topicTag: "geschichte" },
  { factId: "B2", title: "Ende der Weimarer Demokratie", stem: "Wozu wurde Deutschland ab 1933 unter den Nationalsozialisten?", distractors: ["zu einer stärkeren Demokratie", "zu einem Rechtsstaat", "zu einer Republik mit Gewaltenteilung"], topicTag: "geschichte" },
  { factId: "B11", title: "Der Nationalfeiertag", stem: "An welchem Datum feiert Deutschland den Tag der Deutschen Einheit?", distractors: ["dem 1. Mai", "dem 9. November", "dem 23. Mai"], topicTag: "geschichte" },
];

// ── Domain D — Gesellschaft und Zusammenleben (15) ──────────────────────────
const D: CivicQ[] = [
  { factId: "D1", title: "Religion frei wählen", stem: "Was gilt in Deutschland für die Religion?", distractors: ["es gibt eine verpflichtende Staatskirche", "nur eine Religion ist erlaubt", "Religion ist verboten"], topicTag: "gesellschaft" },
  { factId: "D2", title: "Gleichberechtigung", stem: "Wie sind Männer und Frauen in Deutschland nach dem Grundgesetz gestellt?", distractors: ["Männer dürfen mehr", "Frauen dürfen nicht arbeiten", "Frauen dürfen nicht wählen"], topicTag: "gesellschaft" },
  { factId: "D3", title: "Schulpflicht", stem: "Was gilt in Deutschland für Kinder ab etwa sechs Jahren?", distractors: ["Schule ist freiwillig", "nur Jungen gehen zur Schule", "Schule kostet immer viel Geld"], topicTag: "gesellschaft" },
  { factId: "D4", title: "Kritik an der Regierung", stem: "Was darf man in Deutschland dank der Meinungs- und Pressefreiheit tun?", distractors: ["die Regierung nicht kritisieren", "keine Zeitungen lesen", "nur die Regierung loben"], topicTag: "gesellschaft" },
  { factId: "D5", title: "Der Sozialstaat im Alltag", stem: "Welche Absicherung bietet der deutsche Sozialstaat unter anderem?", distractors: ["kostenlose Autos", "keine Steuern", "eine Staatsreligion"], topicTag: "gesellschaft" },
  { factId: "D6", title: "Ehe für alle", stem: "Für wen ist die Ehe in Deutschland seit 2017 geöffnet?", distractors: ["nur für Deutsche", "nur mit Erlaubnis des Staates", "nur für Menschen ohne Kinder"], topicTag: "gesellschaft" },
  { factId: "D7", title: "Gewaltfreie Erziehung", stem: "Was gilt in Deutschland für die Erziehung von Kindern?", distractors: ["Eltern dürfen Kinder schlagen", "Kinder haben keine Rechte", "nur der Vater entscheidet alles"], topicTag: "gesellschaft" },
  { factId: "D8", title: "Zusammenleben", stem: "Welche Werte sind für das Zusammenleben in Deutschland wichtig?", distractors: ["Benachteiligung nach Herkunft", "Gewalt bei Streit", "eine erlaubte Religion für alle"], topicTag: "gesellschaft" },
  { factId: "D9", title: "Politik mitgestalten", stem: "Wie gestalten Bürgerinnen und Bürger die Politik in Deutschland mit?", distractors: ["durch Zahlung an eine Partei", "gar nicht", "nur durch Demonstrationen"], topicTag: "gesellschaft" },
  { factId: "D10", title: "Pflichten in Deutschland", stem: "Welche Pflichten haben Menschen, die in Deutschland leben?", distractors: ["einer Kirche beitreten", "eine Partei wählen müssen", "Deutsch als Muttersprache haben"], topicTag: "gesellschaft" },
  { factId: "D2", title: "Frauen und Männer im Alltag", stem: "Welches Recht haben Frauen und Männer in Deutschland gleichermaßen?", distractors: ["nur Männer dürfen wählen", "nur Männer dürfen ein Konto haben", "nur Frauen erziehen Kinder"], topicTag: "gesellschaft" },
  { factId: "D4", title: "Freie Presse", stem: "Was erlaubt die Pressefreiheit den Zeitungen in Deutschland?", distractors: ["nur gute Nachrichten über die Regierung", "keine Kritik am Staat", "nur staatliche Zeitungen"], topicTag: "gesellschaft" },
  { factId: "D9", title: "Wählen ab 18", stem: "Wie können Bürgerinnen und Bürger ab 18 über die Politik mitbestimmen?", distractors: ["durch Bezahlung", "durch Losglück", "durch Geburt in einer Familie"], topicTag: "gesellschaft" },
  { factId: "D10", title: "Gesetze und Steuern", stem: "Wozu sind alle verpflichtet, die in Deutschland leben?", distractors: ["zu einer Religion", "zum Dienst in der Armee für alle", "zur Mitgliedschaft in einer Partei"], topicTag: "gesellschaft" },
  { factId: "D3", title: "Kinder in der Schule", stem: "Was müssen Kinder in Deutschland ab dem Schulalter tun?", distractors: ["arbeiten gehen", "zu Hause bleiben", "eine Gebühr zahlen"], topicTag: "gesellschaft" },
];

const rawItems: ExamItemInput[] = [
  ...build(SECTION.GRUNDGESETZ, "EINB_GRUNDGESETZ", A),
  ...build(SECTION.INSTITUTIONEN, "EINB_INSTITUTIONEN", C),
  ...build(SECTION.GESCHICHTE, "EINB_GESCHICHTE", B),
  ...build(SECTION.GESELLSCHAFT, "EINB_GESELLSCHAFT", D),
];

// Distribute the 4-option keys deterministically (see ./_permute.ts and the
// answer-distribution gate). deGame permutes options and re-points the answer to
// where the correct TEXT landed; it does NOT touch payload.answer, so the civic
// key ↔ world check stays intact.
export const ITEMS: ExamItemInput[] = deGame(rawItems, {
  permuteMC: new Set(["EINB_GRUNDGESETZ", "EINB_INSTITUTIONEN", "EINB_GESCHICHTE", "EINB_GESELLSCHAFT"]),
});

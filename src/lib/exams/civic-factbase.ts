// CIVIC FACT-BASE — the sourced truth every Einbürgerungstest item must map to.
//
// ── WHY THIS FILE IS THE INVERSE OF THE REAL-ENTITY GATE ────────────────────
// real-entity forbids an INVENTED document from naming a REAL organisation. A
// civic item is the opposite obligation: it MUST name real institutions
// (Grundgesetz, Bundestag, Bundesrat, Bundespräsident, Bundesverfassungsgericht),
// and every fact it asserts must be TRUE and ATTRIBUTABLE. A civic item that
// fabricated a fact — even a plausible one — would teach a citizenship candidate
// something false about the state they are joining. That is the one place
// fabrication is not a style problem but a harm.
//
// So a civic item may not carry a free-authored claim. It references a `factId`
// here, its keyed answer must MATCH this entry's `answer`, and this entry must
// carry a `citation`. The civic-sourcing gate enforces all three.
//
// ── ORIGINALITY ─────────────────────────────────────────────────────────────
// These 44 facts are the ANCHORS; the seed items are ORIGINAL 4-option questions
// written around them. The official 300-question federal catalog is NEVER copied
// (copyright, and a copied bank teaches recall of a leaked list, not the facts).
//
// SOURCE: founder research from the official sources cited per entry — the
// Grundgesetz itself, bpb.de (Bundeszentrale für politische Bildung),
// bundestag.de / bundesrat.de / bundesverfassungsgericht.de, and
// tatsachen-ueber-deutschland.de. 44 verified entries: A 12 · C 10 · B 12 · D 10.

export type CivicDomain = "A_GRUNDGESETZ" | "B_GESCHICHTE" | "C_INSTITUTIONEN" | "D_GESELLSCHAFT";

export type CivicFact = {
  /** Stable id an item references from its payload.factId. */
  factId: string;
  /** The sourced statement, in the exam's own terms. */
  statement: string;
  /** The correct answer — the text the item's correct option carries verbatim. */
  answer: string;
  /** Where the fact is published. A civic fact with no citation is not sourced. */
  citation: string;
  /** Which of the four Einbürgerungstest domains it anchors. */
  domain: CivicDomain;
};

/** The 44 verified anchor facts. Keyed by factId. */
export const CIVIC_FACTS: Record<string, CivicFact> = {
  // ── Domain A — Grundgesetz / constitution & rights ──────────────────────
  A1: { factId: "A1", statement: "Deutschlands Verfassung heißt Grundgesetz und gilt seit 1949.", answer: "das Grundgesetz", citation: "bundestag.de", domain: "A_GRUNDGESETZ" },
  A2: { factId: "A2", statement: "Artikel 1 des Grundgesetzes schützt an erster Stelle die Würde des Menschen.", answer: "die Würde des Menschen", citation: "Grundgesetz, Art. 1; bpb.de", domain: "A_GRUNDGESETZ" },
  A3: { factId: "A3", statement: "Laut Artikel 20 ist Deutschland ein demokratischer und sozialer Bundesstaat — keine Monarchie und keine Diktatur.", answer: "ein demokratischer und sozialer Bundesstaat", citation: "Grundgesetz, Art. 20; bpb.de", domain: "A_GRUNDGESETZ" },
  A4: { factId: "A4", statement: "Nach Artikel 20 Absatz 2 geht alle Staatsgewalt vom Volk aus.", answer: "vom Volk", citation: "Grundgesetz, Art. 20 Abs. 2; bpb.de", domain: "A_GRUNDGESETZ" },
  A5: { factId: "A5", statement: "Im Rechtsstaat ist der Staat an Gesetz und Recht gebunden; unabhängige Gerichte kontrollieren ihn.", answer: "an Gesetz und Recht gebunden", citation: "Grundgesetz, Art. 20 Abs. 3", domain: "A_GRUNDGESETZ" },
  A6: { factId: "A6", statement: "Der Sozialstaat sichert ein Existenzminimum und schützt Menschen in Not.", answer: "soziale Sicherheit", citation: "Grundgesetz, Art. 20 Abs. 1", domain: "A_GRUNDGESETZ" },
  A7: { factId: "A7", statement: "Deutschland ist ein Bundesstaat aus dem Bund und 16 Ländern.", answer: "16 Bundesländer", citation: "bpb.de", domain: "A_GRUNDGESETZ" },
  A8: { factId: "A8", statement: "Artikel 20 Absatz 4 gibt das Recht, Widerstand gegen jeden zu leisten, der die verfassungsmäßige Ordnung beseitigen will.", answer: "das Widerstandsrecht", citation: "Grundgesetz, Art. 20 Abs. 4", domain: "A_GRUNDGESETZ" },
  A9: { factId: "A9", statement: "Die Ewigkeitsklausel (Art. 79 Abs. 3) macht die Grundprinzipien der Verfassung unveränderbar.", answer: "unveränderbar", citation: "Grundgesetz, Art. 79 Abs. 3; bpb.de", domain: "A_GRUNDGESETZ" },
  A10: { factId: "A10", statement: "Die Grundrechte (Art. 1–19) schützen unter anderem die freie Meinungsäußerung.", answer: "die Meinungsfreiheit", citation: "Grundgesetz, Art. 5", domain: "A_GRUNDGESETZ" },
  A11: { factId: "A11", statement: "Artikel 3: Alle Menschen sind vor dem Gesetz gleich; Männer und Frauen sind gleichberechtigt.", answer: "Alle sind vor dem Gesetz gleich", citation: "Grundgesetz, Art. 3", domain: "A_GRUNDGESETZ" },
  A12: { factId: "A12", statement: "Artikel 4 garantiert die Religionsfreiheit; es gibt keine Staatsreligion.", answer: "die Religionsfreiheit", citation: "Grundgesetz, Art. 4", domain: "A_GRUNDGESETZ" },

  // ── Domain C — institutions ─────────────────────────────────────────────
  C1: { factId: "C1", statement: "Der Bundestag ist das gewählte Parlament; er beschließt Gesetze und wählt den Bundeskanzler.", answer: "der Bundestag", citation: "bundestag.de", domain: "C_INSTITUTIONEN" },
  C2: { factId: "C2", statement: "Der Bundesrat vertritt die 16 Bundesländer.", answer: "der Bundesrat", citation: "bundesrat.de", domain: "C_INSTITUTIONEN" },
  C3: { factId: "C3", statement: "Der Bundeskanzler oder die Bundeskanzlerin ist Regierungschef und wird vom Bundestag gewählt.", answer: "der Bundeskanzler / die Bundeskanzlerin", citation: "tatsachen-ueber-deutschland.de", domain: "C_INSTITUTIONEN" },
  C4: { factId: "C4", statement: "Der Bundespräsident oder die Bundespräsidentin ist das Staatsoberhaupt, repräsentiert das Land und unterzeichnet Gesetze.", answer: "der Bundespräsident / die Bundespräsidentin", citation: "tatsachen-ueber-deutschland.de", domain: "C_INSTITUTIONEN" },
  C5: { factId: "C5", statement: "Das Bundesverfassungsgericht in Karlsruhe schützt das Grundgesetz und kann verfassungswidrige Gesetze aufheben.", answer: "das Bundesverfassungsgericht", citation: "bundesverfassungsgericht.de", domain: "C_INSTITUTIONEN" },
  C6: { factId: "C6", statement: "Deutschland hat 16 Bundesländer, jedes mit einem eigenen Landtag.", answer: "16", citation: "bpb.de", domain: "C_INSTITUTIONEN" },
  C7: { factId: "C7", statement: "Die Staatsgewalt ist geteilt in Gesetzgebung, Regierung und Rechtsprechung (Gewaltenteilung).", answer: "Gesetzgebung, Regierung und Rechtsprechung", citation: "Grundgesetz, Art. 20", domain: "C_INSTITUTIONEN" },
  C8: { factId: "C8", statement: "Der Bundeskanzler kann nur durch ein konstruktives Misstrauensvotum abgewählt werden — indem ein neuer Kanzler gewählt wird.", answer: "durch die Wahl eines neuen Kanzlers", citation: "Grundgesetz, Art. 67", domain: "C_INSTITUTIONEN" },
  C9: { factId: "C9", statement: "Wahlen sind allgemein, unmittelbar, frei, gleich und geheim (Art. 38); das Wahlalter ist 18.", answer: "frei, gleich und geheim", citation: "Grundgesetz, Art. 38", domain: "C_INSTITUTIONEN" },
  C10: { factId: "C10", statement: "Deutschland ist Mitglied der Europäischen Union und benutzt den Euro.", answer: "der Euro", citation: "tatsachen-ueber-deutschland.de", domain: "C_INSTITUTIONEN" },

  // ── Domain B — history ──────────────────────────────────────────────────
  B1: { factId: "B1", statement: "Die Weimarer Republik (1919–1933) war die erste Demokratie in Deutschland.", answer: "die Weimarer Republik", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B2: { factId: "B2", statement: "Am 30. Januar 1933 wurde Hitler Reichskanzler; die nationalsozialistische Diktatur begann.", answer: "eine Diktatur", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B3: { factId: "B3", statement: "Nach 1933 wurden die Grundrechte abgeschafft, Parteien verboten und es gab keine freien Wahlen mehr.", answer: "nur eine Partei und keine freien Wahlen", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B4: { factId: "B4", statement: "Die Nationalsozialisten ermordeten Millionen Menschen, vor allem die Juden Europas (der Holocaust, etwa sechs Millionen), sowie Sinti und Roma, politische Gegner, Kranke und Homosexuelle.", answer: "die Juden Europas (der Holocaust)", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B5: { factId: "B5", statement: "In der Reichspogromnacht am 9. November 1938 wurden Synagogen angezündet und Jüdinnen und Juden angegriffen.", answer: "Synagogen brannten", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B6: { factId: "B6", statement: "Den Zweiten Weltkrieg begann das nationalsozialistische Deutschland 1939; in Europa endete er am 8. Mai 1945.", answer: "der 8. Mai 1945", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B7: { factId: "B7", statement: "Nach 1945 wurde Deutschland von den Alliierten besetzt und in vier Zonen geteilt (USA, Großbritannien, Frankreich, Sowjetunion).", answer: "von den Alliierten besetzt und geteilt", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B8: { factId: "B8", statement: "1949 entstanden zwei Staaten: die Bundesrepublik im Westen (Grundgesetz am 23. Mai 1949) und die DDR im Osten.", answer: "die Bundesrepublik und die DDR", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B9: { factId: "B9", statement: "Am 13. August 1961 baute die DDR die Berliner Mauer.", answer: "die DDR im Jahr 1961", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B10: { factId: "B10", statement: "Am 9. November 1989 fiel die Berliner Mauer.", answer: "der 9. November 1989", citation: "bpb.de", domain: "B_GESCHICHTE" },
  B11: { factId: "B11", statement: "Am 3. Oktober 1990 wurde Deutschland wiedervereinigt; der Feiertag heißt Tag der Deutschen Einheit.", answer: "der 3. Oktober 1990", citation: "bpb.de; tatsachen-ueber-deutschland.de", domain: "B_GESCHICHTE" },
  B12: { factId: "B12", statement: "Die deutsche Nationalflagge ist schwarz-rot-gold; der Nationalfeiertag ist der 3. Oktober.", answer: "schwarz-rot-gold", citation: "tatsachen-ueber-deutschland.de", domain: "B_GESCHICHTE" },

  // ── Domain D — society & coexistence ────────────────────────────────────
  D1: { factId: "D1", statement: "In Deutschland gilt Religionsfreiheit (Art. 4); es gibt keine Staatskirche.", answer: "jeder darf seine Religion frei wählen", citation: "Grundgesetz, Art. 4", domain: "D_GESELLSCHAFT" },
  D2: { factId: "D2", statement: "Artikel 3 Absatz 2: Männer und Frauen sind gleichberechtigt.", answer: "Männer und Frauen sind gleichberechtigt", citation: "Grundgesetz, Art. 3 Abs. 2", domain: "D_GESELLSCHAFT" },
  D3: { factId: "D3", statement: "In Deutschland gilt Schulpflicht ab etwa sechs Jahren; die öffentliche Schule ist kostenlos.", answer: "alle Kinder müssen zur Schule gehen", citation: "bpb.de", domain: "D_GESELLSCHAFT" },
  D4: { factId: "D4", statement: "Meinungs- und Pressefreiheit (Art. 5): Man darf die Regierung öffentlich kritisieren.", answer: "man darf die Regierung öffentlich kritisieren", citation: "Grundgesetz, Art. 5", domain: "D_GESELLSCHAFT" },
  D5: { factId: "D5", statement: "Der Sozialstaat bietet Kranken-, Renten- und Arbeitslosenversicherung.", answer: "Krankenversicherung und Rente", citation: "Grundgesetz, Art. 20", domain: "D_GESELLSCHAFT" },
  D6: { factId: "D6", statement: "Ehe und Familie sind geschützt (Art. 6); die Ehe steht seit 2017 auch gleichgeschlechtlichen Paaren offen.", answer: "auch für gleichgeschlechtliche Paare (seit 2017)", citation: "Grundgesetz, Art. 6", domain: "D_GESELLSCHAFT" },
  D7: { factId: "D7", statement: "Kinder haben ein Recht auf eine gewaltfreie Erziehung; körperliche Bestrafung ist verboten.", answer: "Gewalt gegen Kinder ist verboten", citation: "BGB § 1631 Abs. 2", domain: "D_GESELLSCHAFT" },
  D8: { factId: "D8", statement: "Toleranz und friedliches Zusammenleben gelten; niemand darf wegen Herkunft, Religion oder Geschlecht benachteiligt werden.", answer: "Toleranz und friedliches Zusammenleben", citation: "Grundgesetz, Art. 3", domain: "D_GESELLSCHAFT" },
  D9: { factId: "D9", statement: "Bürgerinnen und Bürger gestalten die Politik mit, indem sie ab 18 Jahren wählen.", answer: "durch Wählen bei Wahlen", citation: "Grundgesetz, Art. 38", domain: "D_GESELLSCHAFT" },
  D10: { factId: "D10", statement: "Wer in Deutschland lebt, muss die Gesetze beachten und Steuern zahlen.", answer: "die Gesetze beachten und Steuern zahlen", citation: "bpb.de", domain: "D_GESELLSCHAFT" },
};

/** Exams whose items are civic and therefore MUST be sourced from CIVIC_FACTS. */
export const CIVIC_EXAMS: readonly string[] = ["EINBUERGERUNGSTEST"];

/** Facts for one domain, in id order — the seed files build their items from these. */
export function factsForDomain(domain: CivicDomain): CivicFact[] {
  return Object.values(CIVIC_FACTS).filter((f) => f.domain === domain);
}

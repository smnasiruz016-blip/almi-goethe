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

export type CivicDomain =
  | "A_GRUNDGESETZ"
  | "B_GESCHICHTE"
  | "C_INSTITUTIONEN"
  | "D_GESELLSCHAFT"
  /** The per-state dimension. A fact in this domain is true of ONE Bundesland only. */
  | "E_BUNDESLAND";

/** The 16 Länder, by their official ISO 3166-2:DE subdivision letters. */
export type BundeslandCode =
  | "BW" | "BY" | "BE" | "BB" | "HB" | "HH" | "HE" | "MV"
  | "NI" | "NW" | "RP" | "SL" | "SN" | "ST" | "SH" | "TH";

export const BUNDESLAND_CODES: readonly BundeslandCode[] = [
  "BW", "BY", "BE", "BB", "HB", "HH", "HE", "MV", "NI", "NW", "RP", "SL", "SN", "ST", "SH", "TH",
];

export type CivicFact = {
  /** Stable id an item references from its payload.factId. */
  factId: string;
  /** The sourced statement, in the exam's own terms. */
  statement: string;
  /** The correct answer — the text the item's correct option carries verbatim. */
  answer: string;
  /** Where the fact is published. A civic fact with no citation is not sourced. */
  citation: string;
  /** Which Einbürgerungstest domain it anchors. */
  domain: CivicDomain;
  /**
   * Set ONLY on E_BUNDESLAND facts: the single Land this fact is true of. A federal
   * fact leaves it undefined. This is what makes a cross-state leak detectable —
   * an item tagged BE that reaches for a BY fact is caught because the fact itself
   * carries its state, rather than the item being trusted to file itself correctly.
   */
  bundesland?: BundeslandCode;
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

// ═══════════════════════════════════════════════════════════════════════════
// DOMAIN E — BUNDESLAND. The per-state dimension.
// ═══════════════════════════════════════════════════════════════════════════
//
// ── WHY THIS IS A SEPARATE MAP, NOT MORE ENTRIES IN CIVIC_FACTS ─────────────
// The 44 federal facts are true for every candidate. These are true for exactly
// ONE Land, and serving a Berliner a Bavarian answer is not a thin item — it is a
// wrong one, on the test that decides their naturalisation. Keeping them in a map
// KEYED BY STATE makes "never mix states" a property of the data structure rather
// than a rule the drawing code has to remember. CIVIC_FACTS is untouched: 44
// federal entries, exactly as before.
//
// ── SOURCING ────────────────────────────────────────────────────────────────
// Capitals: bpb.de. Parliament names: the "Parlamente in Deutschland" listing
// published by the Bayerischer Landtag (bayern.landtag.de). Where the founder's
// fact-base also named a state's own official portal, it is cited as corroboration
// — that is three states (BE, NW, HB). The other thirteen portal domains were NOT
// supplied and are NOT guessed: a citation is the one field that may never be
// inferred, and "berlin.de exists so baden-wuerttemberg.de probably does" is
// exactly the reasoning that puts a fabricated source in a civic bank.
//
// ── THE OFFICIAL NAME vs THE ANSWER STRING ──────────────────────────────────
// `parliament` holds the official name VERBATIM as sourced. `answer` is that name
// with a definite article, per the founder's entry pattern
// ("das Abgeordnetenhaus von Berlin", "die Bremische Bürgerschaft"). For the five
// names built on an adjective, the article forces the weak ending — the official
// "Bayerischer Landtag" becomes "der Bayerische Landtag", and likewise HE, NI, SN
// and SH. That is German declension, not a change to the sourced fact; the verbatim
// name is preserved in `parliament` and asserted inside every `statement`.
// (TH is not one of them: "Thüringer" is an invariable place-name form.)

export type BundeslandInfo = {
  code: BundeslandCode;
  /** Official name of the Land. */
  name: string;
  /** Landeshauptstadt. */
  capital: string;
  /** Official name of the Landesparlament, VERBATIM as sourced. */
  parliament: string;
  /** The parliament name carrying its definite article — the answer string. */
  parliamentAnswer: string;
  /** True for the three Stadtstaaten, which changes how the capital reads. */
  stadtstaat?: true;
  /** The state's own official portal, ONLY where it was supplied. Never inferred. */
  portal?: string;
};

export const BUNDESLAENDER: Record<BundeslandCode, BundeslandInfo> = {
  BW: { code: "BW", name: "Baden-Württemberg", capital: "Stuttgart", parliament: "Landtag von Baden-Württemberg", parliamentAnswer: "der Landtag von Baden-Württemberg" },
  BY: { code: "BY", name: "Bayern", capital: "München", parliament: "Bayerischer Landtag", parliamentAnswer: "der Bayerische Landtag" },
  BE: { code: "BE", name: "Berlin", capital: "Berlin", parliament: "Abgeordnetenhaus von Berlin", parliamentAnswer: "das Abgeordnetenhaus von Berlin", stadtstaat: true, portal: "berlin.de" },
  BB: { code: "BB", name: "Brandenburg", capital: "Potsdam", parliament: "Landtag Brandenburg", parliamentAnswer: "der Landtag Brandenburg" },
  HB: { code: "HB", name: "Bremen", capital: "Bremen", parliament: "Bremische Bürgerschaft", parliamentAnswer: "die Bremische Bürgerschaft", stadtstaat: true, portal: "bremische-buergerschaft.de" },
  HH: { code: "HH", name: "Hamburg", capital: "Hamburg", parliament: "Hamburgische Bürgerschaft", parliamentAnswer: "die Hamburgische Bürgerschaft", stadtstaat: true },
  HE: { code: "HE", name: "Hessen", capital: "Wiesbaden", parliament: "Hessischer Landtag", parliamentAnswer: "der Hessische Landtag" },
  MV: { code: "MV", name: "Mecklenburg-Vorpommern", capital: "Schwerin", parliament: "Landtag Mecklenburg-Vorpommern", parliamentAnswer: "der Landtag Mecklenburg-Vorpommern" },
  NI: { code: "NI", name: "Niedersachsen", capital: "Hannover", parliament: "Niedersächsischer Landtag", parliamentAnswer: "der Niedersächsische Landtag" },
  NW: { code: "NW", name: "Nordrhein-Westfalen", capital: "Düsseldorf", parliament: "Landtag Nordrhein-Westfalen", parliamentAnswer: "der Landtag Nordrhein-Westfalen", portal: "land.nrw" },
  RP: { code: "RP", name: "Rheinland-Pfalz", capital: "Mainz", parliament: "Landtag Rheinland-Pfalz", parliamentAnswer: "der Landtag Rheinland-Pfalz" },
  SL: { code: "SL", name: "Saarland", capital: "Saarbrücken", parliament: "Landtag des Saarlandes", parliamentAnswer: "der Landtag des Saarlandes" },
  SN: { code: "SN", name: "Sachsen", capital: "Dresden", parliament: "Sächsischer Landtag", parliamentAnswer: "der Sächsische Landtag" },
  ST: { code: "ST", name: "Sachsen-Anhalt", capital: "Magdeburg", parliament: "Landtag von Sachsen-Anhalt", parliamentAnswer: "der Landtag von Sachsen-Anhalt" },
  SH: { code: "SH", name: "Schleswig-Holstein", capital: "Kiel", parliament: "Schleswig-Holsteinischer Landtag", parliamentAnswer: "der Schleswig-Holsteinische Landtag" },
  TH: { code: "TH", name: "Thüringen", capital: "Erfurt", parliament: "Thüringer Landtag", parliamentAnswer: "der Thüringer Landtag" },
};

function capitalFact(b: BundeslandInfo): CivicFact {
  return {
    factId: `${b.code}_CAP`,
    statement: b.stadtstaat
      ? `${b.name} ist ein Stadtstaat; die Landeshauptstadt ist ${b.capital} selbst.`
      : `Die Landeshauptstadt von ${b.name} ist ${b.capital}.`,
    answer: b.capital,
    citation: b.portal ? `bpb.de; ${b.portal}` : "bpb.de",
    domain: "E_BUNDESLAND",
    bundesland: b.code,
  };
}

function parliamentFact(b: BundeslandInfo): CivicFact {
  return {
    factId: `${b.code}_PARL`,
    // The VERBATIM official name goes in the statement, so the sourced string
    // survives even though the answer carries a declined article.
    statement: `Das Landesparlament von ${b.name} heißt ${b.parliament}.`,
    answer: b.parliamentAnswer,
    citation: b.portal
      ? `bayern.landtag.de (Parlamente in Deutschland); ${b.portal}`
      : "bayern.landtag.de (Parlamente in Deutschland)",
    domain: "E_BUNDESLAND",
    bundesland: b.code,
  };
}

/** 16 states × 2 anchors (capital + parliament) = 32 sourced per-state facts. */
export const BUNDESLAND_FACTS: Record<BundeslandCode, CivicFact[]> = Object.fromEntries(
  BUNDESLAND_CODES.map((c) => [c, [capitalFact(BUNDESLAENDER[c]), parliamentFact(BUNDESLAENDER[c])]]),
) as Record<BundeslandCode, CivicFact[]>;

/** Flat factId → fact index over every per-state fact. */
export const BUNDESLAND_FACT_INDEX: Record<string, CivicFact> = Object.fromEntries(
  BUNDESLAND_CODES.flatMap((c) => BUNDESLAND_FACTS[c].map((f) => [f.factId, f])),
);

export function isBundeslandCode(v: unknown): v is BundeslandCode {
  return typeof v === "string" && (BUNDESLAND_CODES as readonly string[]).includes(v);
}

/**
 * How many per-state items a candidate can actually be served for their Land.
 * The real Einbürgerungstest asks THREE state questions; this fact-base sources
 * TWO anchors per state, so the honest number is 2 — reported, never padded.
 */
export const BUNDESLAND_ITEMS_PER_STATE = 2;
export const BUNDESLAND_ITEMS_IN_REAL_TEST = 3;

// CIVIC FACT-BASE — the sourced truth every Einbürgerungstest (and later ÖIF
// Werte) item must map to.
//
// ── WHY THIS FILE IS THE INVERSE OF THE REAL-ENTITY GATE ────────────────────
// real-entity forbids an INVENTED document from naming a REAL organisation. A
// civic item is the opposite obligation: it MUST name real institutions
// (Grundgesetz, Bundestag, Bundesrat, Bundespräsident, BAMF), and every fact it
// asserts must be TRUE and ATTRIBUTABLE. A civic item that fabricated a fact —
// even a plausible one — would teach a citizenship candidate something false
// about the state they are joining. That is the one place fabrication is not a
// style problem but a harm.
//
// So a civic item may not carry a free-authored claim. It must reference a
// `factId` in this fact-base, and the answer-distribution/conformance gates are
// joined by a CIVIC-SOURCING gate that refuses any civic item whose factId maps
// to no entry here, whose keyed answer disagrees with the entry, or whose entry
// carries no citation.
//
// ── STATUS: STRUCTURE READY, ENTRIES PENDING (engine ③) ─────────────────────
// The Einbürgerungstest engine is batch 2. The 44 anchor facts — domains
// A (Grundgesetz), B (Geschichte), C (Institutionen), D (Gesellschaft), each with
// an answer and a citation — are researched and will be pasted in when the engine
// and its item shape exist, so the entries are validated against a real consumer
// rather than committed to sit unused. Until then this map is intentionally EMPTY:
// there are no civic items yet, so an empty fact-base is correct, and the gate is
// proven RED against fixtures (see civic-sourcing-gate.test.mts), not against an
// empty live bank that would pass vacuously.
//
// SCHEMA PER ENTRY (as agreed): { factId, statement, answer, citation }.

export type CivicDomain = "A_GRUNDGESETZ" | "B_GESCHICHTE" | "C_INSTITUTIONEN" | "D_GESELLSCHAFT";

export type CivicFact = {
  /** Stable id an item references from its payload.factId. */
  factId: string;
  /** The sourced statement, in the exam's own terms. */
  statement: string;
  /** The correct answer (the option text or value the key must agree with). */
  answer: string;
  /** Where the fact is published. A civic fact with no citation is not sourced. */
  citation: string;
  /** Which of the four Einbürgerungstest domains it anchors. */
  domain?: CivicDomain;
};

/** The 44 anchor facts land here at engine ③. Empty by design until then. */
export const CIVIC_FACTS: Record<string, CivicFact> = {};

/** Exams whose items are civic and therefore MUST be sourced from CIVIC_FACTS. */
export const CIVIC_EXAMS: readonly string[] = ["EINBUERGERUNGSTEST"];

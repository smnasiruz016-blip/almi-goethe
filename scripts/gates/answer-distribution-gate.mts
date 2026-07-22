// ANSWER-KEY DISTRIBUTION GATE — is the correct answer gameable from its position?
//
// Run: npm run gate:answer-distribution
//
// ── WHY ─────────────────────────────────────────────────────────────────────
// telc B1 Sprachbausteine was authored correct-choice-first — the only practical
// way to track 160 gaps. Shipped that way, every Teil 1 answer was "a" and Teil 2
// ran a,b,c… straight down. A learner who always picked the first option would
// have scored 100% knowing no German. Later, telc B1 Hörverstehen was found to
// have three richtig/falsch items running r-f-r-f-r straight down — the same
// defect in a binary skin.
//
// NO OTHER GATE CAN SEE THIS. Conformance checks that an item matches a real
// Aufgabe; every one of these items did. rule7 counts; titles dedupe; real-entity
// hunts brands. The answer KEY's shape is a fourth, orthogonal failure: the item
// is perfect except that its correct answers form a pattern.
//
// ── THE GATE IS TYPE-AWARE. Founder decision, 2026-07-22. ────────────────────
// A position-only rule would wave a perfectly rhythmic richtig/falsch bank
// through, because in a binary item position carries no information. So the gate
// dispatches on item type:
//
//   MULTI  (>=3 options)  — POSITION DISTRIBUTION. No option may be degenerate
//                           (never correct across the whole Aufgabe) and none may
//                           be clustered past a threshold. This is what the
//                           deterministic title+index permutation exists to
//                           satisfy. Matching tasks (many options, few answers)
//                           are judged on clustering ONLY — a heading list longer
//                           than the text list is SUPPOSED to leave options unused.
//   BINARY (2 options)    — BALANCE across the Aufgabe (neither value past a
//                           threshold) PLUS two within-item shape checks: no
//                           uniform run (all-same) and no alternating rhythm
//                           (r-f-r-f). Position means nothing here; shape is
//                           everything.
//
// ── WHOLE-BANK, BOTH BANKS ──────────────────────────────────────────────────
// Iterates every authored objective item in BOTH the Goethe and the exam bank,
// exactly like the conformance gate, so no item is invisible. Gap-fill items whose
// answers are free text (no options) have no position and are skipped — counted,
// not silently dropped.
//
// ── THIS CLOSES A DEFECT CLASS, NOT ONE BANK ────────────────────────────────
// The checker below is a pure function so the RED-first proof can drive it with
// fixtures, and so any sibling product's listening/reading r-f bank can import the
// same logic. Seen red before trusted — see answer-distribution-gate.test.mts.

import { goetheBank, examBank } from "./_bank.mjs";

// ── thresholds ──────────────────────────────────────────────────────────────
// Deliberately loose, so a violation is a real pattern and not sampling noise.
export const THRESHOLDS = {
  /** A scope smaller than this is not judged on distribution — too few answers
   *  to tell a pattern from chance. Within-item shape checks still apply. */
  MIN_SCOPE_Q: 6,
  /** A single option holding more than this share of a fixed-option Aufgabe is
   *  clustered. 0.60 sits well above an even 3-way (0.33) or 4-way (0.25) split. */
  CLUSTER_FRAC: 0.6,
  /** In a binary Aufgabe, one value past this share is skewed. */
  BINARY_BALANCE_FRAC: 0.75,
  /** Within-item shape checks need at least this many questions to be meaningful. */
  MIN_ITEM_Q: 3,
  /** An alternating rhythm is only flagged from this length up, so a chance
   *  two-item a,b is never a "rhythm". r-f-r-f (4) is; r-f (2) is not. */
  MIN_ALT_LEN: 4,
  /** Fixed-option MC has at most this many options per question; above it the item
   *  is a MATCHING task and unused options are expected by design. */
  MAX_FIXED_OPTS: 6,
};

export type DistItem = {
  exam?: string;
  level?: string;
  section?: string;
  taskType?: string;
  title?: string;
  payload?: any;
};

export type DistViolation = {
  scope: string;
  title: string;
  kind: "uniform-run" | "alternating-rhythm" | "dead-option" | "clustered" | "binary-skew";
  detail: string;
};

type ObjQ = { answer?: string; options?: { id: string }[] };

function scopeOf(it: DistItem): string {
  const t = it.taskType ?? "";
  return `${it.exam ?? "?"}::${it.section ?? "?"}${t ? `::${t}` : ""}`;
}

/** Pull the objective questions that carry a position (an option id answer). An
 *  item whose answers are free text (gap-fill) yields []. */
function positionalQuestions(it: DistItem): { answer: string; optIds: string[] }[] {
  const qs: ObjQ[] = Array.isArray(it.payload?.questions) ? it.payload.questions : [];
  const out: { answer: string; optIds: string[] }[] = [];
  for (const q of qs) {
    const optIds = Array.isArray(q.options) ? q.options.map((o) => o.id) : [];
    if (optIds.length < 2) continue; // no options → free-text gap-fill → no position
    if (typeof q.answer !== "string") continue;
    if (!optIds.includes(q.answer)) continue; // answer isn't one of the ids → not positional
    out.push({ answer: q.answer, optIds });
  }
  return out;
}

/** THE CHECK. Pure: takes items, returns violations. Both the gate and its proof
 *  drive this. */
export function checkDistribution(
  items: DistItem[],
  th = THRESHOLDS,
): { violations: DistViolation[]; scanned: number; skipped: number } {
  const violations: DistViolation[] = [];
  let scanned = 0;
  let skipped = 0;

  // Group positional questions by Aufgabe scope, and remember each item's own
  // answer sequence for the within-item shape checks.
  const byScope = new Map<
    string,
    { answers: string[]; optUniverse: Set<string>; maxOpts: number; minOpts: number; items: { title: string; seq: string[] }[] }
  >();

  for (const it of items) {
    const pq = positionalQuestions(it);
    if (pq.length === 0) {
      skipped++;
      continue;
    }
    scanned++;
    const s = scopeOf(it);
    const bucket =
      byScope.get(s) ??
      { answers: [], optUniverse: new Set<string>(), maxOpts: 0, minOpts: Infinity, items: [] };
    const seq: string[] = [];
    for (const { answer, optIds } of pq) {
      bucket.answers.push(answer);
      for (const id of optIds) bucket.optUniverse.add(id);
      bucket.maxOpts = Math.max(bucket.maxOpts, optIds.length);
      bucket.minOpts = Math.min(bucket.minOpts, optIds.length);
      seq.push(answer);
    }
    bucket.items.push({ title: it.title ?? "(untitled)", seq });
    byScope.set(s, bucket);
  }

  for (const [scope, b] of byScope) {
    const isBinary = b.maxOpts === 2;
    const isFixedMC = !isBinary && b.maxOpts <= th.MAX_FIXED_OPTS && b.minOpts === b.maxOpts;
    const n = b.answers.length;

    // ── within-item shape (both kinds) ──
    for (const { title, seq } of b.items) {
      if (seq.length >= th.MIN_ITEM_Q && new Set(seq).size === 1) {
        violations.push({
          scope,
          title,
          kind: "uniform-run",
          detail: `all ${seq.length} answers are "${seq[0]}"`,
        });
      }
      if (isBinary && seq.length >= th.MIN_ALT_LEN) {
        const alternating = seq.every((a, i) => i === 0 || a !== seq[i - 1]);
        if (alternating) {
          violations.push({
            scope,
            title,
            kind: "alternating-rhythm",
            detail: `answers alternate straight down: ${seq.join("-")}`,
          });
        }
      }
    }

    // ── scope distribution (needs a meaningful sample) ──
    if (n < th.MIN_SCOPE_Q) continue;
    const count = new Map<string, number>();
    for (const a of b.answers) count.set(a, (count.get(a) ?? 0) + 1);

    if (isBinary) {
      const top = Math.max(...count.values());
      if (top / n > th.BINARY_BALANCE_FRAC) {
        const dist = [...count].sort().map(([k, v]) => `${k}:${v}`).join(" ");
        violations.push({
          scope,
          title: "(whole Aufgabe)",
          kind: "binary-skew",
          detail: `one value holds ${top}/${n} (${Math.round((100 * top) / n)}%); dist ${dist}`,
        });
      }
    } else {
      // MULTI: clustering always; dead-option only for fixed-option MC (matching
      // tasks are supposed to leave options unused).
      const top = Math.max(...count.values());
      if (top / n > th.CLUSTER_FRAC) {
        const worst = [...count].sort((a, b2) => b2[1] - a[1])[0][0];
        violations.push({
          scope,
          title: "(whole Aufgabe)",
          kind: "clustered",
          detail: `option "${worst}" is correct ${top}/${n} times (${Math.round((100 * top) / n)}%)`,
        });
      }
      if (isFixedMC) {
        const dead = [...b.optUniverse].filter((id) => !count.has(id)).sort();
        if (dead.length > 0) {
          violations.push({
            scope,
            title: "(whole Aufgabe)",
            kind: "dead-option",
            detail: `option(s) never correct across ${n} questions: ${dead.join(", ")}`,
          });
        }
      }
    }
  }

  return { violations, scanned, skipped };
}

// ── gate entry point (skipped when imported by the proof) ───────────────────
const isMain = import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("answer-distribution-gate.mts");
if (isMain) {
  const all = [...(goetheBank() as DistItem[]), ...(examBank() as DistItem[])];
  const { violations, scanned, skipped } = checkDistribution(all);

  if (violations.length > 0) {
    // Group by scope for a legible report.
    const byScope = new Map<string, DistViolation[]>();
    for (const v of violations) byScope.set(v.scope, [...(byScope.get(v.scope) ?? []), v]);
    console.error(`\n✗ ANSWER-DISTRIBUTION GATE FAILED — ${violations.length} finding(s) in ${byScope.size} Aufgabe(n).\n`);
    for (const [scope, vs] of [...byScope].sort()) {
      console.error(`  ${scope}`);
      for (const v of vs) console.error(`      [${v.kind}] ${v.title} — ${v.detail}`);
      console.error("");
    }
    console.error(`  ${scanned} objective items scanned, ${skipped} skipped (free-text gap-fill, no position).`);
    console.error(`  Fix the KEY distribution — permute the correct option deterministically (title+index),`);
    console.error(`  or redistribute which option is keyed. Never make an item wrong to satisfy a count.\n`);
    process.exit(1);
  }

  console.log(`\n✓ ANSWER-DISTRIBUTION GATE: ${scanned} objective items — no gameable key pattern.`);
  console.log(`  ${skipped} free-text gap-fill item(s) skipped (no answer position).`);
}

// ZUORDNUNG REDACTION PROOF — the shared bank ships; the assignments do not.
//
// Run: npm run gate:redaction:proof
//
// ── TWO FAILURES THIS CATCHES, AND WHY NEITHER IS OBVIOUS ──────────────────
//
// 1. THE BANK IS SILENTLY STRIPPED. objectivePayloadSchema is a non-strict
//    z.object, so Zod DROPS keys it does not declare — and pickClientItem sends
//    `parsed.data`, not the original payload. An undeclared `bank` therefore
//    disappears between the database and the learner: a Zuordnung renders with ten
//    questions and nothing to assign them to, and NOTHING ERRORS. The seed is fine,
//    the gates are green, the database row is correct, and the page is broken. This
//    was found on `segments` in Stage B and applies identically here.
//
// 2. THE ASSIGNMENTS SHIP. The bank must reach the client — a learner has to read
//    the headlines to pick one. The mapping question→bank-entry must not, for the
//    same reason an MCQ key must not. The risk is specific to this format: for an
//    MCQ the key is obviously "the answer field", but a Zuordnung looks like it is
//    "just a list of options", and a redactor written for MCQs could plausibly be
//    read as already handling it.
//
// So this asserts BOTH directions on the real functions, not on a copy of them.

import {
  objectivePayloadSchema,
  redactObjectivePayload,
  scoreObjective,
  productivePayloadSchema,
} from "../../src/lib/exams/tasks";

let failures = 0;
function check(label: string, ok: boolean, detail = "") {
  if (ok) console.log(`  ✓ ${label}`);
  else {
    failures++;
    console.error(`  ✗ ${label}${detail ? `\n      ${detail}` : ""}`);
  }
}

console.log("\nZUORDNUNG REDACTION PROOF\n");

const BANK = "abcdefghij".split("").map((id, i) => ({ id, text: `Überschrift ${i + 1}` }));
const RAW = {
  instructions: "Ordnen Sie zu.",
  bank: BANK,
  questions: [
    { id: "q1", stem: "Text 1", answer: "c" },
    { id: "q2", stem: "Text 2", answer: "h" },
    { id: "q3", stem: "Text 3", answer: "a" },
  ],
};

// ── 1. THE BANK SURVIVES THE PARSE ──
const parsed = objectivePayloadSchema.safeParse(RAW);
check("a Zuordnung payload parses", parsed.success, parsed.success ? "" : JSON.stringify(parsed.error.issues));
if (!parsed.success) { console.error("\ncannot continue\n"); process.exit(1); }

const data = parsed.data as any;
check("the shared bank SURVIVES the Zod parse (not silently stripped)", Array.isArray(data.bank) && data.bank.length === 10);
check("every bank entry keeps its id AND its text", data.bank.every((b: any) => b.id && b.text));

// The control: an undeclared key IS stripped. If this ever stops being true the
// trap has gone away and the reasoning above should be revisited — but while it
// holds, it is the reason `bank` had to be declared.
const withUnknown = objectivePayloadSchema.safeParse({ ...RAW, notDeclared: [{ id: "z" }] });
check(
  "control: an UNDECLARED key is silently stripped (this is the trap)",
  withUnknown.success && !("notDeclared" in (withUnknown.data as any)),
);

// ── 2. THE ASSIGNMENTS DO NOT SHIP ──
const client = redactObjectivePayload(parsed.data) as any;
check("the client payload still carries the bank", Array.isArray(client.bank) && client.bank.length === 10);
check("the client payload carries every question", client.questions.length === 3);
check(
  "NO question carries its assignment",
  client.questions.every((q: any) => q.answer === ""),
  `got: ${client.questions.map((q: any) => `${q.id}=${JSON.stringify(q.answer)}`).join(", ")}`,
);
// The decisive one: the key must not be recoverable ANYWHERE in what is sent.
const serialised = JSON.stringify(client);
const leaked = ["c", "h", "a"].filter((_, i) => {
  const q = RAW.questions[i];
  return serialised.includes(`"${q.id}"`) && serialised.includes(`"answer":"${q.answer}"`);
});
check("the assignment mapping is not recoverable from the serialised client payload", leaked.length === 0, `leaked: ${leaked.join(", ")}`);
// And the bank must not be ORDERED so that question N maps to bank entry N.
const positional = RAW.questions.every((q, i) => q.answer === BANK[i].id);
check("the bank is not positionally ordered to give the answers away", !positional);

// ── 3. THE SERVER STILL MARKS CORRECTLY FROM THE UNREDACTED PAYLOAD ──
const result = scoreObjective(parsed.data, { answers: { q1: "c", q2: "h", q3: "a" } });
check("a fully correct submission marks 3/3", result.pointsEarned === 3 && result.pointsMax === 3);
const wrong = scoreObjective(parsed.data, { answers: { q1: "a", q2: "h", q3: "a" } });
check("a wrong assignment is marked wrong", wrong.pointsEarned === 2);

// ── 4. THE SAME TRAP ON THE PRODUCTIVE SIDE ────────────────────────────────
// Three payload fields have now hit this in three stages — `segments` (HV Teil 3),
// `bank` (Zuordnung) and `themen` (the telc 1-of-2 writing choice). The productive
// schema is a separate non-strict z.object parsed at registry.ts:228, so it needs its
// own assertion: an undeclared `themen` silently drops and the Brief renders with no
// topics at all. Verified by mutation — removing the declaration strips all 16.
const prod = productivePayloadSchema.safeParse({
  situation: "Rahmen",
  instruction: "Wählen Sie ein Thema.",
  themen: [
    { label: "Thema 1", situation: "…", leitpunkte: ["a", "b", "c"] },
    { label: "Thema 2", situation: "…", leitpunkte: ["a", "b", "c"] },
  ],
  wordMin: 130,
  wordMax: 180,
});
check("a productive payload with a 1-of-2 choice parses", prod.success);
check(
  "`themen` SURVIVES the productive parse (both Themen reach the learner)",
  prod.success && Array.isArray((prod.data as any).themen) && (prod.data as any).themen.length === 2,
);
check(
  "each Thema keeps its Leitpunkte",
  prod.success && (prod.data as any).themen?.every((t: any) => Array.isArray(t.leitpunkte) && t.leitpunkte.length >= 3),
);

console.log("");
if (failures > 0) {
  console.error(`✗ Zuordnung redaction proof FAILED — ${failures} case(s) wrong.\n`);
  process.exit(1);
}
console.log("✓ Zuordnung redaction proof: bank survives the parse and ships; assignments never leave the server.\n");

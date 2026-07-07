// Dev-only: validate every EXAM seed item before it can reach the DB. Checks:
//   1. section is valid for the exam (registry),
//   2. payload matches the section's runtime schema (objective vs productive),
//   3. answer-key integrity — every objective question's answer references a real
//      option id (when options are present); productive tasks carry an instruction,
//   4. no duplicate (exam,level,section,title).
// Run: tsx scripts/validate-exam-seed.ts
import { ITEMS as TESTDAF } from "./seed/exams/testdaf";
import { ITEMS as C1H } from "./seed/exams/telc-c1-hochschule";
import { ITEMS as B1 } from "./seed/exams/telc-b1";
import { ITEMS as B2 } from "./seed/exams/telc-b2";
import { sectionDefFor } from "../src/lib/exams/registry";
import { objectivePayloadSchema, productivePayloadSchema } from "../src/lib/exams/tasks";
import type { GermanExam } from "@prisma/client";

const all = [...TESTDAF, ...C1H, ...B1, ...B2];
let bad = 0;
const fail = (msg: string) => {
  bad++;
  console.error(`FAIL ${msg}`);
};

const keys = new Set<string>();
for (const it of all) {
  const tag = `[${it.exam} ${it.section}] ${it.title}`;
  const def = sectionDefFor(it.exam as GermanExam, it.section as string);
  if (!def) {
    fail(`${tag}: section not valid for exam`);
    continue;
  }

  const dupKey = `${it.exam}::${it.level}::${it.section}::${it.title}`;
  if (keys.has(dupKey)) fail(`${tag}: duplicate (exam,level,section,title)`);
  keys.add(dupKey);

  if (def.kind === "objective") {
    const res = objectivePayloadSchema.safeParse(it.payload);
    if (!res.success) {
      fail(`${tag}: bad objective payload ${JSON.stringify(res.error).slice(0, 200)}`);
      continue;
    }
    for (const q of res.data.questions) {
      if (q.options && q.options.length > 0) {
        const ids = new Set(q.options.map((o) => o.id));
        if (!ids.has(q.answer)) fail(`${tag} q=${q.id}: answer "${q.answer}" not an option id`);
      } else if (!q.answer.trim()) {
        fail(`${tag} q=${q.id}: gap-fill answer is empty`);
      }
    }
  } else {
    const res = productivePayloadSchema.safeParse(it.payload);
    if (!res.success) {
      fail(`${tag}: bad productive payload ${JSON.stringify(res.error).slice(0, 200)}`);
      continue;
    }
    if (!res.data.instruction.trim() || !res.data.situation.trim()) {
      fail(`${tag}: productive task missing situation/instruction`);
    }
  }
}

console.log(bad ? `\n${bad} problem(s) across ${all.length} items` : `All ${all.length} exam items valid ✓`);
process.exit(bad ? 1 : 0);

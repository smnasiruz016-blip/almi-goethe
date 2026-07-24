// RENDER GATE for ExamItemRunner — the standing proof that every served section shape
// actually renders, not just that its items pass the authoring gates.
//
// WHY THIS EXISTS. The authoring gates (conformance, distribution, rule7 …) were fully
// GREEN over telc B2's Leseverstehen Zuordnung while the runner shipped it as a bare
// text box with no bank to choose from — a section learners could not use. Green
// authoring ≠ served correctly. This renders one mock per served shape with
// react-dom/server (no DB — the runner takes a ClientItem prop) and asserts the UI.
//
// SEEN RED. Checked out against the pre-fix runner, every shape below fails (no bank /
// segments / notizen / choice branch). See the mutation run in the review notes.
//
// Run: npm run gate:runner:proof

import { renderToStaticMarkup } from "react-dom/server";
import { createElement as h } from "react";
import { ExamItemRunner } from "../../src/components/exams/ExamItemRunner";

let fail = 0;
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log("  ✓ " + msg);
  else {
    console.error("  ✗ " + msg);
    fail++;
  }
};
const count = (s: string, sub: string) => s.split(sub).length - 1;
const render = (props: Record<string, unknown>) =>
  renderToStaticMarkup(h(ExamItemRunner as never, { isTestDaf: false, thresholdPending: false, ...props } as never));

const objBase = { exam: "TELC_C1_HOCHSCHULE", guidanceNote: null, timeLimitSeconds: 600, kind: "objective" as const };

// ── 1. Zuordnung (C1H LV/HV): shared bank rendered as a <select> per question ──
console.log("Zuordnung (C1H) — bank + segments:");
const z = render({
  item: {
    ...objBase, id: "z1", section: "LESEVERSTEHEN", taskType: "TELC_C1H_LV_T1_ZUORDNUNG", title: "Z", prompt: "",
    payload: {
      instructions: "inst",
      segments: [{ id: "s1", label: "Person 1", script: "SEGTEXT_ONE" }, { id: "s2", label: "Person 2", script: "SEGTEXT_TWO" }],
      bank: [{ id: "a", text: "HEADING_AAA" }, { id: "b", text: "HEADING_BBB" }, { id: "c", text: "HEADING_CCC" }],
      questions: [{ id: "q1", stem: "Person 1" }, { id: "q2", stem: "Person 2" }],
    },
  },
});
ok(count(z, "<select") === 2, "one <select> per question (2)");
ok(z.includes("HEADING_AAA") && z.includes("HEADING_BBB") && z.includes("HEADING_CCC"), "every bank option appears inside the selects");
ok(z.includes("SEGTEXT_ONE") && z.includes("SEGTEXT_TWO"), "each spoken segment renders");

// ── 2. B2 Zuordnung — the PRODUCTION INCIDENT, covered explicitly ─────────────
console.log("B2 Zuordnung (production incident):");
const b2 = render({
  item: {
    exam: "TELC_B2", guidanceNote: null, timeLimitSeconds: 480, kind: "objective",
    id: "b2", section: "LESEVERSTEHEN", taskType: "TELC_B2_LV_T1_UEBERSCHRIFTEN", title: "B2Z", prompt: "",
    payload: {
      instructions: "",
      segments: [{ id: "t1", label: "Text 1", script: "B2_SEGMENT" }],
      bank: [{ id: "a", text: "B2_HEADING_X" }, { id: "b", text: "B2_HEADING_Y" }],
      questions: [{ id: "q1", stem: "Text 1" }],
    },
  },
});
ok(b2.includes("<select") && b2.includes("B2_HEADING_X") && b2.includes("B2_HEADING_Y"), "B2 bank renders (was a bare text box in production)");

// ── 3. Note-sheet (notizen): one input per gap line + context lines ───────────
console.log("Note-sheet (notizen):");
const n = render({
  item: {
    ...objBase, id: "n1", section: "HOERVERSTEHEN", taskType: "TELC_C1H_HV_T3_NOTIZEN", title: "N", prompt: "",
    payload: {
      instructions: "", audioScript: "der Vortrag",
      notizen: [{ text: "HEAD_CONTEXT" }, { text: "Gap Alpha", gap: "q1" }, { text: "Gap Beta", gap: "q2" }],
      questions: [{ id: "q1", stem: "Gap Alpha" }, { id: "q2", stem: "Gap Beta" }],
    },
  },
});
ok(count(n, 'type="text"') === 2, "one text input per gap line (2)");
ok(n.includes("HEAD_CONTEXT"), "note-sheet context line renders");
ok(n.includes("Gap Alpha") && n.includes("Gap Beta"), "each gap label renders");

// ── 4. Productive single (writing) ───────────────────────────────────────────
console.log("Productive single:");
const w = render({
  item: {
    exam: "TELC_C1_HOCHSCHULE", guidanceNote: null, timeLimitSeconds: 4200, kind: "writing",
    id: "w1", section: "SCHRIFTLICHER_AUSDRUCK", taskType: "TELC_C1H_SA_STELLUNGNAHME", title: "W", prompt: "",
    payload: { situation: "SITUATION_TEXT", instruction: "INSTRUCTION_TEXT", wordMin: 250, wordMax: 380 },
  },
});
ok(w.includes("SITUATION_TEXT") && w.includes("INSTRUCTION_TEXT"), "situation + instruction render");
ok(w.includes("<textarea"), "textarea renders");

// ── 5. 1-of-2 choice pair: two theme radios, textarea disabled until chosen ───
console.log("1-of-2 choice:");
const wBase = {
  exam: "TELC_C1_HOCHSCHULE" as const, guidanceNote: null, timeLimitSeconds: 4200, kind: "writing" as const,
  section: "SCHRIFTLICHER_AUSDRUCK", taskType: "TELC_C1H_SA_STELLUNGNAHME", prompt: "",
};
const themeA = { ...wBase, id: "tA", title: "Thema A", payload: { situation: "SIT_A", instruction: "INS_A", wordMin: 250, wordMax: 380 } };
const themeB = { ...wBase, id: "tB", title: "Thema B", payload: { situation: "SIT_B", instruction: "INS_B", wordMin: 250, wordMax: 380 } };
const c = render({ item: themeA, choices: [themeA, themeB] });
ok(count(c, 'name="thema"') === 2, "two theme radios");
ok(c.includes("SIT_A") && c.includes("SIT_B"), "both themes' situations render");
ok(c.includes("disabled"), "textarea is disabled until a theme is chosen");
ok(c.includes("Wählen Sie zuerst ein Thema"), "textarea prompts to choose a theme first");

// Note: the "submit sends the CHOSEN theme's id" behaviour is interactive; it is proven
// separately — activeItem = choices[chosen] is a pure derivation, and the distinct-pair
// draw is unit-checked in pick.ts. Static render here proves both themes are present and
// selectable and that writing is blocked until a choice is made.

if (fail === 0) {
  console.log("\n✓ EXAM-RUNNER RENDER GATE: every served shape renders (bank, segments, note-sheet, productive, 1-of-2 choice; B2 Zuordnung covered).");
} else {
  console.error(`\n✗ EXAM-RUNNER RENDER GATE FAILED — ${fail} assertion(s). A served shape does not render.`);
  process.exit(1);
}

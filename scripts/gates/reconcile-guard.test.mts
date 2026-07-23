// RED-FIRST PROOF for the seed reconciliation safety limit.
//
// Run: npm run gate:reconcile:proof   (wired into `build`)
//
// The limit in exam-append.ts can deactivate rows, so it can also empty the bank —
// a bad import, a half-written seed file, a renamed section. It refuses when the
// deactivation is large in PROPORTION or in ABSOLUTE terms.
//
// That guard cannot be exercised on a developer machine: DATABASE_URL is a Vercel
// *sensitive* variable that `env pull` will not return, so there is no local
// database to reconcile against. Without this file the limit would ship having
// never once been observed to fire — which is how three gates in this family ended
// up green and blind. So the decision is a pure function and is proven here.
//
// The FIRST case is the one that matters right now: re-authoring the 128
// non-conformant TestDaF/telc B1 items is itself a large reconciliation, and it
// MUST trip this limit rather than sail through unnoticed.

import { refusesReconcile, MAX_DEACTIVATE_FRACTION, MAX_DEACTIVATE_ROWS } from "../seed/exam-append";

let failures = 0;
function check(label: string, got: boolean, want: boolean) {
  if (got !== want) {
    failures++;
    console.error(`  ✗ ${label} — expected ${want ? "REFUSE" : "allow"}, got ${got ? "REFUSE" : "allow"}`);
  } else {
    console.log(`  ${want ? "✓ refuses" : "✓ allows  "}  ${label}`);
  }
}

console.log("reconciliation safety limit — RED-first proof\n");
console.log(` limits: >${MAX_DEACTIVATE_FRACTION * 100}% of live rows, or >${MAX_DEACTIVATE_ROWS} rows\n`);

// must REFUSE
check("re-authoring 128 of 304 exam items (42%)", refusesReconcile(128, 304, false), true);
check("a broken import that would clear the whole bank", refusesReconcile(304, 304, false), true);
check("just over the proportional limit (20 of 100)", refusesReconcile(20, 100, false), true);
check(`just over the absolute limit (${MAX_DEACTIVATE_ROWS + 1} of 5000)`, refusesReconcile(MAX_DEACTIVATE_ROWS + 1, 5000, false), true);

// must ALLOW
check("nothing to deactivate", refusesReconcile(0, 304, false), false);
check("a routine correction (10 of 304, 3.3%)", refusesReconcile(10, 304, false), false);
check("exactly at the proportional limit (15 of 100)", refusesReconcile(15, 100, false), false);
check("the same large reconciliation with RECONCILE_FORCE=1", refusesReconcile(128, 304, true), false);

console.log("");
if (failures > 0) {
  console.error(`✗ reconciliation guard proof FAILED — ${failures} case(s) wrong.`);
  console.error("  Fix the guard, not this test. A limit nobody has seen refuse is not a limit.\n");
  process.exit(1);
}
console.log("✓ reconciliation guard proof: refuses a bank-clearing drift, allows a routine one.\n");

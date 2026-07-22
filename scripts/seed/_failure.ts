// Seed failure classification — shared by both seeders (append.ts, exam-append.ts).
//
// ── WHY THIS REPLACES `|| echo 'seed:prod skipped (non-fatal)'` ─────────────
// package.json used to run:
//
//     "seed:prod": "(tsx append.ts && tsx exam-append.ts) || echo 'skipped (non-fatal)'"
//
// which turns EVERY failure into a green build. That wrapper cannot tell the
// difference between the one failure that is genuinely tolerable — a preview or CI
// build with no database reachable — and every failure that is not: a malformed
// item, a duplicate key, a schema drift, or the seeder deliberately REFUSING to
// proceed. The refusal case is the dangerous one. In almi-french I added a
// reconciliation step that stops when the drift looks wrong, and then discovered my
// own `|| echo` wrapper would have swallowed that refusal and deployed anyway. A
// safety check whose alarm is muted is not a safety check.
//
// So the classification moves into the script, where it can see the actual error:
//
//   UNREACHABLE DATABASE  → warn, exit 0. The deploy continues UNSEEDED, which is
//                           honest and recoverable; the next deploy with a reachable
//                           DB seeds it. This is the ONLY tolerated failure.
//   ANYTHING ELSE         → print it and exit 1. Blocks the deploy.
//
// Note what is deliberately NOT tolerated: an authentication failure. P1000 looks
// like an infrastructure problem and is not — it means credentials are wrong, and a
// build that shrugs at wrong credentials will keep deploying against a database it
// is not writing to, reporting success every time.

/** True only for "no database to talk to", the one failure a deploy may survive. */
export function isUnreachable(e: unknown): boolean {
  const code =
    (e as { errorCode?: string; code?: string })?.code ??
    (e as { errorCode?: string })?.errorCode;
  const msg = e instanceof Error ? e.message : String(e);
  return (
    code === "P1001" || // can't reach database server
    code === "P1002" || // timed out
    code === "P1003" || // database does not exist
    /Environment variable not found: DATABASE_URL/i.test(msg) ||
    /Can't reach database server/i.test(msg)
  );
}

/** Uniform terminal handler for a seeder's promise chain. */
export function handleSeedFailure(label: string, e: unknown): void {
  if (isUnreachable(e)) {
    console.warn(`${label} — database unreachable; deploy continues UNSEEDED.`);
    console.warn(`  (${e instanceof Error ? e.message.split("\n")[0] : String(e)})`);
    return; // tolerable: exit 0
  }
  console.error(e);
  process.exit(1); // drift, refusal, bad credentials, or anything else: fail the build
}

// Full-mock / practice-set aggregate. Goethe scores each MODULE independently at
// the session's level, so we show one practice points estimate per module the
// session touched — and NEVER a fabricated composite. Each module has its own 60%
// pass mark; the honest per-module verdict comes from aggregateSession.

import Link from "next/link";
import type { GoetheAttempt, GoetheItem, GoetheSession, GoetheModule } from "@prisma/client";
import { aggregateSession } from "@/lib/goethe/session";
import { ESTIMATE_DISCLAIMER } from "@/lib/goethe/goethe-scale";
import { MODULE_LABEL, MODULE_ORDER, LEVEL_LABEL } from "@/lib/goethe/types";
import { GoetheScore } from "@/components/goethe/GoetheScore";

export function GoetheSessionResult({
  session,
  attempts,
}: {
  session: GoetheSession;
  attempts: (GoetheAttempt & { item: GoetheItem })[];
}) {
  const estimates = aggregateSession(session.level, attempts);
  const touched: GoetheModule[] = MODULE_ORDER.filter((m) => estimates[m] !== null);
  const isMock = session.mode === "MOCK";
  // Each module passes on its own at 60% — count modules on track, never average.
  const onTrack = touched.filter((m) => estimates[m]?.verdict === "passed").length;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          {isMock ? "Full mock" : "Practice set"} · {session.level} · result
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">Your practice estimates</h1>
        <p className="mt-1 text-sm text-almi-text-muted">{LEVEL_LABEL[session.level]}</p>
        <p className="mt-2 text-sm text-almi-text">
          Each module is estimated on its own points scale with a 60% pass mark. The Goethe-Zertifikat
          reports each module separately — there is no overall score, so we don&apos;t invent one.
        </p>
      </header>

      <div className="space-y-3">
        {touched.map((m) => (
          <GoetheScore key={m} label={MODULE_LABEL[m]} score={estimates[m]} />
        ))}
      </div>

      {isMock && touched.length > 0 && (
        <div className="rounded-2xl border border-almi-coral/30 bg-almi-coral/5 p-5">
          <p className="text-sm font-semibold text-almi-ink">
            {onTrack} of {touched.length} modules on track to pass in this run
          </p>
          <p className="mt-1 text-sm text-almi-text">
            At B1 and above each module is passed independently at 60%, so use the per-module estimates
            to see where to focus next. Confirm the level and result you need with the Goethe-Institut,
            your university, or the relevant German authority.
          </p>
        </div>
      )}

      <p className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3 text-xs text-almi-text-muted">
        {ESTIMATE_DISCLAIMER}
      </p>

      <Link
        href="/practice"
        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-coral px-6 py-3 text-sm font-semibold text-almi-ink hover:bg-almi-coral-deep"
      >
        Back to practice →
      </Link>
    </div>
  );
}

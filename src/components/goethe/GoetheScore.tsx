// Honest per-module score display. Goethe scores each module (Lesen, Hören,
// Schreiben, Sprechen) to a points maximum with a 60% pass mark and NO fabricated
// composite — so we show a points RANGE (lo–hi / max), the pass threshold, and a
// pass/borderline/not-yet verdict, never a precise official score, plus the
// standing "practice estimate — confirm with the Goethe-Institut" disclaimer.

import type { ModuleScore } from "@/lib/goethe/types";
import { VERDICT_LABEL } from "@/lib/goethe/goethe-scale";

const VERDICT_CLASS: Record<NonNullable<ModuleScore>["verdict"], string> = {
  passed: "bg-almi-teal/15 text-almi-ink",
  borderline: "bg-almi-gold/15 text-almi-ink",
  "not-yet": "bg-almi-coral/10 text-almi-coral-deep",
};

export function GoetheScore({
  label,
  score,
}: {
  label: string;
  score: ModuleScore;
}) {
  if (!score) {
    return (
      <div className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
        <p className="text-sm font-semibold text-almi-ink">{label}</p>
        <p className="mt-1 text-xs text-almi-text-muted">Not enough practice yet.</p>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-semibold text-almi-ink">{label}</p>
        <span className={`rounded-full px-2.5 py-0.5 text-sm font-bold ${VERDICT_CLASS[score.verdict]}`}>
          {score.pointsEst[0]}–{score.pointsEst[1]} / {score.maxPoints}
        </span>
      </div>
      <p className="mt-1 text-sm text-almi-text">
        {VERDICT_LABEL[score.verdict]} · pass mark {score.passThreshold} / {score.maxPoints} (60%)
      </p>
      <p className="mt-1 text-xs text-almi-text-muted">
        Estimated {score.percent}% in this practice run — a range, not an official result.
      </p>
    </div>
  );
}

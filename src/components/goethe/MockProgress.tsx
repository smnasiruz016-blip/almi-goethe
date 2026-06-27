// Mock-only progress strip. A full Goethe mock for a level runs the four modules
// in exam order (Lesen → Hören → Schreiben → Sprechen). This shows them with
// done / current / upcoming state so the run has structure rather than a bare
// "Step X of Y". Presentational only — derived from the module plan + current step.

import { MODULE_LABEL } from "@/lib/goethe/types";
import type { GoetheModule } from "@prisma/client";

export function MockProgress({
  plan,
  currentStep,
}: {
  plan: GoetheModule[];
  currentStep: number;
}) {
  if (plan.length === 0) return null;

  return (
    <div className="rounded-xl border border-almi-bg-peach bg-almi-paper p-3">
      <ol className="flex flex-wrap items-center gap-2">
        {plan.map((module, i) => {
          const done = i < currentStep;
          const isActive = i === currentStep;
          return (
            <li key={module}>
              <span
                className={
                  isActive
                    ? "inline-flex items-center gap-1.5 rounded-full bg-almi-coral px-3 py-1 text-xs font-semibold text-almi-ink"
                    : done
                      ? "inline-flex items-center gap-1.5 rounded-full bg-almi-teal/15 px-3 py-1 text-xs font-semibold text-almi-ink"
                      : "inline-flex items-center gap-1.5 rounded-full bg-almi-bg px-3 py-1 text-xs font-medium text-almi-text-muted"
                }
              >
                {done && (
                  <span aria-hidden className="text-almi-teal">
                    ✓
                  </span>
                )}
                {MODULE_LABEL[module]}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-2 text-xs text-almi-text-muted">
        Module {Math.min(currentStep + 1, plan.length)} of {plan.length}
      </p>
    </div>
  );
}

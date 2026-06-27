// Session driver: walks the user through a practice set or the full per-level
// mock. IN_PROGRESS step → composer; SCORED step → per-step result + advance; all
// steps done → the aggregate result. Advancing is an explicit server action.

import { notFound, redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { getSessionView, advanceSession } from "@/lib/goethe/session";
import { MODULE_DEFS } from "@/lib/goethe/registry";
import { GoetheComposer } from "@/components/goethe/composer-map";
import { GoetheResult } from "@/components/goethe/GoetheResult";
import { GoetheSessionResult } from "@/components/goethe/GoetheSessionResult";
import { MockProgress } from "@/components/goethe/MockProgress";
import type { GoetheModule } from "@prisma/client";

// Strip any server-only answer key before sending the payload to the client.
// Objective items (Lesen, Hören) keep their questions but lose the `answer` field;
// the Hören audio script never goes to the client (audio is fetched server-side).
// Schreiben/Sprechen payloads carry no objective answer key.
function sanitizePayload(module: GoetheModule, payload: unknown): unknown {
  const p = payload as Record<string, unknown>;
  if (module === "HOEREN") {
    const questions = (p.questions as { id: string; stem: string; options: unknown[] }[] | undefined) ?? [];
    // audioScript + answer stay server-side.
    return { questions: questions.map((q) => ({ id: q.id, stem: q.stem, options: q.options })) };
  }
  if (module === "LESEN") {
    const questions = (p.questions as { id: string; stem: string; options?: unknown[] }[] | undefined) ?? [];
    return {
      passages: p.passages,
      questions: questions.map((q) => ({ id: q.id, stem: q.stem, options: q.options })),
    };
  }
  // Schreiben and Sprechen carry no objective answer key.
  return payload;
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const user = await requireUser();
  const { sessionId } = await params;
  const session = await getSessionView(sessionId, user.id);
  if (!session) notFound();

  if (session.status === "COMPLETED") {
    return <GoetheSessionResult session={session} attempts={session.attempts} />;
  }

  const current = session.attempts.find((a) => a.sessionStep === session.currentStep);
  if (!current) notFound();

  const def = MODULE_DEFS[current.module];
  const stepLabel = `Step ${session.currentStep + 1} of ${session.targetCount}`;
  const isLast = session.currentStep + 1 >= session.targetCount;
  const mockPlanSteps =
    session.mode === "MOCK" ? ((session.plan as GoetheModule[] | null) ?? []) : [];

  if (current.status === "SCORED") {
    async function advance() {
      "use server";
      const u = await requireUser();
      await advanceSession(sessionId, u.id);
      redirect(`/practice/session/${sessionId}`);
    }
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        {mockPlanSteps.length > 0 && (
          <MockProgress plan={mockPlanSteps} currentStep={session.currentStep} />
        )}
        <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">{stepLabel}</p>
        <GoetheResult def={def} item={current.item} attempt={current} variant="step" />
        <form action={advance}>
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            {isLast ? "See results →" : "Next step →"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {mockPlanSteps.length > 0 && (
        <MockProgress plan={mockPlanSteps} currentStep={session.currentStep} />
      )}
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          {def.label} · {session.level} · {stepLabel}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-almi-ink">{current.item.title}</h1>
      </header>
      <GoetheComposer
        attemptId={current.id}
        module={current.module}
        prompt={current.item.prompt}
        payload={sanitizePayload(current.module, current.item.payload)}
      />
    </div>
  );
}

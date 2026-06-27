// Full mock start page. A mock runs all four modules for the user's chosen CEFR
// level in exam order (Lesen → Hören → Schreiben → Sprechen). Each module is scored
// independently with a 60% pass mark. The mock includes AI modules, so it needs a
// subscription and a chosen level.

import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { hasPaidAccess } from "@/lib/billing/plans";
import { startSession } from "@/lib/goethe/session";
import { LEVEL_LABEL } from "@/lib/goethe/types";

async function startMockAction() {
  "use server";
  const user = await requireUser();
  if (!hasPaidAccess(user)) redirect("/pricing");
  if (!user.targetLevel) redirect("/account?needlevel=1");
  const id = await startSession({
    userId: user.id,
    mode: "MOCK",
    level: user.targetLevel,
  });
  if (!id) redirect("/practice?mockempty=1");
  redirect(`/practice/session/${id}`);
}

export default async function MockStartPage() {
  const user = await requireUser();
  const needsPaid = !hasPaidAccess(user);
  const needsLevel = !user.targetLevel;

  const inProgress =
    needsPaid || needsLevel
      ? null
      : await prisma.goetheSession.findFirst({
          where: { userId: user.id, mode: "MOCK", status: "IN_PROGRESS" },
          orderBy: { startedAt: "desc" },
          select: { id: true, currentStep: true, targetCount: true },
        });

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">AlmiGoethe</p>
      <h1 className="text-3xl font-semibold text-almi-ink">Full mock</h1>
      <p className="text-base text-almi-text">
        A full-length practice run at your level, in one sitting — all four modules in exam order:
        Lesen, Hören, Schreiben and Sprechen.
        {user.targetLevel ? ` Currently set to ${LEVEL_LABEL[user.targetLevel]}.` : ""}
      </p>

      <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 text-sm text-almi-text">
        <p>
          At the end you get an honest points estimate for each module — a range, with the 60% pass
          mark. There is no overall score: the Goethe-Zertifikat reports each module on its own, so we
          don&apos;t invent a composite. Confirm the level you need with the Goethe-Institut.
        </p>
      </div>

      {needsLevel ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          Choose which CEFR level you&apos;re preparing for first.{" "}
          <a href="/account" className="font-semibold underline">
            Set your level
          </a>
          .
        </div>
      ) : needsPaid ? (
        <div className="rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
          The full mock includes AI feedback and is part of a subscription.{" "}
          <a href="/pricing" className="font-semibold underline">
            See plans
          </a>
          .
        </div>
      ) : (
        <div className="space-y-3">
          {inProgress && (
            <div className="rounded-xl border border-almi-teal/30 bg-almi-teal/5 px-4 py-4">
              <p className="text-sm font-semibold text-almi-ink">
                You have a mock in progress — step {inProgress.currentStep + 1} of{" "}
                {inProgress.targetCount}.
              </p>
              <Link
                href={`/practice/session/${inProgress.id}`}
                className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full bg-almi-teal px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Resume mock →
              </Link>
            </div>
          )}
          <form action={startMockAction}>
            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
            >
              {inProgress ? "Start a new mock →" : "Begin full mock →"}
            </button>
          </form>
        </div>
      )}

      <p className="text-xs text-almi-text-muted">
        Original to AlmiGoethe — never copied from Goethe-Institut material. Results are a practice
        estimate, not an official Goethe-Zertifikat result.
      </p>
    </div>
  );
}

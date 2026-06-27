// Module start page: opens a practice session for one module at the user's target
// CEFR level and routes into it. Objective modules (Lesen/Hören) run a short
// practice set and are free; AI modules (Schreiben/Sprechen) run a single item and
// need a subscription.

import { notFound, redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { hasPaidAccess } from "@/lib/billing/plans";
import { startSession } from "@/lib/goethe/session";
import { moduleBySlug } from "@/lib/goethe/registry";
import { MODULE_LABEL, LEVEL_LABEL } from "@/lib/goethe/types";

async function beginAction(formData: FormData) {
  "use server";
  const slug = String(formData.get("slug") ?? "");
  const def = moduleBySlug(slug);
  if (!def || !def.live) redirect("/practice");
  const user = await requireUser();
  if (!user.targetLevel) redirect("/account?needlevel=1");
  if (def.scoringMode === "AI" && !hasPaidAccess(user)) redirect("/pricing");
  const id = await startSession({
    userId: user.id,
    mode: "PRACTICE_SET",
    level: user.targetLevel,
    module: def.module,
  });
  if (!id) redirect(`/practice/${def.slug}?empty=1`);
  redirect(`/practice/session/${id}`);
}

export default async function TaskStartPage({
  params,
  searchParams,
}: {
  params: Promise<{ task: string }>;
  searchParams: Promise<{ empty?: string }>;
}) {
  const user = await requireUser();
  const { task } = await params;
  const { empty } = await searchParams;
  const def = moduleBySlug(task);
  if (!def || !def.live) notFound();

  const isObjective = def.scoringMode === "DETERMINISTIC";
  const needsPaid = def.scoringMode === "AI" && !hasPaidAccess(user);
  const needsLevel = !user.targetLevel;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
        AlmiGoethe · {MODULE_LABEL[def.module]}
        {user.targetLevel ? ` · ${user.targetLevel}` : ""}
      </p>
      <h1 className="text-3xl font-semibold text-almi-ink">{def.label}</h1>
      <p className="text-base text-almi-text">{def.blurb}</p>

      <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 text-sm text-almi-text">
        <p>
          <span className="font-semibold text-almi-ink">Scoring:</span>{" "}
          {isObjective ? "auto-marked instantly" : "honest AI trait feedback"}, turned into a practice
          points estimate (60% pass mark) for {MODULE_LABEL[def.module]}.{" "}
          {user.targetLevel
            ? `Practising at ${LEVEL_LABEL[user.targetLevel]}.`
            : "Choose your level in your account first."}{" "}
          Confirm the level you need with the Goethe-Institut.
        </p>
      </div>

      {empty && (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/5 px-4 py-3 text-sm text-almi-coral-deep">
          No practice items are seeded for this module at your level yet.
        </p>
      )}

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
          AI feedback on Schreiben and Sprechen is part of a subscription.{" "}
          <a href="/pricing" className="font-semibold underline">
            See plans
          </a>{" "}
          — Lesen and Hören practice is free.
        </div>
      ) : (
        <form action={beginAction}>
          <input type="hidden" name="slug" value={def.slug} />
          <button
            type="submit"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep"
          >
            Begin practice →
          </button>
        </form>
      )}

      <p className="text-xs text-almi-text-muted">
        Original to AlmiGoethe — never copied from Goethe-Institut material. Results are a practice
        estimate, not an official Goethe-Zertifikat result.
      </p>
    </div>
  );
}

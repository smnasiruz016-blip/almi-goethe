// Practice hub — the logged-in "Choose a module" page. Lists the four Goethe
// modules from the registry, plus the full per-level mock. Lesen + Hören are free;
// the AI-graded Schreiben + Sprechen and the mock need a subscription. Everything
// runs at the user's chosen CEFR level.

import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { MODULE_DEFS, type ModuleDef } from "@/lib/goethe/registry";
import { MODULE_ORDER, LEVEL_LABEL } from "@/lib/goethe/types";

function ModuleCard({ def }: { def: ModuleDef }) {
  const tag = def.scoringMode === "AI" ? "AI feedback · Pro" : "Auto-marked · Free";
  return (
    <Link
      href={`/practice/${def.slug}`}
      className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 shadow-sm transition hover:border-almi-accent"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-base font-semibold text-almi-ink">{def.label}</h3>
        <span className="text-xs text-almi-text-muted">{tag}</span>
      </div>
      <p className="mt-2 text-sm text-almi-text">{def.blurb}</p>
      <p className="mt-3 text-sm font-semibold text-almi-coral">Practise →</p>
    </Link>
  );
}

export default async function PracticePage() {
  const user = await requireUser();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
          AlmiGoethe · Goethe-Zertifikat practice
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-almi-ink">Choose a module</h1>
        <p className="mt-2 max-w-2xl text-sm text-almi-text">
          Lesen and Hören are auto-marked and free to practise. Schreiben and Sprechen are graded with
          honest AI feedback against the four Goethe criteria. Each module is estimated as a points
          range with a 60% pass mark — a practice estimate, never an official score.
        </p>
        {user.targetLevel ? (
          <p className="mt-3 inline-flex rounded-full bg-almi-coral/10 px-3 py-1 text-sm font-semibold text-almi-coral-deep">
            Practising at {LEVEL_LABEL[user.targetLevel]} ·{" "}
            <Link href="/account" className="ml-1 underline">
              change level
            </Link>
          </p>
        ) : (
          <p className="mt-3 rounded-xl border border-almi-accent/40 bg-almi-accent/10 px-4 py-3 text-sm text-almi-ink">
            Choose your CEFR level first.{" "}
            <Link href="/account" className="font-semibold underline">
              Set your level
            </Link>
            .
          </p>
        )}
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {MODULE_ORDER.map((m) => (
          <ModuleCard key={m} def={MODULE_DEFS[m]} />
        ))}
      </div>

      <Link
        href="/practice/mock"
        className="block rounded-2xl border border-almi-coral/40 bg-almi-coral/10 p-6 shadow-sm transition hover:border-almi-coral"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden className="text-xl">🏁</span>
              <h2 className="text-lg font-semibold text-almi-ink">Full mock</h2>
              <span className="rounded-full bg-almi-coral px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-almi-ink">
                Pro
              </span>
            </div>
            <p className="mt-2 max-w-xl text-sm text-almi-text">
              All four modules at your level in exam order, then an honest per-module points estimate.
              No fabricated overall.
            </p>
          </div>
          <span className="text-sm font-semibold text-almi-coral">Start full mock →</span>
        </div>
      </Link>

      <p className="text-xs text-almi-text-muted">
        Every task here is written from scratch by AlmiGoethe. We never copy or reproduce
        Goethe-Institut test material. Estimates are for practice, not official Goethe-Zertifikat
        results — confirm the level you need with the Goethe-Institut.
      </p>
    </div>
  );
}

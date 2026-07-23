"use client";

// Client runner for one exam practice item. Renders the task (objective MCQ /
// gap-fill, or a productive writing/speaking prompt), submits to /api/exams/submit,
// and renders the exam's OWN result honestly:
//   • TestDaF  → an independent per-section TDN. NO total. NO pass/fail. Ever.
//   • telc     → a percentage against the 60% mark, with a verdict.
//   • telc B2  → an amber banner: the official pass threshold is pending confirmation.

import { useMemo, useState } from "react";
import type { ClientItem } from "@/lib/exams/pick";

type Option = { id: string; text: string };
type Question = { id: string; stem: string; options?: Option[] };
type ObjectivePayload = { instructions?: string; passage?: string; audioScript?: string; questions: Question[] };
type ProductivePayload = {
  situation: string;
  instruction: string;
  wordMin?: number;
  wordMax?: number;
  prepSeconds?: number;
  speakSeconds?: number;
};

type Trait = "strong" | "adequate" | "limited";
type Feedback = {
  communication: Trait;
  coherence: Trait;
  range: Trait;
  accuracy: Trait;
  strengths: string[];
  improvements: string[];
  overallComment: string;
};
type TestDafResult = {
  pointsEst: [number, number];
  maxPoints: number;
  tdnLabel: string;
  tdn: string;
  cefr: string;
};
type TelcResult = {
  label: string;
  part: "written" | "oral";
  percent: number;
  pointsEst: [number, number] | null;
  maxPoints: number | null;
  verdict: "passed" | "borderline" | "not-yet";
};
type DtzResult = {
  label: string; // section name (Hören / Lesen / Schreiben / Sprechen)
  pointsEst: [number, number];
  sectionMax: number; // this section's slice of the 100 total
  percentOfSection: number;
};
type EinbResult = {
  label: string; // civic domain
  correct: number;
  total: number;
  passMark: number; // 17
  questionCount: number; // 33
};
type Outcome = {
  pointsEarned?: number;
  pointsMax?: number;
  testDaf?: TestDafResult;
  telc?: TelcResult;
  dtz?: DtzResult;
  einb?: EinbResult;
  feedback?: Feedback;
};

const TRAIT_LABEL: Record<Trait, string> = {
  strong: "Strong",
  adequate: "Adequate",
  limited: "Room to grow",
};
const VERDICT_LABEL: Record<TelcResult["verdict"], string> = {
  passed: "On track to pass (≥60%)",
  borderline: "Borderline — close to the 60% mark",
  "not-yet": "Not yet at the 60% mark",
};

function wordCount(s: string): number {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
}

export function ExamItemRunner({
  item,
  isTestDaf,
  thresholdPending,
}: {
  item: ClientItem;
  isTestDaf: boolean;
  thresholdPending: boolean;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [upgrade, setUpgrade] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  const isObjective = item.kind === "objective";
  const obj = isObjective ? (item.payload as ObjectivePayload) : null;
  const prod = !isObjective ? (item.payload as ProductivePayload) : null;
  const words = useMemo(() => wordCount(text), [text]);

  async function submit() {
    setBusy(true);
    setError(null);
    setUpgrade(null);
    const response = isObjective
      ? { answers }
      : item.kind === "speaking"
        ? { transcript: text }
        : { text };
    try {
      const res = await fetch("/api/exams/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ itemId: item.id, response }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (res.status === 402 && data.upgradeUrl) setUpgrade(data.upgradeUrl);
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setOutcome(data.outcome as Outcome);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  }

  const answeredAll = isObjective
    ? (obj?.questions ?? []).every((q) => answers[q.id])
    : text.trim().length > 0;

  if (outcome) {
    return (
      <ExamResult
        outcome={outcome}
        isTestDaf={isTestDaf}
        thresholdPending={thresholdPending}
        onAgain={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="space-y-6">
      {obj?.instructions && <p className="text-sm text-almi-text-muted">{obj.instructions}</p>}

      {obj?.passage && (
        <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 text-[15px] leading-relaxed text-almi-ink">
          {obj.passage}
        </div>
      )}

      {obj?.audioScript && (
        <details className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-4">
          <summary className="cursor-pointer text-sm font-semibold text-almi-ink">
            🎧 Audio transcript (narration coming soon — read to practise for now)
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-almi-text">{obj.audioScript}</p>
        </details>
      )}

      {isObjective &&
        obj?.questions.map((q, i) => (
          <fieldset key={q.id} className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5">
            <legend className="px-1 text-sm font-semibold text-almi-ink">
              {i + 1}. {q.stem}
            </legend>
            <div className="mt-3 space-y-2">
              {q.options ? (
                q.options.map((o) => (
                  <label key={o.id} className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1.5 hover:bg-almi-bg-peach/40">
                    <input
                      type="radio"
                      name={q.id}
                      value={o.id}
                      checked={answers[q.id] === o.id}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: o.id }))}
                      className="mt-1"
                    />
                    <span className="text-sm text-almi-text">{o.text}</span>
                  </label>
                ))
              ) : (
                <input
                  type="text"
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                  className="w-full rounded-lg border border-almi-bg-peach px-3 py-2 text-sm"
                  placeholder="Ihre Antwort"
                />
              )}
            </div>
          </fieldset>
        ))}

      {prod && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-5 text-sm text-almi-text">
            <p className="font-semibold text-almi-ink">Situation</p>
            <p className="mt-1">{prod.situation}</p>
            <p className="mt-3 font-semibold text-almi-ink">Aufgabe</p>
            <p className="mt-1">{prod.instruction}</p>
            {item.kind === "speaking" && (
              <p className="mt-3 text-xs text-almi-text-muted">
                Audio recording is coming soon. For now, type (or paste) what you would say — it is
                graded as a transcript, never on accent or pronunciation.
              </p>
            )}
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={item.kind === "speaking" ? 6 : 10}
            className="w-full rounded-2xl border border-almi-bg-peach bg-white p-4 text-[15px] leading-relaxed text-almi-ink"
            placeholder="Schreiben Sie hier auf Deutsch …"
          />
          <p className="text-xs text-almi-text-muted">
            {words} Wörter
            {prod.wordMin != null && prod.wordMax != null ? ` (Ziel: ${prod.wordMin}–${prod.wordMax})` : ""}
          </p>
        </div>
      )}

      {error && (
        <p className="rounded-xl border border-almi-coral/40 bg-almi-coral/5 px-4 py-3 text-sm text-almi-coral-deep">
          {error}{" "}
          {upgrade && (
            <a href={upgrade} className="font-semibold underline">
              See plans
            </a>
          )}
        </p>
      )}

      <button
        type="button"
        disabled={busy || !answeredAll}
        onClick={submit}
        className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-almi-coral px-7 py-3 text-base font-semibold text-almi-ink hover:bg-almi-coral-deep disabled:cursor-not-allowed disabled:opacity-50"
      >
        {busy ? "Wird bewertet …" : "Antwort abgeben →"}
      </button>
    </div>
  );
}

function TraitChip({ label, trait }: { label: string; trait: Trait }) {
  const tone =
    trait === "strong"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : trait === "adequate"
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-almi-bg-peach text-almi-text border-almi-bg-peach";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}>
      {label}: {TRAIT_LABEL[trait]}
    </span>
  );
}

function ExamResult({
  outcome,
  isTestDaf,
  thresholdPending,
  onAgain,
}: {
  outcome: Outcome;
  isTestDaf: boolean;
  thresholdPending: boolean;
  onAgain: () => void;
}) {
  const t = outcome.testDaf;
  const c = outcome.telc;
  const d = outcome.dtz;
  const e = outcome.einb;
  return (
    <div className="space-y-6">
      {isTestDaf && t && (
        <div className="rounded-2xl border border-almi-accent/40 bg-almi-accent/5 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
            TestDaF · section result
          </p>
          <p className="mt-2 text-4xl font-semibold text-almi-ink">{t.tdnLabel}</p>
          <p className="mt-1 text-sm text-almi-text">
            Estimated {t.pointsEst[0]}–{t.pointsEst[1]} / {t.maxPoints} points · CEFR {t.cefr}
          </p>
          <p className="mt-4 rounded-xl bg-almi-paper px-4 py-3 text-sm text-almi-text">
            TestDaF reports an <span className="font-semibold text-almi-ink">independent level for each
            section</span>. There is <span className="font-semibold text-almi-ink">no overall score and no
            pass or fail</span> — this is a practice estimate for this one section only. Universities
            often ask for TDN 4 in all four sections, but that is an admissions rule, not a TestDaF pass
            mark.
          </p>
        </div>
      )}

      {!isTestDaf && c && (
        <div className="rounded-2xl border border-almi-accent/40 bg-almi-accent/5 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
            {c.label} · {c.part === "written" ? "written part" : "oral part"}
          </p>
          <p className="mt-2 text-4xl font-semibold text-almi-ink">{c.percent}%</p>
          {c.pointsEst && c.maxPoints != null && (
            <p className="mt-1 text-sm text-almi-text">
              Estimated {c.pointsEst[0]}–{c.pointsEst[1]} / {c.maxPoints} points
            </p>
          )}
          <p className="mt-3 text-sm font-semibold text-almi-ink">{VERDICT_LABEL[c.verdict]}</p>
          {thresholdPending ? (
            <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              The official pass threshold for telc B2 is <span className="font-semibold">pending
              confirmation</span>. This estimate uses telc&apos;s usual 60% guidance, but AlmiGoethe does
              not present it as an official threshold until it is verified from the telc B2 Handbuch.
            </p>
          ) : (
            <p className="mt-4 rounded-xl bg-almi-paper px-4 py-3 text-sm text-almi-text">
              telc is <span className="font-semibold text-almi-ink">modular</span>: each part is passed
              independently at 60%. This is a practice estimate for one part, not an official telc result.
            </p>
          )}
        </div>
      )}

      {d && (
        <div className="rounded-2xl border border-almi-accent/40 bg-almi-accent/5 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
            DTZ · {d.label}
          </p>
          <p className="mt-2 text-4xl font-semibold text-almi-ink">
            {d.pointsEst[0]}–{d.pointsEst[1]} <span className="text-2xl text-almi-text">/ {d.sectionMax}</span>
          </p>
          <p className="mt-1 text-sm text-almi-text">Estimated points from this section toward the 100 total.</p>
          <p className="mt-4 rounded-xl bg-almi-paper px-4 py-3 text-sm text-almi-text">
            The DTZ gives <span className="font-semibold text-almi-ink">one result out of 100</span>, summed
            across all four sections and read as a <span className="font-semibold text-almi-ink">level</span>:
            60 or more is B1, 33–59 is A2. There are no per-section minimums, so your level comes from the
            full exam, not this one section. This is a practice estimate.
          </p>
        </div>
      )}

      {e && (
        <div className="rounded-2xl border border-almi-accent/40 bg-almi-accent/5 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-almi-accent-deep">
            Einbürgerungstest · {e.label}
          </p>
          <p className="mt-2 text-4xl font-semibold text-almi-ink">
            {e.correct} <span className="text-2xl text-almi-text">/ {e.total} richtig</span>
          </p>
          <p className="mt-4 rounded-xl bg-almi-paper px-4 py-3 text-sm text-almi-text">
            The real Einbürgerungstest is <span className="font-semibold text-almi-ink">33 questions</span>,
            and you pass with <span className="font-semibold text-almi-ink">{e.passMark} correct</span>. This
            is practice for one domain — it isn&apos;t a pass or fail on its own; the verdict comes from the
            full 33-question test.
          </p>
        </div>
      )}

      {outcome.feedback && (
        <div className="rounded-2xl border border-almi-bg-peach bg-almi-paper p-6">
          <p className="text-sm font-semibold text-almi-ink">Feedback</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <TraitChip label="Task" trait={outcome.feedback.communication} />
            <TraitChip label="Coherence" trait={outcome.feedback.coherence} />
            <TraitChip label="Range" trait={outcome.feedback.range} />
            <TraitChip label="Accuracy" trait={outcome.feedback.accuracy} />
          </div>
          {outcome.feedback.strengths.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-almi-text-muted">Strengths</p>
              <ul className="mt-1 list-inside list-disc text-sm text-almi-text">
                {outcome.feedback.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
          {outcome.feedback.improvements.length > 0 && (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-almi-text-muted">
                Improvement opportunities
              </p>
              <ul className="mt-1 list-inside list-disc text-sm text-almi-text">
                {outcome.feedback.improvements.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
          {outcome.feedback.overallComment && (
            <p className="mt-3 text-sm text-almi-text">{outcome.feedback.overallComment}</p>
          )}
        </div>
      )}

      {outcome.pointsEarned != null && outcome.pointsMax != null && (
        <p className="text-xs text-almi-text-muted">
          Auto-marked: {outcome.pointsEarned} / {outcome.pointsMax} correct.
        </p>
      )}

      <button
        type="button"
        onClick={onAgain}
        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-almi-coral px-7 py-3 text-base font-semibold text-almi-coral-deep hover:bg-almi-coral/10"
      >
        Nächste Aufgabe →
      </button>
    </div>
  );
}

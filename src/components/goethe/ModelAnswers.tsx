// RR-401 · model answers for a factory item, shown after the learner's own attempt is scored: the models at every level the pack
// gives (sehr gut / gut / nicht bestanden) with their notes. No scoring is invented here; it only shows the pack's text.
// Notes keep the pack's light markdown: **bold** and *italic* (the German forms the note names). Rendered as React elements, never
// as raw HTML.

import type { ReactNode } from "react";
import { LEVEL_POINTS, MODEL_LABEL, MODEL_TRADEMARK, modelsFor } from "@/lib/factory/models";

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0, m: RegExpExecArray | null, k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(m[1] ? <strong key={k++}>{m[1]}</strong> : <em key={k++}>{m[2]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const LEVEL_TONE: Record<string, string> = {
  "sehr gut": "bg-almi-teal/15 text-almi-teal-text",
  gut: "bg-almi-accent/15 text-almi-accent-deep",
  "nicht bestanden": "bg-almi-coral/15 text-almi-coral-text",
};

export function ModelAnswers({ item }: { item: { id: string; level: string; taskType: string; title: string } }) {
  const m = modelsFor(item);
  if (!m) return null;
  return (
    <section className="rounded-2xl border border-almi-bg-peach bg-almi-bg p-5" aria-labelledby="model-answers">
      <h2 id="model-answers" className="text-sm font-bold uppercase tracking-wider text-almi-text-muted">Model answers</h2>
      <p className="mt-1 text-xs text-almi-text-muted">{MODEL_LABEL}.</p>
      <div className="mt-4 space-y-5">
        {m.answers.map((a) => (
          <article key={a.id} className="rounded-xl border border-almi-bg-peach bg-almi-paper px-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${LEVEL_TONE[a.level] ?? ""}`}>{a.level}</span>
              <span className="text-xs text-almi-text-muted">{LEVEL_POINTS[a.level]}</span>
              {a.wordCount !== null && <span className="text-xs text-almi-text-muted">· {a.wordCount} words (without greeting and closing)</span>}
            </div>
            {a.parts.map((p, i) => (
              <div key={i} className="mt-3">
                {p.heading && <p className="text-xs font-semibold text-almi-ink">{p.heading}</p>}
                <div lang="de" className="mt-1 space-y-2 text-sm text-almi-ink">
                  {p.paragraphs.map((para, j) => (
                    <p key={j} className="whitespace-pre-line">{para}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-3 border-t border-almi-bg-peach pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-almi-text-muted">Notes</p>
              <ul className="mt-1 space-y-1 text-sm text-almi-text">
                {a.notes.map((n, i) => (
                  <li key={i}>{inline(n)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-almi-text-muted">{MODEL_TRADEMARK}</p>
    </section>
  );
}

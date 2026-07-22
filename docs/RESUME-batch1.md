# RESUME — goethe conformance batch 1

Checkpoint written 2026-07-22, end of day. Work is **committed and pushed to
`goethe-gate-floor` (PR #12), deliberately NOT merged, NOT forced, NOT deployed.**

Resume by checking out `goethe-gate-floor` and starting at **telc B1 Hörverstehen**.

---

## Why nothing is merged

Batch 1 is a **conformance migration**, and a conformance migration cannot be
half-merged. The live product is currently serving the old 304-item bank, complete
and working. The served bank must flip from *old and complete* to *new, complete and
reconciled* in one reviewed step, never through a partial in-between.

So the gate floor, the re-authored bank and the single reconcile all land together.

---

## State: done and GREEN

| section | items | shape |
|---|---|---|
| TestDaF Leseverstehen | 21 | 7 Aufgaben × 3 — 5/4/7/4/7/4/3 = **34** ✓ |
| TestDaF Hörverstehen | 21 | 7 Aufgaben × 3 — 5/4/2/6/4/5/4 = **30** ✓ |
| TestDaF Schriftlicher Ausdruck | 23 | 16 argumentativer Text + 7 Grafik-summary (100–150 W) |
| TestDaF Mündlicher Ausdruck | 21 | 1 Aufgabe, speaking 45 · 60 · 90 · 120 · 150 s |
| telc B1 Leseverstehen | 15 | 3 Teile — 5/5/10 = **20** ✓ |
| telc B1 Sprachbausteine | 16 | 2 Teile — 10/10 = **20** ✓ |

**TestDaF is fully conformant** — zero violations across all four sections.

Infrastructure landed and RED-first proven: conformance gate (whole-bank iteration),
Rule #7 gate (registry-enumerated), title-uniqueness gate (served axis), real-entity
gate (German/Austrian re-cut, 11-case permanent proof), reconciliation guard (8-case
proof), the seeder rewrite (insert → update → deactivate → verify), the
`|| echo` fail-open removal, `npm run ledger`, and `npm run predict:deactivations`.

---

## Remaining in batch 1 — resume here

### 1. telc B1 Hörverstehen — counts are now SOURCED

Upgraded from *convention* to *sourced* (official telc B1 Modellprüfung, Aufgaben
41–60). **Hard-enforce these, exactly like Leseverstehen** — the structure file must
have `sourced: true` flipped on this section, which currently reads `false`.

| Teil | items | shape |
|---|---|---|
| Teil 1 | 5 | heard **once**, richtig/falsch on short everyday texts |
| Teil 2 | 10 | heard **twice**, interview or report |
| Teil 3 | 5 | heard **twice**, short messages |

20 items, 75 points. Everyday register, not academic.

**Action:** edit `TELC_B1_STRUCTURE.HOERVERSTEHEN` in
`src/lib/exams/exam-structure.ts` — set `sourced: true` on the section and on all
three Aufgaben, and delete the ⚠️ convention note. Then author to it.

### 2. telc B1 Schriftlicher Ausdruck — 1 letter

One letter or e-mail to a prompt. **Not an essay** — an argumentative essay is B2+,
and authoring one here teaches the wrong exam.

### 3. telc B1 Sprechen — Teil 1 and Teil 2 are NEW BUILDS

The bank has only `TELC_B1_SP_PLAN` (Teil 3, *gemeinsam etwas planen*).
**Teil 1 Kontaktaufnahme** and **Teil 2 über ein Thema sprechen** do not exist.

---

## Pending gate to build: answer-key distribution

Agreed as a **standing, network-wide gate**, wired into `build`, RED-first.

**Why.** telc B1 Sprachbausteine was authored correct-choice-first — the only
practical way to keep track of 160 gaps. That made **every Teil 1 answer `a`** and
Teil 2's answers run `a, b, c … j` straight down the gap order. A learner picking the
first option every time would have scored 100% while knowing no German.

**No conformance gate can see this.** It is not a structure question — the items match
their Aufgabe perfectly. It was caught by eye, and a fix that depends on someone
remembering to apply it is not a fix.

**Spec.** For each `taskType`, over all objective items, fail when the correct-answer
positions are degenerate or clustered past a threshold — e.g. any single position
holding >50% of a 3-option set, or all answers identical. Must run across **both**
banks, whole-bank iteration.

**Current fix, to be made non-optional by the gate:** a deterministic permutation
seeded from `title + gap index` (`scripts/seed/exams/telc-b1-sprachbausteine.ts`).
Measured after: `a:33 b:32 c:35` across Teil 1's 100 gaps; Teil 2 spread over all
fifteen letters.

⚠️ **The permutation MUST stay deterministic.** A random shuffle changes the payload
on every build, and the seeder compares content to decide what to update — so every
deploy would rewrite every item forever and the reconciliation diff would never be
empty. Verified byte-identical across two runs.

---

## Pending review: the deactivation list

At this checkpoint:

```
would INSERT      101
would DEACTIVATE   80  of 304 active = 26.3%
guard: REFUSES without RECONCILE_FORCE=1
rows flagged ⚠ INVESTIGATE: 0
```

(The 15.8% figure from earlier in the day was the state after TestDaF only; it has
grown with the two telc B1 sections, as expected.)

**The agreed protocol, unchanged:**

1. Finish all 9 sections of batch 1.
2. Run `npm run predict:deactivations` — the **source-side** list, computed with no
   database. Founder reviews every row.
3. **⚠ INVESTIGATE is a hard stop, zero tolerance.** Any row deactivated for a reason
   other than "non-conformant taskType" halts the process for review. No aggregate
   "mostly fine".
4. The **live** list comes from the guard's own refusal output on deploy — the seeder
   prints every row and fails closed *before* any write. Nobody reads `DATABASE_URL`;
   nobody hands one out. The sensitive-var boundary holds.
5. Source-predicted and live must **diff clean**. A live row the source did not
   predict is orphan drift from an earlier insert-only deploy — exactly what the
   guard exists to catch.
6. Only then, one `RECONCILE_FORCE=1` run at the reviewed final state.

Deactivate-never-delete keeps this reversible: rows leave the served bank by
`active: false`, and `ExamAttempt` rows still reference them, so no learner history is
destroyed.

---

## After batch 1

Structure tables still to stage: telc B2, telc C1 Hochschule, Goethe-Zertifikat A1–C2.

⚠️ **Goethe A1–C2 has a finer served axis than the exam engines.** `pickItem()` in
`src/lib/goethe/session.ts` filters by `difficulty`, so the Goethe cells are
`(level × module × difficulty)`, not `(level × module)`. Build the Goethe cell tables
to that finer axis, or a thin difficulty-cell will only surface after authoring.

Then the four new engines, each RED-first and gate-first:

1. **DTZ** — dual-outcome A2/B1, one fixed format
2. **DSH** — weighted HV:LV:WS:TP = 2:2:1:2, DSH-1 ≥57 / DSH-2 ≥67 / DSH-3 ≥82%
3. **Einbürgerungstest** — civic, 33 questions, 4-option MC, pass ≥17. Civic
   fact-base supplied by the founder; domains A (Grundgesetz) and C (institutions)
   are ready, B (history) in progress. Civic items **must** name real institutions
   and every fact must be true and sourced — this needs its own **civic-sourcing
   gate**, which is still unbuilt and is the inverse of the real-entity gate.
4. **ÖSD ZDÖ B1** — Austrian, two separately-sittable modules; this is what lets the
   README honestly claim Austria. Then the wider ÖSD A1–C2 ladder and the ÖIF
   Integrationsprüfung B1.

🔴 **Austrian corridor fact, to be encoded as written:** Austrian citizenship is
**B1** today, with a shorter six-year route for B2 holders. The 2026 reform to raise
the standard to B2 is **proposed, not enacted, with no date** — state B1 now and hedge
("Austria plans to raise this to B2 — confirm with the authority"). Never present B2
as already required. Integration Agreement: Module 1 = A2, Module 2 = B1.

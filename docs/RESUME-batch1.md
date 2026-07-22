# RESUME — goethe conformance batch 1

Checkpoint written 2026-07-22, end of day. Work is **committed and pushed to
`goethe-gate-floor` (PR #12), deliberately NOT merged, NOT forced, NOT deployed.**

Resume by checking out `goethe-gate-floor` and starting at **telc B1 Sprechen**
(Teil 1 Kontaktaufnahme + Teil 2 über ein Thema — new builds). Hörverstehen and
Schriftlicher Ausdruck landed 2026-07-22; Sprechen is section 9 of 9 and closes
batch 1.

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
| telc B1 Hörverstehen | 15 | 3 Teile — 5/10/5 = **20** ✓, richtig/falsch throughout |
| telc B1 Schriftlicher Ausdruck | 16 | 1 Aufgabe — ein Brief, 3 Leitpunkte, 8 Sie / 8 du |

**TestDaF is fully conformant** — zero violations across all four sections.

Infrastructure landed and RED-first proven: conformance gate (whole-bank iteration),
Rule #7 gate (registry-enumerated), title-uniqueness gate (served axis), real-entity
gate (German/Austrian re-cut, 11-case permanent proof), reconciliation guard (8-case
proof), the seeder rewrite (insert → update → deactivate → verify), the
`|| echo` fail-open removal, `npm run ledger`, and `npm run predict:deactivations`.

---

## Remaining in batch 1 — resume here

### ~~1. telc B1 Hörverstehen~~ — DONE 2026-07-22

`sourced: true` flipped on the section and all three Aufgaben; the ⚠️ convention
note is replaced by the Modellprüfung attribution (Aufgaben 41–60). Authored to
the sourced structure in `scripts/seed/exams/telc-b1-hoerverstehen.ts` — 15 items,
5 per Teil, 5/10/5 questions, everyday register.

**All twenty items are richtig/falsch.** Confirmed with the founder before
authoring: Aufgaben 41–60 are one continuous true/false run, and what varies
between the Teile is how often the recording is heard, not the item shape.
Authoring Teil 2 or 3 as three-option MC would have taught a task telc does not
set.

The 16 items removed carried two invented taskTypes (`TELC_B1_HV_ANNOUNCE`,
`TELC_B1_HV_DIALOG`) and — like Sprachbausteine — answered `a` almost straight
down.

⚠️ **The answer-key permutation does not transfer to this section, and pretending
it does would be worse than skipping it.** A richtig/falsch item has two options
whose ids are bound to their meaning; shuffling them moves letters without
changing the true/false split. Distribution here is controlled by authoring and
then MEASURED. That measurement earned its keep on the first run: the hand-count
claimed no item alternated, and the probe found three Teil 3 items running
r-f-r-f-r straight down. Re-authored and re-measured — 52 richtig / 48 falsch
over 100 statements, no uniform item, no alternating item.

### ~~2. telc B1 Schriftlicher Ausdruck~~ — DONE 2026-07-22

One letter or e-mail to a prompt. **Not an essay** — an argumentative essay is B2+,
and authoring one here teaches the wrong exam.

Authored in `scripts/seed/exams/telc-b1-schriftlicher-ausdruck.ts` — 16 items
under the real key `TELC_B1_SA_BRIEF`, each with exactly three Leitpunkte (held
to three by a tuple type, so two or four will not compile) and a named register,
split 8 `Sie` / 8 `du`.

⚠️ **A structured `leitpunkte` array would have been silently discarded.**
`productivePayloadSchema.parse()` strips unknown keys and `ExamItemRunner`
renders only the fields it declares, so the array would have vanished twice over
— never shown to the learner, never seen by the grader — while looking correct in
the seed file. The Leitpunkte are therefore written into the `instruction`
prose, which is what the grader's `communication` criterion actually reads.

**Titles unchanged on purpose:** identity is (exam, level, section, title), so all
sixteen rows UPDATE IN PLACE and contribute **zero** deactivations. Verified —
`SCHRIFTLICHER_AUSDRUCK` does not appear in the predict:deactivations list.

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

**Spec — THE GATE MUST BE TYPE-AWARE. Founder decision, 2026-07-22.** A
position-only gate would wave through a perfectly rhythmic richtig/falsch bank,
because in a binary item position carries no information. The gate dispatches on
item type and runs **both** modes:

| item type | what is checked |
|---|---|
| MC / multi-option | **answer-position distribution** — no position degenerate or clustered past a threshold (e.g. any single position holding >50% of a 3-option set, or all answers identical). The deterministic title+index permutation is what satisfies this. |
| richtig/falsch / binary | position is meaningless. Check instead **(a)** the true/false balance across the section is not skewed past a threshold, and **(b)** no within-item **uniform run** (all-same) and no **alternating rhythm** (r-f-r-f-r). |

Mode (b) is the class caught by hand in telc B1 Hörverstehen — three Teil 3 items
running r-f-r-f-r that every existing gate passed. Building both modes closes the
defect class for **every** product's listening and reading r/f banks, not just
this one.

Must run across **both** banks, whole-bank iteration, and be seen RED before it
is trusted.

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
would INSERT      116
would DEACTIVATE   96  of 304 active = 31.6%
guard: REFUSES without RECONCILE_FORCE=1
rows flagged ⚠ INVESTIGATE: 0
```

(15.8% after TestDaF only → 26.3% with LV and Sprachbausteine → 31.6% with
Hörverstehen. It grows with each re-authored section, as expected, and every row
is still "non-conformant predecessor being replaced".)

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
6. **Wire `gate:conformance` into `build`** — in the merge step, alongside the
   single reconcile, and **never before**. Confirmed by the founder 2026-07-22.
   It is currently in neither `build` nor the `gates` script, so today it blocks
   nothing; that is correct *for now*, because wiring it while the still-live
   304-item bank is non-conformant would block every deploy of a working product.
   The moment the bank is fully conformant **and** reconciled, it goes into
   `build` — a gate outside `build` blocks nothing, and this one is the whole
   point of batch 1.
7. Only then, one `RECONCILE_FORCE=1` run at the reviewed final state.

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

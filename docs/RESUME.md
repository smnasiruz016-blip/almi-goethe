# RESUME — AlmiGoethe cold-start

Checkpoint 2026-07-23, end of day. **Goethe route-3 full build is COMPLETE.** Six
German-exam engines are built, gated, reconciled and LIVE in production. Germany
**and** Austria are covered.

## The six engines (all live, five scoring philosophies)

| Engine | Scope | Scoring philosophy | items |
|---|---|---|---|
| **TestDaF** | DE, university | per-section TDN (no total, no pass/fail) | 86 |
| **telc B1** | DE, citizenship | %-per-part, 60% pass | 94 |
| **DTZ** | DE, integration | fixed total /100 → A2/B1 dual outcome | 61 |
| **Einbürgerungstest** | DE, civic | count-based pass/fail (≥17/33) | 60 |
| **DSH** | DE, university | weighted % (2:2:1:2) → DSH-1/2/3 | 76 |
| **ÖSD ZDÖ B1** | **AT**, citizenship | telc-style %, TWO separately-certifiable modules | 61 |
| telc B2 | DE, work | %-per-part (threshold unverified) | 80 |
| telc C1 Hochschule | DE, university | %-per-part + overall | 80 |

**Exam-engine bank: 598 active `ExamItem` rows** (verified in prod), + 96 deactivated
batch-1 predecessors kept (deactivate-never-delete). Plus the untouched
Goethe-Zertifikat A1–C2 item bank (the original product).

⚠️ **telc B2 and telc C1 Hochschule are UNSTRUCTURED** — authored (80 items each) but
not re-structured to per-Aufgabe cells, so the conformance and answer-distribution
gates REPORT them (they are the "105 findings in unenforced Aufgaben" line) but do
not enforce them. They still have the all-`a`/clustered key defect the distribution
gate flags. Structuring + de-gaming these two is the natural next batch if the DE
university corridor is revisited.

## What the gates enforce (all in `build`, RED-first proven)

- **conformance** — every item matches a real Aufgabe of its exam (task-type
  membership + sourced counts/word-envelopes). 438 structured items.
- **answer-distribution** — type-aware (MC position vs binary balance/rhythm), no
  gameable key. Enforces all six exams. Fix = deterministic `deGame` in
  `scripts/seed/exams/_permute.ts`.
- **civic-sourcing** — every Einbürgerungstest item maps key↔WORLD to the 44-fact
  base (`src/lib/exams/civic-factbase.ts`) with a citation. 60/60.
- rule7 (≥15/module), title-uniqueness, real-entity (no invented doc names a real
  company), reconcile-guard proof, ledger.

## Deploy & reconcile discipline (learned the hard way — see docs/DEPLOY_PROTOCOL.md)

- Deploy the **committed commit** (git-integration / clean checkout), never a local
  tree (a local force diverged 255 payloads once).
- The seed reconcile is now CLEAN every deploy: `insert N · update 0 · deactivate 0 ·
  verify` — the churn was jsonb key-order in `contentOf`, fixed with canonical
  sorted-key compare (`scripts/seed/exam-append.ts`). See
  [[feedback_jsonb_key_order_reconcile_churn]].
- `predict:deactivations` baseline archives `scripts/seed src/lib/exams` (the civic
  seed imports the fact-base from src).
- Adding an engine = a new `GermanExam` enum value + migration (`ALTER TYPE … ADD
  VALUE`), committed by migrate-deploy before seed:prod uses it.

## Where a new engine plugs in (the checklist, in order)

migration + `schema.prisma` enum → `types.ts` (result types) → `scoring/<x>.ts` +
selftest → `scoring/index.ts` (`isX`) → `registry.ts` (labels, section order,
`mapFraction`, `EXAM_DEFS`, `ALL_EXAMS`, `SectionOutcome.x`, every
`Record<GermanExam>` cascade: exams page, grader, SEO) → `exam-structure.ts`
(structure + productive word bands + conformance gate branch) → `_shared.ts` (level +
sections) → runner `Outcome.x` + result block → seed files (RED-first) → wire into
`_bank.mts` + `exam-append.ts` → `deGame` on objective MC → gates GREEN → PR → deploy.

## OPEN THREADS (nothing lost)

1. **Content-refresh (NEW, priority):** surface DTZ / DSH / Einbürgerungstest / ÖSD
   on the **homepage + nav** as available practice; drop the stale "TestDaF & telc =
   supplementary guides" framing — they and the four new engines are now full
   practice banks. Copy scope for beta-g. (Originally logged in
   [[project_almigoethe]] as the post-reconcile copy gap.)
2. **WS-grammar independent pass:** the 16 `WISS_STRUKTUREN` (DSH) items are owed to
   beta-g for a second grammar check (no gate can verify grammar). Dump them with
   `npx tsx` over `scripts/seed/exams/dsh-strukturen.ts`.
3. **Bundesland civic facts:** the Einbürgerungstest bank covers the 4 general
   domains only; the real test's 3 Bundesland-specific questions are a documented gap
   (not fabricated). Source one state's facts → add to `civic-factbase.ts`.
4. **Austrian-brand gate hardening:** add Austrian brands to the real-entity
   blocklist CAREFULLY — `willhaben` is safe; `Spar` (= imperative of sparen) and
   `Hofer` (a surname) are common-word/surname false-positive risks, so likely
   leave those to reading. See [[feedback_gate_false_positives_disable_gates]].
5. **Optional (wider AT ladder):** ÖSD A1–C2 ladder + the ÖIF Integrationsprüfung.

## After goethe → product #5 + the backport list

goethe is done. Next product is one of: **dutch · icelandic · danish · norwegian ·
swedish · japanese · korean · italian · celpip** (per the family roster). Carry the
backport list:
- **DET/CELPIP README leak** in icelandic / danish / norwegian / dutch (fork-hygiene:
  ancestor product names in README/identity). See [[feedback_fork_gate_skips_repo_root]].
- **whole-bank gate-iteration check** on french / swiss (confirm the conformance
  gate iterates the whole bank, not the registry — the almi-portuguese hole). See
  [[project_almiworld_content_gates]].

Repo: `C:\Projects\almi-goethe`. Prod: `almigoethe.almiworld.com`. Branch = `main`.

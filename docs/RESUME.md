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
| **Einbürgerungstest** | DE, civic | count-based pass/fail (≥17/33) | 92 |
| **DSH** | DE, university | weighted % (2:2:1:2) → DSH-1/2/3 | 76 |
| **ÖSD ZDÖ B1** | **AT**, citizenship | telc-style %, TWO separately-certifiable modules | 61 |
| telc B2 | DE, work | %-per-part (threshold unverified) | 80 |
| telc C1 Hochschule | DE, university | %-per-part + overall | 80 |

**Exam-engine bank: 630 active `ExamItem` rows** (verified in prod), + 96 deactivated
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
  base (`src/lib/exams/civic-factbase.ts`) with a citation. 92/92, of which 32 are
  state-tagged. Domain E adds three per-state checks, the decisive one being
  CROSS-STATE: an item tagged BE that references a real, cited BY fact is refused,
  because every other check passes on it. ⚠️ SCOPE: the gate proves item↔fact-base,
  NOT fact-base↔world — a wrong capital typed into `civic-factbase.ts` stays green
  (verified by mutating MV→Magdeburg: gate green, only the sourcing review catches
  it). Facts are beta-g's per-item GREEN, not the gate's.
### DOCTRINE — a green gate proves the AUTHORED DATA, not the code that SERVES it

Any section whose served subset depends on **who is asking** — state-scoped,
region-scoped, level-scoped, plan-scoped, locale-scoped — needs its **own runtime
draw gate**. The authoring gates will pass while the draw mixes contexts, because
they check items in isolation and the defect lives in the SELECTION.

**Precedent: Einbürgerungstest `BUNDESLAND`, PR #22.** 32 items, each correctly
tagged to one of the 16 Länder, each sourced and cited; `civic-sourcing` GREEN,
including a cross-state check it had been mutation-tested on. `pickClientItem` still
drew a random item across the WHOLE (exam, section) pool — a Berliner got another
Land's capital 15 times in 16. Caught only because the reviewer gated merge on a
RUNTIME confirmation rather than a diff.

Applying it, on this or any sibling product:
1. Write the draw gate in the SAME PR as the scoped items. Not after.
2. Make the draw a PURE function over items, so it is testable without a database.
3. A scoped section serves NOTHING until the scope is chosen — no default, no "any"
   fallback. Return a DISCRIMINATED result: "not chosen yet" and "nothing seeded"
   must render differently. As one nullable they collapse, and the tempting fix for
   a blank page is to draw something — which is the bug.
4. Never top up to a sourced envelope from another scope. Serve
   `min(requested, available)` and REPORT the shortfall.
5. Mutation-test by deleting the scope filter and confirm the proof goes red.

⚠️ NETWORK CHECK for any future user-scoped content: for every section whose served
set varies by user, ask "what does the DRAW do?" — and answer it by RUNNING it, not
by reading the gate output.

- **state-draw** — the RUNTIME half of the Bundesland guarantee. The civic-sourcing
  gate was GREEN while the practice page drew at random across the whole BUNDESLAND
  section, so a Berliner got another Land's capital 15 times in 16: the bank was
  perfect and the product was wrong. A gate that proves the DATA says nothing about
  the code that SERVES it. Proves the draw filters to the chosen Land, never pads the
  3-item envelope from another Land, and reports the shortfall. Mutation-tested by
  reintroducing the original bug (6 cases go red).
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
2. ~~**WS-grammar independent pass**~~ **DONE.** The 16 `WISS_STRUKTUREN` (DSH)
   items passed beta-g's independent grammar check — GREEN, no fixes. Every marked
   key is correct and uniquely correct; no wrong keys, no double answers, no
   ungrammatical stems. Two soft distractors were ruled KEEP as intentional register
   traps: 3(a) „Während dem Untersuchen…" and 15(c) „Trotz dem schlechten Wetter"
   (Duden accepts während/trotz + Dativ colloquially; both are wrong only because the
   stems demand Genitiv, and both keys stay uniquely correct). Optional hardening is
   on record but NOT requested: 3a → „Während des Untersuchung der Proben", 15c →
   „Trotz das schlechte Wetter". Re-dump with `npx tsx` over
   `scripts/seed/exams/dsh-strukturen.ts` — note `deGame` permutes option letters, so
   review the SERVED order, not the authored one.
3. ~~**Bundesland civic facts**~~ **DONE — CLOSED GREEN** (PR #22, live-verified by
   beta-g: chooser gates the draw, BE serves only Berlin, BY only Bayern, shortfall
   notice honest, zero cross-state). Domain E is built: `BUNDESLAND_FACTS`
   (16 states × 2 sourced anchors, capital + Landesparlament) + 32 original items in
   `scripts/seed/exams/einbuergerungstest-bundesland.ts`, distractors drawn from other
   real Länder. **2-of-3 is a RULING, not a gap to close:** the real test asks 3 state
   questions and 2 anchors per state are sourced (`BUNDESLAND_ITEMS_PER_STATE`).
   Beta-g ruled KEEP 2 — a clean, uniform, text-answerable 3rd civic fact does not
   exist across all 16 (the official third is the image-based Landeswappen, out of
   scope for a text engine), so honest 2-of-3 with a documented shortfall beats
   padding with a non-uniform fact. **The envelope stays at 3 and the gap stays
   documented — do not "fix" this.** Also ruled: the three Stadtstaat capital items
   ("Landeshauptstadt von Hamburg?" → "Hamburg") are trivially answerable but correct
   and real — accepted as-is; the parliament item (Bürgerschaft / Abgeordnetenhaus)
   carries the value for those states.
   Also NOT sourced: 13 of the 16 state portal domains (only BE/NW/HB were supplied);
   they are cited to bpb.de + the Parlamente-in-Deutschland listing instead of
   guessing a URL. Image-based state questions (coats of arms, maps) are out of scope
   for a text engine.
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

## NEW PRODUCT LINE (pipeline, behind current products — one at a time)

### Legal exams

**PRIMARY — TOLES (Test of Legal English Skills).** Best fit for the network and the
lowest risk in this line, because it tests legal **language**, not substantive law:
nothing in the bank has to assert what the law *is*.
- Levels: Foundation · Higher · Advanced.
- Scoring: percentage + performance band — telc-style, so
  `src/lib/exams/scoring/telc.ts` already covers the shape. No sixth scoring
  philosophy needed.
- Provider: Global Legal English. ⚠️ The founder's note also attributes it to the
  International Division of the Law Society of England & Wales — a REAL professional
  body, so that attribution must be SOURCED before it appears in any user-facing copy
  or disclaimer. See [[feedback_fabricated_docs_real_company]]: the invented letter
  signed "Helvetia" survived review precisely because its facts were right. A
  correct-sounding institutional claim is the dangerous kind.
- ⏳ Beta-g owes a **sourced TOLES envelope** (sections · task types · scoring bands)
  when this reaches the front of the queue. Do not author before it lands — that is
  the mistake telc B2 is currently being unwound from.

**LATER / HIGHER RISK — US bar (MBE) and England & Wales SQE1.** Substantive-law
multiple choice. Buildable, but they need an authoritative, current,
jurisdiction-specific legal fact-base that is far larger AND far more perishable than
the 44-fact civic base — case law and statute move, and a stale key here is not a thin
item but a wrong statement of law. Two distinct harms: accuracy harm to someone
preparing for a professional qualification, and the legal-advice line. Only under
heavy sourcing discipline, with the civic-sourcing pattern (every item keyed to a
cited fact) as the FLOOR, not the ceiling. Framing stays "exam practice, never legal
advice", as the civic engine does for citizenship.

**LOW PRIORITY — LSAT.** Reasoning and reading, not law content, so it teaches nothing
jurisdiction-specific; LSAC copyright is tight. Not a near-term candidate.

**DO NOT BUILD — ILEC.** Discontinued December 2016. Building it would be the
stale-exam trap in a new place — the same class of error as the DET/CELPIP ancestor
leaks, except the product itself would be the artefact that no longer exists.
Recorded here so nobody rediscovers it as an opportunity.

Repo: `C:\Projects\almi-goethe`. Prod: `almigoethe.almiworld.com`. Branch = `main`.

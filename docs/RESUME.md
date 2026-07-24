# RESUME — AlmiGoethe cold-start

Checkpoint updated 2026-07-24. **The German corridor is COMPLETE & LIVE.** Six
German-exam engines are built, gated, reconciled and LIVE in production. Germany
**and** Austria are covered.

⚠️ SIX vs EIGHT — both numbers are right, do not "correct" one to match the other.
**Six** = the completed engines (TestDaF · telc B1 · DTZ · Einbürgerungstest, incl.
per-Bundesland cells · DSH · ÖSD ZDÖ B1), alongside the Goethe-Zertifikat A1–C2 itself.
**Eight** = what `/pruefung` surfaces, because telc **B2** and **C1 Hochschule** are also
live — they are just under the ⑤ restructure. The homepage and `/pruefung` say "eight"
and that is accurate to what a learner can practise today.

**⑤ telc B2 — COMPLETE & LIVE (2026-07-24).** Restructured to the real telc cells
across Stages A–D, de-gamed, enforced, reconciled and deployed. Verified live by
STATE: `examItemsActive` 628 · B2 = 78 rows (LV 15 · SB 16 · HV 15 · SA 16 · SP 16) ·
**zero old taskTypes surviving**. Reconcile: 66 deactivated · 64 inserted · 14 updated
in place, 10.5% — under the guard, so NO `RECONCILE_FORCE` was used or needed.

**⑤ telc C1 Hochschule — the one remaining goethe thread.** Same A–D treatment.

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

## THE C1 HOCHSCHULE PLAYBOOK (the last goethe thread)

Run the same A–D shape B2 just went through. **Verify every cell against the C1H
handbook first** — do not assume B2's fixes transfer. Known shape, to be confirmed:

| Cell | Shape | Note |
|---|---|---|
| LV Teil 1 / 2 | 6 + 6, Zuordnung | current bank is MC-3 → re-author |
| LV Teil 3 | 12 = 11× richtig/falsch/nicht-im-Text + 1 MC | the 3-way R/F/N is a format we have nowhere else |
| SB | 22, **MC-4** | current bank is MC-3 → wrong option count, cannot be re-tagged |
| HV Teil 1 | 8, Zuordnung | |
| HV Teil 2 | 10, MC-3 | the one cell whose format already matches |
| HV Teil 3 | 10, **productive note-taking** | **ZERO items exist — must be built from nothing** |
| SA | Essay / Stellungnahme | ⚠️ may ALREADY be correct — unlike B2's Forumsbeiträge. VERIFY before deactivating |
| MA | Präsentation + Zusammenfassung + Diskussion | ⚠️ Teil 1 genuinely IS a Präsentation here, unlike B2. VERIFY |

**Four lessons from B2 that carry over — all four cost real defects there:**
1. **The parse trap, now hit three times.** Any NEW payload field must be declared in
   `objectivePayloadSchema` / `productivePayloadSchema` or Zod silently strips it
   between database and learner, with nothing erroring. C1H needs at least one new
   field for HV Teil 3 note-taking. Declare it, then mutation-test the declaration.
2. **De-game vs. order.** `deGame`'s binary mode REORDERS questions. That is wrong
   wherever items follow a text or a numbered segment — author the balance and
   assert it instead. It also cannot create balance from a uniform set.
3. **Near-synonym co-keys.** Two bank words that both fit a gap pass every mechanical
   gate. Distractors must be semantically FAR; difficulty comes from the size of the
   field, not from shading two words together.
4. **Uniqueness by fit, not by exhaustion.** A key that is only correct because the
   better word is spent on another gap is not determined by its sentence.

Plus: keep the bank SHUFFLED (B2's SB T2 was authored answers-first, so a–j were
always correct and k–o never — invisible to every gate).
## ⚠️ STANDING WATCH — telc B2 sections sit ON the rule7 floor

After the ⑤ restructure, B2 `HOERVERSTEHEN` and `LESEVERSTEHEN` hold **exactly 15**
items each (HV: T1 5 · T2 5 · T3 5 — LV: T1 5 · T2 5 · T3 5). That clears the ≥15
floor with **zero headroom**: removing or merging a single item trips rule7 and fails
the build. Same fragility already flagged for almi-icelandic.

Any future change to those sections must keep each at ≥15. If a Teil is ever
re-scoped, ADD an instance before removing one — the floor is enforced in `build`,
so the failure lands at deploy, not in review.
(SPRACHBAUSTEINE 16 · SCHRIFTLICHER_AUSDRUCK 16 · SPRECHEN 16 have one spare each.)
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

1. ~~**Content-refresh**~~ **DONE & LIVE** (PR #21, 2026-07-23). Homepage and
   `/pruefung` surface all eight exams as real practice; the "TestDaF & telc =
   supplementary guides" framing is gone, and the `… | AlmiGoethe · AlmiGoethe`
   title double-suffix is fixed. Verified live by rendered state.
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
4. ~~**telc B2 restructure (⑤)**~~ **DONE & LIVE** (2026-07-24) — Stages A–D,
   enforced, reconciled (66 deactivated · 64 inserted → 628), verified live.
5. **telc C1 Hochschule (⑤, the last one):** same A–D treatment — see the C1H
   playbook above for the known cell shapes and the four carry-over lessons.
6. **Austrian-brand gate hardening:** add Austrian brands to the real-entity
   blocklist CAREFULLY — `willhaben` is safe; `Spar` (= imperative of sparen) and
   `Hofer` (a surname) are common-word/surname false-positive risks, so likely
   leave those to reading. See [[feedback_gate_false_positives_disable_gates]].
7. **Optional (wider AT ladder):** ÖSD A1–C2 ladder + the ÖIF Integrationsprüfung.

## After goethe → product #5 + the backport list

goethe is done. Next product is one of: **dutch · icelandic · danish · norwegian ·
swedish · japanese · korean · italian · celpip** (per the family roster). Carry the
backport list:
- **DET/CELPIP README leak** in icelandic / danish / norwegian / dutch (fork-hygiene:
  ancestor product names in README/identity). See [[feedback_fork_gate_skips_repo_root]].
- **whole-bank gate-iteration check** on french / swiss (confirm the conformance
  gate iterates the whole bank, not the registry — the almi-portuguese hole). See
  [[project_almiworld_content_gates]].

## NEW PRODUCT LINES (pipeline, behind current products — one at a time)

### DOCTRINE #4 — language-not-knowledge (governs everything in this section)

Profession-specific **language** exams and standardised **skills** tests fit the model
and can be honestly sourced. Substantive-**knowledge** licensing exams (medicine,
nursing, law, finance) carry accuracy-harm plus professional-advice risk: they test the
profession, not the language. Those get **format/readiness tools only, never unverified
professional items** — the same STRICT tier the medical set already sits in.

Source of truth for this whole section: the founder's master roadmap
`AlmiWorld_Future_Product_Pipeline` (updated 2026-07-24). What follows is the goethe-repo
mirror of it, not a second opinion — if they disagree, the roadmap wins.

### Occupation & professional-language set

**Goethe extensions — cheapest of everything here.** These ride the EXISTING telc engine
and its %-per-part scoring; they are extensions, not new products, so no Stripe slot and
no new scoring philosophy:
- **telc Deutsch B1 · B2 Pflege** — nursing/care; Germany's worldwide care-worker corridor.
- **telc Deutsch B2 · C1 Medizin** — doctors' Fachsprachprüfung for the Approbation.
- **telc Deutsch B2 / A2 · B1 Beruf** — workplace German.
They test professional *communication*, not clinical content, so they stay inside
doctrine #4. Spec-verify each against the telc handbooks before authoring.
⚠️ SEQUENCING: do not start these until ⑤ closes. They inherit the very structure and
answer-format machinery telc B2/C1H is currently being unwound for; adding four more telc
variants on top of an unfinished restructure repeats the defect at four times the size.

**New standalone products:**
- **TOLES** (legal English) — see below.
- **Aviation English** — ICAO language-proficiency requirement (Operational Level 4),
  tested via **ELPAC** (EUROCONTROL) for pilots and air-traffic controllers.
  Regulator-mandated, published rating scale, recurring re-test demand.
- **Maritime English** — **ICS Marlins** test for seafarers (International Chamber of
  Shipping). Same family as OET, which is already live.
⚠️ ICAO · EUROCONTROL · the International Chamber of Shipping · the Law Society of England
& Wales are all REAL bodies. Every one of those attributions is SOURCE-BEFORE-USE — see
[[feedback_fabricated_docs_real_company]]. Aviation English is additionally safety-adjacent:
it is language, not knowledge, so it stays inside doctrine #4, but a wrong phraseology key
is not a thin item.

**⚠ STEER-AWAY — do NOT build:** US bar / **MBE** · England & Wales **SQE1** · **USMLE** ·
**NCLEX** · **PLAB** · **CFA**. Substantive-knowledge licensing; breaks doctrine #4.
Format/readiness tools only.

**DO NOT BUILD — ILEC.** Discontinued December 2016. Stale-exam trap.

⏳ Beta-g owes a **sourced envelope** (sections · task types · scoring) for each of these
when it reaches the front of the queue.

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

**STEER-AWAY — US bar (MBE) and England & Wales SQE1.** Logged 2026-07-23 as
"later / higher risk"; **doctrine #4 (2026-07-24) supersedes that — do not build.**
They are substantive-law MC: they test the profession, not the language. The reasoning
is kept because it is the clearest statement of WHY the doctrine exists — a
jurisdiction-specific legal fact-base is larger AND far more perishable than the
44-fact civic base; case law and statute move, so a stale key is not a thin item but a
wrong statement of law to someone sitting a professional qualification. Format/readiness
tools only, never unverified professional items.

**LOW PRIORITY — LSAT.** Reasoning and reading, not law content, so it teaches nothing
jurisdiction-specific; LSAC copyright is tight. Not a near-term candidate.

Repo: `C:\Projects\almi-goethe`. Prod: `almigoethe.almiworld.com`. Branch = `main`.

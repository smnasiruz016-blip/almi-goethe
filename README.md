# AlmiGoethe

AI-powered **German exam practice** — a **separate** product in the AlmiWorld family,
on its own subdomain **almigoethe.almiworld.com**.

Two engines, because German certification splits into two genuinely different shapes:

| | level-specific | single-format, score-banded |
|---|---|---|
| exams | **Goethe-Zertifikat A1–C2**, **telc Deutsch B1/B2/C1** | **TestDaF** |
| shape | one paper per level; you sit the level you want | one paper for everyone; the result places you on a band |
| result | pass/fail per module at that level | TDN 3 / 4 / 5 per module |

A level-specific exam and a score-banded one cannot share a scoring model, and they do
not share one here. Goethe-Zertifikat is **modular** at B1, B2 and C1 (since 2019) —
each module is passed and certified independently.

## Scope: Germany and Austria — both covered

This product covers **German-language** exams for **both Germany and Austria**.

- **Germany:** Goethe-Zertifikat, telc, TestDaF, the DTZ (Deutsch-Test für
  Zuwanderer), the DSH (university admission) and the Einbürgerungstest (civic
  naturalisation) — with the German authorities behind them.
- **Austria:** the ÖSD Zertifikat Deutsch Österreich B1 (ZDÖ B1), Module 2 of the
  Austrian Integration Agreement.

Swiss naturalisation (`fide`, cantonal civic requirements) belongs to **AlmiSwiss**
and is not authored here, even though the language overlaps. German and Austrian
authorities are kept apart: they are different bodies with different rules.

**Austrian citizenship** currently requires **B1** (the ÖSD ZDÖ B1 level). Austria has
*proposed* raising this to B2, but that is **not yet enacted** — every surface states
B1 and tells the reader to confirm the current requirement with the Austrian authority,
because a proposal is not a rule.

## Honesty doctrine

Results are **per-module practice estimates** against each exam's real pass rule —
never an official result, never a fabricated overall. All content is **original**.

Where a threshold is not verifiable from the awarding body, the engine ships it as
**unverified and says so in the UI** rather than presenting a confident number. That
mechanism is why `thresholdVerified` and `verified` exist as fields at all: a
threshold nobody has quoted is a threshold the learner should not be shown as fact.

**Citizenship:** German naturalisation generally requires **B1**, alongside other
criteria. Every surface that says so also tells the reader to confirm with the
Einbürgerungsbehörde, because the requirement is set by the authority and changes.

$12/month + 7-day trial; objective modules free, AI feedback paid.

## What the build enforces

`build` runs these in order, and any failure blocks the deploy:

| gate | asserts |
|---|---|
| `fork-hygiene` | no ancestor or other-product identity in `src`, `scripts`, `prisma` — **or in this README and package.json** |
| `uniqueness` | per-origin pSEO content is not a name-swap of another origin |
| `seed:prod` | seeds both banks on every deploy (`append.ts` for Goethe items, `exam-append.ts` for TestDaF/telc) |

## Fork hygiene — and why this repo matters more than most

Lineage: `celpip → goethe`. **This repo is an ancestor**: almi-french, almi-japanese,
almi-portuguese and others were forked from it, so anything wrong here propagates
outward.

That is not hypothetical. This README previously described the product as another
product's exam — a full test name plus that product's task names, scale and Prisma
models — and the identical file was found in **six** repos, byte for byte, pointing at
the wrong subdomain. One mistake, propagated by forking, invisible because
`package.json` was usually right and nobody opens the file that isn't.

Two rules the gate now encodes as a result:

1. **Scan the root identity files**, not just `src`/`scripts`/`prisma`. What a repo
   says it *is* was the one thing never checked.
2. **Ban the spelled-out name, not just the acronym.** A list holding only the
   acronym read that README as clean, because the leak never abbreviated it.

# Deploy & reconcile protocol (standing)

Distilled from the batch-1 close-out, 2026-07-23. Applies to every future
reconcile/force on this repo and is the template for the sibling products.

## 1. Build from the COMMITTED COMMIT, never a local tree

**Rule:** every production deploy — especially a `RECONCILE_FORCE=1` force — must
build the committed commit, via git-integration or `vercel --prod` from a **clean
checkout at HEAD**. Never `vercel --prod` from a working tree that may diverge from
what is committed.

**Why (the batch-1 incident):** the force was run via `vercel --prod` from a local
tree. Its title-based deactivation set was byte-exact (so nothing wrong was
deactivated), but its **payloads diverged from committed HEAD for 255 rows**. The
next git-integration deploy of `main` self-healed prod to the committed source
(`update 255`), which is how the divergence surfaced. A committed-commit build would
have made force and main identical (`update 0`).

**Corollary:** after any force, redeploy the committed HEAD and confirm the seeder
reports `update 0 · deactivate 0`. A non-zero update on an unchanged commit means
either a divergent-source force (as above) or non-deterministic seed content — both
must be explained before the ledger is closed.

## 2. The reconcile is gated, in this order, and never short-cut

1. Author to green: conformance, rule7, titles, real-entity, answer-distribution
   (enforced exams), civic-sourcing, ledger — all pass locally and in `build`.
2. `npm run predict:deactivations` — source-side list, no DB. Founder reviews every
   row. **⚠ INVESTIGATE is a hard stop, zero tolerance.**
3. Live diff: deploy WITHOUT `RECONCILE_FORCE`. The guard reads prod, prints the
   whole live deactivation list (cap ≥500, stable sort), and fails closed before any
   write. Nobody reads `DATABASE_URL`.
4. Diff the live list against the source prediction **line-for-line** (exact string
   match). Any live row not predicted = insert-only drift → STOP. Exact → proceed.
5. One `RECONCILE_FORCE=1` deploy of the committed HEAD (see rule 1).
6. `verify()` (active == authored) gates that build; Ready == verified in-prod.
7. Wire the enforcing gates into `build` in the same step, never before (they would
   block deploys of the still-non-conformant live bank).
8. Redeploy committed HEAD → confirm `update 0 · deactivate 0` (rule 1 corollary).

## 3. `.baseline/` is build-time-only

`predict-deactivations.mts` imports `.baseline/` (materialised by `git archive main`
when the tool is run). It is gitignored and absent in CI, so it is excluded from
`tsconfig` — `next build` must not type-check it. Do not re-add it to the build's
type-check surface; run the tool with `npm run predict:deactivations` locally.

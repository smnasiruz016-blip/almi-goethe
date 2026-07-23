-- Add the DTZ engine (Deutsch-Test für Zuwanderer, A2–B1) to the GermanExam enum.
-- Additive only: a new enum value, no table change. ExamItem.exam can now be 'DTZ'.
--
-- PG 12+ permits ALTER TYPE ... ADD VALUE inside a transaction as long as the new
-- value is not USED in the same transaction; this migration only declares it, so it
-- is safe under `prisma migrate deploy`. DTZ rows are seeded by a LATER step, after
-- this migration is applied — never in the same transaction (see the deploy protocol
-- and the new-enum-seed hazard: a pending enum makes the seed fail 22P02).

ALTER TYPE "GermanExam" ADD VALUE 'DTZ';

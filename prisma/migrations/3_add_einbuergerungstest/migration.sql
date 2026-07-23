-- Add the Einbürgerungstest engine (German civic naturalisation test) to the
-- GermanExam enum. Additive only: a new enum value, no table change.
--
-- Same safety as 2_add_dtz: ALTER TYPE ... ADD VALUE is committed by migrate-deploy
-- BEFORE seed:prod uses it, never in the same transaction (avoids the 22P02 hazard).

ALTER TYPE "GermanExam" ADD VALUE 'EINBUERGERUNGSTEST';

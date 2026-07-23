-- Add the DSH engine (Deutsche Sprachprüfung für den Hochschulzugang) to the
-- GermanExam enum. Additive only. Same safety as 2_add_dtz / 3_add_einbuergerungstest:
-- ALTER TYPE ... ADD VALUE is committed by migrate-deploy BEFORE seed:prod uses it.

ALTER TYPE "GermanExam" ADD VALUE 'DSH';

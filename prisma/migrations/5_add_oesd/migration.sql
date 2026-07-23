-- Add the ÖSD ZDÖ B1 engine (Zertifikat Deutsch Österreich B1) to the GermanExam
-- enum. Additive only. Same safety as the earlier engine migrations: ALTER TYPE ...
-- ADD VALUE is committed by migrate-deploy BEFORE seed:prod uses it.

ALTER TYPE "GermanExam" ADD VALUE 'OESD_B1';

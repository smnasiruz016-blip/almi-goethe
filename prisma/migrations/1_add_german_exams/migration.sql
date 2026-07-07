-- Add the TestDaF + telc engines ALONGSIDE the untouched Goethe-Zertifikat item bank.
-- Additive only: creates GermanExam enum + ExamItem/ExamAttempt/ExamSession. No existing
-- Goethe table is altered. Reuses the generic Goethe* enums (Difficulty / AttemptStatus /
-- SessionMode / SessionStatus) which already exist from 0_init.

-- CreateEnum
CREATE TYPE "GermanExam" AS ENUM ('TESTDAF', 'TELC_B1', 'TELC_B2', 'TELC_C1_HOCHSCHULE');

-- CreateTable
CREATE TABLE "ExamItem" (
    "id" TEXT NOT NULL,
    "exam" "GermanExam" NOT NULL,
    "level" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "taskType" TEXT NOT NULL,
    "difficulty" "GoetheDifficulty" NOT NULL DEFAULT 'CORE',
    "title" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "guidanceNote" TEXT,
    "timeLimitSeconds" INTEGER NOT NULL DEFAULT 0,
    "topicTag" TEXT NOT NULL DEFAULT 'general',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "exam" "GermanExam" NOT NULL,
    "level" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "status" "GoetheAttemptStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "response" JSONB NOT NULL DEFAULT '{}',
    "result" JSONB,
    "feedback" JSONB,
    "aiModel" TEXT,
    "costCents" INTEGER,
    "latencyMs" INTEGER,
    "sessionId" TEXT,
    "sessionStep" INTEGER,
    "timeSpentSeconds" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mode" "GoetheSessionMode" NOT NULL,
    "exam" "GermanExam" NOT NULL,
    "level" TEXT NOT NULL,
    "section" TEXT,
    "targetCount" INTEGER NOT NULL,
    "currentStep" INTEGER NOT NULL DEFAULT 0,
    "currentDifficulty" "GoetheDifficulty" NOT NULL DEFAULT 'CORE',
    "plan" JSONB,
    "status" "GoetheSessionStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "result" JSONB,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExamSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamItem_exam_level_section_title_key" ON "ExamItem"("exam", "level", "section", "title");

-- CreateIndex
CREATE INDEX "ExamItem_exam_level_section_active_idx" ON "ExamItem"("exam", "level", "section", "active");

-- CreateIndex
CREATE INDEX "ExamAttempt_userId_exam_status_idx" ON "ExamAttempt"("userId", "exam", "status");

-- CreateIndex
CREATE INDEX "ExamAttempt_itemId_idx" ON "ExamAttempt"("itemId");

-- CreateIndex
CREATE INDEX "ExamAttempt_sessionId_sessionStep_idx" ON "ExamAttempt"("sessionId", "sessionStep");

-- CreateIndex
CREATE INDEX "ExamSession_userId_exam_status_idx" ON "ExamSession"("userId", "exam", "status");

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ExamItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ExamSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamSession" ADD CONSTRAINT "ExamSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

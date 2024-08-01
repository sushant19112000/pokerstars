/*
  Warnings:

  - You are about to drop the `africaSurvery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "africaSurvery";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "africasurvey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL
);

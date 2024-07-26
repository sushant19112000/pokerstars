/*
  Warnings:

  - You are about to drop the `mailers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "mailers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "singlemailer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "singlemailer_url_key" ON "singlemailer"("url");

/*
  Warnings:

  - You are about to drop the column `gdpr` on the `landingpage` table. All the data in the column will be lost.
  - You are about to drop the column `optin` on the `landingpage` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_landingpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "headerBackgroundColor" TEXT NOT NULL,
    "campaignCode" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "formdata" TEXT NOT NULL DEFAULT 'formData',
    "downloadpageurl" TEXT NOT NULL DEFAULT 'Download url',
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    "logoSrc" TEXT NOT NULL DEFAULT 'imageUrl',
    "logoHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "logoWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    CONSTRAINT "landingpage_campaignCode_fkey" FOREIGN KEY ("campaignCode") REFERENCES "campaign" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_landingpage" ("campaignCode", "content", "data", "downloadpageurl", "formdata", "headerBackgroundColor", "id", "logoHeight", "logoSrc", "logoWidth", "title", "url") SELECT "campaignCode", "content", "data", "downloadpageurl", "formdata", "headerBackgroundColor", "id", "logoHeight", "logoSrc", "logoWidth", "title", "url" FROM "landingpage";
DROP TABLE "landingpage";
ALTER TABLE "new_landingpage" RENAME TO "landingpage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

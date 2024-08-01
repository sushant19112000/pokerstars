/*
  Warnings:

  - You are about to drop the column `sevenLimit` on the `pokerstars` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyLimit` on the `pokerstars` table. All the data in the column will be lost.
  - Added the required column `sevenlimit` to the `pokerstars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeklylimit` to the `pokerstars` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pokerstars" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ip" TEXT NOT NULL,
    "geolocation" TEXT NOT NULL,
    "useragent" TEXT NOT NULL,
    "devicetype" TEXT NOT NULL,
    "browsername" TEXT NOT NULL,
    "screenresolution" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "referralurl" TEXT NOT NULL,
    "countryf1" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "autowithlimit" TEXT NOT NULL,
    "weeklylimit" TEXT NOT NULL,
    "sevenlimit" TEXT NOT NULL,
    "stateofbirth" TEXT NOT NULL,
    "countryofbirth" TEXT NOT NULL,
    "cityofbirth" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "depositlimit" TEXT NOT NULL
);
INSERT INTO "new_pokerstars" ("address", "autowithlimit", "browsername", "city", "cityofbirth", "countryf1", "countryofbirth", "depositlimit", "devicetype", "dob", "email", "firstname", "gender", "geolocation", "id", "ip", "lastname", "password", "postcode", "referralurl", "screenresolution", "state", "stateofbirth", "timezone", "useragent", "username") SELECT "address", "autowithlimit", "browsername", "city", "cityofbirth", "countryf1", "countryofbirth", "depositlimit", "devicetype", "dob", "email", "firstname", "gender", "geolocation", "id", "ip", "lastname", "password", "postcode", "referralurl", "screenresolution", "state", "stateofbirth", "timezone", "useragent", "username" FROM "pokerstars";
DROP TABLE "pokerstars";
ALTER TABLE "new_pokerstars" RENAME TO "pokerstars";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

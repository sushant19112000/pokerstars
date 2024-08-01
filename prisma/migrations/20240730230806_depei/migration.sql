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
INSERT INTO "new_pokerstars" ("address", "autowithlimit", "browsername", "city", "cityofbirth", "countryf1", "countryofbirth", "depositlimit", "devicetype", "dob", "email", "firstname", "gender", "geolocation", "id", "ip", "lastname", "password", "postcode", "referralurl", "screenresolution", "sevenlimit", "state", "stateofbirth", "timezone", "useragent", "username", "weeklylimit") SELECT "address", "autowithlimit", "browsername", "city", "cityofbirth", "countryf1", "countryofbirth", "depositlimit", "devicetype", "dob", "email", "firstname", "gender", "geolocation", "id", "ip", "lastname", "password", "postcode", "referralurl", "screenresolution", "sevenlimit", "state", "stateofbirth", "timezone", "useragent", "username", "weeklylimit" FROM "pokerstars";
DROP TABLE "pokerstars";
ALTER TABLE "new_pokerstars" RENAME TO "pokerstars";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

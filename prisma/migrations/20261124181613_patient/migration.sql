/*
  Warnings:

  - You are about to drop the column `needsPasswordChange` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "contactNumber" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "needsPasswordChange";

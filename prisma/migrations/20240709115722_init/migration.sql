/*
  Warnings:

  - You are about to drop the column `eventTime` on the `Event` table. All the data in the column will be lost.
  - Added the required column `eventPosterUrl` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventTime",
ADD COLUMN     "eventPosterUrl" TEXT NOT NULL;

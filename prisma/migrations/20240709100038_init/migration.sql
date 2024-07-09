/*
  Warnings:

  - The primary key for the `eventUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `eventUser` table. All the data in the column will be lost.
  - Added the required column `numberOfTickets` to the `eventUser` table without a default value. This is not possible if the table is not empty.
  - The required column `orderId` was added to the `eventUser` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "eventUser" DROP CONSTRAINT "eventUser_pkey",
DROP COLUMN "id",
ADD COLUMN     "numberOfTickets" INTEGER NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD CONSTRAINT "eventUser_pkey" PRIMARY KEY ("orderId");

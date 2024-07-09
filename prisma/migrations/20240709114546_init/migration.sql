/*
  Warnings:

  - Added the required column `ticketCategoryName` to the `TicketDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketDetails" ADD COLUMN     "ticketCategoryName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Artist" (
    "artistId" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "artistImageUrl" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("artistId")
);

-- CreateTable
CREATE TABLE "_EventArtists" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventArtists_AB_unique" ON "_EventArtists"("A", "B");

-- CreateIndex
CREATE INDEX "_EventArtists_B_index" ON "_EventArtists"("B");

-- AddForeignKey
ALTER TABLE "_EventArtists" ADD CONSTRAINT "_EventArtists_A_fkey" FOREIGN KEY ("A") REFERENCES "Artist"("artistId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventArtists" ADD CONSTRAINT "_EventArtists_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("eventId") ON DELETE CASCADE ON UPDATE CASCADE;

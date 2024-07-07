-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "NIC" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "eventId" SERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventTime" TIMESTAMP(3) NOT NULL,
    "eventVenue" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "TicketDetails" (
    "ticketId" TEXT NOT NULL,
    "ticketPrice" DOUBLE PRECISION NOT NULL,
    "ticketQty" INTEGER NOT NULL,
    "ticketType" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "TicketDetails_pkey" PRIMARY KEY ("ticketId")
);

-- CreateTable
CREATE TABLE "eventUser" (
    "id" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,

    CONSTRAINT "eventUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_NIC_key" ON "User"("NIC");

-- AddForeignKey
ALTER TABLE "TicketDetails" ADD CONSTRAINT "TicketDetails_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventUser" ADD CONSTRAINT "eventUser_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventUser" ADD CONSTRAINT "eventUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventUser" ADD CONSTRAINT "eventUser_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "TicketDetails"("ticketId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropIndex
DROP INDEX "User_NIC_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/dx3x66zpi/image/upload/v1633660134/Eventify/default-user-image.jpg';

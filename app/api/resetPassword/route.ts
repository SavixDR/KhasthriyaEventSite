import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    try {
        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password in the database
        const user = await prisma.user.update({
            where: { email },
            data: { password: hashedPassword },
        });

        if (user) {
            return NextResponse.json({ message: 'Password has been reset successfully.' });
        } else {
            return NextResponse.json({ message: 'User not found.' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        return NextResponse.json({ message: 'An error occurred while resetting the password.' }, { status: 500 });
    }
}

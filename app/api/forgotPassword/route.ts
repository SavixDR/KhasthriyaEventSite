import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME, 
            pass: process.env.EMAIL_PASSWORD, 
        },
    });

    try {
        const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?email=${email}`;

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Reset your password',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; border: 1px solid #FFD700; background-color: #000000; color: #FFFFFF;">
                    <h1 style="color: #FFD700; text-align: center;">Reset Your Password</h1>
                    <p style="color: #FFD700;text-align: center; font-size: 16px;">You requested to reset your password. Click the link below to reset it:</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="${resetUrl}" style="display: inline-block; padding: 15px 30px; font-size: 16px; font-weight: bold; color: #000000; background-color: #FFD700; border-radius: 5px; text-decoration: none; transition: background-color 0.3s;">
                            Reset Password
                        </a>
                    </div>
                    <p style="text-align: center; font-size: 14px; color: #CCCCCC;">If you didn't request this, please ignore this email.</p>
                </div>
            `,
        });

        return NextResponse.json({ message: 'If the email exists, you will receive a password reset link.' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'An error occurred while sending the email.' }, { status: 500 });
    }
}

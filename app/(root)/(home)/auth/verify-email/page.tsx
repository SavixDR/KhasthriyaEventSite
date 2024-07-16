import Link from "next/link";
import {db} from "../../../../../lib/db";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

import EmailCheckIcon from "../../../../../components/icon/email-check";

import EmailWarningIcon from "../../../../../components/icon/email-warning";

interface VerifyEmailPageProps {
	searchParams: { [key: string]: string | string[] | undefined };
}

export default async function VerifyEmailPage({
	searchParams,
}: VerifyEmailPageProps) {
	let message = "Verifying email...";
	let verified = false;
	if (searchParams.token) {
		// Checks if a verification token is provided in the URL.
		// Attempts to find a user in the database with the provided email verification token.
		const user = await db.user.findUnique({
			where: {
				verification_token: searchParams.token as string,
			},
		});

		// Conditionally updates the message and verified status based on the user lookup.
		if (!user) {
			message = "User not found. Check your email for the verification link.";
		} else {
			// If the user is found, updates the user record to mark the email as verified.
			await db.user.update({
				where: {
					verification_token: searchParams.token as string,
				},
				data: {
					verified: true,
					verification_token: null, // Clears the verification token.
				},
			});

			message = `Email verified! ${user.email}`;
			verified = true; // Sets the verified status to true.
		}
	} else {
		// Updates the message if no verification token is found.
		message = "No email verification token found. Check your email.";
	}

	return (
		<div className="grid place-content-center py-40">
			<Card className="max-w-sm text-center">
				<CardHeader>
					<CardTitle>Email Verification</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="w-full grid place-content-center py-4">
						{verified ? (
							<EmailCheckIcon size={56} />
						) : (
							<EmailWarningIcon />
						)}
					</div>
					<p
						className="text-lg text-muted-foreground"
						style={{ textWrap: "balance" }}
					>
						{message}
					</p>
				</CardContent>
				<CardFooter>
					{verified && (
						// Displays a sign-in link if the email is successfully verified.
						<Link
							href={"/#home"}
							className="bg-primary text-white text-sm font-medium hover:bg-primary/90 h-10 px-4 py-2 rounded-lg w-full text-center"
						>
							Sign in
						</Link>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}

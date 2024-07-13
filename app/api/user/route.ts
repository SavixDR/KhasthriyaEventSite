import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/lib/db";
import * as z from "zod";
import { useRouter } from "next/router";

const userSchema = z.object({
	username: z.string().min(1, "Username is required").max(100),
	email: z.string().min(1, "Email is required").email("Invalid email"),
	nic: z.string().min(1, "NIC is required").max(12, "Invalid NIC"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have than 8 characters"),
});



export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { username, email, nic, password } = userSchema.parse(body);

		//check wethere there is an existing user with the same email
		const existingUserByEmail = await db.user.findUnique({
			where: { email: email },
		});

		if (existingUserByEmail) {
			if (existingUserByEmail.password === null) {
				const hashedPassword = await hash(password, 10);
				const newUser = await db.user.update({
					data: { password: hashedPassword, nic: nic, username: username },
					where: { email: email },
				});
				const { password: newUserPassword, ...newUserWithoutPassword } =
					newUser;

				return NextResponse.json(
					{
						user: newUserWithoutPassword,
						message: "User Created Successfully.",
					},
					{ status: 201 }
				);
			}
			return NextResponse.json(
				{ user: null, message: "User already exists with this email" },
				{ status: 409 }
			);
		}

		const hashedPassword = await hash(password, 10);
		const newUser = await db.user.create({
			data: {
				username,
				email,
				nic: nic,
				password: hashedPassword,
			},
		});

		const { password: newUserPassword, ...newUserWithoutPassword } = newUser;

		return NextResponse.json(
			{ user: newUserWithoutPassword, message: "User Created Successfully." },
			{ status: 201 }
		);
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ user: null, message: error.errors.map((e) => e.message).join(", ") },
				{ status: 400 }
			);
		}

		console.error(error);
		return NextResponse.json(
			{ user: null, message: `An error occurred: ${error}` },
			{ status: 500 }
		);
	}
}

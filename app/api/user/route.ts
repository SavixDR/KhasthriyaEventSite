import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/lib/db";
import * as z from "zod";


const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    nic: z.string().min(1, 'NIC is required').max(12, 'Invalid NIC'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
  

export async function POST(req: Request){
    try{
        const body = await req.json();
        const { username, email,nic, password } = userSchema.parse(body);

		//check wethere there is an existing user with the same email
		const existingUserByEmail = await db.user.findUnique({
			where: { email: email },
		});

		if (existingUserByEmail) {
			return NextResponse.json(
				{ user: null, message: "User already exists with this email" },
				{ status: 409 }
			);
		}

		// check if the username already exists
		const existingUserByUsername = await db.user.findUnique({
			where: { username: username },
		});

		if (existingUserByUsername) {
			return NextResponse.json(
				{ user: null, message: "User already exists with this Username" },
				{ status: 409 }
			);
		}
		const hashedPassword = await hash(password, 10);
		const newUser = await db.user.create({
			data: {
				username,
				email,
                NIC: nic,
				password: hashedPassword,
			},
		});

		const {password: newUserPassword, ...newUserWithoutPassword} = newUser;

		return NextResponse.json(
			{ user: newUserWithoutPassword, message: "User Created Successfully." },
			{ status: 201 }
		);
    } catch (error){
        if (error instanceof z.ZodError) {
			return NextResponse.json(
			  { user: null, message: error.errors.map(e => e.message).join(', ') },
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
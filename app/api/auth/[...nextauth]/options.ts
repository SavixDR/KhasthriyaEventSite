import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Google from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { createTransport } from "nodemailer";
import { db } from "@/lib/db";
import { compare } from "bcrypt";

export const options: NextAuthOptions = {
	pages: { signIn: "/" },
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
		// maxAge: 60, //7 days
		maxAge: 7 * 24 * 60 * 60, //7 days
	},
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
			profile(profile) {
				console.log("Google profile:", profile);
				return {
					id: profile.sub,
					username: profile.name,
					email: profile.email,
					image: profile.picture,
					nic: "",
					phoneNumber: "",
					verified: profile.email_verified,
				};
			},
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER ?? "",
			from: process.env.EMAIL_FROM ?? "",
			sendVerificationRequest({
				identifier: email,
				url,
				provider: { server, from },
			}) {
				sendVerificationRequest({
					identifier: email,
					url,
					provider: { server, from },
				});
			},
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "Enter your email",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "********",
				},
			},
			async authorize(credentials, req) {
				console.log("Authorizing credentials", credentials);

				if (!credentials?.email || !credentials?.password) {
					console.log("Email or Password is missing.....");
					return null;
				}

				const existingUser = await db.user.findUnique({
					where: { email: credentials?.email },
				});
				console.log("Existing User: ", existingUser);
				if (!existingUser || !existingUser?.password) {
					console.log("User not found from this email.");
					return null;
				}

				const passwordMatch = await compare(
					credentials.password,
					existingUser.password ?? ""
				);

				if (!passwordMatch) {
					console.log("Username & Password does not match");
					return null;
				}

				return {
					id: `${existingUser.id}`,
					username: existingUser?.username ?? "",
					nic: existingUser?.nic ?? "",
					email: existingUser?.email ?? "",
					image: existingUser?.image ?? "",
					phoneNumber: existingUser?.phoneNumber ?? "",
					verified: existingUser?.verified ?? false,
				};
			},
		}),
	],
	adapter: PrismaAdapter(db),
	callbacks: {
		async signIn({ user, account, profile }) {
			console.log("Sign In Callback", user, account, profile);
			if (account?.provider == "google") {
				const existingUser = await db.user.findUnique({
					where: { email: user.email ? user.email : "" },
				});

				if (existingUser) {
					console.log("User Exists: ", existingUser);
					const accountLinked = await db.account.findUnique({
						where: {
							provider_providerAccountId: {
								provider: account ? account.provider : "",
								providerAccountId: account ? account.providerAccountId : "",
							},
						},
					});

					if (!accountLinked) {
						console.log("Creating account with data:", {
							userId: existingUser.id,
							provider: account ? account.provider : "",
							providerAccountId: account ? account.providerAccountId : "",
							refresh_token: account?.refresh_token,
							access_token: account?.access_token,
							expires_at: account?.expires_at
								? new Date(account.expires_at * 1000)
								: null,
							scope: account?.scope,
							token_type: account?.token_type,
							id_token: account?.id_token,
						});

						await db.account.create({
							data: {
								userId: existingUser.id,
								provider: account ? account.provider : "",
								providerAccountId: account ? account.providerAccountId : "",
								refresh_token: account?.refresh_token,
								access_token: account?.access_token,
								expires_at: account?.expires_at
									? account.expires_at * 1000
									: null,
							},
						});
						console.log("Account created successfully.");

						await db.user.update({
							data: {
								image: user?.image,
								verified: user?.verified,
							},
							where: { id: existingUser.id },
						});
					}
				}
				console.log('User : ', user);
				// db.user.create({
				// 	data: {
				// 		email: user.email ? user.email : "",
				// 		username: user.username,
				// 		image: user.image,
				// 		nic: user.nic ? user.nic : "",
				// 		password: "",
				// 		phoneNumber: "",
				// 		verified: true,
				// 	},
				// })
				return true;
			}
			console.log("Sign in successfull.");
			return true;
		},
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			console.log("Redirect Callback URL: ", url, baseUrl);
			if (url.startsWith("/")) return `${baseUrl}${url}`;

			// Allows callback URLs on the same origin
			if (new URL(url).origin === baseUrl) return url;

			return baseUrl;
		},
		async jwt({ token, user }) {
			if (user) {
				console.log("JWT Callback: ", user, token);
				let exisitingUser = await db.user.findUnique({
					where: { email: user.email ? user.email : "" },
				});

				if (!exisitingUser && user.email) {
					exisitingUser = await db.user.create({
						data: {
							email: user.email,
							username: user.username,
							image: user.image,
							nic: user.nic ? user.nic : "",
							password: "",
							phoneNumber: "",
							verified: user.verified? user.verified : true,
						},
					});
				}
				console.log("New User Created: ", exisitingUser);

				return {
					...token,
					userId: exisitingUser?.id,
					username: exisitingUser?.username,
					nic: exisitingUser?.nic,
					image: exisitingUser?.image,
					phoneNumber: exisitingUser?.phoneNumber,
					verified: exisitingUser?.verified,
				};
			}
			return token;
		},

		async session({ session, token }) {
			console.log("Session callback: ", session, token);
			return {
				...session,
				user: {
					...session.user,
					id: token.userId,
					username: token.username,
					nic: token.nic,
					phoneNumber: token.phoneNumber,
					verified: token.verified,
				},
			};
		},
	},
};

async function sendVerificationRequest(params: {
	identifier: any;
	url: any;
	provider: any;
}) {
	const { identifier, url, provider } = params;
	const { host } = new URL(url);
	// NOTE: You are not required to use `nodemailer`, use whatever you want.
	const transport = createTransport(provider.server);
	const result = await transport.sendMail({
		to: identifier,
		from: provider.from,
		subject: `Sign in to ${host}`,
		text: text({ url, host }),
		html: html({ url, host }),
	});
	const failed = result.rejected.concat(result.pending).filter(Boolean);
	if (failed.length) {
		throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
	}
}

function html(params: { url: string; host: string }) {
	const { url, host } = params;

	const escapedHost = host.replace(/\./g, "&#8203;.");

	const brandColor = "#346df1";
	const color = {
		background: "#f9f9f9",
		text: "#444",
		mainBackground: "#fff",
		buttonBackground: brandColor,
		buttonBorder: brandColor,
		buttonText: "#fff",
	};

	return `
  <body style="background: ${color.background};">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Sign in to <strong>${escapedHost}</strong>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                  target="_blank"
                  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                  in</a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          If you did not request this email you can safely ignore it.
        </td>
      </tr>
    </table>
  </body>
  `;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
	return `Sign in to ${host}\n${url}\n\n`;
}

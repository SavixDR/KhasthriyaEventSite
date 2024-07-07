import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Google from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from 'next-auth/providers/credentials'
import { createTransport } from "nodemailer";
import { db } from "@/lib/db";
import { compare } from "bcrypt";


export const options: NextAuthOptions = {
  pages: {},
  secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, //7 days
	},
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER ?? "",
			from: process.env.EMAIL_FROM ?? "",
			sendVerificationRequest({
				identifier: email,
				url,
				provider: { server, from },
			}) {
				sendVerificationRequest({ identifier: email, url, provider: { server, from }});
			}
            
		}),
    CredentialsProvider({
      name: 'Credentials',
      credentials:{
        email: { label: "Email", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" , placeholder: "********" }
      },
      async authorize(credentials, req) {
        console.log("Authorizing credentials", credentials, req)

        if(!credentials?.email || !credentials?.password){
          return null;
        } 

        const existingUser = await db.user.findUnique({
          where: {email: credentials?.email}
        })

        if (!existingUser) {
          console.log("User not found from this email.")
          return null;
        }

        const passwordMatch  =await compare(
					credentials.password,
					existingUser.password
				);

        if (!passwordMatch) {
					console.log("Username & Password does not match");
					return null;
				}

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          nic: existingUser.NIC,
          email: existingUser.email,
        }
      }
    })
	],
	adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({token, user}){
      if(user){
        return{
          ...token,
          userId: user.id,
          username: user.username,
          nic: user.nic,
        }
      }
      return token;
    },

    async session({session,token}){ 
      return {
        ...session,
        user: {
          ...session.user,
          id: token.userId,
          username:token.username,
          nic: token.nic,
        }
      }
    }
  }
};

async function sendVerificationRequest(params: { identifier: any; url: any; provider: any;}) {
    const { identifier, url, provider } = params
    const { host } = new URL(url)
    // NOTE: You are not required to use `nodemailer`, use whatever you want.
    const transport = createTransport(provider.server)
    const result = await transport.sendMail({
      to: identifier,
      from: provider.from,
      subject: `Sign in to ${host}`,
      text: text({ url, host }),
      html: html({ url, host }),
    })
    const failed = result.rejected.concat(result.pending).filter(Boolean)
    if (failed.length) {
      throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
    }
  }

function html(params: { url: string, host: string,}) {
    const { url, host } = params
  
    const escapedHost = host.replace(/\./g, "&#8203;.")
  
    const brandColor = "#346df1"
    const color = {
      background: "#f9f9f9",
      text: "#444",
      mainBackground: "#fff",
      buttonBackground: brandColor,
      buttonBorder: brandColor,
      buttonText: "#fff",
    }
  
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
  `
  }
  
  /** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
  function text({ url, host }: { url: string, host: string }) {
    return `Sign in to ${host}\n${url}\n\n`
  }

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      nic: string;
      image: string;
      phoneNumber: string;
      verified: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    username: string;
    nic: string;
    image: string;
    phoneNumber: string;
    verified: boolean;
  }

  interface JWT {
    userId: string;
    username: string;
    nic: string;
    image: string;
    phoneNumber: string;
    verified: boolean;
  }
}

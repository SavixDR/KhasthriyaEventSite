import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      nic: string;
      image: string;
      phoneNum: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    username: string;
    nic: string;
    image: string;
    phoneNum: string;
  }

  interface JWT {
    userId: string;
    username: string;
    nic: string;
    image: string;
    phoneNum: string;
  }
}

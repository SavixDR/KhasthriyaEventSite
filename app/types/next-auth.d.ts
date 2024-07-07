import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {

  interface User {
    username: string
    nic: string
  }
  interface Session {
    user: User & {
      username:string
      nic:string
      id: string
    }
    token: {
      username:string
      nic:string
      id: string
    }
  }
}
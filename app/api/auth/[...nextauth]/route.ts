import { SupabaseAdapter } from "@auth/supabase-adapter"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import Google from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID??"",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET??"",
        })
    ],
    adapter: SupabaseAdapter({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL??"",
      secret: process.env.SUPABASE_SERVICE_ROLE_KEY??"",
    }) as Adapter,
})

export { handler as GET, handler as POST }
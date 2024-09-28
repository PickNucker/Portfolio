import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
          Google({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
          }),
    ]
}
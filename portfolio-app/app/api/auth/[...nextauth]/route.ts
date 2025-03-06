import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import prismadb from '@/lib/prismadb'
import { compare } from 'bcrypt'

const handler = NextAuth({
    providers: [
        Credentials({
          id: 'credentials',
          name: 'Credentials',
          credentials: {
            email: {
              label: 'Email',
              type: 'text'
            },
            password: {
              label: 'Password',
              type: 'password',
            }
          },
          async authorize(credentials){
            if(!credentials?.email || !credentials?.password){
              throw new Error("Email and Password required");
            }

            const user = await prismadb.user.findUnique({
              where: {
                email: credentials.email
              }
            })

            if(!user || !user.hashedPassword)throw new Error("Emial does not exist");

            const isCorrectPassword = await compare(credentials.password, user.hashedPassword)

            if(!isCorrectPassword) throw new Error("Incorrect Password");

            return user;
          }
        }),
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
          }),
          Google({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
          }),
          
    ],
    pages: {
      signIn: '/auth',
    },
    debug: process.env.NODE_ENV === 'development', 
    session: {
      strategy: 'jwt',
    },
    jwt: {
      secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }


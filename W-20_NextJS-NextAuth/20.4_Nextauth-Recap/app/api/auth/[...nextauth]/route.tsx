import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const username = credentials?.username;
                const password = credentials?.password;

                console.log(username, password)

                // Here actually you would fetch the user from your database
                // and check if the password is correct or not

                const user = {
                    id: "1",
                    username: "Json Smith",
                    password: "random1234",
                }

                if (user) return user;
                else return null;
            }
        }),
        GoogleProvider({
            clientId: "random",
            clientSecret: "random",
        }),
        GithubProvider({
            clientId: "random",
            clientSecret: "random"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
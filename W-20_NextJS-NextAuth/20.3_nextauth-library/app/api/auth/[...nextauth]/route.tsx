import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
        providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
            username: { label: "Username", type: "text", placeholder: "waqarhassan@gmail.com" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                const username = credentials?.username
                const password = credentials?.password
                console.log("username", username);
                console.log("password", password);

                // Here make a database call to check if the user exists or not
                const user = {
                    name:"Waqar Hassan",
                    id:"1",
                    email:"hellomail@gmail.com"
                }

                if(user){
                    return user
                }
                else {
                    return null}


            }
        })
        ]

})

export {handler as GET, handler as POST}
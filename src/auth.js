import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import connect from "@/lib/db";


const nextAuthOptions = {
    session: {
      strategy: 'jwt',
    },
    pages: {
      signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                console.log("credentials", credentials);
                if (credentials === null) return null;
                
                try {
                    await connect();

                    const UserModel = mongoose.models.users || mongoose.model('users', new mongoose.Schema({}, { strict: false }), 'users');
                    const user = await UserModel.findOne({ email: credentials.email });                    console.log(user);
                    if (user) {
                        const isMatch = user?.password === credentials.password;

                        if (isMatch) {
                            return user;
                        }
                            console.log("Email or Password is not correct");
                    } else {
                        console.log("User not found");
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = {
                    ...user,
                    id: user.id,
                };
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.user._doc._id            };
            return session;
        },
    }
    
};
const nextAuthInstance = NextAuth(nextAuthOptions);

export const {     
    handlers: {GET, POST},
    auth,
} = nextAuthInstance;

export const signIn = nextAuthInstance.signIn;
export const signOut = nextAuthInstance.signOut;
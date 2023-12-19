import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredntialsProvider from 'next-auth/providers/credentials';
// ahammamlho96
// RtfgZma5mrvgBx1a

export const authOptions: NextAuthOptions = {
    // pages: {
    //     signIn: '/',
    // },
    session: { strategy: 'jwt' },
    providers: [
        CredntialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', placeholder: 'Enter Email', },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) return null;

                console.log("CredntialsProvider called");
                const user = { id: "1", email: 'Admin' };
                if (user) {
                    return (user);
                }
                return (null);

            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    // callbacks: {
    //     async redirect({ url, baseUrl }) {
    //         // Allows relative callback URLs
    //         if (url.startsWith("/")) return `${baseUrl}${url}`
    //         // Allows callback URLs on the same origin
    //         else if (new URL(url).origin === baseUrl) return url
    //         return baseUrl
    //     }
    //     // async jwt({ token, user, session }) {
    //     //     console.log('jwt callback', { token, user, session })
    //     //     if (user) return { ...token, ...user };
    //     //     return token;
    //     // },
    //     // async session({ session, token, user }) {
    //     //     console.log('session callback', { token, user, session })
    //     //     // session.user = token.user;
    //     //     // session.backendTokens = token.backendTokens;
    //     //     return session;
    //     // },

    // },


};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
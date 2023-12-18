import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredntialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    // pages: {
    //     signIn: '/',
    // },
    session: { strategy: 'jwt' },
    providers: [
        CredntialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password) return null;

                const { username, password } = credentials;

                const user = { id: "1", name: 'Admin' };
                console.log('user ---> ', user);
                if (user) {
                    return (user);
                }
                return (null);

            },
        }),
    ],


    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };
            return token;
        },
        async session({ token, session }) {
            // session.user = token.user;
            // session.backendTokens = token.backendTokens;
            return session;
        },
        // async redirect({ url, baseUrl }) {
        //   return '/chatPage';
        // },
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
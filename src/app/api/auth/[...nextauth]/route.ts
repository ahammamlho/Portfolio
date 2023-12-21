import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredntialsProvider from 'next-auth/providers/credentials';
// ahammamlho96
// RtfgZma5mrvgBx1a

export const authOptions: NextAuthOptions = {

    secret: process.env.NEXTAUTH_SECRET,
    pages: { signIn: '/login' },
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 30 days = 30 * 24 * 60 * 60
    },
    providers: [
        CredntialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'username', placeholder: 'username', },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.username || !credentials.password) return null;
                if (credentials.username !== "lahammam") return null;

                // try {
                //     const hashedPassword = await bcrypt.hash(credentials.password, 12);
                //     console.log(hashedPassword)
                // } catch (error) { }

                try {
                    const passwordMatch = await bcrypt.compare(credentials.password, process.env.HASH_PASS || "");
                    if (passwordMatch) {
                        console.log("Login successful")
                        const user = { id: "1", username: 'lahammam' };
                        return user
                    } else {
                        console.log("Invalid credentials")
                    }
                } catch (error) {
                    console.log(error)
                }

                return (null);
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

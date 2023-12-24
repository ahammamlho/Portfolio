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
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 30 days = 30 * 24 * 60 * 60
  },
  providers: [
    CredntialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'username', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password)
          return null;
        if (credentials.username !== 'lahammam') return null;
        console.log('authorize function called ---> ');
        // try {
        //     const hashedPassword = await bcrypt.hash(credentials.password, 12);
        //     console.log(hashedPassword)
        // } catch (error) { }

        try {
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            process.env.HASH_PASS || '',
          );
          if (passwordMatch) {
            const user = { id: '1', username: 'lahammam' };
            // console.log("Login successful", user)
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }: any) {
      // console.log('jwt callback called ---> ', { token, user, session })
      if (user) return { ...token, username: user.username };
      return token;
    },
    async session({ session, token, user }: any) {
      // console.log('session callback called --->', { session, token, user })
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

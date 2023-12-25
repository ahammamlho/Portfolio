import NextAuth from 'next-auth/next';
import { authOptions } from './authOptions';

// ahammamlho96
// RtfgZma5mrvgBx1a

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

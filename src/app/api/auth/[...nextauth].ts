import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({

            async authorize(credentials, req) {
                // Your authentication logic goes here
                const user = { id: 1, name: 'Admin' };

                if (user && user.password === credentials.password) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    pages: {
        signIn: '/admin/login',
        signOut: '/admin/logout',
        error: '/admin/error',
        verifyRequest: '/admin/verify-request',
    },
});

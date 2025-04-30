import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import data from "../../../data/data";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email", type: "email"
                },
                password: {
                    label: "Password", type: "password"
                }
            },
            async authorize(credentials) {
                const user = data.find((u) => u.email === credentials.email && u.password === credentials.password);
                if (user) {
                    return { id: user.id, email: user.email, name: user.name, role: user.role };
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
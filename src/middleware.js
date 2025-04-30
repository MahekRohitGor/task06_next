import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/login"
    }
});

export const config = {
    // protected routes
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/admin/:path*'
    ]
}
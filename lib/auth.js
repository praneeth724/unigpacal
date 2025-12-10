import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const providers = []

// Only add Google provider if credentials are configured
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    providers.push(
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    )
} else {
    console.warn("⚠️  Google OAuth credentials not found in environment variables")
    console.warn("ℹ️  See GOOGLE_AUTH_SETUP.md for setup instructions")
}

// Always add guest access
providers.push(
    CredentialsProvider({
        name: "Guest Access",
        credentials: {},
        async authorize(credentials) {
            // Return a dummy user for guest access
            return { id: "guest", name: "Guest User", email: "guest@example.com" }
        }
    })
)

export const authOptions = {
    providers,
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}

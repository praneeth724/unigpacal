"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AlertCircle, Home } from "lucide-react"

export default function AuthError() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")

    const errorMessages = {
        Configuration: "There is a problem with the server configuration.",
        AccessDenied: "Access denied. You do not have permission to sign in.",
        Verification: "The verification token has expired or has already been used.",
        OAuthSignin: "Error in constructing an authorization URL.",
        OAuthCallback: "Error in handling the response from the OAuth provider.",
        OAuthCreateAccount: "Could not create OAuth provider user in the database.",
        EmailCreateAccount: "Could not create email provider user in the database.",
        Callback: "Error in the OAuth callback handler route.",
        OAuthAccountNotLinked: "Email already exists with a different provider.",
        EmailSignin: "Could not send the email with the verification token.",
        CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
        SessionRequired: "Please sign in to access this page.",
        Default: "An unexpected error occurred. Please try again.",
    }

    const errorMessage = errorMessages[error] || errorMessages.Default

    return (
        <div className="min-h-screen bg-gradient-to-br from-destructive/5 via-background to-destructive/5 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                    {/* Error Icon */}
                    <div className="bg-destructive/10 p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="bg-destructive/20 p-4 rounded-full">
                                <AlertCircle className="h-12 w-12 text-destructive" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-foreground mb-2">
                            Authentication Error
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Something went wrong during sign in
                        </p>
                    </div>

                    {/* Error Details */}
                    <div className="p-8 space-y-6">
                        <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                            <p className="text-sm text-foreground">
                                {errorMessage}
                            </p>
                            {error && (
                                <p className="text-xs text-muted-foreground mt-2">
                                    Error code: {error}
                                </p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                            <Link
                                href="/auth/signin"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Try Again
                            </Link>
                            <Link
                                href="/"
                                className="w-full bg-background hover:bg-muted text-foreground border border-border rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-all duration-200"
                            >
                                <Home className="h-4 w-4" />
                                Back to Home
                            </Link>
                        </div>

                        {/* Help Text */}
                        <div className="pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground text-center">
                                If this problem persists, please contact support or check your
                                network connection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

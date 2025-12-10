"use client"

import { useSearchParams } from "next/navigation"

export default function AuthErrorContent() {
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
        </div>
    )
}

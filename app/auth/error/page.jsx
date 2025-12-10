import { Suspense } from "react"
import Link from "next/link"
import { AlertCircle, Home } from "lucide-react"
import AuthErrorContent from "./AuthErrorContent"

export default function AuthError() {
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
                    <Suspense fallback={
                        <div className="p-8 space-y-6">
                            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                                <p className="text-sm text-foreground">
                                    Loading error details...
                                </p>
                            </div>
                        </div>
                    }>
                        <AuthErrorContent />
                    </Suspense>

                    {/* Actions */}
                    <div className="p-8 pt-0 space-y-3">
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
                    <div className="px-8 pb-8 pt-0">
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

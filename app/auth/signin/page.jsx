import { Suspense } from "react"
import { GraduationCap } from "lucide-react"
import SignInContent from "./SignInContent"

export default function SignIn() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative">
                {/* Main Card */}
                <div className="bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground">
                        <div className="flex justify-center mb-4">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                                <GraduationCap className="h-12 w-12" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">GPA Calculator</h1>
                        <p className="text-primary-foreground/90 text-sm">
                            Track your academic journey with ease
                        </p>
                    </div>

                    {/* Content */}
                    <Suspense fallback={
                        <div className="p-8 space-y-6">
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-foreground mb-2">
                                    Welcome Back
                                </h2>
                                <p className="text-muted-foreground text-sm">
                                    Loading...
                                </p>
                            </div>
                        </div>
                    }>
                        <SignInContent />
                    </Suspense>
                </div>

                {/* Footer */}
                <div className="text-center mt-6 text-sm text-muted-foreground">
                    <p>New to GPA Calculator? Get started in seconds!</p>
                </div>
            </div>
        </div>
    )
}

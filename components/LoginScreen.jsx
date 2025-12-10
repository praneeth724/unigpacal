"use client"

import { signIn } from "next-auth/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Chrome, User } from "lucide-react"

export default function LoginScreen() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

            <Card className="w-full max-w-md relative z-10 border-white/20 bg-white/90 backdrop-blur-md shadow-2xl">
                <CardHeader className="text-center space-y-2">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 transform rotate-3 hover:rotate-6 transition-transform">
                        <span className="text-3xl font-bold text-white">A+</span>
                    </div>
                    <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        University GPA Calculator
                    </CardTitle>
                    <CardDescription className="text-gray-500 text-lg">
                        Track your academic journey with elegance
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-6">
                    <Button
                        className="w-full h-12 text-lg font-medium bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 shadow-sm transition-all hover:shadow-md group"
                        onClick={() => signIn("google")}
                    >
                        <Chrome className="mr-2 h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                        Sign in with Google
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white/90 px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full h-12 text-lg font-medium border-2 hover:bg-gray-50/50"
                        onClick={() => signIn("credentials", { callbackUrl: "/" })}
                    >
                        <User className="mr-2 h-5 w-5" />
                        Guest Access
                    </Button>
                </CardContent>

                <CardFooter className="text-center text-sm text-gray-400 pb-8">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </CardFooter>
            </Card>
        </div>
    )
}

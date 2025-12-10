"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Chrome, User, GraduationCap, Trophy, Target, TrendingUp, BookOpen, Award, Sparkles, ArrowRight } from "lucide-react"

export default function LoginScreen() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Hero Content */}
                    <div className="space-y-8 text-center md:text-left order-2 md:order-1">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                <Sparkles className="h-4 w-4" />
                                Your Academic Success Partner
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    University GPA
                                </span>
                                <br />
                                <span className="text-gray-800">Calculator</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Track your academic journey with precision. Calculate semester GPAs, monitor your progress, and achieve excellence.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Accurate</h3>
                                <p className="text-sm text-gray-600">Precise GPA calculations</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                    <TrendingUp className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Track Progress</h3>
                                <p className="text-sm text-gray-600">Monitor your journey</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Easy to Use</h3>
                                <p className="text-sm text-gray-600">Intuitive interface</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm border border-pink-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                                    <Award className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-800 mb-1">Class Awards</h3>
                                <p className="text-sm text-gray-600">Track achievements</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-center md:justify-start gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">4.0</div>
                                <div className="text-sm text-gray-600">Max GPA</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">8</div>
                                <div className="text-sm text-gray-600">Semesters</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-600">100%</div>
                                <div className="text-sm text-gray-600">Accurate</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Login Card */}
                    <div className="order-1 md:order-2">
                        <div className="relative">
                            {/* Decorative Background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>

                            {/* Main Card */}
                            <div className="relative bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 space-y-8">
                                {/* Header */}
                                <div className="text-center space-y-4">
                                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
                                        <GraduationCap className="h-10 w-10 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                            Welcome Back
                                        </h2>
                                        <p className="text-gray-600">
                                            Sign in to continue your academic journey
                                        </p>
                                    </div>
                                </div>

                                {/* Sign In Buttons */}
                                <div className="space-y-4">
                                    <Button
                                        onClick={() => signIn("google")}
                                        className="w-full h-14 text-lg font-medium bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <Chrome className="mr-3 h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform relative z-10" />
                                        <span className="relative z-10">Continue with Google</span>
                                        <ArrowRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all relative z-10" />
                                    </Button>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t border-gray-300" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white px-4 text-gray-500 font-medium">Or</span>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => signIn("credentials", { callbackUrl: "/" })}
                                        className="w-full h-14 text-lg font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all group"
                                    >
                                        <User className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                                        Continue as Guest
                                        <ArrowRight className="ml-auto h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>

                                {/* Trust Badges */}
                                <div className="pt-6 border-t border-gray-200">
                                    <div className="flex items-center justify-center gap-6 text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Secure</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Trophy className="h-4 w-4 text-yellow-500" />
                                            <span>Trusted</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Sparkles className="h-4 w-4 text-blue-500" />
                                            <span>Free</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <p className="text-center text-xs text-gray-500 leading-relaxed">
                                    By continuing, you agree to our Terms of Service and Privacy Policy. Your data is encrypted and secure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="hidden lg:block absolute top-10 right-10 bg-white/90 backdrop-blur-sm border border-yellow-200 rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-800">First Class</div>
                        <div className="text-xs text-gray-600">GPA ≥ 3.7</div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm border border-green-200 rounded-2xl p-4 shadow-xl animate-bounce delay-1000">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-green-400 to-green-500 w-12 h-12 rounded-xl flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-800">Track Progress</div>
                        <div className="text-xs text-gray-600">Real-time updates</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

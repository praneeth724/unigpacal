"use client"

import { useSession, signOut } from "next-auth/react"
import GpaDashboard from "@/components/GpaDashboard"
import LoginScreen from "@/components/LoginScreen"
import { Button } from "@/components/ui/button"
import { LogOut, GraduationCap, TrendingUp, Award, BookOpen } from "lucide-react"

export default function Home() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        )
    }

    if (!session) {
        return <LoginScreen />
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    University GPA Calculator
                                </h1>
                                <p className="text-xs text-muted-foreground hidden sm:block">Track your academic excellence</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                                    {(session.user?.name?.[0] || "G").toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {session.user?.name || "Guest"}
                                </span>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => signOut()}
                                className="hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                <Award className="h-4 w-4" />
                                Academic Excellence Tracker
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Master Your
                                <span className="block text-yellow-300">Academic Journey</span>
                            </h2>
                            <p className="text-lg text-blue-100">
                                Calculate your semester and final GPA with precision. Track your progress, plan your courses, and achieve your academic goals.
                            </p>
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-300">4</div>
                                    <div className="text-sm text-blue-100 mt-1">Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-300">8</div>
                                    <div className="text-sm text-blue-100 mt-1">Semesters</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-300">∞</div>
                                    <div className="text-sm text-blue-100 mt-1">Potential</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Illustration */}
                        <div className="hidden md:block relative">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 space-y-4">
                                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-400 p-2 rounded-lg">
                                                <TrendingUp className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-blue-100">Current GPA</div>
                                                <div className="text-2xl font-bold">3.85</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-400 p-2 rounded-lg">
                                                <BookOpen className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-blue-100">Credits</div>
                                                <div className="text-2xl font-bold">120</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-yellow-400 p-2 rounded-lg">
                                                <Award className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-blue-100">Class Award</div>
                                                <div className="text-xl font-bold">First Class</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <GpaDashboard />
            </main>

            {/* Footer */}
            <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-sm text-muted-foreground">
                        <p>© 2025 University GPA Calculator. Built for academic excellence.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

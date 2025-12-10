"use client"

import { useSession, signOut } from "next-auth/react"
import GpaDashboard from "@/components/GpaDashboard"
import LoginScreen from "@/components/LoginScreen"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function Home() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    if (!session) {
        return <LoginScreen />
    }

    return (
        <main className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-primary">University GPA Calculator</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground hidden md:inline">
                            Welcome, {session.user?.name || "Guest"}
                        </span>
                        <Button variant="outline" size="sm" onClick={() => signOut()}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>
                <GpaDashboard />
            </div>
        </main>
    );
}

"use client"

import React, { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import SemesterTable from "./SemesterTable"
import { SEMESTERS } from "@/data/courses"
import { GRADE_POINTS, FGPA_WEIGHTS, CLASS_AWARDS } from "@/data/grading"
import { cn } from "@/lib/utils"
import { Calculator, GraduationCap, BookOpen } from "lucide-react"

export default function GpaDashboard() {
    const [grades, setGrades] = useState({})
    const [selectedElectives, setSelectedElectives] = useState({})
    const [activeYear, setActiveYear] = useState("year1")

    // Load from local storage on mount
    useEffect(() => {
        const savedGrades = localStorage.getItem("gpa_grades")
        const savedElectives = localStorage.getItem("gpa_electives")
        if (savedGrades) setGrades(JSON.parse(savedGrades))
        if (savedElectives) setSelectedElectives(JSON.parse(savedElectives))
    }, [])

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("gpa_grades", JSON.stringify(grades))
        localStorage.setItem("gpa_electives", JSON.stringify(selectedElectives))
    }, [grades, selectedElectives])

    const handleGradeChange = (semesterId, courseCode, grade) => {
        setGrades(prev => ({
            ...prev,
            [semesterId]: {
                ...prev[semesterId],
                [courseCode]: grade
            }
        }))
    }

    const handleElectiveAdd = (semesterId, courseCode) => {
        setSelectedElectives(prev => ({
            ...prev,
            [semesterId]: [...(prev[semesterId] || []), courseCode]
        }))
    }

    const handleElectiveRemove = (semesterId, courseCode) => {
        setSelectedElectives(prev => ({
            ...prev,
            [semesterId]: (prev[semesterId] || []).filter(c => c !== courseCode)
        }))
        // Also remove the grade
        setGrades(prev => {
            const newSemGrades = { ...prev[semesterId] }
            delete newSemGrades[courseCode]
            return { ...prev, [semesterId]: newSemGrades }
        })
    }

    // Calculation Logic
    const calculateYearStats = (year) => {
        let totalPoints = 0
        let totalCredits = 0

        const semestersInYear = SEMESTERS.filter(s => s.year === year)

        semestersInYear.forEach(sem => {
            const semGrades = grades[sem.id] || {}
            const semElectives = selectedElectives[sem.id] || []

            const courses = [
                ...(sem.courses || []),
                ...(sem.electives ? sem.electives.filter(e => semElectives.includes(e.code)) : [])
            ]

            courses.forEach(course => {
                if (course.isNonGpa) return
                const grade = semGrades[course.code]
                if (grade && GRADE_POINTS[grade] !== undefined) {
                    totalPoints += GRADE_POINTS[grade] * course.credits
                    totalCredits += course.credits
                }
            })
        })

        return {
            gpa: totalCredits > 0 ? totalPoints / totalCredits : 0,
            credits: totalCredits
        }
    }

    const yearStats = {
        1: calculateYearStats(1),
        2: calculateYearStats(2),
        3: calculateYearStats(3),
        4: calculateYearStats(4),
    }

    const fgpa = Object.keys(FGPA_WEIGHTS).reduce((acc, year) => {
        return acc + (yearStats[year].gpa * FGPA_WEIGHTS[year])
    }, 0)

    const award = CLASS_AWARDS.find(a => fgpa >= a.min && fgpa <= a.max)

    return (
        <div className="space-y-8">
            {/* Summary Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium opacity-90 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" /> Final GPA (FGPA)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">{fgpa.toFixed(2)}</div>
                        <p className="text-sm opacity-80 mt-1">
                            {award ? award.name : (fgpa > 0 ? "Pass" : "No grades yet")}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-muted-foreground flex items-center gap-2">
                            <BookOpen className="h-5 w-5" /> Total Credits
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">
                            {Object.values(yearStats).reduce((acc, curr) => acc + curr.credits, 0)}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Accumulated GPA Credits</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-muted-foreground flex items-center gap-2">
                            <Calculator className="h-5 w-5" /> Year GPAs
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(yearStats).map(([year, stats]) => (
                                <div key={year} className="flex justify-between items-center bg-muted/50 p-2 rounded">
                                    <span className="font-medium">Year {year}</span>
                                    <span className="font-bold">{stats.gpa.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="year1" value={activeYear} onValueChange={setActiveYear} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted p-1 rounded-lg">
                    {[1, 2, 3, 4].map((year) => (
                        <TabsTrigger
                            key={year}
                            value={`year${year}`}
                            className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm py-2 rounded-md transition-all font-medium"
                        >
                            Year {year}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {[1, 2, 3, 4].map((year) => (
                    <TabsContent key={year} value={`year${year}`} className="space-y-6 animate-in fade-in-50 duration-300">
                        {SEMESTERS.filter(s => s.year === year).map(semester => (
                            <SemesterTable
                                key={semester.id}
                                semester={semester}
                                grades={grades}
                                onGradeChange={handleGradeChange}
                                selectedElectives={selectedElectives}
                                onElectiveAdd={handleElectiveAdd}
                                onElectiveRemove={handleElectiveRemove}
                            />
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

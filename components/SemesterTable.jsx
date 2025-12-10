"use client"

import React, { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GRADE_POINTS } from "@/data/grading"
import { Plus, Trash2 } from "lucide-react"

export default function SemesterTable({ semester, grades, onGradeChange, selectedElectives, onElectiveAdd, onElectiveRemove }) {
    const semesterGrades = grades[semester.id] || {}

    // Combine compulsory and selected electives
    const activeCourses = useMemo(() => {
        const compulsory = semester.courses || []
        const electives = semester.electives
            ? semester.electives.filter(e => selectedElectives[semester.id]?.includes(e.code))
            : []
        return [...compulsory, ...electives]
    }, [semester, selectedElectives])

    // Calculate GPA
    const { totalCredits, totalPoints, gpa } = useMemo(() => {
        let credits = 0
        let points = 0

        activeCourses.forEach(course => {
            if (course.isNonGpa) return

            const grade = semesterGrades[course.code]
            if (grade && GRADE_POINTS[grade] !== undefined) {
                credits += course.credits
                points += GRADE_POINTS[grade] * course.credits
            }
        })

        return {
            totalCredits: credits,
            totalPoints: points,
            gpa: credits > 0 ? (points / credits).toFixed(2) : "0.00"
        }
    }, [activeCourses, semesterGrades])

    // Available electives to add
    const availableElectives = useMemo(() => {
        if (!semester.electives) return []
        const selectedCodes = selectedElectives[semester.id] || []
        return semester.electives.filter(e => !selectedCodes.includes(e.code))
    }, [semester, selectedElectives])

    return (
        <Card className="mb-6 overflow-hidden border-t-4 border-t-primary">
            <CardHeader className="bg-muted/30 pb-4">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-primary">{semester.name}</CardTitle>
                    <div className="text-right">
                        <span className="text-sm text-muted-foreground mr-2">GPA:</span>
                        <span className="text-2xl font-bold text-primary">{gpa}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 text-muted-foreground uppercase text-xs">
                            <tr>
                                <th className="px-4 py-3 font-medium">Code</th>
                                <th className="px-4 py-3 font-medium">Course Title</th>
                                <th className="px-4 py-3 font-medium text-center">Credits</th>
                                <th className="px-4 py-3 font-medium w-32">Grade</th>
                                {semester.electives && <th className="px-4 py-3 w-10"></th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {activeCourses.map((course) => (
                                <tr key={course.code} className="hover:bg-muted/10 transition-colors">
                                    <td className="px-4 py-3 font-medium">{course.code}</td>
                                    <td className="px-4 py-3">{course.title}</td>
                                    <td className="px-4 py-3 text-center">
                                        {course.credits}
                                        {course.isNonGpa && <span className="ml-1 text-[10px] text-muted-foreground">(NG)</span>}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Select
                                            value={semesterGrades[course.code] || ""}
                                            onValueChange={(value) => onGradeChange(semester.id, course.code, value)}
                                        >
                                            <SelectTrigger className="h-8 w-24">
                                                <SelectValue placeholder="-" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" side="bottom" align="center">
                                                {Object.keys(GRADE_POINTS).map((grade) => (
                                                    <SelectItem key={grade} value={grade}>
                                                        {grade}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </td>
                                    {semester.electives && (
                                        <td className="px-4 py-3 text-center">
                                            {!course.type?.includes("Compulsory") && (
                                                <button
                                                    onClick={() => onElectiveRemove(semester.id, course.code)}
                                                    className="text-destructive hover:bg-destructive/10 p-1 rounded transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}

                            {/* Add Elective Row */}
                            {semester.electives && availableElectives.length > 0 && (
                                <tr className="bg-muted/20 border-t-2 border-dashed">
                                    <td colSpan={5} className="px-4 py-2">
                                        <Select onValueChange={(value) => onElectiveAdd(semester.id, value)}>
                                            <SelectTrigger className="w-full md:w-1/2 mx-auto border-dashed border-primary/50 text-primary hover:bg-primary/5">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Plus className="h-4 w-4" />
                                                    <span>Add Elective Course</span>
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {availableElectives.map(e => (
                                                    <SelectItem key={e.code} value={e.code}>
                                                        {e.code} - {e.title} ({e.credits} Cr)
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export function AcademicTimeline() {
  const education = [
    {
      year: "2025",
      degree: "M.Sc. Biotechnology",
      score: "77.33%",
      status: "Completed",
    },
    {
      year: "2023",
      degree: "B.Sc. Life Science",
      score: "63.05%",
      status: "Completed",
    },
    {
      year: "2020",
      degree: "Intermediate",
      score: "74.4%",
      status: "Completed",
    },
    {
      year: "2018",
      degree: "High School",
      score: "80%",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Academic Background</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A progressive academic journey showcasing consistent growth and specialization in life sciences and
            biotechnology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div className="flex-1">
                              <Badge variant={edu.status === "In Progress" ? "default" : "secondary"} className="mb-2">
                                {edu.status}
                              </Badge>
                              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                            </div>
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </>
                        ) : (
                          <>
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <div className="flex-1">
                              <Badge variant={edu.status === "In Progress" ? "default" : "secondary"} className="mb-2">
                                {edu.status}
                              </Badge>
                              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-2xl font-bold text-primary mb-1">{edu.score}</p>
                      <p className="text-sm text-muted-foreground">Academic Performance</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {edu.year}
                  </div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

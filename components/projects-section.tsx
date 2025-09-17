import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Cytochrome P450 Monooxygenase Research",
      description:
        "Comprehensive dissertation study investigating the effects of Methyl Jasmonate Treatment in Senna alexandrina mill. This research explores the enzymatic pathways and their potential applications in biotechnology.",
      tags: ["Research", "Molecular Biology", "Plant Biotechnology"],
      type: "Dissertation",
    },
    {
      title: "Bioinformatics Tools Application",
      description:
        "Summer internship project focusing on the practical application of computational biology tools for data analysis and interpretation in biotechnology research.",
      tags: ["Bioinformatics", "Data Analysis", "Computational Biology"],
      type: "Internship Project",
    },
    {
      title: "Laboratory Research Experience",
      description:
        "Extensive hands-on experience with various molecular biology techniques including RNA isolation, PCR amplification, and electrophoresis in controlled laboratory environments.",
      tags: ["Wet Lab", "Molecular Biology", "Research Methods"],
      type: "Laboratory Work",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Research & Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Highlighting key research projects and laboratory experiences that demonstrate practical application of
            biotechnology principles and methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl text-foreground leading-tight flex-1">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 flex-1 bg-transparent">
                    <FileText className="h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

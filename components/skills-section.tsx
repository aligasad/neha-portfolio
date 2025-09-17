import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TestTube, Computer, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: TestTube,
      title: "Instrument Handling",
      skills: ["PCR", "Spectrophotometer", "Nano Drop", "Gel Doc", "Laminar Airflow", "Centrifuge", "Real Time PCR"],
    },
    {
      icon: Wrench,
      title: "Wet Lab Techniques",
      skills: [
        "RNA isolation",
        "Plasmid DNA isolation",
        "PCR amplification",
        "Electrophoresis",
        "Reagent preparation",
        "Media preparation",
      ],
    },
    {
      icon: Computer,
      title: "In-Silico Tools",
      skills: ["Primer designing", "Bioinformatics tools", "MS Word", "MS PowerPoint"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive skill set spanning laboratory instrumentation, molecular biology techniques, and
            computational tools for modern biotechnology research.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-secondary/50 hover:bg-secondary/70 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

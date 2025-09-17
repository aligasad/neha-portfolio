import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Lightbulb, Computer } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      icon: Computer,
      title: "Summer Internship in Bioinformatics Tools",
      type: "Internship",
      description: "Gained hands-on experience with computational biology tools and data analysis techniques.",
    },
    {
      icon: Award,
      title: "Dissertation on Cytochrome P450 monooxygenase",
      type: "Research",
      description: "Comprehensive study on Methyl Jasmonate Treatment in Senna alexandrina mill.",
    },
    {
      icon: Lightbulb,
      title: "Disruptive Green Technologies and Circular Economy",
      type: "Course",
      description: "Value-added course focusing on sustainable biotechnology applications.",
    },
    {
      icon: Users,
      title: "Career Guidance & Skill Up Programs",
      type: "Professional Development",
      description: "Active participation in career development and skill enhancement initiatives.",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications & Training</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Continuous learning through specialized training programs, research projects, and professional development
            initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg text-foreground leading-tight">{cert.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-pretty">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Microscope, FlaskConical, BookOpen, Target } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Microscope,
      title: "Research Focus",
      description: "Specialized in biotechnology research with hands-on experience in molecular biology techniques",
    },
    {
      icon: FlaskConical,
      title: "Laboratory Expertise",
      description: "Proficient in advanced instrumentation and wet lab methodologies",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Committed to staying updated with emerging technologies and scientific advancements",
    },
    {
      icon: Target,
      title: "Adaptability",
      description: "Quick to adapt to new environments and embrace innovative approaches",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A dedicated biotechnology postgraduate with a passion for research and innovation. My journey in life
            sciences has been driven by curiosity and a commitment to contributing meaningful solutions to scientific
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a biotechnology enthusiast, I bring a unique combination of theoretical knowledge and practical
              laboratory experience. My academic journey has equipped me with a strong foundation in molecular biology,
              bioinformatics, and research methodologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am particularly passionate about exploring the intersection of traditional biotechnology with emerging
              technologies, always seeking innovative approaches to complex biological problems. My adaptability and
              eagerness to learn make me well-suited for dynamic research environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond technical skills, I value collaboration, precision, and the pursuit of excellence in all scientific
              endeavors. I am excited to contribute to groundbreaking research that can make a positive impact on
              society.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

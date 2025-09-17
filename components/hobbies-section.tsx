import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Palette, Camera, Microscope } from "lucide-react"

export function HobbiesSection() {
  const hobbies = [
    {
      icon: BookOpen,
      title: "Reading Research Articles",
      description: "Staying updated with the latest scientific publications and research developments",
    },
    {
      icon: Palette,
      title: "Painting & Drawing",
      description: "Expressing creativity through visual arts and artistic exploration",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring the world through a creative lens",
    },
    {
      icon: Microscope,
      title: "Scientific Exploration",
      description: "Continuous learning and exploration of new scientific concepts",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Interests & Hobbies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Beyond the laboratory, I enjoy a diverse range of activities that fuel creativity, continuous learning, and
            personal growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <hobby.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{hobby.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

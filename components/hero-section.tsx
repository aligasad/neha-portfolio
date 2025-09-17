import { Button } from "@/components/ui/button"
import { Download, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-secondary/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              <span className="text-foreground">Neha</span> <span className="text-primary">Rawat</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
              Biotechnology Postgraduate | Research Enthusiast | Lifelong Learner
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
              Passionate about advancing biotechnology through innovative research, testing methodologies, and emerging
              technologies. Dedicated to making meaningful contributions to the scientific community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 flex items-center justify-center">
                <img
                  src="/professional-portrait-of-a-biotechnology-researche.jpg"
                  alt="Neha Rawat - Professional Portrait"
                  className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { AcademicTimeline } from "@/components/academic-timeline"
import { ProjectsSection } from "@/components/projects-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <AcademicTimeline />
        <ProjectsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
    </div>
  )
}

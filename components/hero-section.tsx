import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import nehaImg from "../public/neha1.jpg";
import Image from "next/image";

export function HeroSection() {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = myCV;
  //   link.download = "Asad_Alam_CV.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-secondary/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center group">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              <span className="text-foreground">Neha</span>{" "}
              <span className="text-primary">Rawat</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
              Biotechnology Postgraduate | Research Enthusiast | Lifelong
              Learner
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
              Passionate about advancing biotechnology through innovative
              research, testing methodologies, and emerging technologies.
              Dedicated to making meaningful contributions to the scientific
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="nehaRes.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 cursor-pointer">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
                <a href="https://www.linkedin.com/in/neha-rawat-170877284">
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
              >
                <Mail className="h-5 w-5" />
                <a href="tel:917985120354">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-100 rounded-full bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 flex items-center justify-center">
                <Image
                  src="/neha1.jpg"
                  alt="Neha Rawat"
                  width={250}
                  height={250}
                  className="w-65 h-85 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

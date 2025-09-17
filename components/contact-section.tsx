import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rneha4063@gmail.com",
      href: "mailto:rneha4063@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Neha Rawat LinkedIn",
      href: "https://www.linkedin.com/in/neha-rawat-170877284",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm always interested in discussing research opportunities,
            collaborations, or connecting with fellow biotechnology enthusiasts.
            Let's start a conversation!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {contact.value}
                  </p>
                  {contact.href !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith("http") ? "_blank" : undefined
                        }
                      >
                        Connect
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="border-border/50 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                  Whether you're looking for a dedicated researcher, have an
                  exciting project in mind, or simply want to discuss the latest
                  developments in biotechnology, I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="mailto:rneha4063@gmail.com">
                      <Mail className="h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 bg-transparent"
                  >
                    <Linkedin className="h-5 w-5" />
                    <a href="https://www.linkedin.com/in/neha-rawat-170877284">
                      LinkedIn Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

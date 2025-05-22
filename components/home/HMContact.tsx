// components/home/HMContact.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";

const HMContact = () => {
  return (
    <section className="py-16 ">
      <div className="container max-w-5xl mx-auto">
        <SectionHeading
          title="Let's Connect"
          subtitle="Interested in working together? Reach out through any of these channels"
          gradient={false}
        />

        <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="bg-secondary/30 border-accent/30 hover:border-accent hover:bg-secondary/50"
              asChild
            >
              <a href="mailto:christiantannahill2@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>

            <Button
              variant="outline"
              className="bg-secondary/30 border-gold/30 hover:border-gold hover:bg-secondary/50"
              asChild
            >
              <a
                href="https://calendar.app.google/JepYNPUuk6d9eLoDA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
              </a>
            </Button>

            <Button
              variant="outline"
              className="bg-secondary/30 border-purple/30 hover:border-purple hover:bg-secondary/50"
              asChild
            >
              <a
                href="https://github.com/cstannahill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              className="bg-secondary/30 border-teal/30 hover:border-teal hover:bg-secondary/50"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/christian-tannahill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          <p className="text-center text-foreground mt-6">
            Based in Illinois, available for remote work and select on-site
            opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default HMContact;

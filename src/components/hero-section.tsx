// components/hero-section.tsx
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-muted-foreground mb-2">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              [Your Name]
              <span className="text-primary">
                Creative Developer & Designer
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about building beautiful, functional, and user-centered
              digital experiences that make a difference.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Dribbble className="h-6 w-6" />
              </a>
            </div>

            <Button size="lg" asChild>
              <a href="#contact"></a>
            </Button>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={280}
                height={320}
                className="rounded-xl border-2 border-border/15 shadow-primary/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

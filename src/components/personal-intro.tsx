import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PersonalIntro() {
  return (
    <section id="personal-intro" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-heading mb-6 text-center lg:text-left">
              Who I Am
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Im a passionate developer and designer with over 10 years of
              experience creating digital solutions that solve real problems. My
              expertise spans across web development, UI/UX design, and creative
              problem-solving.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I believe in the power of clean code, intuitive design, and
              meaningful user experiences. When Im not coding, youll find me
              exploring new technologies, contributing to open-source projects,
              or mentoring aspiring developers.
            </p>
            <Button asChild>
              <a href="#portfolio-showcase">View My Work</a>
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/placeholder.svg"
              alt="About Me"
              width={350}
              height={400}
              className="rounded-2xl border-2 border-border/15 shadow-primary/20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

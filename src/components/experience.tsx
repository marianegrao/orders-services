// components/experience.tsx
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    date: "2022 - Present",
    title: "Senior Developer @ Innovatech",
    description:
      "Leading front-end development for key client projects using modern frameworks and best practices.",
  },
  {
    date: "2019 - 2022",
    title: "UX/UI Designer @ PixelPerfect Co.",
    description:
      "Designed user-centric interfaces for web and mobile applications, focusing on usability and aesthetics.",
  },
];

const education = [
  {
    date: "2015 - 2019",
    title: "B.S. in Digital Media @ State University",
    description:
      "Focused on interactive design, web technologies, and digital communication strategies.",
  },
  {
    date: "Ongoing",
    title: "Continuous Learning",
    description:
      "Staying current with AI, advanced CSS, modern frameworks, and emerging web technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold font-heading text-center lg:text-left mb-8">
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="glass-effect border-l-4 border-primary"
                >
                  <CardContent className="p-6">
                    <span className="text-sm text-muted-foreground">
                      {exp.date}
                    </span>
                    <h4 className="text-lg font-semibold mt-1 mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold font-heading text-center lg:text-left mb-8">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="glass-effect border-l-4 border-primary"
                >
                  <CardContent className="p-6">
                    <span className="text-sm text-muted-foreground">
                      {edu.date}
                    </span>
                    <h4 className="text-lg font-semibold mt-1 mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

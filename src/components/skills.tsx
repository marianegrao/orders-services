// components/skills.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiFigma,
  SiAdobexd,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Figma", icon: SiFigma },
  { name: "Adobe XD", icon: SiAdobexd },
  { name: "TypeScript", icon: SiTypescript },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12">
          Core Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="glass-effect glass-effect-hover">
              <CardContent className="p-6 text-center">
                <skill.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

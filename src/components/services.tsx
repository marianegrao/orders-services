// components/services.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites with a focus on performance and scalability using cutting-edge technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces that solve problems and delight users through thoughtful design.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "Innovative approaches to complex design and development challenges with a focus on user needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="glass-effect glass-effect-hover text-center"
            >
              <CardContent className="p-6">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

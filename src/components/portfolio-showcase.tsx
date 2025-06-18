import { Button } from "@/components/ui/button";
import Image from "next/image";

const portfolioItems = [
  { title: "E-Commerce Platform", image: "/placeholder.svg" },
  { title: "Mobile App UI", image: "/placeholder.svg" },
  { title: "Brand Identity", image: "/placeholder.svg" },
  { title: "Analytics Dashboard", image: "/placeholder.svg" },
];

export default function PortfolioShowcase() {
  return (
    <section id="portfolio-showcase" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-6">
          Featured Portfolio
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Explore my top projects and unique services in this curated gallery.
          Each piece represents a journey of creativity and technical
          excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square rounded-xl overflow-hidden glass-effect glass-effect-hover cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h4 className="text-white text-lg font-semibold">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

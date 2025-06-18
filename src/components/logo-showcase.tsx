// components/logo-showcase.tsx
import Image from "next/image";

const logos = [
  { name: "BRAND", src: "/placeholder.svg" },
  { name: "COMPANY", src: "/placeholder.svg" },
  { name: "STARTUP", src: "/placeholder.svg" },
  { name: "AGENCY", src: "/placeholder.svg" },
  { name: "CORP", src: "/placeholder.svg" },
];

export default function LogoShowcase() {
  return (
    <section id="logo-showcase" className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-8">
          Trusted by Leading Brands
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

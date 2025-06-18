// components/footer.tsx
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border/15">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} [Your Name]. Crafted with{" "}
          <Heart className="inline-block h-4 w-4 text-primary" /> and modern
          design principles.
        </p>
      </div>
    </footer>
  );
}

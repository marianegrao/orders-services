// components/testimonials.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Exceptional work! The website exceeded our expectations and significantly improved our user engagement. Highly professional and creative approach.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    rating: 5,
    text: "Outstanding design skills and technical expertise. Delivered a beautiful, functional solution that perfectly captured our brand vision.",
    author: "Michael Chen",
    role: "Creative Director, Design Studio",
  },
  {
    rating: 5,
    text: "Professional, reliable, and incredibly talented. The project was completed on time and the results speak for themselves.",
    author: "Emily Rodriguez",
    role: "Marketing Manager, Growth Co.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-heading text-center mb-12">
          Client Success Stories
        </h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-effect glass-effect-hover min-w-[300px] md:min-w-[400px] snap-center"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

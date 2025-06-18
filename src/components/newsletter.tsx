"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="glass-effect glass-effect-hover max-w-2xl mx-auto">
          <CardContent className="p-10 text-center">
            <h2 className="text-4xl font-bold font-heading mb-4">
              Stay Connected
            </h2>
            <p className="text-muted-foreground mb-8">
              Get valuable resources, design tips, and project updates delivered
              to your inbox. Join a community of creative professionals.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

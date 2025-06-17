"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Sun,
  Moon,
  Laptop,
  Palette,
  Lightbulb,
  Heart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import Image from "next/image";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing! We'll be in touch soon.");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#080313] text-[#f0f0f8]"
          : "bg-[#f0f2f5] text-[#1a1a1a]"
      }`}
    >
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-radial from-[rgba(138,63,252,0.12)] via-transparent to-transparent"
              : "bg-gradient-radial from-[rgba(94,53,177,0.08)] via-transparent to-transparent"
          }`}
        />
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
          isDarkMode
            ? "bg-[rgba(15,5,35,0.35)] border-[rgba(255,255,255,0.15)]"
            : "bg-[rgba(255,255,255,0.65)] border-[rgba(0,0,0,0.12)]"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-inter">
            Dev
            <span className={isDarkMode ? "text-[#8a3ffc]" : "text-[#5e35b1]"}>
              Name
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              { id: "hero", label: "Home" },
              { id: "personal-intro", label: "About" },
              { id: "services", label: "Services" },
              { id: "portfolio-showcase", label: "Portfolio" },
              { id: "testimonials", label: "Reviews" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? isDarkMode
                      ? "text-[#f0f0f8]"
                      : "text-[#1a1a1a]"
                    : isDarkMode
                    ? "text-[#a0a0b0] hover:text-[#f0f0f8]"
                    : "text-[#555555] hover:text-[#1a1a1a]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-4"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p
                className={`text-lg mb-2 font-medium ${
                  isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                }`}
              >
                Hello, Im
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-inter leading-tight">
                [Your Name] <br />
                <span
                  className={isDarkMode ? "text-[#8a3ffc]" : "text-[#5e35b1]"}
                >
                  Creative Developer & Designer
                </span>
              </h1>
              <p
                className={`text-lg mb-8 max-w-md mx-auto lg:mx-0 ${
                  isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                }`}
              >
                Passionate about building beautiful, functional, and
                user-centered digital experiences that make a difference.
              </p>

              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Dribbble, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-2xl transition-colors ${
                      isDarkMode
                        ? "text-[#a0a0b0] hover:text-[#8a3ffc]"
                        : "text-[#555555] hover:text-[#5e35b1]"
                    }`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className={`${
                  isDarkMode
                    ? "bg-[#8a3ffc] hover:bg-[#a46dfc]"
                    : "bg-[#5e35b1] hover:bg-[#7e57c2]"
                } text-white px-8 py-3 rounded-lg font-medium transition-all hover:transform hover:-translate-y-1`}
              >
                Lets Talk
              </Button>
            </div>

            <div className="flex-1 max-w-md">
              <div
                className={`w-full min-h-full rounded-xl border-2 shadow-2xl ${
                  isDarkMode
                    ? "border-[rgba(255,255,255,0.15)] shadow-[rgba(138,63,252,0.2)]"
                    : "border-[rgba(0,0,0,0.12)] shadow-[rgba(94,53,177,0.15)]"
                }`}
              >
                profile
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div
            className={`rounded-xl p-8 backdrop-blur-md border ${
              isDarkMode
                ? "bg-[rgba(15,5,35,0.35)] border-[rgba(255,255,255,0.15)]"
                : "bg-[rgba(255,255,255,0.65)] border-[rgba(0,0,0,0.12)]"
            }`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "150+", label: "Projects Done" },
                { number: "50+", label: "Happy Clients" },
                { number: "99%", label: "Positive Feedback" },
              ].map((stat, index) => (
                <div key={index}>
                  <h4
                    className={`text-3xl font-bold mb-1 ${
                      isDarkMode ? "text-[#8a3ffc]" : "text-[#5e35b1]"
                    }`}
                  >
                    {stat.number}
                  </h4>
                  <p
                    className={`text-xs uppercase tracking-wider ${
                      isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Intro */}
      <section id="personal-intro" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8 font-inter text-center lg:text-left">
                Who I Am
              </h2>
              <p
                className={`text-lg mb-6 leading-relaxed ${
                  isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                }`}
              >
                Im a passionate developer and designer with over 10 years of
                experience creating digital solutions that solve real problems.
                My expertise spans across web development, UI/UX design, and
                creative problem-solving.
              </p>
              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                }`}
              >
                I believe in the power of clean code, intuitive design, and
                meaningful user experiences. When Im not coding, youll find me
                exploring new technologies, contributing to open-source
                projects, or mentoring aspiring developers.
              </p>
              <Button
                onClick={() => scrollToSection("portfolio-showcase")}
                className={`${
                  isDarkMode
                    ? "bg-[#8a3ffc] hover:bg-[#a46dfc]"
                    : "bg-[#5e35b1] hover:bg-[#7e57c2]"
                } text-white px-8 py-3 rounded-lg font-medium`}
              >
                View My Work
              </Button>
            </div>
            <div className="flex-1 max-w-md">
              <div
                className={`w-full min-h-full rounded-xl border-2 shadow-2xl ${
                  isDarkMode
                    ? "border-[rgba(255,255,255,0.15)] shadow-[rgba(138,63,252,0.2)]"
                    : "border-[rgba(0,0,0,0.12)] shadow-[rgba(94,53,177,0.15)]"
                }`}
              >
                aboutme
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-inter">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
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
            ].map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl backdrop-blur-md border text-center transition-all hover:transform hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-[rgba(15,5,35,0.35)] border-[rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(138,63,252,0.2)]"
                    : "bg-[rgba(255,255,255,0.65)] border-[rgba(0,0,0,0.12)] hover:shadow-[0_6px_25px_rgba(94,53,177,0.15)]"
                }`}
              >
                <service.icon
                  className={`h-12 w-12 mx-auto mb-6 ${
                    isDarkMode ? "text-[#8a3ffc]" : "text-[#5e35b1]"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className={isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio-showcase" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center font-inter">
            Featured Portfolio
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 ${
              isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
            }`}
          >
            Explore my top projects and unique services in this curated gallery.
            Each piece represents a journey of creativity and technical
            excellence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "E-Commerce Platform",
              "Mobile App UI",
              "Brand Identity",
              "Analytics Dashboard",
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-[rgba(15,5,35,0.35)] border border-[rgba(255,255,255,0.15)]"
                    : "bg-[rgba(255,255,255,0.65)] border border-[rgba(0,0,0,0.12)]"
                }`}
              >
                <div
                  className={`w-full min-h-full rounded-xl border-2 shadow-2xl ${
                    isDarkMode
                      ? "border-[rgba(255,255,255,0.15)] shadow-[rgba(138,63,252,0.2)]"
                      : "border-[rgba(0,0,0,0.12)] shadow-[rgba(94,53,177,0.15)]"
                  }`}
                >
                  {project}
                </div>
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h4 className="text-white text-lg font-semibold text-center px-4">
                    {project}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className={`${
                isDarkMode
                  ? "bg-[#8a3ffc] hover:bg-[#a46dfc]"
                  : "bg-[#5e35b1] hover:bg-[#7e57c2]"
              } text-white px-8 py-3 rounded-lg font-medium`}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-inter">
            Client Success Stories
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-8 overflow-x-auto pb-4">
              {[
                {
                  text: "Exceptional work! The website exceeded our expectations and significantly improved our user engagement. Highly professional and creative approach.",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                },
                {
                  text: "Outstanding design skills and technical expertise. Delivered a beautiful, functional solution that perfectly captured our brand vision.",
                  author: "Michael Chen",
                  role: "Creative Director, Design Studio",
                },
                {
                  text: "Professional, reliable, and incredibly talented. The project was completed on time and the results speak for themselves.",
                  author: "Emily Rodriguez",
                  role: "Marketing Manager, Growth Co.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`min-w-[350px] p-8 rounded-xl backdrop-blur-md border text-center ${
                    isDarkMode
                      ? "bg-[rgba(15,5,35,0.35)] border-[rgba(255,255,255,0.15)]"
                      : "bg-[rgba(255,255,255,0.65)] border-[rgba(0,0,0,0.12)]"
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p
                    className={`text-lg italic mb-6 leading-relaxed ${
                      isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                    }`}
                  >
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="font-semibold mb-1">{testimonial.author}</div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-2xl mx-auto p-12 rounded-xl backdrop-blur-md border text-center ${
              isDarkMode
                ? "bg-[rgba(15,5,35,0.35)] border-[rgba(255,255,255,0.15)]"
                : "bg-[rgba(255,255,255,0.65)] border-[rgba(0,0,0,0.12)]"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 font-inter">
              Stay Connected
            </h2>
            <p
              className={`mb-8 ${
                isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
              }`}
            >
              Get valuable resources, design tips, and project updates delivered
              to your inbox. Join a community of creative professionals.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-4 max-w-md mx-auto"
            >
              {/* <Input
                type="email"
                placeholder="Enter your email"
                required
                className={`flex-1 ${
                  isDarkMode
                    ? "bg-black/15 border-[rgba(255,255,255,0.15)] text-[#f0f0f8] placeholder:text-[#a0a0b0]"
                    : "bg-white/40 border-[rgba(0,0,0,0.08)] text-[#1a1a1a] placeholder:text-[#555555]"
                }`}
              /> */}
              <Button
                type="submit"
                className={`${
                  isDarkMode
                    ? "bg-[#8a3ffc] hover:bg-[#a46dfc]"
                    : "bg-[#5e35b1] hover:bg-[#7e57c2]"
                } text-white px-6`}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center font-inter">
            Get In Touch
          </h2>
          <p
            className={`text-center max-w-2xl mx-auto mb-12 ${
              isDarkMode ? "text-[#a0a0b0]" : "text-[#555555]"
            }`}
          >
            Have a project in mind or just want to say hi? Feel free to reach
            out and lets create something amazing together.
          </p>

          <form
            onSubmit={handleContactSubmit}
            className={`max-w-2xl mx-auto p-8 rounded-xl backdrop-blur-md border ${
              isDarkMode
                ? "bg-[rgba(15,5,35,0.35)] border-[rgba(255,255,255,0.15)]"
                : "bg-[rgba(255,255,255,0.65)] border-[rgba(0,0,0,0.12)]"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* <Input
                type="text"
                placeholder="Your Name"
                required
                className={
                  isDarkMode
                    ? "bg-black/15 border-[rgba(255,255,255,0.15)] text-[#f0f0f8] placeholder:text-[#a0a0b0]"
                    : "bg-white/40 border-[rgba(0,0,0,0.08)] text-[#1a1a1a] placeholder:text-[#555555]"
                }
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className={
                  isDarkMode
                    ? "bg-black/15 border-[rgba(255,255,255,0.15)] text-[#f0f0f8] placeholder:text-[#a0a0b0]"
                    : "bg-white/40 border-[rgba(0,0,0,0.08)] text-[#1a1a1a] placeholder:text-[#555555]"
                }
              /> */}
            </div>
            {/* <Input
              type="text"
              placeholder="Subject"
              required
              className={`mb-6 ${
                isDarkMode
                  ? "bg-black/15 border-[rgba(255,255,255,0.15)] text-[#f0f0f8] placeholder:text-[#a0a0b0]"
                  : "bg-white/40 border-[rgba(0,0,0,0.08)] text-[#1a1a1a] placeholder:text-[#555555]"
              }`}
            />
            <Textarea
              placeholder="Tell me about your project..."
              required
              className={`mb-6 min-h-[120px] resize-y ${
                isDarkMode
                  ? "bg-black/15 border-[rgba(255,255,255,0.15)] text-[#f0f0f8] placeholder:text-[#a0a0b0]"
                  : "bg-white/40 border-[rgba(0,0,0,0.08)] text-[#1a1a1a] placeholder:text-[#555555]"
              }`}
            /> */}
            <div className="text-center">
              <Button
                type="submit"
                className={`${
                  isDarkMode
                    ? "bg-[#8a3ffc] hover:bg-[#a46dfc]"
                    : "bg-[#5e35b1] hover:bg-[#7e57c2]"
                } text-white px-8 py-3 rounded-lg font-medium`}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`text-center py-8 border-t ${
          isDarkMode
            ? "border-[rgba(255,255,255,0.15)] text-[#a0a0b0]"
            : "border-[rgba(0,0,0,0.12)] text-[#555555]"
        }`}
      >
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} [Your Name]. Crafted with{" "}
            <Heart
              className={`inline h-4 w-4 ${
                isDarkMode ? "text-[#8a3ffc]" : "text-[#5e35b1]"
              }`}
            />{" "}
            and modern design principles.
          </p>
        </div>
      </footer>
    </div>
  );
}

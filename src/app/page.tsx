import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LogoShowcase from "@/components/logo-showcase";
import StatsBar from "@/components/stats-bar";
import PersonalIntro from "@/components/personal-intro";
import Services from "@/components/services";
import PortfolioShowcase from "@/components/portfolio-showcase";
import Testimonials from "@/components/testimonials";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoShowcase />
        <StatsBar />
        <PersonalIntro />
        <Services />
        <PortfolioShowcase />
        <Testimonials />
        <Experience />
        <Skills />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

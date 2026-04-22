import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import AppSection from "@/components/sections/AppSection";
import CoexistenceSection from "@/components/sections/CoexistenceSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AppSection />
        <CoexistenceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

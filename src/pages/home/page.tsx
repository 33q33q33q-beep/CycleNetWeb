import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "./sections/HeroSection";
import ConceptSection from "./sections/ConceptSection";
import MediaSection from "./sections/MediaSection";
import MascotSection from "./sections/MascotSection";
import BtoBSection from "./sections/BtoBSection";
import PlatformSection from "./sections/PlatformSection";
import JbcfRoadSeriesSection from "./sections/JbcfRoadSeriesSection";
import NumbersSection from "./sections/NumbersSection";
import TeamSection from "./sections/TeamSection";
import FAQSection from "./sections/FAQSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <main>
        <HeroSection />
        <ConceptSection />
        <MediaSection />
        <MascotSection />
        <BtoBSection />
        <PlatformSection />
        <TeamSection />
        <NumbersSection />
        <JbcfRoadSeriesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
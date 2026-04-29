import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MissionVisionSection from "@/components/mission-vision-section";
import ServicesSection from "@/components/services-section";
import CaseStudiesSection from "@/components/case-studies-section";
import InsightsSection from "@/components/insights-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionVisionSection />
        <ServicesSection />
        <CaseStudiesSection />
        <InsightsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

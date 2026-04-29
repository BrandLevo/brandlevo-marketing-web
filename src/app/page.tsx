import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import StatsSection from "@/components/mission-vision-section";
import CaseStudiesSection from "@/components/case-studies-section";
import TestimonialsSection from "@/components/testimonials-section";
import InsightsSection from "@/components/insights-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <InsightsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

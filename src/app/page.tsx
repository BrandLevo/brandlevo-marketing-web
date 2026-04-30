import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ValuePropositionSection from "@/components/mission-vision-section";
import ProcessSection from "@/components/process-section";
import ServicesSection from "@/components/services-section";
import TransformationSection from "@/components/transformation-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import AboutSection from "@/components/about-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — one-liner + problem + CTA */}
      <HeroSection />
      {/* 2. Stakes — agitate the cost of inaction */}
      <ProblemSection />
      {/* 3. Guide — empathy + authority */}
      <ValuePropositionSection />
      {/* 4. Plan — 3 clear steps */}
      <ProcessSection />
      {/* 5. Services — what we deliver */}
      <ServicesSection />
      {/* 6. Transformation — before/after success vision */}
      <TransformationSection />
      {/* 7. Social proof */}
      <TestimonialsSection />
      {/* 8. Pricing — reduce friction */}
      <PricingSection />
      {/* 9. About — brief guide credentials */}
      <AboutSection />
      {/* 10. FAQ — handle objections */}
      <FaqSection />
      {/* 11. Final CTA — same direct CTA repeated */}
      <CtaSection />
    </main>
  );
}

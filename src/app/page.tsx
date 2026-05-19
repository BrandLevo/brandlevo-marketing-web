import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import OpportunitySection from "@/components/opportunity-section";
import ValuePropositionSection from "@/components/mission-vision-section";
import ProcessSection from "@/components/process-section";
import ServicesSection from "@/components/services-section";
import TransformationSection from "@/components/transformation-section";
import TestimonialsSection from "@/components/testimonials-section";
import AboutSection from "@/components/about-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import { faqSchema, schemaScript } from "@/lib/schema";
import { homepageFaqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const schema = faqSchema(homepageFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
      />
    <main>
      {/* 1. Hero — headline + CTA */}
      <HeroSection />
      {/* 2. The Problem — 4 pain points */}
      <ProblemSection />
      {/* 3. The Opportunity — AI search market context */}
      <OpportunitySection />
      {/* 4. Why BrandLevo — positioning + differentiators */}
      <ValuePropositionSection />
      {/* 5. How It Works — 3-step process */}
      <ProcessSection />
      {/* 6. Services — 8 services */}
      <ServicesSection />
      {/* 7. Transformation — before/after */}
      <TransformationSection />
      {/* 8. Social proof — 4 testimonials */}
      <TestimonialsSection />
      {/* 9. About — brand story + values */}
      <AboutSection />
      {/* 10. FAQ — objection handling */}
      <FaqSection />
      {/* 11. Final CTA */}
      <CtaSection />
    </main>
    </>
  );
}

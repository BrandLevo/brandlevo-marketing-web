import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import OpportunitySection from "@/components/opportunity-section";
import ProcessSection from "@/components/process-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
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
      {/* 4. How It Works — 3-step process */}
      <ProcessSection />
      {/* 5. Services */}
      <ServicesSection />
      {/* 6. Social proof — testimonials */}
      <TestimonialsSection />
      {/* 10. FAQ — objection handling */}
      <FaqSection />
      {/* 11. Final CTA */}
      <CtaSection />
    </main>
    </>
  );
}

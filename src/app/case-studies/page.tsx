import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, TrendingUp, Star } from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Case Studies | BrandLevo",
  description:
    "Real results for real local businesses. Client stories and transformations coming soon.",
};

const industries = [
  { name: "Trades & Home Services", examples: "Plumbers, electricians, HVAC, cleaners" },
  { name: "Health & Wellness", examples: "Dentists, physios, salons, gyms, clinics" },
  { name: "Professional Services", examples: "Accountants, solicitors, consultants" },
  { name: "Food & Hospitality", examples: "Cafés, restaurants, bakeries, caterers" },
  { name: "Retail & E-commerce", examples: "Boutiques, gift shops, online stores" },
  { name: "Education & Coaching", examples: "Tutors, coaches, training providers" },
];

const results = [
  {
    metric: "+420%",
    label: "organic traffic",
    context: "Family plumbing business, 4 months",
    bg: "bg-primary",
    text: "text-white",
    sub: "text-white/70",
  },
  {
    metric: "14 days",
    label: "average launch",
    context: "Across all client builds",
    bg: "bg-snow border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
  {
    metric: "3.4×",
    label: "more leads",
    context: "Average at 90 days post-launch",
    bg: "bg-snow border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
  {
    metric: "6 weeks",
    label: "to fully booked",
    context: "Interior design studio from zero web presence",
    bg: "bg-snow border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
];

const testimonials = [
  {
    quote:
      "We went from 2 calls a week to booked out a full month ahead. The team sorted everything — we didn't touch a thing.",
    name: "Marcus Reilly",
    role: "Reilly Plumbing & Heating",
    location: "Manchester, UK",
    result: "Booked out a full month ahead",
    initials: "MR",
    bg: "bg-primary",
  },
  {
    quote:
      "23 new clients in 60 days after launch. I'd been putting off building a website for 7 years. Should have done it sooner.",
    name: "Priya Shah",
    role: "Sunrise Tax Consultancy",
    location: "Austin, TX",
    result: "23 new clients in 60 days",
    initials: "PS",
    bg: "bg-purple-dark",
  },
  {
    quote:
      "Enquiries up 180% in 90 days. And I never felt stupid asking questions — they explained everything like I was a person, not a client.",
    name: "Linda Okafor",
    role: "Bella's Hair Studio",
    location: "Lagos, NG",
    result: "+180% enquiries in 90 days",
    initials: "LO",
    bg: "bg-graphite",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="CLIENT RESULTS"
        title="Real Brands."
        titleAccent="Unstoppable Growth."
        body="80+ businesses transformed. Full case studies with analytics screenshots, client interviews, and honest timelines — no padding, no spin."
        badge="Full case studies coming Q3 2025"
        cta={{ label: "Get Similar Results", href: "/contact" }}
        stats={[
          { value: "80+", label: "Brands launched" },
          { value: "+420%", label: "Best traffic growth" },
          { value: "3.4×", label: "Avg lead increase" },
          { value: "4.9★", label: "Client rating" },
        ]}
        variant="dark"
      />

      {/* Results strip */}
      <section className="py-xxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-xl">NUMBERS SO FAR</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {results.map((r, i) => (
              <div key={r.metric} className={`reveal stagger-${i + 1} rounded-2xl p-xl ${r.bg}`}>
                <p className={`text-h2 font-bold leading-none mb-xs ${r.text}`}>{r.metric}</p>
                <p className={`text-body-sm font-semibold mb-xs ${r.text}`}>{r.label}</p>
                <p className={`text-eyebrow ${r.sub}`}>{r.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">WHO WE&apos;VE HELPED</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">
            We work across every local business category.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-md">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white border border-fog rounded-2xl p-lg flex gap-md items-start">
                <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <div>
                  <h3 className="text-body font-semibold text-ink mb-xs">{ind.name}</h3>
                  <p className="text-body-sm text-slate">{ind.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">WHAT CLIENTS SAY</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">
            In their words, not ours.
          </h2>
          <div className="grid md:grid-cols-3 gap-lg">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-snow border border-fog rounded-2xl p-md sm:p-xl flex flex-col">
                <div className="flex mb-md">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-body text-ink leading-relaxed mb-xl flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-fog pt-lg flex items-center gap-md">
                  <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-body-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-eyebrow text-slate">{t.role} · {t.location}</p>
                  </div>
                </div>
                <div className="mt-md bg-primary/5 border border-primary/20 rounded-xl px-md py-sm">
                  <p className="text-eyebrow text-primary flex items-center gap-xs">
                    <TrendingUp className="w-3 h-3" />
                    {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xxl px-lg bg-primary">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-xl">
          <div>
            <h2 className="text-h3 text-white mb-sm">Want to be our next case study?</h2>
            <p className="text-body text-white/70">
              Book a free call. We&apos;ll audit your online presence, show you the gap, and map a plan to close it.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all"
          >
            Book a Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

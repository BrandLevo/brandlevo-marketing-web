import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Case Studies | BrandLevo",
  description:
    "Real results for local businesses in Kochi and Kerala — clinics, wedding vendors, salons. +65% bookings, 3× walk-ins. Problem, action, result for every engagement.",
  alternates: {
    canonical: "/case-studies",
  },
};

const caseStudies = [
  {
    industry: "HEALTHCARE",
    type: "Dental Clinic — Kochi",
    metric: "+65%",
    metricLabel: "appointment bookings in 90 days",
    accentBg: "bg-primary",
    problem:
      "A well-reviewed dental clinic was invisible online. Their GBP listing was incomplete, their website hadn't been touched in four years, and competitors with weaker reputations were ranking above them for every local search.",
    action:
      "We rebuilt the website from scratch — mobile-first, fast, and AEO-ready. We completed and optimised their GBP profile, built local citations across health directories, and added FAQ and LocalBusiness schema so AI tools could cite them by service and location.",
    result:
      "Within 90 days the clinic appeared in the top 3 local map results for their primary search terms. Monthly appointment enquiries increased by approximately 65%. They now appear in Google AI Overviews for Kochi dental queries.",
  },
  {
    industry: "WEDDING & EVENTS",
    type: "Photography Studio — Kerala",
    metric: "0 → 12",
    metricLabel: "online enquiries per month",
    accentBg: "bg-purple-dark",
    problem:
      "A talented wedding photographer with a strong portfolio and word-of-mouth reputation had no website and no digital presence. Every booking came through personal referrals, capping growth and leaving them invisible to couples actively searching online.",
    action:
      "We built a portfolio-focused website with a clear enquiry flow, wrote SEO copy targeting Kerala wedding photography keywords, and set up a review strategy to build their Google presence. Brand identity was refreshed to reflect the premium positioning their work deserved.",
    result:
      "Within 60 days of launch the studio was receiving 10–12 online enquiries per month from Google search alone. Within 4 months they were booked out 6 months ahead — a first in the studio's history.",
  },
  {
    industry: "BEAUTY & WELLNESS",
    type: "Hair Salon — Ernakulam",
    metric: "3×",
    metricLabel: "increase in new client walk-ins",
    accentBg: "bg-primary",
    problem:
      "A busy salon with loyal regulars had a stagnant new-client pipeline. Their Google Maps listing had outdated hours, no photos, and a handful of old reviews. AI tools were recommending competitors. They had no content strategy and no schema markup.",
    action:
      "We overhauled their GBP profile — updated categories, added 40+ photos, set up a review response system, and built a weekly GBP post schedule. We added speakable and LocalBusiness schema to their website, and published AEO-structured FAQ content targeting their top service queries.",
    result:
      "New client walk-ins from online sources roughly tripled over 3 months. The salon now appears in AI-generated answers for salon queries in Ernakulam. Review count increased from 18 to 80+ with an average of 4.8 stars.",
  },
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
    bg: "bg-white border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
  {
    metric: "3.4×",
    label: "more leads",
    context: "Average at 90 days post-launch",
    bg: "bg-white border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
  {
    metric: "6 weeks",
    label: "to fully booked",
    context: "Interior design studio from zero web presence",
    bg: "bg-white border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
];

const industries = [
  { name: "Trades & Home Services", examples: "Plumbers, electricians, HVAC, cleaners" },
  { name: "Health & Wellness", examples: "Dentists, physios, salons, gyms, clinics" },
  { name: "Professional Services", examples: "Accountants, solicitors, consultants" },
  { name: "Food & Hospitality", examples: "Cafés, restaurants, bakeries, caterers" },
  { name: "Retail & E-commerce", examples: "Boutiques, gift shops, online stores" },
  { name: "Education & Coaching", examples: "Tutors, coaches, training providers" },
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
        body="80+ businesses transformed across Kochi, Kerala, and beyond. Here's what the work actually looks like."
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
      <section className="py-xxl px-lg bg-snow">
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

      {/* Micro case studies */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="reveal mb-xxl">
            <span className="text-eyebrow text-primary block mb-md">HOW IT PLAYS OUT</span>
            <h2 className="text-h2 text-ink max-w-xl">
              Three businesses.{" "}
              <span className="text-primary italic">Three transformations.</span>
            </h2>
          </div>

          <div className="space-y-lg">
            {caseStudies.map((cs, i) => (
              <div
                key={cs.type}
                className={`reveal stagger-${i + 1} bg-snow border border-fog rounded-3xl overflow-hidden`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md px-xl pt-xl pb-lg border-b border-fog">
                  <div className="flex items-center gap-md">
                    <span className={`${cs.accentBg} text-white text-eyebrow px-md py-xs rounded-full font-semibold`}>
                      {cs.industry}
                    </span>
                    <span className="text-body-sm font-semibold text-ink">{cs.type}</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-h3 font-bold text-primary leading-none">{cs.metric}</span>
                    <span className="text-body-sm text-slate">{cs.metricLabel}</span>
                  </div>
                </div>

                {/* Body — problem / action / result */}
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-fog">
                  <div className="p-xl">
                    <p className="text-eyebrow text-slate mb-md">THE PROBLEM</p>
                    <p className="text-body-sm text-slate leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="p-xl">
                    <p className="text-eyebrow text-primary mb-md">WHAT WE DID</p>
                    <p className="text-body-sm text-slate leading-relaxed">{cs.action}</p>
                  </div>
                  <div className="p-xl">
                    <p className="text-eyebrow text-slate mb-md">THE RESULT</p>
                    <p className="text-body-sm text-slate leading-relaxed">{cs.result}</p>
                  </div>
                </div>
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
              <div key={t.name} className="reveal bg-snow border border-fog rounded-2xl p-md sm:p-xl flex flex-col">
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
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto bg-ink rounded-3xl p-xl md:p-xxxl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-primary rounded-full opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-dark rounded-full opacity-30 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-xl">
            <div>
              <span className="text-eyebrow text-white/50 block mb-md">YOUR TURN</span>
              <h2 className="text-h2 text-white mb-md leading-tight">Want to be our next case study?</h2>
              <p className="text-body-lg text-white/70 max-w-lg leading-relaxed">
                Book a free call. We audit your online presence live, show you the gap, and map a plan to close it.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 animate-pulse-ring inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Book a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

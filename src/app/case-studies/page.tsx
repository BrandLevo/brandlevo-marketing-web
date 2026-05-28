import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Rocket, MapPin } from "lucide-react";
import PageHero from "@/components/page-hero";
import { speakableSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "BrandLevo is actively onboarding its first clients in Kochi and Kerala. See the industries we serve, what our process delivers, and how to be our first success story.",
  alternates: {
    canonical: "/case-studies",
  },
};

const whatWeDeliver = [
  {
    industry: "HEALTHCARE",
    type: "Clinics & Dental Practices — Kochi",
    accentBg: "bg-primary",
    deliverable: "AI-ready local visibility",
    problem:
      "Most clinics have decent reviews but rank poorly because their website is outdated, GBP is incomplete, and AI tools have no structured data to cite them from.",
    action:
      "We rebuild the website with LocalBusiness schema, optimise GBP with correct categories, hours and photos, build local citations across health directories, and add FAQ schema so ChatGPT and Perplexity can cite the clinic by service and location.",
    expected:
      "Top 3 local map results within 60–90 days. AI citation for primary service queries within 90 days. Monthly enquiries traceable to new organic sources.",
  },
  {
    industry: "WEDDING & EVENTS",
    type: "Photographers & Vendors — Kerala",
    accentBg: "bg-purple-dark",
    deliverable: "Portfolio-first conversion site",
    problem:
      "Wedding vendors rely on referrals but lose couples who search Google and find a competitor with a better-presented site and more reviews.",
    action:
      "We build a portfolio-first website targeting Kerala wedding photography keywords, set up a review generation strategy, and add schema markup for service + location so AI tools can surface the business in wedding planning queries.",
    expected:
      "10–15 inbound enquiries per month from Google search within 60 days. AI citation for location-specific wedding vendor queries within 90 days.",
  },
  {
    industry: "BEAUTY & WELLNESS",
    type: "Salons & Spas — Ernakulam & Kochi",
    accentBg: "bg-primary",
    deliverable: "GBP + AI citation domination",
    problem:
      "Salons often rank poorly despite strong word-of-mouth because their GBP has incomplete categories, no posts, and no FAQ content for AI tools to cite.",
    action:
      "We overhaul GBP with correct categories, 40+ photos, a review response system, and weekly post schedule. We add speakable and LocalBusiness schema, and publish AEO-structured FAQ content targeting top service queries.",
    expected:
      "2–3× new client enquiries from online within 90 days. Appearance in AI-generated answers for local salon queries. Significant review growth from a systematic ask-and-respond process.",
  },
];

const processGuarantees = [
  {
    metric: "14 days",
    label: "website live",
    context: "Guaranteed or 10% back",
    bg: "bg-primary",
    text: "text-white",
    sub: "text-white/70",
  },
  {
    metric: "60–90 days",
    label: "measurable results",
    context: "Rankings, enquiries, or AI citations",
    bg: "bg-white border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
  {
    metric: "0",
    label: "lock-in contracts",
    context: "Month-to-month, 30-day notice",
    bg: "bg-white border border-fog",
    text: "text-primary",
    sub: "text-slate",
  },
  {
    metric: "100%",
    label: "yours to keep",
    context: "You own every asset we build",
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

export default function CaseStudiesPage() {
  const speakable = speakableSchema([".hero-title", ".hero-body"]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaScript(speakable) }} />
    <main>
      <PageHero
        eyebrow="WHAT WE DELIVER"
        title="First Clients."
        titleAccent="Launching Now."
        body="We're actively onboarding our first clients in Kochi and Kerala. Here's exactly what we build, how we build it, and what results you can hold us to."
        cta={{ label: "Book Your Free Audit", href: "/contact" }}
        stats={[
          { value: "14 days", label: "Launch guarantee" },
          { value: "90 days", label: "Results timeline" },
          { value: "0", label: "Lock-in contracts" },
          { value: "Kochi", label: "Based in" },
        ]}
        variant="dark"
      />

      {/* Process guarantees strip */}
      <section className="py-xxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-xl">OUR COMMITMENTS</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {processGuarantees.map((r, i) => (
              <div key={r.metric} className={`reveal stagger-${i + 1} rounded-2xl p-xl ${r.bg}`}>
                <p className={`text-h2 font-bold leading-none mb-xs ${r.text}`}>{r.metric}</p>
                <p className={`text-body-sm font-semibold mb-xs ${r.text}`}>{r.label}</p>
                <p className={`text-eyebrow ${r.sub}`}>{r.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver by industry */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="reveal mb-xxl">
            <span className="text-eyebrow text-primary block mb-md">HOW IT PLAYS OUT</span>
            <h2 className="text-h2 text-ink max-w-xl">
              What our first clients{" "}
              <span className="text-primary italic">will achieve.</span>
            </h2>
            <p className="text-body text-slate mt-md max-w-2xl">
              No fabricated numbers. These are the outcomes we are committed to delivering — based on our methodology, not invented testimonials.
            </p>
          </div>

          <div className="space-y-lg">
            {whatWeDeliver.map((cs, i) => (
              <div
                key={cs.type}
                className={`reveal stagger-${i + 1} bg-snow border border-fog rounded-3xl overflow-hidden`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md px-xl pt-xl pb-lg border-b border-fog">
                  <div className="flex items-center gap-md">
                    <span className={`${cs.accentBg} text-white text-eyebrow px-md py-xs rounded-full font-semibold`}>
                      {cs.industry}
                    </span>
                    <span className="text-body-sm font-semibold text-ink">{cs.type}</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-body-sm font-semibold text-primary">{cs.deliverable}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-fog">
                  <div className="p-xl">
                    <p className="text-eyebrow text-slate mb-md">THE TYPICAL PROBLEM</p>
                    <p className="text-body-sm text-slate leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="p-xl">
                    <p className="text-eyebrow text-primary mb-md">WHAT WE DO</p>
                    <p className="text-body-sm text-slate leading-relaxed">{cs.action}</p>
                  </div>
                  <div className="p-xl">
                    <p className="text-eyebrow text-slate mb-md">EXPECTED OUTCOME</p>
                    <p className="text-body-sm text-slate leading-relaxed">{cs.expected}</p>
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
          <span className="text-eyebrow text-primary block mb-md">WHO WE WORK WITH</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">
            Every local business category in Kochi and Kerala.
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

      {/* Be first CTA */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto bg-ink rounded-3xl p-xl md:p-xxxl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-primary rounded-full opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-dark rounded-full opacity-30 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-xl">
            <div>
              <div className="flex items-center gap-sm mb-md">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-eyebrow text-white/50">BE FIRST</span>
              </div>
              <h2 className="text-h2 text-white mb-md leading-tight flex items-center gap-sm flex-wrap">
                Want to be our first Kochi success story?
                <MapPin className="w-6 h-6 text-primary" />
              </h2>
              <p className="text-body-lg text-white/70 max-w-lg leading-relaxed">
                We&apos;re actively taking on our first clients. Free 30-minute audit — we audit your online presence live, show you the gap, and map a plan to close it. No pitch. Just clarity.
              </p>
              <div className="flex items-center gap-sm mt-md">
                <Clock className="w-4 h-4 text-white/50" />
                <span className="text-body-sm text-white/50">30 minutes · Free · No obligation</span>
              </div>
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
    </>
  );
}

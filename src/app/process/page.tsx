import type { Metadata } from "next";
import Link from "next/link";
import { Search, Hammer, Rocket, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/page-hero";
import { collectionPageSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Process | BrandLevo",
  description:
    "From first call to live on Google in 30 days. BrandLevo's 4-phase process: Audit, Build, Launch, Grow — for local businesses in Kochi and Kerala.",
  alternates: {
    canonical: "/process",
  },
};

const phases = [
  {
    number: "01",
    icon: Search,
    phase: "Audit",
    week: "Week 1",
    headline: "We map every gap before we touch a thing.",
    body: "Before we build anything, we do a deep audit of your current digital presence — website, Google ranking, AI search visibility, and competitor landscape. You get a clear, prioritised action plan on day one.",
    deliverables: [
      "AI visibility check across ChatGPT, Perplexity, Claude & Google AI Mode",
      "Technical SEO audit — speed, structure, on-page gaps",
      "Competitor gap analysis for Kochi and your vertical",
      "Prioritised action plan with exact next steps",
    ],
    bg: "bg-primary",
  },
  {
    number: "02",
    icon: Hammer,
    phase: "Build",
    week: "Week 2",
    headline: "We build your website, content, and schema in one sprint.",
    body: "Design, copy, development, and schema markup all happen in parallel — no handoff delays. Every page is built mobile-first, conversion-focused, and AEO-ready from the ground up.",
    deliverables: [
      "Custom website design and development — mobile-first",
      "Full copywriting across all pages",
      "Structured data (schema markup) for AI and search visibility",
      "Google Analytics 4 and Search Console setup",
    ],
    bg: "bg-purple-dark",
  },
  {
    number: "03",
    icon: Rocket,
    phase: "Launch",
    week: "Week 3",
    headline: "We go live, submit everywhere, and activate your local presence.",
    body: "We deploy your site, verify your Google Business Profile, submit your AEO content to AI knowledge sources, and confirm every technical signal is firing correctly — so you're visible from day one.",
    deliverables: [
      "Site goes live on fast, secure hosting",
      "Google Business Profile setup or optimisation",
      "AEO schema submission and AI citation seeding",
      "Post-launch technical checklist — zero loose ends",
    ],
    bg: "bg-primary",
  },
  {
    number: "04",
    icon: TrendingUp,
    phase: "Grow",
    week: "Ongoing",
    headline: "We stay in. We report. We compound your results every month.",
    body: "After launch, we run ongoing SEO and AEO campaigns, publish new content, and review your performance monthly. Results compound — most clients see 3× lead growth within 90 days.",
    deliverables: [
      "Monthly SEO and AEO optimisation",
      "Content calendar — blog posts, landing pages, FAQs",
      "Monthly performance report in plain English",
      "Quarterly strategy review and roadmap refresh",
    ],
    bg: "bg-purple-dark",
  },
];

export default function ProcessPage() {
  const schema = collectionPageSchema(
    "BrandLevo's 4-Phase Process",
    "From first call to fully visible in 30 days — Audit, Build, Launch, Grow.",
    "https://brandlevo.com/process",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
      />
      <main>
        <PageHero
          eyebrow="HOW IT WORKS"
          title="From First Call to"
          titleAccent="Fully Visible in 30 Days."
          body="No guesswork. No 12-week strategy decks. Four clear phases — Audit, Build, Launch, Grow — and you're generating leads within a month."
          cta={{ label: "Start with a Free Audit Call", href: "/contact" }}
          secondaryCta={{ label: "See our services", href: "/services" }}
          stats={[
            { value: "30 Days", label: "Call to fully visible" },
            { value: "4", label: "Clear phases" },
            { value: "14 Days", label: "Site goes live" },
            { value: "100%", label: "Done for you" },
          ]}
          variant="dark"
        />

        {/* Timeline */}
        <section className="py-xxxl px-lg bg-white">
          <div className="max-w-container-max mx-auto">
            <div className="reveal text-center max-w-2xl mx-auto mb-xxl">
              <span className="text-eyebrow text-primary block mb-md">THE PROCESS</span>
              <h2 className="text-h2 text-ink">
                Four phases.{" "}
                <span className="text-primary italic">Zero confusion.</span>
              </h2>
            </div>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-8 top-8 bottom-8 w-px bg-fog hidden md:block" />

              <div className="space-y-xl">
                {phases.map((phase, i) => (
                  <div
                    key={phase.number}
                    className={`reveal stagger-${i + 1} relative md:pl-xxl`}
                  >
                    {/* Phase marker */}
                    <div
                      className={`absolute left-0 top-0 hidden md:flex w-16 h-16 rounded-2xl ${phase.bg} items-center justify-center shadow-lg shrink-0 z-10`}
                    >
                      <phase.icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="bg-snow border border-fog rounded-2xl p-md sm:p-xl">
                      {/* Mobile icon */}
                      <div className={`flex items-center gap-md mb-lg md:hidden`}>
                        <div className={`w-12 h-12 rounded-xl ${phase.bg} flex items-center justify-center shrink-0`}>
                          <phase.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-eyebrow text-primary block">{phase.week}</span>
                          <span className="text-h4 text-ink font-bold">Phase {phase.number} — {phase.phase}</span>
                        </div>
                      </div>

                      {/* Desktop header */}
                      <div className="hidden md:flex items-center gap-md mb-lg">
                        <span className={`text-eyebrow px-md py-xs rounded-full font-semibold ${phase.bg} text-white`}>
                          {phase.week}
                        </span>
                        <span className="text-eyebrow text-slate">Phase {phase.number}</span>
                        <span className="text-h3 text-ink font-bold">{phase.phase}</span>
                      </div>

                      <h3 className="text-h3 text-ink mb-md">{phase.headline}</h3>
                      <p className="text-body text-slate mb-xl leading-relaxed max-w-2xl">{phase.body}</p>

                      <p className="text-eyebrow text-slate mb-md">DELIVERABLES</p>
                      <ul className="grid sm:grid-cols-2 gap-sm">
                        {phase.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-sm">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-body-sm text-slate">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-xxxl px-lg bg-snow">
          <div className="max-w-container-max mx-auto bg-primary rounded-3xl p-xl md:p-xxxl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-purple-dark rounded-full opacity-40 blur-3xl pointer-events-none" />
            <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-purple-deeper rounded-full opacity-50 blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-xl">
              <div>
                <span className="text-eyebrow text-white/70 block mb-md">READY TO START?</span>
                <h2 className="text-h2 text-white mb-md leading-tight">
                  Start with a free audit call.
                </h2>
                <p className="text-body-lg text-white/80 max-w-lg leading-relaxed">
                  20 minutes. We audit your current visibility live on the call and hand you a clear action plan — whether you hire us or not.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 animate-pulse-ring inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all shadow-lg"
              >
                Book a Free Audit Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

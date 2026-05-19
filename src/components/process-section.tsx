import { PhoneCall, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book Your Free Brand Audit",
    tag: "20 minutes. Honest insights. No sales pitch.",
    body: "We dig into your current digital presence — website, SEO health, AI search visibility, brand consistency, and competitor landscape. You'll leave with a clear picture of what's holding you back and exactly what to fix first.",
    deliverables: [
      "Full digital audit (website, SEO, AEO, brand)",
      "AI search visibility check across ChatGPT, Perplexity & Google",
      "Competitor snapshot and gap analysis",
      "Clear, prioritised action plan — no obligation",
    ],
  },
  {
    number: "02",
    icon: Rocket,
    title: "We Build Your Growth Strategy",
    tag: "Tailored to your ICP, market, and goals.",
    body: "Based on your audit, we design and deliver the right combination of services — from a full website revamp and AEO/SEO strategy to ICP development, brand uplift, and sales consultation. Everything is built to work together.",
    deliverables: [
      "Custom website or revamp — mobile-first and conversion-optimised",
      "AEO + SEO strategy mapped to your Ideal Customer Profile",
      "Brand identity refresh or full brand build",
      "Sales pipeline and outreach playbook",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch the Growth Come In",
    tag: "We stay. We report. We optimise.",
    body: "We hand you a clean dashboard, train your team on the essentials, and remain your ongoing strategic partner. Monthly performance reviews, proactive strategy calls, and continuous AEO/SEO refinement keep you ahead of competitors.",
    deliverables: [
      "Monthly AI & search visibility reports",
      "Ongoing SEO, AEO & content campaigns",
      "Quarterly brand and strategy reviews",
      "Dedicated support — not a ticket queue",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="process">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">HOW IT WORKS</span>
          <h2 className="text-h2 text-ink mb-lg">
            From Invisible to Unstoppable{" "}
            <span className="text-primary italic">in Three Clear Steps.</span>
          </h2>
          <p className="text-body-lg text-slate">
            No jargon. No 80-page strategy decks. Just a clear path from where you are to where you want to be.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector */}
          <div className="connector-reveal hidden lg:block absolute top-8 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-fog z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {steps.map((step, i) => (
              <div key={step.number} className={`reveal stagger-${i + 1} relative`}>
                <div className="flex lg:flex-col gap-lg mb-lg items-start">
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="hidden lg:block absolute -top-2 right-0 text-fog font-bold select-none leading-none text-[80px] font-display">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-h3 text-ink mb-xs">{step.title}</h3>
                <p className="text-body-sm text-primary italic mb-md">{step.tag}</p>
                <p className="text-body text-slate mb-lg">{step.body}</p>

                <ul className="space-y-sm">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-sm text-body-sm text-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note + CTA */}
        <div className="reveal mt-xxl text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Book My Free Brand Audit
          </Link>
          <p className="text-body-sm text-slate mt-md">
            ✓ Most clients are live and generating leads within{" "}
            <span className="font-semibold text-ink">14 days</span> of kickoff.
          </p>
        </div>
      </div>
    </section>
  );
}

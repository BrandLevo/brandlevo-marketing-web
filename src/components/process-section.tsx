import { PhoneCall, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Book a Free 20-Minute Call",
    body: "Tell us about your business. We'll show you exactly what's missing online and what to fix first. No sales pitch. No tech-speak.",
    deliverables: ["Digital audit of your current presence", "Competitor snapshot", "Clear action plan", "No obligation — ever"],
  },
  {
    number: "02",
    icon: Rocket,
    title: "We Build Your Strategy",
    body: "In 14 days, we design, write, and launch a clean, mobile-friendly presence built to rank on Google and turn visitors into customers.",
    deliverables: ["Custom mobile-first website", "SEO-ready from day one", "Copywriting included", "Hosted, secured & live"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch the Growth Come In",
    body: "We hand you a simple dashboard, train you on the basics, and stick around for support. You focus on customers; we keep things running.",
    deliverables: ["Monthly performance reports", "SEO & marketing campaigns", "Ongoing technical support", "Strategy calls on demand"],
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
            Getting Online Shouldn't Feel Like Climbing a Mountain.{" "}
            <span className="text-primary italic">Here's How Easy We Make It:</span>
          </h2>
          <p className="text-body-lg text-slate">
            Three steps. No jargon. No long-winded discovery decks. Just a clear path from invisible to fully booked.
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

                <h3 className="text-h3 text-ink mb-md">{step.title}</h3>
                <p className="text-body text-slate mb-lg">{step.body}</p>

                <ul className="space-y-sm">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-sm text-body-sm text-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-xxl text-center">
          <Link
            href="#audit"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-semibold shadow-md hover:opacity-90 transition-all"
          >
            Book My Free Call
          </Link>
          <p className="text-body-sm text-slate mt-md">
            Most clients are live within <span className="font-semibold text-ink">14 days</span>. No surprises.
          </p>
        </div>
      </div>
    </section>
  );
}

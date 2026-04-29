import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Get Online",
    tagline: "Starter",
    price: "$799",
    period: "one-time",
    best: "Best for: brand-new businesses or solo operators",
    features: [
      "5-page mobile-friendly website",
      "Google Business Profile setup",
      "Basic on-page SEO",
      "Hosting + SSL certificate",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Get Found",
    tagline: "Growth",
    price: "$1,299",
    period: "one-time",
    best: "Best for: established local businesses ready to grow",
    features: [
      "Everything in Get Online, plus:",
      "10-page site with copywriting",
      "Local SEO + on-page optimisation",
      "Monthly performance report",
      "Priority support",
      "Google Ads setup",
    ],
    cta: "Most Popular — Get Started",
    featured: true,
  },
  {
    name: "Get Booked",
    tagline: "Pro",
    price: "$1,999",
    period: "one-time",
    best: "Best for: businesses scaling past word-of-mouth",
    features: [
      "Everything in Get Found, plus:",
      "Booking / lead-capture system",
      "AEO setup for AI search",
      "Social media starter kit",
      "Quarterly strategy call",
      "1 monthly content update",
    ],
    cta: "Get Started",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="pricing">
      <div className="max-w-container-max mx-auto">

        <div className="text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">PRICING</span>
          <h2 className="text-h2 text-ink mb-md">
            Simple, Honest Pricing.{" "}
            <span className="text-primary italic">No Surprises.</span>
          </h2>
          <p className="text-body text-slate">
            One of these will fit. If not, we'll build something custom — just ask.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-lg items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "rounded-2xl p-xl flex flex-col bento-card",
                plan.featured
                  ? "bg-primary ring-4 ring-primary/20 shadow-2xl md:-mt-4 md:mb-4"
                  : "bg-snow border border-fog hover:border-mist",
              ].join(" ")}
            >
              {plan.featured && (
                <div className="bg-white/20 text-white text-eyebrow rounded-full px-md py-xs w-fit mb-lg">
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className="mb-xl">
                <p className={["text-eyebrow mb-xs", plan.featured ? "text-purple-pale" : "text-primary"].join(" ")}>
                  {plan.tagline}
                </p>
                <h3 className={["text-h2 mb-sm", plan.featured ? "text-white" : "text-ink"].join(" ")}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-xs">
                  <span className={["text-h1 font-bold", plan.featured ? "text-white" : "text-ink"].join(" ")}>
                    {plan.price}
                  </span>
                  <span className={["text-body-sm", plan.featured ? "text-purple-pale" : "text-slate"].join(" ")}>
                    {plan.period}
                  </span>
                </div>
                <p className={["text-body-sm mt-sm", plan.featured ? "text-purple-pale" : "text-slate"].join(" ")}>
                  {plan.best}
                </p>
              </div>

              <ul className="space-y-md mb-xl flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-sm">
                    <Check className={["w-4 h-4 mt-0.5 shrink-0", plan.featured ? "text-mint" : "text-primary"].join(" ")} />
                    <span className={["text-body-sm", plan.featured ? "text-white" : "text-ink"].join(" ")}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#audit"
                className={[
                  "w-full rounded-lg py-md font-semibold text-body-sm text-center inline-flex items-center justify-center gap-sm hover:-translate-y-px transition-all active:scale-95",
                  plan.featured
                    ? "bg-white text-primary hover:bg-snow"
                    : "bg-primary text-white hover:opacity-90",
                ].join(" ")}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-body-sm text-slate mt-xl">
          Not sure which fits?{" "}
          <Link href="#audit" className="font-semibold text-primary hover:underline">
            Book a free call →
          </Link>{" "}
          We'll tell you honestly.
        </p>
      </div>
    </section>
  );
}

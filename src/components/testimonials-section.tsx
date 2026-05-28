import { ArrowRight, CheckCircle2, Clock, Zap, Shield } from "lucide-react";
import Link from "next/link";

const guarantees = [
  {
    icon: Clock,
    stat: "14 days",
    label: "Website live",
    detail: "From kick-off call to live site. Or we refund 10% — in writing.",
    iconBg: "bg-primary",
    iconText: "text-white",
  },
  {
    icon: Zap,
    stat: "60–90 days",
    label: "Results you can measure",
    detail: "Meaningful improvement in enquiries, rankings, or AI citations. Not vibes — numbers.",
    iconBg: "bg-purple-deeper",
    iconText: "text-white",
  },
  {
    icon: Shield,
    stat: "No lock-in",
    label: "Cancel any time",
    detail: "Month-to-month for all ongoing services. 30 days' notice is all it takes.",
    iconBg: "bg-mint",
    iconText: "text-ink",
  },
  {
    icon: CheckCircle2,
    stat: "You own it",
    label: "Everything, forever",
    detail: "Your website, your domain, your content. We build it. You keep it.",
    iconBg: "bg-graphite",
    iconText: "text-white",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="results">
      <div className="max-w-container-max mx-auto">

        <div className="reveal text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">OUR PROMISE</span>
          <h2 className="text-h2 text-ink mb-md">
            No fake numbers.{" "}
            <span className="text-primary italic">Just guarantees.</span>
          </h2>
          <p className="text-body text-slate">
            We&apos;re building our client list right now — and we&apos;d love you to be one of
            our first. Here&apos;s exactly what we commit to, in writing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={g.stat}
                className={`reveal stagger-${i + 1} bg-snow border border-fog rounded-2xl p-xl flex flex-col bento-card hover:border-mist hover:shadow-md transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-lg shrink-0 ${g.iconBg}`}>
                  <Icon className={`w-6 h-6 ${g.iconText}`} />
                </div>
                <div className="bg-purple-xpale rounded-lg px-md py-sm mb-md w-fit">
                  <span className="text-eyebrow text-primary font-semibold">{g.stat}</span>
                </div>
                <p className="font-semibold text-ink text-h4 mb-sm">{g.label}</p>
                <p className="text-body text-slate leading-relaxed">{g.detail}</p>
              </div>
            );
          })}
        </div>

        {/* CTA to be first client */}
        <div className="reveal bg-gradient-to-br from-primary/10 to-purple-deeper/10 border border-primary/20 rounded-2xl p-xxxl text-center max-w-2xl mx-auto">
          <span className="text-eyebrow text-primary block mb-md">BE FIRST</span>
          <h3 className="text-h3 text-ink mb-md">
            Want your results on this page?
          </h3>
          <p className="text-body text-slate mb-xl">
            We&apos;re actively onboarding our first clients in Kochi and Kerala.
            Book a free 30-minute audit — we&apos;ll show you exactly where you&apos;re
            losing visibility and what it would take to fix it. No pitch. Just clarity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-sm px-xl py-md bg-primary text-white rounded-full font-semibold text-body hover:bg-primary/90 transition-colors"
          >
            Book Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

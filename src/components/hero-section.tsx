import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { value: "14 Days", label: "Website Launch Guarantee" },
  { value: "90 Days", label: "Results Timeline" },
  { value: "0",       label: "Lock-in Contracts" },
  { value: "100%",    label: "You Own Everything" },
];

const trust = [
  "No long-term contracts",
  "Live in 14 days",
  "AI-native from day one",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink min-h-[calc(100svh-6rem)] flex items-center">
      <div className="relative z-10 w-full max-w-container-max mx-auto px-md sm:px-xl">
        <div className="grid lg:grid-cols-[1fr_400px] items-center gap-xxl py-xl sm:py-xxl">

          {/* Left — Copy */}
          <div>
              <h1 className="hero-title text-[clamp(44px,5.5vw,72px)] font-extrabold tracking-tight leading-tight font-display text-white mb-lg">
              Google ranks pages.
              <br />
              <span className="text-primary">AI cites brands.</span>
              <br />
              Which one are you?
            </h1>

            <p className="hero-body text-body-lg text-slate max-w-xl mb-xl leading-relaxed">
              Your old marketing was built for Google. Your customers have moved to AI.
              We rebuild local brands so you&apos;re found — and cited — on every platform
              your next customer already trusts.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-md mb-xl">
              <Link
                href="/contact"
                className="animate-pulse-ring inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-semibold hover:opacity-90 hover:-translate-y-px transition-all active:scale-95"
              >
                Get Your Free Brand Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="text-body-sm font-semibold text-slate hover:text-primary transition-colors"
              >
                See How It Works →
              </Link>
            </div>

            <div className="hero-trust flex flex-wrap gap-md">
              {trust.map((t) => (
                <div key={t} className="flex items-center gap-xs">
                  <CheckCircle className="w-4 h-4 text-mint shrink-0" />
                  <span className="text-body-sm text-slate">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="hero-image grid grid-cols-2 gap-md">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-surface border border-white/10 rounded-2xl p-lg flex flex-col gap-xs"
              >
                <span className="text-h2 font-bold text-white leading-none">
                  {s.value}
                </span>
                <span className="text-body-sm text-slate">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Zap, Star, Users } from "lucide-react";

const stats = [
  { value: "80+", label: "Brands elevated" },
  { value: "14 days", label: "Average launch" },
  { value: "3.4×", label: "Lead growth" },
  { value: "4.9★", label: "Satisfaction" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, #EDE5FF 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, #EDE5FF 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-container-max mx-auto px-md sm:px-xl">
        <div className="grid lg:grid-cols-2 items-center gap-xl pt-xl sm:pt-xxl pb-0">

          {/* Left: Copy */}
          <div className="pb-xl lg:pb-xxl">
            <h1 className="hero-title text-h1 text-ink mb-lg leading-tight">
              The AI Engine That{" "}
              <span className="text-primary">Lifts Your Brand Higher.</span>
            </h1>

            <p className="hero-body text-body-lg text-slate max-w-md mb-xl leading-relaxed">
              Smarter campaigns, sharper insights, unstoppable growth — all on autopilot. Where intelligence meets elevation.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-md mb-xl">
              <Link
                href="#audit"
                className="animate-pulse-ring inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-semibold shadow-sm hover:opacity-90 hover:-translate-y-px transition-all active:scale-95"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#process"
                className="text-body-sm font-semibold text-slate hover:text-primary transition-colors"
              >
                See how it works →
              </Link>
            </div>

            {/* Trust checks */}
            <div className="hero-trust flex flex-wrap gap-md">
              {["No long-term contracts", "Live in 14 days", "No tech skills needed"].map((t) => (
                <div key={t} className="flex items-center gap-xs">
                  <CheckCircle className="w-4 h-4 text-mint shrink-0" />
                  <span className="text-body-sm text-slate">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual composition */}
          <div className="hero-image relative h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">

            {/* Central orb */}
            <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-br from-primary to-purple-dark opacity-[0.08] blur-3xl" />
            <div className="relative w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary/15 to-purple-pale border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/10">
              <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/10 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Original.svg" alt="" className="h-14 w-auto opacity-90" />
              </div>
            </div>

            {/* Floating card — top left */}
            <div className="animate-float absolute top-8 left-4 sm:left-8 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
              style={{ animationDelay: "0s" }}>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-body-sm font-bold text-ink leading-none">80+ Brands</p>
                <p className="text-eyebrow text-slate">Elevated</p>
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="animate-float absolute top-12 right-4 sm:right-8 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
              style={{ animationDelay: "0.8s" }}>
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 text-gold fill-gold" />
              </div>
              <div>
                <p className="text-body-sm font-bold text-ink leading-none">4.9 / 5.0</p>
                <p className="text-eyebrow text-slate">Satisfaction</p>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div className="animate-float absolute bottom-12 left-4 sm:left-8 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
              style={{ animationDelay: "1.4s" }}>
              <div className="w-8 h-8 rounded-lg bg-mint/15 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-mint" />
              </div>
              <div>
                <p className="text-body-sm font-bold text-ink leading-none">+180% Enquiries</p>
                <p className="text-eyebrow text-slate">Bella&apos;s Studio · 90 days</p>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="animate-float absolute bottom-8 right-4 sm:right-8 bg-white border border-fog rounded-2xl px-md py-sm shadow-md flex items-center gap-sm"
              style={{ animationDelay: "0.4s" }}>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-body-sm font-bold text-ink leading-none">14 Days</p>
                <p className="text-eyebrow text-slate">Average launch</p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2 flex flex-col gap-sm opacity-30">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
              ))}
            </div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col gap-sm opacity-30">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats relative z-10 mt-xxl grid grid-cols-2 sm:grid-cols-4 gap-px bg-fog rounded-2xl overflow-hidden border border-fog">
          {stats.map((s) => (
            <div
              key={s.value}
              className="group relative bg-white px-lg py-lg text-center cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:bg-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 hover:z-10"
            >
              <p className="text-h3 font-bold leading-none mb-xs text-primary transition-all duration-500 ease-in-out group-hover:text-white group-hover:scale-110">
                {s.value}
              </p>
              <p className="text-eyebrow text-slate transition-all duration-500 ease-in-out group-hover:text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-16" />
    </section>
  );
}

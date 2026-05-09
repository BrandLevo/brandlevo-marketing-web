import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

const stats = [
  { value: "80+", label: "Businesses launched" },
  { value: "14 days", label: "Average turnaround" },
  { value: "3.4×", label: "More leads in 90 days" },
  { value: "4.9★", label: "Client satisfaction" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-snow">
      <div className="max-w-container-max mx-auto px-md sm:px-lg pt-xl sm:pt-xxl pb-0 grid lg:grid-cols-2 items-end gap-xl">

        {/* Left: Copy */}
        <div className="pb-xxl">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-sm bg-white border border-fog rounded-full px-md py-sm mb-xl shadow-sm">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </span>
            <span className="text-eyebrow text-ink">4.9 · 80+ local businesses</span>
          </div>

          <h1 className="text-h1 text-ink mb-lg">
            Get a Website That Actually{" "}
            <span className="text-primary italic">Brings You Customers.</span>
          </h1>

          <p className="text-body-lg text-slate max-w-md mb-xl leading-relaxed">
            Most local businesses lose customers every day to competitors who show up first on Google. We fix that — fast, simply, and without the tech headache.
          </p>

          <div className="flex flex-wrap items-center gap-md mb-xxl">
            <Link
              href="#audit"
              className="inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-semibold shadow-md hover:opacity-90 hover:-translate-y-px transition-all active:scale-95"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#process"
              className="text-body-sm font-semibold text-ink hover:text-primary transition-colors"
            >
              See how it works →
            </Link>
          </div>

          {/* Trust checks */}
          <div className="flex flex-wrap gap-lg">
            {["No long-term contracts", "Sites live in 14 days", "No tech skills needed"].map((t) => (
              <div key={t} className="flex items-center gap-xs">
                <CheckCircle className="w-4 h-4 text-mint shrink-0" />
                <span className="text-body-sm text-slate">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image — flush to bottom, no floating clutter */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-full lg:min-h-[540px]">
          <div className="absolute inset-0 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
            <Image
              alt="Local business owner with their new website"
              className="w-full h-full object-cover object-top"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=960&fit=crop&q=80"
              fill
              loading="eager"
              unoptimized
            />
            {/* Subtle gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-snow to-transparent" />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-fog bg-white">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-fog">
            {stats.map((s) => (
              <div key={s.value} className="px-xl py-lg text-center">
                <p className="text-h3 text-primary font-bold leading-none mb-xs">{s.value}</p>
                <p className="text-eyebrow text-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

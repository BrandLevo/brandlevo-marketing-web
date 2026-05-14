import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  body: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { value: string; label: string }[];
  badge?: string;
  variant?: "dark" | "purple";
};

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  body,
  cta,
  secondaryCta,
  stats,
  badge,
  variant = "dark",
}: PageHeroProps) {
  const isPurple = variant === "purple";

  return (
    <section
      className={[
        "relative overflow-hidden",
        isPurple ? "bg-purple-pale" : "bg-white",
      ].join(" ")}
    >
      {/* Top-right decorative blob */}
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #EDE5FF 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-md sm:px-xl py-xxl sm:py-xxxl">

        {/* Badge */}
        {badge && (
          <div
            className={[
              "hero-badge inline-flex items-center gap-sm rounded-full px-md py-xs mb-lg border",
              isPurple
                ? "bg-white/70 border-primary/20"
                : "bg-purple-pale border-purple-light/30",
            ].join(" ")}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-float" />
            <span className="text-eyebrow text-slate">{badge}</span>
          </div>
        )}

        {/* Eyebrow */}
        <span className="hero-eyebrow text-eyebrow text-primary font-semibold uppercase tracking-widest block mb-md">
          {eyebrow}
        </span>

        {/* Headline */}
        <h1 className="hero-title text-h1 text-ink leading-tight mb-lg max-w-3xl">
          {title}{" "}
          {titleAccent && (
            <span className="text-primary italic">{titleAccent}</span>
          )}
        </h1>

        {/* Body */}
        <p className="hero-body text-body-lg text-slate max-w-xl mb-xl leading-relaxed">
          {body}
        </p>

        {/* CTAs */}
        {(cta || secondaryCta) && (
          <div className="hero-cta flex flex-wrap items-center gap-md mb-xxl">
            {cta && (
              <Link
                href={cta.href}
                className="animate-pulse-ring inline-flex items-center gap-sm bg-primary text-white px-xl py-md rounded-full font-semibold shadow-md hover:opacity-90 hover:-translate-y-px transition-all active:scale-95"
              >
                {cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-body-sm font-semibold text-slate hover:text-primary transition-colors"
              >
                {secondaryCta.label} →
              </Link>
            )}
          </div>
        )}

        {/* Stats strip */}
        {stats && stats.length > 0 && (
          <div className="hero-stats max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-fog rounded-2xl overflow-hidden border border-fog">
            {stats.map((s) => (
              <div key={s.value} className="bg-white px-lg py-md text-center">
                <p className="text-h3 text-primary font-bold leading-none mb-xs">{s.value}</p>
                <p className="text-eyebrow text-slate">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

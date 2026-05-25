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
  const isDark = variant === "dark";
  const hasStats = stats && stats.length > 0;

  return (
    <section
      className={[
        "relative overflow-hidden",
        isDark
          ? "bg-ink min-h-[calc(100svh-6rem)] flex items-center"
          : "bg-purple-pale",
      ].join(" ")}
    >
      {/* Decorative blob — purple variant only */}
      {!isDark && (
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, #EDE5FF 0%, transparent 65%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-md sm:px-xl">
        <div
          className={[
            isDark && hasStats
              ? "grid lg:grid-cols-[1fr_400px] items-center gap-xxl py-xl sm:py-xxl"
              : "py-xxl sm:py-xxxl",
          ].join(" ")}
        >
          {/* Left / main copy */}
          <div>
            {/* Badge */}
            {badge && (
              <div
                className={[
                  "hero-badge inline-flex items-center gap-sm rounded-full px-md py-xs mb-lg border",
                  isDark
                    ? "bg-white/10 border-white/20"
                    : "bg-white/70 border-primary/20",
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
            <h1
              className={[
                "hero-title text-[clamp(44px,5.5vw,72px)] font-extrabold tracking-tight leading-tight font-display mb-lg max-w-3xl",
                isDark ? "text-white" : "text-ink",
              ].join(" ")}
            >
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
              <div className="hero-cta flex flex-wrap items-center gap-md">
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
                    className={`text-body-sm font-semibold transition-colors hover:text-primary ${isDark ? "text-slate" : "text-slate"}`}
                  >
                    {secondaryCta.label} →
                  </Link>
                )}
              </div>
            )}

            {/* Stats strip — purple variant only (dark puts them on the right) */}
            {!isDark && hasStats && (
              <div className="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-md mt-xxl">
                {stats.map((s) => (
                  <div
                    key={s.value}
                    className="rounded-2xl px-lg py-md flex flex-col gap-xs bg-white border border-fog"
                  >
                    <p className="text-h3 font-bold leading-none text-primary">{s.value}</p>
                    <p className="text-eyebrow text-slate">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — stats grid (dark variant only) */}
          {isDark && hasStats && (
            <div className="hero-image grid grid-cols-2 gap-md">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-surface border border-white/10 rounded-2xl p-lg flex flex-col gap-xs"
                >
                  <span className="text-h2 font-bold text-white leading-none">{s.value}</span>
                  <span className="text-body-sm text-slate">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

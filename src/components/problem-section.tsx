import { Search, Monitor, BarChart2, Sparkles } from "lucide-react";

const dotPattern = {
  backgroundImage: "radial-gradient(circle, rgba(123,69,245,0.14) 1.5px, transparent 1.5px)",
  backgroundSize: "22px 22px",
};

const pains = [
  {
    icon: Search,
    bold: "You're Invisible on AI Search",
    body: "60% of searches now end without a click — because AI gives the answer directly. If you're not in that answer, your competitors are.",
  },
  {
    icon: Monitor,
    bold: "Your Website Is Working Against You",
    body: "An outdated site signals to both humans and AI engines that your business is behind. 84% of buyers research online before purchasing. A weak digital presence costs you deals every day.",
  },
  {
    icon: BarChart2,
    bold: "You Have No Repeatable Sales System",
    body: "Word-of-mouth and referrals are unpredictable. Without a defined ICP, a clear funnel, and a digital engine driving leads, your growth has a ceiling — and it's frustratingly low.",
  },
  {
    icon: Sparkles,
    bold: "Your Brand Doesn't Reflect Your Value",
    body: "You've built something genuinely excellent. But your visual identity, messaging, and online presence don't say that. First impressions form in 0.05 seconds — outdated branding is silently costing you trust.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-xxxl px-lg bg-surface">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal max-w-2xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE PROBLEM</span>
          <h2 className="text-h2 text-ink mb-lg">
            Your Competitors Are Being Found.{" "}
            <span className="text-primary italic">You&apos;re Being Skipped.</span>
          </h2>
          <p className="text-body-lg text-slate">
            In 2026, buying decisions don&apos;t start on page one of Google — they start with an AI. When someone asks ChatGPT for the best accountant in their city, or Perplexity for a trusted web design agency, your name needs to appear. If it doesn&apos;t, you&apos;ve already lost the sale before a single click.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-2 gap-lg mb-xxl">
          {pains.map((p, i) => (
            <div
              key={p.bold}
              style={dotPattern}
              className={`reveal stagger-${i + 1} relative overflow-hidden bg-white border border-fog rounded-2xl p-xl`}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-lg border border-fog bg-snow">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-h4 text-ink mb-sm">{p.bold}</h3>
                <p className="text-body text-slate leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div className="reveal-scale stagger-5 bg-primary rounded-2xl overflow-hidden">
          <div className="px-md sm:px-xl py-xl sm:py-xxl flex flex-col md:flex-row items-center gap-xl">
            <div className="shrink-0 text-center md:text-left">
              <p className="text-[72px] sm:text-[96px] font-bold text-white leading-none font-display">80<span className="text-coral">%</span></p>
            </div>
            <p className="text-body-lg text-white/90 leading-relaxed max-w-lg">
              of customers research a business online before making contact. If your digital presence doesn&apos;t inspire confidence, they move on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

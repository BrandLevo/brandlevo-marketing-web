const stats = [
  { value: "80+", label: "Businesses Launched" },
  { value: "14 days", label: "Avg Launch Time" },
  { value: "3.4×", label: "Lead Growth / 90 Days" },
  { value: "4.9★", label: "Client Rating" },
];

const differentiators = [
  {
    title: "AI-Native, Not AI-Bolted-On",
    body: "We don't use AI as a shortcut. We use it as a strategic core — for ICP research, content structuring, AEO citation engineering, and campaign intelligence.",
  },
  {
    title: "Full-Funnel Thinking",
    body: "From brand identity to sales pipeline, we don't leave gaps. Our work connects your brand presence to actual revenue — not just traffic and vanity metrics.",
  },
  {
    title: "Compounding Returns",
    body: "SEO, AEO, and content marketing are long-game plays. We structure everything to compound so the work we do in month one keeps paying off in month twelve and beyond.",
  },
  {
    title: "No Jargon. No Fluff.",
    body: "We translate strategy into plain language. You'll always know what we're doing, why we're doing it, and what results to expect — before we touch anything.",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal max-w-3xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">WHY BRANDLEVO</span>
          <h2 className="text-h2 text-ink mb-lg">
            We Don&apos;t Just Build Websites.{" "}
            <span className="text-primary italic">We Build the Machine That Grows Your Business.</span>
          </h2>
          <p className="text-body-lg text-slate leading-relaxed">
            Most agencies hand you a finished site and disappear. BrandLevo is built differently. We&apos;re an AI-native growth partner — combining brand strategy, technical SEO, answer engine optimisation, ICP development, and sales consultation into one cohesive engine that compounds over time.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 gap-lg mb-xxl">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className={`reveal stagger-${i + 1} bg-white border border-fog rounded-2xl p-xl`}
            >
              <h3 className="text-h4 text-ink mb-sm">{d.title}</h3>
              <p className="text-body text-slate leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-md">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={[
                "rounded-xl p-lg text-center",
                i === 0 ? "bg-primary" : "bg-white border border-fog",
              ].join(" ")}
            >
              <p
                className={[
                  "text-h3 font-bold mb-xs leading-none",
                  i === 0 ? "text-white" : "text-primary",
                ].join(" ")}
              >
                {s.value}
              </p>
              <p className={["text-eyebrow", i === 0 ? "text-white/90" : "text-slate"].join(" ")}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

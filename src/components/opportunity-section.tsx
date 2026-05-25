const stats = [
  { value: "60%", label: "of Google searches end in zero clicks — AI gives the answer directly" },
  { value: "50%+", label: "of SERPs now feature an AI-generated overview above all results" },
  { value: "76%", label: "of local searches lead to a store visit within 24 hours" },
  { value: "28%", label: "of local searchers complete a purchase the same day" },
];

export default function OpportunitySection() {
  return (
    <section className="py-xxxl px-lg bg-ink">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal max-w-3xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE OPPORTUNITY</span>
          <h2 className="text-h2 text-white mb-lg">
            The Businesses That Win in the Next 5 Years Are{" "}
            <span className="text-primary italic">Building Their Digital Foundation Right Now.</span>
          </h2>
          <p className="text-body-lg leading-relaxed" style={{ color: "rgba(200,194,232,0.8)" }}>
            AI search is the biggest shift in marketing since Google launched. Early movers are capturing massive visibility while competitors are still debating whether to update their websites. The window for first-mover advantage is still open — but it&apos;s closing fast.
          </p>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-md mb-xxl">
          {stats.map((s) => (
            <div key={s.value} className="flex items-start gap-lg bg-white/5 border border-white/10 rounded-2xl px-xl py-lg">
              <p className="text-h1 font-bold text-primary leading-none shrink-0">{s.value}</p>
              <p className="text-body text-mist leading-relaxed pt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <blockquote className="reveal-scale border-l-4 border-primary pl-xl">
          <p className="text-h3 text-white leading-relaxed italic">
            &ldquo;The brands being cited by ChatGPT, Perplexity, and Google AI Mode aren&apos;t there by accident. They&apos;re there because someone built the right digital foundation. Let&apos;s build yours.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}

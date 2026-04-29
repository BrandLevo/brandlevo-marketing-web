const stats = [
  { value: "80+", label: "Local Businesses Launched" },
  { value: "14 days", label: "Average Launch Time" },
  { value: "3.4×", label: "More Leads in 90 Days" },
  { value: "4.9★", label: "Average Google Rating" },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">

        {/* Left: Image placeholder / founder */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-fog flex items-center justify-center">
            <div className="text-center p-xl">
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-lg flex items-center justify-center text-white font-bold font-display text-2xl">
                BL
              </div>
              <p className="text-h4 text-ink mb-xs">The BrandLevo Team</p>
              <p className="text-body-sm text-slate">Your guides to getting found online</p>
            </div>
          </div>
          {/* Authority strip on image */}
          <div className="absolute bottom-md left-md right-md bg-surface/95 backdrop-blur-sm rounded-xl p-md border border-fog">
            <p className="text-eyebrow text-primary mb-sm">TRUSTED BY LOCAL BUSINESSES</p>
            <div className="flex gap-lg">
              {stats.slice(0,2).map((s) => (
                <div key={s.value}>
                  <p className="text-h4 text-ink font-bold">{s.value}</p>
                  <p className="text-eyebrow text-slate">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <span className="text-eyebrow text-primary block mb-md">WHY BRANDLEVO</span>
          <h2 className="text-h2 text-ink mb-lg">
            We Get It. Building a Website Feels Overwhelming.{" "}
            <span className="text-primary italic">That's Why We Made It Simple.</span>
          </h2>
          <p className="text-body-lg text-slate mb-lg">
            At BrandLevo, we've helped over 80 small businesses — from family bakeries to two-person law firms — go from "we don't have a website" to "we're booked out three weeks." We don't speak in tech jargon. We don't disappear after launch. And we don't lock you into a contract you'll regret.
          </p>
          <p className="text-body text-slate mb-xxl">
            We handle the design, the words, the photos, the SEO, and the hosting — so you can keep doing what you do best.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-md">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={[
                  "rounded-xl p-lg",
                  i === 0 ? "bg-primary" : "bg-purple-xpale",
                ].join(" ")}
              >
                <p className={["text-h3 font-bold mb-xs", i === 0 ? "text-white" : "text-primary"].join(" ")}>
                  {s.value}
                </p>
                <p className={["text-eyebrow", i === 0 ? "text-purple-pale" : "text-slate"].join(" ")}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

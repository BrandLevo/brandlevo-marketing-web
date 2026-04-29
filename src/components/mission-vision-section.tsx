const stats = [
  { value: "150+", label: "Local Businesses Transformed" },
  { value: "3.2×", label: "Average Traffic Increase" },
  { value: "94%", label: "First-Page Rankings in 90 Days" },
  { value: "4.9★", label: "Average Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="py-xxxl px-lg bg-surface">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">

        {/* Left: Mission + vision */}
        <div className="space-y-xl">
          <div>
            <span className="text-eyebrow text-primary block mb-md">WHO WE ARE</span>
            <h2 className="text-h2 text-ink mb-lg">
              We exist to close the gap between reputation and digital presence.
            </h2>
            <p className="text-body-lg text-slate">
              Too many great local businesses are invisible online. We built BrandLevo to change that — combining strategic design, modern development, and data-driven marketing into one focused growth engine.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-lg">
            <p className="text-body-lg text-ink font-medium italic">
              "We believe every business with a 5-star reputation deserves a 5-star digital presence."
            </p>
          </div>

          <div className="flex items-center gap-lg">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-lg">
              BL
            </div>
            <div>
              <p className="font-bold text-ink text-body">The BrandLevo Team</p>
              <p className="text-body-sm text-slate">Strategy · Design · Growth</p>
            </div>
          </div>
        </div>

        {/* Right: Stats grid */}
        <div className="grid grid-cols-2 gap-md">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "rounded-2xl p-xl flex flex-col justify-center text-center bento-card",
                i === 0 ? "bg-primary" : "",
                i === 1 ? "bg-fog" : "",
                i === 2 ? "bg-purple-xpale" : "",
                i === 3 ? "bg-ink" : "",
              ].join(" ")}
            >
              <span
                className={[
                  "text-h1 font-bold block mb-sm",
                  i === 0 ? "text-white" : "",
                  i === 1 ? "text-ink" : "",
                  i === 2 ? "text-primary" : "",
                  i === 3 ? "text-white" : "",
                ].join(" ")}
              >
                {s.value}
              </span>
              <span
                className={[
                  "text-eyebrow block",
                  i === 0 ? "text-purple-pale" : "",
                  i === 1 ? "text-slate" : "",
                  i === 2 ? "text-slate" : "",
                  i === 3 ? "text-mist" : "",
                ].join(" ")}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

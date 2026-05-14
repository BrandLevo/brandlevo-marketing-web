import Image from "next/image";

const stats = [
  { value: "80+", label: "Local Businesses Launched" },
  { value: "14 days", label: "Average Launch Time" },
  { value: "3.4×", label: "More Leads in 90 Days" },
  { value: "4.9★", label: "Average Google Rating" },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
    alt: "Client success story",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80",
    alt: "Our work in action",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&q=80",
    alt: "Brand design",
    className: "col-span-1 row-span-1",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">

        {/* Left: Image collage */}
        <div className="reveal-left relative h-[280px] sm:h-[420px] sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-sm">
          {images.map((img, i) => (
            <div
              key={i}
              className={[
                "relative rounded-2xl overflow-hidden",
                i === 0
                  ? "h-full sm:h-auto sm:col-span-2 sm:row-span-2"
                  : "hidden sm:block",
              ].join(" ")}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          ))}

          {/* Floating authority badge */}
          <div className="absolute -bottom-md -right-0 sm:-right-md bg-surface rounded-xl shadow-xl border border-fog p-md z-10 min-w-[160px]">
            <p className="text-eyebrow text-primary mb-xs">OUR TRACK RECORD</p>
            <div className="flex gap-md">
              {stats.slice(0, 2).map((s) => (
                <div key={s.value}>
                  <p className="text-h4 text-ink font-bold leading-tight">{s.value}</p>
                  <p className="text-eyebrow text-slate">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div className="reveal-right">
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
                  i === 0 ? "bg-primary" : "bg-purple-xpale border border-fog",
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

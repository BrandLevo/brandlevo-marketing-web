import Image from "next/image";

const stats = [
  { value: "80+", label: "Local Businesses Launched" },
  { value: "14 days", label: "Average Launch Time" },
  { value: "3.4×", label: "More Leads in 90 Days" },
  { value: "4.9★", label: "Average Google Rating" },
];

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvX4a3AVrC96Pso9B37Aiv6sHouK3wvUUcvVqrJhbzsi9SdwBGkxlRLIxw7iRzEiF16-VbZFHKnye5jIi1_GpeXhQv89V3tAWEdFd7wX5AHgwByMe2L4H2xFM_lUhTbUjDkkxK6jt3DS4CGxCv2IMEZbfDpKDqJUw6moDU1Qv7BYlhr86HwxXLpglAZugMA9SZt1omCipttFNdsKgRMSsvsWM18NIxn0ZMEQ6fudZ3i_cPL-m8RCPS-zygt2hDODiJoYV5kcDmE2w",
    alt: "Client success story",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeAeqwgMd8qgzbTT0TUQCeVgiS5VXHSWjGSKXGPrCpU09LHAbYij3jibBzV8osmkr7pnPTFENxAxpSnil41OaxD6_Tx5VJRecpzKMhteN-FeS5JqKNtbI4icLGVztsw6uThFNVFdgjzyVZq9GnnNgSPYqj3Xx9KcKGEmIkuDcfSSIpB9dO0FWM0544q5pzo5rXYws7-0EegV9md6IGCdA063fmQufX92rMzXKANVcUv5yTm65n0y6eYPnIMwS-d9Pc5Dd70JbqLAI",
    alt: "Our work in action",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx0XaNH9M4Ldhrvbf_HWjT1awX__Wa2BnkX_5kMq5l0zNc6fA6Sgxy5crpKZlDC7eJ6SFAu-xLgZDcpojRcdgHjdjdBlVOOWQdK_sQqWIwF5z0APmFkPV8nse2n9aYgyVHA9CM1BJ8u0pKWqnrKakP0I_0nEzuJNI2LXCQI15m_mM-h5N_iI9C2sSKhvNZGx5OZ0H0p1-AtBFZWR3gBik-43WiQ9bTDYq7q8YY9-G26gZeSIb4W9na2ycUPjK8cfNlzzSPJA9hkIc",
    alt: "Brand design",
    className: "col-span-1 row-span-1",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">

        {/* Left: Image collage */}
        <div className="relative grid grid-cols-3 grid-rows-2 gap-sm h-[420px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={["relative rounded-2xl overflow-hidden", img.className].join(" ")}
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
          <div className="absolute -bottom-md -right-md bg-surface rounded-xl shadow-xl border border-fog p-md z-10 min-w-[160px]">
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

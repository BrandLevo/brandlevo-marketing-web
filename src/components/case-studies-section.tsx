import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvX4a3AVrC96Pso9B37Aiv6sHouK3wvUUcvVqrJhbzsi9SdwBGkxlRLIxw7iRzEiF16-VbZFHKnye5jIi1_GpeXhQv89V3tAWEdFd7wX5AHgwByMe2L4H2xFM_lUhTbUjDkkxK6jt3DS4CGxCv2IMEZbfDpKDqJUw6moDU1Qv7BYlhr86HwxXLpglAZugMA9SZt1omCipttFNdsKgRMSsvsWM18NIxn0ZMEQ6fudZ3i_cPL-m8RCPS-zygt2hDODiJoYV5kcDmE2w",
    tag: "Web + SEO",
    title: "Premier Plumbing Co.",
    result: "+420% organic search traffic in 4 months",
    detail: "Family-run plumber had 4.9★ reviews but ranked on page 3. New site + local SEO pushed them to #1 for 12 target keywords.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeAeqwgMd8qgzbTT0TUQCeVgiS5VXHSWjGSKXGPrCpU09LHAbYij3jibBzV8osmkr7pnPTFENxAxpSnil41OaxD6_Tx5VJRecpzKMhteN-FeS5JqKNtbI4icLGVztsw6uThFNVFdgjzyVZq9GnnNgSPYqj3Xx9KcKGEmIkuDcfSSIpB9dO0FWM0544q5pzo5rXYws7-0EegV9md6IGCdA063fmQufX92rMzXKANVcUv5yTm65n0y6eYPnIMwS-d9Pc5Dd70JbqLAI",
    tag: "Brand + AEO + Digital Marketing",
    title: "Lumiere Interiors",
    result: "Fully booked 6 weeks post-launch",
    detail: "Interior design studio with zero web presence. Full brand identity, website, and AEO strategy. Now appears in AI search results for 40+ queries.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="case-studies">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-xxl">
          <div>
            <span className="text-eyebrow text-primary block mb-md">CASE STUDIES</span>
            <h2 className="text-h2 text-ink">Real businesses. Real results.</h2>
          </div>
          <button className="hidden md:flex items-center gap-sm font-bold text-ink hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            View All Work
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {cases.map((c) => (
            <div key={c.title} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-lg relative">
                <Image
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={c.image}
                  fill
                  unoptimized
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-ink font-bold px-lg py-sm rounded-full shadow-lg">
                    Read Story
                  </span>
                </div>
                {/* Tag */}
                <span className="absolute top-md left-md bg-surface/95 backdrop-blur-sm text-primary text-eyebrow px-md py-sm rounded-full border border-fog">
                  {c.tag}
                </span>
              </div>

              <h4 className="text-h4 text-ink mb-xs">{c.title}</h4>

              <div className="flex items-center gap-sm mb-md">
                <span className="w-2 h-2 rounded-full bg-mint" />
                <p className="text-body-sm font-bold text-mint">{c.result}</p>
              </div>

              <p className="text-body-sm text-slate">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-xxl bg-purple-xpale border border-fog rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div>
            <p className="text-h4 text-ink font-bold mb-xs">
              Could your business be next?
            </p>
            <p className="text-body text-slate">
              We take on a limited number of new clients each quarter to ensure quality results.
            </p>
          </div>
          <a
            href="#audit"
            className="shrink-0 inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-bold hover:opacity-90 transition-all"
          >
            Check Availability
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=500&fit=crop&q=80",
    tag: "Web + SEO",
    title: "Premier Plumbing Co.",
    result: "+420% organic search traffic in 4 months",
    detail: "Family-run plumber had 4.9★ reviews but ranked on page 3. New site + local SEO pushed them to #1 for 12 target keywords.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&q=80",
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
        <div className="reveal flex justify-between items-end mb-xxl">
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
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`${i === 0 ? "reveal-left" : "reveal-right"} group cursor-pointer`}
            >
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

              <h3 className="text-h4 text-ink mb-xs">{c.title}</h3>

              <div className="flex items-center gap-sm mb-md">
                <span className="w-2 h-2 rounded-full bg-mint" />
                <p className="text-body-sm font-bold text-mint">{c.result}</p>
              </div>

              <p className="text-body-sm text-slate">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="reveal mt-xxl bg-purple-xpale border border-fog rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div>
            <p className="text-h4 text-ink font-bold mb-xs">
              Could your brand be next?
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

import { ArrowRight, Rocket, MapPin } from "lucide-react";
import Link from "next/link";

const whatWeDeliver = [
  {
    tag: "Website + SEO",
    title: "Service businesses in Kochi & Kerala",
    result: "Live in 14 days, built to rank",
    detail: "Mobile-first, AEO-ready websites with full local SEO setup — designed to get your business found on Google and AI search from day one.",
  },
  {
    tag: "Brand + AEO",
    title: "Local businesses ready to grow",
    result: "AI citations within 90 days",
    detail: "We structure your content, schema, and digital presence so ChatGPT, Perplexity, and Google AI cite your business when your customers are searching.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="case-studies">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal flex justify-between items-end mb-xxl">
          <div>
            <span className="text-eyebrow text-primary block mb-md">WHAT WE BUILD</span>
            <h2 className="text-h2 text-ink">
              First clients launching{" "}
              <span className="text-primary italic">this quarter.</span>
            </h2>
          </div>
        </div>

        {/* Service cards replacing fictional case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {whatWeDeliver.map((c, i) => (
            <div
              key={c.title}
              className={`${i === 0 ? "reveal-left" : "reveal-right"} bg-snow border border-fog rounded-2xl p-xl flex flex-col gap-md hover:border-mist hover:shadow-md transition-all`}
            >
              <span className="bg-surface/95 text-primary text-eyebrow px-md py-sm rounded-full border border-fog w-fit">
                {c.tag}
              </span>

              <h3 className="text-h4 text-ink">{c.title}</h3>

              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-mint shrink-0" />
                <p className="text-body-sm font-bold text-mint">{c.result}</p>
              </div>

              <p className="text-body-sm text-slate">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="reveal mt-xxl bg-purple-xpale border border-fog rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="flex items-start gap-md">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-h4 text-ink font-bold mb-xs flex items-center gap-sm">
                Be our first Kochi success story
                <MapPin className="w-4 h-4 text-primary" />
              </p>
              <p className="text-body text-slate">
                We&apos;re actively taking on our first clients. Free 30-minute audit — no pitch, just a clear picture of where you stand.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-bold hover:opacity-90 transition-all"
          >
            Book Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

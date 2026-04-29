import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-xxxl pb-xxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 items-center gap-xl">

        {/* Left: Copy */}
        <div className="z-10">
          <div className="inline-flex items-center gap-sm bg-purple-xpale border border-fog rounded-full px-md py-sm mb-lg">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </span>
            <span className="text-eyebrow text-primary">FOR LOCAL BUSINESSES WITH 5-STAR REPUTATIONS</span>
          </div>

          <h1 className="text-h1 text-ink mb-lg">
            Great Reviews Deserve a{" "}
            <span className="text-primary">Digital Presence</span> to Match.
          </h1>

          <p className="text-body-lg text-slate max-w-lg mb-xl leading-relaxed">
            You've earned the trust of your customers. We turn that reputation into a 24/7 revenue machine — with websites, SEO, and digital marketing built for local businesses ready to grow.
          </p>

          <div className="flex flex-wrap items-center gap-md mb-xxl">
            <Link
              href="#audit"
              className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold shadow-md hover:opacity-90 transition-all inline-flex items-center gap-sm"
            >
              Get a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#case-studies"
              className="border border-mist text-ink px-xl py-md rounded-lg font-bold hover:bg-purple-xpale transition-all"
            >
              See Results
            </Link>
          </div>

          {/* Social proof bar */}
          <div className="flex flex-wrap items-center gap-xl pt-lg border-t border-fog">
            <div>
              <p className="text-h3 text-ink font-bold">150+</p>
              <p className="text-body-sm text-slate">Local Businesses</p>
            </div>
            <div className="w-px h-10 bg-fog hidden sm:block" />
            <div>
              <p className="text-h3 text-ink font-bold">3.2×</p>
              <p className="text-body-sm text-slate">Avg. Traffic Growth</p>
            </div>
            <div className="w-px h-10 bg-fog hidden sm:block" />
            <div>
              <p className="text-h3 text-ink font-bold">90 days</p>
              <p className="text-body-sm text-slate">To First Page Results</p>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl purple-glow relative">
            <Image
              alt="Local business digital transformation"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa639eI2IWpe9bgLlrazPLPLKtvOx7quSn5lOVYZltri3x5mziKw9rdZ0nh2rYXCPezuHZt8uO5dAo2iel9sn7tw0hbd5gNQntFxxqf5oHvJh4C6B2Za6PSvjesrSNZ6MzZ6vMhIisKe6OehP-wmBhMW5Pt1uiU-xsUZTIIiWFLyI-jmuCB81UEjkZcP2DsVrpgXVD5xLluX3FUcRbuQP1D1Kk5tvWsf9mrKvFGU7_DW96Kx88XCi7sqlTnIN7B4e1tug_ZGaQaC0"
              fill
              unoptimized
            />
          </div>

          {/* Floating card — Google rating proof */}
          <div className="absolute -bottom-sm -left-sm bg-surface p-lg rounded-xl shadow-xl border border-fog max-w-[220px]">
            <div className="flex items-center gap-sm mb-xs">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-mint text-mint" />
                ))}
              </span>
              <span className="text-eyebrow text-mint">4.9 RATING</span>
            </div>
            <p className="text-body-sm text-ink font-medium">
              "We went from invisible online to fully booked in 60 days."
            </p>
            <p className="text-eyebrow text-slate mt-xs">— Maria R., Local Salon Owner</p>
          </div>

          {/* Floating card — traffic stat */}
          <div className="absolute -top-sm -right-sm bg-primary p-md rounded-xl shadow-xl max-w-[160px] text-center">
            <p className="text-h2 text-white font-bold">+340%</p>
            <p className="text-eyebrow text-purple-pale">WEBSITE TRAFFIC</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 right-0 -z-0 opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary rounded-full blur-[120px] -mr-40 -mt-40" />
      </div>
    </section>
  );
}

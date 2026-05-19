import Link from "next/link";
import { Target, Eye, Zap, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    body: "Every strategy is built around your specific ICP, market, and goals — never a template.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "You always know what we're doing, why, and what results to expect. No black boxes.",
  },
  {
    icon: Zap,
    title: "Speed",
    body: "We move fast without cutting corners. Most clients are live and generating leads within 14 days.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "We're not a vendor — we're an extension of your team. Your wins are our wins.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="about-us">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-start">

        {/* Left: Values */}
        <div className="reveal-left order-2 md:order-1">
          <span className="text-eyebrow text-primary block mb-md">HOW WE WORK</span>
          <h3 className="text-h3 text-ink mb-xl">Four principles we&apos;ve never compromised on.</h3>
          <div className="grid grid-cols-1 gap-md">
            {values.map((v, i) => (
              <div key={v.title} className={`stagger-${i + 1} flex items-start gap-md bg-white border border-fog rounded-xl p-lg`}>
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-xpale flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-h4 text-ink mb-xs">{v.title}</h4>
                  <p className="text-body-sm text-slate leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Brand story */}
        <div className="reveal-right order-1 md:order-2">
          <span className="text-eyebrow text-primary block mb-md">ABOUT US</span>
          <h2 className="text-h2 text-ink mb-xl">
            Built by Marketers Who Got Tired of Watching{" "}
            <span className="text-primary italic">Great Businesses Stay Invisible.</span>
          </h2>

          <p className="text-body-lg text-slate mb-lg leading-relaxed">
            BrandLevo started with a simple frustration: brilliant, hardworking businesses were being outranked and out-marketed by competitors who were half as good — simply because they&apos;d invested in their digital presence and we hadn&apos;t shown our clients how to.
          </p>
          <p className="text-body text-slate mb-lg leading-relaxed">
            So we built the agency we wished existed. One that combines AI-native strategy with honest, human partnerships. One that handles AEO, SEO, brand identity, ICP development, website revamps, and sales consultation in one cohesive system — without the jargon, the bloat, or the agency-speak.
          </p>
          <p className="text-body text-slate mb-xxl leading-relaxed">
            Today we work with businesses across four continents — from solo traders to multi-location SMEs — helping them get found, get trusted, and get booked. No lock-in contracts. No disappearing acts. Just a team that stays in your corner.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

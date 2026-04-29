import {
  Palette,
  Code2,
  Search,
  Cpu,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    label: "Brand & Design",
    headline: "Look the part — everywhere you show up.",
    body: "Logo, visual identity, and design systems built to communicate trust before a customer reads a single word. Consistent across web, social, and print.",
    tags: ["Logo Design", "Visual Identity", "Design Systems", "Brand Guidelines"],
    featured: false,
    dark: false,
  },
  {
    icon: Code2,
    label: "Web Development",
    headline: "A website that works as hard as you do.",
    body: "Fast, mobile-first, conversion-optimised websites. No template drag — custom-built to reflect your business and turn visitors into bookings.",
    tags: ["Custom Websites", "Landing Pages", "eCommerce", "Web Apps"],
    featured: true,
    dark: true,
  },
  {
    icon: Search,
    label: "SEO",
    headline: "Rank where your customers are searching.",
    body: "Local SEO strategies that push you to the top of Google for the keywords your customers actually type. More visibility, more foot traffic, more revenue.",
    tags: ["Local SEO", "Keyword Strategy", "On-Page Optimisation", "Google Business"],
    featured: false,
    dark: false,
  },
  {
    icon: Cpu,
    label: "AEO — Answer Engine Optimisation",
    headline: "Own the AI answer box before your competitors do.",
    body: "When customers ask ChatGPT, Perplexity, or Google AI Overviews about your industry — your business should be the answer. AEO makes that happen.",
    tags: ["AI Search", "Featured Snippets", "Schema Markup", "Structured Data"],
    featured: false,
    dark: false,
  },
  {
    icon: Megaphone,
    label: "Digital Marketing",
    headline: "Campaigns that drive real, measurable revenue.",
    body: "Google Ads, Meta campaigns, email marketing, and social — all tied to your actual business goals, not vanity metrics. Every pound tracked.",
    tags: ["Google Ads", "Meta Ads", "Email Marketing", "Analytics"],
    featured: false,
    dark: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="services">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg mb-xxl">
          <div>
            <span className="text-eyebrow text-primary block mb-md">WHAT WE DO</span>
            <h2 className="text-h2 text-ink max-w-lg">
              Five disciplines. One goal: grow your business.
            </h2>
          </div>
          <p className="text-body text-slate max-w-sm">
            We don't sell packages. We build strategies. Every engagement starts with understanding your business and what growth actually means for you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {services.map((s, i) => (
            <div
              key={s.label}
              className={[
                "rounded-2xl p-xl flex flex-col justify-between bento-card border",
                s.dark
                  ? "bg-purple-deeper border-transparent"
                  : "bg-surface border-fog hover:border-mist hover:shadow-md",
                i === 3 ? "md:col-span-2 lg:col-span-1" : "",
              ].join(" ")}
            >
              <div>
                <div
                  className={[
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-lg",
                    s.dark ? "bg-purple-dark" : "bg-purple-xpale",
                  ].join(" ")}
                >
                  <s.icon
                    className={["w-5 h-5", s.dark ? "text-white" : "text-primary"].join(" ")}
                  />
                </div>

                <span
                  className={[
                    "text-eyebrow block mb-sm",
                    s.dark ? "text-mist" : "text-primary",
                  ].join(" ")}
                >
                  {s.label}
                </span>

                <h3
                  className={[
                    "text-h3 mb-md",
                    s.dark ? "text-white" : "text-ink",
                  ].join(" ")}
                >
                  {s.headline}
                </h3>

                <p className={["text-body mb-lg", s.dark ? "text-mist" : "text-slate"].join(" ")}>
                  {s.body}
                </p>

                <div className="flex flex-wrap gap-sm mb-xl">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={[
                        "text-eyebrow px-sm py-xs rounded-full border",
                        s.dark
                          ? "border-purple-dark text-mist"
                          : "border-fog text-slate bg-snow",
                      ].join(" ")}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className={[
                  "flex items-center gap-sm text-body-sm font-bold bg-transparent border-none p-0 cursor-pointer transition-all hover:gap-md",
                  s.dark ? "text-white" : "text-primary",
                ].join(" ")}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

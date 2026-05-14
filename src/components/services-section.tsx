import { Globe, Search, MapPin, PenLine, Shield, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    outcome: "A site that loads fast, looks great on any phone, and turns visitors into paying customers.",
    featured: false,
  },
  {
    icon: Search,
    title: "Local SEO",
    outcome: "Show up when someone in your town searches \"best [your service] near me.\"",
    featured: false,
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    outcome: "Get on Google Maps, rack up reviews, and dominate local search — where buying decisions happen.",
    featured: false,
  },
  {
    icon: Cpu,
    title: "AEO — Answer Engine Optimisation",
    outcome: "When customers ask ChatGPT or Google AI about your industry, your business should be the answer.",
    featured: false,
  },
  {
    icon: PenLine,
    title: "Content & Copywriting",
    outcome: "We write every word for you — landing pages, service pages, blogs — in a voice that sounds like you.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Hosting, Maintenance & Support",
    outcome: "We host it, secure it, back it up, and fix things before you notice they broke.",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="services">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal max-w-2xl mx-auto text-center mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">WHAT WE DO</span>
          <h2 className="text-h2 text-ink mb-lg">
            Everything You Need to Show Up Online —{" "}
            <span className="text-primary italic">In One Place.</span>
          </h2>
          <p className="text-body-lg text-slate">
            No piecing together five contractors. No hidden fees. Pick what fits — we handle the rest.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-md">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={[
                `reveal stagger-${i + 1} rounded-2xl p-xl border flex flex-col gap-md bento-card`,
                s.featured
                  ? "bg-purple-deeper border-transparent"
                  : "bg-surface border-fog hover:border-mist hover:shadow-md",
              ].join(" ")}
            >
              {/* Icon */}
              <div
                className={[
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                  s.featured ? "bg-white/15" : "bg-purple-xpale",
                ].join(" ")}
              >
                <s.icon
                  className={["w-5 h-5", s.featured ? "text-white" : "text-primary"].join(" ")}
                />
              </div>

              {/* Copy */}
              <div className="flex-grow">
                <h3
                  className={["text-h4 mb-sm", s.featured ? "text-white" : "text-ink"].join(" ")}
                >
                  {s.title}
                </h3>
                <p className={["text-body", s.featured ? "text-purple-pale" : "text-slate"].join(" ")}>
                  {s.outcome}
                </p>
              </div>

              {/* Link */}
              <a
                href="#audit"
                className={[
                  "text-body-sm font-semibold inline-flex items-center gap-xs hover:gap-sm transition-all mt-sm",
                  s.featured ? "text-white/80 hover:text-white" : "text-primary",
                ].join(" ")}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Cpu, Search, Globe, Sparkles, PenLine } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AEO — Answer Engine Optimisation",
    body: "Get your brand cited by ChatGPT, Perplexity, and Google AI when customers ask for the best in your city.",
    icp: ["Clinics", "Coaches", "Wedding Vendors"],
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    body: "Dominate Google Maps, the local pack, and the AI overview — so customers find you before they find anyone else.",
    icp: ["Restaurants", "Salons", "Jewellers"],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    body: "A fast, mobile-first site that converts visitors into enquiries and is structured for AI discovery from day one.",
    icp: ["No website yet", "Outdated sites"],
  },
  {
    icon: Sparkles,
    title: "Brand Identity & Uplift",
    body: "A brand that signals authority and trust before a single word is read — built for your market and your customers.",
    icp: ["Jewellers", "Wedding Vendors", "Premium Services"],
  },
  {
    icon: PenLine,
    title: "Content & AEO Writing",
    body: "Local, specific, structured content that earns AI citations, ranks on Google, and converts readers into leads.",
    icp: ["Clinics", "Coaches", "All Service Businesses"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="services">
      <div className="max-w-container-max mx-auto">

        <div className="reveal max-w-2xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">WHAT WE DO</span>
          <h2 className="text-h2 text-ink mb-lg">
            Everything your brand needs to be found —{" "}
            <span className="text-primary italic">before your competitors.</span>
          </h2>
          <p className="text-body-lg text-slate">
            Pick what fits your stage. We handle the strategy, the execution, and the results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={[
                `reveal stagger-${i + 1}`,
                "bg-surface border border-fog rounded-2xl p-xl flex flex-col gap-lg",
                i === 4 ? "lg:col-span-1 md:col-span-2 lg:col-span-1" : "",
              ].join(" ")}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-grow">
                <h3 className="text-h4 text-ink mb-sm">{s.title}</h3>
                <p className="text-body text-slate leading-relaxed">{s.body}</p>
              </div>

              <div>
                <p className="text-eyebrow text-slate mb-sm">WHO IT&apos;S FOR</p>
                <div className="flex flex-wrap gap-xs">
                  {s.icp.map((tag) => (
                    <span key={tag} className="text-eyebrow bg-primary/10 text-primary px-sm py-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

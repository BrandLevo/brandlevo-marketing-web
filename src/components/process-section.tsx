import { ClipboardList, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Audit & Strategy",
    body: "We dig into your current online presence, review your competitors, and identify exactly where you're losing customers. You'll receive a no-fluff report with a clear growth roadmap.",
    deliverables: ["Digital audit report", "Competitor analysis", "Growth roadmap", "Project scope"],
  },
  {
    number: "02",
    icon: Rocket,
    title: "Build & Launch",
    body: "We design and develop your digital foundation — website, brand assets, and any technical setup. Fast turnarounds without cutting corners. You're live in weeks, not months.",
    deliverables: ["Custom website", "Brand identity", "SEO foundation", "Analytics setup"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Grow & Scale",
    body: "Once live, we run your SEO, AEO, and marketing campaigns. Monthly reporting, no jargon — just clear numbers showing what's working and where we're pushing next.",
    deliverables: ["Monthly SEO reports", "Ad campaign management", "Content strategy", "Ongoing optimisation"],
  },
];

export default function ProcessSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="process">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">HOW IT WORKS</span>
          <h2 className="text-h2 text-ink mb-lg">Simple process. Powerful results.</h2>
          <p className="text-body-lg text-slate">
            No drawn-out discovery calls or endless revisions. We move quickly and keep you informed at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[16.6%] right-[16.6%] h-px bg-fog z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Number + icon */}
                <div className="flex lg:flex-col lg:items-start items-center gap-lg mb-lg">
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-display text-fog font-bold leading-none lg:absolute lg:-top-4 lg:right-0 lg:text-[96px] select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-h3 text-ink mb-md">{step.title}</h3>
                <p className="text-body text-slate mb-lg">{step.body}</p>

                <ul className="space-y-sm">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-sm text-body-sm text-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-xxl text-center">
          <p className="text-body text-slate mb-lg">
            Ready to start? Most clients are live within{" "}
            <span className="font-bold text-ink">3–6 weeks</span>.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-bold shadow-md hover:opacity-90 transition-all"
          >
            Start with a Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}

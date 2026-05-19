import { Cpu, Search, Globe, Target, TrendingUp, Sparkles, PenLine, Shield } from "lucide-react";

const services = [
  {
    icon: Cpu,
    badge: "NEW ERA",
    badgeStyle: "bg-purple-xpale text-primary",
    title: "AEO — Answer Engine Optimisation",
    body: "When someone asks ChatGPT or Perplexity for the best service in your city — your brand should be the answer.",
    bullets: ["AI visibility audit across ChatGPT, Perplexity & Google AI", "Content restructuring for AI citation", "Entity & authority building for LLM recognition", "Citation tracking & share-of-voice monitoring"],
    span: "",
    dark: false,
  },
  {
    icon: Search,
    badge: "FOUNDATION",
    badgeStyle: "bg-purple-xpale text-primary",
    title: "SEO & Local Search Domination",
    body: "The foundation every AI answer is built on. Rank on the page and in the AI overview above it.",
    bullets: ["Technical SEO audit & on-page optimisation", "Local SEO — dominate your city & region", "Google Business Profile management", "Keyword clustering & topical authority"],
    span: "",
    dark: false,
  },
  {
    icon: Globe,
    badge: "MOST POPULAR",
    badgeStyle: "bg-gold/15 text-gold",
    title: "Website Revamp & Development",
    body: "Your most important salesperson. We build sites that load fast, look exceptional, convert visitors into enquiries, and are structured for AI discovery from day one.",
    bullets: ["Custom design — mobile-first, conversion-focused", "Full copywriting & content included", "SEO and AEO-ready architecture", "Secure, hosted & maintained"],
    span: "",
    dark: false,
  },
  {
    icon: Target,
    badge: "HIGH IMPACT",
    badgeStyle: "bg-coral/10 text-coral",
    title: "ICP Strategy Development",
    body: "Stop marketing to everyone. Define your ideal customer with precision and reach them before competitors do.",
    bullets: ["Deep-dive ICP research using AI & market data", "Persona development (demographics, buying triggers)", "Search intent mapping for your ICP", "Content & channel strategy"],
    span: "",
    dark: false,
  },
  {
    icon: TrendingUp,
    badge: "REVENUE FOCUS",
    badgeStyle: "bg-mint/10 text-mint",
    title: "Sales Consultation & Pipeline",
    body: "Leads are worthless without a system to convert them. We build the repeatable pipeline that closes them.",
    bullets: ["Sales process audit & conversion gap analysis", "Outbound playbook — scripts & sequences", "Inbound lead qualification design", "CRM setup & pipeline reporting"],
    span: "",
    dark: false,
  },
  {
    icon: Sparkles,
    badge: "PERCEPTION SHIFT",
    badgeStyle: "bg-coral/10 text-coral",
    title: "Brand Uplift & Identity",
    body: "Your brand is what people feel before they read a single word. We make sure it signals authority and trust.",
    bullets: ["Brand audit — logo, colours, typography, tone", "Visual identity refresh or full brand design", "Messaging framework & positioning statement", "Brand guidelines document"],
    span: "",
    dark: false,
  },
  {
    icon: PenLine,
    badge: "ALWAYS ON",
    badgeStyle: "bg-purple-xpale text-primary",
    title: "Content & Copywriting",
    body: "The fuel that powers AEO, SEO, and brand authority. Every word written to earn citations and convert readers.",
    bullets: ["AEO-structured blog content for AI citations", "Landing page & service page copywriting", "Email sequences & nurture campaigns", "Monthly content calendar"],
    span: "",
    dark: false,
  },
  {
    icon: Shield,
    badge: "SET & FORGET",
    badgeStyle: "bg-mint/10 text-mint",
    title: "Hosting, Maintenance & Support",
    body: "Fast, secure hosting with proactive monitoring — we fix issues before they affect your customers.",
    bullets: ["99.9% uptime SLA managed hosting", "SSL, security monitoring & auto backups", "Monthly technical updates", "Priority support — same-day response"],
    span: "",
    dark: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-xxxl px-lg bg-snow" id="services">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="reveal max-w-2xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">WHAT WE DO</span>
          <h2 className="text-h2 text-ink mb-lg">
            Every Service Your Brand Needs to Dominate —{" "}
            <span className="text-primary italic">Under One Roof.</span>
          </h2>
          <p className="text-body-lg text-slate">
            No patchwork contractors. No handoff gaps. Pick what fits your stage and goals — we handle the strategy, the execution, and the results.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md auto-rows-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={[
                `reveal stagger-${(i % 3) + 1} rounded-2xl p-xl border flex flex-col gap-md`,
                s.span,
                s.dark
                  ? "bg-primary border-transparent lg:col-span-2"
                  : "bg-white border-fog hover:border-mist hover:shadow-md transition-all",
              ].join(" ")}
            >
              {/* Top row: icon + badge */}
              <div className="flex items-start justify-between gap-md">
                <div className={["w-11 h-11 rounded-xl flex items-center justify-center shrink-0", s.dark ? "bg-white/15" : "bg-purple-xpale"].join(" ")}>
                  <s.icon className={["w-5 h-5", s.dark ? "text-white" : "text-primary"].join(" ")} />
                </div>
                <span className={["text-eyebrow font-semibold px-sm py-xs rounded-md shrink-0", s.dark ? "bg-white/15 text-white/80" : s.badgeStyle].join(" ")}>
                  {s.badge}
                </span>
              </div>

              {/* Title + body */}
              <div className="flex-grow">
                <h3 className={["text-h4 mb-sm", s.dark ? "text-white" : "text-ink"].join(" ")}>
                  {s.title}
                </h3>
                <p className={["text-body leading-relaxed", s.dark ? "text-white/90" : "text-slate"].join(" ")}>
                  {s.body}
                </p>
              </div>

              {/* Bullets */}
              <ul className={["grid gap-xs pt-md border-t", s.dark ? "border-white/15 grid-cols-1 sm:grid-cols-2" : "border-fog grid-cols-1"].join(" ")}>
                {s.bullets.map((b) => (
                  <li key={b} className={["flex items-start gap-sm text-body-sm", s.dark ? "text-white/75" : "text-slate"].join(" ")}>
                    <span className={["w-1 h-1 rounded-full shrink-0 mt-2", s.dark ? "bg-white/40" : "bg-primary"].join(" ")} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

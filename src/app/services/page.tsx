import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Search,
  Globe,
  Target,
  TrendingUp,
  Sparkles,
  PenLine,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services | BrandLevo",
  description:
    "Full-stack AI-powered digital services — AEO, SEO, website development, ICP strategy, sales consultation, brand uplift, content, and hosting. Everything under one roof.",
};

const services = [
  {
    icon: Cpu,
    tag: "NEW ERA",
    title: "AEO — Answer Engine Optimisation",
    headline: "Be the answer ChatGPT, Perplexity, and Google AI give for your category.",
    description:
      "When a potential customer asks ChatGPT, Perplexity, or Google AI 'who's the best [your service] in [your city]?' — your brand should be the answer. We engineer your content, schema, and digital authority so AI engines cite you as the trusted source.",
    includes: [
      "AI visibility audit across ChatGPT, Perplexity, Claude & Google AI Mode",
      "Content restructuring for AI citation (FAQs, summaries, schema markup)",
      "Entity and authority building for LLM recognition",
      "Ongoing citation tracking and share-of-voice monitoring",
    ],
    outcome: "Clients appear in AI-generated answers for 20–40 local queries within 6 months.",
    timeline: "Initial setup 2 weeks · Quarterly reviews",
    color: "bg-primary",
  },
  {
    icon: Search,
    tag: "FOUNDATION",
    title: "SEO & Local Search Domination",
    headline: "Rank when it matters — on the page and in the AI overview above it.",
    description:
      "Traditional search isn't dead — it's the foundation every AI answer is built on. We combine technical SEO, keyword strategy, local SEO, and Google Business Profile optimisation so you rank on the page and in the AI overview above it.",
    includes: [
      "Technical SEO audit and on-page optimisation",
      "Local SEO — dominate searches in your city and region",
      "Google Business Profile management and review strategy",
      "Keyword clustering and topical authority building",
    ],
    outcome: "Most clients see first-page movement within 60–90 days.",
    timeline: "Ongoing — results compound monthly",
    color: "bg-purple-dark",
  },
  {
    icon: Globe,
    tag: "MOST POPULAR",
    title: "Website Revamp & Development",
    headline: "Your most important salesperson — rebuilt to rank, convert, and impress.",
    description:
      "Your website is your most important salesperson. We build and revamp sites that load fast, look exceptional on every device, convert visitors into enquiries, and are technically structured for AI and search engine discovery from day one.",
    includes: [
      "Custom design — mobile-first, fast-loading, conversion-focused",
      "Full copywriting and content included",
      "SEO and AEO-ready architecture from the ground up",
      "Secure, hosted, and maintained — zero tech headaches",
    ],
    outcome: "Live in 14 days. Designed to rank, convert, and impress from day one.",
    timeline: "10–14 days",
    color: "bg-primary",
  },
  {
    icon: Target,
    tag: "HIGH IMPACT",
    title: "ICP Strategy Development",
    headline: "Stop marketing to everyone. Start owning your ideal customer.",
    description:
      "You can't market to everyone — and trying to is why most campaigns fail. We define your Ideal Customer Profile with precision: who they are, what they're searching for, what objections they have, and how to reach them before competitors do.",
    includes: [
      "Deep-dive ICP research using AI and market data",
      "Customer persona development (demographics, psychographics, buying triggers)",
      "Search intent mapping aligned to your ICP's buyer journey",
      "Content and channel strategy built around your best-fit customer",
    ],
    outcome: "Typically delivered within 7–10 business days. Standalone or as part of a broader package.",
    timeline: "7–10 business days",
    color: "bg-purple-dark",
  },
  {
    icon: TrendingUp,
    tag: "REVENUE FOCUS",
    title: "Sales Consultation & Pipeline Strategy",
    headline: "Turn visibility into revenue with a repeatable sales system.",
    description:
      "Leads are worthless without a system to convert them. We audit your current sales process, identify the drop-off points, and build a repeatable outbound and inbound pipeline strategy that turns your marketing investment into closed revenue.",
    includes: [
      "Sales process audit and conversion gap analysis",
      "Outbound playbook — ICP list building, outreach scripts, follow-up sequences",
      "Inbound lead qualification and nurture flow design",
      "CRM setup guidance and pipeline reporting framework",
    ],
    outcome: "A documented, repeatable pipeline — not one that depends on referrals or luck.",
    timeline: "2–3 weeks · Ongoing support available",
    color: "bg-primary",
  },
  {
    icon: Sparkles,
    tag: "PERCEPTION SHIFT",
    title: "Brand Uplift & Identity",
    headline: "Make your brand communicate authority before they read a single word.",
    description:
      "Your brand is what people feel before they read a single word. We refresh or rebuild your visual identity, messaging framework, and brand voice so that every touchpoint communicates authority, trust, and premium value.",
    includes: [
      "Brand audit — logo, colours, typography, tone of voice",
      "Visual identity refresh or full brand design",
      "Messaging framework and brand positioning statement",
      "Brand guidelines document for consistent application",
    ],
    outcome: "A brand identity that signals trust, quality, and confidence — consistently.",
    timeline: "2–4 weeks depending on scope",
    color: "bg-purple-dark",
  },
  {
    icon: PenLine,
    tag: "ALWAYS ON",
    title: "Content & Copywriting",
    headline: "Words that fuel AEO, SEO, and brand authority simultaneously.",
    description:
      "Great content is the fuel that powers AEO, SEO, and brand authority simultaneously. We write every word — landing pages, service pages, blogs, email sequences, and social content — in a voice that sounds like you, but sharper.",
    includes: [
      "AEO-structured blog content designed to earn AI citations",
      "Landing page and service page copywriting",
      "Email marketing sequences and nurture campaigns",
      "Monthly content calendar and editorial planning",
    ],
    outcome: "Pages with our copy average 2.3× longer session time and 40% lower bounce rate.",
    timeline: "Delivered in batches · Ongoing content calendar",
    color: "bg-primary",
  },
  {
    icon: Shield,
    tag: "SET & FORGET",
    title: "Hosting, Maintenance & Support",
    headline: "We keep the lights on so you never have to think about it.",
    description:
      "We handle all the technical infrastructure so you never have to think about it. Fast, secure hosting; regular backups; proactive security monitoring; and a support team that fixes issues before they affect your customers.",
    includes: [
      "Premium managed hosting with 99.9% uptime SLA",
      "SSL, security monitoring, and automatic backups",
      "Monthly technical updates and performance optimisation",
      "Priority support with same-day response time",
    ],
    outcome: "Zero planned downtime. Same-day response time.",
    timeline: "Always on",
    color: "bg-purple-dark",
  },
];

const tools = [
  { category: "Build", items: ["Next.js", "WordPress", "Webflow", "Framer"] },
  { category: "SEO", items: ["Ahrefs", "Semrush", "Screaming Frog", "Search Console"] },
  { category: "Analytics", items: ["GA4", "Hotjar", "Microsoft Clarity", "Looker Studio"] },
  { category: "Hosting", items: ["AWS", "Vercel", "Cloudflare", "WP Engine"] },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHAT WE DO"
        title="Every Service Your Brand Needs to Dominate —"
        titleAccent="Under One Roof."
        body="No patchwork contractors. No handoff gaps. Pick what fits your stage and goals — we handle the strategy, the execution, and the results."
        cta={{ label: "Book a Free Brand Audit", href: "/contact" }}
        secondaryCta={{ label: "See all services", href: "#services-list" }}
        stats={[
          { value: "14 days", label: "Average launch" },
          { value: "8", label: "Core services" },
          { value: "3.4×", label: "Lead growth" },
          { value: "80+", label: "Clients served" },
        ]}
        variant="purple"
      />

      {/* Service deep-dives */}
      <section className="py-xxxl px-lg bg-white" id="services-list">
        <div className="max-w-container-max mx-auto space-y-xxl reveal">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-xxl items-start ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Left: info */}
              <div>
                <div className="inline-flex items-center gap-sm mb-lg">
                  <span className={`${s.color} text-white rounded-xl p-sm`}>
                    <s.icon className="w-5 h-5" />
                  </span>
                  <span className="text-eyebrow text-primary">{s.tag}</span>
                </div>
                <h2 className="text-h2 text-ink mb-sm">{s.title}</h2>
                <p className="text-body font-semibold text-primary mb-md">{s.headline}</p>
                <p className="text-body text-slate mb-xl leading-relaxed">{s.description}</p>

                <div className="flex flex-wrap gap-lg text-body-sm text-slate">
                  <span className="flex items-center gap-xs">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {s.timeline}
                  </span>
                </div>
              </div>

              {/* Right: includes + outcome */}
              <div className="bg-snow border border-fog rounded-2xl p-xl">
                <p className="text-eyebrow text-slate mb-md">WHAT&apos;S INCLUDED</p>
                <ul className="space-y-sm mb-xl">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-body-sm text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-fog pt-md">
                  <p className="text-eyebrow text-slate mb-xs">OUTCOME</p>
                  <p className="text-body-sm text-ink font-medium">{s.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-xxl px-lg bg-snow border-t border-fog">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">TOOLS & TECH</span>
          <h2 className="text-h3 text-ink mb-xl">We use the same tools the big agencies charge a fortune for.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {tools.map((t) => (
              <div key={t.category} className="bg-white border border-fog rounded-2xl p-lg">
                <p className="text-eyebrow text-primary mb-md">{t.category}</p>
                <ul className="space-y-xs">
                  {t.items.map((item) => (
                    <li key={item} className="text-body-sm text-slate">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xxl px-lg bg-primary">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-xl">
          <div>
            <h2 className="text-h3 text-white mb-sm">Not sure which services you need?</h2>
            <p className="text-body text-white/70">
              Book a free 20-minute Brand Audit. We&apos;ll audit your current presence and tell you exactly what to prioritise.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all"
          >
            Book a Free Brand Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

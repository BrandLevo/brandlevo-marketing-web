import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Search,
  Globe,
  Sparkles,
  PenLine,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import { faqSchema, serviceSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services | BrandLevo",
  description:
    "Full-stack AI-powered digital services — AEO, SEO, website development, ICP strategy, sales consultation, brand uplift, content, and hosting. Everything under one roof.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    icon: Cpu,
    tag: "NEW ERA",
    title: "AEO — Answer Engine Optimisation",
    headline: "Be the answer ChatGPT, Perplexity, and Google AI give for your category.",
    description:
      "When a potential customer asks ChatGPT, Perplexity, or Google AI who's the best in your city, your brand should be the answer. We engineer your content, schema, and digital authority so AI engines cite you as the trusted source.",
    includes: [
      "AI visibility audit across ChatGPT, Perplexity, Claude & Google AI Mode",
      "Content restructuring for AI citation (FAQs, summaries, schema markup)",
      "Entity and authority building for LLM recognition",
      "Ongoing citation tracking and share-of-voice monitoring",
    ],
    outcome: "Clients appear in AI-generated answers for 20–40 local queries within 6 months.",
    timeline: "Initial setup 2 weeks · Quarterly reviews",
    icp: ["Clinics", "Coaches", "Wedding Vendors"],
    color: "bg-primary",
  },
  {
    icon: Search,
    tag: "FOUNDATION",
    title: "SEO & Local Search",
    headline: "Dominate Google Maps, the local pack, and the AI overview above it.",
    description:
      "Traditional search is the foundation every AI answer is built on. We combine technical SEO, keyword strategy, local SEO, and Google Business Profile optimisation so you rank on the page and in the AI overview above it.",
    includes: [
      "Technical SEO audit and on-page optimisation",
      "Local SEO — dominate searches in Kochi and your region",
      "Google Business Profile management and review strategy",
      "Keyword clustering and topical authority building",
    ],
    outcome: "Most clients see first-page movement within 60–90 days.",
    timeline: "Ongoing — results compound monthly",
    icp: ["Restaurants", "Salons", "Jewellers"],
    color: "bg-purple-dark",
  },
  {
    icon: Globe,
    tag: "MOST POPULAR",
    title: "Website Design & Development",
    headline: "A fast, mobile-first site that converts visitors into enquiries from day one.",
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
    icp: ["No website yet", "Outdated sites"],
    color: "bg-primary",
  },
  {
    icon: Sparkles,
    tag: "PERCEPTION SHIFT",
    title: "Brand Identity & Uplift",
    headline: "A brand that signals authority and trust before a single word is read.",
    description:
      "Your brand is what people feel before they read a single word. We refresh or rebuild your visual identity, messaging framework, and brand voice so that every touchpoint communicates authority, trust, and premium value — built for your market and your customers.",
    includes: [
      "Brand audit — logo, colours, typography, tone of voice",
      "Visual identity refresh or full brand design",
      "Messaging framework and brand positioning statement",
      "Brand guidelines document for consistent application",
    ],
    outcome: "A brand identity that signals trust, quality, and confidence — consistently.",
    timeline: "2–4 weeks depending on scope",
    icp: ["Jewellers", "Wedding Vendors", "Premium Services"],
    color: "bg-purple-dark",
  },
  {
    icon: PenLine,
    tag: "ALWAYS ON",
    title: "Content & AEO Writing",
    headline: "Local, specific, structured content that earns AI citations and converts readers.",
    description:
      "Great content is the fuel that powers AEO, SEO, and brand authority simultaneously. We write every word — landing pages, service pages, blogs, and social content — in a voice that is local, specific, and structured for AI discovery.",
    includes: [
      "AEO-structured blog content designed to earn AI citations",
      "Landing page and service page copywriting",
      "Local and specific content for Kochi and Kerala markets",
      "Monthly content calendar and editorial planning",
    ],
    outcome: "Pages with our copy average 2.3x longer session time and 40% lower bounce rate.",
    timeline: "Delivered in batches · Ongoing content calendar",
    icp: ["Clinics", "Coaches", "All Service Businesses"],
    color: "bg-primary",
  },
];

const tools = [
  { category: "Build", items: ["Next.js", "WordPress", "Webflow", "Framer"] },
  { category: "SEO", items: ["Ahrefs", "Semrush", "Screaming Frog", "Search Console"] },
  { category: "Analytics", items: ["GA4", "Hotjar", "Microsoft Clarity", "Looker Studio"] },
  { category: "Hosting", items: ["AWS", "Vercel", "Cloudflare", "WP Engine"] },
];

const servicesFaqs = [
  {
    q: "What is AEO and why does my business need it?",
    a: "AEO (Answer Engine Optimization) is the practice of structuring your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews cite your business as the answer when customers ask questions in your category. With over 60% of searches now triggering AI-generated answers, AEO is as essential as traditional SEO was five years ago.",
  },
  {
    q: "How long does website development take?",
    a: "Most local business websites are completed within 10–14 days from brief to launch. The process includes design, copywriting (included), development, testing, and deployment. We keep the process lean by using a structured brief and limiting revision rounds to two included rounds.",
  },
  {
    q: "Can I order just one service, or do I need a bundle?",
    a: "Every service is available individually. You can start with just a website revamp, just AEO, or just an ICP strategy session — then add services as you see results. There are no mandatory bundles.",
  },
  {
    q: "Do your services include ongoing support?",
    a: "Yes — all ongoing services (SEO, AEO, hosting, content) are month-to-month with no lock-in contracts. Project work (websites, brand, ICP) is one-time. Ongoing support plans include priority email and phone support.",
  },
  {
    q: "What results can I realistically expect?",
    a: "Most clients see meaningful improvements in enquiries within 60–90 days. Website projects typically improve lead conversion rates by 2–3×. AEO clients begin appearing in AI-generated answers for local queries within 90 days. SEO clients typically see first-page movement within 60–90 days.",
  },
];

export default function ServicesPage() {
  const serviceSchemas = services.map((s) =>
    serviceSchema({
      name: s.title,
      description: s.description,
      url: `https://brandlevo.com/services#${s.title.toLowerCase().replace(/\s+/g, "-")}`,
    })
  );
  const faqJson = faqSchema(servicesFaqs);

  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(faqJson) }}
      />
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
          { value: "5", label: "Core services" },
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

                <div className="flex flex-wrap gap-lg text-body-sm text-slate mb-lg">
                  <span className="flex items-center gap-xs">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {s.timeline}
                  </span>
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

      {/* FAQ */}
      <section className="py-xxl px-lg bg-snow border-t border-fog">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">FAQ</span>
          <h2 className="text-h3 text-ink mb-xl">Common Questions About Our Services</h2>
          <div className="max-w-2xl divide-y divide-fog">
            {servicesFaqs.map((faq) => (
              <details key={faq.q} className="group py-lg cursor-pointer">
                <summary className="flex justify-between items-center gap-lg list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg">
                  <span className="text-h4 text-ink group-open:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-8 h-8 rounded-full bg-purple-xpale flex items-center justify-center text-primary font-bold text-lg group-open:bg-primary group-open:text-white transition-all"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <p className="text-body text-slate mt-md pr-xl leading-relaxed">{faq.a}</p>
              </details>
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
    </>
  );
}

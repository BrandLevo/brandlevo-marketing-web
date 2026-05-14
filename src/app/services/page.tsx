import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Search,
  MapPin,
  Cpu,
  PenLine,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  BarChart3,
  Zap,
} from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Services | BrandLevo",
  description:
    "Full-stack digital services for local businesses — web design, local SEO, Google Business Profile, AEO, content, and hosting. Everything under one roof.",
};

const services = [
  {
    icon: Globe,
    tag: "Foundation",
    title: "Website Design & Development",
    headline: "A site that actually converts visitors into calls.",
    description:
      "Most local business websites look fine but do nothing. We build from a conversion-first brief — clear headline, trust signals above the fold, a booking path that takes under 3 clicks. Mobile-first, fast-loading, and built to rank.",
    includes: [
      "Custom design (no templates)",
      "Up to 10 pages of copywritten content",
      "Mobile-first responsive build",
      "Core Web Vitals optimised (LCP, CLS, FID)",
      "SSL, sitemap, robots.txt",
      "Google Analytics 4 + Search Console setup",
      "Contact form + click-to-call integration",
    ],
    outcome: "Live in 14 days. Designed to rank and convert from day one.",
    timeline: "10–14 days",
    color: "bg-primary",
  },
  {
    icon: Search,
    tag: "Visibility",
    title: "Local SEO",
    headline: "Rank when it matters — when someone nearby is searching.",
    description:
      "Local SEO is not about gaming an algorithm. It's about making sure that when someone 3 miles away searches for what you do, your business appears before a competitor. We handle on-page signals, citations, backlinks, and review strategy.",
    includes: [
      "Keyword research (local intent + service terms)",
      "On-page optimisation across all pages",
      "Google Business Profile optimisation",
      "Local citation building (50+ directories)",
      "NAP consistency audit and fixes",
      "Review acquisition strategy",
      "Monthly performance reports",
    ],
    outcome: "Most clients see first-page movement within 60–90 days.",
    timeline: "Ongoing — results compound monthly",
    color: "bg-purple-dark",
  },
  {
    icon: MapPin,
    tag: "Maps",
    title: "Google Business Profile",
    headline: "Own the map pack before your competitor does.",
    description:
      "The Google Maps 3-pack sits above organic results. Showing up there puts you in front of the highest-intent local searchers. We set up, optimise, and actively manage your GBP — posts, photos, Q&A, and review responses.",
    includes: [
      "Full GBP setup or audit and rebuild",
      "Category and attribute optimisation",
      "Weekly Google Posts (offers, events, updates)",
      "Photo and video uploads",
      "Q&A seeding and monitoring",
      "Review response management",
      "Insights reporting",
    ],
    outcome: "Typical 2–3× increase in direction requests and calls within 90 days.",
    timeline: "Setup in 5 days · Ongoing management",
    color: "bg-primary",
  },
  {
    icon: Cpu,
    tag: "AI Search",
    title: "AEO — Answer Engine Optimisation",
    headline: "Be the answer ChatGPT and Perplexity give for your category.",
    description:
      "Over 30% of searches now happen through AI assistants — and AI search doesn't show ten blue links. It names one business. AEO is about structuring your content so AI models cite you as the authoritative answer for your local niche.",
    includes: [
      "Structured data / schema markup (LocalBusiness, FAQPage, Service)",
      "Conversational content rewrites",
      "Featured snippet targeting",
      "FAQ page optimisation",
      "Entity optimisation (Google Knowledge Graph)",
      "ChatGPT, Perplexity, and Gemini visibility audit",
      "Quarterly AI-search ranking checks",
    ],
    outcome: "Clients appear in AI-generated answers for 20–40 local queries within 6 months.",
    timeline: "Initial setup 2 weeks · Quarterly reviews",
    color: "bg-purple-dark",
  },
  {
    icon: PenLine,
    tag: "Content",
    title: "Content & Copywriting",
    headline: "Words that sell — written by humans, optimised for machines.",
    description:
      "Generic AI content is killing local business rankings. We write copy that sounds like you, answers real customer questions, and signals expertise to Google. Landing pages, service pages, blog posts, and Google Post copy — all handled.",
    includes: [
      "Homepage and service page rewrites",
      "Location landing pages (multi-area targeting)",
      "Blog posts (800–1,500 words, SEO-researched topics)",
      "Google Posts copy (weekly)",
      "Email newsletter copy",
      "Social media caption packs",
      "Brand voice guide",
    ],
    outcome: "Pages with our copy average 2.3× longer session time and 40% lower bounce rate.",
    timeline: "Delivered in batches · Ongoing content calendar",
    color: "bg-primary",
  },
  {
    icon: Shield,
    tag: "Peace of Mind",
    title: "Hosting, Maintenance & Support",
    headline: "We keep the lights on so you don't have to think about it.",
    description:
      "A broken site at 9pm on a Saturday costs you customers. We host on enterprise-grade infrastructure, monitor uptime 24/7, push security patches automatically, and are on-call for anything that goes wrong. You focus on the business.",
    includes: [
      "99.9% uptime SLA hosting (AWS-backed)",
      "Daily automated backups (30-day retention)",
      "SSL certificate renewal",
      "WordPress / CMS core + plugin updates",
      "Malware scanning and removal",
      "Monthly performance audit",
      "Priority email + phone support",
    ],
    outcome: "Zero planned downtime. Average response time under 4 hours.",
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
        title="Full-Stack Brand Growth,"
        titleAccent="All Under One Roof."
        body="One agency. No hand-offs. We handle design, copy, SEO, AEO, and hosting — so every piece works together instead of pulling in different directions."
        cta={{ label: "Book a Free Audit", href: "/contact" }}
        secondaryCta={{ label: "See all services", href: "#services-list" }}
        stats={[
          { value: "14 days", label: "Average launch" },
          { value: "6", label: "Core services" },
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
              Book a free 20-minute call. We&apos;ll audit your current presence and tell you exactly what to prioritise.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all"
          >
            Book a Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

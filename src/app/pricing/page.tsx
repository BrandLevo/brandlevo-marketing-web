import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Check, CheckCircle, Minus, ArrowRight, HelpCircle, Shield } from "lucide-react";
import PageHero from "@/components/page-hero";
import { faqSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing | BrandLevo",
  description:
    "Transparent INR pricing for local business websites in Kochi and Kerala. ₹19,999 to ₹49,999 one-time — no retainers, no hidden fees, live in 14 days.",
  alternates: {
    canonical: "/pricing",
  },
};

const comparisonGroups = [
  {
    category: "Website",
    rows: [
      { feature: "Custom website design", getOnline: true, getFound: true, getBooked: true },
      { feature: "Pages of content", getOnline: "Up to 5", getFound: "Up to 10", getBooked: "Up to 15" },
      { feature: "Professional copywriting", getOnline: false, getFound: true, getBooked: true },
      { feature: "Hosting + SSL", getOnline: true, getFound: true, getBooked: true },
    ],
  },
  {
    category: "Visibility",
    rows: [
      { feature: "Local SEO setup", getOnline: "Basic", getFound: "Full", getBooked: "Full + AEO" },
      { feature: "Google Business Profile", getOnline: true, getFound: true, getBooked: true },
      { feature: "Google Ads setup", getOnline: false, getFound: true, getBooked: true },
      { feature: "AEO (AI search visibility)", getOnline: false, getFound: false, getBooked: true },
    ],
  },
  {
    category: "Leads & Growth",
    rows: [
      { feature: "Booking / lead capture", getOnline: false, getFound: false, getBooked: true },
      { feature: "Social media kit", getOnline: false, getFound: false, getBooked: true },
    ],
  },
  {
    category: "Ongoing Support",
    rows: [
      { feature: "Monthly performance report", getOnline: false, getFound: true, getBooked: true },
      { feature: "Quarterly strategy call", getOnline: false, getFound: false, getBooked: true },
      { feature: "Monthly content update", getOnline: false, getFound: false, getBooked: true },
      { feature: "Support", getOnline: "Email", getFound: "Priority email", getBooked: "Phone + email" },
    ],
  },
];

const faqs = [
  {
    q: "Is this a one-time payment or a subscription?",
    a: "One-time payment for the build. Hosting is ₹2,499/month after the first year (included free). No retainer, no ongoing contract — unless you want one for content or SEO management.",
  },
  {
    q: "What if I need something between tiers?",
    a: "We build custom quotes all the time. Book a call and we'll scope it. Most custom projects are within 10–20% of a standard tier price.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Every tier can be split into 2 instalments — 50% upfront, 50% on launch. No interest, no fees.",
  },
  {
    q: "What happens if I want to add services later?",
    a: "Everything is modular. Start with Get Online, add SEO management 3 months later when you see traffic — no problem. We scope additions at a fair day rate.",
  },
  {
    q: "Are there any hidden fees?",
    a: "None. Domain registration (if needed) is billed at cost — usually ₹999–1,500/year. Stock photography, if required, is billed at cost. Everything else is in the price.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We do unlimited revisions during the build until you're happy. After launch, if there's something genuinely wrong with the work, we fix it free. We've never had a client leave unhappy.",
  },
];

const guarantee = [
  "Unlimited revisions until you sign off",
  "Live in 14 days or we refund 10%",
  "No lock-in — you own everything",
  "30-day post-launch support included",
];

export default function PricingPage() {
  const schema = faqSchema(faqs);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
      />
    <main>
      <PageHero
        eyebrow="TRANSPARENT PRICING"
        title="One Price. No Surprises."
        titleAccent="You Own Everything."
        body="No retainers you don't need. No deliverables you can't measure. Pick a tier, pay once in INR, go live in 14 days."
        stats={[
          { value: "₹19,999", label: "Starting price" },
          { value: "14 days", label: "To go live" },
          { value: "0", label: "Hidden fees" },
          { value: "100%", label: "You own it" },
        ]}
        variant="dark"
      />

      {/* Tier cards */}
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <p className="text-eyebrow text-primary text-center mb-xxl">Less than one month of Google Ads spend — with results that compound.</p>
          <div className="grid md:grid-cols-3 gap-lg items-end">

            {/* Get Online */}
            <div className="reveal stagger-1 bg-white border border-fog rounded-2xl p-md sm:p-xl">
              <span className="text-eyebrow text-slate block mb-lg">GET ONLINE</span>
              <div className="mb-xl">
                <span className="text-h1 text-ink font-bold">₹19,999</span>
                <span className="text-body text-slate ml-sm">one-time</span>
              </div>
              <p className="text-body text-slate mb-xl">
                For businesses with no website at all. Fast, mobile-first, and properly built — not a template throwaway.
              </p>
              <p className="text-eyebrow text-slate mb-md">BEST FOR</p>
              <p className="text-body-sm text-ink mb-xl font-medium">New businesses, sole traders, and anyone who&apos;s been putting off getting online.</p>
              <Link href="/contact" className="block text-center bg-white border-2 border-primary text-primary px-xl py-md rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                Get Started
              </Link>
              <p className="text-eyebrow text-slate text-center mt-md">or pay in 2 instalments</p>
            </div>

            {/* Get Found — featured */}
            <div className="reveal stagger-2 bg-ink rounded-2xl p-md sm:p-xl relative sm:-mt-6">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-eyebrow px-md py-xs rounded-full font-bold whitespace-nowrap shadow-md">
                MOST POPULAR
              </div>
              <span className="text-eyebrow text-white/50 block mb-lg">GET FOUND</span>
              <div className="mb-xl">
                <span className="text-h1 text-white font-bold">₹32,999</span>
                <span className="text-body text-white/50 ml-sm">one-time</span>
              </div>
              <p className="text-body text-white/75 mb-xl">
                For businesses that have a site but nobody finds it. Full SEO, copy, and monthly reports so you see exactly what&apos;s working.
              </p>
              <p className="text-eyebrow text-white/40 mb-md">BEST FOR</p>
              <p className="text-body-sm text-white font-medium mb-xl">Established local businesses actively losing customers to better-ranked competitors.</p>
              <Link href="/contact" className="block text-center bg-primary text-white px-xl py-md rounded-full font-semibold hover:opacity-90 transition-all shadow-md">
                Get Started
              </Link>
              <p className="text-eyebrow text-white/40 text-center mt-md">or pay in 2 instalments</p>
            </div>

            {/* Get Booked */}
            <div className="reveal stagger-3 bg-white border border-fog rounded-2xl p-md sm:p-xl">
              <span className="text-eyebrow text-slate block mb-lg">GET BOOKED</span>
              <div className="mb-xl">
                <span className="text-h1 text-ink font-bold">₹49,999</span>
                <span className="text-body text-slate ml-sm">one-time</span>
              </div>
              <p className="text-body text-slate mb-xl">
                For businesses ready to dominate their local area. Full stack — AI search, lead capture, ads, and a social kit.
              </p>
              <p className="text-eyebrow text-slate mb-md">BEST FOR</p>
              <p className="text-body-sm text-ink mb-xl font-medium">Businesses ready to invest in owning their market — not just being present in it.</p>
              <Link href="/contact" className="block text-center bg-white border-2 border-primary text-primary px-xl py-md rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                Get Started
              </Link>
              <p className="text-eyebrow text-slate text-center mt-md">or pay in 2 instalments</p>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="reveal mb-xxl">
            <span className="text-eyebrow text-primary block mb-md">WHAT&apos;S INCLUDED</span>
            <h2 className="text-h2 text-ink">Side-by-side comparison.</h2>
          </div>

          <div className="reveal-scale overflow-x-auto rounded-2xl border border-fog bg-white shadow-sm">
            <table className="w-full min-w-[540px]">
              {/* Sticky column headers */}
              <thead>
                <tr className="border-b-2 border-fog">
                  <th className="text-left py-lg px-xl w-[44%]" />
                  <th className="py-lg px-md text-center w-[18%]">
                    <span className="text-eyebrow text-slate block mb-xs">GET ONLINE</span>
                    <span className="text-h4 font-bold text-ink">₹19,999</span>
                  </th>
                  <th className="py-lg px-md text-center w-[20%] bg-ink/5 border-x border-ink/10">
                    <span className="text-eyebrow text-ink block mb-xs">GET FOUND</span>
                    <span className="text-h4 font-bold text-ink">₹32,999</span>
                    <span className="mt-xs inline-block bg-primary text-white text-[10px] font-bold px-sm py-[2px] rounded-full leading-none">POPULAR</span>
                  </th>
                  <th className="py-lg px-md text-center w-[18%]">
                    <span className="text-eyebrow text-slate block mb-xs">GET BOOKED</span>
                    <span className="text-h4 font-bold text-ink">₹49,999</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonGroups.map((group) => (
                  <React.Fragment key={group.category}>
                    {/* Category header row */}
                    <tr className="bg-snow border-t border-b border-fog">
                      <td colSpan={4} className="px-xl py-sm">
                        <span className="text-eyebrow text-slate">{group.category.toUpperCase()}</span>
                      </td>
                    </tr>

                    {/* Feature rows */}
                    {group.rows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-fog/60 transition-colors hover:bg-snow/60 ${
                          i === group.rows.length - 1 ? "border-0" : ""
                        }`}
                      >
                        <td className="py-md px-xl text-body-sm text-ink">{row.feature}</td>
                        {[row.getOnline, row.getFound, row.getBooked].map((val, j) => (
                          <td
                            key={j}
                            className={`text-center py-md px-md ${
                              j === 1 ? "bg-ink/5 border-x border-ink/10" : ""
                            }`}
                          >
                            {val === true ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 mx-auto">
                                <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                              </span>
                            ) : val === false ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 mx-auto">
                                <Minus className="w-3.5 h-3.5 text-fog" strokeWidth={2} />
                              </span>
                            ) : (
                              <span className={`text-body-sm font-medium ${j === 1 ? "text-ink font-semibold" : "text-slate"}`}>
                                {val}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}

                {/* CTA row */}
                <tr className="border-t-2 border-fog bg-snow">
                  <td className="py-lg px-xl" />
                  <td className="py-lg px-md text-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-snow border-2 border-primary text-primary px-lg py-sm rounded-full text-body-sm font-bold hover:bg-purple-xpale transition-all"
                    >
                      Get Started
                    </Link>
                  </td>
                  <td className="py-lg px-md text-center bg-ink/5 border-x border-ink/10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-ink text-white px-lg py-sm rounded-full text-body-sm font-bold hover:bg-primary transition-all shadow-sm"
                    >
                      Get Started
                    </Link>
                  </td>
                  <td className="py-lg px-md text-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-snow border-2 border-primary text-primary px-lg py-sm rounded-full text-body-sm font-bold hover:bg-purple-xpale transition-all"
                    >
                      Get Started
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-xxl px-lg bg-white">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-xxl items-center">
          <div className="shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <div>
            <span className="text-eyebrow text-primary block mb-md">OUR GUARANTEE</span>
            <h2 className="text-h3 text-ink mb-lg">We stand behind every project.</h2>
            <div className="grid sm:grid-cols-2 gap-sm">
              {guarantee.map((g) => (
                <div key={g} className="flex items-center gap-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-body-sm text-slate">{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto max-w-3xl">
          <div className="flex items-center gap-sm mb-xxl">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-eyebrow text-primary">PRICING FAQ</span>
          </div>
          <div className="space-y-md">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-fog rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-xl py-lg cursor-pointer list-none">
                  <span className="text-body font-medium text-ink group-open:text-primary transition-colors pr-lg">{faq.q}</span>
                  <span className="shrink-0 text-slate group-open:text-primary text-h3 leading-none transition-colors">+</span>
                </summary>
                <div className="px-xl pb-lg">
                  <p className="text-body-sm text-slate leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xxl px-lg bg-primary">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-xl">
          <div>
            <h2 className="text-h3 text-white mb-sm">Not sure which tier fits?</h2>
            <p className="text-body text-white/70">
              Book a free 20-minute call. We&apos;ll tell you honestly which package makes sense — or build a custom quote if none fit perfectly.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-sm bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all"
          >
            Get a Free Recommendation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}

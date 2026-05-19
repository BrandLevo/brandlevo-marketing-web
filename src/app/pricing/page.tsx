import type { Metadata } from "next";
import Link from "next/link";
import { Check, CheckCircle, Minus, ArrowRight, HelpCircle, Shield } from "lucide-react";
import PageHero from "@/components/page-hero";
import { faqSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing | BrandLevo",
  description:
    "Transparent, one-time pricing for local business websites and digital marketing. No retainers, no surprises, no contracts.",
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
    a: "One-time payment for the build. Hosting is $29/month after the first year (included free). No retainer, no ongoing contract — unless you want one for content or SEO management.",
  },
  {
    q: "What if I need something between tiers?",
    a: "We build custom quotes all the time. Book a call and we'll scope it. Most custom projects are within 10–20% of a standard tier price.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. 50% upfront, 50% on launch is standard. For projects over $1,500, we can split into three payments with no interest or fees.",
  },
  {
    q: "What happens if I want to add services later?",
    a: "Everything is modular. Start with Get Online, add SEO management 3 months later when you see traffic — no problem. We scope additions at a fair day rate.",
  },
  {
    q: "Are there any hidden fees?",
    a: "None. Domain registration (if needed) is billed at cost — usually $12–15/year. Stock photography, if required, is billed at cost. Everything else is in the price.",
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
        body="No retainers you don't need. No deliverables you can't measure. Pick a tier, pay once, go live in 14 days."
        badge="No hidden fees · No lock-in contracts"
        stats={[
          { value: "$799", label: "Starting price" },
          { value: "14 days", label: "To go live" },
          { value: "0", label: "Hidden fees" },
          { value: "100%", label: "You own it" },
        ]}
        variant="dark"
      />

      {/* Tier cards */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto grid md:grid-cols-3 gap-lg items-end">
          {/* Get Online */}
          <div className="reveal stagger-1 bg-snow border border-fog rounded-2xl p-md sm:p-xl">
            <span className="text-eyebrow text-slate block mb-lg">GET ONLINE</span>
            <div className="mb-xl">
              <span className="text-h1 text-ink font-bold">$799</span>
              <span className="text-body text-slate ml-sm">one-time</span>
            </div>
            <p className="text-body text-slate mb-xl">
              You don&apos;t have a website yet — or the one you have looks like 2009. This gets you online properly, fast.
            </p>
            <p className="text-eyebrow text-slate mb-md">BEST FOR</p>
            <p className="text-body-sm text-ink mb-xl font-medium">Tradespeople, sole traders, new businesses needing a credible web presence.</p>
            <Link href="/contact" className="block text-center bg-snow border-2 border-primary text-primary px-xl py-md rounded-full font-bold hover:bg-purple-xpale transition-all">
              Get Started
            </Link>
          </div>

          {/* Get Found — featured */}
          <div className="reveal stagger-2 bg-primary rounded-2xl p-md sm:p-xl relative sm:-mt-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-ink text-eyebrow px-md py-xs rounded-full font-bold whitespace-nowrap">
              MOST POPULAR
            </div>
            <span className="text-eyebrow text-white/60 block mb-lg">GET FOUND</span>
            <div className="mb-xl">
              <span className="text-h1 text-white font-bold">$1,299</span>
              <span className="text-body text-white/60 ml-sm">one-time</span>
            </div>
            <p className="text-body text-white/80 mb-xl">
              A full site with SEO baked in from day one, copy handled, and monthly reports so you see what&apos;s working.
            </p>
            <p className="text-eyebrow text-white/50 mb-md">BEST FOR</p>
            <p className="text-body-sm text-white font-medium mb-xl">Established local businesses actively losing customers to better-ranked competitors.</p>
            <Link href="/contact" className="block text-center bg-white text-primary px-xl py-md rounded-full font-bold hover:bg-snow transition-all">
              Get Started
            </Link>
          </div>

          {/* Get Booked */}
          <div className="reveal stagger-3 bg-snow border border-fog rounded-2xl p-md sm:p-xl">
            <span className="text-eyebrow text-slate block mb-lg">GET BOOKED</span>
            <div className="mb-xl">
              <span className="text-h1 text-ink font-bold">$1,999</span>
              <span className="text-body text-slate ml-sm">one-time</span>
            </div>
            <p className="text-body text-slate mb-xl">
              The full stack — including AI search visibility, lead capture, ads setup, and a social kit. Built to dominate your local category.
            </p>
            <p className="text-eyebrow text-slate mb-md">BEST FOR</p>
            <p className="text-body-sm text-ink mb-xl font-medium">Businesses ready to invest in owning their market — not just being present in it.</p>
            <Link href="/contact" className="block text-center bg-snow border-2 border-primary text-primary px-xl py-md rounded-full font-bold hover:bg-purple-xpale transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-xxxl px-lg bg-snow">
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
                    <span className="text-h4 font-bold text-ink">$799</span>
                  </th>
                  <th className="py-lg px-md text-center w-[20%] bg-primary/5 border-x border-primary/15">
                    <span className="text-eyebrow text-primary block mb-xs">GET FOUND</span>
                    <span className="text-h4 font-bold text-primary">$1,299</span>
                    <span className="mt-xs inline-block bg-gold text-ink text-[10px] font-bold px-sm py-[2px] rounded-full leading-none">POPULAR</span>
                  </th>
                  <th className="py-lg px-md text-center w-[18%]">
                    <span className="text-eyebrow text-slate block mb-xs">GET BOOKED</span>
                    <span className="text-h4 font-bold text-ink">$1,999</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonGroups.map((group) => (
                  <>
                    {/* Category header row */}
                    <tr key={group.category} className="bg-snow border-t border-b border-fog">
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
                              j === 1 ? "bg-primary/5 border-x border-primary/10" : ""
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
                              <span className={`text-body-sm font-medium ${j === 1 ? "text-primary" : "text-slate"}`}>
                                {val}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
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
                  <td className="py-lg px-md text-center bg-primary/5 border-x border-primary/15">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-primary text-white px-lg py-sm rounded-full text-body-sm font-bold hover:opacity-90 transition-all shadow-sm"
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

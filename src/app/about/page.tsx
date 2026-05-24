import type { Metadata } from "next";
import { Target, Eye, Zap, Handshake } from "lucide-react";
import PageHero from "@/components/page-hero";
import { personSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us | BrandLevo",
  description:
    "Built for small businesses, by people who've run them. Meet BrandLevo — the agency that treats a two-person bakery with the same urgency as a Fortune 500.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Precision",
    body: "Every strategy is built around your specific ICP, market, and goals — never a template.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "You always know what we're doing, why, and what results to expect. No black boxes.",
  },
  {
    icon: Zap,
    title: "Speed",
    body: "We move fast without cutting corners. Most clients are live and generating leads within 14 days.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "We're not a vendor — we're an extension of your team. Your wins are our wins.",
  },
];

const milestones = [
  { year: "2019", event: "Founded — first 3 clients were local trades businesses in the US South." },
  { year: "2020", event: "Expanded to UK market. Helped 18 businesses survive the pandemic with emergency online pivots." },
  { year: "2021", event: "Launched AEO service offering — one of the first agencies to optimise specifically for AI search engines." },
  { year: "2022", event: "Crossed 50 active clients. Hired dedicated SEO and content specialists." },
  { year: "2023", event: "Expanded to AU and NG markets. Average client lead growth hit 3.4× in 90 days." },
  { year: "2024", event: "80+ businesses launched. 4.9★ average satisfaction rating across all clients." },
];

const team = [
  {
    initials: "JR",
    name: "James R.",
    role: "Founder & Strategy",
    bg: "bg-primary",
    bio: "Grew up watching his dad's electrical business lose jobs to competitors who showed up on Google first. Built BrandLevo to fix that for the next generation of local business owners.",
  },
  {
    initials: "SC",
    name: "Sara C.",
    role: "Head of SEO & AEO",
    bg: "bg-purple-dark",
    bio: "8 years ranking local businesses. Formerly agency-side at a 200-person firm. Joined BrandLevo because she wanted to see the businesses she helped — not just the spreadsheets.",
  },
  {
    initials: "TN",
    name: "Tom N.",
    role: "Lead Developer",
    bg: "bg-graphite",
    bio: "Builds every site like it's going to be his own business. Obsessive about Core Web Vitals, accessibility, and making sure nothing breaks on a Tuesday night.",
  },
  {
    initials: "AM",
    name: "Aisha M.",
    role: "Content & Copywriting",
    bg: "bg-primary",
    bio: "Ex-journalist. Writes copy that sounds like the owner, not a marketing robot. Every word earns its place — no filler, no buzzwords.",
  },
];

const stats = [
  { value: "80+", label: "Local Businesses Launched" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "4", label: "Continents Served" },
  { value: "14 days", label: "Average Launch Time" },
];

export default function AboutPage() {
  const teamSchemas = team.map((member) =>
    personSchema({
      name: member.name,
      jobTitle: member.role,
      url: "https://brandlevo.com/about",
    })
  );

  return (
    <>
      {teamSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
        />
      ))}
    <main>
      <PageHero
        eyebrow="ABOUT BRANDLEVO"
        title="We Started BrandLevo Because"
        titleAccent="Brands Deserve Better."
        body="Our founder's dad ran an electrical business for 22 years — brilliant at the work, five-star reviews, and losing jobs to a competitor with a flashier website. That felt wrong. BrandLevo exists to fix it."
        cta={{ label: "Work With Us", href: "/contact" }}
        stats={stats}
        variant="dark"
      />

      {/* Mission + Vision */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl reveal">
          <div className="bg-primary rounded-2xl p-md sm:p-xl">
            <span className="text-eyebrow text-white/60 block mb-md">OUR MISSION</span>
            <h2 className="text-h3 text-white mb-md">
              Give every local business the digital presence the big guys take for granted.
            </h2>
            <p className="text-body text-white/70 leading-relaxed">
              Not just a website — a complete digital front door. One that ranks on Google, shows up on maps, gets cited by AI assistants, and turns visitors into customers. Built fast, priced fairly, maintained properly.
            </p>
          </div>
          <div className="bg-snow border border-fog rounded-2xl p-md sm:p-xl">
            <span className="text-eyebrow text-primary block mb-md">OUR VISION</span>
            <h2 className="text-h3 text-ink mb-md">
              A world where the best local business — not the best-marketed one — wins.
            </h2>
            <p className="text-body text-slate leading-relaxed">
              Right now, a brilliant plumber with 200 five-star reviews loses jobs to a mediocre competitor who spent £500 on ads. We&apos;re levelling that playing field, one business at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">HOW WE WORK</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">
            Four principles we&apos;ve never compromised on.
          </h2>
          <div className="grid md:grid-cols-2 gap-lg">
            {values.map((v, i) => (
              <div key={v.title} className={`reveal stagger-${i + 1} bg-white border border-fog rounded-2xl p-md sm:p-xl flex gap-md sm:gap-lg`}>
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-xpale flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-h4 text-ink mb-sm">{v.title}</h3>
                  <p className="text-body-sm text-slate leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-xxxl px-lg bg-white">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">THE TEAM</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">
            Small enough to care. Experienced enough to deliver.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-lg">
            {team.map((t, i) => (
              <div key={t.name} className={`reveal stagger-${i + 1} bg-snow border border-fog rounded-2xl p-lg`}>
                <div className={`w-14 h-14 rounded-2xl ${t.bg} flex items-center justify-center mb-lg`}>
                  <span className="text-white font-bold text-h4">{t.initials}</span>
                </div>
                <h3 className="text-h4 text-ink mb-xs">{t.name}</h3>
                <p className="text-eyebrow text-primary mb-md">{t.role}</p>
                <p className="text-body-sm text-slate leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-xxxl px-lg bg-snow">
        <div className="max-w-container-max mx-auto">
          <span className="text-eyebrow text-primary block mb-md">OUR STORY</span>
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">Six years of helping local businesses compete online.</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-fog ml-[11px] hidden md:block" />
            <div className="space-y-xl">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-lg">
                  <div className="shrink-0 flex items-start gap-md">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-snow shrink-0 mt-1" />
                  </div>
                  <div>
                    <span className="text-eyebrow text-primary block mb-xs">{m.year}</span>
                    <p className="text-body text-slate">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}

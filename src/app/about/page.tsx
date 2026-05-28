import type { Metadata } from "next";
import { Target, Eye, Zap, Handshake } from "lucide-react";
import PageHero from "@/components/page-hero";
import { personSchema, speakableSchema, schemaScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BrandLevo is a digital marketing agency based in Kochi, Kerala — specialising in AEO, SEO, and website development for local businesses. No lock-in. Results in 90 days.",
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
  { year: "2026", event: "Founded in Kochi — built on the belief that local businesses deserve the same digital presence that big brands take for granted." },
  { year: "2026", event: "Launched website and dedicated AEO service — one of the first agencies in Kerala to optimise specifically for ChatGPT, Perplexity, and Google AI Overviews." },
  { year: "Now", event: "Actively onboarding our first clients in Kochi and Kerala. Ready to make you our first success story." },
];

const team = [
  {
    initials: "BL",
    name: "BrandLevo",
    role: "Founder-Led Agency",
    bg: "bg-primary",
    bio: "A small, founder-led team based in Kochi. We handle strategy, design, development, content, and SEO/AEO — all under one roof, all with one point of contact.",
  },
];

const stats = [
  { value: "14 days", label: "Website Launch Guarantee" },
  { value: "90 days", label: "Results Timeline" },
  { value: "0", label: "Lock-in Contracts" },
  { value: "Kochi", label: "Based In" },
];

export default function AboutPage() {
  const teamSchemas = team.map((member) =>
    personSchema({
      name: member.name,
      jobTitle: member.role,
      url: "https://www.brandlevo.com/about",
    })
  );

  const speakable = speakableSchema([".hero-title", ".hero-body"]);

  return (
    <>
      {teamSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaScript(schema) }}
        />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaScript(speakable) }} />
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-lg max-w-xl">
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
          <h2 className="text-h2 text-ink mb-xxl max-w-xl">How BrandLevo started.</h2>
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

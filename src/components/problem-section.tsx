import { EyeOff, TrendingDown, ShieldOff, FileX, BarChart2 } from "lucide-react";

const pains = [
  {
    icon: EyeOff,
    num: "01",
    title: "Invisible to AI",
    local: "When someone asks ChatGPT for the best Ayurvedic clinic in Kochi, your name isn't there.",
    body: "60% of searches now end without a click — AI gives the answer directly. If you're not being cited, your competitor is.",
  },
  {
    icon: TrendingDown,
    num: "02",
    title: "Enquiries Dried Up",
    local: "Google traffic dropped. Zomato and Swiggy take a cut. You don't own any channel.",
    body: "You're paying rent on platforms that don't build your brand. Every lead through them is a lead you don't own.",
  },
  {
    icon: ShieldOff,
    num: "03",
    title: "No Digital Reputation",
    local: "You have a signboard. New patients and clients can't verify you exist online.",
    body: "76% of local searches lead to a visit within 24 hours — but only if they can find and trust you first.",
  },
  {
    icon: FileX,
    num: "04",
    title: "Generic or Missing Content",
    local: "Your competitor has 200 Google reviews and a website. You have a phone number.",
    body: "AI cites brands with specific, local, structured content. Generic pages and empty profiles get skipped entirely.",
  },
  {
    icon: BarChart2,
    num: "05",
    title: "No Way to Measure Any of It",
    local: "You don't know how many people searched for you this month — or why they chose someone else.",
    body: "Without visibility into your own numbers, you're guessing. Every month you wait is customers you'll never get back.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">

        <div className="reveal max-w-2xl mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">THE PROBLEM</span>
          <h2 className="text-h2 text-ink mb-lg">
            Your competitors are being found.{" "}
            <span className="text-primary italic">You&apos;re being skipped.</span>
          </h2>
          <p className="text-body-lg text-slate leading-relaxed">
            Buying decisions don&apos;t start on page one of Google anymore — they start with an AI.
            When someone in Kochi asks ChatGPT for a trusted clinic, salon, or vendor, your name
            needs to come up. If it doesn&apos;t, you&apos;ve already lost the sale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-lg">
          {pains.map((p, i) => (
            <div
              key={p.num}
              className={[
                `reveal stagger-${i + 1}`,
                "bg-surface border border-fog rounded-2xl px-xl py-lg",
                i === 4 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              {/* Number + title on one line */}
              <div className="flex items-baseline gap-md mb-md">
                <span className="text-h2 font-bold text-primary leading-none shrink-0">{p.num}</span>
                <h3 className="text-h3 text-ink leading-snug">{p.title}</h3>
              </div>
              <p className="text-body text-slate italic mb-sm leading-relaxed">
                &ldquo;{p.local}&rdquo;
              </p>
              <p className="text-body text-slate leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our packages start at $799. Most small businesses land in our Get Found tier — full transparent pricing on this page. No hidden fees, ever.",
  },
  {
    q: "How long does it take?",
    a: "Most sites go live in 14 days from our kickoff call. Larger projects take 3–4 weeks. We'll give you an exact timeline on the free call.",
  },
  {
    q: "What if I don't have any photos or content?",
    a: "We've got you. We write the copy and source images that fit your brand. Many of our clients show up with literally nothing — that's completely normal.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. 100%. We don't hold your site hostage. If you ever leave us, you take everything with you. No lock-in, ever.",
  },
  {
    q: "Will it actually help me get customers?",
    a: "We can't promise miracles, but our average client sees 3.4× more leads within 90 days. We'll show you exactly how on our free call.",
  },
  {
    q: "What if I'm not tech-savvy?",
    a: "That's literally why we exist. You won't touch a single line of code or a confusing dashboard unless you want to.",
  },
  {
    q: "Is there a contract?",
    a: "Month-to-month on all maintenance plans. Cancel anytime. We'd rather earn your business every month than lock you in.",
  },
  {
    q: "Do you work with businesses outside my city?",
    a: "Yes — we work with small businesses worldwide. Everything's done remotely with simple video calls. We've worked with clients across 4 continents.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-xxxl px-lg bg-surface">
      <div className="max-w-container-max mx-auto">

        <div className="text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">FAQ</span>
          <h2 className="text-h2 text-ink">
            Questions We Hear{" "}
            <span className="text-primary italic">All the Time.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-fog">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group py-lg cursor-pointer"
            >
              <summary className="flex justify-between items-center gap-lg list-none">
                <span className="text-h4 text-ink group-open:text-primary transition-colors">
                  {faq.q}
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-purple-xpale flex items-center justify-center text-primary font-bold text-lg group-open:bg-primary group-open:text-white transition-all">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:block">−</span>
                </span>
              </summary>
              <p className="text-body text-slate mt-md pl-0 pr-xl leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { homepageFaqs } from "@/lib/faq-data";

export default function FaqSection() {
  const faqs = homepageFaqs;
  return (
    <section className="py-xxxl px-lg bg-surface">
      <div className="max-w-container-max mx-auto">

        <div className="reveal text-center max-w-xl mx-auto mb-xxl">
          <span className="text-eyebrow text-primary block mb-md">FAQ</span>
          <h2 className="text-h2 text-ink">
            Honest Answers to{" "}
            <span className="text-primary italic">Everything You're Wondering.</span>
          </h2>
        </div>

        <div className="reveal max-w-2xl mx-auto divide-y divide-fog">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group py-lg cursor-pointer"
            >
              <summary
                className="flex justify-between items-center gap-lg list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg"
                aria-label={faq.q}
              >
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

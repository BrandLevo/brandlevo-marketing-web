import { ChevronRight } from "lucide-react";

export default function InsightsSection() {
  return (
    <section className="py-xxxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-xxl">
          <h2 className="font-h2 text-h2">Insights</h2>
          <p className="text-slate font-body max-w-md mx-auto mt-md">
            Explore the latest thoughts on brand strategy, design philosophy,
            and technological shifts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <article className="bg-surface p-lg rounded-xl border border-fog flex flex-col h-full hover:border-mist transition-colors">
            <span className="text-primary font-mono text-[10px] mb-sm bg-purple-xpale px-sm py-1 w-fit rounded">
              STRATEGY
            </span>
            <h4 className="font-h4 text-h4 mb-md">Why Brand Systems Outlast Logos</h4>
            <p className="text-slate font-body-sm mb-lg flex-grow">
              Exploring the transition from static asset creation to dynamic,
              living systems that grow with the business.
            </p>
            <a className="font-bold text-ink hover:text-primary transition-colors flex items-center gap-xs" href="#">
              Read Article
              <ChevronRight className="text-sm w-4 h-4" />
            </a>
          </article>
          <article className="bg-surface p-lg rounded-xl border border-fog flex flex-col h-full hover:border-mist transition-colors">
            <span className="text-primary font-mono text-[10px] mb-sm bg-purple-xpale px-sm py-1 w-fit rounded">
              TECHNOLOGY
            </span>
            <h4 className="font-h4 text-h4 mb-md">The Ethics of AI in Creative Branding</h4>
            <p className="text-slate font-body-sm mb-lg flex-grow">
              How we balance machine intelligence with human intuition to
              create authentic identity systems.
            </p>
            <a className="font-bold text-ink hover:text-primary transition-colors flex items-center gap-xs" href="#">
              Read Article
              <ChevronRight className="text-sm w-4 h-4" />
            </a>
          </article>
          <article className="bg-surface p-lg rounded-xl border border-fog flex flex-col h-full hover:border-mist transition-colors">
            <span className="text-primary font-mono text-[10px] mb-sm bg-purple-xpale px-sm py-1 w-fit rounded">
              TRENDS
            </span>
            <h4 className="font-h4 text-h4 mb-md">Corporate Modernism in 2025</h4>
            <p className="text-slate font-body-sm mb-lg flex-grow">
              A look at the evolving aesthetics of the modern corporate
              environment and functional utility.
            </p>
            <a className="font-bold text-ink hover:text-primary transition-colors flex items-center gap-xs" href="#">
              Read Article
              <ChevronRight className="text-sm w-4 h-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

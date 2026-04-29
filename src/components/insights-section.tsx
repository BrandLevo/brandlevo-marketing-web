import { ChevronRight } from "lucide-react";

const articles = [
  {
    tag: "LOCAL SEO",
    title: "Why Your Google Reviews Aren't Enough to Win Online",
    body: "High ratings build trust — but without a website and SEO, you're invisible to the 68% of customers who search before they buy.",
    href: "#",
  },
  {
    tag: "AEO",
    title: "AEO: The New SEO Your Competitors Don't Know About Yet",
    body: "As AI search engines become mainstream, businesses that optimise for answer engines will own the next decade of local search.",
    href: "#",
  },
  {
    tag: "WEB DESIGN",
    title: "What Makes a Local Business Website Actually Convert",
    body: "Most local business sites look fine but convert at under 1%. Here's the specific anatomy of a site that turns visitors into customers.",
    href: "#",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-xxxl px-lg bg-surface" id="insights">
      <div className="max-w-container-max mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-xxl">
          <div>
            <span className="text-eyebrow text-primary block mb-md">INSIGHTS</span>
            <h2 className="text-h2 text-ink max-w-sm">
              Straight talk on digital growth for local businesses.
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-sm font-bold text-ink hover:text-primary transition-colors"
          >
            All Articles
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {articles.map((a) => (
            <article
              key={a.title}
              className="bg-snow border border-fog rounded-xl p-lg flex flex-col hover:border-mist transition-colors group cursor-pointer bento-card"
            >
              <span className="text-eyebrow text-primary bg-purple-xpale px-sm py-xs rounded w-fit mb-lg">
                {a.tag}
              </span>
              <h4 className="text-h4 text-ink mb-md group-hover:text-primary transition-colors">
                {a.title}
              </h4>
              <p className="text-body-sm text-slate mb-lg flex-grow">{a.body}</p>
              <a
                href={a.href}
                className="font-bold text-ink hover:text-primary transition-colors flex items-center gap-xs text-body-sm"
              >
                Read Article
                <ChevronRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

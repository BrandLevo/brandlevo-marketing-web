import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>Why AI Search Is Now Your Customers' First Stop</H2>
      <AnswerCapsule>
        When a potential customer needs a plumber, web designer, or solicitor, an increasing number
        now ask an AI tool first instead of typing a search query. ChatGPT, Perplexity, and Google
        AI Overviews return specific business recommendations. Getting your local business visible
        on these platforms requires a different strategy than traditional SEO — and most businesses
        haven't implemented it yet.
      </AnswerCapsule>
      <P>
        The good news: local AI search queries have far less competition than national ones. The
        businesses that optimise for local AI visibility now will dominate their categories for
        years. The window is open — and most of your competitors haven't walked through it yet.
      </P>

      <H2>How Each AI Platform Works for Local Businesses</H2>
      <AnswerCapsule>
        Each AI platform pulls from different sources. Google AI Overviews draw from indexed web
        content with FAQ schema. ChatGPT pulls from training data and live web search, weighting
        directories and reviews. Perplexity uses real-time search and cites sources directly,
        favouring clearly structured pages. The foundational strategy is the same for all three —
        but the timelines to visibility differ.
      </AnswerCapsule>

      <H3>Google AI Overviews</H3>
      <P>
        Google AI Overviews appear above organic search results for informational and local intent
        queries. They pull from indexed web content, prioritising pages with strong E-E-A-T signals,
        FAQ schema, and clear Answer Capsule formatting. If your website is indexed, has FAQ schema,
        and contains content that directly answers relevant queries, it can appear in AI Overviews
        within 60–90 days of implementation.
      </P>

      <H3>ChatGPT</H3>
      <P>
        ChatGPT's business recommendations come from two sources: its training data (which includes
        web content, directories, and review platforms) and, when using the browsing feature, live
        web searches. To appear in ChatGPT recommendations, your business needs consistent citations
        across major directories, positive review volume on Google and Yelp, and content on your
        website that explicitly describes your service and location.
      </P>

      <H3>Perplexity</H3>
      <P>
        Perplexity uses real-time web search and cites sources directly. It responds well to pages
        that contain clear, structured answers to questions and that have been indexed and assigned
        authority by search engines. FAQ schema and Answer Capsule formatting are particularly
        effective for Perplexity visibility.
      </P>

      <H2>The Six Steps to Local AI Visibility</H2>
      <AnswerCapsule>
        The six steps to local AI visibility in priority order: claim and complete every major
        directory, add FAQPage schema to your core pages, rewrite service pages with Answer Capsule
        format, build Organisation schema with social links, generate and manage reviews
        consistently, and earn third-party mentions from local news and industry publications.
      </AnswerCapsule>

      <H3>Step 1: Claim and Complete Every Major Directory</H3>
      <P>
        AI tools train on and search across directory platforms. Your business needs complete,
        consistent listings on Google Business Profile, Bing Places, Apple Maps, Yelp, Facebook,
        LinkedIn, and any niche directories in your industry. Use identical NAP (Name, Address,
        Phone) across all platforms — inconsistency reduces the confidence AI tools have in your
        data.
      </P>

      <H3>Step 2: Add FAQ Schema to Your Core Pages</H3>
      <P>
        FAQPage JSON-LD schema is the highest-impact single AEO action. It explicitly marks your
        Q&amp;A content so AI tools can extract and cite it with confidence. Add it to your
        homepage, service pages, and any article pages. Google has confirmed that pages with FAQ
        schema are significantly more likely to appear in AI Overviews.
      </P>

      <H3>Step 3: Structure Every Page with Answer Capsules</H3>
      <P>
        Rewrite your service page and article introductions to lead with a direct, 40–60 word answer
        to the most common question about that service or topic. This is the paragraph AI tools
        extract. The answer capsule should be self-contained — a reader (or AI) should be able to
        understand the core point without reading anything else on the page.
      </P>

      <H3>Step 4: Build Organisation Schema</H3>
      <P>
        Organisation schema in your website's{" "}
        <code className="text-primary bg-primary/8 px-sm py-[2px] rounded text-body-sm font-mono">&lt;head&gt;</code>{" "}
        tells AI tools who you are as an entity — your name, URL, logo, and social profiles.
        Including your social profile URLs in the <code className="text-primary bg-primary/8 px-sm py-[2px] rounded text-body-sm font-mono">sameAs</code>{" "}
        field connects your website entity to your profiles across the web, increasing the
        confidence AI tools have when recommending you.
      </P>

      <H3>Step 5: Generate and Manage Reviews Consistently</H3>
      <P>
        Reviews are a primary trust signal for AI recommendations. ChatGPT training data includes
        review platforms; Perplexity surfaces live reviews in its answers. Businesses with 50+
        Google reviews and consistent 4.5+ ratings appear more frequently in AI recommendations for
        local service queries than those with fewer or no reviews. Build a systematic review
        generation process into your customer workflow.
      </P>

      <H3>Step 6: Earn Third-Party Mentions</H3>
      <P>
        Getting your business mentioned in local news coverage, industry publications, and
        authoritative directories builds the external validation AI tools use to confirm your
        authority. A local business featured in a city business journal or a trade association
        website receives a significant boost to AI recommendation frequency compared to businesses
        with no external mentions.
      </P>

      <H2>Monitoring Your AI Visibility</H2>
      <AnswerCapsule>
        Track your AI search presence monthly using four methods: manually test 5–10 target queries
        in Google, ChatGPT, and Perplexity; check Google Search Console AI Overviews impressions;
        use the Google Rich Results Test to confirm schema is valid; and log which platforms mention
        your business. AI visibility compounds — once earned, citations reinforce future citations.
      </AnswerCapsule>
      <UL>
        <LI>Test 5–10 target queries in Google, ChatGPT, and Perplexity each month</LI>
        <LI>Check Google Search Console → Performance → AI Overviews for impression data</LI>
        <LI>Log which platforms mention your business and which don't</LI>
        <LI>When you start appearing, note the content that earned the citation and replicate the format</LI>
      </UL>
      <P>
        AI search visibility compounds: once you earn a citation, the increased traffic and
        engagement reinforce your authority, making future citations more likely. Start the compound
        effect now.
      </P>
    </>
  );
}

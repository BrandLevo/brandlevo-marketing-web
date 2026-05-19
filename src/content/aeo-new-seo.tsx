import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>What Is AEO and Why Does It Matter Now?</H2>
      <AnswerCapsule>
        AEO (Answer Engine Optimization) is the practice of structuring your website content so
        that AI-powered search tools — including ChatGPT, Perplexity, Google AI Overviews, and
        Claude — cite your business when generating answers to user questions. Unlike traditional
        SEO, which gets you into the list of results, AEO gets you cited as the answer itself.
        It's the fastest-growing digital marketing discipline of 2025–2026.
      </AnswerCapsule>
      <P>
        In 2025, Google AI Overviews appear in more than half of all searches. ChatGPT processes
        over 800 million queries per month. The users asking these AI tools "who's the best
        [service] in [city]?" are high-intent buyers — and the AI answers with one business, not
        ten links. That business is determined by content structure, schema markup, and digital
        authority — not just keyword rankings.
      </P>

      <H2>How AI Engines Choose Which Businesses to Cite</H2>
      <AnswerCapsule>
        AI engines don't rank pages — they extract answers. When a user asks "what's the best web
        design agency in Manchester?", the AI searches for a page that clearly and authoritatively
        answers that question. It favours content with direct 40–60 word answers, FAQ schema
        markup, authoritative backlinks, fresh content, and a complete indexed domain. Those who
        structure content this way get cited; those who don't are invisible.
      </AnswerCapsule>
      <P>
        Businesses that structure their content this way get cited. Those that don't — even if
        they rank #1 in traditional search — are often invisible in AI-generated answers.
      </P>
      <UL>
        <LI>Provides a direct, concise answer within the first paragraph of each section</LI>
        <LI>Uses FAQ schema markup (JSON-LD) to signal structured Q&amp;A content</LI>
        <LI>Has been cited by other authoritative sources (backlinks, mentions)</LI>
        <LI>Belongs to a domain Google has indexed and given authority signals</LI>
        <LI>Has fresh, recently updated content with clear author attribution</LI>
      </UL>

      <H2>The Three Pillars of AEO</H2>
      <AnswerCapsule>
        AEO rests on three pillars that must work together: Answer Capsule content structure
        (direct 40–60 word answers after every H2), JSON-LD schema markup (especially FAQPage
        schema, which increases AI Overview appearances by 60%), and entity authority building
        (getting your business mentioned and verified across multiple independent sources so AI
        tools cite you with confidence).
      </AnswerCapsule>

      <H3>Pillar 1: Answer Capsule Content Structure</H3>
      <P>
        Every page and article should open each section with a direct 40–60 word answer to the
        question the heading poses. This "answer capsule" is what AI engines extract and quote.
        After the direct answer, provide supporting context, evidence, and examples. The AI reads
        the capsule; humans read everything else.
      </P>

      <H3>Pillar 2: JSON-LD Schema Markup</H3>
      <P>
        Schema markup is code that tells search engines and AI tools exactly what your content is.
        FAQPage schema, in particular, has been shown to increase AI Overview appearances by 60%.
        Adding Article, Organization, LocalBusiness, and Service schema gives AI engines the
        metadata they need to confidently cite your content. Without schema, AI tools have to
        guess — and they often guess wrong or skip your page entirely.
      </P>

      <H3>Pillar 3: Entity and Authority Building</H3>
      <P>
        AI engines trust entities they've seen corroborated across multiple sources. Getting your
        business mentioned on local news sites, industry directories, Wikipedia, and social
        platforms builds the entity recognition that makes AI tools confident enough to cite you.
        This is the offline component of AEO — the digital PR that signals to AI engines that your
        business is real, established, and trustworthy.
      </P>

      <H2>Your First AEO Actions</H2>
      <AnswerCapsule>
        Start with these four AEO actions in order: add FAQPage JSON-LD schema to your top five
        pages (highest single-step impact), rewrite service page introductions with a direct 50-word
        answer, add Organization schema with social profile links to your homepage, and complete or
        update your Google Business Profile. These four steps alone produce visible AI citation
        results within 60–90 days.
      </AnswerCapsule>
      <OL>
        <OLI>
          <Strong>Add FAQPage JSON-LD schema</Strong> to your top five pages — the single
          highest-impact AEO action available
        </OLI>
        <OLI>
          <Strong>Rewrite your service page introductions</Strong> to lead with a direct 50-word
          answer to the most common question customers ask about that service
        </OLI>
        <OLI>
          <Strong>Add Organization schema</Strong> to your homepage with your social profile links
          in the <code className="text-primary bg-primary/8 px-sm py-[2px] rounded text-body-sm font-mono">sameAs</code> field
        </OLI>
        <OLI>
          <Strong>Create or update your Google Business Profile</Strong> with complete information —
          GBP is a major data source for Google AI responses about local businesses
        </OLI>
      </OL>

      <H2>The Competitive Window</H2>
      <P>
        The businesses that implement AEO now will hold a significant advantage for years. AI search
        is growing faster than any previous digital marketing channel, and the citation slots for
        any given local category are limited. Once a competitor earns the citation, they receive a
        compounding authority advantage that becomes harder to displace over time. The best time
        to start is before your competitors do.
      </P>
    </>
  );
}

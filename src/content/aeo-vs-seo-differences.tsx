/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong, Table, THead, TBody, TR, TH, TD } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>SEO and AEO: A Clear Definition</H2>
      <AnswerCapsule>
        SEO (Search Engine Optimization) improves your ranking in traditional blue-link search
        results. AEO (Answer Engine Optimization) gets your content cited by AI tools — ChatGPT,
        Perplexity, Google AI Overviews — when they generate answers. SEO earns you a position in
        a list. AEO earns you the answer itself. Both are essential in 2026.
      </AnswerCapsule>
      <P>
        Both matter in 2026 — and they work best together. Understanding the difference helps you
        prioritise the right actions at the right stage of your business's digital presence.
      </P>

      <H2>How SEO Works</H2>
      <AnswerCapsule>
        Traditional SEO improves your visibility in the ranked list of links that search engines
        return for a given query. It works by signalling content relevance through keywords and
        headings, authority through backlinks, and trust through technical quality. A well-executed
        SEO strategy gets your business to page one — where potential customers can click through.
      </AnswerCapsule>
      <P>The main ranking factors are:</P>
      <UL>
        <LI>Technical website quality (speed, mobile-friendliness, crawlability)</LI>
        <LI>On-page content relevance (keywords, headings, semantic structure)</LI>
        <LI>Authority signals (backlinks from other websites)</LI>
        <LI>User experience signals (click-through rate, dwell time)</LI>
        <LI>Local signals (Google Business Profile, NAP citations) for local queries</LI>
      </UL>

      <H2>How AEO Works</H2>
      <AnswerCapsule>
        AEO optimises for AI-generated answers rather than ranked links. When a user asks an AI
        tool "who is the best accountant in Bristol?", the AI generates a direct answer citing
        specific businesses. AEO structures your content — using Answer Capsule format, JSON-LD
        schema, and entity signals — so AI tools select and cite your business in that answer.
      </AnswerCapsule>
      <P>The key AEO signals are:</P>
      <UL>
        <LI>Content structure (Answer Capsule format — 40–60 word direct answers at the start of each section)</LI>
        <LI>Schema markup (FAQPage, Organization, LocalBusiness, Article JSON-LD)</LI>
        <LI>Entity recognition (consistent citations, social profiles, third-party mentions)</LI>
        <LI>Content freshness and E-E-A-T signals (author credentials, update dates)</LI>
      </UL>

      <H2>Key Differences Side by Side</H2>
      <AnswerCapsule>
        The core difference: SEO gets you into a ranked list that users browse; AEO gets you cited
        as the direct answer that AI generates. SEO optimises for algorithms; AEO optimises for AI
        extraction. SEO timeline is 4–12 weeks; AEO timeline is 60–90 days for Google AI and 3–6
        months for ChatGPT. Both compound over time.
      </AnswerCapsule>
      <Table>
        <THead>
          <TR>
            <TH>Factor</TH>
            <TH>SEO</TH>
            <TH>AEO</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Goal</TD>
            <TD>Rank in blue-link search results</TD>
            <TD>Be cited in AI-generated answers</TD>
          </TR>
          <TR>
            <TD>Platform</TD>
            <TD>Google, Bing, Yahoo</TD>
            <TD>Google AI Overviews, ChatGPT, Perplexity, Claude</TD>
          </TR>
          <TR>
            <TD>Key technical element</TD>
            <TD>Backlinks, page speed, title tags</TD>
            <TD>JSON-LD schema, Answer Capsule content</TD>
          </TR>
          <TR>
            <TD>Content format</TD>
            <TD>Keyword-optimised, comprehensive</TD>
            <TD>Direct answers, FAQ structure</TD>
          </TR>
          <TR>
            <TD>Timeline</TD>
            <TD>4–12 weeks for movement</TD>
            <TD>60–90 days for AI Overviews, 3–6 months for ChatGPT</TD>
          </TR>
          <TR>
            <TD>Measurement</TD>
            <TD>Rank tracker, Google Search Console</TD>
            <TD>AI Overview impressions (GSC), manual testing</TD>
          </TR>
        </TBody>
      </Table>

      <H2>Which Should You Prioritise?</H2>
      <AnswerCapsule>
        Prioritise SEO first if your site is new (under 12 months) — AEO needs the indexed
        foundation SEO builds. If you have an established site with existing SEO, shift focus to
        AEO optimisations immediately. For businesses with capacity for both, integrate them from
        day one — every page you create should follow AEO structure, which is also good SEO.
      </AnswerCapsule>

      <H3>New or recently launched website (0–12 months old)</H3>
      <P>
        Prioritise SEO first. AI engines cite indexed, authoritative content — and you need SEO to
        build that foundation. Focus on getting indexed via Google Search Console, completing your
        Google Business Profile, building core citations, and publishing well-structured service
        pages. Add AEO elements (FAQ schema, Answer Capsule formatting) to everything you create
        from day one.
      </P>

      <H3>Established website with existing SEO (1+ years of history)</H3>
      <P>
        You likely have the indexed foundation AI needs. This is the right time to implement
        AEO-specific optimisations: FAQ schema across all key pages, Answer Capsule rewrites of
        your top service pages, Organization schema, and AEO-structured blog content targeting
        AI-heavy query types.
      </P>

      <H3>The combined strategy</H3>
      <P>
        For businesses with the capacity to invest in both simultaneously, the combined approach
        delivers the strongest results. Every page you create follows AEO content structure (which
        is also good SEO). Every technical change serves both goals — schema markup improves both
        AI citation eligibility and search result rich features. The strategies reinforce each other
        rather than competing for resources.
      </P>

      <H2>The Bottom Line</H2>
      <P>
        SEO and AEO are not competitors — they are layers of the same strategy. SEO builds the
        indexed foundation; AEO structures that foundation for AI citation. Businesses that treat
        them as integrated strategy rather than separate initiatives see compounding benefits from
        both simultaneously. The businesses winning in 2026 and beyond are doing both.
      </P>
    </>
  );
}

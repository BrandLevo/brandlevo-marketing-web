/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import { AnswerCapsule, H2, H3, P, UL, LI, OL, OLI, Strong, A } from "@/components/article-components";

export default function ArticleContent() {
  return (
    <>
      <H2>What Is Answer Engine Optimization?</H2>
      <AnswerCapsule>
        Answer Engine Optimization (AEO) is the practice of structuring your website content, schema
        markup, and digital presence so that AI-powered tools — including ChatGPT, Google AI Overviews,
        Perplexity, and Claude — select and cite your business as the answer when users ask questions
        in your service category.
      </AnswerCapsule>
      <P>
        In 2026, more than 55% of Google searches trigger an AI Overview — a generated answer that
        appears above all organic results. ChatGPT processes over 883 million queries per month. When
        a potential customer asks <em>"who is the best web designer in Manchester?"</em> or{" "}
        <em>"what should I look for in a local SEO agency?"</em>, AI tools answer with specific
        businesses and sources. AEO determines whether your business is one of them.
      </P>

      <H2>Why AI Engines Choose Some Businesses and Not Others</H2>
      <AnswerCapsule>
        AI engines don't browse a list of results and pick randomly. They look for content that answers
        the user's question clearly, authoritatively, and in a structured format they can extract with
        confidence. Businesses that structure their content correctly earn citations — those that don't
        are often invisible in AI-generated answers, even if they rank #1 in traditional search.
      </AnswerCapsule>
      <P>Specifically, AI engines favour pages that have:</P>
      <UL>
        <LI>A direct, concise answer in the first 40–60 words of each section</LI>
        <LI>Content with FAQPage JSON-LD schema markup</LI>
        <LI>Businesses with consistent citations across the web (NAP consistency)</LI>
        <LI>Pages that have earned links and mentions from authoritative sources</LI>
        <LI>Fresh, regularly updated content with clear author attribution</LI>
        <LI>Organisation schema that establishes a clear entity identity</LI>
      </UL>

      <H2>The Three Core Pillars of AEO</H2>
      <AnswerCapsule>
        AEO rests on three reinforcing pillars: Answer Capsule content format (direct 40–60 word
        answers after every heading), JSON-LD structured data (especially FAQPage schema), and entity
        authority building (consistent citations and third-party mentions). All three must work
        together — any one pillar alone is not sufficient.
      </AnswerCapsule>

      <H3>Pillar 1: Answer Capsule Content Format</H3>
      <P>
        The Answer Capsule is the foundational AEO content technique. Every section of every page
        should open with a 40–60 word direct answer to the question the heading poses. This is the
        paragraph AI engines extract. Following the capsule, provide supporting evidence, context,
        examples, and data. The capsule earns the citation; everything else builds the authority that
        makes the citation more likely.
      </P>

      <H3>Pillar 2: JSON-LD Structured Data</H3>
      <P>
        Schema markup is code that tells search engines and AI tools exactly what your content is.
        For AEO, the most critical schema types are:
      </P>
      <UL>
        <LI>
          <Strong>FAQPage</Strong> — marks up your Q&amp;A content for direct AI extraction (pages
          with FAQPage schema are 60% more likely to appear in AI Overviews)
        </LI>
        <LI>
          <Strong>Organization</Strong> — establishes your entity identity with social profiles and
          contact information
        </LI>
        <LI>
          <Strong>LocalBusiness</Strong> — signals your geographic service area for local queries
        </LI>
        <LI>
          <Strong>Article</Strong> — marks up blog content with author, date, and publisher
        </LI>
        <LI>
          <Strong>Service</Strong> — describes individual services with clear names and descriptions
        </LI>
      </UL>

      <H3>Pillar 3: Entity Authority Building</H3>
      <P>
        AI engines trust entities they've seen verified across multiple independent sources. Your
        business needs to be mentioned, linked to, and described consistently across news sites,
        industry directories, social profiles, and authoritative third-party publications. This is
        the offline component of AEO — the digital PR that builds the entity recognition AI tools
        need to confidently cite you.
      </P>

      <H2>AEO Implementation: Where to Start</H2>
      <AnswerCapsule>
        Start with the four highest-impact AEO actions in order: add FAQPage JSON-LD schema to your
        top five pages, rewrite page introductions using the Answer Capsule format, add Organization
        schema with social profile links to your homepage, and complete your Google Business Profile
        to 100%. These four steps alone will produce visible results within 60–90 days.
      </AnswerCapsule>
      <OL>
        <OLI>
          <Strong>Add FAQPage JSON-LD schema</Strong> to your top five pages — the highest
          single-step impact available
        </OLI>
        <OLI>
          <Strong>Rewrite your page introductions</Strong> using the Answer Capsule format (40–60
          word direct answer at the top of every section)
        </OLI>
        <OLI>
          <Strong>Add Organization schema</Strong> to your homepage with <code>sameAs</code> social
          profile links — this builds entity recognition
        </OLI>
        <OLI>
          <Strong>Complete your Google Business Profile</Strong> to 100% — a primary data source
          for Google AI responses about local businesses
        </OLI>
        <OLI>
          <Strong>Publish AEO-structured articles</Strong> targeting the questions your ideal
          customers ask AI tools
        </OLI>
        <OLI>
          <Strong>Build consistent local citations</Strong> across the major directory platforms
        </OLI>
      </OL>

      <H2>Tracking AEO Results</H2>
      <AnswerCapsule>
        AEO results aren't tracked in a traditional rank tracker. Use Google Search Console's AI
        Overviews report, manual testing in Google, ChatGPT, and Perplexity weekly, and the Google
        Rich Results Test to validate your schema. Results typically begin appearing in Google AI
        Overviews within 60–90 days and in ChatGPT and Perplexity within 3–6 months.
      </AnswerCapsule>
      <UL>
        <LI>
          <Strong>Google Search Console → Performance → AI Overviews</Strong> — shows queries where
          your site appears in AI-generated answers
        </LI>
        <LI>
          <Strong>Manual testing</Strong> — search your target queries in Google, ChatGPT, and
          Perplexity weekly and note when your business appears
        </LI>
        <LI>
          <Strong>Google Rich Results Test</Strong> — validates your schema markup is correctly
          implemented and eligible for AI features
        </LI>
      </UL>

      <H2>The Competitive Opportunity</H2>
      <P>
        The majority of local businesses have not yet implemented AEO. The businesses that do so
        first will hold compounding citation authority that becomes progressively harder for
        competitors to displace. The citation slot in a given local category isn't infinite — early
        movers earn disproportionate returns. If your competitors aren't doing this yet, now is
        precisely the time to start.
      </P>
    </>
  );
}

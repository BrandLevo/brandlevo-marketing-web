import type { Faq } from "./faq-data";

const SITE_URL = "https://brandlevo.com";
const SITE_NAME = "BrandLevo";
// TODO: Export a PNG version of the logo at /public/logo.png (112×112px min, square)
// Google Rich Results requires PNG/JPEG for Organization logo schema — SVG is not supported
const LOGO_URL = `${SITE_URL}/logo.png`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    // TODO [SOCIAL]: Replace with real profile URLs — must match footer.tsx social links
    sameAs: [
      "https://twitter.com/brandlevo", // TODO: verify handle
      "https://linkedin.com/company/brandlevo", // TODO: verify handle
      "https://facebook.com/brandlevo", // TODO: verify handle
      "https://instagram.com/brandlevo", // TODO: verify handle
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "sales@brandlevo.com",
      availableLanguage: "English",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/og-default.jpg`,
    description:
      "BrandLevo is an AI-powered digital marketing agency specialising in AEO, SEO, website development, and brand growth for local businesses.",
    email: "sales@brandlevo.com",
    sameAs: [
      "https://twitter.com/brandlevo",
      "https://linkedin.com/company/brandlevo",
    ],
    areaServed: ["UK", "US", "Canada", "Australia", "UAE"],
    knowsAbout: [
      "Answer Engine Optimization",
      "SEO",
      "Local SEO",
      "Website Development",
      "Brand Identity",
      "Content Marketing",
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export type ArticleData = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  authorName: string;
  authorUrl: string;
};

export function articleSchema(article: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.authorName,
      url: article.authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    image: `${SITE_URL}/og-default.jpg`,
  };
}

export type BreadcrumbItem = { name: string; item: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export type ServiceData = {
  name: string;
  description: string;
  url: string;
};

export function serviceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function collectionPageSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export type PersonData = {
  name: string;
  jobTitle: string;
  url: string;
  worksFor?: string;
};

export function personSchema(person: PersonData) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    worksFor: {
      "@type": "Organization",
      name: person.worksFor ?? SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

export function schemaScript(data: object) {
  return JSON.stringify(data);
}

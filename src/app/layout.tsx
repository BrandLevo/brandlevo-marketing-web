import type { Metadata } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import { organizationSchema, schemaScript } from "@/lib/schema";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

// ─── IMAGE FILES REQUIRED BEFORE LAUNCH ──────────────────────────────────────
// TODO [IMAGE]: /public/og-default.jpg — 1200×630px JPEG
//   Brand background (purple #7B45F5) + BrandLevo logo + tagline
//   Used by: OpenGraph (all pages), Twitter card, AI preview thumbnails
//
// TODO [IMAGE]: /src/app/favicon.ico — Replace current default Next.js favicon
//   Multi-size ICO: 16×16 + 32×32 (use the "B" mark or full logomark)
//   Tool: https://favicon.io or export from Figma
//
// TODO [IMAGE]: /src/app/icon.png — 192×192px PNG
//   Used by Android/Chrome as the site icon in bookmarks and PWA
//
// TODO [IMAGE]: /src/app/apple-icon.png — 180×180px PNG
//   Used by iOS when user adds site to home screen
//
// TODO [IMAGE]: /public/logo.png — 112×112px PNG (square, transparent bg)
//   Required by Google Rich Results for Organization/Article schema
//   schema.ts references this — SVG is NOT accepted by Google's schema validator
//   Export from /public/logo.svg at 2× (224×224) then downscale
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://brandlevo.com"),
  title: {
    default: "BrandLevo | AI-Powered Brand Growth Partner",
    template: "%s | BrandLevo",
  },
  description:
    "BrandLevo — AI-powered websites, AEO, and local SEO for businesses in Kochi and Kerala. Get found on Google and AI search. Free audit call, results in 30 days.",
  keywords: ["AI marketing", "brand growth", "digital marketing", "local SEO", "AEO", "answer engine optimization", "brand identity"],
  alternates: {
    canonical: "/",
  },
  // TODO [IMAGE]: og-default.jpg must exist at /public/og-default.jpg before deploying
  openGraph: {
    title: "BrandLevo | AI-Powered Brand Growth Partner",
    description: "Where intelligence meets elevation. AI-driven marketing that delivers precision, growth, and measurable impact at every touchpoint.",
    type: "website",
    url: "https://brandlevo.com",
    siteName: "BrandLevo",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "BrandLevo — AI-Powered Brand Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandLevo | AI-Powered Brand Growth Partner",
    description: "Where intelligence meets elevation. AI-driven marketing that delivers precision, growth, and measurable impact at every touchpoint.",
    images: ["/og-default.jpg"],
  },
  // TODO [TRACKING]: Uncomment and replace with real GSC verification token after adding site to Google Search Console
  // verification: { google: "PLACEHOLDER_GSC_VERIFICATION_TOKEN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${poppins.variable} scroll-smooth dark`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased min-h-screen font-body text-on-surface">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaScript(organizationSchema()) }}
        />
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
        <script
          id="hs-script-loader"
          type="text/javascript"
          src="https://js-na2.hs-scripts.com/246165066.js"
          async
          defer
        />
      </body>
    </html>
  );
}

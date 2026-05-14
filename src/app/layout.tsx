import type { Metadata } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";

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

export const metadata: Metadata = {
  title: "BrandLevo | AI-Powered Brand Growth Partner",
  description:
    "BrandLevo is the AI-powered digital marketing engine that lifts your brand higher with smarter campaigns, sharper insights, and unstoppable growth — all on autopilot.",
  keywords: ["AI marketing", "brand growth", "digital marketing", "local SEO", "brand identity"],
  openGraph: {
    title: "BrandLevo | AI-Powered Brand Growth Partner",
    description: "Where intelligence meets elevation. AI-driven marketing that delivers precision, growth, and measurable impact at every touchpoint.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen font-body text-on-surface">
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}

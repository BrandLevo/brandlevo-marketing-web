import type { Metadata } from "next";
import { Syne, Epilogue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ── Fonts loaded via next/font/google (self-hosted, no external requests)
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-epilogue",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrandLevo | Intelligence for the Next Era of Branding",
  description:
    "We blend systematic design logic with strategic intuition to build identities that don't just exist—they command attention and drive exponential growth.",
  keywords: ["brand agency", "brand strategy", "design systems", "brand identity"],
  openGraph: {
    title: "BrandLevo | Intelligence for the Next Era of Branding",
    description: "Systematic design solutions for the next era of branding.",
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
      className={`${syne.variable} ${epilogue.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen font-body text-on-surface">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrandLevo | Websites That Bring Local Businesses Customers",
  description:
    "We build websites for local businesses that are invisible online. SEO, AEO, and digital marketing — so the phone rings and bookings come in.",
  keywords: ["local business website", "small business web design", "local SEO", "digital marketing"],
  openGraph: {
    title: "BrandLevo | Websites That Bring Local Businesses Customers",
    description: "We build websites for local businesses that are invisible online.",
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
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen font-body text-on-surface">
        {children}
      </body>
    </html>
  );
}

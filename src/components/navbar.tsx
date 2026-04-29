import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about-us" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Thin brand accent line */}
      <div className="h-[3px] bg-primary w-full" />

      <div className="max-w-container-max mx-auto px-lg">
        <div className="h-16 flex items-center justify-between gap-xl">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Original.svg" alt="BrandLevo" className="h-9 w-auto" />
          </Link>

          {/* Nav pill — desktop */}
          <nav className="hidden md:flex items-center gap-sm bg-snow border border-fog rounded-full px-lg py-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-body-sm text-slate hover:text-primary font-medium transition-colors px-sm py-xs rounded-full hover:bg-purple-xpale"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-md">
            <a
              href="tel:+15551234567"
              className="hidden lg:flex items-center gap-xs text-body-sm text-slate hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              +1 (555) 123-4567
            </a>
            <Link
              href="#audit"
              className="hidden md:inline-flex items-center bg-primary text-white px-lg py-sm rounded-full font-semibold text-body-sm hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 shadow-sm"
            >
              Book a Free Call
            </Link>
            <button className="md:hidden text-slate hover:text-primary transition-colors p-xs">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

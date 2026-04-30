import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-fog/60">
      <div className="max-w-container-max mx-auto px-xl">
        <div className="pt-lg pb-lg flex items-center justify-between gap-xl">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Original.svg" alt="BrandLevo" className="h-12 w-auto" />
          </Link>

          {/* Nav pill — desktop */}
          <nav className="hidden md:flex items-center gap-xs bg-snow border border-fog rounded-full px-md py-[6px]">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-body font-medium text-slate hover:text-primary transition-colors px-md py-[6px] rounded-full hover:bg-purple-xpale"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-md">
            <a
              href="tel:+15551234567"
              className="hidden lg:flex items-center gap-xs text-body text-slate hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-primary text-white px-lg py-[10px] rounded-full font-semibold text-body hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 shadow-sm"
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

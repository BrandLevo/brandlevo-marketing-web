import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <nav className="bg-surface/95 backdrop-blur-sm border-b border-fog sticky top-0 z-50">
      <div className="max-w-container-max mx-auto px-lg h-[72px] flex justify-between items-center w-full">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Original.svg" alt="BrandLevo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-xl">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate hover:text-primary font-body text-body-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <Link
            href="#audit"
            className="hidden md:inline-flex items-center bg-primary text-on-primary px-lg py-sm rounded-lg font-semibold text-body-sm hover:opacity-90 hover:-translate-y-px transition-all active:scale-95 shadow-sm"
          >
            Book a Free Call
          </Link>
          <button className="md:hidden text-slate hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

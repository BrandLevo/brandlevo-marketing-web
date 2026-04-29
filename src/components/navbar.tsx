import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <nav className="bg-surface/95 backdrop-blur-sm border-b border-fog sticky top-0 z-50">
      <div className="max-w-container-max mx-auto px-lg h-20 flex justify-between items-center w-full">
        <Link href="/" className="text-2xl font-bold text-primary font-display tracking-tight">
          BrandLevo
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
            href="#contact"
            className="hidden md:block text-body-sm font-medium text-ink hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#audit"
            className="bg-primary text-on-primary px-lg py-sm rounded-lg font-bold hover:opacity-90 transition-opacity active:scale-95"
          >
            Free Audit
          </Link>
          <button className="md:hidden text-slate hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

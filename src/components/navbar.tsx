import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-surface border-b border-fog shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex justify-between items-center w-full">
        <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 font-['Syne'] tracking-tight">
          BrandLevo
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-violet-600 dark:text-violet-400 border-b-2 border-violet-600 dark:border-violet-400 pb-1 font-bold font-['Syne'] tracking-tight"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 font-medium font-['Syne'] tracking-tight transition-opacity hover:opacity-80"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 font-medium font-['Syne'] tracking-tight transition-opacity hover:opacity-80"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 font-medium font-['Syne'] tracking-tight transition-opacity hover:opacity-80"
            href="#"
          >
            Case Studies
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 font-medium font-['Syne'] tracking-tight transition-opacity hover:opacity-80"
            href="#"
          >
            Blog
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300 font-medium font-['Syne'] tracking-tight transition-opacity hover:opacity-80"
            href="#"
          >
            Resources
          </Link>
        </div>
        <Button className="bg-primary px-lg py-sm rounded-lg text-on-primary font-bold hover:opacity-80 transition-opacity active:scale-95 duration-150 ease-in-out">
          Get Started
        </Button>
      </div>
    </nav>
  );
}

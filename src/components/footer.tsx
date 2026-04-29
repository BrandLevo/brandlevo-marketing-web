import { Globe, Terminal, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 full-width bottom border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        <div className="flex flex-col items-center md:items-start gap-md">
          <div className="text-xl font-bold text-violet-600 dark:text-violet-400 font-['Syne']">
            BrandLevo
          </div>
          <p className="text-slate-500 dark:text-slate-500 font-['Syne'] text-sm max-w-xs text-center md:text-left">
            © 2024 BrandLevo. Professional, systematic, and highly functional.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 font-['Syne'] text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-400" href="#">Privacy Policy</a>
          <a className="text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 font-['Syne'] text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-400" href="#">Terms of Service</a>
          <a className="text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 font-['Syne'] text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-400" href="#">Contact Us</a>
          <a className="text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 font-['Syne'] text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-400" href="#">Cookie Settings</a>
        </div>
        <div className="flex gap-md">
          <Globe className="text-slate cursor-pointer hover:text-primary transition-colors w-6 h-6" />
          <Terminal className="text-slate cursor-pointer hover:text-primary transition-colors w-6 h-6" />
          <Share2 className="text-slate cursor-pointer hover:text-primary transition-colors w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}

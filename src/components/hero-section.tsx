import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-xxxl pb-xxl px-lg bg-snow">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 items-center gap-xl">
        <div className="z-10">
          <span className="font-eyebrow text-eyebrow text-primary uppercase mb-md block">
            Innovation through identity
          </span>
          <h1 className="font-h1 text-h1 text-ink mb-lg">
            Intelligence for the Next Era of
            <span className="text-primary"> Branding.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-slate max-w-lg mb-xxl">
            We blend systematic design logic with strategic intuition to build
            identities that don&apos;t just exist—they command attention and drive
            exponential growth.
          </p>
          <div className="flex items-center gap-md">
            <button className="bg-primary text-on-primary px-xl py-md rounded-lg font-bold shadow-md hover:opacity-90 transition-all cursor-pointer">
              View Portfolio
            </button>
            <button className="border border-mist text-ink px-xl py-md rounded-lg font-bold hover:bg-purple-xpale transition-all cursor-pointer">
              Our Process
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl purple-glow relative">
            <Image
              alt="Abstract 3D rendering"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa639eI2IWpe9bgLlrazPLPLKtvOx7quSn5lOVYZltri3x5mziKw9rdZ0nh2rYXCPezuHZt8uO5dAo2iel9sn7tw0hbd5gNQntFxxqf5oHvJh4C6B2Za6PSvjesrSNZ6MzZ6vMhIisKe6OehP-wmBhMW5Pt1uiU-xsUZTIIiWFLyI-jmuCB81UEjkZcP2DsVrpgXVD5xLluX3FUcRbuQP1D1Kk5tvWsf9mrKvFGU7_DW96Kx88XCi7sqlTnIN7B4e1tug_ZGaQaC0"
              fill
              unoptimized
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-sm -left-sm bg-surface p-lg rounded-xl shadow-xl border border-fog max-w-[200px]">
            <div className="flex items-center gap-sm mb-xs">
              <BadgeCheck className="text-mint fill-mint w-6 h-6" />
              <span className="font-eyebrow text-eyebrow">ELITE PARTNER</span>
            </div>
            <p className="font-body-sm text-body-sm text-ink">
              Trusted by 50+ Global Enterprises
            </p>
          </div>
        </div>
      </div>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-0 opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary rounded-full blur-[120px] -mr-40 -mt-40"></div>
      </div>
    </section>
  );
}

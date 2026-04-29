import Image from "next/image";

export default function CaseStudiesSection() {
  return (
    <section className="py-xxxl px-lg bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-xxl">
          <div>
            <span className="font-eyebrow text-eyebrow text-primary">PORTFOLIO</span>
            <h2 className="font-h2 text-h2 mt-sm">Featured Case Studies</h2>
          </div>
          <button className="hidden md:block font-bold text-ink border-b-2 border-primary pb-1 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer">
            View All Work
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Case 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-lg relative">
              <Image
                alt="Case Study 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvX4a3AVrC96Pso9B37Aiv6sHouK3wvUUcvVqrJhbzsi9SdwBGkxlRLIxw7iRzEiF16-VbZFHKnye5jIi1_GpeXhQu89V3tAWEdFd7wX5AHgwByMe2L4H2xFM_lUhTbUjDkkxK6jt3DS4CGxCv2IMEZbfDpKDqJUw6moDU1Qv7BYlhr86HwxXLpglAZugMA9SZt1omCipttFNdsKgRMSsvsWM18NIxn0ZMEQ6fudZ3i_cPL-m8RCPS-zygt2hDODiJoYV5kcDmE2w"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-ink font-bold px-lg py-sm rounded-full shadow-lg">Read Story</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-h4 text-h4 mb-xs">NexGen Fintech Rebranding</h4>
                <p className="text-slate font-body-sm">Identity &amp; Strategy / 2024</p>
              </div>
            </div>
          </div>
          {/* Case 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-lg relative">
              <Image
                alt="Case Study 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeAeqwgMd8qgzbTT0TUQCeVgiS5VXHSWjGSKXGPrCpU09LHAbYij3jibBzV8osmkr7pnPTFENxAxpSnil41OaxD6_Tx5VJRecpzKMhteN-FeS5JqKNtbI4icLGVztsw6uThFNVFdgjzyVZq9GnnNgSPYqj3Xx9KcKGEmIkuDcfSSIpB9dO0FWM0544q5pzo5rXYws7-0EegV9md6IGCdA063fmQufX92rMzXKANVcUv5yTm65n0y6eYPnIMwS-d9Pc5Dd70JbqLAI"
                fill
                unoptimized
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-ink font-bold px-lg py-sm rounded-full shadow-lg">Read Story</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-h4 text-h4 mb-xs">Lumiere Architecture Hub</h4>
                <p className="text-slate font-body-sm">Digital Presence &amp; UI Systems / 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

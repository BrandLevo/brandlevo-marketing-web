export default function CtaSection() {
  return (
    <section className="py-xxxl px-lg">
      <div className="max-w-container-max mx-auto bg-primary rounded-3xl p-xl md:p-xxxl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-xl">
        <div className="z-10 relative">
          <h2 className="font-display text-h1 text-white mb-md">
            Build the future <br className="hidden md:block" />
            with us.
          </h2>
          <p className="text-purple-pale font-body-lg max-w-lg">
            Ready to transform your brand into a high-performance system?
            Let&apos;s begin the next chapter of your journey.
          </p>
        </div>
        <div className="z-10 relative">
          <button className="bg-white text-primary px-xxl py-lg rounded-xl font-bold text-lg hover:bg-snow active:scale-95 transition-all shadow-xl cursor-pointer border-none">
            Start a Project
          </button>
        </div>
        {/* Decorative Circle */}
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-purple-dark rounded-full opacity-50 blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}

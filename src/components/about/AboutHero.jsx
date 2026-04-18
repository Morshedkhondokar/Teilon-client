const AboutHero = () => {
  return (
    <section className="relative py-24 lg:py-32 border-b border-black/10 overflow-hidden">

      {/* ───── Background big text ───── */}
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] sm:text-[180px] lg:text-[240px] font-extrabold text-black/4 select-none whitespace-nowrap pointer-events-none z-0">
        FASHION
      </p>

      {/* ───── Content ───── */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-0">

        {/* Left — Headline */}
        <div className="flex-1">
          <p className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-gray-400 border border-black/10 px-4 py-1.5 rounded-full mb-8">
            Est. 2020 · Dhaka, Bangladesh
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-black leading-none tracking-tight">
            We Don't
            <br />
            <span className="relative inline-block">
              Follow
              {/* underline accent */}
              <span className="absolute -bottom-2 left-0 w-full h-1.25 bg-black rounded-full" />
            </span>
            <br />
            Trends.
          </h1>
        </div>

        {/* Right — details */}
        <div className="lg:w-80 shrink-0 flex flex-col gap-8">

          {/* Quote */}
          <div className="border-l-2 border-black pl-5">
            <p className="text-sm text-gray-500 leading-relaxed italic">
              "We set out to prove that premium fashion doesn't have to come
              with a premium price tag. Style is a right, not a privilege."
            </p>
            <p className="text-xs font-bold text-black mt-3 tracking-widest uppercase">
              — Founder, 2020
            </p>
          </div>

          {/* Two quick stats */}
          <div className="flex gap-6">
            <div>
              <p className="text-3xl font-extrabold text-black">50K+</p>
              <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">Customers</p>
            </div>
            <div className="w-px bg-black/10" />
            <div>
              <p className="text-3xl font-extrabold text-black">10K+</p>
              <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">Products</p>
            </div>
          </div>

          {/* CTA */}
          
           <a href="/shop"
            className="inline-flex items-center gap-3 bg-black text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-800 transition-all w-fit group"
          >
            Explore Collection
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

        </div>
      </div>

      {/* ───── Bottom image strip ───── */}
      <div className="relative z-10 mt-16 grid grid-cols-3 gap-3 h-48 sm:h-64">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
          alt="Fashion 1"
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
          alt="Fashion 2"
          className="w-full h-full object-cover rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
          alt="Fashion 3"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </section>
  );
};

export default AboutHero;
const AboutCTA = () => {
  return (
    <section className="py-24">

      {/* ───── Main CTA Box ───── */}
      <div className="relative bg-black rounded-3xl overflow-hidden px-8 sm:px-16 py-20 text-center">

        {/* ───── Background ghost text ───── */}
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] sm:text-[130px] lg:text-[180px] font-extrabold text-white/3 select-none whitespace-nowrap pointer-events-none">
          SHOP NOW
        </p>

        {/* ───── Background image ───── */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80"
            alt="CTA background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* ───── Content ───── */}
        <div className="relative z-10 flex flex-col items-center gap-8">

          {/* Label */}
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 border border-white/10 px-4 py-1.5 rounded-full">
            Start Exploring
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-2xl">
            Your Next Favorite <br />
            <span className="text-white/40">Outfit is Waiting.</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm text-white/50 max-w-md leading-relaxed">
            Over 10,000 styles across every category. New arrivals every week.
            Free returns. What are you waiting for?
          </p>

          {/* ───── Buttons ───── */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            
            <a  href="/shop"
              className="inline-flex items-center gap-3 bg-white text-black text-sm font-extrabold px-8 py-4 rounded-full hover:bg-gray-100 transition-all group"
            >
              Shop the Collection
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <a  href="/contact"
              className="inline-flex items-center gap-3 border border-white/20 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* ───── Trust line ───── */}
          <div className="flex items-center gap-6 mt-4">
            {["Free Shipping", "30-Day Returns", "24/7 Support"].map((item, i, arr) => (
              <div key={item} className="flex items-center gap-6">
                <span className="text-xs text-white/40 tracking-wide">{item}</span>
                {i !== arr.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutCTA;
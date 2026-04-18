const OurStory = () => {
  return (
    <section className="py-24 border-b border-black/10">

      {/* ───── Section Label ───── */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-8 h-px bg-black" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-400">
          Our Story
        </p>
      </div>

      {/* ───── Big Heading ───── */}
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-none tracking-tight mb-16">
        From a Small Room <br />
        <span className="text-gray-300">to 50,000 Families.</span>
      </h2>

      {/* ───── Main Content ───── */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* ───── Left: tall image ───── */}
        <div className="lg:w-5/12 w-full relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
            alt="Our store"
            className="w-full h-125 lg:h-155 object-cover rounded-3xl"
          />
          {/* Floating year card */}
          <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-4xl font-extrabold text-black leading-none">2020</p>
            <p className="text-xs text-gray-400 mt-1 tracking-widest uppercase">Founded</p>
          </div>
        </div>

        {/* ───── Right: timeline ───── */}
        <div className="lg:w-7/12 w-full flex flex-col justify-center gap-0">

          {[
            {
              year: "2020",
              title: "The Beginning",
              desc: "It all started in a small apartment in Dhaka. Our founder launched the first collection with just 12 products and a dream to make fashion accessible to everyone.",
            },
            {
              year: "2021",
              title: "Growing Fast",
              desc: "Word spread quickly. Within a year, we had served over 5,000 customers and expanded our catalog to 500+ products across 10 categories.",
            },
            {
              year: "2022",
              title: "Going Nationwide",
              desc: "We launched same-day delivery in Dhaka and 48-hour shipping across Bangladesh — making premium fashion reachable in every corner of the country.",
            },
            {
              year: "2024",
              title: "Where We Stand",
              desc: "Today, over 50,000 families trust us. 10,000+ products, 200+ brands, and a community that keeps growing — every single day.",
            },
          ].map((item, index, arr) => (
            <div key={item.year} className="flex gap-6 group">

              {/* ───── Timeline line + dot ───── */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-black mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                {index !== arr.length - 1 && (
                  <div className="w-px flex-1 bg-black/10 my-1" />
                )}
              </div>

              {/* ───── Content ───── */}
              <div className={`pb-10 ${index === arr.length - 1 ? "pb-0" : ""}`}>
                <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                  {item.year}
                </span>
                <h3 className="text-lg font-extrabold text-black mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default OurStory;
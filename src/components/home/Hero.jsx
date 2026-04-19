import { Link } from "react-router";
import calvinKleinLogo from "/images/brands/calvinKlein.png";
import gucciLogo from "/images/brands/gucci.png";
import pradaLogo from "/images/brands/prada.png";
import versaceLogo from "/images/brands/versace.png";
import zaraLogo from "/images/brands/zara.png";

const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const brands = [
  { src: versaceLogo, alt: "Versace" },
  { src: zaraLogo, alt: "Zara" },
  { src: gucciLogo, alt: "Gucci" },
  { src: pradaLogo, alt: "Prada" },
  { src: calvinKleinLogo, alt: "Calvin Klein" },
];

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1]">
      {/* ───────── Main Hero ───────── */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ───── Left: Content ───── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            
            {/* Tag */}
            <span className="inline-flex items-center gap-2 bg-black text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              New Season 2026
            </span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold text-black leading-[1.1] tracking-tight font-['Integral_CF',sans-serif]">
              WEAR <br className="hidden sm:block" />
              YOUR <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-400">STORY.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
              Discover clothing that speaks before you do. Premium quality, timeless style — crafted for those who dare to be different.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4">
              <Link to="/shop" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-sm font-extrabold hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex items-center justify-center gap-3">
                  Shop Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-black text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all duration-300">
                  Our Story
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 pt-8 border-t border-gray-300 w-full">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-black">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ───── Right: Grid Layout Images ───── */}
          {/* Using a CSS Grid creates a highly responsive "bento box" style */}
          <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-4 sm:gap-6 h-full min-h-125 lg:min-h-175">
            
            {/* ── Tall pill image (Left Col) ── */}
            <div className="col-span-1 row-span-2 rounded-t-full rounded-b-3xl overflow-hidden group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
                alt="Fashion model"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* ── New Arrival card (Right Col, Top) ── */}
            <div className="col-span-1 row-span-1 bg-black text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-center shadow-xl group hover:bg-gray-900 transition-colors">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Just Dropped
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  Fresh Fits <br />
                  <span className="text-gray-400">This Week</span>
                </h3>
                <p className="text-xs text-gray-400 mt-3 hidden sm:block">
                  New styles added every Monday.
                </p>
              </div>
              <Link to="/shop?filter=new" className="mt-6">
                <button className="w-full bg-white text-black text-xs font-bold py-3 rounded-full hover:bg-gray-200 transition-colors">
                  See Arrivals →
                </button>
              </Link>
            </div>

            {/* ── Short image (Right Col, Bottom) ── */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80"
                alt="Fashion details"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ───────── Brand Logos Bar ───────── */}
      <div className="bg-black w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="h-6 sm:h-8 lg:h-9 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
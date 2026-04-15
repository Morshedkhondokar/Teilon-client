import heroImage from "/images/hero-img.png";
import calvinKleinLogo from "/images/brands/calvinKlein.png";
import gucciLogo from "/images/brands/gucci.png";
import pradaLogo from "/images/brands/prada.png";
import versaceLogo from "/images/brands/versace.png";
import zaraLogo from "/images/brands/zara.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1]">
      {/* ───────── Hero Content ───────── */}
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 lg:pt-0">
        {/* Left – content */}
        <div className="max-w-xl flex flex-col items-start gap-6 lg:py-8">
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] leading-[1.1] font-extrabold font-['Integral_CF',sans-serif] text-black">
            Find Clothes
            <br />
            That Matches
            <br />
            Your Style
          </h1>

          <p className="text-sm text-black/60 max-w-md ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Link to="/shop">
            <button className="w-full lg:w-52 bg-black text-white px-14 py-4 rounded-full text-sm font-medium hover:bg-black/85 transition-colors cursor-pointer">
              Shop Now
            </button>
          </Link>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-4">
            {[
              { value: "200+", label: "International Brands" },
              { value: "2,000+", label: "High-Quality Products" },
              { value: "30,000+", label: "Happy Customers" },
            ].map((stat, i, arr) => (
              <div
                key={stat.label}
                className="flex items-center gap-8"
              >
                <div>
                  <h4 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-black leading-tight">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/60">
                    {stat.label}
                  </p>
                </div>
                {/* Divider (skip after last item) */}
                {i < arr.length - 1 && (
                  <span className="hidden sm:block h-12 w-px bg-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right – Image */}
        <div className="relative w-full lg:w-120 xl:w-140 shrink-0 self-end">
          {/* Decorative star accents  */}
          <span className="absolute top-10 right-8 text-black text-6xl lg:text-8xl animate-pulse select-none">
            ✦
          </span>
          <span className="absolute bottom-32 left-0 text-black text-4xl animate-pulse select-none">
            ✦
          </span>

          <img
            src={heroImage}
            alt="Stylish person wearing trendy clothes"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* ───────── Brand Logos Bar ───────── */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-4">
          {[
            { src: versaceLogo, alt: "Versace" },
            { src: zaraLogo, alt: "Zara" },
            { src: gucciLogo, alt: "Gucci" },
            { src: pradaLogo, alt: "Prada" },
            { src: calvinKleinLogo, alt: "Calvin Klein" },
          ].map((brand) => (
            <img
              key={brand.alt}
              src={brand.src}
              alt={brand.alt}
              className="h-6 sm:h-7 lg:h-8 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

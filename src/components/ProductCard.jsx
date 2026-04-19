import { Link } from "react-router";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const {
    slug,
    name,
    price,
    originalPrice,
    discount,
    rating,
    images,
    colors,
    isNew,
  } = product;

  return (
    <Link to={`/product/${slug}`} className="group block w-full">
      <div className="flex flex-col gap-4">
        
        {/* ───── Image Container ───── */}
        <div className="relative overflow-hidden rounded-2xl bg-[#F0EEED] aspect-3/4 sm:aspect-square">
          {/* Main Image */}
          <img
            src={images[0]}
            alt={name}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              images[1] ? "group-hover:opacity-0" : ""
            }`}
          />
          
          {/* Hover Image (Swap effect) */}
          {images[1] && (
            <img
              src={images[1]}
              alt={`${name} hover`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                New
              </span>
            )}
            {discount && (
              <span className="bg-[#FF3333] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Add / Wishlist Overlay (Optional hidden detail) */}
          <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
             <button className="w-full bg-white/90 backdrop-blur-md text-black py-3 rounded-xl text-xs font-bold shadow-lg hover:bg-black hover:text-white transition-colors">
                Quick View
             </button>
          </div>
        </div>

        {/* ───── Info Section ───── */}
        <div className="flex flex-col gap-2">
          
          {/* Colors (Minimal Dots) */}
          {colors && colors.length > 0 && (
            <div className="flex gap-1.5">
              {colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index} 
                  className="w-3 h-3 rounded-full border border-black/10" 
                  style={{ backgroundColor: color }}
                />
              ))}
              {colors.length > 3 && (
                <span className="text-[10px] text-black/40">+{colors.length - 3}</span>
              )}
            </div>
          )}

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-black leading-tight group-hover:underline decoration-1 underline-offset-4">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <StarRating rating={rating} />
            <span className="text-xs font-medium text-black/60 pt-0.5">
              {rating}<span className="text-black/30 font-light">/5</span>
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xl sm:text-2xl font-extrabold text-black">
              ${price}
            </span>

            {originalPrice && (
              <span className="text-lg sm:text-xl font-bold text-black/30 line-through decoration-gray-400">
                ${originalPrice}
              </span>
            )}

            {discount && (
              <div className="bg-red-50 text-[#FF3333] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                -{discount}%
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
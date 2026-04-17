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
    reviewCount,
    images,
  } = product;

  return (
    <Link to={`/product/${slug}`} className="group block">
      <div className="flex flex-col gap-3">
        {/* ───── Image ───── */}
        <div className="relative overflow-hidden rounded-2xl bg-[#F0EEED] aspect-square">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Discount Badge */}
          {discount && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
            
          )}
        </div>

        {/* ───── Info ───── */}
        <div className="flex flex-col gap-1.5 px-1">
          {/* Name */}
          <h3 className="text-sm sm:text-base font-bold text-black truncate group-hover:text-black/70 transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <StarRating rating={rating} />
            <span className="text-xs sm:text-sm text-black/60">
              {rating}/<span className="text-black/40">5</span>
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2.5">
            <span className="text-lg sm:text-xl font-bold text-black">
              ${price}
            </span>

            {originalPrice && (
              <span className="text-lg sm:text-xl font-bold text-black/30 line-through">
                ${originalPrice}
              </span>
            )}

            {discount && (
              <span className="text-[10px] sm:text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full">
                -{discount}%
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
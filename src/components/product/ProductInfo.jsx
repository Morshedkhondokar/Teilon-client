import StarRating from "../StarRating";

const ProductInfo = ({ brand, category, name, rating, reviewCount, price, originalPrice, discount, description }) => {
  return (
    <>
      {/* Brand & Category */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{brand}</span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-400">{category}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-tight tracking-tight mb-3">
        {name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2.5 mb-5">
        <StarRating rating={rating} />
        <span className="text-sm font-medium text-slate-700">{rating}</span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="text-sm text-slate-400">{reviewCount} reviews</span>
      </div>

      <div className="border-t border-slate-100 mb-5" />

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-3xl font-semibold text-slate-900 tracking-tight">${price}</span>
        {originalPrice && (
          <>
            <span className="text-lg text-slate-400 line-through">${originalPrice}</span>
            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
              Save ${originalPrice - price}
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-slate-500 mb-6">{description}</p>

      <div className="border-t border-slate-100 mb-5" />
    </>
  );
};

export default ProductInfo;
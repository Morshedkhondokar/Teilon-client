import { SlidersHorizontal } from "lucide-react";

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

const ShopHeader = ({ total, sort, onSortChange, onFilterOpen }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        {/* Mobile filter button */}
        <button
          onClick={onFilterOpen}
          className="lg:hidden flex items-center gap-2 text-sm font-semibold border border-black/20 
          px-3 py-2 rounded-full hover:bg-black hover:text-white transition-all"
        >
          <SlidersHorizontal size={14} />
          Filters
        </button>
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-black">{total}</span> products
        </p>
      </div>

      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="text-sm border border-black/15 rounded-full px-4 py-2 bg-white text-black font-medium focus:outline-none focus:border-black cursor-pointer"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShopHeader;
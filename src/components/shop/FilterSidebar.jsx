import { X } from "lucide-react";

const categories = ["T-Shirts", "Jeans", "Hoodies", "Shorts", "Jackets"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const genders = ["Man", "Girl", "Kids"];

const FilterSidebar = ({ filters, onChange, onClear, isOpen, onClose }) => {

  const toggle = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [key]: updated });
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white z-50 overflow-y-auto px-6 py-8
          transition-transform duration-300 lg:static lg:translate-x-0 lg:h-auto
          lg:w-full lg:z-auto lg:overflow-visible lg:py-0 lg:px-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-black text-lg">Filters</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="text-xs text-gray-400 underline hover:text-black"
            >
              Clear all
            </button>
            <button onClick={onClose} className="lg:hidden">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="border-t border-black/10 py-5">
          <h3 className="font-semibold text-sm text-black mb-3">Category</h3>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(filters.categories || []).includes(cat)}
                  onChange={() => toggle("categories", cat)}
                  className="accent-black w-4 h-4"
                />
                <span className="text-sm text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="border-t border-black/10 py-5">
          <h3 className="font-semibold text-sm text-black mb-3">Max Price</h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={filters.maxPrice || 1000}
            onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full accent-black"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span className="font-semibold text-black">${filters.maxPrice || 1000}</span>
          </div>
        </div>

        {/* Size */}
        <div className="border-t border-black/10 py-5">
          <h3 className="font-semibold text-sm text-black mb-3">Size</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => toggle("sizes", size)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-all ${
                  (filters.sizes || []).includes(size)
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/20 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="border-t border-black/10 py-5">
          <h3 className="font-semibold text-sm text-black mb-3">Gender</h3>
          <div className="flex flex-col gap-2">
            {genders.map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={(filters.genders || []).includes(g)}
                  onChange={() => toggle("genders", g)}
                  className="accent-black w-4 h-4"
                />
                <span className="text-sm text-gray-700">{g}</span>
              </label>
            ))}
          </div>
        </div>

      </aside>
    </>
  );
};

export default FilterSidebar;
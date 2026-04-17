const SizeSelector = ({ sizes, selected, onSelect }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-slate-700">Size</span>
        <button className="text-xs text-slate-400 hover:text-slate-700 underline underline-offset-2 transition-colors">
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map(({ size, stock }) => {
          const outOfStock = stock === 0;
          const isSelected = selected === size;

          return (
            <button
              key={size}
              disabled={outOfStock}
              onClick={() => !outOfStock && onSelect(size)}
              className={`relative min-w-[44px] h-11 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                outOfStock
                  ? "bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100"
                  : isSelected
                  ? "bg-slate-900 text-white border border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              {size}
              {outOfStock && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-6 h-px bg-slate-300 rotate-[-30deg]" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
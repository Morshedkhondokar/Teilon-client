const ActionButtons = ({ onAddToCart, leadingElement }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Row: Quantity + Add to Cart — always side by side */}
      <div className="flex gap-3 sm:flex-1">
        {/* Leading Element = Quantity Selector component */}
        {leadingElement}

        {/* Add to Cart */}
        <button
          onClick={onAddToCart}
          className="group relative flex-1 h-12 rounded-2xl bg-slate-900 py-3
            text-white text-sm font-semibold flex items-center justify-center gap-2 overflow-hidden
            transition-all duration-300 hover:bg-slate-800 hover:shadow-lg active:scale-[0.97]"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>Add to Cart</span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
        </button>
      </div>

      {/* Buy Now — Mobile: full size, Desktop: half size */}
      <button className="group sm:flex-1 h-12 rounded-2xl py-3 border border-slate-300 bg-white text-slate-900 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-50 hover:shadow-md active:scale-[0.97]">
        <span>Buy Now</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;
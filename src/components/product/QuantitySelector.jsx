const QuantitySelector = ({ quantity, onChange }) => {
  return (
    <div className="flex items-center border border-slate-200 rounded-2xl overflow-hidden bg-white flex-shrink-0">
      <button
        onClick={() => onChange(-1)}
        disabled={quantity <= 1}
        className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </button>
      <span className="w-10 h-12 flex items-center justify-center text-sm font-semibold text-slate-800 border-x border-slate-200">
        {quantity}
      </span>
      <button
        onClick={() => onChange(1)}
        disabled={quantity >= 10}
        className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;
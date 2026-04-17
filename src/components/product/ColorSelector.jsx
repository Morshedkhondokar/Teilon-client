const ColorSelector = ({ colors, selected, onSelect }) => {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-slate-700">Color</span>
        {selected && (
          <span className="text-xs text-slate-400 inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border border-slate-200" style={{ backgroundColor: selected }} />
            Selected
          </span>
        )}
      </div>
      <div className="flex gap-2.5">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => onSelect(color)}
            className={`relative w-9 h-9 rounded-full transition-all duration-200 ${
              selected === color ? "ring-2 ring-offset-2 ring-slate-800 scale-110" : "hover:scale-105"
            }`}
            style={{ backgroundColor: color }}
            title={color}
          >
            {color === "#FFFFFF" && <span className="absolute inset-0 rounded-full border border-slate-200" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
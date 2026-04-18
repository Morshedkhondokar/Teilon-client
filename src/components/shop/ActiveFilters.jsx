import { X } from "lucide-react";

const ActiveFilters = ({ filters, onChange }) => {
  const pills = [];

  if (filters.maxPrice && filters.maxPrice < 500)
    pills.push({ key: "maxPrice", label: `Under $${filters.maxPrice}` });

  ["categories", "sizes", "genders"].forEach((key) => {
    (filters[key] || []).forEach((val) =>
      pills.push({ key, value: val, label: val })
    );
  });

  if (pills.length === 0) return null;

  const remove = (pill) => {
    if (pill.key === "maxPrice") {
      const updated = { ...filters };
      delete updated.maxPrice;
      onChange(updated);
    } else {
      onChange({
        ...filters,
        [pill.key]: filters[pill.key].filter((v) => v !== pill.value),
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {pills.map((pill, i) => (
        <span
          key={i}
          className="flex items-center gap-1.5 text-xs font-medium bg-black text-white px-3 py-1.5 rounded-full"
        >
          {pill.label}
          <button onClick={() => remove(pill)} className="hover:opacity-70">
            <X size={11} />
          </button>
        </span>
      ))}
    </div>
  );
};

export default ActiveFilters;
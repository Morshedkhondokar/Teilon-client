const badges = [
  { icon: "🚚", label: "Free Shipping" },
  { icon: "↩️", label: "Easy Returns" },
  { icon: "🛡️", label: "Secure Pay" },
];

const TrustBadges = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-6">
      {badges.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-1 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
          <span className="text-base">{item.icon}</span>
          <span className="text-[10px] font-medium text-slate-500 tracking-wide">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
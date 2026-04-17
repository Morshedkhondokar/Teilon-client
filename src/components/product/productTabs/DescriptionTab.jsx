const DescriptionTab = ({ product }) => {
  return (
    <div className="space-y-4">
      <p className="text-[15px] leading-relaxed text-slate-600">
        {product.description}
      </p>

      <p className="text-[15px] leading-relaxed text-slate-600">
        This piece is part of our curated collection, designed with attention to every detail.
        The premium {product.material?.toLowerCase()} fabric ensures breathability and durability.
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {product.tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg capitalize"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DescriptionTab;
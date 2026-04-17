const ProductMeta = ({ sku, brand, material, category }) => {
  const metaItems = [
    { label: "SKU", value: sku },
    { label: "Brand", value: brand },
    { label: "Material", value: material },
    { label: "Category", value: category },
  ];

  return (
    <>
      <div className="border-t border-slate-100 mb-4" />
      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
        {metaItems.map(({ label, value }) => (
          <div key={label} className="flex justify-between">
            <span className="text-slate-400">{label}</span>
            <span className="text-slate-600 font-medium capitalize">{value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductMeta;
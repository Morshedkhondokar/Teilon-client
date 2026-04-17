const DetailsTab = ({ product }) => {
  return (
    <table className="w-full text-sm">
      <tbody className="divide-y divide-slate-100">
        {[
          ["Brand", product.brand],
          ["Material", product.material],
          ["Category", product.category],
          ["Gender", product.gender],
          ["SKU", product.sku],
        ].map(([label, value]) => (
          <tr key={label}>
            <td className="py-3 pr-8 text-slate-400 font-medium w-32">
              {label}
            </td>
            <td className="py-3 text-slate-700 capitalize">{value}</td>
          </tr>
        ))}

        <tr>
          <td className="py-3 pr-8 text-slate-400 font-medium">Sizes</td>
          <td className="py-3 text-slate-700">
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map(({ size, stock }) => (
                <span
                  key={size}
                  className={`text-xs px-2 py-0.5 rounded-md ${
                    stock > 0
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-400 line-through"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailsTab;
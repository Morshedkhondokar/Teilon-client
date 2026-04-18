import ProductCard from "../ProductCard";

const ShopGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl bg-gray-100 animate-pulse aspect-3/4" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-lg font-bold text-black mb-1">No products found</p>
        <p className="text-sm text-gray-400">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopGrid;
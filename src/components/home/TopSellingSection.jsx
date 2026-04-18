import { useNavigate } from "react-router";
import ProductCard from "../ProductCard";
import useProducts from "../../hooks/useProducts";

const TopSellingSection = () => {
  const { data: products = [], isLoading } = useProducts();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-slate-500">
          Loading top selling products...
        </div>
      </section>
    );
  }

  const displayedProducts = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ───── Heading ───── */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-black mb-10">
        Top Selling
      </h2>

      {/* ───── Divider ───── */}
      <hr className="border-black/10 mb-10" />

      {/* ───── Product Grid ───── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayedProducts.map((product, index) => (
          <div
            key={product.id}
            className="relative"
          >
            {/* ───── Rank Badge ───── */}
            <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-black text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              <span className="text-yellow-400">★</span>#{index + 1}
            </div>

            {/* ───── Discount Badge ───── */}
            {product.discount && (
              <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
            )}

            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* ───── View All Button ───── */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/shop")}
          className="px-14 py-3 rounded-full border border-black/10 text-sm font-medium text-black hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default TopSellingSection;

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";


const NewArrivalsSection = () => {
    const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const newArrivals = products.filter((p) => p.isNew);
  const displayedProducts = showAll ? newArrivals : newArrivals.slice(0, 4);

  useEffect(() => {
  fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ───── Heading ───── */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-black mb-10">
        New Arrivals
      </h2>

      {/* ───── Divider ───── */}
      <hr className="border-black/10 mb-10" />

      {/* ───── Product Grid ───── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ───── View All Button ───── */}
      {newArrivals.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-14 py-3 rounded-full border border-black/10 text-sm font-medium text-black hover:bg-black hover:text-white transition-all cursor-pointer"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default NewArrivalsSection;
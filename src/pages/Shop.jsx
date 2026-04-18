import { useMemo, useState } from "react";
import FilterSidebar from "../components/shop/FilterSidebar";
import ShopHeader from "../components/shop/ShopHeader";
import ShopGrid from "../components/shop/ShopGrid";
import ActiveFilters from "../components/shop/ActiveFilters";
import useProducts from "../hooks/useProducts";

const ShopPage = () => {
  const { data: products = [], isLoading, error } = useProducts();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <p className="text-sm text-slate-500">Failed to load products.</p>
      </div>
    );
  }

  // Apply filters + sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.categories?.length)
      result = result.filter((p) =>
        filters.categories.some(
          (c) => p.category.toLowerCase() === c.toLowerCase(),
        ),
      );

    if (filters.genders?.length)
      result = result.filter((p) =>
        filters.genders.some(
          (g) => p.gender?.toLowerCase() === g.toLowerCase(),
        ),
      );

    if (filters.sizes?.length)
      result = result.filter((p) =>
        p.sizes?.some((s) => filters.sizes.includes(s.size) && s.stock > 0),
      );

    if (filters.maxPrice)
      result = result.filter((p) => p.price <= filters.maxPrice);

    if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sort === "newest")
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return result;
  }, [products, filters, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-8">
        {/* Left: Filter Sidebar */}
        <div className="w-56 shrink-0 hidden lg:block">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters({})}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        </div>

        {/* Mobile sidebar */}
        <div className="lg:hidden">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters({})}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        </div>

        {/* Right: Products */}
        <div className="flex-1 min-w-0">
          <ShopHeader
            total={filteredProducts.length}
            sort={sort}
            onSortChange={setSort}
            onFilterOpen={() => setIsFilterOpen(true)}
          />
          <ActiveFilters
            filters={filters}
            onChange={setFilters}
          />
          <ShopGrid
            products={filteredProducts}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

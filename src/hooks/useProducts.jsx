import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("/data/products.json");
  if (!response.ok) {
    throw new Error("Failed to load products");
  }
  return response.json();
};

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};

export default useProducts;

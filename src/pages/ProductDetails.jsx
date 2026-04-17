import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Breadcrumb from "../components/product/Breadcrumb";
import ImageGallery from "../components/product/ImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ColorSelector from "../components/product/ColorSelector";
import SizeSelector from "../components/product/SizeSelector";
import QuantitySelector from "../components/product/QuantitySelector";
import ActionButtons from "../components/product/ActionButtons";
import TrustBadges from "../components/product/TrustBadges";
import ProductMeta from "../components/product/ProductMeta";
import ProductTags from "../components/product/ProductTags";
import ProductTabs from "../components/product/productTabs/ProductTabs";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((p) => p.slug === slug)))
      .catch((err) => console.log(err));
  }, [slug]);

  // Reset selections when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || null);
      setSelectedSize(product.sizes.find((s) => s.stock > 0)?.size || null);
      setQuantity(1);
    }
  }, [product]);

  // Loading state
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
          <p className="text-sm text-slate-400 tracking-wide">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, Math.min(prev + delta, 10)));
  };

  const handleAddToCart = () => {
    if (!selectedSize) return alert("Please select a size");
    console.log("Add to cart:", {
      product: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Breadcrumb
        category={product.category}
        name={product.name}
      />

      <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Left — Images */}
          <ImageGallery
            images={product.images}
            name={product.name}
            isNew={product.isNew}
            discount={product.discount}
          />

          {/* Right — Info */}
          <div className="flex flex-col">
            <ProductInfo
              brand={product.brand}
              category={product.category}
              name={product.name}
              rating={product.rating}
              reviewCount={product.reviewCount}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              description={product.description}
            />

            <ColorSelector
              colors={product.colors}
              selected={selectedColor}
              onSelect={setSelectedColor}
            />

            <SizeSelector
              sizes={product.sizes}
              selected={selectedSize}
              onSelect={setSelectedSize}
            />

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <ActionButtons
                onAddToCart={handleAddToCart}
                leadingElement={
                  <QuantitySelector
                    quantity={quantity}
                    onChange={handleQuantityChange}
                  />
                }
              />
            </div>

            <TrustBadges />

            <ProductMeta
              sku={product.sku}
              brand={product.brand}
              material={product.material}
              category={product.category}
            />

            <ProductTags tags={product.tags} />
          </div>
        </div>

        {/* Tabs */}
        <ProductTabs product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

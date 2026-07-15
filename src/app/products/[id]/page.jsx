"use client";

import { useParams, useRouter } from "next/navigation";
import { Star, ChevronLeft } from "lucide-react";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useProductSelection } from "@/hooks/useProductSelection";

import ProductImage from "@/components/product-details/ProductImage";
import ColorSelector from "@/components/product-details/ColorSelector";
import SizeSelector from "@/components/product-details/SizeSelector";
import QuantitySelector from "@/components/product-details/QuantitySelector";
import AddToCartButton from "@/components/product-details/AddToCartButton";
import ProductNotFound from "@/components/product-details/ProductNotFound";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  const {
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    quantity,
    increaseQuantity,
    decreaseQuantity,
    justAdded,
    displayImage,
    handleAddToCart,
  } = useProductSelection(product, addToCart);

  if (!product) return <ProductNotFound />;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <ProductImage
          product={product}
          selectedColor={selectedColor}
          displayImage={displayImage}
        />

        <div>
          <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
            <span className="text-sm text-gray-400">· Verified ratings</span>
          </div>

          <p className="text-2xl font-bold text-gray-900 mb-6">
            ৳{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            {product.description}
          </p>

          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelect={setSelectedColor}
          />

          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelect={setSelectedSize}
          />

          <QuantitySelector
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />

          <AddToCartButton
            inStock={product.inStock}
            justAdded={justAdded}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

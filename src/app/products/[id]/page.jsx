"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Star } from "lucide-react";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

import ProductImage from "@/components/product-details/ProductImage";
import ProductNotFound from "@/components/product-details/ProductNotFound";
import ColorSelector from "@/components/product-details/ColorSelector";
import SizeSelector from "@/components/product-details/SizeSelector";
import QuantitySelector from "@/components/product-details/QuantitySelector";
import AddToCartButton from "@/components/product-details/AddToCartButton";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null,
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) {
    return <ProductNotFound />;
  }

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product, quantity, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const displayImage = product.colorImages?.[selectedColor] || product.image;
  // Only mark the default color's image as priority — avoids Next.js
  // LCP/preload warnings when the image swaps on color selection.
  const isDefaultColor = selectedColor === product.colors?.[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 dark:bg-gray-900">
      {/* Back link */}
      <button
        onClick={() => router.back()}
        className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 mb-6 transition-all duration-300 relative py-1"
      >
        {/* Chevron icon with left translation on hover */}
        <ChevronLeft className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />

        <span>Back</span>

        {/* Cool underline animation */}
        <span className="absolute bottom-0 left-5 right-0 h-[2px] bg-amber-600 dark:bg-amber-400 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <ProductImage
          product={product}
          selectedColor={selectedColor}
          displayImage={displayImage}
          priority={isDefaultColor}
          onSelectColor={setSelectedColor}
        />

        {/* Details */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              · Verified ratings
            </span>
          </div>

          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ৳{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">
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
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
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

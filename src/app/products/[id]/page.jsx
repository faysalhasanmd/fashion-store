"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, Check, ShoppingBag } from "lucide-react";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

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

  // Product not found state
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Product not found
        </h1>
        <p className="text-gray-500 mb-6">
          The product you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          href="/products"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product, quantity, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {!product.inStock && (
            <span className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Details */}
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

          {/* Color selector */}
          {product.colors?.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Color:{" "}
                <span className="font-normal text-gray-600">
                  {selectedColor}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border transition-colors ${
                      selectedColor === color
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size selector */}
          {product.sizes?.length > 0 && (
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Size:{" "}
                <span className="font-normal text-gray-600">
                  {selectedSize}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-xs font-semibold border transition-colors ${
                      selectedSize === size
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-900 mb-3">Quantity</p>
            <div className="inline-flex items-center border border-gray-300 rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-semibold text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-colors ${
              !product.inStock
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : justAdded
                  ? "bg-green-600 text-white"
                  : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

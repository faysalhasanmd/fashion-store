"use client";

import Image from "next/image";

export default function ProductImage({
  product,
  selectedColor,
  displayImage,
  priority,
  onSelectColor,
}) {
  // Build thumbnail list from colorImages (falls back to the base image alone)
  const thumbnails = product.colorImages
    ? Object.entries(product.colorImages)
    : [[null, product.image]];

  return (
    <div>
      {/* Main image */}
      <div
        key={selectedColor}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 color-image-fade"
      >
        <Image
          src={displayImage}
          alt={`${product.name}${selectedColor ? ` - ${selectedColor}` : ""}`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        {!product.inStock && (
          <span className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {thumbnails.length > 1 && (
        <div className="grid grid-cols-5 gap-3 mt-4">
          {thumbnails.map(([color, imgSrc]) => (
            <button
              key={color ?? imgSrc}
              type="button"
              onClick={() => onSelectColor?.(color)}
              aria-label={color ? `View ${color}` : "View image"}
              className={`relative aspect-square rounded-xl overflow-hidden bg-gray-100 border-2 transition-colors ${
                selectedColor === color
                  ? "border-gray-900"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${product.name}${color ? ` - ${color}` : ""} thumbnail`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

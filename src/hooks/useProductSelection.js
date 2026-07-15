"use client";

import { useState, useEffect } from "react";

// Centralizes all selection state (size, color, quantity, add-to-cart feedback)
// for a single product's details page.
export function useProductSelection(product, addToCart) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || null,
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Reset selection whenever the visited product changes (e.g. navigating
  // from one product's details page straight to another — same route
  // template, so the component doesn't remount on its own).
  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] || null);
    setSelectedColor(product?.colors?.[0] || null);
    setQuantity(1);
    setJustAdded(false);
  }, [product?.id]);

  const displayImage =
    (product?.colorImages && product.colorImages[selectedColor]) ||
    product?.image;

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAddToCart = () => {
    if (!product?.inStock) return;
    addToCart(product, quantity, selectedSize, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return {
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
  };
}

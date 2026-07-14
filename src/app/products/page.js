"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, ArrowUpDown } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import products from "@/data/products";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a brief fetch delay so the loading state is visible
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query),
      );
    }

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      {/* Heading */}
      <div className={`${playfair.variable} mb-6 text-center`}>
        <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
          Shop All
        </span>
        <h1
          className="text-4xl sm:text-5xl text-gray-900 mt-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          All Products
        </h1>
        <p className="text-sm text-gray-500 mt-3">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "item" : "items"} found
        </p>
      </div>

      {/* Controls: search + sort, grouped together */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-white border border-gray-300 rounded-full pl-11 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow"
          />
        </div>

        <div className="relative sm:w-56">
          <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none bg-white border border-gray-300 rounded-full pl-11 pr-8 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors ${
              selectedCategory === category
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:border-gray-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product grid, skeleton loader, or empty state */}
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-14">
          <p className="text-gray-500 text-sm">
            No products match{" "}
            <span className="text-red-500 font-semibold">
              {searchQuery ? `"${searchQuery}"` : "this filter"}
            </span>
            . Try a different search or category.
          </p>
        </div>
      )}
    </div>
  );
}

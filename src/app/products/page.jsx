"use client";

import { useState, useMemo, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { playfair } from "@/lib/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import Pagination from "@/components/Pagination";
import ProductDashboard from "@/components/ProductDashboard";
import products from "@/data/products";

const ITEMS_PER_PAGE = 8;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMounted, setHasMounted] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Simulate a brief fetch delay so the loading state is visible
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  // Count of products per category (for the sidebar badges)
  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    for (const p of products) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
  );

  // Reset to page 1 whenever the filtered set changes (new search/category/sort)
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Clamp current page if it somehow exceeds the new total (e.g. filter shrinks the list)
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
  };

  // Scroll to top only AFTER the new page has actually rendered —
  // prevents the scroll position from fighting the grid's layout shift.
  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Re-run AOS whenever the visible product grid changes (filter/sort/loading/page)
  // so newly-rendered cards get their scroll animations initialized.
  useEffect(() => {
    AOS.refreshHard();
  }, [paginatedProducts, isLoading]);

  const hasActiveFilters =
    selectedCategory !== "All" || searchQuery.trim() !== "";

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortBy("default");
  };

  const dashboardProps = {
    categories,
    categoryCounts,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    hasActiveFilters,
    clearFilters,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 dark:bg-gray-900">
      {/* Mobile filter trigger */}
      <div className="lg:hidden mb-4" data-aos="fade-up">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full py-3 text-sm font-semibold text-gray-900 dark:text-white"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters & Sort
          {hasActiveFilters && (
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
          )}
        </button>
      </div>

      {/* Main layout: dashboard sidebar (left) + products (right) */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left dashboard — desktop */}
        <aside className="hidden lg:block w-64 shrink-0" data-aos="fade-right">
          <div className="sticky top-24 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-5">
            <ProductDashboard {...dashboardProps} />
          </div>
        </aside>

        {/* Right side — product grid */}
        <div className="flex-1 min-w-0">
          {/* Heading */}
          <div
            className={`${playfair.variable} mb-6 text-center lg:text-left`}
            data-aos="fade-up"
          >
            <span className="text-xs font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase">
              Shop All
            </span>
            <h1
              className="text-4xl sm:text-5xl text-gray-900 dark:text-white mt-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              All Products
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "item" : "items"} found
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 80}
                    data-aos-duration="500"
                  >
                    <ProductCard product={product} priority={index < 4} />
                  </div>
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </>
          ) : (
            <div className="text-center py-14" data-aos="fade-in">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No products match{" "}
                <span className="text-red-500 dark:text-red-400 font-semibold">
                  {searchQuery ? `"${searchQuery}"` : "this filter"}
                </span>
                . Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative mr-auto w-[85%] max-w-sm h-full bg-white dark:bg-gray-900 overflow-y-auto p-5 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Filters & Sort
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <ProductDashboard {...dashboardProps} />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full py-3 text-sm font-semibold"
            >
              Show {filteredProducts.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

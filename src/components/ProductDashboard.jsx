"use client";
import { Search, ArrowUpDown } from "lucide-react";

export const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];
export default function ProductDashboard({
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
}) {
  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-3">
          Search
        </h3>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-3">
          Sort By
        </h3>
        <div className="relative">
          <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl pl-10 pr-8 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-shadow cursor-pointer"
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
      <div className="mb-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold tracking-widest text-gray-500 dark:text-gray-400 uppercase">
            Category
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-[11px] font-medium text-blue-700 dark:text-blue-400 hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {/* "All" stays pinned so it's always reachable regardless of list length */}
        <button
          onClick={() => setSelectedCategory("All")}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors mb-1 ${
            selectedCategory === "All"
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <span>All</span>
          <span
            className={`text-xs rounded-full px-2 py-0.5 ${
              selectedCategory === "All"
                ? "bg-white/20 text-white dark:bg-gray-900/10 dark:text-gray-900"
                : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
            }`}
          >
            {categoryCounts.All ?? 0}
          </span>
        </button>

        {/* Rest of the categories scroll independently — stays a fixed height
            no matter how many categories get added later */}
        <div className="flex flex-col gap-1 max-h-64 overflow-y-auto pr-1 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          {categories
            .filter((category) => category !== "All")
            .map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 ${
                      active
                        ? "bg-white/20 text-white dark:bg-gray-900/10 dark:text-gray-900"
                        : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {categoryCounts[category] ?? 0}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
}

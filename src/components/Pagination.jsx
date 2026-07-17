"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Build a compact page list: always show first, last, current ± 1,
  // and collapse the rest into "..." separators.
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav
      className="flex items-center justify-center gap-1.5 sm:gap-2 mt-12 mb-4"
      data-aos="fade-up"
      aria-label="Product pages"
    >
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:border-gray-900 dark:hover:not-disabled:border-white hover:not-disabled:text-gray-900 dark:hover:not-disabled:text-white transition-colors shrink-0"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      {pages.map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-xs text-gray-400 dark:text-gray-500 select-none"
          >
            ···
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              page === currentPage
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 scale-105 shadow-md"
                : "text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:border-gray-900 dark:hover:not-disabled:border-white hover:not-disabled:text-gray-900 dark:hover:not-disabled:text-white transition-colors shrink-0"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}

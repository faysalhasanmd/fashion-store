"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Home, ShoppingBag } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export default function NotFound() {
  return (
    <div
      className={`${playfair.variable} min-h-[80vh] flex items-center justify-center px-4`}
    >
      <div className="max-w-md text-center">
        {/* Floating tag illustration */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full animate-float-tag"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* String */}
            <path
              d="M80 8 C 78 20, 84 26, 80 34"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Tag body */}
            <rect
              x="30"
              y="34"
              width="100"
              height="100"
              rx="14"
              fill="#ffffff"
              stroke="#111827"
              strokeWidth="2.5"
            />
            {/* Punch hole */}
            <circle
              cx="80"
              cy="50"
              r="5"
              fill="#f7f4ef"
              stroke="#111827"
              strokeWidth="2"
            />
            {/* 404 text */}
            <text
              x="80"
              y="98"
              textAnchor="middle"
              fontSize="30"
              fontWeight="600"
              fill="#111827"
              fontFamily="var(--font-playfair)"
            >
              404
            </text>
            {/* Small dashed line under text, like a price tag detail */}
            <line
              x1="48"
              y1="112"
              x2="112"
              y2="112"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Soft glow behind the tag */}
          <div className="absolute inset-0 -z-10 bg-gray-900/5 rounded-full blur-2xl scale-75" />
        </div>

        <h1
          className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          This page isn't in stock
        </h1>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist, moved, or the link's a
          little off. Let's get you back to shopping.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full text-sm font-semibold hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

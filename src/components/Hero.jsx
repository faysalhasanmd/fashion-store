"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";

// Pull showcase images straight from the product data
const showcaseImages = products.slice(0, 6).map((p) => ({
  id: p.id,
  image: p.image,
  name: p.name,
}));

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F7F4EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] text-gray-900 mb-6 tracking-tight">
            Trendy Fashion
            <br />
            Collection
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-md mb-8">
            Finding your fashion has never been easier. Browse the best
            selection of famous fashion brands that suit your style and
            preferences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/25 skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative z-10">Shop Now</span>
            </Link>

            <Link
              href="/products"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900"
            >
              <span className="absolute inset-0 -translate-x-full bg-gray-900/5 skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Categories
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M4 10h12M12 5l5 5-5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stat highlights */}
          <div className="flex items-center gap-10 mb-6">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                80+
              </p>
              <p className="text-sm text-gray-500 mt-1">Unique Style</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                40+
              </p>
              <p className="text-sm text-gray-500 mt-1">Brand Trusted</p>
            </div>
          </div>

          {/* Avatars + caption */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <span className="h-8 w-8 rounded-full bg-gray-900 ring-2 ring-[#F7F4EF]" />
              <span className="h-8 w-8 rounded-full bg-orange-500 ring-2 ring-[#F7F4EF]" />
            </div>
            <p className="text-sm text-gray-500">
              80+ Molestie hendrerit amet sapien volutpat.
            </p>
          </div>
        </div>

        {/* Animated image showcase — cycles through product images */}
        <div className="relative">
          {/* decorative sparkle behind image */}
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -top-10 right-0 h-56 w-56 text-orange-200 animate-spin-slow lg:h-72 lg:w-72"
          >
            <path
              d="M100 0 C104 70 130 96 200 100 C130 104 104 130 100 200 C96 130 70 104 0 100 C70 96 96 70 100 0 Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>

          {/* offset outline frame — sits behind the image, peeking out */}
          <div
            className="absolute -bottom-4 -left-4 h-full w-full border-2 border-orange-400/60 hidden sm:block"
            style={{ borderRadius: "0 48px 0 48px" }}
          />

          <div
            className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-gray-200 shadow-xl"
            style={{ borderRadius: "48px 12px 48px 12px" }}
          >
            {showcaseImages.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}

            {/* Caption of the currently visible product */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-5 pt-10 pb-4">
              <p className="text-white text-sm font-medium tracking-wide">
                {showcaseImages[activeIndex].name}
              </p>
            </div>

            {/* Dot indicators */}
            <div className="absolute top-5 right-5 flex gap-1.5">
              {showcaseImages.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    "New Arrivals",
    "Free Shipping Over ৳2000",
    "Summer Collection",
    "Limited Edition Drops",
    "Shop The Look",
  ];
  const looped = [...items, ...items, ...items];

  return (
    <div className="bg-gray-900 py-3 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {looped.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 text-xs sm:text-sm font-semibold tracking-widest text-white uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-orange-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

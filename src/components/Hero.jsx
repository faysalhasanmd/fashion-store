"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import products from "@/data/products";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

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
    <section className="bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <div className={`${playfair.variable}`}>
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-700 uppercase mb-4">
            New Season · 2026
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Style that speaks
            <br />
            <span className="italic text-blue-700">before you do.</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mb-8">
            Discover a curated edit of everyday essentials and statement pieces
            — designed to move with you, from morning meetings to evening plans.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Shop the Collection
            </Link>
            <Link
              href="/products"
              className="border border-gray-300 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:border-gray-900 transition-colors"
            >
              Explore Categories
            </Link>
          </div>
        </div>

        {/* Animated image showcase — cycles through product images */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200">
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
          <div className="absolute top-4 right-4 flex gap-1.5">
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
            <span className="text-blue-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

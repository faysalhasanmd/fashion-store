"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Heart, Star, ArrowRight } from "lucide-react";
import products from "@/data/products";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

// Curated set of products to showcase as "New Arrivals"
const NEW_ARRIVAL_IDS = [2, 7, 5, 10];

export default function NewArrivals() {
  const items = NEW_ARRIVAL_IDS.map((id) =>
    products.find((p) => p.id === id),
  ).filter(Boolean);

  return (
    <section
      className={`${playfair.variable} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14`}
    >
      {/* Heading */}
      <div className="mb-8" data-aos="fade-up">
        <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
          Just Landed
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
          New Arrival
        </h2>
      </div>

      {/* Product card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {items.map((product, index) => (
          <div
            key={product.id}
            className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Link
                href={`/products/${product.id}`}
                className="block w-full h-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>

              {/* Dark overlay on hover, for button contrast */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />

              {/* NEW badge */}
              <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                New
              </span>

              {/* Wishlist button */}
              <button
                type="button"
                aria-label="Add to wishlist"
                onClick={(e) => e.preventDefault()}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-orange-600"
              >
                <Heart className="w-4 h-4" />
              </button>

              {/* View Product button — centered on image, shows on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-gray-900 text-xs font-bold uppercase tracking-wide px-5 py-2.5 shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  View Product
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Info */}
            <div className="px-4 py-4 flex flex-col">
              <p className="text-[11px] font-semibold text-orange-600 uppercase tracking-widest mb-1.5">
                {product.category}
              </p>
              <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug mb-2">
                {product.name}
              </h3>

              {/* Price + rating row */}
              <div className="flex items-center justify-between mt-1">
                <span className="text-base font-bold text-gray-900">
                  ৳{product.price.toLocaleString()}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-600">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  {product.rating ?? "4.5"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

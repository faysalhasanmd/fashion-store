"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import { Star } from "lucide-react";
import products from "@/data/products";

// Curated set of products to showcase as "New Arrivals"
const NEW_ARRIVAL_IDS = [2, 7, 5, 10];

// One distinct AOS animation per card, so each item enters differently
const CARD_ANIMATIONS = ["fade-up", "fade-down", "zoom-in", "flip-up"];

export default function NewArrivals() {
  const scrollRef = useRef(null);
  const items = NEW_ARRIVAL_IDS.map((id) =>
    products.find((p) => p.id === id),
  ).filter(Boolean);

  return (
    <section
      className={`${playfair.variable} relative bg-[#f7f4ef] dark:bg-gray-900 py-10 sm:py-14 overflow-hidden`}
    >
      {/* Ghost watermark text, sits behind everything — scales down on small screens */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] sm:text-[20vw] lg:text-[15vw] font-extrabold uppercase text-gray-900/[0.03] dark:text-white/[0.03] whitespace-nowrap leading-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        New
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className="flex items-end justify-between gap-4 mb-8 sm:mb-12"
          data-aos="fade-up"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest text-orange-600 dark:text-orange-400 uppercase">
              Just Landed
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mt-1">
              New Arrival
            </h2>
          </div>
        </div>

        {/* Horizontal shelf — centers itself when cards fit within the container;
            justify-center is harmlessly ignored by the browser once content
            overflows and horizontal scrolling takes over. */}
        <div
          ref={scrollRef}
          className="flex justify-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              prefetch={false}
              data-card
              data-aos={CARD_ANIMATIONS[index % CARD_ANIMATIONS.length]}
              data-aos-delay={index * 120}
              data-aos-duration="700"
              className={`group relative shrink-0 w-[46vw] xs:w-[200px] sm:w-[230px] md:w-[250px] lg:w-[260px] snap-start ${
                index % 2 === 1 ? "sm:mt-6 lg:mt-10" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl sm:rounded-[28px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 250px, 260px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Rating pill, top-right */}
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-[10px] sm:text-[11px] font-bold text-gray-900 dark:text-white px-1.5 sm:px-2 py-1 rounded-full">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                  {product.rating ?? "4.5"}
                </span>

                {/* Category — vertical rotated label along the left edge, hidden on the smallest cards where there isn't room */}
                <span className="hidden xs:block absolute left-2.5 sm:left-3 bottom-14 sm:bottom-16 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/80 origin-bottom-left -rotate-90">
                  {product.category}
                </span>

                {/* Name + price, bottom */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <h3 className="text-white text-xs sm:text-sm font-semibold leading-snug mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <span className="text-white/90 text-[11px] sm:text-xs font-bold">
                    ৳{product.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Index number, floats above the card corner */}
              <span
                className="absolute -top-2 sm:-top-3 -left-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold select-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span
                  className="text-gray-300/70 dark:text-gray-600/70"
                  style={{
                    WebkitTextStroke: "1.5px currentColor",
                    color: "transparent",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="sm:hidden text-center text-xs text-gray-400 dark:text-gray-500 mt-2">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
}

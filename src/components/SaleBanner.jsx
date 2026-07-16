import Link from "next/link";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { Tag } from "lucide-react";
import products from "@/data/products";

const DISCOUNT_PERCENT = 20;
const SALE_PRODUCT_ID = 6; // High-Waist Wide Leg Trousers

export default function SaleBanner() {
  const product = products.find((p) => p.id === SALE_PRODUCT_ID);
  if (!product) return null;

  const discountedPrice = Math.round(
    product.price * (1 - DISCOUNT_PERCENT / 100),
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-[#f7f4ef] dark:bg-gray-900">
      <div className="relative bg-orange-50/60 dark:bg-gray-800 border border-orange-100 dark:border-gray-700 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Decorative soft blob */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-orange-200/40 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Text content */}
        <div
          className={`${playfair.variable} relative flex flex-col justify-center gap-4 sm:gap-5 px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-20 order-2 lg:order-1`}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="inline-flex items-center gap-2 w-fit bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 text-[11px] sm:text-xs font-semibold tracking-widest uppercase px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <Tag className="w-3.5 h-3.5" />
            Limited Time Offer
          </span>

          <h2
            className="text-2xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {DISCOUNT_PERCENT}% Off
            <br />
            <span className="italic text-orange-600 dark:text-orange-400">
              {product.name}
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-sm leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              ৳{discountedPrice.toLocaleString()}
            </span>
            <span className="text-base sm:text-lg text-gray-400 dark:text-gray-500 line-through">
              ৳{product.price.toLocaleString()}
            </span>
            <span className="bg-red-50 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold px-2.5 py-1 rounded-full">
              -{DISCOUNT_PERCENT}%
            </span>
          </div>

          <Link
            href={`/products/${product.id}`}
            // prefetch={false}
            className="inline-flex w-fit items-center bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold hover:bg-orange-600 hover:scale-105 transition-all"
          >
            Shop the Sale
          </Link>
        </div>

        {/* Product image */}
        <div
          className="relative aspect-[4/3] lg:aspect-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[480px] order-1 lg:order-2 p-3 sm:p-4 lg:p-6"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          {/* Image + rounded frame — overflow-hidden ONLY wraps the image now */}
          <div className="relative w-full h-full overflow-hidden rounded-tl-[70px] rounded-tr-[70px] rounded-bl-[20px] rounded-br-[20px] sm:rounded-tl-[110px] sm:rounded-tr-[110px] sm:rounded-bl-[28px] sm:rounded-br-[28px] lg:rounded-tl-[140px] lg:rounded-bl-[140px] lg:rounded-tr-[28px] lg:rounded-br-[28px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Discount badge — sits OUTSIDE the overflow-hidden frame so it never
              gets clipped by the big corner radius on mobile. z-10 keeps it on top. */}
          <div className="absolute top-2 right-2 sm:top-5 sm:right-5 z-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-orange-500 flex flex-col items-center justify-center text-white shadow-lg animate-badge-pulse">
            <span className="text-sm sm:text-xl font-bold leading-none">
              {DISCOUNT_PERCENT}%
            </span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-wide">
              Off
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

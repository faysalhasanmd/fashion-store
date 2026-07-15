import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Tag } from "lucide-react";
import products from "@/data/products";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const DISCOUNT_PERCENT = 20;
const SALE_PRODUCT_ID = 6; // High-Waist Wide Leg Trousers

export default function SaleBanner() {
  const product = products.find((p) => p.id === SALE_PRODUCT_ID);
  if (!product) return null;

  const discountedPrice = Math.round(
    product.price * (1 - DISCOUNT_PERCENT / 100),
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative bg-orange-50/60 border border-orange-100 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Decorative soft blob */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Text content */}
        <div
          className={`${playfair.variable} relative flex flex-col justify-center gap-5 px-8 sm:px-10 lg:px-14 py-14 lg:py-20 order-2 lg:order-1 animate-fade-in-up`}
        >
          <span className="inline-flex items-center gap-2 w-fit bg-orange-100 text-orange-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            <Tag className="w-3.5 h-3.5" />
            Limited Time Offer
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {DISCOUNT_PERCENT}% Off
            <br />
            <span className="italic text-orange-600">{product.name}</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-sm leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">
              ৳{discountedPrice.toLocaleString()}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ৳{product.price.toLocaleString()}
            </span>
            <span className="bg-red-50 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">
              -{DISCOUNT_PERCENT}%
            </span>
          </div>

          <Link
            href={`/products/${product.id}`}
            className="inline-flex w-fit items-center bg-orange-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-600 hover:scale-105 transition-all"
          >
            Shop the Sale
          </Link>
        </div>

        {/* Product image */}
        <div className="relative aspect-[4/3] lg:aspect-auto min-h-[320px] lg:min-h-[480px] order-1 lg:order-2 p-4 lg:p-6 animate-fade-in-delayed">
          <div className="relative w-full h-full overflow-hidden rounded-tl-[110px] rounded-tr-[110px] rounded-bl-[28px] rounded-br-[28px] lg:rounded-tl-[140px] lg:rounded-bl-[140px] lg:rounded-tr-[28px] lg:rounded-br-[28px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            {/* Discount badge */}
            <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-orange-500 flex flex-col items-center justify-center text-white shadow-lg animate-badge-pulse">
              <span className="text-xl font-bold leading-none">
                {DISCOUNT_PERCENT}%
              </span>
              <span className="text-[10px] uppercase tracking-wide">Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

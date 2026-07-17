import Link from "next/link";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import products from "@/data/products";

// Curated picks with a manual discount tag per item (purely visual — mirrors SaleBanner's pattern)
const TRENDY_PICKS = [
  { id: 3, discount: 20 },
  { id: 6, discount: 25 },
  { id: 9, discount: 34 },
  { id: 4, discount: 15 },
];

export default function TrendyCollection() {
  const items = TRENDY_PICKS.map(({ id, discount }) => {
    const product = products.find((p) => p.id === id);
    if (!product) return null;
    const originalPrice = Math.round(product.price / (1 - discount / 100));
    return { ...product, discount, originalPrice };
  }).filter(Boolean);

  if (items.length === 0) return null;

  const [hero, ...rest] = items;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 bg-[#f7f4ef] dark:bg-gray-900">
      {/* Heading */}
      {/* Heading */}
      <div
        className="flex items-end justify-between gap-4 mb-10"
        data-aos="fade-up"
      >
        <div>
          <span className="text-xs font-semibold tracking-widest text-orange-600 dark:text-orange-400 uppercase">
            Curated Picks
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
            Trendy Collection
          </h2>
        </div>
        <Link
          href="/products"
          prefetch={false}
          className="group hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors shrink-0"
        >
          Browse Full Collection
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Hero feature — large image, text overlaid directly, no card frame */}
        <Link
          href={`/products/${hero.id}`}
          prefetch={false}
          className="group relative lg:col-span-3 block aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[560px] overflow-hidden rounded-[32px]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <Image
            src={hero.image}
            alt={hero.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Discount, top-left */}
          <span className="absolute top-5 left-5 text-white text-xs font-bold tracking-widest uppercase border border-white/50 rounded-full px-3 py-1.5 backdrop-blur-sm">
            -{hero.discount}% Off
          </span>

          {/* Info + Shop Now, bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold text-white/70 uppercase tracking-widest mb-1.5">
                {hero.category}
              </p>
              <h3
                className="text-white text-2xl sm:text-3xl leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {hero.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">
                  ৳{hero.price.toLocaleString()}
                </span>
                <span className="text-white/50 text-sm line-through">
                  ৳{hero.originalPrice.toLocaleString()}
                </span>
              </div>
            </div>
            <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
              <svg
                className="w-5 h-5"
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
          </div>
        </Link>

        {/* Numbered horizontal list — vertically centered to match hero height */}
        <div
          className="lg:col-span-2 lg:h-[560px] flex flex-col justify-center divide-y divide-gray-200 dark:divide-gray-700"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          {rest.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              prefetch={false}
              className="group flex items-center gap-4 py-5 first:pt-0 last:pb-0"
            >
              {/* Index number */}
              <span
                className="text-2xl sm:text-3xl font-bold text-gray-300 dark:text-gray-600 shrink-0 w-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Thumbnail */}
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate mb-1.5">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    ৳{product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 line-through">
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 ml-auto sm:ml-0">
                    -{product.discount}%
                  </span>
                </div>
              </div>

              {/* Arrow, appears/shifts on hover */}
              <span
                aria-hidden="true"
                className="hidden sm:block text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile-only browse link (desktop version lives in the heading row) */}
      <div className="flex justify-center mt-8 sm:hidden" data-aos="fade-up">
        <Link
          href="/products"
          prefetch={false}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          Browse Full Collection →
        </Link>
      </div>
    </section>
  );
}

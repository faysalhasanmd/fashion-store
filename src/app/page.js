import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SaleBanner from "@/components/SaleBanner";
import Newsletter from "@/components/Newsletter";
import products from "@/data/products";
import NewArrivals from "@/components/NewArrivals";

export default function HomePage() {
  // Show first 4 in-stock products as "featured"
  const featuredProducts = products.filter((p) => p.inStock).slice(0, 4);

  // One representative product image per category, for the category grid
  const categories = Array.from(
    new Map(products.map((p) => [p.category, p])).values(),
  );

  return (
    <div className="dark:bg-gray-900">
      <Hero />

      <NewArrivals />

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 mb-12 bg-[#f7f4ef] dark:bg-gray-900">
        <div className="mb-8" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-orange-600 dark:text-orange-400 uppercase">
            Browse
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
            Search by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10">
          {categories.map((product, index) => (
            <Link
              prefetch={false}
              key={product.category}
              href={`/products/${product.id}`}
              className="group flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 80}
            >
              <div
                className="relative w-full aspect-square overflow-hidden bg-orange-50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700 transition-[border-radius,transform] duration-500 ease-out group-hover:-translate-y-1"
                style={{
                  borderRadius: "63% 37% 54% 46% / 46% 44% 56% 54%",
                }}
              >
                <div
                  className="absolute inset-0 transition-[border-radius] duration-500 ease-out"
                  style={{
                    borderRadius: "63% 37% 54% 46% / 46% 44% 56% 54%",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    sizes="(max-width: 768px) 33vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {product.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 bg-[#f7f4ef] dark:bg-gray-900">
        <div className="mb-8" data-aos="fade-up">
          <span className="text-xs font-semibold tracking-widest text-orange-600 dark:text-orange-400 uppercase">
            Handpicked
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="zoom-in">
          <Link
            href="/products"
            prefetch={false}
            className="group inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-600 hover:scale-105 transition-all"
          >
            View all
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Sale Banner */}
      <SaleBanner />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

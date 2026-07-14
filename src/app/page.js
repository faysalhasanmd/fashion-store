import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function HomePage() {
  // Show first 4 in-stock products as "featured"
  const featuredProducts = products.filter((p) => p.inStock).slice(0, 4);

  return (
    <div>
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
              Handpicked
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Featured Products
            </h2>
          </div>
          <a
            href="/products"
            className="hidden sm:inline text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

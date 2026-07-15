import Link from "next/link";
import Image from "next/image";
import { Truck, RotateCcw, ShieldCheck, BadgeCheck } from "lucide-react";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import ProductCard from "@/components/ProductCard";
import SaleBanner from "@/components/SaleBanner";
import products from "@/data/products";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over ৳2000",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day hassle-free returns",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Your data is always protected",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guarantee",
    description: "Handpicked, verified fabrics",
  },
];

export default function HomePage() {
  // Show first 4 in-stock products as "featured"
  const featuredProducts = products.filter((p) => p.inStock).slice(0, 4);

  // One representative product image per category, for the category grid
  const categories = Array.from(
    new Map(products.map((p) => [p.category, p])).values(),
  );

  return (
    <div>
      <Hero />

      <NewArrivals />

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
            Browse
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((product) => (
            <Link
              key={product.category}
              href="/products"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src={product.image}
                alt={product.category}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <span className="absolute bottom-3 left-0 right-0 text-center text-white text-xs sm:text-sm font-semibold uppercase tracking-wide">
                {product.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
              Handpicked
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sale Banner */}
      <SaleBanner />

      {/* Why Shop With Us */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
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
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2
          className="text-3xl sm:text-4xl text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          New Arrival
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Fresh drops from our latest collection — handpicked pieces to keep
          your wardrobe current this season.
        </p>
      </div>

      {/* Arch-shaped product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {items.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group text-center"
          >
            <div
              className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4"
              style={{ borderRadius: "200px 200px 0 0" }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
              {product.category}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

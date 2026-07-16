import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

export default function ProductCard({
  product,
  aosDelay = 0,
  priority = false,
}) {
  const { id, name, category, price, image, rating, inStock } = product;

  return (
    <div
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-duration="500"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <Link
          prefetch={false}
          href={`/products/${id}`}
          className="relative block w-full h-full"
        >
          <Image
            src={image}
            alt={name}
            fill
            priority={priority}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Dark overlay on hover, for button contrast */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />

        {!inStock && (
          <span className="absolute top-3 left-3 bg-gray-900/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            Out of Stock
          </span>
        )}

        {/* View Product button — centered on image, shows on hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href={`/products/${id}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-gray-900 text-xs font-bold uppercase tracking-wide px-5 py-2.5 shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            View Product
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Details */}
      <Link href={`/products/${id}`} className="block p-4">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
          {category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-gray-900">
            ৳{price.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            {rating}
          </div>
        </div>
      </Link>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { id, name, category, price, image, rating, inStock } = product;

  return (
    <Link
      href={`/products/${id}`}
      className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {!inStock && (
          <span className="absolute top-3 left-3 bg-gray-900/90 text-white text-xs font-medium px-2 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
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
      </div>
    </Link>
  );
}

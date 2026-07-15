import Image from "next/image";

export default function ProductImage({
  product,
  selectedColor,
  displayImage,
  priority,
}) {
  return (
    <div
      key={selectedColor}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 color-image-fade"
    >
      <Image
        src={displayImage}
        alt={`${product.name}${selectedColor ? ` - ${selectedColor}` : ""}`}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      {!product.inStock && (
        <span className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-medium px-3 py-1.5 rounded-full">
          Out of Stock
        </span>
      )}
    </div>
  );
}

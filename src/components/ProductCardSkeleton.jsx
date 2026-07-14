export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-[3/4] bg-gray-200" />

      {/* Text placeholders */}
      <div className="p-4 space-y-2">
        <div className="h-2.5 w-1/3 bg-gray-200 rounded" />
        <div className="h-3.5 w-3/4 bg-gray-200 rounded" />
        <div className="flex items-center justify-between mt-3">
          <div className="h-4 w-1/4 bg-gray-200 rounded" />
          <div className="h-3.5 w-8 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

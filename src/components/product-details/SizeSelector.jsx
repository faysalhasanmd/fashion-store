export default function SizeSelector({ sizes, selectedSize, onSelect }) {
  if (!sizes?.length) return null;

  return (
    <div className="mb-8">
      <p className="text-sm font-semibold text-gray-900 mb-3">
        Size: <span className="font-normal text-gray-600">{selectedSize}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`w-12 h-12 flex items-center justify-center rounded-full text-xs font-semibold border transition-colors ${
              selectedSize === size
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SizeSelector({ sizes, selectedSize, onSelect }) {
  if (!sizes?.length) return null;

  return (
    <div className="mb-8">
      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        Size:{" "}
        <span className="font-normal text-gray-600 dark:text-gray-400">
          {selectedSize}
        </span>
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`w-12 h-12 flex items-center justify-center rounded-full text-xs font-semibold border transition-colors ${
              selectedSize === size
                ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

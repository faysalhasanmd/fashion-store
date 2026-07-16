export default function ColorSelector({ colors, selectedColor, onSelect }) {
  if (!colors?.length) return null;

  return (
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        Color:{" "}
        <span className="font-normal text-gray-600 dark:text-gray-400">
          {selectedColor}
        </span>
      </p>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border transition-colors ${
              selectedColor === color
                ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

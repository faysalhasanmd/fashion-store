export default function ColorSelector({ colors, selectedColor, onSelect }) {
  if (!colors?.length) return null;

  return (
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-900 mb-3">
        Color:{" "}
        <span className="font-normal text-gray-600">{selectedColor}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border transition-colors ${
              selectedColor === color
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

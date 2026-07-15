export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold text-gray-900 mb-3">Quantity</p>
      <div className="inline-flex items-center border border-gray-300 rounded-full">
        <button
          onClick={onDecrease}
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-10 text-center text-sm font-semibold text-gray-900">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

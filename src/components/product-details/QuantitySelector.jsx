export default function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold text-gray-900 mb-3">Quantity</p>
      <div className="w-[90%] mx-auto sm:w-auto sm:mx-0 flex sm:inline-flex items-center justify-between sm:justify-start border-2 border-gray-300 bg-white rounded-full">
        <button
          onClick={onDecrease}
          className="w-14 h-14 sm:w-10 sm:h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors text-lg"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="text-base font-bold text-gray-900 sm:w-10 text-center">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="w-14 h-14 sm:w-10 sm:h-10 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors text-lg"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

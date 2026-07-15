import { Check, ShoppingBag } from "lucide-react";

export default function AddToCartButton({ inStock, justAdded, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={!inStock}
      className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-colors ${
        !inStock
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : justAdded
            ? "bg-green-600 text-white"
            : "bg-gray-900 text-white hover:bg-gray-800"
      }`}
    >
      {justAdded ? (
        <>
          <Check className="w-4 h-4" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </>
      )}
    </button>
  );
}

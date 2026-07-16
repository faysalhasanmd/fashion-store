import { Check, ShoppingBag } from "lucide-react";

export default function AddToCartButton({ inStock, justAdded, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={!inStock}
      className={`w-[90%] mx-auto sm:w-auto sm:mx-0 flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 ${
        !inStock
          ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
          : justAdded
            ? "bg-green-600 text-white scale-105"
            : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 hover:shadow-lg active:scale-95"
      }`}
    >
      {justAdded ? (
        <>
          <Check className="w-4 h-4 animate-[bounce_0.5s_ease-in-out]" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag
            className={`w-4 h-4 ${inStock ? "group-hover:animate-bounce" : ""}`}
          />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </>
      )}
    </button>
  );
}

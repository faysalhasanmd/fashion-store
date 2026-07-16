import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        Product not found
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        The product you are looking for does not exist or may have been removed.
      </p>
      <Link
        href="/products"
        className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      >
        Back to Products
      </Link>
    </div>
  );
}

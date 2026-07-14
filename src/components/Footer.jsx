import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">
            OXIVOS<span className="text-blue-500">.</span>
          </h3>
          <p className="text-sm text-gray-400">
            Modern fashion, thoughtfully curated. Explore our latest collection
            built for everyday style.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: hello@oxivos.com</li>
            <li>Call: 01688399676</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Oxivos Fashion Store. All rights reserved.
      </div>
    </footer>
  );
}

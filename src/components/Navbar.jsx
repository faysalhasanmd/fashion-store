"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Cart", href: "/cart" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 shrink-0"
        >
          OXIVOS<span className="text-blue-600">.</span>
        </Link>

        {/* Pill-shaped nav links (desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-white/70 border border-gray-200 rounded-full p-1.5 shadow-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: Cart button + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cart"
            className="relative hidden sm:flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900 hover:border-gray-900 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Cart icon only, for small screens */}
          <Link
            href="/cart"
            className="relative sm:hidden p-2"
            aria-label="Cart"
          >
            <ShoppingBag className="w-6 h-6 text-gray-900" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden p-2 border border-gray-300 rounded-full"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

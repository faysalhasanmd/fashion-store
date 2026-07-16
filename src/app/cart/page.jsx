"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { Trash2, ShoppingBag } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalPrice,
    totalItems,
    isLoaded,
  } = useCart();

  // Most recently added item first
  const sortedCartItems = [...cartItems].reverse();

  // Re-scan AOS whenever the cart list changes (add/remove/quantity update)
  useEffect(() => {
    AOS.refreshHard();
  }, [cartItems]);

  const handleRemove = (item) => {
    Swal.fire({
      title: "Remove this item?",
      text: `"${item.name}" will be removed from your cart.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#111827",
      cancelButtonColor: "#e5e7eb",
      customClass: {
        cancelButton: "swal-cancel-btn",
      },
      reverseButtons: true,
      borderRadius: "1rem",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item.id, item.selectedSize, item.selectedColor);
        Swal.fire({
          title: "Removed",
          text: `"${item.name}" has been removed from your cart.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleCheckout = () => {
    Swal.fire({
      title: "Order Placed! 🎉",
      html: `
        <p style="color:#6b7280; font-size:14px; margin-top:8px;">
          Thank you for shopping with <b>Oxivos</b>.<br/>
          Your order total of <b>৳${totalPrice.toLocaleString()}</b> has been confirmed.
        </p>
      `,
      icon: "success",
      confirmButtonText: "Continue Shopping",
      confirmButtonColor: "#111827",
    });
  };

  // Wait for cart to load from localStorage before rendering,
  // to avoid a flash of the empty state
  if (!isLoaded) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse dark:bg-gray-900">
        <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 bg-gray-200 dark:bg-gray-700 rounded-2xl"
            />
          ))}
        </div>
      </div>
    );
  }

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div
        className="max-w-3xl mx-auto px-4 py-24 text-center dark:bg-gray-900"
        data-aos="fade-up"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-5">
          <ShoppingBag className="w-7 h-7 text-gray-400 dark:text-gray-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Looks like you haven't added anything yet. Let's fix that.
        </p>
        <Link
          href="/products"
          prefetch={false}
          className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 dark:bg-gray-900">
      <h1
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1"
        data-aos="fade-up"
      >
        Your Cart
      </h1>
      <p
        className="text-sm text-gray-500 dark:text-gray-400 mb-8"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        <span className="font-semibold text-red-600 dark:text-red-400">
          {totalItems}
        </span>{" "}
        {totalItems === 1 ? "item" : "items"} in your cart
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {sortedCartItems.map((item, index) => (
            <div
              key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4"
              data-aos="fade-up"
              data-aos-delay={Math.min(index, 5) * 60}
              data-aos-duration="450"
            >
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.selectedColor && <span>{item.selectedColor}</span>}
                    {item.selectedColor && item.selectedSize && " · "}
                    {item.selectedSize && <span>Size {item.selectedSize}</span>}
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">
                    ৳{item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity control */}
                  <div className="inline-flex items-center border border-gray-300 dark:border-gray-600 rounded-full">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity - 1,
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-xs font-semibold text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity + 1,
                        )
                      }
                      className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sticky top-24"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Subtotal</span>
                <span>৳{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>Shipping</span>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Free
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ৳{totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Proceed to Checkout
            </button>

            <Link
              href="/products"
              prefetch={false}
              className="block text-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mt-4 transition-colors"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

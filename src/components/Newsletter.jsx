"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Mail, Send } from "lucide-react";
import { playfair } from "@/lib/fonts";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    Swal.fire({
      title: "Thanks for subscribing! 🎉",
      html: `<p style="color:#6b7280; font-size:14px;">We'll send updates to <b>${email}</b></p>`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#f97316",
    });

    setEmail("");
  };

  return (
    <section className="relative bg-orange-50/50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200/40 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`${playfair.variable} relative w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center`}
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
          data-aos="fade-up"
        >
          Discover the Latest{" "}
          <span className="italic text-orange-600 dark:text-orange-400">
            Fashion Drops
          </span>
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get the newest arrivals and exclusive offers delivered right to your
          inbox.
        </p>

        {/* Unique pill-shaped input with icon + integrated button */}
        <form
          onSubmit={handleSubscribe}
          className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1.5 sm:p-2 max-w-xl mx-auto shadow-sm focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 dark:focus-within:ring-orange-500/20 transition-all"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500 ml-3 sm:ml-4 shrink-0" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none min-w-0"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full hover:bg-orange-600 hover:scale-105 transition-all shrink-0"
          >
            <span className="hidden sm:inline">Subscribe</span>
            <Send className="w-4 h-4 sm:hidden" />
          </button>
        </form>

        <p
          className="text-xs text-gray-500 dark:text-gray-400 mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

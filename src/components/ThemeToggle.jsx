"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative inline-flex items-center w-16 h-8 rounded-full shrink-0 transition-colors duration-500 ease-in-out border ${
        isDark
          ? "bg-gray-800 border-gray-600"
          : "bg-orange-100 border-orange-200"
      }`}
    >
      {/* Background decoration: stars for dark, subtle rays for light */}
      <span
        className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="absolute top-1.5 left-3 w-0.5 h-0.5 rounded-full bg-white/70" />
        <span className="absolute top-3 left-5 w-1 h-1 rounded-full bg-white/50" />
        <span className="absolute bottom-1.5 left-2.5 w-0.5 h-0.5 rounded-full bg-white/60" />
      </span>

      {/* Sliding knob */}
      <span
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "translate-x-[34px] bg-gray-900" : "translate-x-1 bg-white"
        }`}
      >
        <Sun
          className={`absolute w-3.5 h-3.5 text-orange-500 transition-all duration-500 ${
            isDark
              ? "opacity-0 scale-50 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          }`}
        />
        <Moon
          className={`absolute w-3.5 h-3.5 text-blue-300 transition-all duration-500 ${
            isDark
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 -rotate-90"
          }`}
        />
      </span>
    </button>
  );
}

"use client";

import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative h-6 w-[42px] flex-shrink-0 rounded-full border border-black/10 bg-black/10 transition-colors dark:border-white/10 dark:bg-white/10"
    >
      <span
        className={`absolute top-[2px] left-[2px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-indigo-600 transition-transform duration-200 dark:bg-indigo-400 ${
          isDark ? "translate-x-[18px]" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <circle cx="12" cy="12" r="5" />
          </svg>
        )}
      </span>
    </button>
  );
}
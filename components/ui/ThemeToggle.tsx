"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/hooks/Usetheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300"
      style={{
        borderColor: "rgba(212,175,55,0.4)",
        background: isDark ? "rgba(30,58,95,0.4)" : "rgba(255,255,255,0.6)",
        color: "var(--gold)",
      }}
    >
      {isDark ? (
        <>
          <Sun size={14} strokeWidth={2} />
          <span
            className="text-xs font-semibold tracking-wider hidden sm:inline"
            style={{ color: "var(--gold)" }}
          >
            LIGHT
          </span>
        </>
      ) : (
        <>
          <Moon size={14} strokeWidth={2} />
          <span
            className="text-xs font-semibold tracking-wider hidden sm:inline"
            style={{ color: "var(--gold)" }}
          >
            DARK
          </span>
        </>
      )}
    </button>
  );
}
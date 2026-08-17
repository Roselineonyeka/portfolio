import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <span className="font-bold text-lg text-black dark:text-white">
        ROSELINE ONYEKA
      </span>
      <button
        onClick={toggleTheme}
        className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

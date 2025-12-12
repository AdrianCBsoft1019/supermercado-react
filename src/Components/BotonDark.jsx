import { useState, useEffect } from "react";

export default function BotonDark() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        fixed bottom-6 right-6 z-50
        px-4 py-3 rounded-full shadow-lg
        font-semibold text-sm
        bg-gray-900 text-white
        dark:bg-yellow-400 dark:text-black
        hover:scale-105 transition-all
      "
    >
      {darkMode ? "🌞 Claro" : "🌙 Oscuro"}
    </button>
  );
}

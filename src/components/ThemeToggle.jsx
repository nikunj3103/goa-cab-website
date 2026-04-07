import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    const isNowDark = document.documentElement.classList.contains("dark");

    localStorage.setItem("theme", isNowDark ? "dark" : "light");
    setDark(isNowDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="border border-black dark:border-white px-3 py-1 rounded-full"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
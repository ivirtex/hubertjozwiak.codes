// @ts-check
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeChanger({ className = "", extended = false }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`flex items-center justify-center rounded-full bg-gray-200 p-3 ring-zinc-800 ring-offset-4 ring-offset-zinc-100 duration-200 ease-in-out hover:ring-2 
      dark:bg-gray-800 dark:ring-zinc-200 dark:ring-offset-gray-900 ${className}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <div className="font-semibold">
          {theme === "dark" ? (
            <div className="flex">
              <MdOutlineLightMode size={25} />
              {extended && <span className="mx-2">Light mode</span>}
            </div>
          ) : (
            <div className="flex">
              <MdOutlineDarkMode size={25} />
              {extended && <span className="mx-2">Dark mode</span>}
            </div>
          )}
        </div>
      )}
    </button>
  );
}

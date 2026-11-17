import { useContext, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";

export const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useContext(SettingsContext);

  useEffect(() => {
    if (darkMode) {
      // Sets a global CSS custom property (--dynamic-bg) on the <html> element
      document.documentElement.style.setProperty(
        "--bg",
        `${darkMode ? color.text : color.background}`,
      );
    } else {
      document.documentElement.style.setProperty(
        "--bg",
        `${darkMode ? color.text : color.background}`,
      );
    }
  }, [darkMode]);

  return (
    <>
      <button
        type="button"
        role="switch"
        aria-checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        className="inline-flex items-center gap-3 cursor-pointer"
      >
        {/* Sliding Track */}
        <span
          className={`relative inline-flex items-center w-24 h-12 p-1 rounded-full border transition-colors duration-300 ${
            darkMode
              ? "bg-slate-800 border-slate-600"
              : "bg-slate-200 border-slate-300"
          }`}
        >
          {/* Sliding Thumb / Icon */}
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              darkMode
                ? "translate-x-12 text-[#2C3E50]"
                : "translate-x-0 text-[#2C3E50]"
            }`}
          >
            {darkMode ? (
              <MdDarkMode className="text-2xl shrink-0" aria-hidden="true" />
            ) : (
              <MdLightMode className="text-2xl shrink-0" aria-hidden="true" />
            )}
          </span>
        </span>
      </button>
    </>
  );
};

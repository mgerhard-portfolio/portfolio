import { useContext, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";

export const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useContext(SettingsContext);

  const handleDarkmodeToggle = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", prev ? "light" : "dark");
      return !prev;
    });
  };

  useEffect(() => {
    if (darkMode) {
      // Sets a global CSS custom property (--dynamic-bg) on the <html> element
      document.documentElement.style.setProperty(
        "--dynamic-bg",
        `url("/background-dark-mode.jpg")`,
      );
      document.documentElement.style.setProperty(
        "--text-h",
        `${darkMode ? color.background : color.text}`,
      );
    } else {
      document.documentElement.style.setProperty(
        "--dynamic-bg",
        `url("/background.jpg")`,
      );
      document.documentElement.style.setProperty(
        "--text-h",
        `${darkMode ? color.background : color.text}`,
      );
    }
  }, [darkMode]);

  return (
    <>
      <button
        type="button"
        onClick={handleDarkmodeToggle}
        className={`text-[${darkMode ? color.background : color.text}] cursor-pointer`}
      >
        <MdDarkMode
          className="text-5xl border p-2 shrink-0 rounded-full"
          aria-hidden="true"
        />
      </button>
    </>
  );
};

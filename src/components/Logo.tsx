import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

interface LogoProps {
  title: string;
  to: string;
}

export default function Logo({ title, to }: LogoProps) {
  const { darkMode } = useContext(SettingsContext);
  return (
    <Link
      className={`site-logo inline-flex flex-col items-center sm:items-start font-logo font-bold uppercase leading-none text-[${darkMode ? color.background : color.text}] no-underline w-max`}
      to={to}
      aria-label={`${title}, UX Engineer`}
    >
      <span className="text-3xl tracking-wide sm:text-4xl">{title}</span>
      <span className="mt-2 text-lg tracking-wide sm:text-xl">UX Engineer</span>
    </Link>
  );
}

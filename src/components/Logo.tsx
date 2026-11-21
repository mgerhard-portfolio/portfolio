import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import ProfileGirl from "./icons/ProfileGirl";

interface LogoProps {
  title: string;
  to: string;
}

export default function Logo({ title, to }: LogoProps) {
  const { darkMode } = useContext(SettingsContext);
  return (
    <Link
      className={`md:pt-4 site-logo flex items-center gap-4 font-logo font-bold uppercase leading-none text-[${darkMode ? color.background : color.text}] no-underline w-max`}
      to={to}
      aria-label={`${title}, Software Engineer`}
    >
      <div
        className={`hidden lg:flex items-center justify-center w-36 h-36 rounded-full bg-[${darkMode ? color.background : "none"}] overflow-hidden p-2 shrink-0`}
      >
        <ProfileGirl
          className="w-44 h-44 rounded-full object-cover hidden lg:block"
          color={color.text}
        />
      </div>

      <div className="flex flex-col">
        <div className="text-3xl tracking-wide sm:text-4xl">{title}</div>
        <div className="mt-2 text-lg tracking-wide sm:text-xl">
          Software Engineer
        </div>
      </div>
    </Link>
  );
}

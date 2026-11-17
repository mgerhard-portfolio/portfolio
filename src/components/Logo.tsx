import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import ProfileGirl from "../components/ProfileGirl";

interface LogoProps {
  title: string;
  to: string;
}

export default function Logo({ title, to }: LogoProps) {
  const { darkMode } = useContext(SettingsContext);
  return (
    <Link
      className={`site-logo flex items-center gap-4 font-logo font-bold uppercase leading-none text-[${darkMode ? color.background : color.text}] no-underline w-max`}
      to={to}
      aria-label={`${title}, Software Engineer`}
    >
      <ProfileGirl
        className="w-40 h-40 rounded-full object-cover hidden lg:block"
        color={darkMode ? color.background : color.text}
      />

      <div className="flex flex-col">
        <div className="text-3xl tracking-wide sm:text-4xl">{title}</div>
        <div className="mt-2 text-lg tracking-wide sm:text-xl">
          Software Engineer
        </div>
      </div>
    </Link>
  );
}

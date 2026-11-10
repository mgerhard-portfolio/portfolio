import type { ReactNode } from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";

interface NavLinkProps {
  title: string;
  to: string;
  icon: ReactNode;
}

export default function NavLink({ title, to, icon }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const { darkMode } = useContext(SettingsContext);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={`gap-1 align-center inline-flex items-center rounded-md p-4 font-medium no-underline shadow-lg duration-200 ${
        isActive && darkMode
          ? `bg-[#ECF0F1] text-[#2C3E50] border border-[#ECF0F1] hover:bg-[#34495E] hover:text-[#ECF0F1]`
          : isActive && !darkMode
            ? `bg-[#2C3E50] text-[#ECF0F1] border border-[${darkMode ? "#ECF0F1" : "#2C3E50"}] hover:bg-[#34495E] hover:text-[#ECF0F1]`
            : !isActive && darkMode
              ? `text-[#ECF0F1] border border-[${darkMode ? "#ECF0F1" : "#2C3E50"}] hover:bg-[#34495E] hover:text-[#ECF0F1]`
              : `text-[#2C3E50] border border-[${darkMode ? "#ECF0F1" : "#2C3E50"}] hover:bg-[#34495E] hover:text-[#ECF0F1]`
      }`}
      to={to}
    >
      <div aria-hidden="true">{icon}</div>
      {title.toUpperCase()}
    </Link>
  );
}

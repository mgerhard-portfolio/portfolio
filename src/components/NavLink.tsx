import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  title: string;
  to: string;
  icon: ReactNode;
}

export default function NavLink({ title, to, icon }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={`gap-1 align-center inline-flex items-center rounded-md border border-[#2C3E50] p-4 font-medium no-underline shadow-lg transition-colors duration-200 hover:bg-[#34495E] hover:text-[#ECF0F1] ${
        isActive ? "bg-[#2C3E50] text-[#ECF0F1]" : "bg-[#ECF0F1] text-[#2C3E50]"
      }`}
      to={to}
    >
      <div aria-hidden="true">{icon}</div>
      {title.toUpperCase()}
    </Link>
  );
}

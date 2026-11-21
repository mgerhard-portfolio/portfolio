import type { ReactNode } from "react";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

interface SideBarTextProps {
  heading?: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  link?: string;
  link2?: string;
}

export default function SideBarText({
  heading,
  subtitle,
  icon,
  children,
  className,
  link,
  link2,
}: SideBarTextProps) {
  const { darkMode } = useContext(SettingsContext);
  return (
    <div
      className={`text-[${darkMode ? color.background : color.text}] border-[${darkMode ? color.background : color.text}] ${className ?? ""}`}
    >
      {icon ? (
        <div className="flex items-center gap-6">
          <div
            className={`w-2 rounded-full self-stretch bg-[${darkMode ? color.background : color.text}]`}
            aria-hidden="true"
          />
          <div className="shrink-0 hidden md:flex">{icon}</div>
          <div
            className={`text-left text-[${darkMode ? color.background : color.text}]`}
          >
            {heading && <h2 className={`text-xl font-bold`}>{heading}</h2>}
            {subtitle && (
              <h3 className={`text-lg font-semibold`}>{subtitle}</h3>
            )}
            <p>{children}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {heading && <h2 className={`text-xl font-bold `}>{heading}</h2>}
          {subtitle && <h3 className={`text-lg font-semibold `}>{subtitle}</h3>}
          <div className="flex flex-col gap-1">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[${darkMode ? color.background : color.text}] hover:underline`}
              >
                {link}
              </a>
            )}
            {link2 && (
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[${darkMode ? color.background : color.text}] hover:underline`}
              >
                {link2}
              </a>
            )}
          </div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

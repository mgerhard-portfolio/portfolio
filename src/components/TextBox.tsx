import type { ReactNode } from "react";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

interface TextBoxProps {
  heading?: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function TextBox({
  heading,
  subtitle,
  icon,
  children,
  className,
}: TextBoxProps) {
  const { darkMode } = useContext(SettingsContext);
  return (
    <div
      className={`text-[${darkMode ? color.background : color.text}] border-[${darkMode ? color.background : color.text}] border p-6 rounded-md shadow-lg ${className ?? ""}`}
    >
      {icon ? (
        <div className="flex items-center gap-6">
          <div className="shrink-0">{icon}</div>
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
        <div className="text-left">
          {heading && <h2 className={`text-xl font-bold `}>{heading}</h2>}
          {subtitle && <h3 className={`text-lg font-semibold`}>{subtitle}</h3>}
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

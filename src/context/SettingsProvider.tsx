import { useState, type ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [colorBlindness, setColorBlindness] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hardOfVision, setHardOfVision] = useState(false);

  const primary = {
    midnightBlue: "#2C3E50",
    slateBlue: "#34495E",
  };

  const neutral = {
    gray: "#7F8C8D",
    silver: "#BDC3C7",
    cloud: "#ECF0F1",
  };

  return (
    <SettingsContext.Provider
      value={{
        colorBlindness,
        setColorBlindness,
        darkMode,
        setDarkMode,
        hardOfVision,
        setHardOfVision,
        colorScheme: darkMode
          ? {
              text: `text-[${neutral.cloud}]`,
              hoverBackground: `hover:bg-[${primary.midnightBlue}]`,
              hoverText: `hover:text-[${neutral.cloud}]`,
              // textH: neutral.silver,
              bg: `bg-[${primary.midnightBlue}]`,
              border: `border-[${primary.slateBlue}]`,
              codeBg: primary.slateBlue,
              accent: "#0070f3",
              accentBg: "#003366",
              accentBorder: "#0070f3",
              socialBg: primary.slateBlue,
              shadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }
          : {
              text: `text-[${primary.midnightBlue}]`,
              hoverBackground: `hover:bg-[${primary.slateBlue}]`,
              hoverText: `hover:text-[${neutral.cloud}]`,
              // textH: primary.slateBlue,
              bg: `bg-[${neutral.cloud}]`,
              border: `border-[${neutral.silver}]`,
              codeBg: neutral.cloud,
              accent: "#0070f3",
              accentBg: "#e6f0ff",
              accentBorder: "#0070f3",
              socialBg: neutral.cloud,
              shadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

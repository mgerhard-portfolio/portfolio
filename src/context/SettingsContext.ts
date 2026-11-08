import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface SettingsContextValue {
  colorBlindness: boolean;
  setColorBlindness: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  hardOfVision: boolean;
  setHardOfVision: Dispatch<SetStateAction<boolean>>;
  colorScheme: {
    text: string;
    hoverBackground: string;
    hoverText: string;
    // textH: string;
    bg: string;
    border: string;
    codeBg: string;
    accent: string;
    accentBg: string;
    accentBorder: string;
    socialBg: string;
    shadow: string;
  };
}

export const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
);

export function useSettings() {
  const settings = useContext(SettingsContext);

  if (!settings) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return settings;
}

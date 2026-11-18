import React from "react";
import CodeLikeAGirl from "./icons/CodeLikeAGirl";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";

export const Footer: React.FC = () => {
  const { darkMode } = React.useContext(SettingsContext);
  return (
    <footer
      className={`relative h-24 w-full overflow-hidden p-6 select-none sm:p-8 print:hidden my-14 md:my-0`}
    >
      <div className={`pointer-events-none absolute inset-0 z-0 h-full w-full`}>
        <CodeLikeAGirl
          className="w-full h-full shrink-0"
          color={darkMode ? color.background : color.text}
        />
      </div>
    </footer>
  );
};

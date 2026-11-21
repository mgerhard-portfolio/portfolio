import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMui,
  SiChakraui,
  SiReact,
} from "react-icons/si";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { color } from "../theme/color-scheme";

export default function FrontendSkillsList() {
  const darkMode = useContext(SettingsContext).darkMode;
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiReact size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          React
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiTypescript
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          TypeScript
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiTailwindcss
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Tailwind
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiHtml5 size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          HTML5
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiMui size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          MaterialUI
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiChakraui
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          ChakraUI
        </div>
      </div>
    </>
  );
}

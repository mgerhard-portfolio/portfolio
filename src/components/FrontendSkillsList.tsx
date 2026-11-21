import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMui,
  SiChakraui,
  SiReact,
} from "react-icons/si";
import { color } from "../theme/color-scheme";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function FrontendSkillsList() {
  const { darkMode } = useContext(SettingsContext);

  return (
    <div
      className={`flex flex-col gap-4 border border-[${darkMode ? color.background : color.text}] rounded-lg p-4 shadow-lg max-w-87.5 max-h-87.5`}
    >
      <h2 className={`text-xl font-bold `}>Frontend</h2>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-8`}>
        <div className="flex flex-col gap-2 items-center">
          <SiReact size={28} />
          <div>React</div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <SiTypescript size={28} />
          <div>TypeScript</div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <SiTailwindcss size={28} />
          <div>Tailwind</div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <SiHtml5 size={28} />
          <div>HTML5</div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <SiMui size={28} />
          <div>MaterialUI</div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <SiChakraui size={28} />
          <div>ChakraUI</div>
        </div>
      </div>
    </div>
  );
}

import { SiVite, SiGooglegemini, SiGit } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";
import { VscCopilot } from "react-icons/vsc";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";

export default function ToolsAndMethodologySkillsList() {
  const darkMode = useContext(SettingsContext).darkMode;
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiVite size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Vite
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <DiScrum size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Agile
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <FaAws size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          AWS
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <GrDeploy size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          CI/CD
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiGit size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Git
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiGooglegemini
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Gemini
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <VscCopilot
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Copilot
        </div>
      </div>
    </>
  );
}

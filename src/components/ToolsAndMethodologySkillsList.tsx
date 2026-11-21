import { SiVite, SiGooglegemini, SiGit } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";
import { VscCopilot } from "react-icons/vsc";
import SideBarText from "./SideBarText";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";

export default function ToolsAndMethodologySkillsList() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <SideBarText heading="Tools">
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 border border-[${darkMode ? color.background : color.text}] rounded-md p-4 shadow-md`}
      >
        <div className="flex flex-col gap-1 items-center">
          <SiVite size={28} />
          <div>Vite</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <DiScrum size={28} />
          <div>Agile</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <FaAws size={28} />
          <div>AWS</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <GrDeploy size={28} />
          <div>CI/CD</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiGit size={28} />
          <div>Git</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiGooglegemini size={28} />
          <div>Gemini</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <VscCopilot size={28} />
          <div>Copilot</div>
        </div>
      </div>
    </SideBarText>
  );
}

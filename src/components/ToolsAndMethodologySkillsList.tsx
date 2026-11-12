import { SiVite, SiGooglegemini, SiGit } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";
import { VscCopilot } from "react-icons/vsc";
import TextBox from "./TextBox";

export default function ToolsAndMethodologySkillsList() {
  return (
    <TextBox heading="Tools & Methodology">
      <div className="flex flex-row justify-center gap-8">
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
          <div>Git/GitHub</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiGooglegemini size={28} />
          <div>Google Gemini</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <VscCopilot size={28} />
          <div>VS Copilot</div>
        </div>
      </div>
    </TextBox>
  );
}

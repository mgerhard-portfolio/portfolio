import { SiApollographql, SiGraphql, SiPrisma } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import SideBarText from "./SideBarText";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { color } from "../theme/color-scheme";

export default function DataAndBackendSkillsList() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <SideBarText heading="Backend">
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 border border-[${darkMode ? color.background : color.text}] rounded-md p-4 shadow-md`}
      >
        <div className="flex flex-col gap-1 items-center">
          <SiApollographql size={28} />
          <div>Apollo</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <TbBrandCSharp size={28} />
          <div>C#</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiGraphql size={28} />
          <div>GraphQL</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiPrisma size={28} />
          <div>Prisma</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <FaCogs size={28} />
          <div>REST</div>
        </div>
      </div>
    </SideBarText>
  );
}

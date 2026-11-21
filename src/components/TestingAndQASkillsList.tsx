import { SiCypress, SiJest } from "react-icons/si";
import SideBarText from "./SideBarText";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import { useContext } from "react";

export default function TestingAndQASkillsList() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <SideBarText heading="Testing">
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 border border-[${darkMode ? color.background : color.text}] rounded-md p-4 shadow-md`}
      >
        <div className="flex flex-col gap-1 items-center">
          <SiCypress size={28} />
          <div>Cypress</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiJest size={28} />
          <div>Jest</div>
        </div>
      </div>
    </SideBarText>
  );
}

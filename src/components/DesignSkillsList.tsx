import { SiFigma } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import SideBarText from "./SideBarText";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { color } from "../theme/color-scheme";

export default function DesignSkillsList() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <SideBarText heading="Design">
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 border border-[${darkMode ? color.background : color.text}] rounded-md p-4 shadow-md`}
      >
        <div className="flex flex-col gap-1 items-center">
          <FaRegUser size={28} />
          <div>UX</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <MdOutlineDesignServices size={28} />
          <div>Design Systems</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiFigma size={28} />
          <div>Figma</div>
        </div>
      </div>
    </SideBarText>
  );
}

import { FaRegUser } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import { useContext } from "react";

export default function DesignSkillsList() {
  const darkMode = useContext(SettingsContext).darkMode;
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <FaRegUser size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          UX
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <MdOutlineDesignServices
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Design Systems
        </div>
      </div>
      {/* <div className="flex flex-col gap-1 items-center">
          <SiFigma size={28} />
          <div>Figma</div>
        </div> */}
    </>
  );
}

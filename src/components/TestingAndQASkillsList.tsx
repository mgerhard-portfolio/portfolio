import { SiCypress, SiJest } from "react-icons/si";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { color } from "../theme/color-scheme";

export default function TestingAndQASkillsList() {
  const darkMode = useContext(SettingsContext).darkMode;
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiCypress size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Cypress
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiJest size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Jest
        </div>
      </div>
    </>
  );
}

import { SiApollographql, SiGraphql, SiPrisma } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { color } from "../theme/color-scheme";

export default function DataAndBackendSkillsList() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiApollographql
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Apollo
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <TbBrandCSharp
          size={28}
          color={darkMode ? color.background : color.text}
        />
        <div style={{ color: darkMode ? color.background : color.text }}>
          C#
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiGraphql size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          GraphQL
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <SiPrisma size={28} color={darkMode ? color.background : color.text} />
        <div style={{ color: darkMode ? color.background : color.text }}>
          Prisma
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4">
        <FaCogs size={28} color={darkMode ? color.background : color.text} />
        <div
          className={`color-[${darkMode ? color.background : color.text}]`}
          style={{ color: darkMode ? color.background : color.text }}
        >
          REST
        </div>
      </div>
    </>
  );
}

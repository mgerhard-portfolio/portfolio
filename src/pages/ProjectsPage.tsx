import { useContext } from "react";
import SideBarText from "../components/SideBarText";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import Gear from "../components/icons/Gear";

function ProjectsPage() {
  const darkMode = useContext(SettingsContext).darkMode;
  return (
    <section className="page flex flex-col max-w-4xl">
      <div className="flex flex-col gap-12">
        <SideBarText
          heading="Personal Portfolio"
          link="https://mgerhard.com"
          link2="https://github.com/mgerhard-portfolio/portfolio"
        >
          A clean, responsive portfolio built to showcase my transition from
          frontend engineering into UX engineering. Designed and developed from
          scratch with React, TypeScript, and Tailwind CSS. Focused on clear
          visual hierarchy, accessible layouts, and bridging the gap between
          thoughtful user experience design and clean frontend code.
        </SideBarText>
        <div className="flex items-center">
          <div
            className={`h-px w-[50%] mx-auto bg-[${darkMode ? color.background : color.text}] shadow-md`}
          />
          <Gear
            className="h-15 w-15"
            color={darkMode ? color.background : color.text}
          />
          <div
            className={`h-px w-[50%] mx-auto bg-[${darkMode ? color.background : color.text}] shadow-md`}
          />
        </div>
        <SideBarText
          heading="GoldenToppers.com"
          link="https://goldentoppers.com"
          link2="https://github.com/goldentoppers/golden-toppers"
        >
          An independent web project built with a warm, welcoming, and grounded
          user experience. Created and maintained end-to-end, covering layout
          design, content structure, and frontend development. Focused on
          delivering a calm, easy-to-navigate interface with clear typography
          and a consistent brand identity.
        </SideBarText>
      </div>
    </section>
  );
}

export default ProjectsPage;

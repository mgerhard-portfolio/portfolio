import { useContext } from "react";
import DataAndBackendSkillsList from "../components/DataAndBackendSkillsList";
import DesignSkillsList from "../components/DesignSkillsList";
import FrontendSkillsList from "../components/FrontendSkillsList";
import TestingAndQASkillsList from "../components/TestingAndQASkillsList";
import ToolsAndMethodologySkillsList from "../components/ToolsAndMethodologySkillsList";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

function SkillsPage() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <section className="page max-w-4xl">
      <div className="gap-8 flex flex-col items-center">
        <div
          className={`flex gap-2 text-3xl tracking-wide sm:text-3xl text-[${darkMode ? color.background : color.text}] `}
        >
          <div>&lt;</div>
          <div>My</div>
          <div>Skills</div>
          <div>/&gt;</div>
        </div>
        <div className={`flex flex-col gap-8 px-8 items-center text-center`}>
          <FrontendSkillsList />
          <DesignSkillsList />
          <ToolsAndMethodologySkillsList />
          <DataAndBackendSkillsList />
          <TestingAndQASkillsList />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;

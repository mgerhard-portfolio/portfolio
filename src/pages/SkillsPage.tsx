import DataAndBackendSkillsList from "../components/DataAndBackendSkillsList";
import DesignSkillsList from "../components/DesignSkillsList";
import FrontendSkillsList from "../components/FrontendSkillsList";
import TestingAndQASkillsList from "../components/TestingAndQASkillsList";
import ToolsAndMethodologySkillsList from "../components/ToolsAndMethodologySkillsList";

function SkillsPage() {
  return (
    <section className="page">
      <div className="flex flex-col gap-4 px-8 ">
        <FrontendSkillsList />
        <DesignSkillsList />
        <ToolsAndMethodologySkillsList />
        <DataAndBackendSkillsList />
        <TestingAndQASkillsList />
      </div>
    </section>
  );
}

export default SkillsPage;

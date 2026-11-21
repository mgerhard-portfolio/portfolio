import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import SkillsList from "../components/SkillsList";

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
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8`}>
          <SkillsList />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;

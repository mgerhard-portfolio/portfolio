import {
  MdOutlineCode,
  MdOutlineDiversity1,
  MdOutlineEngineering,
  MdOutlinePsychology,
} from "react-icons/md";
import SideBarText from "../components/SideBarText";
import AboutMeGirl from "../components/icons/AboutMeGirl";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";

function AboutPage() {
  const { darkMode } = useContext(SettingsContext);
  const activeColor = darkMode ? color.background : color.text;

  return (
    <section className="page max-w-4xl mx-auto px-4">
      <div className="flex flex-col mx-auto items-center gap-6">
        {/* Heading */}
        <div
          style={{ color: activeColor }}
          className="flex gap-2 text-3xl tracking-wide sm:text-3xl"
        >
          <div>&lt;</div>
          <div>About</div>
          <div>Me</div>
          <div>/&gt;</div>
        </div>

        {/* Center Avatar Below Title */}
        <AboutMeGirl
          className="h-56 w-56 shrink-0 mx-auto rounded-full"
          color={activeColor}
        />

        {/* 2x2 Square Quadrant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <SideBarText
            className="w-full p-4"
            icon={<MdOutlineEngineering size={32} />}
          >
            Software Engineer with 8 years of software engineering experience
            specializing in the intersection of user interface design and robust
            frontend implementation.
          </SideBarText>

          <SideBarText
            className="w-full p-4"
            icon={<MdOutlineCode size={32} />}
          >
            Translating high-fidelity Figma prototypes into highly accessible,
            component-architected web applications using React, TypeScript,
            Tailwind CSS, and AI tooling.
          </SideBarText>

          <SideBarText
            className="w-full p-4"
            icon={<MdOutlineDiversity1 size={32} />}
          >
            Experienced in collaborating across design and engineering teams to
            establish reusable component systems, optimize frontend performance,
            and ensure design fidelity.
          </SideBarText>

          <SideBarText
            className="w-full p-4"
            icon={<MdOutlinePsychology size={32} />}
          >
            Combining a user-centered design mindset with deep technical
            execution to deliver intuitive, seamless digital product workflow.
          </SideBarText>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

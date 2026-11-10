import {
  MdOutlineCode,
  MdOutlineDiversity1,
  MdOutlineEngineering,
  MdOutlinePsychology,
} from "react-icons/md";
import TextBox from "../components/TextBox";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

function HomePage() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <section className="page">
      <div
        className={`text-4xl tracking-wide sm:text-3xl px-8 pb-4 text-[${darkMode ? color.background : color.text}] max-w-[75%] mx-auto`}
      >
        Hello World!
      </div>
      <div
        className={`text-3xl tracking-wide sm:text-2xl px-8 text-[${darkMode ? color.background : color.text}] max-w-[75%] mx-auto`}
      >
        I am a passionate UX Engineer and Software Developer dedicated to
        creating intuitive and efficient digital experiences.
      </div>
      <div className="flex flex-col gap-4 justify-center md:p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <TextBox
            className="md:w-[50%]"
            text="UX Engineer with 8 years of software engineering experience specializing
        in the intersection of user interface design and robust frontend
        implementation."
            icon={<MdOutlineEngineering size={32} />}
          />
          <TextBox
            className="md:w-[50%]"
            text="Translating high-fidelity Figma prototypes into highly accessible,
        component-architected web applications using React, TypeScript, Tailwind
        CSS, and AI tooling."
            icon={<MdOutlineCode size={32} />}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <TextBox
            className="md:w-[50%]"
            text="Experienced in collaborating across design and
        engineering teams to establish reusable component systems, optimize
        frontend performance, and ensure design fidelity."
            icon={<MdOutlineDiversity1 size={32} />}
          />
          <TextBox
            className="md:w-[50%]"
            text="Combining a user-centered design mindset with deep technical execution
        to deliver intuitive, seamless digital product workflow."
            icon={<MdOutlinePsychology size={32} />}
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;

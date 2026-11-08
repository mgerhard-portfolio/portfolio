import {
  MdOutlineCode,
  MdOutlineDiversity1,
  MdOutlineEngineering,
  MdOutlinePsychology,
} from "react-icons/md";
import TextBox from "../components/TextBox";

function HomePage() {
  return (
    <section className="page">
      <div className="flex flex-col gap-4 justify-center px-4 sm:px-12 md:px-32 lg:px-52">
        <TextBox
          text="UX Engineer with 8 years of software engineering experience specializing
        in the intersection of user interface design and robust frontend
        implementation."
          icon={<MdOutlineEngineering size={32} />}
        />
        <TextBox
          text="Translating high-fidelity Figma prototypes into highly accessible,
        component-architected web applications using React, TypeScript, Tailwind
        CSS, and AI tooling."
          icon={<MdOutlineCode size={32} />}
        />
        <TextBox
          text="Experienced in collaborating across design and
        engineering teams to establish reusable component systems, optimize
        frontend performance, and ensure design fidelity."
          icon={<MdOutlineDiversity1 size={32} />}
        />
        <TextBox
          text="Combining a user-centered design mindset with deep technical execution
        to deliver intuitive, seamless digital product workflow."
          icon={<MdOutlinePsychology size={32} />}
        />
      </div>
    </section>
  );
}

export default HomePage;

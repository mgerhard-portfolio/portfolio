import {
  MdOutlineCode,
  MdOutlineDiversity1,
  MdOutlineEngineering,
  MdOutlinePsychology,
} from "react-icons/md";
import SideBarText from "../components/SideBarText";

function AboutPage() {
  return (
    <section className="page">
      <div className="flex flex-col gap-4 justify-center 2xl:max-w-[75%] mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <SideBarText
            className="md:w-[50%] p-6"
            icon={<MdOutlineEngineering size={32} />}
          >
            Software Engineer with 8 years of software engineering experience
            specializing in the intersection of user interface design and robust
            frontend implementation.
          </SideBarText>
          <SideBarText
            className="md:w-[50%] p-6"
            icon={<MdOutlineCode size={32} />}
          >
            Translating high-fidelity Figma prototypes into highly accessible,
            component-architected web applications using React, TypeScript,
            Tailwind CSS, and AI tooling.
          </SideBarText>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <SideBarText
            className="md:w-[50%] p-6"
            icon={<MdOutlineDiversity1 size={32} />}
          >
            Experienced in collaborating across design and engineering teams to
            establish reusable component systems, optimize frontend performance,
            and ensure design fidelity.
          </SideBarText>
          <SideBarText
            className="md:w-[50%] p-6"
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

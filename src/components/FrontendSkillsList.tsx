import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMui,
  SiChakraui,
  SiReact,
} from "react-icons/si";
import TextBox from "./TextBox";

export default function FrontendSkillsList() {
  return (
    <TextBox heading="Frontend">
      <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-col gap-1 items-center">
          <SiReact size={28} />
          <div>React</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiTypescript size={28} />
          <div>TypeScript</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiTailwindcss size={28} />
          <div>Tailwind CSS</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiHtml5 size={28} />
          <div>HTML5</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiMui size={28} />
          <div>Material UI</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiChakraui size={28} />
          <div>Chakra UI</div>
        </div>
      </div>
    </TextBox>
  );
}

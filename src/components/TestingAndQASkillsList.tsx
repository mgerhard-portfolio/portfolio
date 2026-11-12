import { SiCypress, SiJest } from "react-icons/si";
import TextBox from "./TextBox";

export default function TestingAndQASkillsList() {
  return (
    <TextBox heading="Testing & QA">
      <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-col gap-1 items-center">
          <SiCypress size={28} />
          <div>Cypress</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiJest size={28} />
          <div>Jest</div>
        </div>
      </div>
    </TextBox>
  );
}

import { SiApollographql, SiGraphql, SiPrisma } from "react-icons/si";
import { FaCogs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import TextBox from "./TextBox";

export default function DataAndBackendSkillsList() {
  return (
    <TextBox heading="Data & Backend">
      <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-col gap-1 items-center">
          <SiApollographql size={28} />
          <div>Apollo</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <TbBrandCSharp size={28} />
          <div>C#</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiGraphql size={28} />
          <div>GraphQL</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiPrisma size={28} />
          <div>Prisma</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <FaCogs size={28} />
          <div>REST</div>
        </div>
      </div>
    </TextBox>
  );
}

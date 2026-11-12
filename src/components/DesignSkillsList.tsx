import { SiFigma } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import TextBox from "./TextBox";

export default function DesignSkillsList() {
  return (
    <TextBox heading="Design">
      <div className="flex flex-row justify-center gap-8">
        <div className="flex flex-col gap-1 items-center">
          <FaRegUser size={28} />
          <div>UX</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <MdOutlineDesignServices size={28} />
          <div>Design Systems</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <SiFigma size={28} />
          <div>Figma</div>
        </div>
      </div>
    </TextBox>
  );
}

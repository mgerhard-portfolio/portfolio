import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMui,
  SiChakraui,
  SiReact,
  SiCypress,
  SiJest,
  SiVite,
  SiGit,
  SiGooglegemini,
  SiGraphql,
  SiPrisma,
} from "react-icons/si";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { color } from "../theme/color-scheme";
import { DiScrum } from "react-icons/di";
import { FaAws, FaCogs } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { VscCopilot } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export default function SkillsList() {
  const darkMode = useContext(SettingsContext).darkMode;
  const iconColor = darkMode ? color.background : color.text;
  const skills = [
    { name: "React", icon: <SiReact size={28} color={iconColor} /> },
    { name: "TypeScript", icon: <SiTypescript size={28} color={iconColor} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} color={iconColor} /> },
    { name: "HTML5", icon: <SiHtml5 size={28} color={iconColor} /> },
    { name: "MaterialUI", icon: <SiMui size={28} color={iconColor} /> },
    { name: "ChakraUI", icon: <SiChakraui size={28} color={iconColor} /> },
    {
      name: "Vite",
      icon: <SiVite size={28} color={iconColor} />,
    },
    {
      name: "Agile",
      icon: <DiScrum size={28} color={iconColor} />,
    },
    {
      name: "AWS",
      icon: <FaAws size={28} color={iconColor} />,
    },
    {
      name: "CI/CD",
      icon: <GrDeploy size={28} color={iconColor} />,
    },
    {
      name: "Git",
      icon: <SiGit size={28} color={iconColor} />,
    },
    {
      name: "Gemini",
      icon: <SiGooglegemini size={28} color={iconColor} />,
    },
    {
      name: "Copilot",
      icon: <VscCopilot size={28} color={iconColor} />,
    },
    {
      name: "C#",
      icon: <TbBrandCSharp size={28} color={iconColor} />,
    },
    {
      name: "GraphQL",
      icon: <SiGraphql size={28} color={iconColor} />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma size={28} color={iconColor} />,
    },
    {
      name: "REST",
      icon: <FaCogs size={28} color={iconColor} />,
    },
    {
      name: "Cypress",
      icon: <SiCypress size={28} color={iconColor} />,
    },
    {
      name: "Jest",
      icon: <SiJest size={28} color={iconColor} />,
    },
  ] as Skill[];

  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 items-center justify-center shadow-2xl rounded-lg p-4"
        >
          {skill.icon}
          <div style={{ color: darkMode ? color.background : color.text }}>
            {skill.name}
          </div>
        </div>
      ))}
    </>
  );
}

import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

interface ResumeExperienceSectionProps {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

export const ResumeExperienceSection = ({
  jobTitle,
  companyName,
  startDate,
  endDate,
  location,
  description,
}: ResumeExperienceSectionProps) => {
  const { darkMode } = useContext(SettingsContext);

  return (
    <div
      className={`text-[${darkMode ? color.background : color.text}] border-[${darkMode ? color.background : color.text}] border p-6 rounded-md shadow-lg`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold ">{jobTitle}</h2>
          <h3 className="text-sm font-semibold">{companyName}</h3>
        </div>

        <p>{`${startDate} – ${endDate} ${location}`}</p>
      </div>
      <ul className="p-6 list-disc flex flex-col items-start text-start">
        {description.map((item, index) => (
          <li className="" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

export default function DownloadResumeTextButton() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <div
      className={`border-2 w-fit p-6 text-[${darkMode ? color.background : color.text}]`}
    >
      Download Resume
    </div>
  );
}

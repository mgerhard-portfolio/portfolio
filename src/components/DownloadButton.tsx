import { useContext } from "react";
import { MdFileDownload } from "react-icons/md";
import { color } from "../theme/color-scheme";
import { SettingsContext } from "../context/SettingsContext";

export const DownloadButton = () => {
  const { darkMode } = useContext(SettingsContext);
  const handleExportPDF = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.print();
  };

  return (
    <a
      href="/Maxine_Gerhard_Resume.pdf"
      download="Maxine_Gerhard_Resume.pdf"
      onClick={handleExportPDF}
      className={` text-2xl text-[${darkMode ? color.background : color.text}]`}
    >
      {/* Download */}
      <MdFileDownload
        className="text-5xl border p-2 shrink-0 rounded-full"
        aria-hidden="true"
      />
    </a>
  );
};

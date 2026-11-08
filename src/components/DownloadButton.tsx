import { MdFileDownload } from "react-icons/md";

export const DownloadButton = () => {
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
    >
      Download
      <MdFileDownload aria-hidden="true" />
    </a>
  );
};

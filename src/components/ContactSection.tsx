import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";

export default function ContactSection() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <div
      className={`flex flex-col gap-2 text-[${darkMode ? color.background : color.text}] border rounded-md p-4`}
    >
      <div className="flex gap-2">
        <p>
          <b>Email:</b>
        </p>
        <p>maxinegerhard@gmail.com</p>
      </div>
      <div className="flex gap-2">
        <p>
          <b>LinkedIn:</b>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/maxinegerhard/"
        >
          https://www.linkedin.com/in/maxinegerhard/
        </a>
      </div>

      <div className="flex gap-2">
        <p>
          <b>GitHub:</b>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mgerhard-portfolio"
        >
          https://github.com/mgerhard-portfolio
        </a>
      </div>
      <div className="flex gap-2">
        <p>
          <b>Golden Toppers:</b>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.goldentoppers.com"
        >
          https://www.goldentoppers.com
        </a>
      </div>
    </div>
  );
}

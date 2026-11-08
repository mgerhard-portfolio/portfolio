import type { ReactNode } from "react";

interface TextBoxProps {
  heading?: string;
  text: string;
  icon?: ReactNode;
}

export default function TextBox({ heading, text, icon }: TextBoxProps) {
  return (
    <div className="text-[#2C3E50] border-[#2C3E50] border p-6 rounded-md shadow-lg">
      {icon ? (
        <div className="flex items-center gap-6">
          {/* Icon Wrapper to keep it aligned at the top left */}
          <div className="shrink-0">{icon}</div>

          {/* Content Wrapper for Heading and Text */}
          <div className="text-left">
            {heading && <h2 className="text-xl font-bold ">{heading}</h2>}
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className="text-left">
          {heading && <h2 className="text-xl font-bold ">{heading}</h2>}
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

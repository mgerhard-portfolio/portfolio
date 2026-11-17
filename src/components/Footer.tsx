import React from "react";

interface FooterProps {
  backgroundImage: string;
}

export const Footer: React.FC<FooterProps> = ({ backgroundImage }) => (
  <footer className="relative w-full overflow-hidden p-6 select-none sm:p-8 print:hidden">
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
      <img
        src={backgroundImage}
        alt=""
        className="h-full w-full object-cover object-bottom mix-blend-multiply saturate-[0.8]
          filter"
      />

      <div
        className="absolute inset-0 h-full w-full bg-linear-to-b from-[#f5f2eb] via-[#f5f2eb]/60
          to-transparent"
        aria-hidden="true"
      />
    </div>
  </footer>
);

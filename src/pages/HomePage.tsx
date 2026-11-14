import Email from "../components/Email";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import DownloadResumeTextButton from "../components/DownloadResumeTextButton";

function HomePage() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <section className="page">
      <div className="pt-6 md:pt-8 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/background.jpg"
            alt="Maxine Gerhard Profile Picture"
            className="object-cover md:max-w-[60%] mx-auto rounded-lg  shadow-2xl"
          />
          <div className="flex flex-col gap-4 items-center text-center md:items-end md:text-right">
            <div
              className={`flex gap-2 text-3xl tracking-wide sm:text-3xl pt-8 md:pt-0 text-[${darkMode ? color.background : color.text}] `}
            >
              <div>&lt;</div>
              <div>Hello</div>
              <div>World!</div>
              <div>/&gt;</div>
            </div>
            <div
              className={`text-2xl tracking-wide sm:text-2xl text-[${darkMode ? color.background : color.text}] mx-auto pt-4`}
            >
              I am a passionate Software Engineer dedicated to creating
              intuitive, accessible, and efficient digital experiences. I am
              currently seeking a UX Engineer role to bridge the gap between
              design and frontend architecture.
            </div>
            <div className="pt-2 flex flex-col gap-6 items-center md:items-end">
              <Email />
              {/* <DownloadResumeTextButton /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

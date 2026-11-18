import ContactSection from "../components/ContactSection";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { color } from "../theme/color-scheme";
import SilhouetteGirl from "../components/icons/SilhouetteGirl";

function HomePage() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <section className="page max-w-4xl">
      <div className="flex flex-col gap-6 justify-center text-center items-center">
        <div
          className={`flex gap-2 text-3xl tracking-wide sm:text-3xl md:hidden text-[${darkMode ? color.background : color.text}] `}
        >
          <div>&lt;</div>
          <div>Hello</div>
          <div>World!</div>
          <div>/&gt;</div>
        </div>
        {darkMode ? (
          <SilhouetteGirl
            className="w-full lg:hidden -scale-x-100"
            color={color.background}
          />
        ) : (
          <SilhouetteGirl
            className="w-full lg:hidden -scale-x-100"
            color={color.text}
          />
        )}
        <div className="flex gap-8">
          <div className="items-center flex flex-col gap-8 max-w-lg">
            <div
              className={`flex-row gap-2 text-3xl tracking-wide sm:text-3xl hidden md:flex text-[${darkMode ? color.background : color.text}] `}
            >
              <div>&lt;</div>
              <div>Hello</div>
              <div>World!</div>
              <div>/&gt;</div>
            </div>
            <div
              className={`text-2xl max-w-2xl tracking-wide sm:text-2xl text-[${darkMode ? color.background : color.text}]`}
            >
              I am a passionate Software Engineer dedicated to creating
              intuitive, accessible, and efficient digital experiences. I am
              currently seeking a UX Engineer role to bridge the gap between
              design and frontend architecture.
            </div>
            <ContactSection />
          </div>
          {darkMode ? (
            <SilhouetteGirl
              className="w-full hidden lg:flex -scale-x-100"
              color={color.background}
            />
          ) : (
            <SilhouetteGirl
              className="w-full hidden lg:flex -scale-x-100"
              color={color.text}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HomePage;

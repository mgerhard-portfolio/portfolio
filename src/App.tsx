import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavLink from "./components/NavLink";
import Logo from "./components/Logo";
import {
  MdBusinessCenter,
  MdCode,
  MdFolderOpen,
  MdHome,
  MdOutlinePerson,
} from "react-icons/md";
import { DarkModeButton } from "./components/DarkModeButton";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import { color } from "./theme/color-scheme";
import AboutMePage from "./pages/AboutPage";
import { Footer } from "./components/Footer";
import { MobileNav } from "./components/MobileNav";
import Gear from "./components/icons/Gear";

function App() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <BrowserRouter>
      <header
        className={`flex print:hidden px-4 md:px-12 md:pt-0 pt-4 text-[${darkMode ? color.background : color.text}] `}
      >
        <Gear
          className="fixed top-0 left-0 w-300 translate-x-[-30%] translate-y-[-30%] -z-10 pointer-events-none opacity-15"
          color={darkMode ? color.background : color.text}
        />
        <Gear
          className="fixed top-30 -right-100 -z-10 pointer-events-none opacity-15 w-250"
          color={darkMode ? color.background : color.text}
        />
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="flex justify-between items-start md:items-center w-full">
            <Logo title="Maxine Gerhard" to="/" />
            <div className="flex items-start gap-8">
              <DarkModeButton />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="site-nav" aria-label="Main navigation">
              <NavLink title="Home" to="/" icon={<MdHome />} />
              <NavLink
                title="Projects"
                to="/projects"
                icon={<MdBusinessCenter />}
              />
              <NavLink
                title="Experience"
                to="/experience"
                icon={<MdFolderOpen />}
              />
              <NavLink title="Skills" to="/skills" icon={<MdCode />} />
              <NavLink title="About" to="/about" icon={<MdOutlinePerson />} />
            </nav>
          </div>
        </div>
      </header>

      <main
        className={`page-content print:hidden pt-8 px-4 md:px-12 md:pt-12 m-auto`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;

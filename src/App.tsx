import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavLink from "./components/NavLink";
import Logo from "./components/Logo";
import { MdBusinessCenter, MdCode, MdFolderOpen, MdHome } from "react-icons/md";
import { DownloadButton } from "./components/DownloadButton";
import { DarkModeButton } from "./components/DarkModeButton";
import { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
import { color } from "./theme/color-scheme";

function App() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <BrowserRouter>
      <header
        className={`flex print:hidden px-12 pt-12 text-[${darkMode ? color.background : color.text}]`}
      >
        <div className="flex flex-col gap-8 w-full">
          <div className="flex justify-between">
            <Logo title="Maxine Gerhard" to="/" />
            <div className="flex items-start gap-2">
              <DarkModeButton />
              <DownloadButton />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="site-nav " aria-label="Main navigation">
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
            </nav>
          </div>
        </div>
      </header>

      <main className={`page-content min-h-screen print:hidden `}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

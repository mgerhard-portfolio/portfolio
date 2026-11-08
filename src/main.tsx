import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SettingsProvider } from "./context/SettingsProvider";
import { DownloadTemplate } from "./components/DownloadTemplate";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsProvider>
      <DownloadTemplate />
      <App />
    </SettingsProvider>
  </StrictMode>,
);

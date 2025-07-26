import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Team } from "./screens/Team/Team";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Team />
  </StrictMode>,
);

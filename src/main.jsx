import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as bootstrap from "bootstrap";

//Import Css
import "./assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

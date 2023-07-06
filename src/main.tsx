import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./pages/_app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

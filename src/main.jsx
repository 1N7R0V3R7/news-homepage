import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ToggleProvider from "./ToggleProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToggleProvider>
    <App />
  </ToggleProvider>
);

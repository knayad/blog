import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <HashRouter>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  // </HashRouter>
);

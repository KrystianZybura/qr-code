import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

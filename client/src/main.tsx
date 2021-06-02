import "./index.css";
import App from "./App";
import { hydrate } from "react-dom";
import React, { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

hydrate(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,
  document.querySelector("#root")
);

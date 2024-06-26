import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import dot from 'dotenv'

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
// dot.config();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
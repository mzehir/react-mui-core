import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AppTheme from "./AppTheme";

ReactDOM.render(
  <BrowserRouter>
    <AppTheme />
  </BrowserRouter>,
  document.getElementById("root")
);

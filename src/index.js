import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AppTheme from "./AppTheme";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppTheme />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "store/store";

import App from "components/App";
import ScrollToTop from "components/ScrollToTop";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

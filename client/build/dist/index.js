import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import App from "./App.js";
import "./index.css.proxy.js";
import { BrowserRouter } from "../_snowpack/pkg/react-router-dom.js";
ReactDOM.render( /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById("root"));
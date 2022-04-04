import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom/client.js";
import App from "./App.js";
import "./index.css.proxy.js";
import { BrowserRouter } from "../_snowpack/pkg/react-router-dom.js";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render( /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null)));
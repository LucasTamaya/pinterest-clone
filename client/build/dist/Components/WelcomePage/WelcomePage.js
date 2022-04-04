import React from "../../../_snowpack/pkg/react.js";
import { Link } from "../../../_snowpack/pkg/react-router-dom.js";
import PinterestIcon from "../../../_snowpack/pkg/@mui/icons-material/Pinterest.js";
import "./WelcomePage.css.proxy.js";

function WelcomePage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "welcomePage__container"
  }, /*#__PURE__*/React.createElement(PinterestIcon, {
    sx: {
      fontSize: 40,
      color: "red"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "welcomePage__title"
  }, "Welcome to Pinterest"), /*#__PURE__*/React.createElement("div", {
    className: "welcomePage__btnContainer"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/login",
    className: "welcomePage__loginBtn"
  }, "Login"), /*#__PURE__*/React.createElement(Link, {
    to: "/register",
    className: "welcomePage__registerBtn"
  }, "Register")));
}

export default WelcomePage;
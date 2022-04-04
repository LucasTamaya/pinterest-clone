import React from "../../../_snowpack/pkg/react.js";
import { Link } from "../../../_snowpack/pkg/react-router-dom.js";
import PinterestIcon from "../../../_snowpack/pkg/@mui/icons-material/Pinterest.js";
import "./Header.css.proxy.js";
import getUsernameInitial from "../../utils/getUsernameInitial.js";

function Header() {
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  const usernameInitial = getUsernameInitial(username);
  console.log(usernameInitial);
  return /*#__PURE__*/React.createElement("header", {
    className: "header__container"
  }, /*#__PURE__*/React.createElement(PinterestIcon, {
    sx: {
      fontSize: 40,
      color: "red"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav__container"
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/my-posts/${id}`,
    className: "nav__link"
  }, "My Pins"), /*#__PURE__*/React.createElement(Link, {
    to: "/saved-pins",
    className: "nav__link"
  }, "Saved Pins")), /*#__PURE__*/React.createElement("div", {
    className: "header__profile"
  }, usernameInitial));
}

export default Header;
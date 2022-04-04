import React from "../../../_snowpack/pkg/react.js";
import CloseIcon from "../../../_snowpack/pkg/@mui/icons-material/Close.js";
import "./AlreadySavedError.css.proxy.js";

function AlreadySavedError({
  errorMessage,
  setAlreadySavedErrorMessage
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "alreadySavedError__container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "alreadySavedError__message"
  }, errorMessage), /*#__PURE__*/React.createElement(CloseIcon, {
    sx: {
      fontSize: 20,
      color: "red",
      cursor: "pointer"
    },
    onClick: () => setAlreadySavedErrorMessage("")
  }));
}

export default AlreadySavedError;
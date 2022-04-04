import React from "../../../_snowpack/pkg/react.js";
import CloseIcon from "../../../_snowpack/pkg/@mui/icons-material/Close.js";
import "./SavePostSuccess.css.proxy.js";

function SavePostSuccess({
  successMessage,
  setSaveSuccessMessage
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "savePostSuccess__container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "savePostSuccess__message"
  }, successMessage), /*#__PURE__*/React.createElement(CloseIcon, {
    sx: {
      fontSize: 20,
      color: "#228b22",
      cursor: "pointer"
    },
    onClick: () => setSaveSuccessMessage("")
  }));
}

export default SavePostSuccess;
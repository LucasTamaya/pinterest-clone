import React from "../../../_snowpack/pkg/react.js";
import "./GoBackBtn.css.proxy.js";
import { useNavigate } from "../../../_snowpack/pkg/react-router-dom.js";

function GoBackBtn() {
  const navigate = useNavigate();
  return /*#__PURE__*/React.createElement("button", {
    className: "goBack__btn",
    onClick: () => navigate(-1)
  }, "Go back");
}

export default GoBackBtn;
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import "./SavePostSuccess.scss";

function SavePostSuccess({ successMessage, setSaveSuccessMessage }) {
  return (
    <div className="savePostSuccess__container">
      <p className="savePostSuccess__message">{successMessage}</p>
      <CloseIcon
        sx={{ fontSize: 20, color: "#228b22", cursor: "pointer" }}
        onClick={() => setSaveSuccessMessage("")}
      />
    </div>
  );
}

export default SavePostSuccess;

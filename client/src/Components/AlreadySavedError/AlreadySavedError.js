import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import "./AlreadySavedError.scss";

function AlreadySavedError({ errorMessage, setAlreadySavedErrorMessage }) {
  return (
    <div className="alreadySavedError__container">
      <p className="alreadySavedError__message">{errorMessage}</p>
      <CloseIcon
        sx={{ fontSize: 20, color: "red", cursor: "pointer" }}
        onClick={() => setAlreadySavedErrorMessage("")}
      />
    </div>
  );
}

export default AlreadySavedError;

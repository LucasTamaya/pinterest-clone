import React from "react";
import { Link } from "react-router-dom";

import "./UnknownError.scss";

function UnknownError() {
  return (
    <div className="unknownError__container">
      <h2 className="unknownError__message">Oops, something went wrong ...</h2>
      <Link to="/" className="unknownError__link">
        Go back to homepage
      </Link>
    </div>
  );
}

export default UnknownError;

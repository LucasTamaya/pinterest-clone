import React from "react";
import { Link } from "react-router-dom";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./WelcomePage.scss";

function WelcomePage() {
  return (
    <div className="welcomePage__container">
      <PinterestIcon sx={{ fontSize: 40, color: "red" }} />
      <h1 className="welcomePage__title">Welcome to Pinterest</h1>
      <div className="welcomePage__btnContainer">
        <Link to="/login" className="welcomePage__loginBtn">
          Login
        </Link>
        <Link to="/register" className="welcomePage__registerBtn">
          Register
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;

import React from "react";
import { Link } from "react-router-dom";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Header.scss";

function Header() {
  return (
    <header className="header__container">
      <PinterestIcon sx={{ fontSize: 30, color: "red" }} />
      <nav className="nav__container">
        <Link to="/my-pins" className="nav__link">
          My Pins
        </Link>
        <Link to="/saved-pins" className="nav__link">
          Saved Pins
        </Link>
      </nav>
      <div className="header__profile">LT</div>
    </header>
  );
}

export default Header;

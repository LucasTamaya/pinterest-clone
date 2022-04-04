import React from "react";
import { Link } from "react-router-dom";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Header.scss";
import getUsernameInitial from "../../utils/getUsernameInitial";

function Header() {
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  const usernameInitial = getUsernameInitial(username);

  return (
    <header className="header__container">
      <PinterestIcon sx={{ fontSize: 40, color: "red" }} />
      <nav className="nav__container">
        <Link to={`/my-posts/${id}`} className="nav__link">
          My Pins
        </Link>
        <Link to="/saved-pins" className="nav__link">
          Saved Pins
        </Link>
      </nav>
      <div className="header__profile">{usernameInitial}</div>
    </header>
  );
}

export default Header;

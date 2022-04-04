import React from "react";
import "./GoBackBtn.scss";
import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();

  return (
    <button className="goBack__btn" onClick={() => navigate(-1)}>
      Go back
    </button>
  );
}

export default GoBackBtn;

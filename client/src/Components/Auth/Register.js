import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./Auth.scss";
import { REGISTER_USER } from "../../GraphQL/Mutation";
import AuthLoader from "../../AuthLoader/AuthLoader";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [registerUser, { error, loading, data }] = useMutation(REGISTER_USER);

  const handleRegister = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      return;
    }
    registerUser({
      variables: { username: username, email: email, password: password },
    });
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("This email already exists");
    }

    if (data) {
      console.log(data);
      // Récupère l'id et le username de l'utilsateur afin de le stocker dans le localStorage
      localStorage.setItem("id", data.register._id);
      localStorage.setItem("username", data.register.username);
      navigate("/");
    }
  }, [error, data]);

  if (loading)
    return (
      <div className="authLoader__container">
        <AuthLoader />
      </div>
    );

  return (
    <>
      <div className="auth__iconContainer">
        <PinterestIcon sx={{ fontSize: 50, color: "red" }} />
      </div>
      <h1 className="auth__title">Welcome to Pinterest !</h1>
      <p className="auth__para">Find new ideas to test</p>
      <form onSubmit={handleRegister} className="auth__form">
        <input
          type="text"
          placeholder="Your username"
          className="auth__input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          className="auth__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          className="auth__input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth__btn">
          Continue
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        <p className="auth__paraBottom">
          By continuing, you agree to the <span>Pinterest Terms</span> of
          Service and acknowledge that you have read our{" "}
          <span>Privacy Policy</span>
        </p>
        <p className="auth__paraBottom">
          Already a member?{" "}
          <Link to="/login">
            <span>Log in</span>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;

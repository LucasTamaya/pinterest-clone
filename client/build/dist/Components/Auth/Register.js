import React, { useState, useEffect } from "../../../_snowpack/pkg/react.js";
import { useMutation } from "../../../_snowpack/pkg/@apollo/client.js";
import { Link, useNavigate } from "../../../_snowpack/pkg/react-router-dom.js";
import PinterestIcon from "../../../_snowpack/pkg/@mui/icons-material/Pinterest.js";
import "./Auth.css.proxy.js";
import { REGISTER_USER } from "../../GraphQL/Mutation.js";
import AuthLoader from "../AuthLoader/AuthLoader.js";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [registerUser, {
    error,
    loading,
    data
  }] = useMutation(REGISTER_USER);

  const handleRegister = e => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      return;
    }

    registerUser({
      variables: {
        username: username,
        email: email,
        password: password
      }
    });
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("This email already exists");
    }

    if (data) {
      console.log(data); // Récupère l'id et le username de l'utilsateur afin de le stocker dans le localStorage

      localStorage.setItem("id", data.register._id);
      localStorage.setItem("username", data.register.username);
      navigate("/");
    }
  }, [error, data]);
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "authLoader__container"
  }, /*#__PURE__*/React.createElement(AuthLoader, null));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "auth__iconContainer"
  }, /*#__PURE__*/React.createElement(PinterestIcon, {
    sx: {
      fontSize: 50,
      color: "red"
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: "auth__title"
  }, "Welcome to Pinterest !"), /*#__PURE__*/React.createElement("p", {
    className: "auth__para"
  }, "Find new ideas to test"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleRegister,
    className: "auth__form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Your username",
    className: "auth__input",
    onChange: e => setUsername(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Your email",
    className: "auth__input",
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Your password",
    className: "auth__input",
    onChange: e => setPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "auth__btn"
  }, "Continue"), errorMessage && /*#__PURE__*/React.createElement("p", null, errorMessage), /*#__PURE__*/React.createElement("p", {
    className: "auth__paraBottom"
  }, "By continuing, you agree to the ", /*#__PURE__*/React.createElement("span", null, "Pinterest Terms"), " of Service and acknowledge that you have read our", " ", /*#__PURE__*/React.createElement("span", null, "Privacy Policy")), /*#__PURE__*/React.createElement("p", {
    className: "auth__paraBottom"
  }, "Already a member?", " ", /*#__PURE__*/React.createElement(Link, {
    to: "/login"
  }, /*#__PURE__*/React.createElement("span", null, "Log in")))));
}

export default Register;
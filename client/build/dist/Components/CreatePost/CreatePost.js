import React, { useState, useEffect } from "../../../_snowpack/pkg/react.js";
import { useMutation } from "../../../_snowpack/pkg/@apollo/client.js";
import { useNavigate } from "../../../_snowpack/pkg/react-router-dom.js";
import Axios from "../../../_snowpack/pkg/axios.js"; // import { Image } from "cloudinary-react";

import PinterestIcon from "../../../_snowpack/pkg/@mui/icons-material/Pinterest.js";
import "./CreatePost.css.proxy.js";
import { CREATE_POST } from "../../GraphQL/Mutation.js";
import AuthLoader from "../AuthLoader/AuthLoader.js";
import GoBackBtn from "../GoBackBtn/GoBackBtn.js";
console.log(localStorage.getItem("id"));

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState(""); // Permet d'effectuer les requêtes avec GraphQL

  const [createPost, {
    error,
    loading,
    data
  }] = useMutation(CREATE_POST);
  const navigate = useNavigate(); // Fonction afin d'upload l'image à cloudinary

  const handleUploadFile = async file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lqw1ksez");
    Axios.post("https://api.cloudinary.com/v1_1/dtvjrxnhw/image/upload", formData) // Si aucune erreur, on récupère l'url afin d'accès à l'image dans imgUrl pour ensuite l'enregistrer dans la base de donnée
    .then(res => {
      console.log(res);
      setImgUrl(res.data.secure_url);
    }) // Si erreur, on la log
    .catch(err => console.log(err));
  }; // Fonction afin de créer le pin


  const handleCreatePost = e => {
    e.preventDefault();

    if (title === "" || description === "" || imgUrl === "" || !localStorage.getItem("id")) {
      return;
    }

    createPost({
      variables: {
        title: title,
        description: description,
        imgUrl: imgUrl,
        authorId: localStorage.getItem("id")
      }
    });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      setTitle("");
      setDescription("");
    } // Lorsqu'on a crée le pin, on redirige l'utilisateur vers la page d'accueil


    if (data) {
      navigate("/");
    }
  }, [error, data]);
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "authLoader__container"
  }, /*#__PURE__*/React.createElement(AuthLoader, null));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "createPost__iconContainer"
  }, /*#__PURE__*/React.createElement(PinterestIcon, {
    sx: {
      fontSize: 50,
      color: "red"
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: "createPost__title"
  }, "Create a pin"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleCreatePost,
    className: "createPost__form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter a title",
    className: "createPost__input",
    onChange: e => setTitle(e.target.value)
  }), /*#__PURE__*/React.createElement("textarea", {
    cols: "30",
    rows: "10",
    type: "text",
    placeholder: "Describe your pin",
    className: "createPost__textarea",
    onChange: e => setDescription(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "createPost__inputFile",
    className: "createPost__inputFile--label"
  }, "Add an image"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    id: "createPost__inputFile",
    placeholder: "Add an image",
    onChange: e => handleUploadFile(e.target.files[0])
  }), imgUrl && /*#__PURE__*/React.createElement("img", {
    className: "display__image",
    src: imgUrl
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "createPost__btn"
  }, "Submit")), /*#__PURE__*/React.createElement(GoBackBtn, null));
}

export default CreatePost;
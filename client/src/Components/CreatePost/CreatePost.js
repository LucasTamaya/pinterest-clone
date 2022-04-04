import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
// import { Image } from "cloudinary-react";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./CreatePost.scss";
import { CREATE_POST } from "../../GraphQL/Mutation";
import AuthLoader from "../AuthLoader/AuthLoader";
import GoBackBtn from "../GoBackBtn/GoBackBtn";

console.log(localStorage.getItem("id"));

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // Permet d'effectuer les requêtes avec GraphQL
  const [createPost, { error, loading, data }] = useMutation(CREATE_POST);

  const navigate = useNavigate();

  // Fonction afin d'upload l'image à cloudinary
  const handleUploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lqw1ksez");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dtvjrxnhw/image/upload",
      formData
    )
      // Si aucune erreur, on récupère l'url afin d'accès à l'image dans imgUrl pour ensuite l'enregistrer dans la base de donnée
      .then((res) => {
        console.log(res);
        setImgUrl(res.data.secure_url);
      })
      // Si erreur, on la log
      .catch((err) => console.log(err));
  };

  // Fonction afin de créer le pin
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      imgUrl === "" ||
      !localStorage.getItem("id")
    ) {
      return;
    }

    createPost({
      variables: {
        title: title,
        description: description,
        imgUrl: imgUrl,
        authorId: localStorage.getItem("id"),
      },
    });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      setTitle("");
      setDescription("");
    }

    // Lorsqu'on a crée le pin, on redirige l'utilisateur vers la page d'accueil
    if (data) {
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
      <div className="createPost__iconContainer">
        <PinterestIcon sx={{ fontSize: 50, color: "red" }} />
      </div>
      <h1 className="createPost__title">Create a pin</h1>
      <form onSubmit={handleCreatePost} className="createPost__form">
        <input
          type="text"
          placeholder="Enter a title"
          className="createPost__input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          type="text"
          placeholder="Describe your pin"
          className="createPost__textarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label
          htmlFor="createPost__inputFile"
          className="createPost__inputFile--label"
        >
          Add an image
        </label>
        <input
          type="file"
          accept="image/*"
          id="createPost__inputFile"
          placeholder="Add an image"
          onChange={(e) => handleUploadFile(e.target.files[0])}
        />

        {/* Lorsqu'on a upload l'image dans cloudinary, on l'affiche */}
        {imgUrl && <img className="display__image" src={imgUrl} />}

        <button type="submit" className="createPost__btn">
          Submit
        </button>
      </form>

      <GoBackBtn />
    </>
  );
}

export default CreatePost;

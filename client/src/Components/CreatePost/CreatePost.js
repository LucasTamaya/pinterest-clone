import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import PinterestIcon from "@mui/icons-material/Pinterest";

import "./CreatePost.scss";
import { CREATE_POST } from "../../GraphQL/Mutation";
import AuthLoader from "../../AuthLoader/AuthLoader";

console.log(localStorage.getItem("id"));

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [createPost, { error, loading, data }] = useMutation(CREATE_POST);

  const navigate = useNavigate();

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (title === "" || description === "" || !localStorage.getItem("id")) {
      return;
    }
    console.log({
      title: title,
      description: description,
      imgUrl: imgUrl,
      authorId: localStorage.getItem("id"),
    });

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
      <form onSubmit={handleCreatePost} className="createPost__container">
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

        <button type="submit" className="createPost__btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;

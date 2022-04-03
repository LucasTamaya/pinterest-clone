import React from "react";
import "./SinglePost.scss";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { SINGLE_POST } from "../../GraphQL/Query";
import { SAVE_POST } from "../../GraphQL/Mutation";
import AuthLoader from "../../AuthLoader/AuthLoader";
import GoBackBtn from "../GoBackBtn/GoBackBtn";

function SinglePost() {
  const { id } = useParams();
  const userId = localStorage.getItem("id");

  const { error, loading, data } = useQuery(SINGLE_POST, {
    variables: { id: id },
  });

  const [savePost] = useMutation(SAVE_POST, {
    // Si erreur, on fait apparaitre un message d'erreur
    onError: () => {
      console.log("error");
    },

    // Sinon, on change l'etat du bouton à "Unsave"
    onCompleted: () => console.log("succes"),
  });

  const handleSavePost = () => {
    console.log(id);
    console.log(userId);

    savePost({
      variables: {
        userId: userId,
        postId: id,
      },
    });
  };

  if (error) {
    console.log(error);
  }

  if (loading)
    return (
      <div className="authLoader__container">
        <AuthLoader />
      </div>
    );

  if (data)
    return (
      <>
        <div className="singlePost">
          <div className="singlePost__container">
            <div
              className="singlePost__image"
              style={{ backgroundImage: `url(${data.singlePost.imgUrl})` }}
            ></div>
            <div>
              <h1 className="singlePost__title">{data.singlePost.title}</h1>
              <p className="singlePost__description">
                {data.singlePost.description}
              </p>
              <p className="singlePost__author">
                By <span>{data.singlePost.author.username}</span>
              </p>
              <button
                className="singlePost__saveBtn"
                onClick={() => handleSavePost()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <GoBackBtn />
      </>
    );
}

export default SinglePost;

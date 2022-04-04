import React, { useState } from "react";
import "./SinglePost.scss";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { SINGLE_POST } from "../../GraphQL/Query";
import { SAVE_POST } from "../../GraphQL/Mutation";
import AuthLoader from "../AuthLoader/AuthLoader";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import SavePostSuccess from "../SavePostSuccess/SavePostSuccess";
import AlreadySavedError from "../AlreadySavedError/AlreadySavedError";
import UnknownError from "../UnknownError/UnknownError";

function SinglePost() {
  const { id } = useParams();
  const userId = localStorage.getItem("id");
  const [saveSuccessMessage, setSaveSuccessMessage] = useState("");
  const [alreadySavedErrorMessage, setAlreadySavedErrorMessage] = useState("");

  const { error, loading, data } = useQuery(SINGLE_POST, {
    variables: { id: id },
  });

  const [savePost] = useMutation(SAVE_POST, {
    // Si erreur, on fait apparaitre un message d'erreur
    onError: (err) => setAlreadySavedErrorMessage(err.message),

    // Sinon, on fait apparaitre un message de succes
    onCompleted: () => setSaveSuccessMessage("Pin saved !"),
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
    return <UnknownError />;
  }

  if (loading) {
    return (
      <div className="authLoader__container">
        <AuthLoader />
      </div>
    );
  }

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
        {alreadySavedErrorMessage && (
          <AlreadySavedError
            errorMessage={alreadySavedErrorMessage}
            setAlreadySavedErrorMessage={setAlreadySavedErrorMessage}
          />
        )}

        {saveSuccessMessage && (
          <SavePostSuccess
            successMessage={saveSuccessMessage}
            setSaveSuccessMessage={setSaveSuccessMessage}
          />
        )}
      </>
    );
}

export default SinglePost;

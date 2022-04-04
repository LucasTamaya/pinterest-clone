import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import "./SavedPosts.scss";
import { SAVED_POSTS } from "../../GraphQL/Query";
import AuthLoader from "../AuthLoader/AuthLoader";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import UnknownError from "../UnknownError/UnknownError";

function SavedPosts() {
  // Id du user
  const id = localStorage.getItem("id");

  const { error, loading, data } = useQuery(SAVED_POSTS, {
    variables: {
      id: id,
    },
    fetchPolicy: "cache-and-network", // Permet d'update le cache si de nouvelles data sont présentes
  });

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

  if (data.savedPosts.savedPins.length === 0) {
    return (
      <div className="savedPosts__container">
        <h1 className="savedPosts__emptyData__title">You have no pins saved</h1>
      </div>
    );
  }

  if (data.savedPosts.savedPins.length > 0) {
    return (
      <>
        <div className="savedPosts__container">
          <h1 className="savedPosts__title">Your saved pins</h1>
          <div className="allPosts__container">
            {data.savedPosts.savedPins.map((x) => (
              <Link to={`/pin/${x._id}`} className="allPosts__item" key={x._id}>
                <div
                  className="post__image"
                  style={{ backgroundImage: `url(${x.imgUrl})` }}
                ></div>
              </Link>
            ))}
          </div>
        </div>
        <GoBackBtn />
      </>
    );
  }

  return <div>SavedPosts</div>;
}

export default SavedPosts;

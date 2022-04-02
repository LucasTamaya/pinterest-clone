import React from "react";
import "./SinglePost.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { SINGLE_POST } from "../../GraphQL/Query";
import AuthLoader from "../../AuthLoader/AuthLoader";

function SinglePost() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { error, loading, data } = useQuery(SINGLE_POST, {
    variables: { id: id },
  });

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
            <h1 className="singlePost__title">{data.singlePost.title}</h1>
            <p className="singlePost__description">
              {data.singlePost.description}
            </p>
            <p className="singlePost__author">
              By <span>{data.singlePost.author.username}</span>
            </p>
          </div>
        </div>
        <button className="goBack__btn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </>
    );
}

export default SinglePost;

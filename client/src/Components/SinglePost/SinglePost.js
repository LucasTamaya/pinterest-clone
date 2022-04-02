import React from "react";
import "./SinglePost.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { SINGLE_POST } from "../../GraphQL/Query";
import AuthLoader from "../../AuthLoader/AuthLoader";

function SinglePost() {
  const { id } = useParams();

  console.log(id);

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
      <div className="singlePost">
        <div className="singlePost__container">
          <h1>{data.singlePost.title}</h1>
          <p>{data.singlePost.description}</p>
          <p>By {data.singlePost.author.username}</p>
        </div>
      </div>
    );
}

export default SinglePost;

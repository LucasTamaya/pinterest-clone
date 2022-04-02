import React from "react";
import "./MyPost.scss";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { MY_POSTS } from "../../GraphQL/Query";
import AuthLoader from "../../AuthLoader/AuthLoader";

function MyPost() {
  const { id } = useParams();

  const { error, loading, data } = useQuery(MY_POSTS, {
    variables: { id: id },
  });

  if (loading)
    return (
      <div className="authLoader__container">
        <AuthLoader />
      </div>
    );

  if (error) {
    console.log(error);
  }

  if (data)
    return (
      <>
        <h1 className="myPosts__title">Your pins</h1>
        <div className="myPosts__container">
          {data.myPosts.map((x) => (
            <Link to={`/pin/${x._id}`} className="post">
              <h1 className="post__title">{x.title}</h1>
            </Link>
          ))}
        </div>
      </>
    );
}

export default MyPost;

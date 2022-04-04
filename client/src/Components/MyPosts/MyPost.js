import React from "react";
import "./MyPost.scss";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { MY_POSTS } from "../../GraphQL/Query";
import AuthLoader from "../AuthLoader/AuthLoader";
import GoBackBtn from "../GoBackBtn/GoBackBtn";

function MyPost() {
  const { id } = useParams();

  const { error, loading, data } = useQuery(MY_POSTS, {
    variables: { id: id },
  });

  if (data) {
    console.log(data);
  }

  if (loading)
    return (
      <div className="authLoader__container">
        <AuthLoader />
      </div>
    );

  if (error) {
    console.log(error);
  }

  if (data.myPosts.length === 0) {
    return (
      <>
        <div className="myPosts__container">
          <h1 className="myPosts__emptyData__title">
            You don't have any pins yet.
          </h1>
          <Link to="/create-pin" className="myPosts__emptyData__link">
            Create my first pin
          </Link>
        </div>
        <GoBackBtn />
      </>
    );
  }

  if (data.myPosts.length > 0)
    return (
      <>
        <div className="myPosts__container">
          <h1 className="myPosts__title">Your pins</h1>
          <div className="allPosts__container">
            {data.myPosts.map((x) => (
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

export default MyPost;

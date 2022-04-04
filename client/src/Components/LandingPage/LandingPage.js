import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";

import "./LandingPage.scss";
import { ALL_POSTS } from "../../GraphQL/Query";
import AuthLoader from "../AuthLoader/AuthLoader";
import Header from "../Header/Header";

function LandingPage() {
  useEffect(() => {
    console.log("rendering");

    return () => {
      console.log("unmounting");
    };
  });

  const { error, loading, data } = useQuery(ALL_POSTS, {
    fetchPolicy: "cache-and-network", // Permet d'update le cache si de nouvelles data sont présentes
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

  return (
    <div className="title">
      <Header />

      {data && (
        <div className="allPosts__container">
          {data.allPosts.map((x) => (
            <Link to={`/pin/${x._id}`} className="allPosts__item" key={x._id}>
              <div
                className="post__image"
                style={{ backgroundImage: `url(${x.imgUrl})` }}
              ></div>
            </Link>
          ))}
        </div>
      )}

      <Link to="/create-pin" className="createPost__prompt">
        <PostAddIcon sx={{ fontSize: 20, color: "white" }} />
      </Link>
    </div>
  );
}

export default LandingPage;

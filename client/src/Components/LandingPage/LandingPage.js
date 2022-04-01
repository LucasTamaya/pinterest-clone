import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";

import "./LandingPage.scss";
import { ALL_POSTS } from "../../GraphQL/Query";
import AuthLoader from "../../AuthLoader/AuthLoader";
import Header from "../Header/Header";

function LandingPage() {
  const { error, loading, data } = useQuery(ALL_POSTS);

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
      <h1>Landing Page</h1>

      {data && (
        <div className="allPosts__container">
          {data.allPosts.map((x) => (
            <Link to={`/pin/${x._id}`} className="allPosts__item">
              <h1>{x.title}</h1>
            </Link>
          ))}
        </div>
      )}

      <div className="createPost__prompt">
        <Link to="/create-pin">
          <PostAddIcon sx={{ fontSize: 20, color: "white" }} />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

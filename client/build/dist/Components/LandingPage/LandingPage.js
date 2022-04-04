import React, { useEffect } from "../../../_snowpack/pkg/react.js";
import { useQuery } from "../../../_snowpack/pkg/@apollo/client.js";
import { Link } from "../../../_snowpack/pkg/react-router-dom.js";
import PostAddIcon from "../../../_snowpack/pkg/@mui/icons-material/PostAdd.js";
import "./LandingPage.css.proxy.js";
import { ALL_POSTS } from "../../GraphQL/Query.js";
import AuthLoader from "../AuthLoader/AuthLoader.js";
import Header from "../Header/Header.js";

function LandingPage() {
  useEffect(() => {
    console.log("rendering");
    return () => {
      console.log("unmounting");
    };
  });
  const {
    error,
    loading,
    data
  } = useQuery(ALL_POSTS, {
    fetchPolicy: "cache-and-network" // Permet d'update le cache si de nouvelles data sont présentes

  });

  if (data) {
    console.log(data);
  }

  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "authLoader__container"
  }, /*#__PURE__*/React.createElement(AuthLoader, null));
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement(Header, null), data && /*#__PURE__*/React.createElement("div", {
    className: "allPosts__container"
  }, data.allPosts.map(x => /*#__PURE__*/React.createElement(Link, {
    to: `/pin/${x._id}`,
    className: "allPosts__item",
    key: x._id
  }, /*#__PURE__*/React.createElement("div", {
    className: "post__image",
    style: {
      backgroundImage: `url(${x.imgUrl})`
    }
  })))), /*#__PURE__*/React.createElement(Link, {
    to: "/create-pin",
    className: "createPost__prompt"
  }, /*#__PURE__*/React.createElement(PostAddIcon, {
    sx: {
      fontSize: 20,
      color: "white"
    }
  })));
}

export default LandingPage;
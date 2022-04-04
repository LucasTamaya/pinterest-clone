import React from "../../../_snowpack/pkg/react.js";
import { useQuery } from "../../../_snowpack/pkg/@apollo/client.js";
import { Link } from "../../../_snowpack/pkg/react-router-dom.js";
import "./SavedPosts.css.proxy.js";
import { SAVED_POSTS } from "../../GraphQL/Query.js";
import AuthLoader from "../AuthLoader/AuthLoader.js";
import GoBackBtn from "../GoBackBtn/GoBackBtn.js";

function SavedPosts() {
  // Id du user
  const id = localStorage.getItem("id");
  const {
    error,
    loading,
    data
  } = useQuery(SAVED_POSTS, {
    variables: {
      id: id
    },
    fetchPolicy: "cache-and-network" // Permet d'update le cache si de nouvelles data sont présentes

  });

  if (error) {
    console.log(error);
  }

  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "authLoader__container"
  }, /*#__PURE__*/React.createElement(AuthLoader, null));

  if (data) {
    console.log(data);
  }

  if (data.savedPosts.savedPins.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "savedPosts__container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "savedPosts__emptyData__title"
    }, "You have no pins saved"));
  }

  if (data.savedPosts.savedPins.length > 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "savedPosts__container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "savedPosts__title"
    }, "Your saved pins"), /*#__PURE__*/React.createElement("div", {
      className: "allPosts__container"
    }, data.savedPosts.savedPins.map(x => /*#__PURE__*/React.createElement(Link, {
      to: `/pin/${x._id}`,
      className: "allPosts__item",
      key: x._id
    }, /*#__PURE__*/React.createElement("div", {
      className: "post__image",
      style: {
        backgroundImage: `url(${x.imgUrl})`
      }
    }))))), /*#__PURE__*/React.createElement(GoBackBtn, null));
  }

  return /*#__PURE__*/React.createElement("div", null, "SavedPosts");
}

export default SavedPosts;
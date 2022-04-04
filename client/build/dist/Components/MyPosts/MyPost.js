import React from "../../../_snowpack/pkg/react.js";
import "./MyPost.css.proxy.js";
import { useParams, Link } from "../../../_snowpack/pkg/react-router-dom.js";
import { useQuery } from "../../../_snowpack/pkg/@apollo/client.js";
import { MY_POSTS } from "../../GraphQL/Query.js";
import AuthLoader from "../AuthLoader/AuthLoader.js";
import GoBackBtn from "../GoBackBtn/GoBackBtn.js";

function MyPost() {
  const {
    id
  } = useParams();
  const {
    error,
    loading,
    data
  } = useQuery(MY_POSTS, {
    variables: {
      id: id
    }
  });

  if (data) {
    console.log(data);
  }

  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "authLoader__container"
  }, /*#__PURE__*/React.createElement(AuthLoader, null));

  if (error) {
    console.log(error);
  }

  if (data.myPosts.length === 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "myPosts__container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "myPosts__emptyData__title"
    }, "You don't have any pins yet."), /*#__PURE__*/React.createElement(Link, {
      to: "/create-pin",
      className: "myPosts__emptyData__link"
    }, "Create my first pin")), /*#__PURE__*/React.createElement(GoBackBtn, null));
  }

  if (data.myPosts.length > 0) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "myPosts__container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "myPosts__title"
  }, "Your pins"), /*#__PURE__*/React.createElement("div", {
    className: "allPosts__container"
  }, data.myPosts.map(x => /*#__PURE__*/React.createElement(Link, {
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

export default MyPost;
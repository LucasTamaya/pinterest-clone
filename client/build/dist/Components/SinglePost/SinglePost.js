import React, { useState } from "../../../_snowpack/pkg/react.js";
import "./SinglePost.css.proxy.js";
import { useParams } from "../../../_snowpack/pkg/react-router-dom.js";
import { useQuery, useMutation } from "../../../_snowpack/pkg/@apollo/client.js";
import { SINGLE_POST } from "../../GraphQL/Query.js";
import { SAVE_POST } from "../../GraphQL/Mutation.js";
import AuthLoader from "../AuthLoader/AuthLoader.js";
import GoBackBtn from "../GoBackBtn/GoBackBtn.js";
import SavePostSuccess from "../SavePostSuccess/SavePostSuccess.js";
import AlreadySavedError from "../AlreadySavedError/AlreadySavedError.js";

function SinglePost() {
  const {
    id
  } = useParams();
  const userId = localStorage.getItem("id");
  const [saveSuccessMessage, setSaveSuccessMessage] = useState("");
  const [alreadySavedErrorMessage, setAlreadySavedErrorMessage] = useState("");
  const {
    error,
    loading,
    data
  } = useQuery(SINGLE_POST, {
    variables: {
      id: id
    }
  });
  const [savePost] = useMutation(SAVE_POST, {
    // Si erreur, on fait apparaitre un message d'erreur
    onError: err => setAlreadySavedErrorMessage(err.message),
    // Sinon, on fait apparaitre un message de succes
    onCompleted: () => setSaveSuccessMessage("Pin saved !")
  });

  const handleSavePost = () => {
    console.log(id);
    console.log(userId);
    savePost({
      variables: {
        userId: userId,
        postId: id
      }
    });
  };

  if (error) {
    console.log(error);
  }

  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "authLoader__container"
  }, /*#__PURE__*/React.createElement(AuthLoader, null));
  if (data) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "singlePost"
  }, /*#__PURE__*/React.createElement("div", {
    className: "singlePost__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "singlePost__image",
    style: {
      backgroundImage: `url(${data.singlePost.imgUrl})`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "singlePost__title"
  }, data.singlePost.title), /*#__PURE__*/React.createElement("p", {
    className: "singlePost__description"
  }, data.singlePost.description), /*#__PURE__*/React.createElement("p", {
    className: "singlePost__author"
  }, "By ", /*#__PURE__*/React.createElement("span", null, data.singlePost.author.username)), /*#__PURE__*/React.createElement("button", {
    className: "singlePost__saveBtn",
    onClick: () => handleSavePost()
  }, "Save")))), /*#__PURE__*/React.createElement(GoBackBtn, null), alreadySavedErrorMessage && /*#__PURE__*/React.createElement(AlreadySavedError, {
    errorMessage: alreadySavedErrorMessage,
    setAlreadySavedErrorMessage: setAlreadySavedErrorMessage
  }), saveSuccessMessage && /*#__PURE__*/React.createElement(SavePostSuccess, {
    successMessage: saveSuccessMessage,
    setSaveSuccessMessage: setSaveSuccessMessage
  }));
}

export default SinglePost;
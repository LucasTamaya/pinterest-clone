import React from "../_snowpack/pkg/react.js";
import { ApolloClient, InMemoryCache, ApolloProvider } from "../_snowpack/pkg/@apollo/client.js";
import { Routes, Route } from "../_snowpack/pkg/react-router-dom.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import Register from "./Components/Auth/Register.js";
import Login from "./Components/Auth/Login.js";
import CreatePost from "./Components/CreatePost/CreatePost.js";
import SinglePost from "./Components/SinglePost/SinglePost.js";
import MyPost from "./Components/MyPosts/MyPost.js";
import SavedPosts from "./Components/SavedPosts/SavedPosts.js";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });
  return /*#__PURE__*/React.createElement(ApolloProvider, {
    client: client
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(LandingPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/register",
    element: /*#__PURE__*/React.createElement(Register, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/login",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/create-pin",
    element: /*#__PURE__*/React.createElement(CreatePost, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/pin/:id",
    element: /*#__PURE__*/React.createElement(SinglePost, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/my-posts/:id",
    element: /*#__PURE__*/React.createElement(MyPost, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/saved-pins",
    element: /*#__PURE__*/React.createElement(SavedPosts, null)
  })));
}

export default App;
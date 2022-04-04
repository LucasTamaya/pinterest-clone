import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage/LandingPage";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import CreatePost from "./Components/CreatePost/CreatePost";
import SinglePost from "./Components/SinglePost/SinglePost";
import MyPost from "./Components/MyPosts/MyPost";
import SavedPosts from "./Components/SavedPosts/SavedPosts";

function App() {
  const client = new ApolloClient({
    uri: "https://pinterest-clone-graphql.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-pin" element={<CreatePost />} />
        <Route path="/pin/:id" element={<SinglePost />} />
        <Route path="/my-posts/:id" element={<MyPost />} />
        <Route path="/saved-pins" element={<SavedPosts />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;

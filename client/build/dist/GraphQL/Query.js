import { gql } from "../../_snowpack/pkg/@apollo/client.js";
const ALL_POSTS = gql`
  {
    allPosts {
      imgUrl
      _id
      author {
        username
      }
    }
  }
`;
const SINGLE_POST = gql`
  query ($id: String!) {
    singlePost(id: $id) {
      title
      description
      imgUrl
      author {
        username
      }
    }
  }
`;
const MY_POSTS = gql`
  query ($id: String!) {
    myPosts(id: $id) {
      imgUrl
      _id
    }
  }
`;
const SAVED_POSTS = gql`
  query ($id: String!) {
    savedPosts(id: $id) {
      savedPins {
        title
        description
        imgUrl
        _id
        author {
          username
        }
      }
    }
  }
`;
export { ALL_POSTS, SINGLE_POST, MY_POSTS, SAVED_POSTS };
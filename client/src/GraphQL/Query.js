import { gql } from "@apollo/client";

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

export { ALL_POSTS, SINGLE_POST, MY_POSTS };

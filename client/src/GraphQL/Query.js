import { gql } from "@apollo/client";

const ALL_POSTS = gql`
  {
    allPosts {
      title
      description
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
      author {
        username
      }
    }
  }
`;

const MY_POSTS = gql`
  query ($id: String!) {
    myPosts(id: $id) {
      title
      description
      _id
    }
  }
`;

export { ALL_POSTS, SINGLE_POST, MY_POSTS };

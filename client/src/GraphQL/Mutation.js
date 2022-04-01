import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      username
    }
  }
`;

const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      username
    }
  }
`;

export { REGISTER_USER, LOGIN_USER };

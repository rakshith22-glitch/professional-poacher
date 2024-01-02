import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation CreateUser($email: String!, $password: String!, $fullname: String!, $phonenumber: String!) {
    createUser(email: $email, password: $password, fullname: $fullname, phonenumber: $phonenumber) {
      id
      email
      password
      fullname
      phonenumber
    }
  }
`;

export const CHECK_USER = gql`
  mutation CheckUser($email: String!, $password: String!) {
    checkUser(email: $email, password: $password) {
      user {
        id
        email
        password
        # Add other fields you want to retrieve if the user exists
      }
      token # Include the authToken in the response
    }
  }
`;

import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    fullname: String!
    phonenumber: String!
    password: String!
    # Add more fields as needed for user data
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    # Define a placeholder field in the root Query type
    hello: String
    # Add other query fields as needed
  }

  type Mutation {
    createUser(email: String!, password: String!, fullname: String!, phonenumber: String!): User!
    checkUser(email: String!, password: String!): AuthPayload # Update return type to AuthPayload
    # Define other mutations here
  }
`;

export default typeDefs;

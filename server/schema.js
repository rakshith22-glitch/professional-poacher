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

  type Query {
    # Define a placeholder field in the root Query type
    hello: String
    # Add other query fields as needed
  }

  type Mutation {
    createUser(email: String!, password: String!, fullname: String!, phonenumber: String!): User!
    # Define other mutations here
  }

  type Mutation {
  checkUser(email: String!, password: String!): User
}
`;

export default typeDefs;

import { gql } from 'apollo-server';

const typeDefs = gql`
  type Listings {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    listings: [Listings!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }
`;

export default typeDefs;

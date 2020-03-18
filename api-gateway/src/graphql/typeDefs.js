import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

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

  type UserSession {
    createdAt: Date!
    id: ID!
    userId: ID!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
  }
`;

export default typeDefs;

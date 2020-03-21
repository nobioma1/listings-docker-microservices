import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Listings {
    id: ID!
    title: String!
    description: String!
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
    user: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createUserSession(email: String!, password: String!): UserSession!
    deleteUserSession(userSessionId: ID!): Boolean!
  }

  type Query {
    listings: [Listings!]!
    userSession(me: Boolean): UserSession
  }
`;

export default typeDefs;

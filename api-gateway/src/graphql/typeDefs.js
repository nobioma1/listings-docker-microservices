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
`;

export default typeDefs;

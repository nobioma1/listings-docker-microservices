import * as Mutation from './Mutation';
import * as Query from './Query';
import UserSession from './UserSession';

const resolvers = {
  Query,
  Mutation,
  UserSession, // Custom resolver
};

export default resolvers;

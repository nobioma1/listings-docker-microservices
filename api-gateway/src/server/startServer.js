import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import accessENV from '#root/helpers/accessENV';
import typeDefs from '#root/graphql/typeDefs';
import resolvers from '#root/graphql/resolvers';
import formatGraphQLErrors from './formatGraphQLErrors';

const PORT = accessENV('PORT', 7000);
const apolloServer = new ApolloServer({
  context: a => a,
  formatError: formatGraphQLErrors,
  typeDefs,
  resolvers,
});

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

apolloServer.applyMiddleware({ app, cors: false, path: '/graphql' });

app.listen(PORT, () => console.info(`api-gateway live @ ${PORT}`));

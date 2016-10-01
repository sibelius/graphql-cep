// @flow

import 'isomorphic-fetch';

import koa from 'koa';
import cors from 'koa-cors';
import graphqlHTTP from 'koa-graphql';
import convert from 'koa-convert';
import logger from 'koa-logger';

import { schema } from './schema';

const app = new koa();

app.use(logger());

app.use(convert(cors()));
app.use(convert(graphqlHTTP(async req => {
  return {
    graphiql: true,
    schema,
    context: {},
    formatError: (error) => {
      console.log(error.message);
      console.log(error.locations);
      console.log(error.stack);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      };
    },
  };
})));

export default app;

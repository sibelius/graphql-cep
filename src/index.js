// @flow
'use strict';
import 'babel-polyfill';
import app from './app';

const GRAPHQL_PORT = 5000;
(async() => {
  await app.listen(GRAPHQL_PORT);
  console.log(`GraphQL running on localhost:${GRAPHQL_PORT}/graphql`);
})();

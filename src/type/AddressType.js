// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Address',
  description: 'Represents an address',
  fields: {
    street: {
      type: GraphQLString,
      resolve: obj => obj.street,
    },
    neighborhood: {
      type: GraphQLString,
      resolve: obj => obj.neighborhood,
    },
    city: {
      type: GraphQLString,
      resolve: obj => obj.city,
    },
    state: {
      type: GraphQLString,
      resolve: obj => obj.state,
    },
    error: {
      type: GraphQLString,
      resolve: obj => obj.error,
    }
  }
});

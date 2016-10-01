// @flow

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import AddressType from './AddressType';

import getAddress from '../services/AddressByCep';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    addressByCep: {
      type: AddressType,
      args: {
        cep: {
          type: new GraphQLNonNull(GraphQLString),
        }
      },
      resolve: async (obj, args, context) => {
        return await getAddress(args.cep);
      }
    },
  }),
});

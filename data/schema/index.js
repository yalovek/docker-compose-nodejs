const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');
const page = require('./page');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      page,
    },
  }),
});

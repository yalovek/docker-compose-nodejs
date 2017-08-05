const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'page',
  fields: {
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    texts: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

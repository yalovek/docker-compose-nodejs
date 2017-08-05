const {
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const type = require('./type');
const Model = require('./model');

module.exports = {
  type,
  args: {
    url: {
      name: 'url',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, { url }) {
    return Model.findOne({
      url,
    });
  },
};

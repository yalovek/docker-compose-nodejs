const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL);

app.use('/', expressGraphQL(request => ({
  schema,
  graphiql: true,
  rootValue: {
    request,
  },
  pretty: true,
})));

app.listen(3001);

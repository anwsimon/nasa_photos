const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const NasaAPI = require('../src/datasource');
const typeDefs  = require('./schema')
const resolvers = require('./resolver')
const cors = require("cors");

var corsOptions = {
  origin: '*',
  credentials: true
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, dataSources: () => {
  return {
    nasaAPI: new NasaAPI()
  };
}, });

//express middleware
const app = express();

app.use('/', express.static(__dirname + '/public'));
console.log(__dirname)

const startup = async () => {
  await server.start()
  server.applyMiddleware({ app, cors: false })
  return app
}

startup()

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at https://studio.apollographql.com/dev`)
);


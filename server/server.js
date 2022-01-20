const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const NasaAPI = require('../src/datasource');
const typeDefs  = require('./schema')
const resolvers = require('./resolver')


const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => {
  return {
    nasaAPI: new NasaAPI()
  };
}, });

//express middleware
const app = express();

const startup = async () => {
  await server.start()
  server.applyMiddleware({ app })
  return app
}


startup()
app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at https://studio.apollographql.com/dev`)
);

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });


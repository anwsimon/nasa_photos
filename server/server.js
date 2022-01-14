const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const NasaAPI = require('../src/datasource');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Photo {
    date: date
    explanation:
    imageURL: imageURL
    mediaType
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => {
  return {
    nasaAPI: new NasaAPI(),
  };
}, });

const app = express();

const startup = async () => {
  await server.start()
  server.applyMiddleware({ app })
  return app
}

startup()
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
﻿

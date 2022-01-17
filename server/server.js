const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const NasaAPI = require('../src/datasource');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
    "Query to get photos array for the homepage "
    get5Photos: [Photo!]
  }

  "A photo is comprised of various metadata"
  type Photo {
    date: String!
    "The photo's title"
    title: String!
    "The photo's url"
    url: String!
    "The track's media type"
    media_type: String
    "The track's explanation"
    explanation: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    // hopefully returns an array of photo objects
    get5Photos: async (_, __, {dataSources}) => {
      return dataSources.nasaAPI.get5Photos()
    },
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
  console.log(`🚀 Server ready at https://studio.apollographql.com/dev`)
);
﻿

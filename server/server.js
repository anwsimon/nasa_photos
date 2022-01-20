const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const NasaAPI = require('../src/datasource');
const typeDefs  = require('./schema')
const resolvers = require('./resolver')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 4000


//express middleware
const app = express();

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, dataSources: () => {
  return {
    nasaAPI: new NasaAPI()
  };
}, });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("/build"));
// }
// const startup = async () => {
//   await server.start()
  server.applyMiddleware({ app, path: '/graphql', cors: false })
//   return app
// }
// startup()


app.use(cors());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
  });
}
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

// app.listen({ port: process.env.PORT || 4000 }, () =>
//   console.log(`🚀 Server ready at https://studio.apollographql.com/dev`)
// );


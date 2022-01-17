import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// console.log("this is client", client)


ReactDOM.render(
  <ApolloProvider client = {client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);

export default client

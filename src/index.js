import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors",
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)

export default client

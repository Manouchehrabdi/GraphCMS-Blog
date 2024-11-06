import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App";
const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm33acsug07g907w5uu9ge3lf/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

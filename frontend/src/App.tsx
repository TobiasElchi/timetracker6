import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import CreateLabel from "./Components/CreateLabel";
import ListOfLabels from "./Components/ListOfLabels";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <header className="App-header">
      <ApolloProvider client={client}>
        <CreateLabel />
        <ListOfLabels />
      </ApolloProvider>
    </header>
  );
}

export default App;

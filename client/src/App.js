import React from "react";
import "./App.css";
//https://www.apollographql.com/docs/react/get-started/
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddBlog from "./Components/Blog/AddBlog";
import Header from './Components/Header/header'
import "./styles/index.css"


const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header/>
        <AddBlog />
      </div>
    </ApolloProvider>
  );
}

export default App;

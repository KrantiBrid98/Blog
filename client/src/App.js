import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//https://www.apollographql.com/docs/react/get-started/
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddBlog from "./Components/Blog/AddBlog";
import PostsList from "./Components/Blog/PostsList";
import PostDetail from "./Components/Blog/PostDetail";
import Header from './Components/Header/header';
import UserProfile from './Components/UserProfile/userProfile'
import "./styles/index.css";

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/posts/category:category" component={PostsList} />
            <Route path="/addBlog" component={AddBlog} />
            <Route path="/post/postid:postid" component={PostDetail} />
            <Route path="/user" component={UserProfile} />
            <Route path="/" exact component={PostsList} />
          </Switch>
        </div>
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import {
  BrowserRouter as Router, Route, Switch,
  useHistory,
} from 'react-router-dom';
import CreateSong from './components/CreateSong';
import NavBar from './components/NavBar';
import Songs from './components/Songs';
import * as styles from './App.module.css';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const history = useHistory();

  return (
    <ApolloProvider client={client}>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/songs/create">
            <CreateSong />
          </Route>
          <Route path="/">
            <Songs />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

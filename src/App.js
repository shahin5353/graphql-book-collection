import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

//apollo client setup
const client = new ApolloClient({
  uri: 'https://graphql-book-collection-api.herokuapp.com/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
        <HomePage/>
    </ApolloProvider>
  );
};
export default App;

/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import './index.css'
import Router from './Router'

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

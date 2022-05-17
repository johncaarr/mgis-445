/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { Router } from './Router'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000',
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

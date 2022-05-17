/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material'
import { onError } from '@apollo/client/link/error'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

import Router from './Router'
import theme from './modules/theme'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({ uri: 'http://localhost:4000' }),
  ]),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

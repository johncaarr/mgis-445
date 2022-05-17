/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import cartStore from './stores/cart'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


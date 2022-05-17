/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart'
import checkoutReducer from './checkout'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
  },
})

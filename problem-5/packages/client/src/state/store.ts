/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'
import checkoutSlice from './checkout'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
  },
})

export default store

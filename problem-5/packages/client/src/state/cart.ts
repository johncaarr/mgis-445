/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { createSlice } from '@reduxjs/toolkit'
import type { CartState } from '../types/state'

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCartItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.book.bookTitle === action.payload.book.bookTitle
      )

      if (cartItem) {
        cartItem.quantity += action.payload.quantity
      } else {
        state.items.push({ ...action.payload })
      }
    },

    removeCartItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item.book.bookTitle === action.payload.bookTitle
      )

      state.items = state.items.filter(
        (item) => !cartItem || item.book.bookTitle !== cartItem.book.bookTitle
      )
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export default cartSlice.reducer

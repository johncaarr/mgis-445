/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { createSlice, configureStore } from '@reduxjs/toolkit'

export const cartItem: any = (
  name: string,
  quantity: number,
  unitprice: number
): any => {
  return {
    name: name,
    quantity: quantity,
    unitprice: unitprice,
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    cartAdd: (state: any, action: any) => {
      let payload: any = action.payload
      let item: any = cartItem(
        payload.name,
        payload.quantity,
        payload.unitprice
      )
      state.items.push(item)
    },
    cartRem: (state: any, action: any) => {
      let payload: any = action.payload
      state.items = state.items.filter(
        (item: any) =>
          item.name !== payload.name && item.unitprice !== payload.unitprice
      )
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { cartAdd, cartRem } = cartSlice.actions

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState: {
    firstName: '',
    lastName: '',
    company: '',
    addrLine1: '',
    addrLine2: '',
    email: '',
    phone: '',
    saveInfo: true,
  },
  reducers: {
    deliveryModify: (state: any, action: any) => {
      let payload: any = action.payload
      state[payload.key] = payload.value
    },
  },
})

export const deliveryReducer = deliverySlice.reducer
export const { deliveryModify } = deliverySlice.actions

export const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
  },
})

export default cartStore

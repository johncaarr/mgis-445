/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { createSlice } from '@reduxjs/toolkit'
import type {
  CheckoutState,
  CheckoutAddress,
  CheckoutCard,
  CheckoutPaypal,
  CheckoutCrypto,
} from '../types/state'

const initialState: CheckoutState = {
  shipping: {
    addressLine1: '',
    addressLine2: '',
    country: '',
    state: '',
    city: '',
    zip: '',
  },
  billing: {
    addressLine1: '',
    addressLine2: '',
    country: '',
    state: '',
    city: '',
    zip: '',
  },
  card: {
    cardNumber: undefined,
    cardExpDate: undefined,
    cardCVV: undefined,
  },
  paypal: {
    paypalEmail: 'john.doe@email.com',
  },
  crypto: {
    cryptoWalletAddress: 'infeIONFIOENFioeniofvwnegvioI==',
  },
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialState,
  reducers: {
    setShippingAddress: (state, action) => {
      state.shipping = action.payload as CheckoutAddress
    },
    setBillingAddress: (state, action) => {
      state.shipping = action.payload as CheckoutAddress
    },
    setCheckoutCard: (state, action) => {
      state.card = action.payload as CheckoutCard
    },
    setCheckoutPaypal: (state, action) => {
      state.paypal = action.payload as CheckoutPaypal
    },
    setCheckoutCrypto: (state, action) => {
      state.crypto = action.payload as CheckoutCrypto
    },
  },
})

export default checkoutSlice.reducer

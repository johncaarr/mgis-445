/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Book } from './schema'

export interface SortState {
  cat?: string
  subcat?: string
  title?: string
  price?: string
}

export interface CartItem {
  book: Book
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export interface CheckoutAddress {
  addressLine1: string
  addressLine2?: string
  country: string
  state: string
  city: string
  zip: string
}

export interface CheckoutCard {
  cardNumber?: number
  cardExpDate?: Date
  cardCVV?: number
}

export interface CheckoutPaypal {
  paypalEmail: string
}

export interface CheckoutCrypto {
  cryptoWalletAddress: string
}

export interface CheckoutState {
  shipping: CheckoutAddress
  billing: CheckoutAddress
  card: CheckoutCard
  paypal: CheckoutPaypal
  crypto: CheckoutCrypto
}

// this is peak TypeScript
export type StateEditor<T> = <K extends keyof T>(key: K, value: T[K]) => void

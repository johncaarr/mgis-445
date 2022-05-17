/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Item } from '../schema'

export interface CartItem {
  menuItem: Item
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

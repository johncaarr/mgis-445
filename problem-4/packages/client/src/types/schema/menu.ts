/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import type { MenuCategory, MenuType } from './enum'

export interface Item {
  id: number
  name: string
  description: string
  imagePath?: string
  price: number
  vegan: boolean
  category: MenuCategory
  type: MenuType
}

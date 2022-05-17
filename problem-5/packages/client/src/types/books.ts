/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { CATEGORIES, SUB_CATEGORIES } from '../modules/books'

export type CategoryKey = keyof typeof CATEGORIES
export type SubCategoryKey = keyof typeof SUB_CATEGORIES

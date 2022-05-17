/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Book } from './schema'

export interface FindAllBooksResult {
  books: Book[]
}

export interface FindBookByIdResult {
  book: Book
}

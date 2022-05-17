/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Book } from './schema'

export interface ResponseError {
  message: string
  path: string
}

export interface BookResponse {
  book?: Book
  success?: boolean
  errors?: ResponseError[]
}

export interface CreateBookResult {
  result: BookResponse
}

export interface UpdateBookResult {
  result: BookResponse
}

export interface DeleteBookResult {
  result: BookResponse
}

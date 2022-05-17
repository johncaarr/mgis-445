/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface Book {
  bookId: number
  bookTitle: string
  bookCategory: string
  bookSubCategory: string
  bookDescription: string
  bookPrice: number
  bookImgFile: string
}

export type BookInput = Omit<Book, 'bookId'>

export interface CreateBookInput {
  input: BookInput
}

export interface UpdateBookInput {
  bookId: number
  input: Partial<BookInput>
}

export interface DeleteBookInput {
  bookId: number
}

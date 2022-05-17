/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from '@apollo/client'

export const FindAllBooks = gql`
  query FindAllBooks {
    books: findAllBooks {
      bookId
      bookTitle
      bookCategory
      bookSubCategory
      bookDescription
      bookPrice
      bookImgFile
    }
  }
`

export const FindBookById = gql`
  query FindBookById {
    book: findBookById {
      bookId
      bookTitle
      bookCategory
      bookSubCategory
      bookDescription
      bookPrice
      bookImgFile
    }
  }
`

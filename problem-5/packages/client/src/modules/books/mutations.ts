/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from '@apollo/client'

export const CreateBook = gql`
  mutation CreateBook($input: CreateBookInput!) {
    result: createBook(input: $input) {
      success
    }
  }
`

export const UpdateBook = gql`
  mutation UpdateBook($bookId: ID!, $input: UpdateBookInput!) {
    result: updateBook(bookId: $bookId, input: $input) {
      success
    }
  }
`
export const DeleteBook = gql`
  mutation DeleteBook($bookId: ID!) {
    result: deleteBook(bookId: $bookId) {
      success
    }
  }
`

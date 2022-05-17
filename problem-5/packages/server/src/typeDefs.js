/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from 'apollo-server'

export default gql`
  scalar DateTime

  enum Category {
    FICTION
    NONFICTION
    TEXTBOOK
    SPIRITUAL
  }

  enum SubCategory {
    ADVENTURE
    ART
    AUTOBIOGRAPHY
    BIOGRAPHY
    BUSINESS
    COOKING
    CRAFTS
    CRIME
    DICTIONARY
    DYSTOPIA
    EDUCATION
    HEALTHFITNESS
    HISTORY
    HORROR
    HUMOR
    LAW
    MOTIVATIONAL
    MYSTERY
    POLITICAL
    RELATIONSHIPS
    RELIGION
    ROMANCE
    SCIENCE
    SELFHELP
    THESAURUS
    THRILLER
    YOUNGADULT
  }

  type Book {
    bookId: ID!
    bookTitle: String!
    bookCategory: Category!
    bookSubCategory: SubCategory!
    bookDescription: String!
    bookPrice: Float!
    bookImgFile: String!
  }

  input CreateBookInput {
    bookTitle: String!
    bookCategory: Category!
    bookSubCategory: SubCategory!
    bookDescription: String!
    bookPrice: Float!
    bookImgFile: String!
  }

  input UpdateBookInput {
    bookTitle: String
    bookCategory: Category
    bookSubCategory: SubCategory
    bookDescription: String
    bookPrice: Float
    bookImgFile: String
  }

  type Error {
    message: String
    path: String
  }

  type BookResponse {
    book: Book
    success: Boolean
    errors: [Error]
  }

  type Query {
    findAllBooks: [Book]
    findBookById(bookId: ID!): Book
  }

  type Mutation {
    createBook(input: CreateBookInput!): BookResponse
    updateBook(bookId: ID!, input: UpdateBookInput): BookResponse
    deleteBook(bookId: ID!): BookResponse
  }
`

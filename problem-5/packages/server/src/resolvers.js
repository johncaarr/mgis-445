/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { DateTimeResolver } from 'graphql-scalars'
import { Book } from './model.js'

export default {
  Category: {
    FICTION: 0,
    NONFICTION: 1,
    TEXTBOOK: 2,
    SPIRITUAL: 3,
  },
  SubCategory: {
    ADVENTURE: 0,
    ART: 1,
    AUTOBIOGRAPHY: 2,
    BIOGRAPHY: 3,
    BUSINESS: 4,
    COOKING: 5,
    CRAFTS: 6,
    CRIME: 26,
    DICTIONARY: 7,
    DYSTOPIA: 8,
    EDUCATION: 9,
    HEALTHFITNESS: 10,
    HISTORY: 11,
    HORROR: 12,
    HUMOR: 13,
    LAW: 14,
    MOTIVATIONAL: 15,
    MYSTERY: 16,
    POLITICAL: 17,
    RELATIONSHIPS: 18,
    RELIGION: 19,
    ROMANCE: 20,
    SCIENCE: 21,
    SELFHELP: 22,
    THESAURUS: 23,
    THRILLER: 24,
    YOUNGADULT: 25,
  },
  Query: {
    findAllBooks: async () => await Book.findAll(),
    findBookById: async (_, { bookId }) => await Book.findByPk(bookId),
  },
  Mutation: {
    createBook: async (_, { input }) => {
      const book = await Book.create({
        ...input,
        complete: false,
      })

      return {
        success: true,
      }
    },
    updateBook: async (_, { bookId, input }) => {
      const book = await Book.update(
        {
          ...input,
        },
        {
          where: {
            bookId: bookId,
          },
        }
      )

      return {
        success: true,
      }
    },
    deleteBook: async (_, { bookId }) => {
      const record = await Book.findByPk(bookId)
      if (!record) {
        throw new Error(`Record with bookId ${bookId} was not found.`)
      }
      await record.destroy()
      return {
        success: true,
      }
    },
  },
  DateTime: DateTimeResolver,
}

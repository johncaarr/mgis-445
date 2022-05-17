/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import type { Book } from '../../types'

export const CATEGORIES = {
  FICTION: { label: 'Fiction', value: 0 },
  NONFICTION: { label: 'Non-Fiction', value: 1 },
  TEXTBOOK: { label: 'TextBook', value: 2 },
  SPIRITUAL: { label: 'Spiritual', value: 3 },
}

export const SORT_BUTTONS = {
  cat: {
    asc: 'Category (A-Z)',
    desc: 'Category (Z-A)',
  },
  subcat: {
    asc: 'Sub-Category (A-Z)',
    desc: 'Sub-Category (Z-A)',
  },
  title: {
    asc: 'Title (A-Z)',
    desc: 'Title (Z-A)',
  },
  price: {
    asc: 'Price (Low-High)',
    desc: 'Price (High-Low)',
  },
}

export const SORT_FUNCTIONS = {
  cat: {
    asc: (a: Book, b: Book) => {
      return a.bookCategory.localeCompare(b.bookCategory)
    },
    desc: (a: Book, b: Book) => {
      return b.bookCategory.localeCompare(a.bookCategory)
    },
  },
  price: {
    asc: (a: Book, b: Book) => {
      return a.bookPrice - b.bookPrice
    },
    desc: (a: Book, b: Book) => {
      return b.bookPrice - a.bookPrice
    },
  },
  subcat: {
    asc: (a: Book, b: Book) => {
      return a.bookSubCategory.localeCompare(b.bookSubCategory)
    },
    desc: (a: Book, b: Book) => {
      return b.bookSubCategory.localeCompare(a.bookSubCategory)
    },
  },
  title: {
    asc: (a: Book, b: Book) => {
      return a.bookTitle.localeCompare(b.bookTitle)
    },
    desc: (a: Book, b: Book) => {
      return b.bookTitle.localeCompare(a.bookTitle)
    },
  },
}

export const SUB_CATEGORIES = {
  ADVENTURE: { label: 'Adventure', value: 0 },
  ART: { label: 'Art', value: 1 },
  AUTOBIOGRAPHY: { label: 'Auto-Biography', value: 2 },
  BIOGRAPHY: { label: 'Biography', value: 3 },
  BUSINESS: { label: 'Business', value: 4 },
  COOKING: { label: 'Cooking', value: 5 },
  CRAFTS: { label: 'Crafts', value: 6 },
  CRIME: { label: 'Crime', value: 26 },
  DICTIONARY: { label: 'Dictionary', value: 7 },
  DYSTOPIA: { label: 'Dystopia', value: 8 },
  EDUCATION: { label: 'Education', value: 9 },
  HEALTHFITNESS: { label: 'Health/Fitness', value: 10 },
  HISTORY: { label: 'History', value: 11 },
  HORROR: { label: 'Horror', value: 12 },
  HUMOR: { label: 'Humor', value: 13 },
  LAW: { label: 'Law/Criminology', value: 14 },
  MOTIVATIONAL: { label: 'Motivational', value: 15 },
  MYSTERY: { label: 'Mystery/Suspense', value: 16 },
  POLITICAL: { label: 'Political', value: 17 },
  RELATIONSHIPS: { label: 'Family/Relationships', value: 18 },
  RELIGION: { label: 'Religion', value: 19 },
  ROMANCE: { label: 'Romance', value: 20 },
  SCIENCE: { label: 'Science', value: 21 },
  SELFHELP: { label: 'Self-Help', value: 22 },
  THESAURUS: { label: 'Thesaurus', value: 23 },
  THRILLER: { label: 'Thriller', value: 24 },
  YOUNGADULT: { label: 'Young Adult', value: 25 },
}

export const getEnumKey = (
  enumList: typeof CATEGORIES | typeof SUB_CATEGORIES,
  value: number
): string => {
  let categoryKey = 'FICTION'
  Object.entries(enumList).forEach(([key, category]) => {
    if (category.value === value) {
      categoryKey = key
    }
  })
  return categoryKey
}

/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface SortButtons {
  [key: string]: {
    [key: string]: string
  }
}

export interface SortFunctions<T> {
  [key: string]: {
    [key: string]: (a: T, b: T) => number
  }
}

export interface SortState {
  [key: string]: string | undefined
}

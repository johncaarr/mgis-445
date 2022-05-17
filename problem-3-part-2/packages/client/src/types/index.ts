/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface ToDo {
  id: number
  description: string
  complete: boolean
  dueDate: Date
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

export interface UserDetails {
  firstName: string
  lastName: string
  telephone: string
  email: string
  street: string
  city: string
  state: string
  zip: string
}

/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query GET_ALL_USERS {
    users {
      id
      firstName
      lastName
      email
    }
  }
`

export const GET_USER_DETAIL = gql`
  query GET_USER_DETAIL($id: ID!) {
    user(id: $id) {
      firstName
      lastName
      telephone
      email
      street
      city
      state
      zip
    }
  }
`

export const ADD_USER = gql`
  mutation ADD_USER($input: CreateUserInput!) {
    addUser(input: $input) {
      success
    }
  }
`

export const DELETE_USER = gql`
  mutation DELETE_USER($id: ID!) {
    deleteUser(id: $id) {
      success
    }
  }
`

export const UPDATE_USER = gql`
  mutation UPDATE_USER($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      success
    }
  }
`

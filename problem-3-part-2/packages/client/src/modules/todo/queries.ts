/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from '@apollo/client'

export const GET_TODOS = gql`
  query GET_TODOS {
    todos {
      id
      description
      complete
      dueDate
      createdAt
      updatedAt
    }
  }
`

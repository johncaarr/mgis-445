/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { ApolloError } from '@apollo/client'

export interface ErrorMessageProps {
  error: ApolloError
}

export const ErrorMessage = (props: ErrorMessageProps): ReactElement => {
  return (
    <Typography variant='h4' style={{ color: 'red' }}>
      {`Error: ${props.error.message}`}
    </Typography>
  )
}

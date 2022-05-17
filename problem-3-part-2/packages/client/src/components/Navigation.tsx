/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export const Navigation = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link to='/'>
          <Typography>Home</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to='/todos'>
          <Typography>To Do</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to='/users'>
          <Typography>Users</Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

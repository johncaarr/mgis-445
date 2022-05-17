/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export const HomePage = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography style={{ textAlign: 'center' }}>
          {`Hello Tatooine`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HomePage

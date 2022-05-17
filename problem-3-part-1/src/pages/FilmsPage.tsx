/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

import { FilmList } from '../modules/films/'

export const FilmsPage = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h3'>{`Films`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <FilmList />
      </Grid>
    </Grid>
  )
}

export default FilmsPage

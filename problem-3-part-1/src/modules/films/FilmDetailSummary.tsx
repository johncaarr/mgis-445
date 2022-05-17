/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export interface FilmDetailSummaryProps {
  director: string
  openingCrawl: string
  producers: string[]
}

export const FilmDetailSummary = (
  props: FilmDetailSummaryProps
): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='subtitle1'>
          {`Directed by: ${props.director}`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1'>
          {`Produced by: ${props.producers.join(', ')}`}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6'>{`Opening Crawl`}</Typography>
        <Typography variant='body1'>{props.openingCrawl}</Typography>
      </Grid>
    </Grid>
  )
}

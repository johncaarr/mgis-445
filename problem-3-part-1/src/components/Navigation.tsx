/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Grid } from '@mui/material'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import './css/Navigation.css'

const NavigationLinks: {
  [key: string]: string
} = {
  Home: '/',
  Films: '/films',
}

export const Navigation = (): ReactElement => {
  return (
    <Grid
      container
      alignItems='center'
      direction='row'
      justifyContent='center'
      spacing={8}>
      {Object.entries(NavigationLinks).map(
        ([label, url]: [string, string], index: number) => (
          <Grid item key={index}>
            <Link to={url}>{label}</Link>
          </Grid>
        )
      )}
    </Grid>
  )
}

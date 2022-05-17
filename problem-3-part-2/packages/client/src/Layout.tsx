/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Container, Grid } from '@mui/material'
import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './components/Navigation'

export const Layout = (): ReactElement => (
  <Container>
    <Grid container direction='column'>
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item style={{ padding: '16' }}>
        <Outlet />
      </Grid>
    </Grid>
  </Container>
)

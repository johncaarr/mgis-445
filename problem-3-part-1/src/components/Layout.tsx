/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Container, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export const Layout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}

/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import { Box, Typography } from '@mui/material'

export const HomePage: React.FC = () => {
  return (
    <Box className='Home-page'>
      <Typography variant='h2'>Welcome to Generic Restaurant!</Typography>
      <Typography variant='h5'>
        Use the navigation menu above to do stuff
      </Typography>
    </Box>
  )
}

export default HomePage

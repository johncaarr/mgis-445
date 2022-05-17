/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { Center } from '../../components'

export const HomePage: React.FC = () => (
  <Box className='Home-page'>
    <Box
      sx={{
        display: 'block',
        overflow: 'auto',
        textAlign: 'center',
      }}>
      <Center sx={{ padding: 2 }}>
        <Typography variant='h4'>Welcome to Scamaz0n!</Typography>
      </Center>
      <Center sx={{ padding: 1 }}>
        <Typography variant='subtitle1'>
          The premier book store that totally won't scam you*
        </Typography>
      </Center>
      <Center sx={{ padding: 3 }}>
        <Link to='/catalog'>
          <Typography variant='h5'>
            Click here to view our book catalog
          </Typography>
        </Link>
      </Center>
      <Box
        sx={{
          bottom: 0,
          right: 0,
          display: 'block',
          padding: 5,
          position: 'fixed',
        }}>
        <Typography variant='subtitle2'>
          <i>* if you don't pay in crypto-currency</i>
        </Typography>
      </Box>
    </Box>
  </Box>
)

export default HomePage

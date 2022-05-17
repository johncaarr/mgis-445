/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

export const HomePage = (): ReactElement => {
  return (
    <div className='Home-page' style={{ paddingTop: '30px' }}>
      <Typography variant='h2' style={{ textAlign: 'center' }}>
        {`Home page for a non-specific user management application`}
      </Typography>
      <div style={{ padding: '15px' }}>
        <hr />
      </div>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        {`“You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.”`}
      </Typography>
      <Typography variant='h6' style={{ textAlign: 'center' }}>
        {`― Friedrich Wilhelm Nietzsche, speaking on how to write good JavaScript code`}
      </Typography>
      <div style={{ padding: '15px' }}>
        <hr />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button size='large'>
          <Link to='/users'>{`Access User Management Panel`}</Link>
        </Button>
      </div>
    </div>
  )
}

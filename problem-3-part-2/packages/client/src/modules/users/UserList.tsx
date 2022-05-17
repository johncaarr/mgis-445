/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactElement } from 'react'
import { Button, Grid, Typography } from '@mui/material'

import { UserCard } from './UserCard'
import type { User } from '../../types'

export interface UserListProps {
  refresh: any
  users: User[]
}

export const UserList = (props: UserListProps): ReactElement => {
  const [sortMethod, setSortMethod] = useState('asc')

  // listen, I'm not particularly happy about this either
  // but my ADHD meds make me paranoid
  const sortedUsers: User[] =
    props.users.length === 0
      ? []
      : [...props.users].sort((a: User, b: User) =>
          sortMethod === 'asc' ? a.id - b.id : b.id - a.id
        )

  return (
    <div className='User-list'>
      <div style={{ textAlign: 'center', paddingBottom: '35px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant='outlined' onClick={() => setSortMethod('asc')}>
              {`Sort by ascending ID`}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='outlined' onClick={() => setSortMethod('desc')}>
              {`Sort by descending ID`}
            </Button>
          </Grid>
        </Grid>
      </div>
      {props.users.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <Typography variant='h5'>
            {`No users exist in the database.`}
          </Typography>
          <Typography variant='h6'>
            {`Use the "Add User" form above to add users to the database.`}
          </Typography>
        </div>
      ) : (
        <Grid container spacing={2}>
          {sortedUsers.map((user: User, index: number) => (
            <UserCard refresh={props.refresh} user={user} key={index} />
          ))}
        </Grid>
      )}
    </div>
  )
}

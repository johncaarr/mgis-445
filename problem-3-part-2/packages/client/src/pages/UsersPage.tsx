/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactElement } from 'react'
import { useQuery } from '@apollo/client'
import { Button, Collapse, Typography } from '@mui/material'

import { Loading } from '../components/Loading'
import { ErrorMessage } from '../components/ErrorMessage'

import { UserList } from '../modules/users/UserList'
import { UserForm } from '../modules/users/UserForm'
import { GET_ALL_USERS } from '../modules/users/queries'

import type { User } from '../types/'

export const UsersPage = (): ReactElement => {
  const [expanded, setExpanded] = useState(false)
  const { data, error, loading, refetch } = useQuery(GET_ALL_USERS)

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  const users: User[] = data.users

  return (
    <div className='Users-page'>
      <Typography variant='h5' style={{ textAlign: 'center' }}>
        {`User List`}
      </Typography>
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <hr />
      </div>
      <div className='Add-user' style={{ textAlign: 'center' }}>
        <Button variant='outlined' onClick={() => setExpanded(!expanded)}>
          {`${expanded ? `Close` : `Open`} "Add User" form`}
        </Button>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <div style={{ paddingTop: '15px', paddingBottom: '10px' }}>
            <UserForm refresh={refetch} />
          </div>
        </Collapse>
      </div>
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <hr />
      </div>
      <UserList refresh={refetch} users={users} />
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <hr />
      </div>
    </div>
  )
}

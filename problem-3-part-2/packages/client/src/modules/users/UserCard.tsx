/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactElement } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  Box,
  Button,
  Collapse,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { DELETE_USER, UPDATE_USER, GET_USER_DETAIL } from './queries'
import type { User } from '../../types'

export interface UserDetails {
  [key: string]: string
}

interface UserCardInternalProps {
  refresh: any
  user: User
  details: UserDetails
}

const UserCardInternal = (props: UserCardInternalProps): ReactElement => {
  const defaultUserDetails: UserDetails = { ...props.details }

  const [expanded, setExpanded] = useState(false)
  const [userDetails, setUserDetails] = useState(defaultUserDetails)

  const [updateUser, { reset }] = useMutation(UPDATE_USER)
  const [deleteUser] = useMutation(DELETE_USER)

  const doDeleteUser = (): void => {
    let response: string | null = prompt('Type "delete" to confirm deletion')

    if (response && response === 'delete') {
      deleteUser({
        variables: {
          id: props.user.id,
        },
      }).then((response: any) => {
        if (response.data.deleteUser.success === 'true') {
          alert('Successfully deleted user')
          props.refresh()
        } else {
          alert('Failed to delete user')
        }
      })
    }
  }

  const doUpdateUser = (): void => {
    let response: string | null = prompt('Type "update" to confirm update')

    if (response && response === 'update') {
      updateUser({
        variables: {
          id: props.user.id,
          input: {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            telephone: userDetails.telephone,
            street: userDetails.street,
            city: userDetails.city,
            state: userDetails.state,
            zip: userDetails.zip,
          },
        },
      }).then((response: any) => {
        if (response.data.updateUser.success === 'true') {
          alert('Successfully updated user')
          props.refresh()
        } else {
          alert('Failed to update user')
        }
      })
    } else {
      reset()
    }
  }

  const updateField = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const field: string = event.target.name
    const value: string = event.target.value
    const newDetails = { ...userDetails }
    newDetails[field] = value
    setUserDetails(newDetails)
  }

  return (
    <Grid item xs={4}>
      <div
        style={{
          borderColor: '#000000',
          borderStyle: 'solid',
          borderWidth: '5px',
        }}>
        <div style={{ paddingTop: '10px', paddingBottom: '5px' }}>
          <span>
            <Typography
              variant='h6'
              style={{ paddingLeft: '10px', textAlign: 'left' }}>
              {`ID=${props.user.id}`}
            </Typography>
          </span>
          <Typography variant='h5' style={{ textAlign: 'center' }}>
            {`${props.user.lastName}, ${props.user.firstName}`}
          </Typography>
          <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <hr />
          </div>
          <Typography
            variant='body1'
            style={{
              textAlign: 'center',
            }}>{`Email: ${props.user.email}`}</Typography>
          <div
            style={{
              paddingTop: '20px',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingBottom: '10px',
              textAlign: 'center',
            }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  size='medium'
                  variant='outlined'
                  onClick={() => setExpanded(!expanded)}>
                  {`User Info`}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  size='medium'
                  variant='outlined'
                  color='error'
                  onClick={doDeleteUser}>
                  {`Delete User`}
                </Button>
              </Grid>
            </Grid>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <div
                style={{
                  paddingTop: '15px',
                  paddingBottom: '10px',
                  textAlign: 'left',
                }}>
                <Box component='form' noValidate autoComplete='off'>
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='firstName'
                    label='First Name'
                    value={userDetails.firstName}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='lastName'
                    label='Last Name'
                    value={userDetails.lastName}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='email'
                    label='Email'
                    value={userDetails.email}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='telephone'
                    label='Phone'
                    value={userDetails.telephone}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='street'
                    label='Street Addr.'
                    value={userDetails.street}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='city'
                    label='City'
                    value={userDetails.city}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='state'
                    label='State'
                    value={userDetails.state}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <TextField
                    fullWidth
                    name='zip'
                    label='Postal Code'
                    value={userDetails.zip}
                    onChange={updateField}
                  />
                  <div style={{ padding: '10px' }} />
                  <Button
                    size='medium'
                    variant='outlined'
                    onClick={doUpdateUser}>
                    {`Update`}
                  </Button>
                </Box>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export interface UserCardProps {
  refresh: any
  user: User
}

export const UserCard = (props: UserCardProps): ReactElement => {
  const user: User = props.user
  const { loading, error, data } = useQuery(GET_USER_DETAIL, {
    variables: {
      id: user.id,
    },
  })

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  return (
    <UserCardInternal user={user} details={data.user} refresh={props.refresh} />
  )
}

/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactElement } from 'react'
import { useMutation } from '@apollo/client'
import { Button, TextField } from '@mui/material'

import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'

import { ADD_USER } from './queries'

export interface UserFormProps {
  refresh: any
}

export const UserForm = (props: UserFormProps): ReactElement => {
  let userDetailsBase: { [key: string]: string } = {}
  const [userDetails, setUserDetails] = useState(userDetailsBase)
  const [addUser, { loading, error, reset }] = useMutation(ADD_USER)

  if (loading) return <Loading />
  if (error)
    return (
      <div className='Mutation-error'>
        <ErrorMessage error={error} />;
        <Button size='large' variant='outlined' onClick={reset}>
          {`Reset form inputs`}
        </Button>
      </div>
    )

  const updateField = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const field: string = event.target.name
    const value: string = event.target.value

    userDetails[field] = value
    setUserDetails(userDetails)
  }

  const useSubmit = (): void => {
    if (!('firstName' in userDetails)) {
      alert('User must have a First Name')
    } else if (!('lastName' in userDetails)) {
      alert('User must have a Last Name')
    } else if (!('email' in userDetails)) {
      alert('User must have an Email')
    } else if (!('street' in userDetails)) {
      alert('User must have a Street Address')
    } else if (!('city' in userDetails)) {
      alert('User must have a City')
    } else if (!('state' in userDetails)) {
      alert('User must have a State')
    } else if (!('zip' in userDetails)) {
      alert('User must have a Postal Code')
    } else {
      // you may now pass
      addUser({
        variables: {
          input: userDetails,
        },
      }).then((response: any) => {
        if (response.data.addUser.success === 'true') {
          alert('Successfully added user')
          props.refresh()
        }
      })
    }
  }

  return (
    <div className='Add-user-form' style={{ textAlign: 'center' }}>
      <TextField
        fullWidth
        name='firstName'
        label='First Name'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='lastName'
        label='Last Name'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='email'
        label='Email'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='telephone'
        label='Phone Number'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='street'
        label='Street Address'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='city'
        label='City'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='state'
        label='State'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ padding: '10px' }} />
      <TextField
        fullWidth
        name='zip'
        label='Postal Code'
        variant='outlined'
        onChange={updateField}
      />
      <div style={{ paddingTop: '10px' }}>
        <Button
          size='large'
          variant='outlined'
          onClick={useSubmit}>{`Submit New User`}</Button>
      </div>
    </div>
  )
}

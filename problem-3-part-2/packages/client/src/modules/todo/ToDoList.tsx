/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useQuery } from '@apollo/client'
import React, { ReactElement } from 'react'
import { GET_TODOS } from './queries'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Loading } from '../../components/Loading'
import { Grid, Card, CardContent } from '@mui/material'

export const ToDoList = (): ReactElement => {
  const { data, error, loading } = useQuery(GET_TODOS)
  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  return (
    <div className='To-do-list'>
      {data.map((toDoItem: any, index: number) => (
        <Card key={index}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>{toDoItem.description}</Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

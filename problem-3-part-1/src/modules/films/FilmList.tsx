/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import React, { ReactElement } from 'react'

import { GET_ALL_FILMS } from './'
import { ErrorMessage, FilmCard, Loading } from '../../components/'

import type { Film } from '../../types/'

export const FilmList = (): ReactElement => {
  const { data, error, loading } = useQuery(GET_ALL_FILMS)

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  return (
    <Grid container spacing={2}>
      {data.allFilms.films.map((film: Film, index: number) => (
        <FilmCard key={index} film={film} />
      ))}
    </Grid>
  )
}

export default FilmList

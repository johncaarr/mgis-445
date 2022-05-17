/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useQuery } from '@apollo/client'
import { Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'

import { CharacterList } from '../modules/characters/CharacterList'
import { ErrorMessage, Loading } from '../components'
import { GET_FILM_DETAIL } from '../modules/films'

import type { FilmDetails } from '../types'

export const CharacterDetailPage = (): ReactElement => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(GET_FILM_DETAIL, {
    variables: { filmId: id },
  })

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  const filmDetails: FilmDetails = data.film

  return (
    <Grid container spacing={2} style={{ textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography variant='h4'>{filmDetails.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>{`Characters`}</Typography>
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <hr />
        </div>
        <CharacterList
          characters={filmDetails.characterConnection.characters}
        />
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <hr />
        </div>
      </Grid>
    </Grid>
  )
}

export default CharacterDetailPage

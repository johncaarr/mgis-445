/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useQuery } from '@apollo/client'
import { Button, Grid, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import { useParams, Link } from 'react-router-dom'

import { ErrorMessage, Loading } from '../components/'
import { FilmDetailSummary, GET_FILM_DETAIL } from '../modules/films/'

import type { FilmDetails } from '../types'

export const FilmDetailPage = (): ReactElement => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(GET_FILM_DETAIL, {
    variables: { filmId: id },
  })

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error} />

  const filmDetails: FilmDetails = data.film

  const linkToCharactersList: string = `/characters/${id}`
  const linkToStarshipsList: string = `/starships/${id}`
  const linkToPlanetsList: string = `/planets/${id}`

  return (
    <Grid container spacing={2} style={{ textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography variant='h3'>{filmDetails.title}</Typography>
        <FilmDetailSummary
          director={filmDetails.director}
          openingCrawl={filmDetails.openingCrawl}
          producers={filmDetails.producers}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h4'>{`Characters`}</Typography>
        <Button size='small'>
          <Link to={linkToCharactersList}>{`See Characters List`}</Link>
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h4'>{`Planets`}</Typography>
        <Button size='small'>
          <Link to={linkToPlanetsList}>{`See Planets List`}</Link>
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h4'>{`Starships`}</Typography>
        <Button size='small'>
          <Link to={linkToStarshipsList}>{`See Starships List`}</Link>
        </Button>
      </Grid>
    </Grid>
  )
}

export default FilmDetailPage

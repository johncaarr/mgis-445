/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'

import type { Film } from '../types/'

export interface FilmCardProps {
  film: Film
}

export const FilmCard = (props: FilmCardProps): ReactElement => {
  return (
    <Grid item xs={6} className='Film-card'>
      <Card>
        <CardContent>
          <Typography variant='h4'>{props.film.title}</Typography>
          <Typography variant='subtitle1'>
            {`Release Date: ${props.film.releaseDate}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <Link to={`/films/${props.film.id}`}>{`more info`}</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default FilmCard

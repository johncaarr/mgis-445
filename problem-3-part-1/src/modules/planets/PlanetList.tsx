/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement } from 'react'
import { Grid, Typography } from '@mui/material'

import type { Planet } from '../../types'

export interface PlanetListProps {
  planets: Planet[]
}

export const PlanetList = (props: PlanetListProps): ReactElement => {
  return (
    <Grid container spacing={2} style={{ textAlign: 'center' }}>
      {props.planets.map((planet: Planet, index: number) => (
        <Grid item xs={4} key={index}>
          <div
            style={{
              borderColor: '#000000',
              borderStyle: 'solid',
              borderWidth: '5px',
            }}>
            <div style={{ paddingTop: '10px', paddingBottom: '5px' }}>
              <Typography variant='h5'>{planet.name}</Typography>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Diameter: ${planet.diameter}`}</p>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

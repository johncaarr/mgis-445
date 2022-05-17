/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement } from 'react'
import { Grid, Typography } from '@mui/material'

import type { Starship } from '../../types'

export interface StarshipListProps {
  starships: Starship[]
}

export const StarshipList = (props: StarshipListProps): ReactElement => {
  // sort starships in alphabetical order, then by # of manufacturers
  const starshipsSorted: Starship[] = [...props.starships]
    .sort((a: Starship, b: Starship) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    )
    .sort(
      (a: Starship, b: Starship) =>
        a.manufacturers.length - b.manufacturers.length
    )

  return (
    <Grid container spacing={2} style={{ textAlign: 'center' }}>
      {starshipsSorted.map((starship: Starship, index: number) => (
        <Grid item xs={6} key={index}>
          <div
            style={{
              borderColor: '#000000',
              borderStyle: 'solid',
              borderWidth: '5px',
            }}>
            <div style={{ paddingTop: '10px', paddingBottom: '5px' }}>
              <Typography variant='h5'>{starship.name}</Typography>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Model: ${starship.model}`}</p>
              <p>{`Class: ${starship.starshipClass}`}</p>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <Typography variant='h6'>{`Manufacturers`}</Typography>
              {starship.manufacturers.map(
                (manufacturer: string, index: number) => (
                  <p key={index}>{`* ${manufacturer} *`}</p>
                )
              )}
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Crew: ${starship.crew}`}</p>
              <p>{`Cargo Capacity: ${starship.cargoCapacity}`}</p>
              <p>{`Consumables: ${starship.consumables}`}</p>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Hyperdrive Rating: ${starship.hyperdriveRating}`}</p>
              <p>{`Max Atmosphering Speed: ${
                starship.maxAtmospheringSpeed || 'n/a'
              }`}</p>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

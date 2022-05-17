/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement } from 'react'
import { Grid, Typography } from '@mui/material'

import type { Character } from '../../types'

export interface CharacterListProps {
  characters: Character[]
}

export const CharacterList = (props: CharacterListProps): ReactElement => {
  return (
    <Grid container spacing={2} style={{ textAlign: 'center' }}>
      {props.characters.map((character: Character, index: number) => (
        <Grid item xs={4} key={index}>
          <div
            style={{
              borderColor: '#000000',
              borderStyle: 'solid',
              borderWidth: '5px',
            }}>
            <div style={{ paddingTop: '10px', paddingBottom: '5px' }}>
              <Typography variant='h5'>{character.name}</Typography>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Species: ${
                character.species != null ? character.species.name : 'n/a'
              }`}</p>
              <p>{`Home World: ${character.homeworld.name}`}</p>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Gender: ${character.gender}`}</p>
              <p>{`Birth Year: ${character.birthYear}`}</p>
              <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <hr />
              </div>
              <p>{`Eye Color: ${character.eyeColor}`}</p>
              <p>{`Hair Color: ${character.hairColor}`}</p>
              <p>{`Skin Color: ${character.skinColor}`}</p>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

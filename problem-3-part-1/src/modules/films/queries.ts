/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from '@apollo/client'

export const GET_ALL_FILMS = gql`
  query GET_ALL_FILMS {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`

export const GET_FILM_DETAIL = gql`
  query GET_FILM_DETAIL($filmId: ID) {
    film(id: $filmId) {
      director
      openingCrawl
      title
      producers
      planetConnection {
        planets {
          id
          name
          diameter
        }
      }
      characterConnection {
        characters {
          id
          birthYear
          gender
          hairColor
          height
          homeworld {
            name
          }
          name
          species {
            name
          }
          skinColor
          eyeColor
        }
      }
      starshipConnection {
        starships {
          id
          crew
          hyperdriveRating
          model
          name
          starshipClass
          manufacturers
          length
          maxAtmospheringSpeed
          consumables
          cargoCapacity
        }
      }
    }
  }
`

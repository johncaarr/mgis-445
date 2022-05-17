/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface Film {
  id: string
  title: string
  releaseDate: string
}

export interface Character {
  id: string
  birthYear: string
  gender: string
  hairColor: string
  height: number
  homeworld: {
    name: string
  }
  name: string
  species: {
    name: string
  } | null
  skinColor: string
  eyeColor: string
}

export interface Planet {
  id: string
  name: string
  diameter: number
}

export interface Starship {
  id: string
  crew: string
  hyperdriveRating: number
  model: string
  name: string
  starshipClass: string
  manufacturers: string[]
  length: number
  maxAtmospheringSpeed: number | null
  consumables: string
  cargoCapacity: number
}

export interface FilmDetails {
  title: string
  director: string
  openingCrawl: string
  producers: string[]
  planetConnection: {
    planets: Planet[]
  }
  characterConnection: {
    characters: Character[]
  }
  starshipConnection: {
    starships: Starship[]
  }
}

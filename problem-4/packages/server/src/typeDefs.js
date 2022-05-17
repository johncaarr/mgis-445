/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { gql } from 'apollo-server'

export default gql`
  scalar DateTime

  type Item {
    id: ID!
    name: String!
    description: String!
    imagePath: String
    price: Float!
    vegan: Boolean!
    category: MenuCategory!
    type: MenuType!
  }

  input CreateItemInput {
    name: String!
    description: String!
    imagePath: String
    price: Float!
    vegan: Boolean!
    category: MenuCategory!
    type: MenuType!
  }

  input UpdateItemInput {
    name: String
    description: String
    imagePath: String
    price: Float
    vegan: Boolean
    category: MenuCategory
    type: MenuType
  }

  type Error {
    message: String
    path: String
  }

  type BaseResponse {
    success: Boolean
    errors: [Error]
  }

  type ItemResponse {
    item: Item
    success: Boolean
    errors: [Error]
  }

  type Query {
    findAllItems: [Item]
    findItemById(id: ID!): Item
  }

  type Mutation {
    createItem(input: CreateItemInput!): ItemResponse
    updateItem(id: ID!, input: UpdateItemInput): BaseResponse
    deleteItem(id: ID!): BaseResponse
  }

  enum MenuCategory {
    Alcohol
    Appetizer
    Beverage
    Dessert
    Entree
  }

  enum MenuType {
    Brunch
    Dessert
    Dinner
    Drinks
  }
`

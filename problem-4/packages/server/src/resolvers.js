/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { DateTimeResolver } from 'graphql-scalars'
import { Item } from './model.js'

export default {
  Query: {
    findAllItems: async () => await Item.findAll(),
    findItemById: async (_, { id }) => await Item.findByPk(id),
  },

  Mutation: {
    createItem: async (_, { input }) => {
      const item = await Item.create({ ...input, complete: false })
      return { item: item, success: true }
    },
    updateItem: async (_, { id, input }) => {
      await Item.update({ ...input }, { where: { id: id } })
      return { success: true }
    },
    deleteItem: async (_, { id }) => {
      const item = await Item.findByPk(id)
      if (!item) throw new Error(`Item with id ${id} was not found.`)
      await item.destroy()
      return { success: true }
    },
  },

  MenuCategory: {
    Alcohol: 'Alcohol',
    Appetizer: 'Appetizer',
    Beverage: 'Beverage',
    Dessert: 'Dessert',
    Entree: 'Entree',
  },

  MenuType: {
    Brunch: 'Brunch',
    Dessert: 'Dessert',
    Dinner: 'Dinner',
    Drinks: 'Drinks',
  },

  DateTime: DateTimeResolver,
}

/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { DataTypes, Model, Sequelize } from 'sequelize'

class Item extends Model {}

const sequelize = new Sequelize('sqlite:./data/database.sqlite')

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imagePath: { type: DataTypes.STRING, allowNull: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    vegan: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    category: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
  }
)

await sequelize.sync()

export { Item }

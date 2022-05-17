/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { DataTypes, Model, Sequelize } from 'sequelize'
import { books } from '../data/books.js'

class Book extends Model {}

const sequelize = new Sequelize('sqlite:./data/book-catalog.sqlite')

Book.init(
  {
    bookId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bookTitle: { type: DataTypes.STRING, allowNull: false },
    bookCategory: { type: DataTypes.INTEGER, allowNull: false },
    bookSubCategory: { type: DataTypes.INTEGER, allowNull: false },
    bookDescription: { type: DataTypes.STRING, allowNull: false },
    bookPrice: { type: DataTypes.FLOAT, allowNull: false },
    bookImgFile: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize }
)

await sequelize.sync({ force: true })
await Book.bulkCreate(books)

export { Book }

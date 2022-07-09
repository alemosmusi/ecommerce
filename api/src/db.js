require('dotenv').config()
const { Sequelize } = require('sequelize')

const Categories = require('./models/categories.js')
const Genders = require('./models/genders.js')
const Ordens = require('./models/ordens.js')
const Products = require('./models/products.js')
const Roles = require('./models/roles.js')
const Users = require('./models/users.js')
const Colors = require('./models/colors.js')
const Questions = require('./models/questions.js')

const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/ecommerce`, {
    logging: false,
    native: false,
  }
);

const modelCategories = Categories(sequelize)
const modelGenders = Genders(sequelize)
const modelOrdens = Ordens(sequelize)
const modelProducts = Products(sequelize)
const modelRoles = Roles(sequelize)
const modelUsers = Users(sequelize)
const modelColors = Colors(sequelize)
const modelQuestions = Questions(sequelize)

module.exports = {
  sequelize,
  modelCategories,
  modelGenders,
  modelOrdens,
  modelProducts,
  modelRoles,
  modelUsers,
  modelColors,
  modelQuestions
}
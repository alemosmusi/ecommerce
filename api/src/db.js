require('dotenv').config()
const { Sequelize } = require('sequelize')

const Brands = require('./models/brands.js')
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

const modelBrands = Brands(sequelize)
const modelCategories = Categories(sequelize)
const modelGenders = Genders(sequelize)
const modelOrdens = Ordens(sequelize)
const modelProducts = Products(sequelize)
const modelRoles = Roles(sequelize)
const modelUsers = Users(sequelize)
const modelColors = Colors(sequelize)
const modelQuestions = Questions(sequelize)

modelProducts.belongsToMany(modelCategories, { through: 'product_category' })
modelCategories.belongsToMany(modelProducts, { through: 'product_category' })

modelProducts.belongsTo(modelBrands)
modelBrands.hasMany(modelProducts)

modelProducts.belongsTo(modelGenders)
modelGenders.hasMany(modelProducts)

modelProducts.belongsTo(modelColors)
modelColors.hasMany(modelProducts)

modelUsers.belongsTo(modelRoles)
modelRoles.hasMany(modelUsers)

modelUsers.belongsToMany(modelOrdens, { through: 'user_order' })
modelOrdens.hasOne(modelUsers)

modelOrdens.hasMany(modelProducts)
modelProducts.belongsToMany(modelOrdens, { through: 'product_order' })


module.exports = {
  sequelize,
  modelBrands,
  modelCategories,
  modelGenders,
  modelOrdens,
  modelProducts,
  modelRoles,
  modelUsers,
  modelColors,
  modelQuestions
}
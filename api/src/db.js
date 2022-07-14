require('dotenv').config()
const { Sequelize } = require('sequelize')

const Brands = require('./models/brands')
const Categories = require('./models/categories')
const Genders = require('./models/genders')
const Ordens = require('./models/ordens')
const Products = require('./models/products')
const Roles = require('./models/roles')
const Users = require('./models/users')
const Colors = require('./models/colors')
const Reviews = require('./models/reviews')
const ShopCart = require('./models/shopcart')
const Questions = require('./models/questions')

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
const modelReviews = Reviews(sequelize)
const modelShopcart = ShopCart(sequelize)
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
  modelReviews,
  modelShopcart,
  modelQuestions
}
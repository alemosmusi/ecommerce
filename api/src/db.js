require('dotenv').config()
const { Sequelize } = require('sequelize')

const Products = require('./models/products.js')
const Ordens = require('./models/ordens.js')
const Users = require('./models/users.js')
const Roles = require('./models/rols.js')
const Categorys = require('./models/categorys.js')

const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/ecommerce`, {
    logging: false,
    native: false,
  }
);

const modelProducts = Products(sequelize)
const modelUsers = Users(sequelize)
const modelOrdens = Ordens(sequelize)
const modelRoles = Roles(sequelize)
const modelCategorys = Categorys(sequelize)

modelProducts.belongsToMany(modelOrdens, { through: 'products_orders'})
modelOrdens.belongsToMany(modelProducts, { through: 'products_orders'})

module.exports = {
  sequelize,
  modelProducts,
  modelUsers,
  modelOrdens,
  modelRoles,
  modelCategorys
}
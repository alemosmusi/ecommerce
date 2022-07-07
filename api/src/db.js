require('dotenv').config()
const { Sequelize } = require('sequelize')



const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/ecommerce`, {
    logging: false,
    native: false,
  }
);

const { Products, Ordens} = Sequelize.models

Products.belongsToMany(Ordens, { through: 'products_orders'})
Ordens.belongsToMany(Products, { through: 'products_orders'})

const modelProducts = Products(sequelize)

module.exports = {
  sequelize,
  modelProducts
}
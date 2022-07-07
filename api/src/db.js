require('dotenv').config()
const { Sequelize } = require('sequelize')

const Template  = require('./models/templates.js')

const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/ecommerce`, {
    logging: false,
    native: false,
  }
);

const modelTemplate = Template(sequelize)

module.exports = {
  sequelize,
  modelTemplate
}
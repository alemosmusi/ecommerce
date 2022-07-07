const { Router } = require('express')

const getShoes = require('../controllers/shoes.js')

const routes = Router() 

routes.get('/shoes', getShoes)

module.exports = routes
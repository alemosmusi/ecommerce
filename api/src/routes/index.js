const { Router } = require('express')

const { getShoes, createShoes } = require('../controllers/shoes.js')
const { getCategories, createCategory } = require('../controllers/categories.js')
const { getGenders, createGenders } = require('../controllers/genders.js')

const routes = Router() 

routes.get('/shoes', getShoes)
routes.post('/shoes', createShoes)

routes.get('/categories', getCategories)
routes.post('/categories', createCategory)

routes.get('/genders', getGenders)
routes.post('/genders', createGenders)

module.exports = routes
const { Router } = require('express')

const { getShoes, createShoes, getDetailsProduct } = require('../controllers/shoes.js')
const { getCategories, createCategory } = require('../controllers/categories.js')
const { getGenders, createGenders } = require('../controllers/genders.js')

const routes = Router() 

routes.get('/shoes', getShoes)
routes.post('/shoes', createShoes)
//delete

routes.get('/categories', getCategories)
routes.post('/categories', createCategory)
//delete

routes.get('/genders', getGenders)
routes.post('/genders', createGenders)
//delete

routes.get('/getDetailsProduct/:id', getDetailsProduct)

module.exports = routes
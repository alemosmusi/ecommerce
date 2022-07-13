const { Router } = require('express')

const { getShoes, createShoes, getDetailsProduct, deleteShoes } = require('../controllers/shoes.js')
const { getBrands, createBrands, deleteBrands } = require('../controllers/brands.js')
const { getCategories, createCategory, deleteCategory } = require('../controllers/categories.js')
const { getGenders, createGenders, deleteGender } = require('../controllers/genders.js')
const { getColors, createColor, deleteColor } = require('../controllers/colors.js')
const { getQuestions, createQuestions, deleteQuestions } = require('../controllers/quetions.js')

const routes = Router() 

routes.get('/shoes' , getShoes)
routes.post('/shoes', createShoes)
routes.delete('/shoes/:id', deleteShoes)

routes.get('/brands', getBrands)
routes.post('/brands', createBrands)
routes.delete('/brands/:name', deleteBrands)

routes.get('/categories', getCategories)
routes.post('/categories', createCategory)
routes.delete('/categories/:name', deleteCategory)

routes.get('/genders', getGenders)
routes.post('/genders', createGenders)
routes.delete('/genders/:name', deleteGender)

routes.get('/colors', getColors)
routes.post('/colors', createColor)
routes.delete('/colors/:name', deleteColor)

routes.get('/questions', getQuestions)
routes.post('/questions', createQuestions)
routes.delete('/questions/:id', deleteQuestions)

routes.get('/getDetailsProduct/:id', getDetailsProduct)

//routes.get('/login', logIn)
//routes.get('/users')



module.exports = routes
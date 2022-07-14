const { Router } = require('express')

const { getShoes, createShoes, productDetails, updateShoes } = require('../controllers/shoes')
const { getBrands, createBrands, deleteBrands, updateBrands, getBrandProducts} = require('../controllers/brands')
const { getCategories, createCategories, deleteCategories, updateCategories } = require('../controllers/categories')
const { getGenders, createGenders, updateGenders } = require('../controllers/genders')
const { getColors, createColor, updateColors } = require('../controllers/colors')
const { getQuestions, createQuestions, deleteQuestions, updateQuestions } = require('../controllers/quetions')
const { getUsers } = require('../controllers/users')

const routes = Router() 

routes.get('/shoes' , getShoes)
routes.post('/shoes', createShoes)
//routes.put('/shoes', updateShoes)

routes.get('/brands', getBrands)
routes.get('/brandProducts/:id', getBrandProducts)
routes.post('/brandCreate', createBrands)
routes.delete('/brandDelete', deleteBrands)
routes.put('/brandUpdate', updateBrands)

routes.get('/categories', getCategories)
routes.post('/categories', createCategories)
routes.delete('/categories', deleteCategories)
//routes.put('/categories?name', updateCategories)

routes.get('/genders', getGenders)
routes.post('/genders', createGenders)
//routes.delete('/genders/:name', deleteGender)
//routes.put('/genders?name', updateGenders)

routes.get('/colors', getColors)
routes.post('/colors', createColor)
//routes.delete('/colors/:name', deleteColor)
//routes.put('/colors?name', updateColors)

routes.get('/questions', getQuestions)
routes.post('/questions', createQuestions)
routes.delete('/questions/:id', deleteQuestions)
//routes.put('/questions?id', updateQuestions)

routes.get('/productDetails/:id', productDetails)

//routes.get('/login', logIn)

routes.get('/users', getUsers)
//routes.put('/userClient', updateUserClient)
//routes.put('/userAdmin', updateUserAdmin)
//routes.delete('/userDelete', deleteUser)

module.exports = routes
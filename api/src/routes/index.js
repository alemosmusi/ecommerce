const { Router } = require('express')

const { getProducts, createProduct, productDetails, updateProduct } = require('../controllers/shoes')
const { getBrands, createBrand, updateBrand, getProductsBrand } = require('../controllers/brands')
const { getCategories, createCategory, updateCategory, getProductsCategory } = require('../controllers/categories')
const { getGenders, createGender, updateGender, getProductsGender } = require('../controllers/genders')
const { getColors, createColor, updateColor, getProductsColor } = require('../controllers/colors')
const { getRoles, createRole, updateUserRole } = require('../controllers/roles')
const { getQuestions, createQuestion, updateQuestion, deleteQuestion } = require('../controllers/quetions')
const { getOrdens, createOrden, updateOrden, getOrdensUser } = require('../controllers/ordens')
const { getUsers } = require('../controllers/users')

const routes = Router()

routes.get('/shoes', getProducts)
routes.post('/shoes', createProduct)
routes.put('/shoes/:id', updateProduct)
routes.get('/productDetails/:id', productDetails)

routes.get('/brands', getBrands)
routes.post('/brands', createBrand)
routes.put('/brands/:id', updateBrand)
routes.get('/productsBrand/:id', getProductsBrand)

routes.get('/categories', getCategories)
routes.post('/categories', createCategory)
routes.put('/categories/:id', updateCategory)
routes.get('/productsCategory/:id', getProductsCategory)

routes.get('/genders', getGenders)
routes.post('/genders', createGender)
routes.put('/genders/:id', updateGender)
routes.get('/productsGender/:id', getProductsGender)

routes.get('/colors', getColors)
routes.post('/colors', createColor)
routes.put('/colors/:id', updateColor)
routes.get('/productsColor/:id', getProductsColor)

routes.get('/questions', getQuestions)
routes.post('/questions', createQuestion)
routes.put('/questions/:id', updateQuestion)
routes.delete('/questions/:id', deleteQuestion)

routes.get('/roles', getRoles)
routes.post('/roles', createRole)
routes.put('/rolesUser/:id', updateUserRole)

routes.get('/ordens', getOrdens)
routes.post('/ordens/:id', createOrden)
routes.put('/ordens/:id', updateOrden)
routes.get('/ordensUser/:id', getOrdensUser)

routes.get('/users', getUsers)

module.exports = routes

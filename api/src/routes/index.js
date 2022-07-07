const { Router } = require('express')

const { getTemplates, createTemplate } = require('../controllers/templates.js')

const routes = Router() 

routes.get('/templates', getTemplates)
routes.post('/templates', createTemplate)

module.exports = routes
const express = require('express')
const logger = require('morgan')
 
const routes = require('./routes')

const app = express()

app.use(express.urlencoded({extended: true, limit: '50mb'}))
app.use(express.json({limit: '50mb'}))
app.use(logger("dev"))

app.use('/', routes)

module.exports = app
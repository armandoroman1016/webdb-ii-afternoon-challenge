const express = require('express')
const carRoutes = require('../routes/car-routes.js')

const server = express()

server.use(express.json())
server.use('/api/cars', carRoutes)

module.exports = server

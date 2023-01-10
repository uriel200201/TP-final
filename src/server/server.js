const express = require('express')
const prodctRoutes = require('../routes/productos')
const clientRoutes = require('../routes/clients')
const server = express()

server.use(express.json())
server.use('/api', prodctRoutes)
server.use('/api-client', clientRoutes)

module.exports = server

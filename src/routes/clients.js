const express = require('express')
const {
	getClientsController,
	getClientByIdController,
} = require('../controller/clientController')
const router = express.Router()
router.get('/clientes', getClientsController)
router.get('/clientes/:id', getClientByIdController)

module.exports = router

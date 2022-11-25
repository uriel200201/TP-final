const express = require('express')
const {
	addProductController,
	getProductsController,
	getProductsByIdController,
} = require('../controller/productController')
const {
	getClientsController,
	getClientByIdController,
} = require('../controller/clientController')

const router = express.Router()

router.get('/productos', getProductsController)
router.get('/productos/:id', getProductsByIdController)
router.get('/clientes', getClientsController)
router.get('/clientes/:id', getClientByIdController)
router.put('/productos/:id')
router.post('/productos/', addProductController)
router.delete('/productos/:id')

module.exports = router

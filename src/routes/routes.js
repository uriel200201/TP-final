const express = require('express')
const {
	addProductController,
	getProductsController,
	getProductsByIdController,
	updateProductController,
	deleteProductController,
} = require('../controller/productController')
const {
	getClientsController,
	getClientByIdController,
} = require('../controller/clientController')
const {
	addProduct,
	putProduct,
	getDelProduct,
} = require('../validator/producto')

const router = express.Router()

router.get('/productos', getProductsController)
router.get('/productos/:idProducto', getDelProduct, getProductsByIdController)
router.get('/clientes', getClientsController)
router.get('/clientes/:id', getClientByIdController)
router.put('/productos/:idProducto', putProduct, updateProductController)
router.post('/productos/', addProduct, addProductController)
router.delete('/productos/:idProducto', getDelProduct, deleteProductController)

module.exports = router

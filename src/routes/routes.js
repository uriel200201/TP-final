const express = require('express')
const {
	addProductController,
	getProductsController,
} = require('../controller/productController')

const router = express.Router()

router.get('/productos', getProductsController)
router.get('/productos/:id')
router.put('/productos/:id')
router.post('/productos/', addProductController)
router.delete('/productos/:id')

module.exports = router

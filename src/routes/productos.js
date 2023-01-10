const express = require('express')
const {
	addProductController,
	getProductsController,
	getProductsByIdController,
	updateProductController,
	deleteProductController,
} = require('../controller/productController')

const {
	addProduct,
	putProduct,
	getDelProduct,
} = require('../validator/producto')

const router = express.Router()

router.use((req, res, next) => {
	const method = req.method
	const url = req.url.split('/').filter((elem) => elem !== '')
	if ((method === 'PUT' || method === 'DELETE') && url.length > 1) {
		next
	}
	res.status(500).json({
		message: 'No se recibió un id de producto',
	})
})

router.get('/', getProductsController)
router.get('/:idProducto', getDelProduct, getProductsByIdController)
router.put('/:idProducto', putProduct, updateProductController)
router.delete('/:idProducto', getDelProduct, deleteProductController)
router.post('/', addProduct, addProductController)

module.exports = router
